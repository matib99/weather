import { NEW_GIFS, NEXT_GIF, CHANGE_PHRASE, GET_GIF } from './const';
import { gifArraySizeSelector, currentGifIDSelector, phraseSelector, nextPosSelector } from './selectors';
import { changeGifArray, changeNextPos, changeCurrentGifID, changePhrase, nextGif, newGifs } from './actions';

import { combineEpics, ofType } from 'redux-observable'
import { concat, of, from } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';

import { fetchGifs } from '../../utils/apis';

const getGifEpic = (action$, state$) => action$.pipe(
    ofType(GET_GIF),
    map((action) => 
        phraseSelector(state$.value) === action.phrase
        ? nextGif()
        : changePhrase(action.phrase)
    )
  );

const changePhraseEpic = (action$) => action$.pipe(
    ofType(CHANGE_PHRASE),
    map((action) => 
        newGifs(action.phrase, '')
    )
)

const nextGifEpic = (action$, state$) => action$.pipe(
    ofType(NEXT_GIF),
    map(() => ({
        currIndex: currentGifIDSelector(state$.value),
        arraySize: gifArraySizeSelector(state$.value),
        phrase: phraseSelector(state$.value),
        nextPos: nextPosSelector(state$.value)
    })),
    map(({currIndex, arraySize, phrase, nextPos}) => {
        return (currIndex + 1 < arraySize)
        ? changeCurrentGifID(currIndex + 1)
        : newGifs(phrase, nextPos)
    })
)


const newGifsEpic = (action$) => action$.pipe(
    ofType(NEW_GIFS),
    map((action) => ({
        phrase: action.phrase,
        pos: action.pos
    })),
    mergeMap(({phrase, pos}) => 
        concat(
            of(changeCurrentGifID(-1)),
            from(fetchGifs(phrase, pos)).pipe(
                mergeMap(data => {
                    return concat(
                        of(changeGifArray(data.results)),
                        of(changeNextPos(data.next)),
                        of(changeCurrentGifID(0))
                    )
                }),
            )
        )
    )
)

export const gifEpic = combineEpics(
    getGifEpic,
    changePhraseEpic,
    nextGifEpic,
    newGifsEpic
)
