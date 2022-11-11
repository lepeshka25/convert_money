import React from 'react';
import CustomSelect from "../../../../UI/CustomSelect";
import {TextField} from "@mui/material";
import {FaExchangeAlt} from "react-icons/fa";
import {useSelector} from "react-redux";
import {countriesSelect} from "../../../../store/countries/countries-select";
import cs from './style.module.scss'

const Calculator = ({title}) => {
	const [inputOne , setInputOne] = React.useState(0)
	const [inputTwo , setInputTwo] = React.useState(0)
	const [stateValueOne , setStateValueOne] = React.useState(0)
	const [stateValueTwo , setStateValueTwo] = React.useState(0)
	const [countries , setCountries] = React.useState({})

	const data = useSelector(countriesSelect)

	React.useEffect(() => {
		if(countries.one === countries.two){
			setStateValueTwo(inputOne)
			setStateValueOne(inputOne)
		}else if(countries.one === "KGS"){
			setStateValueTwo((inputOne / data[countries.two]?.money).toFixed(5))
			setStateValueOne(inputOne)
		}else if(countries.two === "KGS"){
			setStateValueTwo((inputOne * data[countries.one]?.money).toFixed(5))
			setStateValueOne(inputOne)
		}else if(countries.one && countries.two) {
			setStateValueTwo((inputOne * data[countries.one]?.money / data[countries.two]?.money).toFixed(5))
			setStateValueOne(inputOne)
		}else {
			setStateValueTwo(0)
			setStateValueOne(0)
		}
	}, [inputOne, countries])

	React.useEffect(() => {
		if(countries.one === countries.two){
			setStateValueOne(inputTwo)
			setStateValueTwo(inputTwo)
		}else if(countries.one === "KGS"){
			setStateValueOne((inputTwo * data[countries.two]?.money).toFixed(5))
			setStateValueTwo(inputTwo)
		}else if(countries.two === "KGS"){
			setStateValueOne((inputTwo / data[countries.one]?.money).toFixed(5))
			setStateValueTwo(inputTwo)
		}else if(countries.one && countries.two) {
			setStateValueOne((inputTwo / data[countries.one]?.money * data[countries.two]?.money).toFixed(5))
			setStateValueTwo(inputTwo)
		}else {
			setStateValueTwo(0)
			setStateValueOne(0)
		}
	}, [inputTwo, countries])

	function SelectOne(data){
		setCountries({...countries , one: data})
	}

	function SelectTwo(data){
		setCountries({...countries , two: data})
	}

	return (
		<div className={cs.calculator}>
			{
				countries.one
					? countries.two
						? (
								<h1 className={cs.title}>{data[countries.one]?.title} в {data[countries.two]?.title}</h1>
							)
						: null
					: null
			}
			<div className={cs.calculator_container}>

				<div className={cs.calculator1}>

					<div className={cs.container_select}>
						<CustomSelect get={SelectOne}/>
					</div>

					<div className={cs.container_input}>
						<TextField
							onChange={e => setInputOne(e.target.value)}
							value={stateValueOne}
							id="filled-number"
							type="number"
							disabled={countries.one ? countries.two ? false : true : true}
							fullWidth={true}
							InputLabelProps={{
								shrink: true,
							}}
							variant="filled"
						/>
					</div>

				</div>

				<div className={cs.container_icon}>
					<FaExchangeAlt
						className={cs.icon}
					/>
				</div>

				<div className={cs.calculator2}>

					<div className={cs.container_select}>
						<CustomSelect get={SelectTwo}/>
					</div>

					<div className={cs.container_input}>
						<TextField
							onChange={e => setInputTwo(e.target.value)}
							value={stateValueTwo}
							id="filled-number"
							disabled={countries.one ? countries.two ? false : true : true}
							type="number"
							fullWidth={true}
							InputLabelProps={{
								shrink: true,
							}}
							variant="filled"
						/>
					</div>

				</div>
			</div>
			<small>Официальный курс доллара Национального Банка КР</small>
		</div>
	);
};

export default React.memo(Calculator);