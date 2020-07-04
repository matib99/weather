import React from 'react';
import styled from 'styled-components';
import { theme } from 'styled-tools';
import { StyledDay } from './day';
import { DailyMainContent } from './dailyMainContent.js';
import { StyledMainWeather } from '../weatherMain';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0;
    width: ${theme('dims.weather.width')};
    height: ${theme('dims.weather.height')};
    margin: 0, auto;
`;

const DaysWrapper = styled.div`
    display: flex;
    flex-direction: row;
    padding: 0;
    margin: 0 auto;
    justify-content: space-between;
    width: ${theme('dims.weather.main.width')};
`;

export const Daily = ({dailyWeather, handleClickOnDay, selectedWeather, selectedDayID, tempConvert, tempUnits, loading}) => 
    <Wrapper>
        <StyledMainWeather
            Content={DailyMainContent}
            weather={selectedWeather} 
            tempConvert={tempConvert} 
            tempUnits={tempUnits}
            loading={loading}
        />
        <DaysWrapper>
            {
                dailyWeather.map(
                    (weather, id) => {
                        return (  
                            <StyledDay
                                key={`day-${id}`}
                                selected={selectedDayID === id}
                                weather={weather}
                                onClick={() => handleClickOnDay(id)}
                                tempConvert={tempConvert}
                                tempUnits={tempUnits}
                            />
                        )
                    } 
                )
            }
        </DaysWrapper> 
    </Wrapper>




