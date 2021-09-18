import React from 'react';
import AddressModal from './AddressModal';
import { Button, Box, IconButton } from '@material-ui/core';
import { useConfirm } from 'material-ui-confirm';
import {
  notifySuccess,
  notifyError,
} from 'components/Notification/Notification';
import {
  Add as AddIcon,
  Create as EditIcon,
  Delete as DeleteIcon,
} from '@material-ui/icons';

import {
  updateAddress,
  createAddress,
  deleteAddress,
} from '../../../services/AccountAddressService';
import Table, { columnType } from 'components/Table/Table';
import useStyles from '../../../styles';

export default function AddressTable({ accountId, list: rows, set: setRows }) {
  const classes = useStyles();
  const confirm = useConfirm();
  const [rowData, setRowData] = React.useState({});
  const [open, setOpen] = React.useState(false);

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
      name: 'addressType',
      label: 'Address Type',
      order: 1,
    },
    {
      name: 'address1',
      label: 'Address 1',
      order: 2,
    },
    {
      name: 'address2',
      label: 'Address 2',
      order: 3,
    },
    {
      name: 'address3',
      label: 'Address 3 ',
      order: 4,
    },
    {
      name: 'city',
      label: 'City',
      order: 5,
    },
    {
      name: 'state',
      label: 'State',
      order: 6,
    },
    {
      name: 'zip',
      label: 'Zip',
      order: 7,
    },
    {
      name: 'country',
      label: 'Country',
      order: 8,
    },
    {
      name: 'status',
      label: 'Status',
      order: 9,
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

  const isDeleteEnabled = (dataIndex) => {
    return rows[dataIndex].status !== 'disabled';
  };

  const handleDelete = (rowsToDelete) => {
    let messageKey = '';
    if (rowsToDelete.length === 1) {
      messageKey = 'ID : ' + rows[rowsToDelete[0].dataIndex].addressId;
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
          await deleteAddress(rows[index].addressId);
          idsToDelete.push(rows[index].addressId);
        }
      } catch (error) {
        notifyError(error.message);
      } finally {
        for (let i = 0; i < rowsCopy.length; i++) {
          if (idsToDelete.includes(rowsCopy[i].addressId)) {
            rowsCopy[i].status = 'disabled';
          }
        }
        setRows(rowsCopy);
        notifySuccess(messageKey + ' Address has been deleted');
      }
    });
  };

  const handleOpen = (data) => {
    if (!data) {
      //ADD default values
      data = {
        addressType: '',
        address1: '',
        address2: '',
        address3: '',
        city: '',
        state: '',
        zip: '',
        country: '',
        imgProofOfAddress: '',
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
    if (!data.addressType) {
      notifyError('Address Type is required.');
      valid = false;
    }
    if (!data.address1) {
      notifyError('Address 1 is required.');
      valid = false;
    }
    if (!data.city) {
      notifyError('City is required.');
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

    if (!data.status) {
      notifyError('Status is required.');
      valid = false;
    }

    if (!valid) {
      return;
    }

    try {
      if (isEdit) {
        //EDIT
        const { address } = await updateAddress(accountId, data);
        const index = rows.indexOf(rowData);
        // rows[index] = address;
        const rowsCopy = [...rows];
        rowsCopy[index] = address;
        setRows(rowsCopy);
        notifySuccess('Address has been updated.');
      } else {
        //ADD
        const { address } = await createAddress(accountId, data);
        setRows([address, ...rows]);
        notifySuccess('New Address has been added.');
      }
    } catch (error) {
      console.error(error);
      notifyError(error.message);
    } finally {
      setOpen(false);
    }
  };

  return (
    <div className={classes.root}>
      <Box component="div">
        <div className={classes.grdRow}>
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
        </div>
      </Box>
      <Box component="div" mt={2}>
        <Table
          title={'ADDRESS'}
          data={rows}
          columns={columns}
          options={options}
        />
      </Box>
      {open && (
        <AddressModal
          onClose={handleClose}
          open={open}
          value={rowData}
        ></AddressModal>
      )}
    </div>
  );
}
