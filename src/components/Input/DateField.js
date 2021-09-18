import React from 'react';
import { TextField } from '@material-ui/core';
import {
  stringToProtoDate,
  stringToProtoTimeSpan,
  protoDateObjectToString,
  protoTimeStampObjectToString,
} from '../../services/ConvertService';

function DateField({
  value,
  type,
  name,
  className,
  onChange,
  fullWidth,
  required,
  label,
}) {
  let convertedValue = '';

  if (value) {
    if (type === 'date') {
      convertedValue = protoDateObjectToString(value);
    } else if (type === 'datetime-local') {
      convertedValue = protoTimeStampObjectToString(value);
    } else {
      console.error('DateField has invalid value:', value);
    }
  }

  const handleChange = ({ currentTarget }) => {
    let newEventValue = {
      name: name,
      value: '',
    };

    if (currentTarget.value) {
      if (type === 'date') {
        newEventValue.value = stringToProtoDate(currentTarget.value).toObject();
      } else {
        newEventValue.value = stringToProtoTimeSpan(currentTarget.value);
      }
    }

    onChange({
      currentTarget: newEventValue,
      target: newEventValue,
    });
  };

  return (
    <TextField
      fullWidth={fullWidth}
      required={required || false}
      label={label}
      type={type}
      className={className}
      value={convertedValue}
      name={name}
      InputLabelProps={{ shrink: true }}
      onChange={handleChange}
    />
  );
}

export default DateField;
