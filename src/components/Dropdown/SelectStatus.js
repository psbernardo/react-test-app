import React, { useState } from 'react';
import { InputLabel, Select, MenuItem, FormControl } from '@material-ui/core';
import { listSystemCode } from '../../services/SystemCodeService';
import QueryParam from '../../services/QueryParamService';

export default function SelectStatus(props) {
  const [statusList, setStatusList] = useState([]);
  const [mounted, setMounted] = React.useState(false);
  const [currentSelected, setCurrentSelected] = useState({
    note: '',
    code: '',
  });
  const [previousSelected, setPreviousSelected] = useState({
    note: '',
    code: '',
  });
  const [initialSelected, setInitialSelected] = useState({
    note: '',
    code: '',
  });

  const getStatusList = async () => {
    const param = QueryParam.get({
      type: 'Status',
      subType: 'Bank Request',
      code: '',
      description: '',
    });
    const { systemCodesList } = await listSystemCode(param);
    const statusZero = [];
    const statusList = [];

    // Put status with 0 at note to end of list
    for (let i = 0; i < systemCodesList.length; i++) {
      if (Number(systemCodesList[i].note) === 0) {
        statusZero.push(systemCodesList[i]);
      } else {
        statusList.push(systemCodesList[i]);
      }
    }
    // sort
    statusList.sort(function(a, b) {
      return Number(a.note) > Number(b.note)
        ? 1
        : Number(a.note) < Number(b.note)
        ? -1
        : 0;
    });
    // append zeroes at the end of the array
    for (let i = 0; i < statusZero.length; i++) {
      statusList.push(statusZero[i]);
    }

    setStatusList(statusList);

    for (let i = 0; i < statusList.length; i++) {
      if (statusList[i].code === props.value) {
        setCurrentSelected(statusList[i]);
        setInitialSelected(statusList[i]);
      }
    }
  };

  const handleChange = (e) => {
    const input = e.currentTarget.name ? e.currentTarget : e.target;

    for (let i = 0; i < statusList.length; i++) {
      if (statusList[i].code === input.value) {
        const index = Number(statusList[i].note);
        // when selected is 0, save current to previous
        if (index === 0) {
          if (Number(currentSelected.note) !== 0) {
            setPreviousSelected(currentSelected);
          }
        }

        setCurrentSelected(statusList[i]);
        // only set previous if note is greater than first stage
        // and minimum stage is the initial value
        if (index > 1 && input.value !== initialSelected.code) {
          setPreviousSelected(statusList[i - 1]);
        }
        // if the current selected is the initial selected, clear the previous selected
        if (input.value === initialSelected.code) {
          setPreviousSelected({ note: '', code: '' });
        }
      }
    }
    props.onChange(e);
  };

  const statusIsActive = (status) => {
    // only status of next stage from initial but not when stage is 0 and status is currently selected
    // or always show 0 and no more when current is sent and initial is initiated
    // or show previously selected
    if (
      (Number(initialSelected.note) + 1 === Number(status.note) &&
        Number(currentSelected.note) !== 0 &&
        Number(currentSelected.note) !== Number(status.note)) ||
      (Number(status.note) === 0 &&
        Number(currentSelected.note) !== 5 &&
        Number(initialSelected.note) !== 4) ||
      status.code === previousSelected.code
    ) {
      return true;
    } else {
      return false;
    }
  };

  React.useEffect(() => {
    if (!statusList.length && !mounted) {
      getStatusList();
    }
    return () => {
      setMounted(true);
    };
    // eslint-disable-next-line
  }, [statusList, mounted]);

  return (
    <FormControl
      error={props.error}
      fullWidth
      disabled={
        initialSelected.note === '0' ||
        initialSelected.note === '5' ||
        props.disabled
      }
    >
      <InputLabel shrink required={props.required}>
        Status
      </InputLabel>
      <Select
        displayEmpty
        fullWidth
        label="Status"
        name="status"
        onChange={handleChange}
        value={props.value ? props.value : ''}
      >
        {statusList.length ? (
          statusList.map((item, index) => (
            <MenuItem
              key={index}
              value={item?.code}
              style={{
                display: statusIsActive(item) ? 'block' : 'none',
                color: Number(item.note) === 0 ? '#E74C3C' : '#131215',
                fontStyle:
                  previousSelected.code === item.code && Number(item.note) !== 0
                    ? 'italic'
                    : 'normal',
              }}
            >
              {item?.description}
            </MenuItem>
          ))
        ) : (
          <MenuItem key="" value=""></MenuItem>
        )}
      </Select>
    </FormControl>
  );
}
