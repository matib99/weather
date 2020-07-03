import { fromJS } from 'immutable';

import { SELECT_DAY, SET_WEATHER, SELECT_HOUR} from './const';

export const WEATHER_FRAME_REDUCER_NAME = 'WeatherFrame';

const initialWeatherState = fromJS({
    weather: {
        hourly: [],
        daily: []
    },
    selectedDay: 0,
    selectedHour: 0
});

export const weatherFrameReducer = (state = initialWeatherState, action) => {
    switch (action.type) {
        case SELECT_DAY: {
            return state.setIn(['selectedDay'], 
                action.selectedID 
            );
        } 
        case SELECT_HOUR: {
            return state.setIn(['selectedHour'], 
                action.selectedHour 
            );
        }
        case SET_WEATHER: {
            return state.setIn(['weather'],
                fromJS(action.weather)
            )
        }
        default:
            return state;
    }
};
