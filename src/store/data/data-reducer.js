import {ADD_DATA_DOLLAR, ADD_DATA_EURO, ADD_DATA_RUBLE, ADD_DATA_TENGE} from "./data-constant";

export const dataReducer = (state = [] , action) => {
	switch (action.type){
		case ADD_DATA_DOLLAR:{
			return {
				...state,
				USA: action.payload
			}
		}
		case ADD_DATA_EURO:{
			return {
				...state,
				EURO: action.payload
			}
		}
		case ADD_DATA_RUBLE:{
			return {
				...state,
				RUB: action.payload
			}
		}
		case ADD_DATA_TENGE:{
			return {
				...state,
				KZT: action.payload
			}
		}
		default: {
			return state
		}
	}
}