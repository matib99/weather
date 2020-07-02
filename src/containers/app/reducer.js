import { combineReducers } from 'redux';

import { 
    WEATHER_FRAME_REDUCER_NAME,
    weatherFrameReducer 
} from '../weatherFrame/reducer';

import {
    SEARCH_REDUCER_NAME,
    searchReducer
} from '../searchFrame/reducer';

import {
    GIF_REDUCER_NAME,
    gifReducer
} from '../gifFrame/reducer'

import {
    OPTIONS_REDUCER_NAME,
    optionsReducer
} from '../options/reducer'


export const createReducer = () => {
    return combineReducers({
        [WEATHER_FRAME_REDUCER_NAME]: weatherFrameReducer,
        [SEARCH_REDUCER_NAME]: searchReducer,
        [GIF_REDUCER_NAME]: gifReducer,
        [OPTIONS_REDUCER_NAME]: optionsReducer
    });
}

