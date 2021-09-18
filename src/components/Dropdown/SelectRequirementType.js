import React from 'react';
import { InputLabel, Select, MenuItem } from '@material-ui/core';

export default function SelectRequirementType(props) {
  return (
    <>
      <InputLabel shrink required={props.required}>
        {props.label}
      </InputLabel>
      <Select
        displayEmpty
        fullWidth
        disabled={props.disabled}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
      >
        <MenuItem value="">
          <em>Blank</em>
        </MenuItem>
        <MenuItem value="Exchange">Exchange</MenuItem>
        <MenuItem value="Fed">Fed</MenuItem>
        <MenuItem value="House">House</MenuItem>
      </Select>
    </>
  );
}
