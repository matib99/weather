import { fromJS } from 'immutable';

import { 
    C, F, DAILY, HOURLY, DARK, LIGHT,
    CHANGE_DEGREES, CHANGE_FORECAST, CHANGE_THEME
} from './const';

export const OPTIONS_REDUCER_NAME = 'Options';

const initialOptionsState = fromJS({
   degrees: C,
   forecast: HOURLY,
   theme: LIGHT
});

export const optionsReducer = (state = initialOptionsState, action) => {
    switch (action.type) {
        case CHANGE_DEGREES: {
            return state.set('degrees', 
                (state.get('degrees') === C) ? F : C
            );
        } 
        case CHANGE_FORECAST: {
            return state.set('forecast', 
                (state.get('forecast') === DAILY) ? HOURLY : DAILY
            );
        }
        case CHANGE_THEME: {
            return state.set('theme', 
                (state.get('theme') === DARK) ? LIGHT : DARK
            );
        }
        default:
            return state;
    }
};
