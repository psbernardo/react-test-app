import React, { useState } from 'react';
import { InputLabel, Select, MenuItem } from '@material-ui/core';
import { dropdownRecipients } from '../../services/EmailManagerService';

export default function SelectRecepientEmailGroup(props) {
  const [recipients, setRecipients] = useState([]);
  const [mounted, setMounted] = React.useState(false);

  const getRecipients = async () => {
    const { emailManagersList } = await dropdownRecipients();
    setRecipients(emailManagersList);
  };

  React.useEffect(() => {
    if (!recipients.length && !mounted) {
      getRecipients();
    }
    return () => {
      setMounted(true);
    };
    // eslint-disable-next-line
    }, [recipients, mounted]);

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
        {recipients.length ? (
          recipients.map((item, index) => (
            <MenuItem key={index} value={item.recipientEmailGroup}>
              {item.recipientEmailGroup}
            </MenuItem>
          ))
        ) : (
          <MenuItem key="" value=""></MenuItem>
        )}
      </Select>
    </>
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
