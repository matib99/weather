import { createGlobalStyle } from 'styled-components';
import { theme } from 'styled-tools';

/* eslint no-unused-expressions: 0 */
export const GlobalStyle = createGlobalStyle`
    html,
    body,
    #root {
         width: 100%;
         height: 100%;
         padding: 0;
         color: ${theme('colors.text')};
         background-color: ${theme('colors.background')};
        
         font-size: ${theme('fonts.basic.fontSize')};
         font-family: ${theme('fonts.basic.fontFamily')};
         
    }
    
    body {
         margin: 0;
    }

    * {
          transition:  background-color 0.5s ease;
     }
`;
