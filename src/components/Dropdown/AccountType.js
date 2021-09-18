/*ReactJS*/
import React from 'react';

import { listSystemCodes } from '../../services/CommonService';
import { Select, MenuItem } from '@material-ui/core';

export default function AccountType(props) {
  const [options, setOptions] = React.useState([]);
  const [prevType, setPrevType] = React.useState('');

  //get list from backend

  const getSystemCodeTypes = async (properties) => {
    let accountType = '';
    if (properties.type === 'margin') {
      accountType = 'Margin Type';
    } else {
      accountType = 'Account Type';
    }
    const { systemcodesList } = await listSystemCodes(accountType);
    setPrevType(properties.type);
    setOptions(systemcodesList);
  };

  React.useEffect(() => {
    if ((!options.length && !props.value) || prevType !== props.type) {
      //removed this from if condition [open]
      getSystemCodeTypes(props);
    }
    // eslint-disable-next-line
  }, [props]);

  return (
    <Select
      fullWidth
      name={props.name}
      required={props.required}
      value={props.value}
      onChange={props.onChange}
      inputProps={props.inputProps}
    >
      <MenuItem value="">
        <em>Blank</em>
      </MenuItem>
      {options.map((item, index) => (
        <MenuItem key={index} value={item.code}>
          {item.code} - {item.description}
        </MenuItem>
      ))}
    </Select>
  );
}
