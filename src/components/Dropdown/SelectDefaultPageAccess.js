import React, { useState } from 'react';
import { InputLabel, Select, MenuItem } from '@material-ui/core';
import { listDefaultAccessOption } from '../../services/AdministratorService';

export default function SelectDefaultPageAccess(props) {
  const [options, setOptions] = useState([]);
  const [mounted, setMounted] = React.useState(false);

  const getOptions = async () => {
    const data = await listDefaultAccessOption();
    setOptions(data.defaultAccessOptionsList.filter((name) => name));
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
        value={props.value}
        onChange={props.onChange}
      >
        <MenuItem value="">None</MenuItem>
        <MenuItem value="Read">Read</MenuItem>
        <MenuItem value="Full">Full</MenuItem>
        {options?.length ? (
          options.map((item, index) => (
            <MenuItem key={index} value={item}>
              {item}
            </MenuItem>
          ))
        ) : (
          <MenuItem key="" value=""></MenuItem>
        )}
      </Select>
    </>
  );
}
