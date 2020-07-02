import { 
    CHANGE_DEGREES, CHANGE_FORECAST, CHANGE_THEME
} from './const';

export const changeDegrees = () => ({
    type: CHANGE_DEGREES
});

export const changeForecast = ( ) => ({
    type: CHANGE_FORECAST
});

export const changeTheme = () => ({
    type: CHANGE_THEME
})
