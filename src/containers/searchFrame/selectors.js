import { createSelector } from 'reselect';
import { prop } from 'ramda';

import { SEARCH_REDUCER_NAME } from './reducer';


const getSearchReducerState = prop(SEARCH_REDUCER_NAME);

export const searchHistorySelector = createSelector(
    getSearchReducerState,
    (search) => search.get('history')
)
export const searchValueSelector = createSelector(
    getSearchReducerState,
    (search) => search.get('searchValue')
)
export const selectedCitySelector = createSelector(
    getSearchReducerState,
    (search) => search.get('selectedCity')
)

export const searchHistoryCitiesSelector = createSelector(
    searchHistorySelector,
    (history) => history.get('cities')
);

export const searchHistoryLocationsSelector = createSelector(
    searchHistorySelector,
    (history) => history.get('locations')
);



