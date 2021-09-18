import React, { useEffect, useState } from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import { listOwnerAutoFill } from '../../services/OwnerService';

export default function SelectOwner(props) {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    async function init() {
      const { ownerAutoFillList } = await listOwnerAutoFill(props.accountId);

      const output = ownerAutoFillList.map(({ owner, ownerId }) => {
        const splitString = owner.split('|');

        return {
          firstName: splitString[0],
          middleName: splitString[1],
          lastName: splitString[2],
          dateOfBirth: splitString[3],
          ownerId: ownerId,
        };
      });

      setOptions(output);
    }

    init();
    // eslint-disable-next-line
  }, []);

  return (
    <Autocomplete
      freeSolo
      disableClearable
      id="select-owner-autofill"
      autoHighlight
      onChange={(_, obj) => props.onChange(obj)}
      inputValue={props.value}
      options={options}
      getOptionLabel={(option) => option.firstName || ''}
      renderOption={(option) => (
        <React.Fragment>
          {option.firstName} {option.middleName} {option.lastName} (
          {option.dateOfBirth})
        </React.Fragment>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label={props.label}
          name="firstName"
          onChange={props.onInputChange}
          InputLabelProps={{ shrink: true }}
          inputProps={{
            ...params.inputProps,
            autoComplete: 'off', // disable autocomplete and autofill
          }}
        />
      )}
    ></Autocomplete>
  );
}
