import React from 'react';
import InputMask from 'react-input-mask';
import { TextField } from '@material-ui/core';

export default function TextFieldMobileNo(props) {
  return (
    <>
      <InputMask
        name={props.name}
        mask="+1 (999) 9999999"
        value={props.value}
        onChange={props.onChange}
        onInput={props.onInput}
      >
        {() => (
          <TextField
            fullWidth={true}
            required={props.required}
            name={props.name}
            label={props.label}
            type="text"
            InputLabelProps={{ shrink: true }}
          />
        )}
      </InputMask>
    </>
  );
}
