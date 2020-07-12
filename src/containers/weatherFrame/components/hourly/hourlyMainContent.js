import React from 'react';

import { getDayAndTime } from '../../../../utils/datetime';


export const HourlyMainContent = ( {className, weather, tempConvert, tempUnits}) =>
<div className={className}>
  <h1> {`${getDayAndTime(weather.get('dt'))}`} </h1>
  <p> {`Weather: ${weather.getIn(['weather', 0, 'description'])}`} </p>
  <p> {`Temperature: ${ tempConvert(weather.get('temp'))} ${tempUnits}`} </p>
  <p> {`Pressure: ${weather.getIn(['pressure'])} hPa`} </p>
  <p> {`Humidity: ${weather.getIn(['humidity'])} %`} </p>
  <p> {`Wind Speed: ${weather.getIn(['wind_speed'])} km/h`} </p>
</div>