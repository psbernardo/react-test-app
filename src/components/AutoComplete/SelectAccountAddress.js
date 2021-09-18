import React, { useEffect, useState } from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import { listAddressAutoFill } from '../../services/AccountAddressService';

export default function SelectAccountAddress(props) {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    async function init() {
      const { addressAutoFillList } = await listAddressAutoFill();

      setOptions(addressAutoFillList);
    }

    init();
  }, []);

  return (
    <Autocomplete
      freeSolo
      disableClearable
      id="select-address-autofill"
      autoHighlight
      onChange={(_, obj) => props.onChange(obj.addressId)}
      inputValue={props.value}
      options={options}
      getOptionLabel={(option) => option.address || ''}
      // renderOption={(option) => (
      //   <React.Fragment>
      //     {option.address1} {option.address2} {option.city} {option.state}{' '}
      //     {option.country}
      //   </React.Fragment>
      // )}
      renderInput={(params) => (
        <TextField
          {...params}
          label={props.label}
          required
          name="address1"
          onChange={props.onInputChange}
          InputLabelProps={{ shrink: true }}
          inputProps={{
            ...params.inputProps,
            autoComplete: 'off',
            maxLength: 300, // disable autocomplete and autofill
          }}
        />
      )}
    ></Autocomplete>
  );
}
