import React from 'react';
import styled from 'styled-components';
import { theme } from 'styled-tools';

const StyledSwitchButton = styled.button`

  background-color: ${props => theme(`colors.switch.${props.active ? 'basic' : 'inverted'}.background`)};
  color: ${props => theme(`colors.switch.${props.active ? 'basic' : 'inverted'}.text`)};
  border-radius: ${theme('dims.switch.button.borderRadius')};
  width: 50%;
  border-style: none;
  outline: none;
  
  cursor: ${props => props.active ? 'default' : 'pointer'};

  padding: ${theme('dims.switch.button.padding')};
  margin: ${theme('dims.switch.button.margin')};

  font-size: ${theme('fonts.switch.button.fontSize')};
  font-weight: ${theme('fonts.switch.button.fontWeight')};
  text-align: center;
  text-decoration: none;
  display: inline-block;
  transition: .2s ${props => props.active ? 'ease-out' : 'ease'} all;

`;

export const ToggleSwitch = ({textLeft='OFF', textRight='ON', onClickLeft=()=>{}, onClickRight=()=>{}, value=false}) => 
    <StyledToggleSwitch>
        <SwitchWrapper>
            <StyledSwitchButton className="switchButton" onClick={onClickLeft} active={!value}> {textLeft}</StyledSwitchButton>
            <StyledSwitchButton className="switchButton" onClick={onClickRight} active={value}> {textRight}</StyledSwitchButton>
        </SwitchWrapper>
    </StyledToggleSwitch>

const SwitchWrapper = styled.span`
    padding: ${theme('dims.switch.padding')};
    border: ${theme('dims.switch.border')};
    border-radius: ${theme('dims.switch.borderRadius')};

    background-color: ${theme('colors.switch.background')};
    border-color: ${theme('colors.switch.border')};
    
    display:flex;
    flex-direction:row;
    width: 100%;
`
const StyledToggleSwitch = styled.div`
    width: ${theme('dims.switch.width')};
    height: ${theme('dims.switch.height')};
    margin: ${theme('dims.switch.margin')};
    padding: ${theme('dims.switch.padding')};
`;

