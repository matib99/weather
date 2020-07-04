import { fromJS } from 'immutable';

import { ADD_CITY_RESULT, ADD_LOC_RESULT, CHANGE_SEARCH_VALUE, CHANGE_SELECTED_CITY, SET_LOADING } from './const';

export const SEARCH_REDUCER_NAME = 'Search';

const initialSearchState = fromJS({
    history:{
        cities: {},
        locations: {}
    },
    selectedCity: {},
    searchValue: "",
    loading: true
});

export const searchReducer = (state = initialSearchState, action) => {
    switch (action.type) {
        case SET_LOADING: {
            return state.setIn(['loading'], 
                action.loading
            );
        }
        case ADD_CITY_RESULT: {
            return state.setIn(['history','cities', action.city], 
                fromJS(action.weather)
            );
        } 
        case ADD_LOC_RESULT: {
            return state.setIn(['history','locations', action.location], 
                fromJS(action.weather)
            );
        } 
        case CHANGE_SELECTED_CITY: {
            return state.setIn(['selectedCity'], 
                fromJS(action.city)
            );
        }
        case CHANGE_SEARCH_VALUE: {
            return state.setIn(['searchValue'], 
                action.value
            );
        }
        default:
            return state;
    }
};
