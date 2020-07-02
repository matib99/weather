import React from 'react';
import { timeConverter } from '../../../../utils/datetime';



export const DailyMainContent = ( {weather, tempConvert, tempUnits}) =>
<div className="textContent">
  <h1> {`${timeConverter(weather.getIn(['dt']))}`} </h1>
  <p> {`Weather: ${weather.getIn(['weather', 0, 'description'])}`} </p>
  <p> {`Day Temperature: ${ tempConvert(weather.getIn(['temp', 'day']))} ${tempUnits}`} </p>
  <p> {`Max Temperature: ${ tempConvert(weather.getIn(['temp', 'max']))} ${tempUnits}`} </p>
  <p> {`Min Temperature: ${ tempConvert(weather.getIn(['temp', 'min']))} ${tempUnits}`} </p>
  <p> {`Pressure: ${weather.getIn(['pressure'])} hPa`} </p>
  <p> {`Humidity: ${weather.getIn(['humidity'])} %`} </p>
  <p> {`Wind Speed: ${weather.getIn(['wind_speed'])} km/h`} </p>
</div>

