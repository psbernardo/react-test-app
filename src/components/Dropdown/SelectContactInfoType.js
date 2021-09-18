import React from 'react';
import { InputLabel, Select, MenuItem } from '@material-ui/core';

export default function SelectContactInfoType(props) {
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
        <MenuItem value="Primary">Primary</MenuItem>
        <MenuItem value="Mobile">Mobile</MenuItem>
        <MenuItem value="Office">Office</MenuItem>
        <MenuItem value="Primary Email">Primary Email</MenuItem>
        <MenuItem value="Email">Email</MenuItem>
      </Select>
    </>
  );
}
