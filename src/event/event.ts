import { RpcRun } from '../types';


export const watch = <I = any, O = any>(input: I) => {

	if (!input) {
		throw new Error('an initial value must be entered');
	}

	async function interval(run: RpcRun<I, O>) {
		const maxInterval = 10;
		let count = 0;
		let runResult: O | any | undefined;

		return new Promise<O>(async (resolve, reject) => {
			const interval = setInterval(async () => {
				try {
					const result = await run(input);
					if (result != null || count >= maxInterval) {
						clearInterval(interval);
						runResult = result;
						resolve(runResult);
					}
				} catch (e) {
					clearInterval(interval);
					runResult = e;
					reject(runResult);
				}
				count++;
			}, 1000);
		});
	}

	return {
		next: (rpc: RpcRun<I, O>) => interval(rpc),
	};
};