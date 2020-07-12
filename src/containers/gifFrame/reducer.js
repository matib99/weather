import { fromJS } from 'immutable';

import { CHANGE_GIF_ARRAY, CHANGE_NEXT_POS, CHANGE_CURRENT_GIF_ID, CHANGE_PHRASE, GET_GIF} from './const';

export const GIF_REDUCER_NAME = 'Gif';

const initialGifState = fromJS({
   gifs: [],
   currentGifID: 0,
   nextPos: '',
   phrase: '',
   loading: true
});

export const gifReducer = (state = initialGifState, action) => {
    switch (action.type) {
        case CHANGE_GIF_ARRAY: {
            return state.set('gifs', 
                fromJS(action.gifs)
            );
        } 
        case CHANGE_NEXT_POS: {
            return state.set('nextPos', 
                action.nextPos
            );
        }
        case CHANGE_CURRENT_GIF_ID: {
            return state
            .set('currentGifID', 
                action.id
            )
            .set('loading', 
            false 
            );
        }
        case CHANGE_PHRASE: {
            return state.set('phrase', 
                action.phrase
            );
        }
        case GET_GIF: {
            return state.set('loading', 
                true
            );
        }
        default:
            return state;
    }
};
