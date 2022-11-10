import React from 'react';
import CustomSelect from "../../UI/CustomSelect";
import cs from './style.module.scss'

const Main = () => {
	return (
		<div className={cs.main}>

			<div className={cs.container_select}>
				<CustomSelect/>
			</div>

		</div>
	);
};

export default Main;


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