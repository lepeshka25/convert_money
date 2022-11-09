import {combineReducers} from "redux";
import {dataReducer} from "./data/data-reducer";

export const RootReducer = combineReducers({
	data: dataReducer,
})