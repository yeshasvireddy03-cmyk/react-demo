// selectors.js

export const selectDefaultLocation = (state) => state.defaultLocation;
export const selectWeatherData = (state) => state.weatherData.weatherData;
export const selectIsFetching = (state) => state.weatherData.isFetching;
