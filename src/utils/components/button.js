import React from 'react';
import styled from 'styled-components';
import {theme} from 'styled-tools';

export const StyledButton = styled.button`
  background-color: ${props => theme(`colors.button.${props.important ? 'important' : 'basic'}.background`)};
  color: ${props => theme(`colors.button.${props.important ? 'important' : 'basic'}.text`)};

  border-width: ${props => props.inverted ? theme('dims.button.borderWidth') : '0px'};
  border-radius: ${theme('dims.button.borderRadius')};
  border-color: ${theme('colors.button.inverted.border')};
  border-style: solid;
  outline: none;
  cursor: pointer;
  padding: ${theme('dims.button.padding')};
  margin: ${theme('dims.button.margin')};

  font-size: ${theme('fonts.button.fontSize')};
  font-weight: ${theme('fonts.button.fontWeight')};
  text-align: center;
  text-decoration: none;

  display: inline-block;
`;