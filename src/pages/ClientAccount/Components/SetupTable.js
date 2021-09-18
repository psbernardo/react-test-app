import React from 'react';
import SetupModal from './SetupModal';
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
  CheckCircle as CheckCircleIcon,
} from '@material-ui/icons';

import {
  updateReportSetup,
  createReportSetup,
  deleteReportSetup,
} from '../../../services/SetupService';
import Table, { columnType } from 'components/Table/Table';
import useStyles from '../../../styles';

export default function SetupTable({ accountId, list: rows, set: setRows }) {
  const classes = useStyles();
  const confirm = useConfirm();
  const [rowData, setRowData] = React.useState({});
  const [open, setOpen] = React.useState(false);

  const options = {
    // isRowSelectable: (dataIndex) => isDeleteEnalbed(dataIndex),
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
                  // disabled={!isDeleteEnalbed(dataIndex)}
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
      name: 'setupType', //3
      label: 'Setup Type',
    },
    {
      name: 'deliveryType', //2
      label: 'Delivery Type',
    },
    {
      name: 'access', //1
      label: 'Access',
      options: {
        //format date to string
        customBodyRenderLite: (dataIndex) => {
          return rows[dataIndex].access ? <CheckCircleIcon /> : null;
        },
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

  // const isDeleteEnalbed = (dataIndex) => {
  //   return rows[dataIndex].accountId !== 'disabled';
  // };

  const handleDelete = (rowsToDelete) => {
    let messageKey = '';
    if (rowsToDelete.length === 1) {
      messageKey = rows[rowsToDelete[0].dataIndex].setupId;
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
          await deleteReportSetup(rows[index].setupId);
          idsToDelete.push(rows[index].setupId);
        }
      } catch (error) {
        notifyError(error.message);
      } finally {
        const filtered = rowsCopy.filter(
          (r) => !idsToDelete.includes(r.setupId)
        );
        setRows(filtered);
        notifySuccess(messageKey + ' Report Types has been deleted');
      }
    });
  };

  const handleOpen = (data) => {
    if (!data) {
      //ADD default values
      data = {
        setupType: '',
        access: false,
        deliveryType: '',
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

    if (!data.setupType) {
      notifyError('Setup Type is required.');
      valid = false;
    }
    if (!data.deliveryType) {
      notifyError('Delivery Type is required.');
      valid = false;
    }

    if (!valid) {
      return;
    }

    try {
      if (isEdit) {
        //EDIT
        const { reportSetup } = await updateReportSetup(accountId, data);
        const index = rows.indexOf(rowData);
        // rows[index] = reportSetup;
        const rowsCopy = [...rows];
        rowsCopy[index] = reportSetup;
        setRows(rowsCopy);
        notifySuccess('Report Setup has been updated.');
      } else {
        //ADD
        const { reportSetup } = await createReportSetup(accountId, data);
        setRows([reportSetup, ...rows]);
        notifySuccess('New report setup has been added.');
      }

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
          title={'REPORT TYPES'}
          data={rows}
          columns={columns}
          options={options}
        />
      </Box>
      {open && (
        <SetupModal
          onClose={handleClose}
          open={open}
          value={rowData}
        ></SetupModal>
      )}
    </div>
  );
}
