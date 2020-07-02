import { ADD_CITY_RESULT, CHANGE_SELECTED_CITY, CHANGE_SEARCH_VALUE } from './const';
import { setWeather } from '../weatherFrame/actions';
import { searchHistoryCitiesSelector } from './selectors';

const addCityResult = ( city, weather ) => ({
    type: ADD_CITY_RESULT,
    city,
    weather
});

export const changeSearchValue = ( value ) => ({
    type: CHANGE_SEARCH_VALUE,
    value
}) 

export const changeSelectedCity = ( city ) => ({
    type: CHANGE_SELECTED_CITY,
    city
}) 

const getOpenWeatherApiUrl = (lat, lon) => 
`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutelly&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}`

export const searchWeatherForCity = (cityName, cityLat, cityLon) => {
    return (dispatch, getState) => {
        const citiesHistory = searchHistoryCitiesSelector(getState());
        if(citiesHistory.get(cityName) === undefined) {
            fetch(getOpenWeatherApiUrl(cityLat, cityLon))
            .then(res => res.json())
            .then(data => {
                const new_weather = {
                    hourly: data.hourly, 
                    daily: data.daily
                }
                dispatch(addCityResult(cityName, new_weather))
                dispatch(setWeather(new_weather))
              });
          } else {
              dispatch(setWeather(citiesHistory.get(cityName)))
          } 
    }
}

export const searchWeatherForLocalisation = () => {
    return (dispatch, getState) => {
        // we assume, that geolocalization is avaiable
        navigator.geolocation.getCurrentPosition( (position) => {
            const myLat = position.coords.latitude;
            const myLon = position.coords.longitude;
            fetch(getOpenWeatherApiUrl(myLat, myLon))
            .then(res => res.json())
            .then(data => {
                const new_weather = {
                    hourly: data.hourly, 
                    daily: data.daily
                }
                dispatch(setWeather(new_weather))
              });
        });
    }
}