# install

```bash
npm -i -s @bhc/bhcauthsdk
```

# import

```js
// in es6
import bhcAuth, {getUri, getQuery, Query, User, XMLHttpRequestAsync} from '@bhc/bhcauthsdk'

// in node
require = require("@std/esm")(module) // or use --experimental-modules flag
const bhcAuth = require('@bhc/bhcauthsdk').default
```

# usage
## create a user
```js
let auth = new bhcAuth(client_id, client_secret);

auth.createUser(user_login, user_password).then(user => {
});
```

## login
```js
let auth = new bhcAuth(client_id, client_secret);

auth.login(user_login, user_password).then(user => {
	console.log(user.getInfoUser());
});
```

# bhcAuth
## methods
```js
constructor(client_ID, client_secret)
async login(username, password)
async refresh(refresh_token)
async verify(access_token)
```

# user
## methods
```js
constructor(obj)
async createUser(username, password)
getAccessToken()
getInfoUser()
getRefreshToken()
async refreshAccessToken()
async changePassword(old_password, new_password)
```