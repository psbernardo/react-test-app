import React, { useState } from 'react';
import { InputLabel, Select, MenuItem } from '@material-ui/core';
import { listGlBank } from '../../services/BankAccountService';

export default function SelectGLBankAccount(props) {
  const [options, setOptions] = useState([]);
  const [mounted, setMounted] = React.useState(false);

  const getOptions = async () => {
    const data = await listGlBank();
    setOptions(data.glBanksList);
  };

  React.useEffect(() => {
    if (!options.length && !mounted) {
      getOptions();
    }
    return () => {
      setMounted(true);
    };
    // eslint-disable-next-line
  }, [options, mounted]);

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
        value={props.value ? props.value : ''}
        onChange={props.onChange}
      >
        <MenuItem value="">
          <em>Blank</em>
        </MenuItem>
        {options.length ? (
          options.map((item, index) => (
            <MenuItem key={index} value={item?.accountId}>
              {item?.accountNo}
            </MenuItem>
          ))
        ) : (
          <MenuItem key="" value=""></MenuItem>
        )}
      </Select>
    </>
  );
}
