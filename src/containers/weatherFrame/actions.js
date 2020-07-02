import { SET_WEATHER, SELECT_DAY, SELECT_HOUR } from './const';

export const setWeather = ( weather ) => ({
    type: SET_WEATHER,
    weather
});

export const selectDay = ( selectedID  ) => ({
    type: SELECT_DAY,
    selectedID 
});

export const selectHour = ( selectedHour ) => ({
    type: SELECT_HOUR,
    selectedHour
})

