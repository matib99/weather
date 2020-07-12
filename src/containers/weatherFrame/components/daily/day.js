import React from 'react';
import styled from 'styled-components';
import { theme } from 'styled-tools';
import { getDayOfTheWeek } from '../../../../utils/datetime'

export const Day = ({selected, weather, onClick, tempConvert, tempUnits}) => 
          <StyledDay onClick={onClick} selected={selected}>
            <h1> {getDayOfTheWeek(weather.get('dt'))} </h1>
            <p> {`${weather.getIn(['weather', 0, 'main'])}`} </p>
            <p> {`${tempConvert(weather.getIn(['temp', 'day']))} ${tempUnits}`} </p>
          </StyledDay>;


const StyledDay = styled.div`
  p{
    font-size: ${theme('fonts.weather.day.fontSizeP')};
  }
  h1{
    font-size: ${theme('fonts.weather.day.fontSizeH1')};
  }
  cursor: pointer;
  background-color: ${props => theme(`colors.weather.day.${props.selected ? 'selected' : 'basic'}.background`)};
  color: ${props => theme(`colors.weather.day.${props.selected ? 'selected' : 'basic'}.text`)};
  padding: ${theme('dims.weather.day.padding')};
  border: ${theme('dims.weather.day.border')};
  border-radius: ${theme('dims.weather.day.borderRadius')};
  margin: ${theme('dims.weather.day.margin')};
  height: ${theme('dims.weather.day.height')};
  width: ${theme('dims.weather.day.width')};
  flex: 1;
`;



