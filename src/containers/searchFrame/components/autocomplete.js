import React from 'react';
import styled from 'styled-components';
import Autocomplete from 'react-autocomplete';
import { theme } from 'styled-tools';

const MyAutocomplete = ({className, citiesList, searchValue, onChange, onSelect,}) =>
    <Autocomplete
        getItemValue={(item) => item.name}
        items={citiesList}
        renderItem={(item, isHighlighted) =>
            <div style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
            {item.name}
            </div>
        }
        shouldItemRender={
            (item, value) => {
                return (item.name.toLowerCase().includes(value.toLowerCase()) && value.length >= 3)
            }
        }
        value={searchValue}
        onChange={onChange}
        onSelect={onSelect}
        wrapperProps={
            className={className}
        }
        wrapperStyle={{}}
        
        menuStyle={
            {
                borderRadius: '0px',
                boxShadow: '0 2px 12px rgba(0, 0, 0, 0.1)',
                background: 'rgba(255, 255, 255, 0.9)',
                padding: '2px 0',
                fontSize: '20px',
                position: 'fixed',
                overflow: 'auto',
                maxHeight: '50%', 
            }
        }

    />


export const StyledAutocomplete = styled(MyAutocomplete)`
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    input{
        font-size: ${theme('fonts.autocomplete.fontSize')};
        line-height: ${theme('fonts.autocomplete.lineHeight')};
        color: ${theme('colors.autocomplete.text')};
        background-color: ${theme('colors.autocomplete.background')};
        padding: ${theme('dims.autocomplete.padding')};
        outline: none;
        width: ${theme('dims.autocomplete.width')};
    }
`;