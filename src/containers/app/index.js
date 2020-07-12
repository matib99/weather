import React from 'react';
import { compose, createStore, applyMiddleware } from 'redux';
import { createReducer } from './reducer';
import thunk from 'redux-thunk';

import { Provider, useSelector } from 'react-redux';

import { WeatherFrame } from '../weatherFrame';
import { SearchFrame } from '../searchFrame';
import { GifFrame } from '../gifFrame';
import { Options } from '../options';

import styled from 'styled-components';
import { theme } from 'styled-tools';
import { ThemeProvider } from 'styled-components';

import { themeSelector } from '../options/selectors';
import { DARK } from '../options/const';

import { lightTheme, darkTheme } from '../../themes';

import { GlobalStyle } from '../../globalStyles';

import { createEpicMiddleware } from 'redux-observable';

import { rootEpic } from './epics';

const epicMiddleware = createEpicMiddleware();

const DEBUG = true;

const reducer = createReducer();

let composeEnhancers, store;

if (DEBUG) {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    store = createStore(reducer, undefined, composeEnhancers(applyMiddleware(thunk), applyMiddleware(epicMiddleware)));
} else {
    composeEnhancers = compose;
    store = createStore(reducer, undefined, composeEnhancers(applyMiddleware(thunk), applyMiddleware(epicMiddleware)));
}

epicMiddleware.run(rootEpic);




const Content = () => {
  const currThemeN = useSelector(themeSelector);
  const currTheme = (currThemeN === DARK) ? darkTheme : lightTheme;
  return(
    <ThemeProvider theme={currTheme}>
      <GlobalStyle />
        <AllWrapper>
          <SearchFrame />
          <MainWrapper>
            <WeatherFrame />
            <RightWrapper>
              <Options />
              <GifFrame />
            </RightWrapper>
          </MainWrapper>
        </AllWrapper>
    </ThemeProvider>
  )};
  
const AllWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const MainWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: ${theme('dims.weather.wrapperHeight')};
  margin: 0 auto;
`

const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: ${theme('dims.options.width')};
`


const App = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <Content />
      </Provider>
    </div>
  );
};

export default App;
