import React from 'react'
import Select from 'react-select'

import dollar from "../../assets/img/SelectItemFlag/dollar.png";
import euro from "../../assets/img/SelectItemFlag/euro.png";
import rub from "../../assets/img/SelectItemFlag/rub.png";
import tenge from "../../assets/img/SelectItemFlag/tenge.png";

const selectItems = [
	{
		value: 'USA',
		label: (
			<div style={{display: 'flex' , alignItems: 'center'}}>
				<img style={{width: '30px' , height: '30px'}} src={dollar} alt=""/>
				<p style={{marginLeft: '10px'}}>USA</p>
			</div>
		),
	},
	{
		value: 'EURO',
		label: (
			<div style={{display: 'flex' , alignItems: 'center'}}>
				<img style={{width: '30px' , height: '30px'}} src={euro} alt=""/>
				<p style={{marginLeft: '10px'}}>EURO</p>
			</div>
		),
	},
	{
		value: 'RUB',
		label: (
			<div style={{display: 'flex' , alignItems: 'center'}}>
				<img style={{width: '30px' , height: '30px'}} src={rub} alt=""/>
				<p style={{marginLeft: '10px'}}>RUB</p>
			</div>
		),
	},
	{
		value: 'KZT',
		label: (
			<div style={{display: 'flex' , alignItems: 'center'}}>
				<img style={{width: '30px' , height: '30px'}} src={tenge} alt=""/>
				<p style={{marginLeft: '10px'}}>KZT</p>
			</div>
		),
	},
]

const CustomSelect = () => {
	return (
		<React.Fragment>
			<Select options={selectItems}/>
		</React.Fragment>
	)
}

export default CustomSelect