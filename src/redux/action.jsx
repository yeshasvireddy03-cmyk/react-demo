import axios from "axios";

// actions.js

export const SET_DEFAULT_LOCATION = "SET_DEFAULT_LOCATION";
export const SET_WEATHER_DATA_SUCCESS = "SET_WEATHER_DATA_SUCCESS";
export const SET_WEATHER_DATA = "SET_WEATHER_DATA";
export const SET_IS_FETCHING = "SET_IS_FETCHING";

export const setDefaultLocation = (location) => ({
  type: SET_DEFAULT_LOCATION,
  payload: location,
});

export const setWeatherDataSuccess = (data) => ({
  type: SET_WEATHER_DATA_SUCCESS,
  payload: data,
});

export const setIsFetching = () => ({
  type: SET_IS_FETCHING,
});

export const setWeatherData = (location) => {
  return async (dispatch) => {
    try {
      dispatch(setIsFetching());
      axios
      .get(
        `https://api.weatherapi.com/v1/current.json?key=5e67a60e488046aca8c45049231407&q=${location}&aqi=no&lang=pt`
      )
      .then((response) => {
        dispatch(setWeatherDataSuccess(response.data));
      })
      .catch(() => {
        // pass
      });
    } catch (err) {
      console.log(err)
    }
  }
}
