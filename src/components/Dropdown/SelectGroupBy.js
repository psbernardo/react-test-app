import React from 'react';
import { InputLabel, Select, MenuItem } from '@material-ui/core';

export default function SelectGroupBy(props) {
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
        <MenuItem value="correspondent">Correspondent</MenuItem>
        <MenuItem value="branch">Branch</MenuItem>
        <MenuItem value="account_no">Account No</MenuItem>
        <MenuItem value="master_account_no">Master Account No</MenuItem>
        <MenuItem value="rep">Rep</MenuItem>
      </Select>
    </>
  );
}
