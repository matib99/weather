import React from 'react';
import styled from 'styled-components';
import { theme } from 'styled-tools';

export const Slider = ({className, min=0, max=100, onChange=()=>{}, value=0}) => 
<Wrapper>
    <StyledSlider type="range" min={min} max={max} onChange={onChange} value={value} />
</Wrapper>


const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`
const StyledSlider = styled.input`
  -webkit-appearance: none;
  width: 100%;
  height: ${theme('dims.slider.height')};
  border-radius: ${theme('dims.slider.borderRadius')};
  background: ${theme('colors.slider.bar')};
  outline: none;
  opacity: 0.85;
  -webkit-transition: .2s;
  transition: opacity .2s;

  &::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: ${theme('dims.slider.handle.width')};
  height: ${theme('dims.slider.handle.height')};
  border-radius: ${theme('dims.slider.handle.borderRadius')};
  background: ${theme('colors.slider.handle')};
  cursor: pointer;
  }

  &::-moz-range-thumb {
    width: ${theme('dims.slider.handle.width')};
    height: ${theme('dims.slider.handle.height')};
    border-radius: ${theme('dims.slider.handle.borderRadius')};
    background: ${theme('colors.slider.handle')};
    cursor: pointer;
  }

  &:hover{
    opacity: 1;
  }
`