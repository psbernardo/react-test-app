import React, { useState } from 'react';
import {
  notifySuccess,
  notifyError,
} from 'components/Notification/Notification';
import { listUserAccess, saveUserAccess } from 'services/UserAccessService';
import { Box, CircularProgress, Button } from '@material-ui/core';
import Table from 'components/Table/Table';
import SelectDefaultPageAccess from '../../../components/Dropdown/SelectDefaultPageAccess';
import SelectAdministrator from '../../../components/Dropdown/SelectAdministrator';
import useStyles from '../../../styles';

export default function AccessTable({ params }) {
  const classes = useStyles();

  const options = {
    rowsPerPage: 100,
    customToolbarSelect: (selectedRows, a, b) => {
      return (
        <div
          className={classes.grdRow}
          style={{ margin: 0, padding: 0, marginRight: 20 }}
        >
          <div className={classes.grdCell1}>
            <Button
              style={{ marginRight: 20 }}
              variant="contained"
              color="secondary"
              size="medium"
              onClick={() => {
                handleMultipleEdit(selectedRows.data, 'Read');
              }}
            >
              Read Access
            </Button>

            <Button
              variant="contained"
              color="secondary"
              size="medium"
              onClick={() => {
                handleMultipleEdit(selectedRows.data, 'Full');
              }}
            >
              Full Access
            </Button>
          </div>
        </div>
      );
    },
  };

  const columns = [
    {
      name: 'menu',
      label: 'Menu',
    },
    {
      name: 'subMenu',
      label: 'Sub Menu',
    },
    {
      name: 'pageName',
      label: 'Page Name',
    },
    {
      name: 'access',
      label: 'Access',
      options: {
        customBodyRenderLite: (dataIndex) => {
          return (
            <div
              align={'left'}
              className={classes.grdRow}
              style={{
                margin: 0,
                padding: 0,
                width: 200,
                textAlign: 'center',
                backgroundColor: 'whitesmoke',
              }}
            >
              <SelectDefaultPageAccess
                name="access"
                label=""
                value={rows[dataIndex].access}
                onChange={(e) => {
                  handleSave(dataIndex, e.target.value);
                }}
              ></SelectDefaultPageAccess>
            </div>
          );
        },
      },
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

  const handleSave = async (dataIndex, newAccessType) => {
    try {
      await saveUserAccess(rows[dataIndex], newAccessType);
      const copy = [...rows];
      copy[dataIndex].access = newAccessType;
      setRows(copy);
      notifySuccess('User access was updated.');
    } catch (error) {
      notifyError(error.message);
    }
  };

  const handleMultipleEdit = async (data, newAccessType) => {
    const copy = [...rows];
    try {
      for (let i = 0; i < data.length; i++) {
        const dataIndex = data[i].dataIndex;
        await saveUserAccess(rows[dataIndex], newAccessType);
        copy[dataIndex].access = newAccessType;
      }
      notifySuccess('User access was updated.');
    } catch (error) {
      notifyError(error.message);
    } finally {
      setRows(copy);
    }
  };

  const [loading, setLoading] = React.useState(false);
  const [rows, setRows] = useState([]);

  const [selectedUser, setSelectedUser] = useState('');

  const handleUserChange = async (e) => {
    setLoading(true);

    setSelectedUser(e.target.value);
    try {
      const userAccessesList = await listUserAccess(e.target.value);
      setRows(userAccessesList);
    } catch (error) {
      notifyError(error.message);
    }

    setLoading(false);
  };

  return (
    <div className={classes.root}>
      <Box component="div" mt={5}>
        <div>
          <div className={classes.grdRow}>
            <div className={classes.grdCell1} style={{ marginRight: 30 }}>
              <SelectAdministrator
                name="access"
                label="Access"
                value={selectedUser}
                onChange={handleUserChange}
              ></SelectAdministrator>
            </div>
            <div className={classes.grdCell1} style={{ marginRight: 30 }}></div>
            <div className={classes.grdCell1} style={{ marginRight: 30 }}></div>
            <div
              className={classes.grdCell1}
              style={{
                textAlign: 'right',
                marginTop: 30,
                color: '#00ce7d',
              }}
            >
              <small>Changes will be saved automatically.</small>
            </div>
          </div>
        </div>
      </Box>
      <Box component="div" mt={2}>
        {loading ? (
          <CircularProgress disableShrink />
        ) : (
          <Table
            title={'Access'}
            data={rows}
            columns={columns}
            options={options}
          />
        )}
      </Box>
    </div>
  );
}
