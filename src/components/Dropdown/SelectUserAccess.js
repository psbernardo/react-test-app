import React from 'react';

import { listAccessOption } from '../../services/AdministratorService';
import { Select, MenuItem } from '@material-ui/core';

export default function SelectUserAccess({ arg, ...rest }) {
  const [options, setOptions] = React.useState([]);
  const getData = async () => {
    const data = await listAccessOption(arg);
    console.log('xxx', arg);
    const unique = [...new Set(data.optionsList.map((item) => item.access))];
    setOptions(unique);
  };

  React.useEffect(() => {
    getData();
  }, [arg]);

  return (
    <Select fullWidth {...rest}>
      <MenuItem value="">
        <em>Blank</em>
      </MenuItem>
      {options.map((item, index) => (
        <MenuItem key={index} value={item}>
          {item}
        </MenuItem>
      ))}
    </Select>
  );
}
