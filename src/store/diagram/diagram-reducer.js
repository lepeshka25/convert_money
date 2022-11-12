import {UPDATE_DIAGRAM_DATA} from "./diagram-constant";

export const diagramReducer = (state = [] , action) => {
	switch (action.type){
		case UPDATE_DIAGRAM_DATA: {
			return action.payload
		}
		default: {
			return state
		}
	}
}