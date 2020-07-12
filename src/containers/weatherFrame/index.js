import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { theme } from 'styled-tools';

import {      
        weatherDailySelector,
        selectedDaySelector,
        selectedDayWeatherSelector,
        nicenessDailySelector,
        weatherHourlySelector,
        selectedHourSelector,
        selectedHourWeatherSelector,
        nicenessHourlySelector
        } from './selectors';
import { 
        selectDay as selectDayAction,
        selectHour as selectHourAction
} from './actions';

import { 
    degreesConventerSelector,
    forecastSelector,
    degreesSelector
} from '../options/selectors'

import {
    loadingSelector
} from '../searchFrame/selectors';

import { 
    DAILY, C
} from '../options/const';

import { Daily } from './components/daily';
import { Hourly } from './components/hourly';

export const WeatherFrame = () => {

    const weatherHourly = useSelector(weatherHourlySelector);
    const selectedHour = useSelector(selectedHourSelector);
    const selectedHourWeather = useSelector(selectedHourWeatherSelector);
    
    const weatherDaily = useSelector(weatherDailySelector);
    const selectedDay = useSelector(selectedDaySelector);
    const selectedDayWeather = useSelector(selectedDayWeatherSelector);
    
    const nicenessDaily = useSelector(nicenessDailySelector);
    const nicenessHourly = useSelector(nicenessHourlySelector);

    const tempConverter = useSelector(degreesConventerSelector);
    const tempUnits = useSelector(degreesSelector);
    const forecast = useSelector(forecastSelector);

    const loading = useSelector(loadingSelector);

    const dispatch = useDispatch();

    const onDayClick = ( id ) => {
        dispatch(selectDayAction(id));
    };

    const onHourChange = ( hour ) => {
        dispatch(selectHourAction( hour ));
    }
    
    return( 
        <StyledWeatherFrame>
            {
                (forecast === DAILY) 
                ?
                    <Daily 
                        dailyWeather={weatherDaily}
                        handleClickOnDay={onDayClick}
                        selectedWeather={selectedDayWeather}
                        selectedDayID={selectedDay}
                        tempConvert={tempConverter}
                        tempUnits={(tempUnits === C) ? 'C' : 'F'}
                        loading={loading}
                    />
                : 
                    <Hourly
                        handleHourChange={ (e) => onHourChange(e.target.value) }
                        selectedWeather={selectedHourWeather}
                        selectedHour={selectedHour}
                        max={weatherHourly.size - 1}
                        tempConvert={tempConverter}
                        tempUnits={(tempUnits === C) ? 'C' : 'F'}
                        loading={loading}
                    />       
            }
            <h1>{forecast === DAILY ? nicenessDaily.niceness : nicenessHourly.niceness}</h1>
        </StyledWeatherFrame>
    );
};


const StyledWeatherFrame = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    background-color: ${theme('colors.weather.background')};
    color: ${theme('colors.weather.text')};
    padding: ${theme('dims.weather.padding')};
    width: ${theme('dims.weather.width')};
    height: ${theme('dims.weather.wrapperHeight')};
    margin: ${theme('dims.weather.margin')};

    h1{
        font-size: ${theme('fonts.weather.fontSizeH1')};
        margin: 0 auto;
    }
`;

