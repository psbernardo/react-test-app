import React from 'react';
import { InputLabel, Select, MenuItem } from '@material-ui/core';

export default function SelectValidationStatus(props) {
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
        <MenuItem value="">Blank</MenuItem>
        <MenuItem value="Passed">Passed</MenuItem>
        <MenuItem value="Failed">Failed</MenuItem>
      </Select>
    </>
  );
}
