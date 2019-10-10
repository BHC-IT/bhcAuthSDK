import Query from './query'
import User from './user'

var uri = null;
var query = null;

export default class bhcAuth {
	constructor(client_ID, client_secret, stage = "prod"){
		this.client_ID = client_ID;
		this.client_secret = client_secret;
		this.query = new Query(stage === "prod" ? "127.0.0.1:9090" : stage);
		if (uri === null)
			uri = stage === "prod" ? "127.0.0.1:9090" : stage
		if (query === null)
			query = this.query;
	}

	async login(username, password){
		try {
			let res = await this.query.query("/auth/login", "POST", {'Content-Type':'application/x-www-form-urlencoded'}, {
				username:username,
				password:password,
				grant_type:'password',
				client_id:this.client_ID,
				client_secret:this.client_secret
			});
			res = JSON.parse(res);
			let user = new User(res);
			return (user);
		} catch (e) {
			throw e;
		}
	}

	async refresh(refresh_token){
		try {
			let res = await this.query.query("/auth/login", "POST", {'Content-Type':'application/x-www-form-urlencoded'}, {
				refresh_token:refresh_token,
				grant_type:'refresh_token',
				client_id:this.client_ID,
				client_secret:this.client_secret
			});
			res = JSON.parse(res);
			let user = new User(res);
			return (user);
		} catch (e) {
			throw e;
		}
	}

	async verify(access_token){
		try {
			let res = await this.query.query("/info/verifyToken", 'GET', {Authorization:`Bearer ${access_token}`});
			res = JSON.parse(res);
			if (res.message === "validated")
				return (true);
			else
				throw ("invlide token");
		} catch (e) {
			throw e;
		}
	}

}

function getUri(){
	return uri
}

function getQuery(){
	return query
}

export {getUri, getQuery}