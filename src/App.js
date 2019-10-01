import React from 'react';

import bhcAuth from './bhcAuthWrapper'

function App() {
	let auth = new bhcAuth("test", null);
	auth.login('valentin', '1234').then(async (t) => {
		console.log(t.getInfoUser());
		console.log(await t.refreshAccessToken());
	}).catch((e) => console.log(e));
	return (
		<div className="App">
			hello
		</div>
	);
}

export default App;
