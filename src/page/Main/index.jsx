import React from 'react';
import cs from './style.module.scss'
import {useSelector} from "react-redux";
import Template from "../../components/diagram/views/Template";
import Calculator from "./components/Calculator";

const Main = () => {
	const data = useSelector(state => state.data)
	const end = Object.keys(data)

	return (
		<div className={cs.main}>

			<div className={cs.container_calculator}>
				<Calculator />
			</div>

			<div className={cs.container}>
			{
				end.map((item) => (
							<div key={item} className={cs.container_diagram}>
								<Template props={data[item]}/>
							</div>
						))
			}
			</div>

		</div>
	);
};

export default React.memo(Main);;