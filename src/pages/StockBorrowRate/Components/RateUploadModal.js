import React, { useState } from 'react';
import {
  notifySuccess,
  notifyError,
} from 'components/Notification/Notification';
import {
  importAnetics,
  importLendingPit,
} from '../../../services/StockBorrowRateService';
import {
  AttachFile as AttachFileIcon,
  Close as CloseIcon,
} from '@material-ui/icons';
import {
  Button,
  Modal,
  Backdrop,
  Fade,
  Box,
  IconButton,
  CircularProgress,
  TextField,
} from '@material-ui/core';
import useStyles from '../../../styles';
import Table, { columnType } from 'components/Table/Table';

export default function RateUploadModal({
  onClose: handleClose,
  open: isOpen,
}) {
  const classes = useStyles();

  const [modalData, setModalData] = useState({});
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState({
    execute: false,
  });

  const options = {
    selectableRows: 'none',
  };

  const columns = [
    {
      name: 'systemDate',
      label: 'System Date',
      type: columnType.date,
    },
    {
      name: 'symbol',
      label: 'Symbol',
    },
    {
      name: 'cusip',
      label: 'Cusip',
    },
    {
      name: 'originalCusip',
      label: 'Original Cusip',
      options: {
        display: false,
      },
    },
    {
      name: 'borrowRate',
      label: 'Borrow Rate',
      type: columnType.percentage,
    },
    {
      name: 'loanRate',
      label: 'Loan Rate',
      type: columnType.percentage,
    },
    {
      name: 'lendingPitRate',
      label: 'Lending Pit Rate',
      type: columnType.percentage,
    },
    {
      name: 'highestRate',
      label: 'Highest Rate',
      type: columnType.percentage,
    },
    {
      name: 'markUpRate',
      label: 'Mark Up Rate',
      type: columnType.percentage,
    },
    {
      name: 'finalRate',
      label: 'Final Rate',
      type: columnType.percentage,
    },
    {
      name: 'source',
      label: 'Source',
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

  const handleChange = (e) => {
    const input = e.currentTarget.name ? e.currentTarget : e.target;
    setModalData({
      ...modalData,
      [input.name]: input.value,
    });
  };

  const handleImportAnetics = async (file) => {
    if (!file) {
      return;
    }

    if (!modalData.systemDate) {
      notifyError('System Date is required.');
      return;
    }

    setLoading({ search: false, import: true });
    try {
      const data = await importAnetics(file, modalData.systemDate);
      notifySuccess('File has been uploaded');
    } catch (error) {
      notifyError(error.message);
    }
    setLoading({ search: false, import: false });
  };

  const handleImportLendingPit = async (file) => {
    if (!file) {
      return;
    }

    if (!modalData.systemDate) {
      notifyError('System Date is required.');
      return;
    }

    setLoading({ search: false, import: true });
    try {
      const data = await importLendingPit(file, modalData.systemDate);
      setRows(data.rateList);
      console.log(data.rateList);
      notifySuccess('File has been uploaded');
    } catch (error) {
      notifyError(error.message);
    }
    setLoading({ search: false, import: false });
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
              <div className={classes.grdCell1} style={{ marginRight: 10 }}>
                <TextField
                  name="systemDate"
                  fullWidth
                  label="Settle Date"
                  type="date"
                  required={true}
                  value={modalData.systemDate || ''}
                  onChange={handleChange}
                  InputLabelProps={{ shrink: true }}
                />
              </div>
              <div className={classes.grdCell1}></div>
              <div className={classes.grdCellNone} style={{ marginRight: 10 }}>
                <input
                  onChange={(e) => {
                    handleImportAnetics(e.target.files[0]);
                    e.target.value = null;
                  }}
                  accept=".csv"
                  className={classes.input}
                  style={{ display: 'none' }}
                  id="raised-button-file-anetics"
                  multiple
                  type="file"
                  disabled={loading.import}
                />
                <label htmlFor="raised-button-file-anetics">
                  <Button
                    // variant="raised"
                    variant="contained"
                    size="large"
                    component="span"
                    startIcon={
                      loading.import ? (
                        <CircularProgress
                          style={{ color: '#ffffff', height: 20, width: 20 }}
                        />
                      ) : (
                        <AttachFileIcon />
                      )
                    }
                    color="secondary"
                    className={classes.button}
                    disabled={loading.import}
                  >
                    {loading.execute
                      ? 'Importing Contracts...'
                      : 'Import Contracts'}
                  </Button>
                </label>
              </div>
              <div className={classes.grdCellNone} style={{ marginRight: 10 }}>
                <input
                  onChange={(e) => {
                    handleImportLendingPit(e.target.files[0]);
                    e.target.value = null;
                  }}
                  accept=".txt"
                  className={classes.input}
                  style={{ display: 'none' }}
                  id="raised-button-file-lending"
                  multiple
                  type="file"
                  disabled={loading.import}
                />
                <label htmlFor="raised-button-file-lending">
                  <Button
                    // variant="raised"
                    variant="contained"
                    size="large"
                    component="span"
                    startIcon={
                      loading.import ? (
                        <CircularProgress
                          style={{ color: '#ffffff', height: 20, width: 20 }}
                        />
                      ) : (
                        <AttachFileIcon />
                      )
                    }
                    color="secondary"
                    className={classes.button}
                    disabled={loading.import}
                  >
                    {loading.execute
                      ? 'Importing Lending Pit...'
                      : 'Import Lending Pit'}
                  </Button>
                </label>
              </div>
            </div>
            <Box component="div" mt={2}>
              <Table
                title={'Stock Borrow'}
                data={rows}
                columns={columns}
                options={options}
              />
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
