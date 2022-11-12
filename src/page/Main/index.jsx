import React from 'react';
import cs from './style.module.scss'
import {useSelector} from "react-redux";
import Template from "../../components/diagram/views/stockchart/Template";
// import Calculator from "./components/Calculator";
import LineChart from "../../components/diagram/assets/canvasjs.react";
import Calculator from "./components/Calculator";

const Main = () => {
	const data = useSelector(state => state)
	const end = Object.keys(data)

	console.log(data.countries)
	// console.log(data)

	return (
		<div className={cs.main}>

			<div className={cs.container_info}>
				<div className={cs.contianer_calculator}>
					<Calculator />
				</div>

				<div className={cs.container_item}>
					{
						Object.values(data.countries).map(item => (
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

			{/*<div className={cs.container}>*/}
			{/*	{*/}
			{/*		end.map((item) => (*/}
			{/*					<div key={item} className={cs.container_diagram}>*/}
			{/*						<Template props={data[item]}/>*/}
			{/*					</div>*/}
			{/*				))*/}
			{/*	}*/}
			{/*</div>*/}

		</div>
	);
};

export default React.memo(Main);


{/*<div className={cs.container}>*/}
{/*	{data && <LineChart data={data}/>}*/}
{/*</div>*/}

{/*<div className={cs.container_calculator}>*/}
{/*	<Calculator />*/}
{/*</div>*/}

{/*<div className={cs.container}>*/}
{/*	<div className={cs.container_diagram}>*/}
{/*		<Template props={data[end[0]]}/>*/}
{/*	</div>*/}
{/*</div>*/}

{/*<div className={cs.container}>*/}
{/*	{*/}
{/*		end.map((item) => (*/}
{/*					<div key={item} className={cs.container_diagram}>*/}
{/*						<Template props={data[item]}/>*/}
{/*					</div>*/}
{/*				))*/}
{/*	}*/}
{/*</div>*/}