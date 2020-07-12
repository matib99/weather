import React from 'react';
import styled from 'styled-components';
import { theme } from 'styled-tools';
import { Slider } from '../../../../utils/components/slider';
import { HourlyMainContent } from './hourlyMainContent';
import { MainWeather } from '../weatherMain';
import { getDayAndTime } from '../../../../utils/datetime';

const StyledHourly = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0;
    width: ${theme('dims.weather.width')};
    height: ${theme('dims.weather.height')};
    margin: 0, auto;
    h1{
        font-size: ${theme('fonts.weather.hour.fontSizeH1')}; 
        margin: 0 auto;
    }
`;

const SliderWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    margin: 20px;
`;

export const Hourly = ({handleHourChange, selectedWeather, max, selectedHour, tempConvert, tempUnits, loading}) => 
    <StyledHourly>
        <MainWeather
            TextContent={HourlyMainContent}
            weather={selectedWeather}
            tempConvert={tempConvert}
            tempUnits={tempUnits}
            loading={loading}
        />
        <SliderWrapper>
            <Slider min='0' max={max} onChange={handleHourChange} value={selectedHour}  />
        </SliderWrapper> 
        <h1>{(selectedWeather !== undefined ) 
              ?  getDayAndTime(selectedWeather.get('dt'))
              : ''}</h1>
    </StyledHourly>








