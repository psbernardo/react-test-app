import React, { useState } from 'react';
import { InputLabel, Select, MenuItem } from '@material-ui/core';
import { listSystemCodes } from '../../services/CommonService';

export default function SelectAccountProcess2(props) {
  const [systemCode, setSystemCode] = useState([]);
  const [mounted, setMounted] = React.useState(false);

  const getSystemCodeTypes = async () => {
    const { systemcodesList } = await listSystemCodes(
      "Account Process",
      props.subType
    );

    setSystemCode(systemcodesList);
  };

  React.useEffect(() => {
    if (!systemCode.length && !mounted) {
      getSystemCodeTypes();
    }
    return () => {
      setMounted(true);
    };
    // eslint-disable-next-line
    }, [systemCode, mounted]);

  return (
    <>
      <InputLabel shrink required={props.required}>
        {props.label}
      </InputLabel>
      <Select
        displayEmpty
        fullWidth
        disable={props.disable}
        name={props.name}
        value={props.value ? props.value : ''}
        onChange={props.onChange}
      >
         
        {systemCode.length ? (
          systemCode.map((item, index) => (
            <MenuItem key={index} value={item.code}>
              {item.code}
            </MenuItem>
          ))
        ) : (
          <MenuItem key="" value=""></MenuItem>
        )}
      </Select>
    </>
  );
}


