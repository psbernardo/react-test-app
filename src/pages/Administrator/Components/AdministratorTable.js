import React, { useState } from 'react';
import AdministratorModal from './AdministratorModal';
import {
  notifySuccess,
  notifyInfo,
  notifyError,
} from 'components/Notification/Notification';
import {
  createAdministrator,
  listAdministrator,
  deleteAdministrator,
  updateAdministrator,
} from '../../../services/AdministratorService';

import { useConfirm } from 'material-ui-confirm';

import { Button, Box, TextField, IconButton } from '@material-ui/core';
import {
  Add as AddIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
} from '@material-ui/icons';

import Table, { columnType } from 'components/Table/Table';
import useStyles from '../../../styles';
import SearchButton from '../../../components/Button/Search';
import SelectSystemCode from 'components/Dropdown/SelectSystemCode';
import QueryParam from '../../../services/QueryParamService';

/*Moment JS*/
import moment from 'moment-timezone';

export default function AdministratorTable({ params }) {
  const classes = useStyles();
  const confirm = useConfirm();

  const options = {
    isRowSelectable: (dataIndex) => isDeleteEnabled(dataIndex),
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
              <div className={classes.grdCellNone}>
                <IconButton
                  aria-label="delete"
                  disabled={!isDeleteEnabled(dataIndex)}
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
              <div align={'left'} className={classes.grdCellNone}>
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
      name: 'name',
      label: 'Name',
      visibleState: useState(true),
      align: 'left',
      order: 1,
    },
    {
      name: 'email',
      label: 'Email',
      visibleState: useState(true),
      align: 'left',
      order: 2,
    },
    {
      name: 'mobileNo',
      label: 'Mobile No',
      visibleState: useState(true),
      align: 'left',
      order: 3,
    },
    {
      name: 'userType',
      label: 'User Type',
    },
    {
      name: 'status',
      label: 'Status',
    },
    {
      name: 'authenticationMode',
      label: 'Authentication Mode',
    },
    {
      name: 'createdAt',
      label: 'Created At',
      visibleState: useState(true),
      align: 'left',
      order: 4,
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

  const isDeleteEnabled = (dataIndex) => {
    return rows[dataIndex].status !== 'Inactive';
  };

  const [rowData, setRowData] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [showFilter, setShowFilter] = React.useState(true);
  const [rows, setRows] = useState([]);
  const [modalAddAction, setModalAddAction] = React.useState(false);
  const [searchData, setSearchData] = React.useState(
    QueryParam.get({
      name: '',
      email: '',
      userType: '',
      status: 'Active',
    })
  );

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
      const data = await listAdministrator(searchData);
      const rows = data.administratorsList.map((data) => ({
        usrId: data.usrId,
        name: data.name,
        email: data.email,
        createdAt: data.createdAt
          ? moment(new Date(data.createdAt.seconds * 1000)).format(
              'MM/DD/YYYY hh:mm'
            )
          : '--',
        password: data.password,
        passwordConfirm: data.password,
        defaultAccess: data.defaultAccess,
        mobileNo: data.mobileNo,
        userType: data.userType,
        status: data.status,
        admin: data.admin,
        correspondent: data.correspondent,
        authenticationMode: data.authenticationMode,
      }));
      setRows(rows);
      notifyInfo(data.administratorsList.length + ' search results.');
    } catch (error) {
      console.error(error);
      notifyError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleOpen = (data, isAdd) => {
    if (isAdd) {
      data = {
        usrId: 0,
        name: '',
        email: '',
        password: '',
        passwordConfirm: '',
        defaultAccess: '',
        userType: 'Client',
        status: 'Active',
        admin: false,
        correspondent: '',
        authenticationMode: 'Email',
      };
      setModalAddAction(true);
    } else {
      data.correspondent = data.correspondent.trim();
      setModalAddAction(false);
    }
    setRowData(data);
    setOpen(true);
  };

  const handleClose = async (data, isAdd) => {
    if (!data) {
      setOpen(false);
      return;
    }
    let valid = true;
    try {
      if (!data.name) {
        notifyError('Name is required.');
        valid = false;
      }

      if (!data.email) {
        notifyError('Email is required.');
        valid = false;
      }

      if (!data.defaultAccess || data.defaultAccess === '') {
        notifyError('Default Page Access is required.');
        valid = false;
      }

      if (!data.mobileNo) {
        notifyError('Mobile No is required.');
        valid = false;
      }

      if (!data.userType) {
        notifyError('User type is required.');
        valid = false;
      } else if (data.userType === 'Client') {
        if (data.admin) {
          let correspondent = !data.correspondent
            ? ''
            : data.correspondent.trim();
          if (correspondent === '') {
            notifyError('Correspondent is required.');
            valid = false;
          }
        }
      }

      if (!data.status) {
        notifyError('Status is required.');
        valid = false;
      }

      if (isAdd) {
        if (!data.password) {
          notifyError('Password is required.');
          valid = false;
        }

        if (data.password !== data.passwordConfirm) {
          notifyError('Confirm password.');
          valid = false;
        }
      } else {
        if (data.password) {
          if (data.password !== data.passwordConfirm) {
            notifyError('Confirm password.');
            valid = false;
          }
        }
      }

      if (!valid) {
        return;
      }

      if (data.userType != 'Client') {
        data.admin = '';
      }

      if (data.userType != 'Client') {
        data.correspondent = '';
      }

      if (isAdd) {
        //ADD
        const resp = await createAdministrator(data);
        const response = resp.administrator;
        response.createdAt = response.createdAt
          ? moment(new Date(response.createdAt.seconds * 1000)).format(
              'MM/DD/YYYY hh:mm'
            )
          : '--';
        response.password = '';
        setRows([response, ...rows]);
        notifySuccess('New Administrator has been added.');
      } else {
        const resp = await updateAdministrator(data);
        const response = resp.administrator;

        response.createdAt = response.createdAt
          ? moment(new Date(response.createdAt.seconds * 1000)).format(
              'MM/DD/YYYY hh:mm'
            )
          : '--';
        response.password = '';
        const rowsCopy = [...rows];
        const index = rows.indexOf(rowData);
        rowsCopy[index] = response;
        setRows(rowsCopy);
        notifySuccess('An Administrator has been updated.');
      }
      setOpen(false);
    } catch (error) {
      console.error(error);
      notifyError(error.message);
    }
  };

  const handleDelete = (rowsToDelete) => {
    let messageKey = '';
    if (rowsToDelete.length === 1) {
      messageKey = rows[rowsToDelete[0].dataIndex].name;
    } else {
      messageKey = rowsToDelete.length + ' items';
    }
    let idsToDelete = [];
    confirm({
      description:
        "You are about to delete '" +
        messageKey +
        "'. Please confirm your action.",
      confirmationText: 'Yes, delete',
    }).then(async () => {
      const rowsCopy = [...rows];
      try {
        for (const r of rowsToDelete) {
          const index = r.dataIndex;
          await deleteAdministrator(rowsCopy[index].usrId);
          idsToDelete.push(rowsCopy[index].usrId);
        }
      } catch (error) {
        console.error(error);
        notifyError(error.message);
      } finally {
        for (let i = 0; i < rowsCopy.length; i++) {
          if (idsToDelete.includes(rowsCopy[i].usrId)) {
            rowsCopy[i].status = 'Inactive';
          }
        }
        setRows(rowsCopy);
        notifySuccess(messageKey + ' has been deleted');
      }
    });
  };

  return (
    <div className={classes.root}>
      <Box component="div" mt={5}>
        {showFilter ? (
          <div>
            <div className={classes.grdRow}>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <TextField
                  fullWidth
                  name="name"
                  label="Name"
                  value={searchData.name}
                  onChange={handleChange}
                  inputProps={{ maxLength: 100 }}
                  InputLabelProps={{ shrink: true }}
                />
              </div>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <TextField
                  fullWidth
                  name="email"
                  label="Email"
                  value={searchData.email}
                  onChange={handleChange}
                  inputProps={{ maxLength: 100 }}
                  InputLabelProps={{ shrink: true }}
                />
              </div>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <SelectSystemCode
                  name="userType"
                  label="User Type"
                  type="User Type"
                  value={searchData.userType}
                  onChange={handleChange}
                ></SelectSystemCode>
              </div>
              <div className={classes.grdCell1}>
                <SelectSystemCode
                  name="status"
                  label="Status"
                  type="Status"
                  subType="AI"
                  value={searchData.status}
                  onChange={handleChange}
                ></SelectSystemCode>
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
                handleOpen('', true);
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
        <Table title={'User'} data={rows} columns={columns} options={options} />
      </Box>
      {open && (
        <AdministratorModal
          onClose={handleClose}
          open={open}
          add={modalAddAction}
          value={rowData}
        ></AdministratorModal>
      )}
    </div>
  );
}
