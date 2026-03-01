import { combineReducers } from "redux";
import { weatherReducer } from "./reducer";

export const rootReducer = combineReducers({
    weatherData: weatherReducer
})