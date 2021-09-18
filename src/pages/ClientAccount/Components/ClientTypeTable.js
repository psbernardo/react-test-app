import React from 'react';
import ClientTypeModal from './ClientTypeModal';
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
  updateAccountType,
  createAccountType,
  deleteAccountType,
} from '../../../services/ClientTypeService';
import Table, { columnType } from 'components/Table/Table';
import useStyles from '../../../styles';

export default function ClientTypeTable({
  accountId,
  list: rows,
  set: setRows,
}) {
  const classes = useStyles();
  const confirm = useConfirm();
  const [rowData, setRowData] = React.useState({});
  const [open, setOpen] = React.useState(false);

  const options = {
    isRowSelectable: (dataIndex) => isDeleteEnalbed(dataIndex),
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
                  disabled={!isDeleteEnalbed(dataIndex)}
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
      name: 'type',
      label: 'Account Type',
    },
    {
      name: 'typeCode',
      label: 'Type Code',
    },
    {
      name: 'status',
      label: 'Status',
      type: columnType.text,
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

  const isDeleteEnalbed = (dataIndex) => {
    return rows[dataIndex].status !== 'disabled';
  };

  const handleDelete = (rowsToDelete) => {
    let messageKey = '';
    if (rowsToDelete.length === 1) {
      messageKey = rows[rowsToDelete[0].dataIndex].typeId;
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
          await deleteAccountType(rows[index].typeId);
          idsToDelete.push(rows[index].typeId);
        }
      } catch (error) {
        notifyError(error.message);
      } finally {
        for (let i = 0; i < rowsCopy.length; i++) {
          if (idsToDelete.includes(rowsCopy[i].typeId)) {
            rowsCopy[i].status = 'disabled';
          }
        }
        setRows(rowsCopy);
        notifySuccess(messageKey + ' Account Type has been deleted');
      }
    });
  };

  const handleOpen = (data) => {
    if (!data) {
      //ADD default values
      data = {
        type: '',
        typeCode: '',
        status: 'active',
      };
    }
    setRowData(data);
    setOpen(true);
  };

  const handleClose = async (data, isEdit) => {
    if (!data || data.typeCode === '') {
      setOpen(false);
      return;
    }
    try {
      if (isEdit) {
        //EDIT
        const { accountType } = await updateAccountType(accountId, data);
        const index = rows.indexOf(rowData);
        // rows[index] = accountType;
        const rowsCopy = [...rows];
        rowsCopy[index] = accountType;
        setRows(rowsCopy);
        notifySuccess('Account Type has been updated.');
      } else {
        //ADD
        const { accountType } = await createAccountType(accountId, data);
        setRows([accountType, ...rows]);
        notifySuccess('New Account Type has been added.');
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
        </div>
      </Box>
      <Box component="div" mt={2}>
        <Table
          title={'ACCOUNT TYPES'}
          data={rows}
          columns={columns}
          options={options}
        />
      </Box>
      {open && (
        <ClientTypeModal
          onClose={handleClose}
          open={open}
          value={rowData}
        ></ClientTypeModal>
      )}
    </div>
  );
}
