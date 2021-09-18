import React, { useState, useEffect } from 'react';
import useStyles from '../../../styles';
import {
  notifySuccess,
  notifyError,
} from 'components/Notification/Notification';
import { dateProtoObjectToString } from '../../../services/ConvertService';
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
import {
  GetAppRounded as DownloadIcon,
  Delete as DeleteIcon,
} from '@material-ui/icons';
import Table, { columnType } from 'components/Table/Table';
import { useConfirm } from 'material-ui-confirm';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import {
  attachFiles,
  listFile,
  deleteFile,
  downloadFile,
} from '../../../services/CommonService';
export default function PositionDtccModal({
  onClose: handleClose,
  open: isOpen,
  value,
}) {
  const linkType = 'Position';
  const classes = useStyles();
  const [modalData, setModalData] = useState({});
  const confirm = useConfirm();
  const [isEdit, setIsEdit] = React.useState(false);
  const [rows, setRows] = useState([]);
  const [rowsSelected, setRowsSelected] = React.useState([]);

  useEffect(() => {
    if (isOpen) {
      let modalValue = { ...value };
      modalValue.settleDate = dateProtoObjectToString(value.settleDate);
      setModalData(modalValue);
      if (value.positionId) {
        setIsEdit(true);
      }
    }
  }, [isOpen, value]);

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
      name: 'uploadedBy', //2
      label: 'Uploaded By',
    },
    {
      name: 'uploadedAt', //1
      label: 'Uploaded At',
      type: columnType.dateTime,
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

  const handleSearch = async (noNotif) => {
    try {
      const { attachedFilesList } = await listFile(value.positionId, linkType);
      setRows(attachedFilesList);
    } catch (error) {
      notifyError(error.message);
    }
  };

  React.useEffect(
    () => {
      handleSearch();
    },
    // eslint-disable-next-line
    []
  );

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
    return rows[dataIndex].status !== 'disabled';
  };

  const handleAttachFile = async (e) => {
    const newRows = await attachFiles(
      value.positionId,
      linkType,
      e.target.files
    );
    setRows([...newRows, ...rows]);
    notifySuccess('File has been uploaded');
  };

  const handleChange = (e) => {
    const input = e.currentTarget.name ? e.currentTarget : e.target;
    setModalData({
      ...modalData,
      [input.name]: input.value,
    });
  };

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modalBackdrop}
      open={isOpen}
      onClose={() => {
        handleClose();
      }}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{ timeout: 500 }}
    >
      <Fade in={isOpen}>
        <div className={classes.fadeModalMd}>
          <Typography
            id="transition-modal-title"
            variant="h4"
            className={classes.textBold}
            gutterBottom
          >
            {isEdit ? 'Edit' : 'Add New'} Position
          </Typography>
          <Box mt={5}>
            <form noValidate autoComplete="off">
              <div className={classes.grdRow}>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <TextField
                    fullWidth
                    name="settleDate"
                    label="Settle Date"
                    type="date"
                    disabled={isEdit}
                    value={modalData.settleDate}
                    onChange={handleChange}
                    InputLabelProps={{ shrink: true }}
                  />
                </div>
                <div className={classes.grdCell1}>
                  <TextField
                    fullWidth
                    name="symbol"
                    label="Symbol"
                    disabled={isEdit}
                    value={modalData.symbol}
                    onChange={handleChange}
                    InputLabelProps={{ shrink: true }}
                  />
                </div>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <TextField
                    fullWidth
                    name="cusip"
                    label="Cusip"
                    disabled={isEdit}
                    value={modalData.cusip}
                    onChange={handleChange}
                    InputLabelProps={{ shrink: true }}
                  />
                </div>
              </div>
              <div className={classes.grdRow}>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <TextField
                    name="symbolDescription"
                    label="Symbol Description"
                    fullWidth
                    disabled={isEdit}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    value={modalData.symbolDescription}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className={classes.grdRow}>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <TextField
                    name="note"
                    label="Note"
                    fullWidth
                    InputLabelProps={{
                      shrink: true,
                    }}
                    value={modalData.note}
                    onChange={handleChange}
                  />
                </div>
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
                        // variant="raised"
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
