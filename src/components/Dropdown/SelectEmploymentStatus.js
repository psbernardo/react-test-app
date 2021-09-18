/*ReactJS*/
import React, { Fragment } from 'react';

import { listSystemCodes } from '../../services/CommonService';
import { Select, MenuItem, InputLabel } from '@material-ui/core';

export default function SelectEmploymentStatus(props) {
  const [options, setOptions] = React.useState([]);

  //get list from backend
  const getSystemCodeTypes = async () => {
    let type = 'Employment Status';
    const { systemcodesList } = await listSystemCodes(type);
    setOptions(systemcodesList);
  };
  React.useEffect(() => {
    if (!options.length && !props.value) {
      //removed this from if condition [open]
      getSystemCodeTypes();
    }
    // eslint-disable-next-line
  }, [props]);

  return (
    <Fragment>
      <InputLabel shrink required={props.required}>
        {props.label}
      </InputLabel>
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
        {options.map((systemCode, index) => (
          <MenuItem key={index} value={systemCode.code}>
            {' '}
            {systemCode.description}{' '}
          </MenuItem>
        ))}
      </Select>
    </Fragment>
  );
}
