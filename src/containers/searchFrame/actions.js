import { ADD_CITY_RESULT, ADD_LOC_RESULT, CHANGE_SELECTED_CITY, CHANGE_SEARCH_VALUE, SET_LOADING } from './const';
import { setWeather } from '../weatherFrame/actions';
import { searchHistoryCitiesSelector, searchHistoryLocationsSelector } from './selectors';

const setLoading = (loading) => ({ 
    type: SET_LOADING,
    loading: loading
})

const addCityResult = ( city, weather ) => ({
    type: ADD_CITY_RESULT,
    city,
    weather
});

const addLocationResult = ( location, weather ) => ({
    type: ADD_LOC_RESULT,
    location,
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
        if(cityLat === undefined || cityLon === undefined || cityName === undefined) {
            return;
        }
        dispatch(setLoading(true));
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
                dispatch(setLoading(false));
              });
          } else {
              dispatch(setWeather(citiesHistory.get(cityName)))
              dispatch(setLoading(false));
          } 
    }
}

export const searchWeatherForLocalisation = () => {
    return (dispatch, getState) => {
        dispatch(setLoading(true));
        const locationsHistory = searchHistoryLocationsSelector(getState());
        // we assume, that geolocalization is avaiable
        navigator.geolocation.getCurrentPosition( (position) => {
            const myLat = position.coords.latitude;
            const myLon = position.coords.longitude;
            const myLocalization = `${myLat}#${myLon}`;
            if(locationsHistory.get(myLocalization) === undefined) {
                fetch(getOpenWeatherApiUrl(myLat, myLon))
                .then(res => res.json())
                .then(data => {
                    const new_weather = {
                        hourly: data.hourly, 
                        daily: data.daily
                    }
                dispatch(addLocationResult(myLocalization, new_weather));
                dispatch(setWeather(new_weather));
                dispatch(setLoading(false));
              });
            } else {
                dispatch(setWeather(locationsHistory.get(myLocalization)));
                dispatch(setLoading(false));
            }

            
        });
    }
}