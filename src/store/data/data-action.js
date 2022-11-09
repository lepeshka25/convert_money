import useSort from "../../hook/useSort";
import {ADD_DATA_DOLLAR, ADD_DATA_EURO, ADD_DATA_RUBLE, ADD_DATA_TENGE} from "./data-constant";

const dataActionDollar = (payload) => ({
	payload,
	type: ADD_DATA_DOLLAR,
})

const dataActionEuro = (payload) => ({
	payload,
	type: ADD_DATA_EURO,
})

const dataActionRuble = (payload) => ({
	payload,
	type: ADD_DATA_RUBLE,
})
const dataActionTenge = (payload) => ({
	payload,
	type: ADD_DATA_TENGE,
})


export const middleWareGetDataBase = () => (dispatch , getState , {axios}) => {
	axios.get('https://www.akchabar.kg/media/rates/usd.js')
		.then(res => useSort(res?.data?.data, 'доллара', 'KG/USD'))
		.then(data => dispatch(dataActionDollar(data)))

	axios.get('https://www.akchabar.kg/media/rates/euro.js')
		.then(res => useSort(res?.data?.data, 'евро' , 'KG/EURO'))
		.then(data => dispatch(dataActionEuro(data)))

	axios.get('https://www.akchabar.kg/media/rates/rub.js')
		.then(res => useSort(res?.data?.data, 'рубля' , 'KG/RUB'))
		.then(data => dispatch(dataActionRuble(data)))

	axios.get('https://www.akchabar.kg/media/rates/kzt.js')
		.then(res => useSort(res?.data?.data, 'тенге' , 'KG/KZT'))
		.then(data => dispatch(dataActionTenge(data)))

}