import React from 'react';
import styled from 'styled-components';
import { theme } from 'styled-tools';
import Loader from 'react-loader-spinner';




const MainWeather = ({className, weather, tempConvert, tempUnits, Content, loading}) =>
<div className={className}>
  {
  (! loading)
  ? 
    <div className="content">
      <div>
        <object alt="weather icon" type="image/svg+xml" data={`./icons/${weather.getIn(['weather', 0, 'icon'])}.svg`} className="icon" /> <br/>
        <p>Icons made by <a href="https://www.flaticon.com/authors/vitaly-gorbachev" title="Vitaly Gorbachev">Vitaly Gorbachev</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></p>
      </div>
      <Content 
        weather={weather}
        tempConvert={tempConvert}
        tempUnits={tempUnits}
      />
    </div>
  :
    <div className="loaderDiv"> 
      <div className="loaderDivInner"> 
        <Loader
          type="TailSpin"
          color="#25283D"
          height={100}
          width={100}
        />
      </div>
    </div>
  }
</div>;

export const StyledMainWeather = styled(MainWeather)`
  h1{
  font-size: ${theme('fonts.weather.main.fontSizeH1')}
  }
  p{
  font-size: ${theme('fonts.weather.main.fontSizeP')}
  }
  a{
  color: ${theme('colors.weather.main.text')};
  text-decoration: none;
  }
  .icon{
  width: ${theme('dims.weather.main.imgWidth')};
  } 
  .icon path {
  fill: palevioletred;
  } 
  .content{
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  width: auto;
  }
  .textContent{
  text-align: right;
  width: fit-content;
  }

  background-color: ${theme('colors.weather.main.background')};
  color: ${theme('colors.weather.main.text')};
  padding: ${theme('dims.weather.main.padding')};
  width: ${theme('dims.weather.main.width')};
  margin: ${theme('dims.weather.main.margin')};
  border: ${theme('dims.weather.main.border')};
  border-radius: ${theme('dims.weather.main.borderRadius')};
  height: ${theme('dims.weather.main.height')};
  .content{
    margin: 10px;
  }

  .loaderDiv{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .loaderDivInner{
    margin: 0 auto;
    width: fit-content;
    height: fit-content;
  }
`;
