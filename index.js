const bhcAuth = require('./src/bhcAuthWrapper.js');
const Query = require('./src/query.js');
const User = require('./src/user.js');
const {getUri, setUri, getQuery, setQuery} = require('./src/queryHold');
const XMLHttpRequestAsync = require('./src/httpWrapper.js');

global.XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

module.exports = {getUri, getQuery, Query, User, XMLHttpRequestAsync, bhcAuth, bhcAuth}
