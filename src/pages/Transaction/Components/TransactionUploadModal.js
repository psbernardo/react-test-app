import React, { useState } from 'react';
import {
  notifySuccess,
  notifyError,
} from 'components/Notification/Notification';
import {
  batchCreateTrns,
  batchCreatePendingTransaction,
  convertDataToTransactionModel,
  checkEntryType,
} from '../../../services/TransactionService';
import { readExcelData } from '../../../services/ExcelService';
import { AttachFile, Close as CloseIcon } from '@material-ui/icons';
import {
  Button,
  Modal,
  Backdrop,
  Fade,
  Box,
  IconButton,
  CircularProgress,
  Tooltip,
} from '@material-ui/core';
import TransactionTable from './TransactionTable';
import useStyles from '../../../styles';
import { useConfirm } from 'material-ui-confirm';
import { SelectEntryType } from '../../../components/AutoComplete/SelectSystemCode';

export default function TransactionUploadModal({
  onClose: handleClose,
  open: isOpen,
}) {
  const classes = useStyles();
  const confirm = useConfirm();

  const [rows, setRows] = useState([]);
  const [rowData, setRowData] = React.useState({});
  const [rowsErr, setRowsErr] = React.useState([]);
  const [rowsWErr, setRowsWErr] = React.useState([]);
  const [toggleError, setToggleError] = React.useState(false);
  const [editRecord, setEditRecord] = React.useState(false);
  const [entryType, setEntryType] = useState('');
  const [loading, setLoading] = useState({
    execute: false,
    saveToPending: false,
  });

  const listReq = [];

  const readExcel = (file) => {
    if (!file) {
      return;
    }
    setRows([]);

    readExcelData(file).then((d) => {
      let rowsCopy = [];

      d.map((item) => {
        return rowsCopy.push(convertDataToTransactionModel(item));
      });
      const filteredErr = rowsCopy.filter((r) => r.error);
      if (!rowsCopy.every((item) => item.error === false)) {
        notifyError(
          'Successfully load(s) ' +
            d.length +
            ' records with ' +
            filteredErr.length +
            ' error records'
        );
      } else {
        notifySuccess('Successfully load(s) ' + d.length + ' records.');
      }
      setRows(rowsCopy);
      setRowsWErr(rowsCopy);
      setRowsErr(filteredErr);
    });

    return;
  };

  const handleExecution = async () => {
    setLoading({ execute: true });

    const records = rows.length;
    if (records > 0) {
      const rowsCopy = [...rowsWErr];
      const filteredErr = rowsCopy.filter((r) => !r.error);
      await Promise.all(filteredErr.map(createBatchRequest));
      const res = await batchCreateTrns(listReq);

      if (res.length > 0) {
        notifySuccess(res.length + ' transactions successfully executed.');
        setRowsWErr(rowsErr);
        setRows(rowsErr);
      }
      setLoading({ execute: false });
    }
  };

  const handlePendingExecution = async () => {
    setLoading({ saveToPending: true });

    const records = rows.length;
    if (records > 0) {
      const rowsCopy = [...rowsWErr];
      const filteredErr = rowsCopy.filter((r) => !r.error);

      await Promise.all(filteredErr.map(createBatchRequest));

      const res = await batchCreatePendingTransaction(listReq);

      let showSuccessMessage = false;

      if (res.length > 0) {
        res.forEach((item) => {
          if (item.errorMessage === '') {
            showSuccessMessage = true;
          } else {
            notifyError(
              'Status: ' +
                item.status.charAt(0).toUpperCase() +
                item.status.slice(1) +
                '. Error: ' +
                item.errorMessage
            );
          }
        });
        if (showSuccessMessage) {
          notifySuccess(
            records + ' Pending transaction(s) has been succesfully added.'
          );
        }
        setRowsWErr(rowsErr);
        setRows(rowsErr);
      }
      setLoading({ saveToPending: false });
    }
  };

  const createBatchRequest = async (data, key) => {
    listReq.push(data);
  };

  const handleDelete = (rowsToDelete) => {
    let messageKey = '';
    if (rowsToDelete.length === 1) {
      messageKey = rows[rowsToDelete[0].dataIndex].correspondent;
    } else {
      messageKey = rowsToDelete.length + ' items';
    }

    confirm({
      description:
        "You are about to delete '" +
        messageKey +
        "'. Please confirm your action.",
      confirmationText: 'Yes',
    }).then(async () => {
      try {
        let rowsCopy = [...rowsWErr];
        for (const r of rowsToDelete) {
          let index = r.dataIndex;
          rowsCopy.splice(rowsCopy.indexOf(rows[index]), 1);
        }

        const filteredErr = rowsCopy.filter((r) => r.error);
        setRowsWErr(rowsCopy);
        setRowsErr(filteredErr);
        if (toggleError) {
          setRows(filteredErr);
        } else {
          setRows(rowsCopy);
        }
        notifySuccess(messageKey + ' Entry has been removed');
      } catch (error) {
        console.error(error);
        notifyError(error.message);
      }
    });
  };

  const handleOpen = (data) => {
    setRowData(data);
    setEditRecord(true);
  };

  const handleToggle = () => {
    if (toggleError) {
      setRows(rowsWErr);
      setToggleError(false);
      notifySuccess('Showing all records');
    } else {
      setRows(rowsErr);
      setToggleError(true);
      notifySuccess('Showing all records with errors');
    }
  };

  const handleEditClose = async (data) => {
    if (data === undefined) {
      setEditRecord(false);
      return;
    }

    if (!data.entryType) {
      notifyError('Entry Type is required.');
      return;
    }
    if (!data.accountNo) {
      notifyError('Account No is required.');
      return;
    }
    if (!data.contraAccountNo) {
      notifyError('Contra Account is required.');
      return;
    }

    if (checkEntryType(data.entryType) === 'trd') {
      if (!data.side) {
        notifyError('Side is required.');
        return;
      }
      if (!data.tradeDate) {
        notifyError('Trade Date is required.');
        return;
      }
    }
    if (
      checkEntryType(data.entryType) === 'trd' ||
      checkEntryType(data.entryType) === 'pm' ||
      checkEntryType(data.entryType) === 'cpm'
    ) {
      if (!data.symbol) {
        notifyError('Symbol is required.');
        return;
      }
    }
    if (
      checkEntryType(data.entryType) === 'trd' ||
      checkEntryType(data.entryType) === 'pm'
    ) {
      if (!data.qty) {
        notifyError('Qty is required.');
        return;
      }
      if (!data.price) {
        notifyError('Price is required.');
        return;
      }
    }
    if (checkEntryType(data.entryType) === 'cpm') {
      if (!data.netAmt) {
        notifyError('Net Amt is required.');
        return;
      }
    }

    try {
      let rowsCopy = [...rowsWErr];
      let index = rowsCopy.indexOf(rowData);
      data.error = false;
      rowsCopy[index] = data;
      const filteredErr = rowsCopy.filter((r) => r.error);
      setRowsWErr(rowsCopy);
      setRowsErr(filteredErr);
      if (toggleError) {
        setRows(filteredErr);
      } else {
        setRows(rowsCopy);
      }
      notifySuccess('Record has been updated.');
    } catch (error) {
      console.error(error);
      notifyError(error.message);
    }
    setEditRecord(false);
  };

  const handleClear = () => {
    setRowsWErr([]);
    setRowsErr([]);
    setRows([]);
    setToggleError(false);
  };

  return (
    <div className={classes.root}>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modalBackdrop}
        open={isOpen}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{ timeout: 500 }}
        disableBackdropClick
        disableEscapeKeyDown
      >
        <Fade in={isOpen}>
          <div className={classes.tableModalFull}>
            <div
              className={classes.grdRow}
              style={{ margin: 0, padding: '25px 30px 25px 30px' }}
            >
              <div className={classes.grdCell1}>
                <SelectEntryType
                  required={true}
                  name="entryType"
                  label="Entry Type"
                  value={entryType}
                  onChange={(e) => setEntryType(e.currentTarget.value)}
                ></SelectEntryType>
              </div>
              <div className={classes.grdCell1}></div>
              <div
                className={classes.grdCellNone}
                style={{ marginRight: 10, marginTop: 3 }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  disabled={
                    rowsErr.length === 0 && rowsWErr.length === 0
                      ? true
                      : false || loading.execute || loading.saveToPending
                  }
                  onClick={handleToggle}
                >
                  Filter Errors
                </Button>
              </div>
              <div
                className={classes.grdCellNone}
                style={{ marginRight: 10, marginTop: 3 }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  disabled={
                    rows.length === 0
                      ? true
                      : false || loading.execute || loading.saveToPending
                  }
                  onClick={handleClear}
                >
                  Clear All
                </Button>
              </div>
              <div
                className={classes.grdCellNone}
                style={{ marginRight: 10, marginTop: 3 }}
              >
                <label htmlFor="raised-button-file">
                  <Button
                    component="span"
                    className={classes.button}
                    variant="contained"
                    color="primary"
                    size="large"
                    startIcon={<AttachFile />}
                  >
                    Choose File
                  </Button>
                </label>
                <input
                  accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,text/plain"
                  className={classes.input}
                  style={{ display: 'none' }}
                  id="raised-button-file"
                  type="file"
                  onChange={(e) => {
                    readExcel(e.target.files[0]);
                    e.target.value = null;
                  }}
                />
              </div>
              <div
                className={classes.grdCellNone}
                style={{ marginTop: 3, marginRight: 10 }}
              >
                <Tooltip
                  title={
                    !rows.every((item) => item.error === false)
                      ? 'Cannot execute while there are missing required value(s)'
                      : 'Execute'
                  }
                >
                  <div>
                    <Button
                      variant="contained"
                      color="primary"
                      size="large"
                      disabled={
                        !rows.length ||
                        loading.execute ||
                        loading.saveToPending ||
                        !rows.every((item) => item.error === false)
                      }
                      startIcon={
                        loading.execute ? (
                          <CircularProgress
                            style={{ color: '#ffffff', height: 20, width: 20 }}
                          />
                        ) : null
                      }
                      onClick={() => {
                        handleExecution();
                      }}
                    >
                      {loading.execute ? 'Executing...' : 'Execute'}
                    </Button>
                  </div>
                </Tooltip>
              </div>
              <div className={classes.grdCellNone} style={{ marginTop: 3 }}>
                <Tooltip
                  title={
                    !rows.every((item) => item.error === false)
                      ? 'Cannot execute while there are missing required value(s)'
                      : 'Save to Pending'
                  }
                >
                  <div>
                    <Button
                      variant="contained"
                      color="primary"
                      size="large"
                      disabled={
                        !rows.length ||
                        loading.execute ||
                        loading.saveToPending ||
                        !rows.every((item) => item.error === false)
                      }
                      startIcon={
                        loading.saveToPending ? (
                          <CircularProgress
                            style={{ color: '#ffffff', height: 20, width: 20 }}
                          />
                        ) : null
                      }
                      onClick={() => {
                        handlePendingExecution();
                      }}
                    >
                      {loading.saveToPending ? 'Saving...' : 'Save to Pending'}
                    </Button>
                  </div>
                </Tooltip>
              </div>
            </div>
            <Box component="div">
              <TransactionTable
                entrytype={entryType}
                data={rows}
                editData={rowData}
                isEdit={editRecord}
                onEditOpen={handleOpen}
                onEditClose={handleEditClose}
                onRowDelete={handleDelete}
              ></TransactionTable>
            </Box>
            <div className={classes.modalCloseIcon}>
              <IconButton aria-label="close" onClick={handleClose}>
                <CloseIcon style={{ color: '#f1f1f1' }} />
              </IconButton>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
