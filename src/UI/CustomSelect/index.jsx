import React from 'react'
import Select from 'react-select'

import dollar from "../../assets/img/SelectItemFlag/use 1.png";
import euro from "../../assets/img/SelectItemFlag/euro.png";
import rub from "../../assets/img/SelectItemFlag/rus.png";
import tenge from "../../assets/img/SelectItemFlag/KZK.png";

const selectItems = [
	{
		value: 'USA',
		label: (
			<div style={{display: 'flex' , alignItems: 'center'}}>
				<img style={{width: '50px' , height: '30px'}} src={dollar} alt=""/>
				<p style={{marginLeft: '10px'}}>USA</p>
			</div>
		),
	},
	{
		value: 'EURO',
		label: (
			<div style={{display: 'flex' , alignItems: 'center'}}>
				<img style={{width: '50px' , height: '30px'}} src={euro} alt=""/>
				<p style={{marginLeft: '10px'}}><b>EURO</b> Евро</p>
			</div>
		),
	},
	{
		value: 'RUB',
		label: (
			<div style={{display: 'flex' , alignItems: 'center'}}>
				<img style={{width: '50px' , height: '30px'}} src={rub} alt=""/>
				<p style={{marginLeft: '10px'}}><b>RUB</b> Российский рубль</p>
			</div>
		),
	},
	{
		value: 'KZT',
		label: (
			<div onClick={() => console.log('kzt')} style={{display: 'flex' , alignItems: 'center'}}>
				<img style={{width: '50px' , height: '30px'}} src={tenge} alt=""/>
				<p style={{marginLeft: '10px'}}><b>KZT</b> Казахстанская валюта</p>
			</div>
		),
	},
]

const CustomSelect = () => {
	return (
		<React.Fragment>
			<Select placeholder={'Выберите валюту'} options={selectItems}/>
		</React.Fragment>
	)
}

export default CustomSelect