import React from 'react';
import {useSelector} from "react-redux";
import Template from "../../components/diagram/views/stockchart/Template";
import Calculator from "./components/Calculator";
import cs from './style.module.scss'

const Main = () => {
	const data = useSelector(state => state.countries)

	return (
		<div className={cs.main}>

			<div className={cs.container_info}>
				<div className={cs.contianer_calculator}>
					<Calculator />
				</div>

				<div className={cs.container_item}>
					{
						Object.values(data).map(item => (
							<div key={item.title} className={cs.item}>
								<div className={cs.container_left}>
									{item.title}
								</div>
								<div className={cs.container_right}>
									{item.money}
								</div>
							</div>
						))
					}
				</div>
			</div>

			<div className={cs.container}>
				<Template/>
			</div>

		</div>
	);
};

export default React.memo(Main);