import React, { useState } from 'react';
import { InputLabel, Select, MenuItem } from '@material-ui/core';
import { listCommonId } from '../../services/ClientAccountService';

export default function SelectSystemCode(props) {
  const [options, setOptions] = useState([]);

  const getCommonIds = async () => {
    const data = await listCommonId(props.filter);

    setOptions(data.commonIdsList);
  };

  React.useEffect(() => {
    getCommonIds();

    // eslint-disable-next-line
  }, [
    props.filter.correspondent,
    props.filter.branch,
    props.filter.accountNo,
    props.filter.accountName,
    props.filter.masterAccountNo,
    props.filter.rep,
  ]);

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
        <MenuItem value="">
          <em>Blank</em>
        </MenuItem>
        {options.length ? (
          options.map((item, index) => (
            <MenuItem key={index} value={item.commonId}>
              {item.commonId}
            </MenuItem>
          ))
        ) : (
          <MenuItem key="" value=""></MenuItem>
        )}
      </Select>
    </>
  );
}
