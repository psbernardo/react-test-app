import React from 'react';
// import IdentificationModal from './IdentificationModal';
import { Button, Box, IconButton } from '@material-ui/core';
import { useConfirm } from 'material-ui-confirm';
import Table, { columnType } from 'components/Table/Table';
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
  createOwner,
  updateOwner,
  deleteOwner,
} from '../../../services/OwnerService';

import useStyles from '../../../styles';

export default function IdentificationTable({
  accountId,
  list: rows,
  set: setRows,
}) {
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
              style={{
                margin: 0,
                padding: 0,
              }}
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
      name: 'type',
      label: 'Type',
    },
    {
      name: 'Id',
      label: 'ID',
    },
    {
      name: 'countryOfIssuance',
      label: 'Country Of Issuance',
    },
    {
      name: 'issueDate',
      label: 'Issue Date',
      type: columnType.date,
    },
    {
      name: 'expirationDate',
      label: 'Expiration Date',
      type: columnType.date,
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
      messageKey = rows[rowsToDelete[0].dataIndex].ownerId;
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
          await deleteOwner(rows[index].ownerId);
          idsToDelete.push(rows[index].ownerId);
        }
      } catch (error) {
        notifyError(error.message);
      } finally {
        for (let i = 0; i < rowsCopy.length; i++) {
          if (idsToDelete.includes(rowsCopy[i].ownerId)) {
            rowsCopy[i].status = 'disabled';
          }
        }
        setRows(rowsCopy);
        notifySuccess(messageKey + ' Identification has been deleted');
      }
    });
  };

  const handleOpen = (data) => {
    if (!data) {
      // ADD default values
      data = {
        type: '',
        id: '',
        countryOfIssuance: '',
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
    if (!data.type) {
      notifyError('Type is required.');
      valid = false;
    }
    if (!data.id) {
      notifyError('ID is required.');
      valid = false;
    }
    if (!data.countryOfIssuance) {
      notifyError('Country of issuance is required.');
      valid = false;
    }
    if (!valid) {
      return;
    }

    try {
      if (isEdit) {
        // EDIT
        const { owner } = await updateOwner(accountId, data);
        const index = rows.indexOf(rowData);
        const rowsCopy = [...rows];
        rowsCopy[index] = owner;
        setRows(rowsCopy);
        notifySuccess('Identification has been updated.');
      } else {
        // ADD
        const { owner } = await createOwner(accountId, data);
        setRows([owner, ...rows]);
        notifySuccess('New Identification has been added.');
      }

      setOpen(false);
    } catch (error) {
      notifyError(error.message);
      console.error(error);
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
          title={'Identification'}
          data={rows}
          columns={columns}
          options={options}
        />
      </Box>
      {/* {open && (
        <IdentificationModal
          onClose={handleClose}
          open={open}
          value={rowData}
        ></IdentificationModal>
      )} */}{' '}
    </div>
  );
}
