import React from 'react';
import Calculator from "./components/Calculator";
import cs from './style.module.scss'

const Main = () => {
	return (
		<div className={cs.main}>

			<Calculator />

		</div>
	);
};

export default React.memo(Main);


{/*<Header/>*/}

{/*<div className={cs.container}>*/}
{/*	{*/}
{/*		end.map((item) => (*/}
{/*			<div key={item} className={cs.container_diagram}>*/}
{/*				<Template props={data[item]}/>*/}
{/*			</div>*/}
{/*		))*/}
{/*	}*/}
{/*</div>*/}

{/*<Footer/>*/}