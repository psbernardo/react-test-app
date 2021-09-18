import React from 'react';
import { InputLabel, Select, MenuItem } from '@material-ui/core';

export default function SelectPhysicalCertificateStatus(props) {
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
        <MenuItem value="Pending Approval">Pending Approval</MenuItem>
        <MenuItem value="Sent to TA">Sent to TA</MenuItem>
        <MenuItem value="Sent to DTC">Sent to DTC</MenuItem>
        <MenuItem value="DTC Cleared">DTC Cleared</MenuItem>
        <MenuItem value="Completed">Completed</MenuItem>
      </Select>
    </>
  );
}
