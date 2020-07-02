import { createSelector } from 'reselect';
import { prop } from 'ramda';

import { NICE, PASSABLE, NOT_NICE } from './const';
import { WEATHER_FRAME_REDUCER_NAME } from './reducer';

import { CtoK } from '../../utils/temperature'


const getWFReducerState = prop(WEATHER_FRAME_REDUCER_NAME);

export const weatherHourlySelector = createSelector(
    getWFReducerState,
    (weather) => weather.getIn(['weather', 'hourly'])
);

export const weatherDailySelector = createSelector(
    getWFReducerState,
    (weather) => weather.getIn(['weather', 'daily'])
);


export const selectedDaySelector = createSelector(
    getWFReducerState,
    (state) => state.get('selectedDay')
);

export const selectedHourSelector = createSelector(
    getWFReducerState,
    (state) => state.get('selectedHour')
);

export const selectedDayWeatherSelector = createSelector(
    weatherDailySelector,
    selectedDaySelector,
    (weather, id) => weather.get(id)
);

export const selectedHourWeatherSelector = createSelector(
    weatherHourlySelector,
    selectedHourSelector,
    (weather, id) => weather.get(id)
);

const getMostCommonDescription = (weather) => {
    let descriptions = {}
        for(let el of weather) {
            const el_desc = el.getIn(['weather', 0, 'description'])
            descriptions[el_desc] =
            (descriptions[el_desc] === undefined) 
            ? 1
            : descriptions[el_desc] + 1
        }
        let max = 0, maxD = '';
        for(let [desc, value] of Object.entries(descriptions)) {
            if(value > max) {
                max = value;
                maxD = desc;
            }
        }
        return maxD
}

export const mostCommonDescriptionDailySelector = createSelector(
    weatherDailySelector,
    (weather) => getMostCommonDescription(weather)
)

export const mostCommonDescriptionHourlySelector = createSelector(
    weatherHourlySelector,
    (weather) => getMostCommonDescription(weather)
)

const avgTempDailySelector = createSelector(
    weatherDailySelector,
    (weather) => {
        if(weather === []) return -1
        let sum = 0
        for(let day of weather) {
            const temp = day.get('temp')
            sum += (
                temp.get('day') +
                temp.get('night') +
                temp.get('eve') + 
                temp.get('morn')
            ) / 4
        }
        return (sum / weather.size)
    }
)

const avgTempHourlySelector = createSelector(
    weatherHourlySelector,
    (weather) => {
        if(weather === []) return -1
        let sum = 0
        for(let hour of weather) {
            sum += hour.get('temp')
        }
        return (sum / weather.size)
    }
)

const minMaxTempDailySelector = createSelector(
    weatherDailySelector,
    (weather) => {
        if(weather === []) return {min: -1, max: -1}
        let min = 999999
        let max = 0
        for(let day of weather) {
            const temp = day.get('temp')
            min = Math.min(min, temp.get('min'))
            max = Math.max(max, temp.get('max'))
        }
        return {
            min,
            max
        }
    }
)

const minMaxTempHourlySelector = createSelector(
    weatherHourlySelector,
    (weather) => {
        if(weather === []) return {min: -1, max: -1}
        let min = 999999
        let max = 0
        for(let hour of weather) {
            const temp = hour.get('temp')
            min = Math.min(min, temp)
            max = Math.max(max, temp)
        }
        return {
            min,
            max
        }
    }
)

const rainyDaysSelector = createSelector(
    weatherDailySelector,
    (weather) => {
        if(weather === []) return 0
        let rainy = 0
        for(let day of weather) {
            const main = day.getIn(['weather', 0, 'main'])
            if( main === 'Rain' 
             || main === 'Thunderstorm' 
             || main === 'Drizzle')
            rainy ++
        }
        return rainy
    }
)

const rainyHoursSelector = createSelector(
    weatherHourlySelector,
    (weather) => {
        if(weather === []) return 0
        let rainy = 0
        for(let hour of weather) {
            const main = hour.getIn(['weather', 0, 'main'])
            if( main === 'Rain' 
             || main === 'Thunderstorm' 
             || main === 'Drizzle')
            rainy ++
        }
        return rainy
    }
)

export const nicenessDailySelector = createSelector(
    rainyDaysSelector,
    avgTempDailySelector,
    minMaxTempDailySelector,

    (rainy, avg, minmax) => {
        let nicenessPoints = 0
        if(rainy === 0)
            nicenessPoints ++
        if(avg >= CtoK(18) && avg <= CtoK(25))
            nicenessPoints ++
        if(minmax.min >= CtoK(15) && minmax.max <= CtoK(30))
            nicenessPoints ++
        return{
            rainy,
            avg,
            min: minmax.min,
            max: minmax.max,
            niceness: (nicenessPoints === 3) ? NICE : (nicenessPoints === 2 ? PASSABLE : NOT_NICE)
        }
    }
);

export const nicenessHourlySelector = createSelector(
    rainyHoursSelector,
    avgTempHourlySelector,
    minMaxTempHourlySelector,

    (rainy, avg, minmax) => {
        let nicenessPoints = 0
        if(rainy === 0)
            nicenessPoints ++
        if(avg >= CtoK(18) && avg <= CtoK(25))
            nicenessPoints ++
        if(minmax.min >= CtoK(15) && minmax.max <= CtoK(30))
            nicenessPoints ++
        return{
            rainy,
            avg,
            min: minmax.min,
            max: minmax.max,
            niceness: (nicenessPoints === 3) ? NICE : (nicenessPoints === 2 ? PASSABLE : NOT_NICE)
        }
    }
);



