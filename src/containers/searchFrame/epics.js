import { combineEpics, ofType } from 'redux-observable';
import { concat, of, from } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';

import { searchHistoryCitiesSelector, searchHistoryLocationsSelector } from './selectors';
import { SEARCH_WEATHER_FOR_CITY, SEARCH_WEATHER_FOR_LOCATION } from './const';

import { setWeather } from '../weatherFrame/actions';
import { addCityResult, addLocationResult } from './actions';

import { fetchWeather } from '../../utils/apis';

const searchWeatherForCityEpic = (action$, state$) => action$.pipe(
    ofType(SEARCH_WEATHER_FOR_CITY),
    map((action) => ({
        cityLon: action.cityLon,
        cityLat: action.cityLat,
        cityName: action.cityName
    })),
    mergeMap(({cityLat, cityLon, cityName}) => {
        const citiesHistory = searchHistoryCitiesSelector(state$.value);
        return citiesHistory.get(cityName) !== undefined
        ? of(setWeather(citiesHistory.get(cityName)))
        : from(fetchWeather(cityLat, cityLon)).pipe(
            mergeMap(weather => 
                concat(
                    of(addCityResult(cityName, weather)),
                    of(setWeather(weather)),
                )
            ),
        )
    }),
)


const searchWeatherForLocalizationEpic = (action$, state$) => action$.pipe(
    ofType(SEARCH_WEATHER_FOR_LOCATION),
    mergeMap(() => new Promise ((resolve) => {
            navigator.geolocation.getCurrentPosition( (position) => 
            resolve({
                myLat: position.coords.latitude,
                myLon: position.coords.longitude,
                myLocalization: `${position.coords.latitude}#${position.coords.longitude}`
            }))
        }) 
    ), 
    mergeMap(({myLat, myLon, myLocalization}) => {
        const locationsHistory = searchHistoryLocationsSelector(state$.value);
        return (locationsHistory.get(myLocalization) !== undefined) 
        ? of(setWeather(locationsHistory.get(myLocalization)))
        : from(fetchWeather(myLat, myLon)).pipe(
            mergeMap(weather => {
                return concat(
                    of(addLocationResult(myLocalization, weather)),
                    of(setWeather(weather)),
                )
            }),
        )
    })
);

  
export const searchEpic = combineEpics(
    searchWeatherForLocalizationEpic,
    searchWeatherForCityEpic
)
