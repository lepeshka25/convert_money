import {ADD_DATA_DOLLAR, ADD_DATA_EURO, ADD_DATA_RUBLE, ADD_DATA_TENGE} from "./data-constant";

export const dataReducer = (state = [] , action) => {
	switch (action.type){
		case ADD_DATA_DOLLAR:{
			return {
				...state,
				DOLLAR: action.payload
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
				RUBLE: action.payload
			}
		}
		case ADD_DATA_TENGE:{
			return {
				...state,
				TENGE: action.payload
			}
		}
		default: {
			return state
		}
	}
}