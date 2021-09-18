import React from 'react';
import { InputLabel, Select, MenuItem } from '@material-ui/core';

export default function SelectPriorityType(props) {
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
        <MenuItem value="Seg First">Seg First</MenuItem>
        <MenuItem value="Seg Last">Seg Last</MenuItem>
      </Select>
    </>
  );
}
