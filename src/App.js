import React from 'react';
import Main from "./page/Main";
import cs from './app.module.scss'

const App = () => {


	return (
		<div className={cs.app}>
			<Main/>
		</div>
	);
};

export default App;