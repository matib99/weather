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

