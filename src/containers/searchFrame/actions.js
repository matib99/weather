import { 
    ADD_CITY_RESULT,
    ADD_LOC_RESULT, 
    CHANGE_SELECTED_CITY, 
    CHANGE_SEARCH_VALUE, 
    SEARCH_WEATHER_FOR_CITY, 
    SEARCH_WEATHER_FOR_LOCATION 
} from './const';

export const addCityResult = ( city, weather ) => ({
    type: ADD_CITY_RESULT,
    city,
    weather
});

export const addLocationResult = ( location, weather ) => ({
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

export const searchWeatherForCity = (cityName, cityLat, cityLon) => ({
    type: SEARCH_WEATHER_FOR_CITY,
    cityName,
    cityLat,
    cityLon
})

export const searchWeatherForLocalisation = () => ({
    type: SEARCH_WEATHER_FOR_LOCATION
})
