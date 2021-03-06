import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { theme } from 'styled-tools';
import citiesdata from '../../utils/city.list.json'


import { StyledAutocomplete } from './components/autocomplete';
import { 
    searchWeatherForLocalisation as searchWeatherForLocalisationAction,
    searchWeatherForCity as searchWeatherForCityAction,
    changeSearchValue as changeSearchValueAction,
    changeSelectedCity as changeSelectedCityAction
 } from './actions';
import { searchValueSelector, selectedCitySelector  } from './selectors';

import { StyledButton } from '../../utils/components/button';

export const SearchFrame = () => {
    const dispatch = useDispatch();
    const searchValue = useSelector(searchValueSelector);
    const selectedCity = useSelector(selectedCitySelector);

    useEffect(() => {
        dispatch(searchWeatherForLocalisationAction());
    }, []);

    return( 
        <StyledSearchFrame>
            <StyledAutocomplete
                citiesList={citiesdata}
                searchValue={searchValue}
                onChange={(e) => (dispatch(changeSearchValueAction(e.target.value)))}
                onSelect={(val, item) => {
                    dispatch(changeSearchValueAction(val))
                    dispatch(changeSelectedCityAction(item))
                }}
            />
            <StyledButton important onClick={()=>{
                dispatch(searchWeatherForCityAction(
                    selectedCity.get('name'),
                    selectedCity.getIn(['coord', 'lat']),
                    selectedCity.getIn(['coord', 'lon'])
                ))
            }}>SEARCH</StyledButton> 
            {   
                ("geolocation" in navigator) 
                ? (
                    <StyledButton onClick={()=>{
                        dispatch(searchWeatherForLocalisationAction())
                    }}>SEARCH FOR MY LOCALIZATION</StyledButton> 
                ) : (
                    <p>Geolocalization not avaiable</p>
                )

                
            }
        </StyledSearchFrame>
    );
};



const StyledSearchFrame = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: start;
    background-color: ${theme('colors.search.background')};
    color: ${theme('colors.search.text')};
    padding: ${theme('dims.search.padding')};
    width: ${theme('dims.search.width')};
    height: ${theme('dims.search.height')};
    margin: ${theme('dims.search.margin')};
`;

