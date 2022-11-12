import useSort from "../../hook/useSort";
import {ADD_DATA_DOLLAR, ADD_DATA_EURO, ADD_DATA_RUBLE, ADD_DATA_TENGE} from "./data-constant";
import {updateActionProgress} from "../progress/progress-action";
import {updateActionCountries} from "../countries/countries-action";
import {diagramActionData} from "../diagram/diagram-action";

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
		.then(data1 => {
			dispatch(dataActionDollar(data1))
			axios.get('https://www.akchabar.kg/media/rates/euro.js')
				.then(res => useSort(res?.data?.data, 'евро' , 'KG/EURO'))
				.then(data2 => {
					dispatch(dataActionEuro(data2))
					axios.get('https://www.akchabar.kg/media/rates/rub.js')
						.then(res => useSort(res?.data?.data, 'рубля' , 'KG/RUB'))
						.then(data3 => {
							dispatch(dataActionRuble(data3))
							axios.get('https://www.akchabar.kg/media/rates/kzt.js')
								.then(res => useSort(res?.data?.data, 'тенге' , 'KG/KZT'))
								.then(data4 => {
									dispatch(dataActionTenge(data4))
									dispatch(diagramActionData(data1.slice(data1.length - 365 , data1.length)))
									dispatch(updateActionProgress(false))
									dispatch(updateActionCountries({
										USA: {
											money: data1[data1.length - 1].y,
											title: 'Доллар США'
										},
										EURO: {
											money: data2[data2.length - 1].y,
											title: 'Евро'
										},
										RUB: {
											money: data3[data3.length - 1].y,
											title: 'Российский рубль'
										},
										KZT: {
											money: data4[data4.length - 1].y,
											title: 'Казахстанский тенге'
										},
										KGS: {
											money: 0,
											title: 'Кыргызский сом'
										},
									}))
								})
						})
				})
		})

}