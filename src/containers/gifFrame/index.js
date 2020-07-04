import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { theme } from 'styled-tools';

import { 
    DAILY
} from '../options/const';

import {
    INTERVAL
} from './const';

import { 
    searchGifsByPhrase as searchGifsByPhraseAction,
    nextGif as nextGifAction
 } from './actions';

import {
    forecastSelector
} from '../options/selectors';

import {
    mostCommonDescriptionDailySelector,
    mostCommonDescriptionHourlySelector
} from '../weatherFrame/selectors';

import { currentGifSelector} from './selectors';

import Loader from 'react-loader-spinner';


const GifFrame = ({className}) => {
    const dispatch = useDispatch();
    const currentGif = useSelector(currentGifSelector);

    const forecast = useSelector(forecastSelector);
    const dailyPhrase = useSelector(mostCommonDescriptionDailySelector);
    const hourlyPhrase = useSelector(mostCommonDescriptionHourlySelector);
    
    const phrase = (forecast === DAILY) ? dailyPhrase : hourlyPhrase;
    
    const nextGif = () => {
        dispatch(nextGifAction())
    }

    useEffect(() => {
        dispatch(searchGifsByPhraseAction(phrase));
    }, [phrase]);
    
    useEffect(() => {
        const interval = setInterval(() => {
          nextGif()
        }, INTERVAL);
        return () => clearInterval(interval);
    }, []);

    return( 
        <div className={className}>
            {
                (currentGif !== undefined) 
                ? <img className="gif" src={currentGif.getIn(['media', 0, 'gif', 'url'])} alt="weather gif" />
                : <div>
                    <Loader
                        type="TailSpin"
                        color="#ED254E"
                        height={100}
                        width={100}
                    />
                </div>
                
            }
        </div>
    );
};



export const StyledGifFrame = styled(GifFrame)`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    background-color: ${theme('colors.gif.background')};
    padding: ${theme('dims.gif.padding')};
    width: ${theme('dims.gif.width')};
    height: ${theme('dims.gif.height')};
    margin: ${theme('dims.gif.margin')};;

    .gif{
        max-width: ${theme('dims.gif.width')};
        max-height: ${theme('dims.gif.height')};
        height: fit-content;
        width: fit-content;
        margin: 0 auto;
    }

`;

