import React, { useState } from 'react';
import { InputLabel, Select, MenuItem, FormControl } from '@material-ui/core';
import { listSystemCodes } from '../../services/CommonService';

export default function SelectPrivacyConsent(props) {
  const [systemCode, setSystemCode] = useState([]);
  const [mounted, setMounted] = React.useState(false);

  const getSystemCodeTypes = async () => {
    const { systemcodesList } = await listSystemCodes('Privacy Consent', '');
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
    <FormControl error={props.error} fullWidth>
      <InputLabel shrink required={props.required}>
        {props.label}
      </InputLabel>
      <Select
        displayEmpty
        fullWidth
        disable={props.disable}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
      >
        <MenuItem value="">
          <em>Blank</em>
        </MenuItem>
        {systemCode.map(function(item) {
          return (
            <MenuItem key={item.code} value={item.code || ''}>
              {item.code + ' - ' + item.description}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
}
