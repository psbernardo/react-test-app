import React from 'react';

import { listSignetWallet } from '../../services/CommonService';
import { Select, MenuItem, InputLabel } from '@material-ui/core';

export default function SelectSignetWallet({ value, ...rest }) {
  const [options, setOptions] = React.useState([]);
  const getData = async () => {
    const data = await listSignetWallet();
    setOptions(data.signetWalletsList);
  };

  React.useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <InputLabel shrink required={{ ...rest }.required}>
        {{ ...rest }.label}
      </InputLabel>
      <Select fullWidth {...rest}>
        <MenuItem value="">
          <em>Blank</em>
        </MenuItem>
        {options.map((item, index) => (
          <MenuItem key={index} value={item.bankAccount}>
            {item.bankAccount}
          </MenuItem>
        ))}
      </Select>
    </>
  );
}
