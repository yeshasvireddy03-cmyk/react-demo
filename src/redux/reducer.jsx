// reducers.js

import {
  SET_DEFAULT_LOCATION,
  SET_WEATHER_DATA,
  SET_IS_FETCHING,
  SET_WEATHER_DATA_SUCCESS,
} from "./action";

const initialState = {
  defaultLocation: "",
  weatherData: null,
  isFetching: false,
};

export const weatherReducer = (state = initialState, action) => {
  console.log(state);
  switch (action.type) {
    case SET_DEFAULT_LOCATION:
      return { ...state, defaultLocation: action.payload };
    /* case SET_WEATHER_DATA:
      return { ...state, weatherData: action.payload }; */
    case SET_IS_FETCHING:
      return { ...state, isFetching: true };
    case SET_WEATHER_DATA_SUCCESS:
      return { ...state, weatherData: action.payload, isFetching: false };
    default:
      return state;
  }
};
