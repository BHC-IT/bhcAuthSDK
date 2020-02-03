var uri = null;
var query = null;

function getUri(){
	return uri
}

function setUri(nuri){
	uri = nuri;
	return (uri);
}

function getQuery(){
	return query
}

function setQuery(nquery){
	query = nquery;
	return (query);
}

module.exports = {getUri, setUri, getQuery, setQuery}
