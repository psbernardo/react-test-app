import React from 'react';
import { InputLabel, Select, MenuItem } from '@material-ui/core';

export default function SelectGLSide(props) {
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
        <MenuItem value="Credit">Credit</MenuItem>
        <MenuItem value="Debit">Debit</MenuItem>
        <MenuItem value="Both">Both</MenuItem>
      </Select>
    </>
  );
}
