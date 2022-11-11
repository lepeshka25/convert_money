import React from 'react';
import Main from "./page/Main";
import {CircularProgress} from "@mui/material";
import {useSelector} from "react-redux";
import {progressSelect} from "./store/progress/progress-select";
import Header from "./components/Header";
import cs from './app.module.scss'

const App = () => {
	const state = useSelector(progressSelect)

	return (
		<div className={cs.app}>

			{
				state && (
					<div
						style={{
							background: "rgba(0,0,0,0.2)",
							position: 'fixed',
							top: 0,
							left: 0,
							zIndex: '100000',
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

			<Header/>
			<Main/>
		</div>
	);
};

export default App;