import axios from 'axios';

function invalidResponseError(result, host) {
	const message = !!result && !!result.error && !!result.error.message ? `[ethjs-provider-http] ${result.error.message}` : `[ethjs-provider-http] Invalid JSON RPC response from host provider ${host}: ${JSON.stringify(result, null, 2)}`;
	return new Error(message);
}

class HttpProvider {

	private host: string;
	private timeout: number;

	constructor(host, timeout = 0) {
		if (!(this instanceof HttpProvider)) {
			throw new Error('[ethjs-provider-http] the HttpProvider instance requires the "new" flag in order to function normally (e.g. `const eth = new Eth(new HttpProvider());`).');
		}
		if (typeof host !== 'string') {
			throw new Error('[ethjs-provider-http] the HttpProvider instance requires that the host be specified (e.g. `new HttpProvider("http://localhost:8545")` or via service like infura `new HttpProvider("http://ropsten.infura.io")`)');
		}

		this.host = host;
		this.timeout = timeout;
	}

	sendAsync(payload, callback) {
		const self = this;

		axios.post(self.host, payload, {
			headers: {
				'Content-Type': 'application/json',
			},
			timeout: self.timeout,
		})
			.then((response) => {
				const { data } = response;
				callback(null, data);
			})
			.catch((error) => {
				let errorMessage = `[ethjs-provider-http] Error sending HTTP request: ${error.message}`;
				if (error.response && error.response.data) {
					const { data } = error.response;
					errorMessage = invalidResponseError(data, self.host).message;
				}
				callback(new Error(errorMessage), null);
			});
	}
}

export default HttpProvider;