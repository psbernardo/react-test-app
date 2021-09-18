import React, { useState } from 'react';

import {
  createCredential,
  updateCredential,
  deleteCredential,
  listCredential,
} from '../../../services/CredentialService';

import { useConfirm } from 'material-ui-confirm';

import {
  notifySuccess,
  notifyInfo,
  notifyError,
} from 'components/Notification/Notification';

import {
  Add as AddIcon,
  Create as EditIcon,
  Delete as DeleteIcon,
} from '@material-ui/icons';

import {
  Button,
  Box,
  TextField,
  InputLabel,
  Select,
  MenuItem,
  IconButton,
} from '@material-ui/core';

import Table, { columnType } from 'components/Table/Table';
import useStyles from '../../../styles';
import SearchButton from '../../../components/Button/Search';
import QueryParam from '../../../services/QueryParamService';

import { stringToPBObjectDate } from '../../../services/ConvertService';

import CredentialModal from './CredentialModal';

export default function CredentialTable() {
  const classes = useStyles();
  const confirm = useConfirm();

  const options = {
    onRowsDelete: (selectedItems) => {
      handleDelete(selectedItems.data);
      return false;
    },
  };

  const columns = [
    {
      name: '',
      type: columnType.buttons,
      options: {
        customBodyRenderLite: (dataIndex) => {
          return (
            <div
              align={'left'}
              className={classes.grdRow}
              style={{ margin: 0, padding: 0 }}
            >
              {' '}
              <div className={classes.grdCellNone}>
                <IconButton
                  aria-label="delete"
                  onClick={() => {
                    handleDelete([
                      {
                        dataIndex: dataIndex,
                      },
                    ]);
                  }}
                >
                  <DeleteIcon />
                </IconButton>
              </div>
              <div align={'left'} className={classes.grdCell1}>
                <IconButton
                  aria-label="edit"
                  onClick={() => handleOpen(rows[dataIndex])}
                >
                  <EditIcon />
                </IconButton>
              </div>
            </div>
          );
        },
      },
    },
    {
      name: 'credential',
      label: 'Credential',
    },
    {
      name: 'userName',
      label: 'Username',
    },
    {
      name: 'fromDate',
      label: 'From Date',
      type: columnType.date,
    },
    {
      name: 'toDate',
      label: 'To Date',
      type: columnType.date,
    },
    {
      name: 'password',
      label: 'Password',
      options: {
        display: false,
      },
    },
    {
      name: 'passwordPrefix',
      label: 'Password Prefix',
    },
    {
      name: 'host',
      label: 'Host',
    },
    {
      name: 'port',
      label: 'Port',
    },
    {
      name: 'hostKey',
      label: 'Host Key',
      options: {
        display: false,
      },
    },
    {
      name: 'type',
      label: 'Type',
    },
    {
      name: 'ftpDir',
      label: 'FTP Directory',
    },
    {
      name: 'note',
      label: 'Note',
      options: {
        display: false,
      },
    },
    {
      name: 'a-selectAll',
      label: 'Select All',
      options: {
        display: true,
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

  const [rowData, setRowData] = React.useState({});
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [showFilter, setShowFilter] = React.useState(true);
  const [rows, setRows] = useState([]);

  const [searchData, setSearchData] = React.useState(
    QueryParam.get({
      credential: '',
      userName: '',
      status: '',
    })
  );

  const validatePassword = (password, fieldName) => {
    let isValid = true;
    if (password.length < 8) {
      isValid = false;
      notifyError(fieldName + ' should have at least 8 characters.');
    } else if (password.search(/\d/) == -1) {
      isValid = false;
      notifyError(fieldName + ' should contain at least 1 number.');
    } else if (password.search(/[a-z]/) == -1) {
      isValid = false;
      notifyError(fieldName + ' should contain at least 1 small letter.');
    } else if (password.search(/[A-Z]/) == -1) {
      isValid = false;
      notifyError(fieldName + ' should contain at least 1 capital letter.');
    } else if (password.search('[#?!@$%^&*-]') == -1) {
      isValid = false;
      notifyError(fieldName + ' should contain at least 1 special character.');
    }
    return isValid;
  };

  const handleChange = (e, x) => {
    const input = e.currentTarget.name ? e.currentTarget : e.target;
    setSearchData({
      ...searchData,
      [input.name]: input.value,
    });
  };

  const handleSearch = async () => {
    try {
      setLoading(true);
      QueryParam.set(searchData);
      const data = await listCredential(searchData);
      setRows(data.credentialsList);
      notifyInfo(data.credentialsList.length + ' search results.');
    } catch (error) {
      console.error(error);
      notifyError(error.message);
    } finally {
      setLoading(false);
    }
  };

  //Opens modal for edit
  const handleOpen = (data) => {
    if (!data) {
      data = {
        fromDate: stringToPBObjectDate(new Date().toISOString().split('T')[0]),
        toDate: stringToPBObjectDate(new Date().toISOString().split('T')[0]),
        note: '',
        status: 'active',
        userName: '',
        credential: '',
        host: '',
        password: '',
        passwordPrefix: '',
        port: '',
        type: '',
        ftpDir: '',
      };
    }

    setRowData(data);
    setOpen(true);
  };

  const handleClose = async (data, isEdit) => {
    try {
      let isValid = true;

      if (!data) {
        setOpen(false);
        return;
      }

      if (!data.credential) {
        notifyError('Credential is required.');
        isValid = false;
      }
      if (!data.userName) {
        notifyError('Username is required.');
        isValid = false;
      }
      if (!data.password) {
        notifyError('Password is required.');
        isValid = false;
      } else {
        isValid = isValid && validatePassword(data.password, 'Password');
      }
      if (!data.fromDate) {
        notifyError('From Date is required.');
        isValid = false;
      }
      if (!data.toDate) {
        notifyError('To Date is required.');
        isValid = false;
      }
      if (!data.host) {
        notifyError('Host is required.');
        isValid = false;
      }
      if (!data.status) {
        notifyError('Status is required.');
        isValid = false;
      }
      if (data.type) {
        if (!data.ftpDir) {
          notifyError('FTP Directory is required.');
          isValid = false;
        }
      }

      if (!isValid) {
        return;
      }

      if (isEdit) {
        //EDIT
        const resp = await updateCredential(data);

        if (resp.credential.credentialId === 0) {
          notifyError('Credential already exists');
          return;
        } else {
          const rowsCopy = [...rows];
          const index = rows.indexOf(rowData);
          rowsCopy[index] = resp.credential;
          setRows(rowsCopy);
          notifySuccess('Credential has been updated.');
        }
      } else {
        //ADD
        const resp = await createCredential(data);

        if (resp.credential.credentialId === 0) {
          notifyError('Credential already exists');
          return;
        } else {
          setRows([resp.credential, ...rows]);
          notifySuccess('New Credential has been added.');
        }
      }

      setOpen(false);
    } catch (error) {
      notifyError(error.message);
    }
  };

  const handleDelete = (rowsToDelete) => {
    let messageKey = '';
    if (rowsToDelete.length === 1) {
      messageKey = rows[rowsToDelete[0].dataIndex].credential;
    } else {
      messageKey = rowsToDelete.length + ' items';
    }

    let idsToDelete = [];
    confirm({
      description:
        "You are about to delete '" +
        messageKey +
        "'. Please confirm your action.",
      confirmationText: 'Yes, Delete',
    }).then(async () => {
      const rowsCopy = [...rows];
      try {
        for (const r of rowsToDelete) {
          const index = r.dataIndex;
          await deleteCredential(rows[index].credentialId);
          idsToDelete.push(rows[index].credentialId);
        }
      } catch (error) {
        notifyError(error.message);
      } finally {
        const filtered = rowsCopy.filter(
          (r) => !idsToDelete.includes(r.credentialId)
        );
        setRows(filtered);
        notifySuccess(messageKey + ' Credential has been deleted');
      }
    });
  };

  /*=========================================================================================
  Table component
  ===========================================================================================*/
  return (
    <div className={classes.root}>
      <Box component="div" mt={5}>
        {showFilter ? (
          <div>
            <div className={classes.grdRow}>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <InputLabel shrink>Credential</InputLabel>
                <TextField
                  fullWidth
                  name="credential"
                  value={searchData.credential}
                  onChange={handleChange}
                />
              </div>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <InputLabel shrink>Username</InputLabel>
                <TextField
                  fullWidth
                  name="userName"
                  value={searchData.userName}
                  onChange={handleChange}
                />
              </div>
              <div className={classes.grdCell1}>
                <InputLabel shrink id="status">
                  Status
                </InputLabel>
                <Select
                  name="status"
                  fullWidth
                  value={searchData.status}
                  onChange={handleChange}
                >
                  <MenuItem value="">
                    <em>Blank</em>
                  </MenuItem>
                  <MenuItem value="active">Active</MenuItem>
                  <MenuItem value="inactive">Inactive</MenuItem>
                </Select>
              </div>
            </div>
          </div>
        ) : null}
        <div className={classes.actionContainer}>
          <div className={classes.grdCellNone} style={{ marginRight: 10 }}>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              startIcon={<AddIcon />}
              onClick={() => {
                handleOpen();
              }}
            >
              Add New
            </Button>
          </div>
          <div className={classes.grdCellNone}>
            <SearchButton
              onClick={handleSearch}
              loading={loading}
              showfilter={(status) => setShowFilter(status)}
            />
          </div>
        </div>
      </Box>
      <Box component="div" mt={2}>
        <Table
          title={'Credential'}
          data={rows}
          columns={columns}
          options={options}
        />
      </Box>
      {open && (
        <CredentialModal
          onClose={handleClose}
          open={open}
          value={rowData}
        ></CredentialModal>
      )}
    </div>
  );
}
