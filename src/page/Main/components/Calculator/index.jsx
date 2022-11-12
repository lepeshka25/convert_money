import React from 'react';
import CustomSelect from "../../../../UI/CustomSelect";
import {TextField} from "@mui/material";
import {FaExchangeAlt} from "react-icons/fa";
import {useDispatch, useSelector} from "react-redux";
import {countriesSelect} from "../../../../store/countries/countries-select";
import {diagramActionData} from "../../../../store/diagram/diagram-action";
import cs from './style.module.scss'

const Calculator = () => {
	const [inputOne , setInputOne] = React.useState(0)
	const [inputTwo , setInputTwo] = React.useState(0)
	const [stateValueOne , setStateValueOne] = React.useState(0)
	const [stateValueTwo , setStateValueTwo] = React.useState(0)

	const [selectValue , setSelectValue] = React.useState({})

	const dispatch = useDispatch()
	const data = useSelector(countriesSelect)

	const diagramData = useSelector(state => state.data)

	React.useEffect(() => {
		if(selectValue.two && selectValue.two !== 'KGS'){
			dispatch(diagramActionData(diagramData[selectValue['two']]))
		}
		// eslint-disable-next-line
	}, [selectValue])

	React.useEffect(() => {
		if(selectValue.one === selectValue.two){
			setStateValueTwo(inputOne)
			setStateValueOne(inputOne)
		}else if(selectValue.one === "KGS"){
			setStateValueTwo((inputOne / data[selectValue.two]?.money).toFixed(5))
			setStateValueOne(inputOne)
		}else if(selectValue.two === "KGS"){
			setStateValueTwo((inputOne * data[selectValue.one]?.money).toFixed(5))
			setStateValueOne(inputOne)
		}else if(selectValue.one && selectValue.two) {
			setStateValueTwo((inputOne * data[selectValue.one]?.money / data[selectValue.two]?.money).toFixed(5))
			setStateValueOne(inputOne)
		}else {
			setStateValueTwo(0)
			setStateValueOne(0)
		}
		// eslint-disable-next-line
	}, [inputOne, selectValue])

	React.useEffect(() => {
		if(selectValue.one === selectValue.two){
			setStateValueOne(inputTwo)
			setStateValueTwo(inputTwo)
		}else if(selectValue.one === "KGS"){
			setStateValueOne((inputTwo * data[selectValue.two]?.money).toFixed(5))
			setStateValueTwo(inputTwo)
		}else if(selectValue.two === "KGS"){
			setStateValueOne((inputTwo / data[selectValue.one]?.money).toFixed(5))
			setStateValueTwo(inputTwo)
		}else if(selectValue.one && selectValue.two) {
			setStateValueOne((inputTwo / data[selectValue.one]?.money * data[selectValue.two]?.money).toFixed(5))
			setStateValueTwo(inputTwo)
		}else {
			setStateValueTwo(0)
			setStateValueOne(0)
		}
		// eslint-disable-next-line
	}, [inputTwo, selectValue])

	function changeSelect(){
		setSelectValue({
			one: selectValue.two,
			two: selectValue.one,
		})
	}

	function getSelectValueOne(data){
		setSelectValue({...selectValue , one: data})
	}

	function getSelectValueTwo(data){
		setSelectValue({...selectValue , two: data})
	}

	return (
		<div className={cs.calculator}>
			{
				selectValue.one
					? selectValue.two
						? (
								<h1 className={cs.title}>{data[selectValue.one]?.title} в {data[selectValue.two]?.title}</h1>
							)
						: null
					: null
			}
			<div className={cs.calculator_container}>

				<div className={cs.calculator1}>

					<div className={cs.container_select}>
						<CustomSelect setState={getSelectValueOne} state={selectValue.one}/>
					</div>

					<div className={cs.container_input}>
						<TextField
							onChange={e => setInputOne(e.target.value)}
							value={stateValueOne}
							id="filled-number"
							type="number"
							disabled={selectValue.one ? selectValue.two ? false : true : true}
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
						onClick={() => changeSelect()}
						className={cs.icon}
					/>
				</div>

				<div className={cs.calculator2}>

					<div className={cs.container_select}>
						<CustomSelect setState={getSelectValueTwo} state={selectValue.two}/>
					</div>

					<div className={cs.container_input}>
						<TextField
							onChange={e => setInputTwo(e.target.value)}
							value={stateValueTwo}
							id="filled-number"
							disabled={selectValue.one ? selectValue.two ? false : true : true}
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
			<small>Официальный курс Национального Банка КР (НБКР)</small>
		</div>
	);
};

export default React.memo(Calculator);