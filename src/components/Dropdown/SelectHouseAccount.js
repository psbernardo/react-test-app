import React from 'react';

import { listHouseAccount } from '../../services/CommonService';
import { Select, MenuItem, InputLabel } from '@material-ui/core';

export default function SelectHouseAccount({ value, ...rest }) {
  const [options, setOptions] = React.useState([]);
  const getData = async () => {
    const data = await listHouseAccount();
    setOptions(data.houseAccountsList);
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
          <MenuItem key={index} value={item.houseAccount}>
            {item.houseAccount}
          </MenuItem>
        ))}
      </Select>
    </>
  );
}
