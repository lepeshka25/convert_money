import {PROGRESS_UPDATE} from "./progress-constant";

export const progressReducer = (state = true , action) => {
	switch (action.type){
		case PROGRESS_UPDATE: {
			return action.payload
		}
		default :{
			return state
		}
	}
}