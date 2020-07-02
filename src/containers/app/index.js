import React from 'react';
import { compose, createStore, applyMiddleware } from 'redux';
import { createReducer } from './reducer';
import thunk from 'redux-thunk';

import { Provider, useSelector } from 'react-redux';

import { StyledWeatherFrame } from '../weatherFrame';
import { StyledSearchFrame } from '../searchFrame';
import { StyledGifFrame } from '../gifFrame';
import { StyledOptions } from '../options';

import styled from 'styled-components';
import { theme } from 'styled-tools';
import { ThemeProvider } from 'styled-components';

import { themeSelector } from '../options/selectors';
import { DARK } from '../options/const';

import { lightTheme, darkTheme } from '../../themes';

import { GlobalStyle } from '../../globalStyles';




const DEBUG = true;

const reducer = createReducer();

let composeEnhancers, store;

if (DEBUG) {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    store = createStore(reducer, undefined, composeEnhancers(applyMiddleware(thunk)));
} else {
    composeEnhancers = compose;
    store = createStore(reducer, undefined, composeEnhancers(applyMiddleware(thunk)));
}


const Content = ({className}) => {
  const currThemeN = useSelector(themeSelector);
  const currTheme = (currThemeN === DARK) ? darkTheme : lightTheme;
  return(
    <ThemeProvider theme={currTheme}>
      <GlobalStyle />
      <div className={className}>
        <div className="allWrapper">
          <StyledSearchFrame />
          <div className="mainWrapper">
            <StyledWeatherFrame />
            <div className="rightWrapper">
              <StyledOptions />
              <StyledGifFrame />
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  )};
  

const StyledContent = styled(Content)`
  .allWrapper{
    display: flex;
    flex-direction: column;
  }

  .mainWrapper{
    display: flex;
    flex-direction: row;
    height: ${theme('dims.weather.wrapperHeight')};
    margin: 0 auto;
  }

  .rightWrapper{
    display: flex;
    flex-direction: column;
    width: ${theme('dims.options.width')};
  }
`;




const App = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <StyledContent />
      </Provider>
    </div>
  );
};

export default App;
