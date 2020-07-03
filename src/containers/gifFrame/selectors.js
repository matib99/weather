import { createSelector } from 'reselect';
import { prop } from 'ramda';

import { GIF_REDUCER_NAME } from './reducer';


const getGifReducerState = prop(GIF_REDUCER_NAME);

export const currentGifIDSelector = createSelector(
    getGifReducerState,
    (gifState) => gifState.get('currentGifID')
)

export const gifArraySelector = createSelector(
    getGifReducerState,
    (gifState) => gifState.get('gifs')
)

export const nextPosSelector = createSelector(
    getGifReducerState,
    (gifState) => gifState.get('nextPos')
)

export const gifArraySizeSelector = createSelector(
    gifArraySelector,
    (gifs) => gifs.size
)

export const currentGifSelector = createSelector(
    gifArraySelector,
    currentGifIDSelector,
    (gifs, id) => {
        return (gifs.size > id && id >= 0) ? gifs.get(id) : undefined;
    }
)

export const phraseSelector = createSelector(
    getGifReducerState,
    (gifState) => gifState.get('phrase')
)