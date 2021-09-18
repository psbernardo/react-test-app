import React from 'react';
import { InputLabel, Select, MenuItem } from '@material-ui/core';
import { holidays } from '../AutoComplete/AutoCompleteData';

export default function SelectHoliday(props) {
  return (
    <>
      <InputLabel shrink required={props.required}>
        {props.label}
      </InputLabel>
      <Select
        displayEmpty
        fullWidth
        disable={props.disable}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
      >
        <MenuItem value="">
          <em>Blank</em>
        </MenuItem>
        {holidays.map(function(item) {
          return (
            <MenuItem key={item.id} value={item.value || ''}>
              {item.label}
            </MenuItem>
          );
        })}
      </Select>
    </>
  );
}
