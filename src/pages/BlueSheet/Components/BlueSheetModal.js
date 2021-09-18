/*ReactJS*/
import React, { useState, useEffect } from 'react';
import useStyles from '../../../styles';
import {
  notifySuccess,
  notifyError,
} from 'components/Notification/Notification';
import {
  GetAppRounded as DownloadIcon,
  Delete as DeleteIcon,
} from '@material-ui/icons';
import {
  Typography,
  Button,
  Modal,
  Backdrop,
  Fade,
  Box,
  TextField,
  Tooltip,
  IconButton,
} from '@material-ui/core';
import Table, { columnType } from 'components/Table/Table';

import AttachFileIcon from '@material-ui/icons/AttachFile';
import {
  attachFiles,
  listFile,
  deleteFile,
  downloadFile,
  listCusip,
} from '../../../services/CommonService';

import { useConfirm } from 'material-ui-confirm';
import { dateProtoObjectToString } from '../../../services/ConvertService';
import SelectSymbol from '../../../components/AutoComplete/SelectSymbol';
import SelectExchangeCode from 'components/AutoComplete/SelectExchangeCode';
import SelectRequestAnalyst from 'components/AutoComplete/SelectRequestAnalyst';
import SelectSystemCode from '../../../components/Dropdown/SelectSystemCode';

import { getNewBluesheetId } from '../../../services/BluesheetService';

export default function BlueSheetModal({
  onClose: handleClose,
  open: isOpen,
  value,
  id,
}) {
  const linkType = 'BlueSheet';
  const classes = useStyles();
  const confirm = useConfirm();
  const [modalData, setModalData] = useState({
    exchangeCode: '',
    requestingAnalyst: '',
    symbol: '',
  });
  const [isEdit, setIsEdit] = React.useState(false);
  const [rows, setRows] = useState([]);
  const [rowsSelected, setRowsSelected] = React.useState([]);
  const [sysDate, setSysDate] = React.useState('');

  async function getFileAttachements() {
    const data = await listFile(value.bluesheetId, linkType);
    setRows(data.attachedFilesList);
  }

  async function getNewID() {
    let modalValue = { ...value };
    const { bluesheetId } = await getNewBluesheetId();
    modalValue.bluesheetId = bluesheetId;
    setModalData(modalValue);
  }

  useEffect(() => {
    if (isOpen) {
      let modalValue = { ...value };
      if (value.bluesheetId) {
        setIsEdit(true);
        modalValue.inquiryDate = dateProtoObjectToString(value.inquiryDate);
        modalValue.fromDate = dateProtoObjectToString(value.fromDate);
        modalValue.toDate = dateProtoObjectToString(value.toDate);

        getFileAttachements();
      } else {
        getNewID();
      }

      setSysDate(value.inquiryDate);
      setModalData(modalValue);
    }
  }, [isOpen, value]);

  useEffect(() => {
    async function getCusip() {
      if (modalData.symbol) {
        listCusip(sysDate, modalData.symbol)
          .then((res) => {
            setModalData({
              ...modalData,
              cusip: res.cusip,
            });
          })
          .catch((err) => {});
      }
    }
    getCusip();
  }, [sysDate, modalData.symbol]);

  const options = {
    rowsSelected: rowsSelected,
    selectableRows: 'multiple',
    isRowSelectable: (dataIndex) => isDeleteEnalbed(dataIndex),
    onRowsDelete: (selectedItems) => {
      handleDelete(selectedItems.data);
      return false;
    },
    customToolbarSelect: (selectedRows, a, b) => {
      return (
        <div
          className={classes.grdRow}
          style={{ margin: 0, padding: 0, marginRight: 20 }}
        >
          <div className={classes.grdCell1}>
            <Tooltip title="Delete" arrow>
              <div>
                <IconButton
                  aria-label="delete"
                  onClick={() => {
                    handleDelete(selectedRows.data);
                  }}
                >
                  <DeleteIcon />
                </IconButton>
              </div>
            </Tooltip>
          </div>
          <div align={'left'} className={classes.grdCell1}>
            <Tooltip title="Download" arrow>
              <div>
                <IconButton
                  aria-label="download"
                  onClick={() =>
                    handleDownload(
                      selectedRows.data.map((d) => rows[d.dataIndex].id)
                    )
                  }
                >
                  <DownloadIcon />
                </IconButton>
              </div>
            </Tooltip>
          </div>
        </div>
      );
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
              <div align={'left'} className={classes.grdCell1}>
                <IconButton
                  aria-label="download"
                  onClick={() => handleDownload([rows[dataIndex].id])}
                >
                  <DownloadIcon />
                </IconButton>
              </div>
            </div>
          );
        },
      },
    },
    {
      name: 'fileName',
      label: 'File Name',
    },
    {
      name: 'uploadedBy',
      label: 'Uploaded By',
    },
    {
      name: 'uploadedAt',
      label: 'Uploaded At',
      type: columnType.dateTime,
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

  const handleDownload = async (ids) => {
    for (let id of ids) {
      try {
        const fileName = await downloadFile(id);
        notifySuccess(fileName);
      } catch (error) {
        notifyError(error.message);
      }
    }
    setRowsSelected([]);
  };

  const handleDelete = (rowsToDelete) => {
    let messageKey = '';
    if (rowsToDelete.length === 1) {
      messageKey = rows[rowsToDelete[0].dataIndex].fileName;
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
          await deleteFile(rows[index].id);
          idsToDelete.push(rows[index].id);
        }
      } catch (error) {
        console.error(error);
        notifyError(error.message);
      } finally {
        const filtered = rowsCopy.filter((r) => !idsToDelete.includes(r.id));
        setRows(filtered);
        notifySuccess(messageKey + ' has been deleted');
      }
    });
  };

  const isDeleteEnalbed = (dataIndex) => {
    return rows[dataIndex].status !== 'Disabled';
  };

  const handleAttachFile = async (e) => {
    const newRows = await attachFiles(
      modalData.bluesheetId,
      linkType,
      e.target.files
    );
    setRows([...newRows, ...rows]);
    notifySuccess('File has been uploaded');
  };

  const handleChange = (e) => {
    const input = e.currentTarget.name ? e.currentTarget : e.target;
    const copyModalData = {
      ...modalData,
      [input.name]: input.value,
    };

    setModalData(copyModalData);
  };

  return (
    <Modal
      className={classes.modalBackdrop}
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={isOpen}
      onClose={() => {
        handleClose();
      }}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={isOpen}>
        <div className={classes.fadeModalMd}>
          <Typography
            id="transition-modal-title"
            className={classes.textBold}
            variant="h4"
            gutterBottom
          >
            {isEdit ? 'Edit' : 'Add New'} Bluesheet
          </Typography>
          <Box mt={5}>
            <form className={classes.modalForm} noValidate autoComplete="off">
              <div className={classes.grdRow}>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <SelectSystemCode
                    required={true}
                    name="status"
                    label="Status"
                    type="BlueSheet Status"
                    value={modalData.status}
                    onChange={handleChange}
                  ></SelectSystemCode>
                </div>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <TextField
                    fullWidth
                    required={true}
                    name="inquiryDate"
                    label="Inquiry Date"
                    type="date"
                    value={modalData.inquiryDate}
                    onChange={handleChange}
                    InputLabelProps={{ shrink: true }}
                  />
                </div>
                <div className={classes.grdCell1}>
                  <TextField
                    fullWidth
                    required={true}
                    name="inquiryTrackingNo"
                    label="Inquiry Tracking No"
                    value={modalData.inquiryTrackingNo}
                    onChange={handleChange}
                    inputProps={{ maxLength: 30 }}
                    InputLabelProps={{ shrink: true }}
                  />
                </div>
              </div>
              <div className={classes.grdRow}>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <SelectExchangeCode
                    freeSolo={true}
                    required={true}
                    name="exchangeCode"
                    label="Exchange Code"
                    value={modalData.exchangeCode}
                    onChange={handleChange}
                    InputLabelProps={{ shrink: true }}
                  />
                </div>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <SelectSymbol
                    freeSolo={true}
                    required={true}
                    name="symbol"
                    label="Symbol "
                    value={modalData.symbol}
                    onChange={handleChange}
                  />
                </div>
                <div className={classes.grdCell1}>
                  <TextField
                    fullWidth
                    name="cusip"
                    label="Cusip"
                    value={modalData.cusip}
                    onChange={handleChange}
                    inputProps={{
                      readOnly: true,
                      maxLength: 12,
                    }}
                    InputLabelProps={{ shrink: true }}
                  />
                </div>
              </div>
              <div className={classes.grdRow}>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <SelectRequestAnalyst
                    freeSolo={true}
                    required={true}
                    name="requestAnalyst"
                    label="Requesting Analyst"
                    value={modalData.requestAnalyst}
                    onChange={handleChange}
                    InputLabelProps={{ shrink: true }}
                  />
                </div>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <TextField
                    fullWidth
                    required={true}
                    name="fromDate"
                    label="From Date"
                    type="date"
                    value={modalData.fromDate}
                    onChange={handleChange}
                    InputLabelProps={{ shrink: true }}
                  />
                </div>
                <div className={classes.grdCell1}>
                  <TextField
                    fullWidth
                    required={true}
                    name="toDate"
                    label="To Date"
                    type="date"
                    value={modalData.toDate}
                    onChange={handleChange}
                    InputLabelProps={{ shrink: true }}
                  />
                </div>
              </div>
              <div className={classes.grdRow}>
                <TextField
                  fullWidth
                  name="note"
                  label="Note"
                  value={modalData.note}
                  onChange={handleChange}
                  InputLabelProps={{ shrink: true }}
                />
              </div>
              <div className={classes.grdRow}>
                <div className={classes.actionContainer}>
                  <div
                    className={classes.grdCellNone}
                    style={{ marginRight: 10 }}
                  >
                    <input
                      onChange={handleAttachFile}
                      accept="*/*"
                      className={classes.input}
                      style={{ display: 'none' }}
                      id="raised-button-file"
                      multiple
                      type="file"
                    />
                    <label htmlFor="raised-button-file">
                      <Button
                        variant="contained"
                        size="large"
                        component="span"
                        startIcon={<AttachFileIcon />}
                        color="secondary"
                        className={classes.button}
                      >
                        Attach File
                      </Button>
                    </label>
                  </div>
                </div>
              </div>
              <Box component="div" mt={2}>
                <Table
                  title={'ATTACHMENTS'}
                  data={rows}
                  columns={columns}
                  options={options}
                />
              </Box>
              <div className={classes.modalFooter}>
                <div
                  className={classes.grdCellNone}
                  style={{ marginRight: 10 }}
                >
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    onClick={() => {
                      handleClose();
                    }}
                  >
                    Close
                  </Button>
                </div>
                <div className={classes.grdCellNone}>
                  <Button
                    variant="contained"
                    color="secondary"
                    size="large"
                    onClick={() => {
                      handleClose(modalData, isEdit);
                    }}
                  >
                    Save
                  </Button>
                </div>
              </div>
            </form>
          </Box>
        </div>
      </Fade>
    </Modal>
  );
}
