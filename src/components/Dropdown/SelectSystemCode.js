import React, { useState } from 'react';
import { InputLabel, Select, MenuItem, FormControl } from '@material-ui/core';
import { listSystemCodes } from '../../services/CommonService';

export default function SelectSystemCode(props) {
  const [systemCode, setSystemCode] = useState([]);
  const [mounted, setMounted] = React.useState(false);

  const getSystemCodeTypes = async () => {
    const { systemcodesList } = await listSystemCodes(
      props.type,
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
    <FormControl error={props.error} fullWidth>
      <InputLabel shrink required={props.required}>
        {props.label}
      </InputLabel>
      <Select
        displayEmpty
        required
        fullWidth
        disabled={props.disabled}
        name={props.name}
        value={props.value ? props.value : ''}
        onChange={props.onChange}
      >
        <MenuItem key="blank" value="">
          <em>Blank</em>
        </MenuItem>
        {systemCode.length ? (
          systemCode.map((item, index) => (
            <MenuItem key={index} value={item?.code}>
              {props.itemLabel === 'code' ? item?.code : item?.description}
            </MenuItem>
          ))
        ) : (
          <MenuItem key="" value=""></MenuItem>
        )}
      </Select>
    </FormControl>
  );
}

// export const SelectBroker = (props) => {
//   return <SelectSystemCode {...props} type={'Broker'} />;
// };

// export const SelectStatus = (props) => {
//   return <SelectSystemCode {...props} type={'Status'} />;
// };

// export const SelectLegalEntity = (props) => {
//   return <SelectSystemCode {...props} type={'Legal Entity'} />;
// };

// export const SelectClientAccountType = (props) => {
//   return <SelectSystemCode {...props} type={'Client Account Type'} />;
// };

// export const SelectMarginType = (props) => {
//   return <SelectSystemCode {...props} type={'Margin Type'} />;
// };

// export const SelectTEFRA = (props) => {
//   return <SelectSystemCode {...props} type={'TEFRA'} />;
// };

// export const SelectInvestmentObjective = (props) => {
//   return <SelectSystemCode {...props} type={'Investment Objective'} />;
// };

// export const SelectW8W9 = (props) => {
//   return <SelectSystemCode {...props} type={'W8/W9'} />;
// };
