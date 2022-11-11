import React from 'react';
import Main from "./page/Main";
import {CircularProgress} from "@mui/material";
import {useSelector} from "react-redux";
import {progressSelect} from "./store/progress/progress-select";
import Header from "./components/Header";
import cs from './app.module.scss'

const App = () => {
	const state = useSelector(progressSelect)

	if(state){
		return (
			<div
				style={{
					background: "rgba(0,0,0,0.2)",
					width: '100%',
					height: '100vh',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center'
				}}
			>
				<CircularProgress />
			</div>
		)
	}

	return (
		<div className={cs.app}>
			<Header/>
			<Main/>
		</div>
	);
};

export default App;