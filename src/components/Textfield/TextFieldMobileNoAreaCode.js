import React from 'react';
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';
import { InputLabel } from '@material-ui/core';

export default function TextFieldMobileNoAreaCode(props) {
  return (
    <>
      <InputLabel shrink id={props.name}>
        {props.label + (props.required ? ' *' : '')}
      </InputLabel>
      <PhoneInput
        country={'us'}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        onInput={props.onInput}
      />
    </>
  );
}
