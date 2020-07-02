import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { map, type } from 'ramda';
import { get } from 'immutable';
import styled from 'styled-components';
import { theme } from 'styled-tools';

import { weatherHourlySelector, 
         weatherDailySelector, 
         selectedDayWeatherSelector,
         selectedDaySelector,
         nicenessDailySelector,
         mostCommonDescriptionDailySelector,
         selectedHourSelector,
         selectedHourWeatherSelector,
         mostCommonDescriptionHourlySelector,
         nicenessHourlySelector
        } from './selectors';

import { przykladowaPogoda } from './const';
import { 
        selectDay as selectDayAction,
        selectHour as selectHourAction,
        setWeather as setWeatherAction 
} from './actions';

import { 
    degreesConventerSelector,
    forecastSelector,
    degreesSelector
} from '../options/selectors'

import { 
    DAILY, C
} from '../options/const';

import { Daily } from './components/daily';
import { Hourly } from './components/hourly';

const WeatherFrame = ({className}) => {

    const weatherHourly = useSelector(weatherHourlySelector);
    const selectedHour = useSelector(selectedHourSelector);
    const selectedHourWeather = useSelector(selectedHourWeatherSelector);
    const mostCommonDescriptionHourly = useSelector(mostCommonDescriptionHourlySelector);
    

    const weatherDaily = useSelector(weatherDailySelector);
    const selectedDay = useSelector(selectedDaySelector);
    const selectedDayWeather = useSelector(selectedDayWeatherSelector);
    const mostCommonDescriptionDaily = useSelector(mostCommonDescriptionDailySelector);
    
    
    const nicenessDaily = useSelector(nicenessDailySelector)
    const nicenessHourly = useSelector(nicenessHourlySelector)

    const tempConverter = useSelector(degreesConventerSelector);
    const tempUnits = useSelector(degreesSelector)
    const forecast = useSelector(forecastSelector);


    const dispatch = useDispatch();

    const onDayClick = ( id ) => {
        dispatch(selectDayAction(id));
    };

    const onHourChange = ( hour ) => {
        dispatch(selectHourAction( hour ));
    }

    useEffect(() => {
        dispatch(setWeatherAction(przykladowaPogoda));
    }, []);
    
    return( 
        <div className={className}>
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
                    />
                : 
                    <Hourly
                        handleHourChange={ (e) => onHourChange(e.target.value) }
                        selectedWeather={selectedHourWeather}
                        selectedHour={selectedHour}
                        max={weatherHourly.size - 1}
                        tempConvert={tempConverter}
                        tempUnits={(tempUnits === C) ? 'C' : 'F'}
                    />       
            }
            <h1>{forecast === DAILY ? nicenessDaily.niceness : nicenessHourly.niceness}</h1>
        </div>
    );
};




export const StyledWeatherFrame = styled(WeatherFrame)`
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

