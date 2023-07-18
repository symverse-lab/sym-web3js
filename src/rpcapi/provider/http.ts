import axios from 'axios';

function invalidResponseError(result, host) {
	const message = !!result && !!result.error && !!result.error.message ? `[axios] ${result.error.message}` : `[axios] Invalid JSON RPC response from host provider ${host}: ${JSON.stringify(result, null, 2)}`;
	return new Error(message);
}

class HttpProvider {

	private host: string;
	private timeout: number;

	constructor(host, timeout = 0) {
		if (typeof host !== 'string') {
			throw new Error('[http] the HttpProvider instance requires that the host be specified (e.g. `new HttpProvider("http://localhost:8545")` or via service like infura `new HttpProvider("http://ropsten.infura.io")`)');
		}

		this.host = host;
		this.timeout = timeout;
	}

	sendAsync(payload, callback) {
		const self = this;

		return axios.post(self.host, payload, {
			adapter: typeof window !== 'undefined' ? 'xhr' : 'http',
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
				let errorMessage = `[axios] Error sending HTTP request: ${error.message}`;
				if (error.response && error.response.data) {
					const { data } = error.response;
					errorMessage = invalidResponseError(data, self.host).message;
				}
				callback(new Error(errorMessage), null);
			});
	}
}

export default HttpProvider;