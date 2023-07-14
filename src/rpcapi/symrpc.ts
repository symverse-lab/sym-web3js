'use strict';

import promiseToCallback from 'promise-to-callback';
import { ISymRPC, Options, RpcPayload, Provider } from '../types';

function SymRPC(cprovider: Provider, options?: Options): ISymRPC {
    const optionsObject: Options = options || {};

    const self: any = {
        options: {
            jsonSpace: optionsObject.jsonSpace || 0,
            max: optionsObject.max || 9999999999999
        },
        idCounter: Math.floor(Math.random() * (optionsObject.max || 9999999999999)),
        setProvider(provider: Provider) {
            if (typeof provider !== 'object') {
                throw new Error('the SymRPC object requires that the first input \'provider\' must be an object, got \'' + typeof provider + '\' (i.e. \'const eth = new SymRPC(provider);\')');
            }

            self.currentProvider = provider;
        },
        sendAsync(payload: RpcPayload, callback?: (err: any, response: any) => void) {
            self.idCounter = self.idCounter % self.options.max;
            const parsedPayload = createPayload(payload, self.idCounter++);

            const promise = new Promise(function (resolve, reject) {
                self.currentProvider.sendAsync(parsedPayload, function (err, response) {
                    const responseObject = response || {};
                    let payloadErrorMessage;
                    let payloadError;
                    if (err) {
                        payloadErrorMessage = String(err);
                        payloadError = new Error(payloadErrorMessage);
                        payloadError.value = err;
                        reject(payloadError);
                        return;
                    } else if (responseObject.error) {
                        payloadError = responseObject.error;
                        reject(payloadError);
                    }
                    resolve(responseObject.result);
                });
            });

            if (callback) {
                // connect promise resolve handlers to callback
                return promiseToCallback(promise)(callback);
            }

            // only return promise if no callback specified
            return promise;
        }
    };

    self.setProvider(cprovider);

    return self;
}

function createPayload(data: RpcPayload, id: number): RpcPayload {
    // 기본 payload 객체 정의
    let payload: RpcPayload = {
        id: id,
        jsonrpc: '2.0',
        params: []
    };

    // data 객체에 params 프로퍼티가 있을 경우
    if (data.params && data.params.length > 0) {
        payload.params = data.params;
    }

    return { ...payload, ...data };
}

export default SymRPC;