import React from 'react';
import SubAccountModal from './SubAccountModal';
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
  updateSubAccount,
  createSubAccount,
  deleteSubAccount,
} from '../../../services/SubAccountService';
import Table, { columnType } from 'components/Table/Table';
import useStyles from '../../../styles';

export default function SubAccountTable({
  accountId,
  list: rows,
  set: setRows,
}) {
  const classes = useStyles();
  const confirm = useConfirm();
  const [rowData, setRowData] = React.useState({});
  const [validation, setValidation] = React.useState({});
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
      name: 'subAccount',
      label: 'Sub Account',
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

  const handleDelete = (rowsToDelete) => {
    let messageKey = '';
    if (rowsToDelete.length === 1) {
      messageKey = rows[rowsToDelete[0].dataIndex].subAccount;
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
          await deleteSubAccount(rows[index].subAccountId, 'client');
          idsToDelete.push(rows[index].subAccountId);
        }
      } catch (error) {
        notifyError(error.message);
      } finally {
        for (let i = 0; i < rowsCopy.length; i++) {
          if (idsToDelete.includes(rowsCopy[i].subAccountId)) {
            rowsCopy[i].status = 'Disabled';
          }
        }
        setRows(rowsCopy);
        notifySuccess(messageKey + ' Sub Account has been deleted');
      }
    });
  };

  const handleOpen = (data) => {
    if (!data) {
      //ADD default values
      data = {
        subAccount: '',
        accountName: '',
        status: 'Active',
      };
    }

    setRowData(data);
    setOpen(true);
  };

  const handleClose = async (data, isEdit) => {
    if (!data) {
      setValidation({});
      setOpen(false);
      return;
    }

    let valid = true;

    setValidation({ status: !data.status });

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
        const { subAccount } = await updateSubAccount(
          accountId,
          data,
          'client'
        );
        const index = rows.indexOf(rowData);
        // rows[index] = subAccount;
        const rowsCopy = [...rows];
        rowsCopy[index] = subAccount;
        setRows(rowsCopy);
        notifySuccess('Sub Account has been updated.');
      } else {
        //ADD
        const { subAccount } = await createSubAccount(
          accountId,
          data,
          'client'
        );
        setRows([subAccount, ...rows]);
        notifySuccess('New sub account has been added.');
      }

      setValidation({});
      setOpen(false);
    } catch (error) {
      console.error(error);
      notifyError(error.message);
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
          title={'CLIENT SUB ACCOUNTS'}
          data={rows}
          columns={columns}
          options={options}
        />
      </Box>
      {open && (
        <SubAccountModal
          onClose={handleClose}
          open={open}
          value={rowData}
          validation={validation}
        ></SubAccountModal>
      )}
    </div>
  );
}
