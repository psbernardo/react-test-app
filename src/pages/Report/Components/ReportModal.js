import React, { useState, useEffect } from 'react';
import camelCase from 'lodash/camelCase';
import { useConfirm } from 'material-ui-confirm';
import {
  notifyError,
  notifySuccess,
} from 'components/Notification/Notification';
import {
  Button,
  Modal,
  Backdrop,
  Fade,
  Box,
  TextField,
  InputLabel,
  Select,
  MenuItem,
  Typography,
  Tooltip,
  IconButton,
} from '@material-ui/core';
import {
  GetAppRounded as DownloadIcon,
  Delete as DeleteIcon,
  AttachFile as AttachFileIcon,
} from '@material-ui/icons';

import SunEditor from 'suneditor-react';
import { listRejectCode, updateReport } from '../../../services/ReportService';
import {
  attachFiles,
  listFile,
  deleteFile,
  downloadFile,
} from '../../../services/CommonService';
import Table, { columnType } from 'components/Table/Table';
import { dateProtoObjectToString } from '../../../services/ConvertService';
import useStyles from '../../../styles';

const complex = [
  ['undo', 'redo'],
  ['font', 'fontSize', 'formatBlock'],
  ['bold', 'underline', 'italic', 'strike', 'subscript', 'superscript'],
  ['removeFormat'],
  ['fontColor', 'hiliteColor'],
  ['outdent', 'indent'],
  ['align', 'horizontalRule', 'list', 'table'],
  ['link', 'image'],
  ['showBlocks', 'preview', 'fullScreen'],
];

const linkType = 'OatsReport';
export default function PositionAgingDetailsModal({
  onClose: handleClose,
  open: isOpen,
  value,
}) {
  const confirm = useConfirm();
  const classes = useStyles();
  const [rows, setRows] = useState([]);
  const [attachmentRows, setAttachmentRows] = useState([]);
  const [note, setNote] = useState('');
  const [modalData, setModalData] = useState({
    oatsType: '',
  });
  const [attachmentRowsSelected, setAttachmentRowsSelected] = React.useState(
    []
  );

  useEffect(() => {
    if (isOpen) {
      let modalValue = { ...value };
      modalValue.systemDate = dateProtoObjectToString(value.systemDate);
      modalValue.tradeDate = dateProtoObjectToString(value.tradeDate);
      modalValue.oatsType = '';
      setModalData(modalValue);
    }
  }, [isOpen, value]);

  // const isDeleteEnalbed = (dataIndex) => {
  //   return rows[dataIndex].status !== 'disabled';
  // };

  const handleChange = (e) => {
    const input = e.currentTarget.name ? e.currentTarget : e.target;
    setModalData({
      ...modalData,
      [input.name]: input.value,
    });
  };

  const handleDownload = async (ids) => {
    for (let id of ids) {
      try {
        const fileName = await downloadFile(id);
        notifySuccess(fileName);
      } catch (error) {
        notifyError(error.message);
      }
    }

    setAttachmentRowsSelected([]);
  };

  const handleOnChangeType = async (oatsType) => {
    const rejectCodesList = await listRejectCode(value.reportId, oatsType);
    setRows(rejectCodesList);

    const noteKey = camelCase(oatsType) + 'Note';
    setNote(modalData[noteKey]);
  };

  const handleAttachFile = async (e) => {
    const newRows = await attachFiles(value.reportId, linkType, e.target.files);
    setAttachmentRows([...newRows, ...attachmentRows]);
    notifySuccess('File has been uploaded');
  };

  const handleSave = async () => {
    if (!modalData.oatsType) {
      notifyError('Please select oats type.');
      return;
    }

    try {
      const data = await updateReport(value.reportId, note, modalData.oatsType);
      handleClose(data);
    } catch (error) {
      notifyError(error.message);
    }
  };
  const columns = [
    {
      name: 'rejectionCode',
      label: 'Rejection Code',
    },
    {
      name: 'rejectionDescription',
      label: 'Rejection Description',
    },
    {
      name: 'rejectionExplanation',
      label: 'Rejection Explanation',
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

  const options = {
    selectableRows: false,
    selectableRowsHeader: false,
  };

  const attachmentOptions = {
    rowsSelected: attachmentRowsSelected,
    selectableRows: 'multiple',
    // isRowSelectable: (dataIndex) => isDeleteEnalbed(dataIndex),
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
                      selectedRows.data.map(
                        (d) => attachmentRows[d.dataIndex].id
                      )
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

  const attachmentColumns = [
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
                  onClick={() => handleDownload([attachmentRows[dataIndex].id])}
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
      const { attachedFilesList } = await listFile(value.reportId, linkType);
      setAttachmentRows(attachedFilesList);
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

  const handleDelete = (rowsToDelete) => {
    let messageKey = '';
    if (rowsToDelete.length === 1) {
      messageKey = attachmentRows[rowsToDelete[0].dataIndex].fileName;
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
      const rowsCopy = [...attachmentRows];
      try {
        for (const r of rowsToDelete) {
          const index = r.dataIndex;
          await deleteFile(attachmentRows[index].id);
          idsToDelete.push(attachmentRows[index].id);
        }
      } catch (error) {
        console.error(error);
        notifyError(error.message);
      } finally {
        const filtered = rowsCopy.filter((r) => !idsToDelete.includes(r.id));
        setAttachmentRows(filtered);
        notifySuccess(messageKey + ' has been deleted');
      }
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
        <div className={classes.fadeModalFull}>
          <Typography
            id="transition-modal-title"
            variant="h4"
            className={classes.textBold}
            gutterBottom
          >
            Edit Oats Report
          </Typography>
          <Box mt={5}>
            <form className={classes.modalForm} noValidate autoComplete="off">
              <div className={classes.grdRow}>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <TextField
                    name="tradeDate"
                    label="Trade Date"
                    type="date"
                    disabled
                    fullWidth
                    value={modalData.tradeDate}
                    onChange={handleChange}
                    InputLabelProps={{ shrink: true }}
                  />
                </div>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <TextField
                    name="systemDate"
                    label="System Date"
                    type="date"
                    disabled
                    fullWidth
                    value={modalData.systemDate}
                    onChange={handleChange}
                    InputLabelProps={{ shrink: true }}
                  />
                </div>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <TextField
                    name="correspondent"
                    label="Correspondent"
                    disabled
                    fullWidth
                    value={modalData.correspondent}
                    onChange={handleChange}
                    InputLabelProps={{ shrink: true }}
                  />
                </div>
              </div>
              <div className={classes.grdRow}>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <TextField
                    name="submitter"
                    label="Submitter"
                    disabled
                    fullWidth
                    value={modalData.submitter}
                    onChange={handleChange}
                    InputLabelProps={{ shrink: true }}
                  />
                </div>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <TextField
                    name="status"
                    label="Status"
                    disabled
                    fullWidth
                    value={modalData.status}
                    onChange={handleChange}
                    InputLabelProps={{ shrink: true }}
                  />
                </div>
              </div>
              <div className={classes.grdRow}>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <InputLabel shrink>OATS Type *</InputLabel>
                  <Select
                    fullWidth
                    value={modalData.oatsType}
                    onChange={(e) => {
                      handleChange(e);
                      handleOnChangeType(e.target.value);
                    }}
                    name="oatsType"
                  >
                    <MenuItem value="">
                      <em>Blank</em>
                    </MenuItem>
                    <MenuItem value="exchange_route">Exchange Route</MenuItem>
                    <MenuItem value="fore">Fore</MenuItem>
                    <MenuItem value="inter_firm_route">
                      Inter Firm Route
                    </MenuItem>
                    <MenuItem value="reject_non_repairable">
                      Reject Non Repairable
                    </MenuItem>
                    <MenuItem value="reject_repairable">
                      Reject Repairable
                    </MenuItem>
                  </Select>
                </div>
                <div
                  className={classes.grdCell1}
                  style={{ marginRight: 30 }}
                ></div>
                <div
                  className={classes.grdCell1}
                  style={{ marginRight: 30 }}
                ></div>
                <div
                  className={classes.grdCell1}
                  style={{ marginRight: 30 }}
                ></div>
                <div
                  className={classes.grdCell1}
                  style={{ marginRight: 30 }}
                ></div>
              </div>
              <div className={classes.grdRow}>
                <div className={classes.grdCell1}>
                  <Box component="div" mt={2}>
                    <Table
                      title={'Oats Reject Code'}
                      data={rows}
                      columns={columns}
                      options={options}
                    />
                  </Box>
                </div>
              </div>
              <div className={classes.grdRow}>
                <div className={classes.grdCell1}>
                  <InputLabel>Note</InputLabel>
                  <SunEditor
                    disable={!modalData.oatsType}
                    showToolbar={true}
                    enableToolbar={true}
                    name="note"
                    label="Note"
                    setOptions={{
                      height: '100%',
                      buttonList: complex,
                    }}
                    setContents={note}
                    onChange={setNote}
                  />
                </div>
              </div>
              <div className={classes.grdRow}>
                <div className={classes.grdCell1}>
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

                    <Box component="div" mt={2}>
                      <Table
                        title={'OATS REPORT ATTACHMENTS'}
                        data={attachmentRows}
                        columns={attachmentColumns}
                        options={attachmentOptions}
                      />
                    </Box>
                  </div>
                </div>
              </div>
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
                    onClick={handleSave}
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
