import React, { useState, useEffect } from 'react';
import { Box, FormControlLabel, RadioGroup, Radio, } from '@material-ui/core';
import {
    notifySuccess,
    notifyError,
  } from 'components/Notification/Notification';
import {
    listAccessorsOnCreate,
    createAccountAccess,
    deleteAccountAccess,
} from '../../../services/ClientAccountAccessService';

import Table from 'components/Table/Table';

export default function AccessTable({accountId}) {
  const [rows, setRows] = useState([]);
  const [rowsSelected, setRowsSelected] = React.useState([]);
  const [selectedListStatus, setSelectedListStatus] = React.useState('Show All');
  const [newRowsSelected, setNewRowsSelected] = React.useState([]);

  const fetchData = async () => {
    const data = await listAccessorsOnCreate(accountId);
    setRows(data.accountAccessorsList);

    let selected = [];

    data.accountAccessorsList.filter(function(v, index) {
      if (v.accountAccessId !== 0) {
        selected.push(index);
      }
    });

    setRowsSelected(selected);
  }

  useEffect(
    () => {
      fetchData();
    },
    // eslint-disable-next-line
    []
  );

  const options = {
    selectableRowsOnClick: true,
    selectableRows: 'multiple',
    selectableRowsHeader: true,
    selectToolbarPlacement: 'none',
    rowsSelected: rowsSelected,
    setRowProps: (rowData, dataIndex, rowIndex) => ({
        onMouseUp: () => {
           const param = {
              accountAccessId: rows[dataIndex].accountAccessId,
              usrId: rows[dataIndex].usrId,
              accountId: accountId,
              name: rows[dataIndex].name,
           }

          if (rows[dataIndex].accountAccessId !== 0) {
            rows[dataIndex].accountAccessId = 0;
            handleRemove(param, false, 0);

            if (selectedListStatus === 'Show Selected') {
              rows.splice(dataIndex, 1);

              let selected = [];

              rows.filter(function(v, index) {
                if (v.accountAccessId !== 0) {
                  selected.push(index);
                }
              });

              setNewRowsSelected(selected);
            }
          } else {
            rows[dataIndex].accountAccessId = 1;
            handleAdd(param, false, 0);

            if (selectedListStatus === 'Show Unselected') {
              rows.splice(dataIndex, 1);
              setNewRowsSelected([]);
            }
          }
        },
    }),
    onRowSelectionChange: (
        currentRowsSelected,
        allRowsSelected,
        rowsSelected,
      ) => {
        if (selectedListStatus === 'Show All') {
          setRowsSelected(rowsSelected);
        } else {
          setRowsSelected(newRowsSelected);
        }

        if (currentRowsSelected.length === 0) {
          function removeMultipleAccountaccess(item, index) {
            const param = {
              accountAccessId: rows[index].accountAccessId,
              usrId: rows[index].usrId,
              accountId: accountId,
            };
  
            rows[index].accountAccessId = 0;
            handleRemove(param, true, index);
          }
          rows.forEach(removeMultipleAccountaccess);
  
          setRowsSelected(rowsSelected);
  
          if(selectedListStatus === 'Show Selected') {
            rows.splice(0, rows.length);
          }
        }
        if (rowsSelected.length === rows.length && (selectedListStatus === 'Show All' || selectedListStatus === 'Show Unselected')) {
          let count = 0;
  
          function addMultipleAccountaccess(index) {
            count++;
  
            const param = {
              accountAccessId: rows[index].accountAccessId,
              usrId: rows[index].usrId,
              accountId: accountId,
            };
  
            rows[index].accountAccessId = 1;
            handleAdd(param, true, index, count);  
          }
          rowsSelected.forEach(addMultipleAccountaccess);  
  
          if(selectedListStatus === 'Show Unselected') {
            rows.splice(0, rows.length);
          }
        }
      },
  };

  const columns = [
    {
      name: 'name',
      label: 'Name',
    },
    {
      name: 'email',
      label: 'Email',
    },
    {
      name: 'mobileNo',
      label: 'Mobile No',
    },
    {
      name: 'a-selectAll',
      label: 'Select All',
      options: {
        display: true,
        print: false,
        download: false,
        filter: false,
        setCellHeaderProps: () => ({
          style: {
            width: '0px',
            display: 'table-cell',
            padding: 0,
            pointerEvents: 'none',
            fontSize: 0,
          },
        }),
      },
    },
  ];

  const handleAdd = async (param, multiple, count, lastItem) => {
    const message = multiple ? 'All user(s)' : param.name;

    try {
      await createAccountAccess(param);
      if (count === 0) {
        notifySuccess(message + ' has been added.');
      }
    } catch (error) {
      console.error(error);
      notifyError(error.message);
    }

    if (rows.length === lastItem || !multiple && selectedListStatus !== 'Show Unselected') {
        fetchData();
    }
  };

  const handleRemove = async (param, multiple, count) => {
    const message = multiple ? 'All user(s)' : param.name;
    
    try {
      await deleteAccountAccess(param);
      if (count === 0) {
        notifySuccess(message + ' has been removed.');
      }
    } catch (error) {
      console.error(error);
      notifyError(error.message);
    }
  };

  const handleListStatusChange = async (e) => {
    const selectedOption = e.target.value;
    const data = await listAccessorsOnCreate(accountId);

    let selected = [];

    if (selectedOption === 'Show All') {
      data.accountAccessorsList.filter(function(v, index) {
        if (v.accountAccessId !== 0) {
          selected.push(index);
        }
      });

      setRows(data.accountAccessorsList);
      setRowsSelected(selected);
    } else if (selectedOption === 'Show Selected') {
      let showSelected = [];

      data.accountAccessorsList.filter(function(v, index) {
        if (v.accountAccessId !== 0) {
          showSelected.push(v);
        }
      });

      showSelected.filter(function(v, index) {
        selected.push(index);
      });

      setRows(showSelected);
      setRowsSelected(selected);
    } else {
      let showUnselected = [];

      data.accountAccessorsList.filter(function(v, index) {
        if (v.accountAccessId === 0) {
          showUnselected.push(v);
        }
      });

      setRows(showUnselected);
      setRowsSelected([]);
    }

    setSelectedListStatus(selectedOption);
  };

  return (
    <Box>
      <RadioGroup
        style={{ flexDirection: 'row', marginBottom: 10 }}
        name="listStatus"
        value={selectedListStatus}
        onChange={handleListStatusChange}
      >
        <FormControlLabel
          name="showAll"
          label="Show All"
          value="Show All"
          control={<Radio />}
        />
        <FormControlLabel
          name="showSelected"
          label="Show Selected"
          value="Show Selected"
          control={<Radio />}
        />
        <FormControlLabel
          name="showUnselected"
          label="Show Unselected"
          value="Show Unselected"
          control={<Radio />}
        />
      </RadioGroup>
      <Table
          title="Select Users Who Can Access This Account"
          data={rows}
          columns={columns}
          options={options}
      />
    </Box>
  );
}
