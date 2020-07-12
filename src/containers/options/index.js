import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { theme } from 'styled-tools';

import { ToggleSwitch } from '../../utils/components/toggleSwitch';
import { F, C, DARK, LIGHT, DAILY, HOURLY} from './const';
import { 
    changeDegrees as changeDegreesAction,
    changeTheme as changeThemeAction,
    changeForecast as changeForecastAction
 } from './actions';
import { degreesSelector, forecastSelector, themeSelector  } from './selectors';


export const Options = () => {
    const dispatch = useDispatch();
    const degrees = useSelector(degreesSelector);
    const forecast = useSelector(forecastSelector);
    const theme = useSelector(themeSelector);
        
    return( 
        <StyledOptions>
            <ToggleSwitch 
                textLeft='C'
                textRight='F'
                onClickLeft={()=>{ 
                    if(degrees === F) 
                        dispatch(changeDegreesAction())
                }}
                onClickRight={()=>{ 
                    if(degrees === C) 
                        dispatch(changeDegreesAction())
                }}
                value={degrees === F}
            />
            <ToggleSwitch 
                textLeft='48h'
                textRight='7d'
                onClickLeft={()=>{ 
                    if(forecast === DAILY) 
                        dispatch(changeForecastAction())
                }}
                onClickRight={()=>{ 
                    if(forecast === HOURLY) 
                        dispatch(changeForecastAction())
                }}
                value={forecast === DAILY}
            />
            <ToggleSwitch 
                textLeft='Light'
                textRight='Dark'
                onClickLeft={()=>{ 
                    if(theme === DARK) 
                        dispatch(changeThemeAction())
                }}
                onClickRight={()=>{ 
                    if(theme === LIGHT) 
                        dispatch(changeThemeAction())
                }}
                value={theme === DARK}
            />
        </StyledOptions>
    );
};



const StyledOptions = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-content: center;
    background-color: ${theme('colors.options.background')};
    color: ${theme('colors.options.text')};
    padding: ${theme('dims.options.padding')};
    width: ${theme('dims.options.width')};
    height: ${theme('dims.options.height')};
    margin: ${theme('dims.options.margin')};

`;

