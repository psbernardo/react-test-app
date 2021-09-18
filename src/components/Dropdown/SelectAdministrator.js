import React, { useState, useEffect } from 'react';
import { InputLabel, Select, MenuItem } from '@material-ui/core';
import { notifyError } from 'components/Notification/Notification';
import { listAdministrator } from 'services/AdministratorService';

export default function SelectAdministrator(props) {
  const [users, setUsers] = useState([]);

  useEffect(
    () => {
      async function init() {
        try {
          const { administratorsList } = await listAdministrator({});

          setUsers(administratorsList);
        } catch (error) {
          notifyError(error.message);
        }
      }
      init();
    },
    // eslint-disable-next-line
    []
  );

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
        value={props.value}
        onChange={props.onChange}
      >
        <MenuItem key="0" value=""></MenuItem>
        {users.map(function(item) {
          return (
            <MenuItem key={item.usrId} value={item.usrId || ''}>
              {item.name}
            </MenuItem>
          );
        })}
      </Select>
    </>
  );
}
