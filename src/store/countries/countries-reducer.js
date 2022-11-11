import {UPDATE_COUNTRIES} from "./countries-constant";

export const countriesReducer = (state = {}, action) => {
	switch (action.type){
		case UPDATE_COUNTRIES: {
			return action.payload
		}
		default: {
			return state
		}
	}
}