import React from 'react';
import Template from "./components/diagram/views/Template";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {useSelector} from "react-redux";
import cs from './app.module.scss'

const App = () => {
	const data = useSelector(state => state.data)
	const end = Object.keys(data)


	return (
		<div className={cs.app}>
			<Header/>

			<div className={cs.container_diagram}>
				{
					end.map((item) => (
						<Template key={item} props={data[item]}/>
					))
				}
			</div>
			<Footer/>
		</div>
	);
};

export default App;