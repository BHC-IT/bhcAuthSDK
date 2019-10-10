
// function readBlob(blob){
// 	return (new Promise((resolve, reject) => {
// 		var reader = new FileReader();
// 		reader.onload = function() {
// 			resolve(reader.result);
// 		}
// 		reader.readAsText(blob);
// 	}));
// }

import XMLHttpRequestAsync from './httpWrapper'

function composeRequest(object){
	let stringed = "";
	Object.keys(object).forEach((key) => {
		if (stringed.length !== 0)
			stringed += "&"
		stringed += `${key}=${object[key]}`
	});
	return (stringed);
}

export default class Query {
	constructor(url){
		this.url = url;
	}

	async query(endpoint, method, header, body = {}){
		var request = new XMLHttpRequestAsync();
		request.open(method, `http://${this.url}${endpoint}`, true);
		Object.keys(header).forEach((key) => {
			request.setRequestHeader(key, header[key]);
		});

		let res = null;
		if (method === 'GET')
			res = await request.send(composeRequest(body));
		else
			res = await request.send(composeRequest(body));
		return (res);
	}

}