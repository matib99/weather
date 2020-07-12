import { CHANGE_GIF_ARRAY, CHANGE_NEXT_POS, CHANGE_CURRENT_GIF_ID, CHANGE_PHRASE, NEW_GIFS, NEXT_GIF, GET_GIF } from './const';


export const changeGifArray = ( gifs ) => ({
    type: CHANGE_GIF_ARRAY,
    gifs
}) 

export const changeNextPos = ( nextPos ) => ({
    type: CHANGE_NEXT_POS,
    nextPos
})

export const changeCurrentGifID = ( id ) => ({
    type: CHANGE_CURRENT_GIF_ID,
    id
})

export const changePhrase = ( phrase ) => ({
    type: CHANGE_PHRASE,
    phrase
})

// const getTenorApiUrl = ( phrase, pos ) => 
// `https://api.tenor.com/v1/search?q=${phrase}&key=${process.env.REACT_APP_TENOR_API_KEY}&locale=en_US&contentfilter=medium&ar_range=standard&media_filter=minimal&limit=${MAX_GIFS}${(pos!=='') ? ('&pos='+pos) : ''}`;

// const getNewGifs = ( phrase, pos ) => {
//     return (dispatch, getState) => {
//         fetch(getTenorApiUrl( phrase, pos ))
//         .then(res => res.json())
//         .then(data => {
//             dispatch(changePhrase( phrase ));
//             dispatch(changeGifArray( data.results ))
//             dispatch(changeNextPos( data.next ))
//             dispatch(changeCurrentGifID(0))
//         });
//     }
// }

// export const searchGifsByPhrase = ( phrase ) => {
//     return (dispatch, getState) => {
//         dispatch(getNewGifs(phrase, ''));
//     }
// }

// export const nextGif = () => {
//     return (dispatch, getState) => {
//         const size = gifArraySizeSelector(getState());
//         const currID = currentGifIDSelector(getState());
//         const phrase = phraseSelector(getState());
//         const pos = nextPosSelector(getState());
//         if(currID < size - 1) {
//             dispatch(changeCurrentGifID(currID + 1))
//         } else {
//             dispatch(getNewGifs(phrase, pos))
//         }
            
//     }
// }

export const getGif = ( phrase ) => ({
    type: GET_GIF,
    phrase
})

export const newGifs = ( phrase, pos ) => ({
    type: NEW_GIFS,
    phrase,
    pos
})

export const nextGif = ( ) => ({
    type: NEXT_GIF
})

