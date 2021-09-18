import React from 'react';

import { listSubAccessOption } from '../../services/AdministratorService';
import { Select, MenuItem } from '@material-ui/core';

export default function SelectUserSubAccess({ arg, ...rest }) {
  const [options, setOptions] = React.useState([]);
  console.log('eee', arg);
  const getData = async () => {
    const data = await listSubAccessOption(arg);
    const unique = [...new Set(data.optionsList.map((item) => item.subAccess))];
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
