import React, { useState } from 'react';
import BankAddressDetailsModal from './BankAddressDetailsModal';
import { Button, Box, IconButton, TextField } from '@material-ui/core';
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
import SearchButton from '../../../components/Button/Search';
import {
  createBankAddress,
  listBankAddress,
  updateBankAddress,
  deleteBankAddress,
} from '../../../services/BankAddressService';
import Table, { columnType } from 'components/Table/Table';
import QueryParam from '../../../services/QueryParamService';
import useStyles from '../../../styles';

export default function BankAddressTable() {
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
      name: 'bankName',
      label: 'Bank Name',
    },
    {
      name: 'bankRoutingNo',
      label: 'Bank Routing No',
    },
    {
      name: 'address',
      label: 'Address',
    },
    {
      name: 'city',
      label: 'City',
    },
    {
      name: 'zipCode',
      label: 'Zip Code',
    },
    {
      name: 'state',
      label: 'State',
    },
    {
      name: 'country',
      label: 'Country',
    },
    {
      name: 'status',
      label: 'Status',
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
    return rows[dataIndex].status !== 'Disabled';
  };

  const [rowData, setRowData] = React.useState({});
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [showFilter, setShowFilter] = React.useState(true);
  const [rows, setRows] = useState([]);
  const [searchData, setSearchData] = React.useState(
    QueryParam.get({
      bankName: '',
      bankRoutingNo: '',
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
      const data = await listBankAddress(searchData);
      setRows(data.bankAddressesList);
      notifyInfo(data.bankAddressesList.length + ' search results.');
    } catch (error) {
      console.error(error);
      notifyError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = (rowsToDelete) => {
    let messageKey = '';
    if (rowsToDelete.length === 1) {
      messageKey = rows[rowsToDelete[0].dataIndex].bankName;
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
          await deleteBankAddress(rows[index].bankAddressId);
          idsToDelete.push(rows[index].bankAddressId);
        }
      } catch (error) {
        console.error(error);
        notifyError(error.message);
      } finally {
        for (let i = 0; i < rowsCopy.length; i++) {
          if (idsToDelete.includes(rowsCopy[i].bankAddressId)) {
            rowsCopy[i].status = 'Disabled';
          }
        }
        setRows(rowsCopy);
        notifySuccess(messageKey + ' has been deleted');
      }
    });
  };

  const handleOpen = (data) => {
    if (!data) {
      //ADD default values
      data = {
        bankName: '',
        bankRoutingNo: '',
        address: '',
        city: '',
        zipCode: '',
        state: '',
        status: 'Active',
        country: '',
      };
    }

    setRowData(data);
    setOpen(true);
  };

  const handleClose = async (data, isEdit) => {
    if (!data) {
      setOpen(false);
      return;
    }

    let valid = true;
    if (!data.bankName) {
      notifyError('Bank Name is required.');
      valid = false;
    }
    if (!data.bankRoutingNo) {
      notifyError('Bank Routing No is required.');
      valid = false;
    }
    if (!data.address) {
      notifyError('Address is required.');
      valid = false;
    }
    if (!data.city) {
      notifyError('City is required.');
      valid = false;
    }
    if (!data.zipCode) {
      notifyError('Zip Code is required.');
      valid = false;
    }

    if (!data.country) {
      notifyError('Country is required.');
      valid = false;
    }

    if (data.country === 'US' && (data.state === '' || !data.state)) {
      notifyError('Country is US so state is required.');
      valid = false;
    }

    if (!valid) {
      return;
    }

    try {
      if (isEdit) {
        //EDIT
        const resp = await updateBankAddress(data);
        const rowsCopy = [...rows];
        const index = rows.indexOf(rowData);
        rowsCopy[index] = resp.bankAddress;
        setRows(rowsCopy);
        notifySuccess('Bank Address has been updated.');
      } else {
        //ADD
        const resp = await createBankAddress(data);
        setRows([resp.bankAddress, ...rows]);
        notifySuccess('New Bank Address has been added.');
      }

      setOpen(false);
    } catch (error) {
      console.error(error);
      notifyError(error.message);
    }
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
                  name="bankName"
                  label="Bank Name"
                  value={searchData.bankName}
                  onChange={handleChange}
                  inputProps={{ maxLength: 300 }}
                  InputLabelProps={{ shrink: true }}
                />
              </div>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <TextField
                  fullWidth
                  name="bankRoutingNo"
                  label="Bank Routing No"
                  value={searchData.bankRoutingNo}
                  onChange={handleChange}
                  inputProps={{ maxLength: 10 }}
                  InputLabelProps={{ shrink: true }}
                />
              </div>
              <div className={classes.grdCell1}></div>
              <div className={classes.grdCell1}></div>
              <div className={classes.grdCell1}></div>
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
          title={'BANK ADDRESSES'}
          data={rows}
          columns={columns}
          options={options}
        />
      </Box>
      {open && (
        <BankAddressDetailsModal
          onClose={handleClose}
          open={open}
          value={rowData}
        ></BankAddressDetailsModal>
      )}
    </div>
  );
}
