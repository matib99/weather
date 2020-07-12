import React from 'react';
import styled from 'styled-components';
import { theme } from 'styled-tools';
import Loader from 'react-loader-spinner';




export const MainWeather = ({weather, tempConvert, tempUnits, TextContent, loading}) => {
  const StyledTextContent = stylizeTextContent(TextContent);
return(
  <StyledMainWeather>
    {
    (! loading)
    ? 
      <Content>
        <div>
          <Icon alt="weather icon" type="image/svg+xml" data={`./icons/${weather.getIn(['weather', 0, 'icon'])}.svg`} /> <br/>
          <p>Icons made by <a href="https://www.flaticon.com/authors/vitaly-gorbachev" title="Vitaly Gorbachev">Vitaly Gorbachev</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></p>
        </div>
        {
          StyledTextContent === undefined
          ? ''
          :
          (< StyledTextContent
          weather={weather}
          tempConvert={tempConvert}
          tempUnits={tempUnits}
          />)
        }
        
      </Content>
    :
      <LoaderWrapper> 
        <LoaderWrapperInner> 
          <Loader
            type="TailSpin"
            color="#25283D"
            height={100}
            width={100}
          />
        </ LoaderWrapperInner>
      </LoaderWrapper>
    }
  </StyledMainWeather>)
};

const stylizeTextContent = (TextContent) => 
TextContent === undefined
? undefined
: styled(TextContent)`
  text-align: right;
  width: fit-content;
`

const Content = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  width: auto;
  margin: 10px;
`

const LoaderWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const LoaderWrapperInner = styled.div`
  margin: 0 auto;
  width: fit-content;
  height: fit-content;
`

const Icon = styled.object`
  width: ${theme('dims.weather.main.imgWidth')};
`

const StyledMainWeather = styled.div`
  background-color: ${theme('colors.weather.main.background')};
  color: ${theme('colors.weather.main.text')};
  padding: ${theme('dims.weather.main.padding')};
  width: ${theme('dims.weather.main.width')};
  margin: ${theme('dims.weather.main.margin')};
  border: ${theme('dims.weather.main.border')};
  border-radius: ${theme('dims.weather.main.borderRadius')};
  height: ${theme('dims.weather.main.height')};

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

`;
