import {combineReducers} from "redux";
import {dataReducer} from "./data/data-reducer";
import {countriesReducer} from "./countries/countries-reducer";
import {progressReducer} from "./progress/progress-reducer";
import {diagramReducer} from "./diagram/diagram-reducer";

export const RootReducer = combineReducers({
	data: dataReducer,
	countries: countriesReducer,
	progress: progressReducer,
	diagram: diagramReducer
})