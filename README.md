#install

```bash
npm -i -s @bhc/bhcauthsdk
```

#import

```js
import bhcAuth, {getUri, getQuery, Query, User, XMLHttpRequestAsync} from '@bhc/bhcauthsdk'
```

#usage
##login
```js
let auth = new bhcAuth(client_id, client_secret);
auth.login(user_login, user_password).then(user => {
	console.log(user.getInfoUser());
});
```

#bhcAuth
##methods
```js
constructor(client_ID, client_secret)
async login(username, password)
async refresh(refresh_token)
async verify(access_token)
```

#user
##methods
```js
constructor(obj)
getAccessToken()
getInfoUser()
getRefreshToken()
async refreshAccessToken()
async changePassword(old_password, new_password)
```