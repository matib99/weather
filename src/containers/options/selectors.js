import { createSelector } from 'reselect';
import { prop } from 'ramda';

import { 
    C, F, DAILY, HOURLY, DARK, LIGHT,
    CHANGE_DEGREES, CHANGE_FORECAST, CHANGE_THEME
} from './const';
import { OPTIONS_REDUCER_NAME } from './reducer';

import { KtoC, KtoF } from '../../utils/temperature'


const getOptionsReducerState = prop(OPTIONS_REDUCER_NAME);

export const degreesSelector = createSelector(
    getOptionsReducerState,
    (options) => options.getIn(['degrees'])
);

export const degreesConventerSelector = createSelector(
    degreesSelector,
    (degrees) => (degrees === C) ? KtoC : KtoF
);

export const forecastSelector = createSelector(
    getOptionsReducerState,
    (options) => options.getIn(['forecast'])
);

export const themeSelector = createSelector(
    getOptionsReducerState,
    (options) => options.getIn(['theme'])
);
