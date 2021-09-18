import React, { useState, useEffect } from 'react';
import useStyles from '../../../styles';
import {
  notifySuccess,
  notifyError,
} from 'components/Notification/Notification';
import {
  GetAppRounded as DownloadIcon,
  Delete as DeleteIcon,
  ExpandMore as ExpandMoreIcon,
  Search as SearchIcon,
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
  InputLabel,
  IconButton,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  FormControlLabel,
  Checkbox,
} from '@material-ui/core';

import Table, { columnType } from 'components/Table/Table';
import { dateProtoObjectToString } from '../../../services/ConvertService';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import SelectTransferAgentModal from './SelectTransferAgentModal';
import { readTransferAgent } from '../../../services/TransferAgentService';
import { listLocation } from '../../../services/PhysicalCertificateService';
import {
  attachFiles,
  listFile,
  deleteFile,
  downloadFile,
} from '../../../services/CommonService';
import SunEditor from 'suneditor-react';
import { useConfirm } from 'material-ui-confirm';
import SelectSymbol from 'components/AutoComplete/SelectSymbol';
import SelectAccountNo from '../../../components/AutoComplete/SelectAccountNo';
import SelectCorrespondent from '../../../components/AutoComplete/SelectCorrespondent';
import SelectSystemCode from '../../../components/Dropdown/SelectSystemCode';
import SelectPhysicalCertificateStatus from '../../../components/Dropdown/SelectPhysicalCertificateStatus';

export default function PhysicalCertificateModal({
  onClose: handleClose,
  open: isOpen,
  value,
}) {
  const linkType = 'PhysicalCertificate';
  const classes = useStyles();
  const confirm = useConfirm();
  const [openSelectTransferAgent, setOpenSelectTransferAgent] = React.useState(
    false
  );
  const [note, setNote] = React.useState(value.note || '');
  const [internalNote, setInternalNote] = React.useState(
    value.internalNote || ''
  );

  const [modalData, setModalData] = useState({
    userName: '',
    systemDate: '',
    physicalCertNo: '',
    qty: 0,
    fees: 0,
    symbol: '',
    cusip: '',
    symbolDescription: '',
    dtcEligible: false,
    correspondent: '',
    office: '',
    accountNo: '',
    subAccountNo: '',
    marginType: '',
    status: '',
    receiptTrackingNo: '',
    receivedBy: '',
    receivedDate: '',
    sendTrackingNo: '',
    sentBy: '',
    sentDate: '',
    agentName: '',
    address: '',
    city: '',
    zipCode: '',
    state: '',
    country: '',
    contactNo: '',
  });
  const [isEdit, setIsEdit] = React.useState(false);
  const [rows, setRows] = useState([]);
  const [rowsSelected, setRowsSelected] = React.useState([]);
  const [locations, setLocations] = React.useState([]);
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

  const loadLocation = async (physicalCertId) => {
    try {
      const { locationsList } = await listLocation(physicalCertId);
      setLocations(locationsList);
    } catch (error) {
      notifyError(error.message);
    }
  };

  useEffect(() => {
    if (isOpen) {
      (async () => {
        if (value.physicalCertId) {
          await loadLocation(value.physicalCertId);

          let modalValue = { ...value };
          modalValue.systemDate = dateProtoObjectToString(value.systemDate);
          modalValue.sentDate = dateProtoObjectToString(value.sentDate);
          modalValue.receivedDate = dateProtoObjectToString(value.receivedDate);
          setModalData(modalValue);

          if (value.transferAgentId) {
            const { transferAgent } = await readTransferAgent();
            setTransferAgent(transferAgent, modalValue);
          }
        }

        if (value.physicalCertNo) {
          setIsEdit(true);
        }
      })();
    }
    // eslint-disable-next-line
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

  const locationOptions = {
    selectableRows: 'none',
    search: false,
  };

  const locationColumn = [
    {
      name: 'locationCode',
      label: 'Location Code',
    },
    {
      name: 'location',
      label: 'Location',
    },
    {
      name: 'userName',
      label: 'User Name',
    },
    {
      name: 'systemDate',
      label: 'System Date',
      type: columnType.date,
    },
    {
      name: 'qty',
      label: 'Qty',
      options: {
        customBodyRenderLite: (dataIndex) => {
          return (
            <TextField
              name="qty"
              type="number"
              value={locations[dataIndex].qty}
              onChange={(e) => {
                handleChangeLocation(e, dataIndex);
              }}
            />
          );
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

  const handleSearch = async (noNotif) => {
    try {
      const { attachedFilesList } = await listFile(
        value.physicalCertId,
        linkType
      );
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
    return rows[dataIndex].status !== 'Disabled';
  };

  const handleAttachFile = async (e) => {
    const newRows = await attachFiles(
      value.physicalCertId,
      linkType,
      e.target.files
    );
    setRows([...newRows, ...rows]);
    notifySuccess('File has been uploaded');
  };

  const handleOpenSelectTransferAgentModal = () => {
    setOpenSelectTransferAgent(true);
  };

  const handleCloseSelectTransferAgentModal = (data) => {
    if (data) {
      setTransferAgent(data, modalData);
    }

    setOpenSelectTransferAgent(false);
  };

  const setTransferAgent = (data, modalValue) => {
    let copy = { ...modalValue };

    copy.transferAgentId = data.transferAgentId;
    copy.agentName = data.agentName;
    copy.address = data.address;
    copy.city = data.city;
    copy.zipCode = data.zipCode;
    copy.state = data.state;
    copy.country = data.country;
    copy.contactNo = data.contactNo;

    setModalData(copy);
  };

  const handleChange = (e, checkboxValue) => {
    const input = e.currentTarget.name ? e.currentTarget : e.target;
    setModalData({
      ...modalData,
      [input.name]:
        checkboxValue === true || checkboxValue === false
          ? checkboxValue
          : input.value,
    });
  };

  const handleChangeLocation = (e, index) => {
    let copy = [...locations];
    copy[index][e.currentTarget.name] = e.currentTarget.value;
    setLocations(copy);
  };

  return (
    <React.Fragment>
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
          <div className={classes.fadeModalFull}>
            <Typography
              id="transition-modal-title"
              className={classes.textBold}
              variant="h4"
              gutterBottom
            >
              {isEdit ? 'Edit' : 'Add New'} Physical Certificate
            </Typography>
            <Box mt={3}>
              <form className={classes.modalForm} noValidate autoComplete="off">
                <Accordion expanded={true} className={classes.accordion}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography className={classes.heading}>Details</Typography>
                  </AccordionSummary>
                  <AccordionDetails className={classes.accordionDetails}>
                    <div className={classes.grdRow}>
                      <div
                        className={classes.grdCell1}
                        style={{ marginRight: 30 }}
                      >
                        <TextField
                          fullWidth
                          disabled
                          name="userName"
                          label="User Name"
                          value={modalData.userName}
                          onChange={handleChange}
                          InputLabelProps={{ shrink: true }}
                        />
                      </div>
                      <div
                        className={classes.grdCell1}
                        style={{ marginRight: 30 }}
                      >
                        <TextField
                          fullWidth
                          disabled
                          name="systemDate"
                          label="System Date"
                          type="date"
                          value={modalData.systemDate}
                          onChange={handleChange}
                          InputLabelProps={{ shrink: true }}
                        />
                      </div>
                      <div
                        className={classes.grdCell1}
                        style={{ marginRight: 30 }}
                      >
                        <TextField
                          fullWidth
                          required={true}
                          disabled={isEdit}
                          name="physicalCertNo"
                          label="Physical Cert No."
                          value={modalData.physicalCertNo}
                          onChange={handleChange}
                          InputLabelProps={{ shrink: true }}
                        />
                      </div>
                      <div
                        className={classes.grdCell1}
                        style={{ marginRight: 30 }}
                      >
                        <TextField
                          fullWidth
                          required={true}
                          disabled={isEdit}
                          name="qty"
                          label="QTY"
                          type="number"
                          value={modalData.qty}
                          onChange={handleChange}
                          InputLabelProps={{ shrink: true }}
                        />
                      </div>
                      <div className={classes.grdCell1}>
                        <TextField
                          fullWidth
                          required={true}
                          disabled={isEdit}
                          name="fees"
                          label="Fee"
                          type="number"
                          value={modalData.fees}
                          onChange={handleChange}
                          InputLabelProps={{ shrink: true }}
                        />
                      </div>
                    </div>
                    <div className={classes.grdRow}>
                      <div
                        className={classes.grdCell1}
                        style={{ marginRight: 30 }}
                      >
                        <SelectCorrespondent
                          required={true}
                          disabled={isEdit}
                          name="correspondent"
                          label="Correspondent"
                          value={modalData.correspondent}
                          onChange={handleChange}
                        ></SelectCorrespondent>
                      </div>
                      <div
                        className={classes.grdCell1}
                        style={{ marginRight: 30 }}
                      >
                        <TextField
                          fullWidth
                          required={true}
                          disabled={isEdit}
                          name="office"
                          label="Office"
                          value={modalData.office}
                          onChange={handleChange}
                          InputLabelProps={{ shrink: true }}
                        />
                      </div>
                      <div
                        className={classes.grdCell1}
                        style={{ marginRight: 30 }}
                      >
                        <SelectAccountNo
                          required={true}
                          disabled={isEdit}
                          name="accountNo"
                          label="Account No"
                          correspondent={modalData.correspondent}
                          value={modalData.accountNo}
                          onChange={handleChange}
                        ></SelectAccountNo>
                      </div>
                      <div
                        className={classes.grdCell1}
                        style={{ marginRight: 30 }}
                      >
                        <SelectSystemCode
                          required={true}
                          disabled={isEdit}
                          name="subAccountNo"
                          label="Sub Account No"
                          type="Sub Account No"
                          value={modalData.subAccountNo}
                          onChange={handleChange}
                        ></SelectSystemCode>
                      </div>
                      <div className={classes.grdCell1}>
                        <SelectSystemCode
                          required={true}
                          disabled={isEdit}
                          name="marginType"
                          label="Margin Type"
                          type="Margin Type"
                          value={modalData.marginType}
                          onChange={handleChange}
                        ></SelectSystemCode>
                      </div>
                    </div>
                    <div className={classes.grdRow} style={{ margin: 0 }}>
                      <div
                        className={classes.grdCell1}
                        style={{ marginRight: 30 }}
                      >
                        <SelectSymbol
                          freeSolo={true}
                          required={true}
                          disabled={isEdit}
                          name="symbol"
                          label="Symbol"
                          value={modalData.symbol}
                          onChange={handleChange}
                        />
                      </div>
                      <div
                        className={classes.grdCell1}
                        style={{ marginRight: 30 }}
                      >
                        <TextField
                          fullWidth
                          disabled={isEdit}
                          required={true}
                          name="cusip"
                          label="Cusip"
                          value={modalData.cusip}
                          onChange={handleChange}
                          InputLabelProps={{ shrink: true }}
                        />
                      </div>
                      <div
                        className={classes.grdCell1}
                        style={{ marginRight: 30 }}
                      >
                        <TextField
                          fullWidth
                          required={true}
                          disabled={isEdit}
                          name="symbolDescription"
                          label="Symbol Description"
                          value={modalData.symbolDescription}
                          onChange={handleChange}
                          InputLabelProps={{ shrink: true }}
                        />
                      </div>
                      <div
                        className={classes.grdCell1}
                        style={{ marginRight: 30 }}
                      >
                        <FormControlLabel
                          control={<Checkbox color="primary" />}
                          name="dtcEligible"
                          label="DTC Eligible"
                          disabled={isEdit}
                          checked={modalData.dtcEligible}
                          onChange={handleChange}
                        />
                      </div>
                      <div className={classes.grdCell1}></div>
                    </div>
                  </AccordionDetails>
                </Accordion>
                <Accordion expanded={true} className={classes.accordion}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography className={classes.heading}>
                      Location
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails className={classes.accordionDetails}>
                    <Box>
                      <div className={classes.grdRow}>
                        <div
                          className={classes.grdCell1}
                          style={{ marginRight: 30 }}
                        >
                          <SelectPhysicalCertificateStatus
                            required={true}
                            name="status"
                            label="Status"
                            value={modalData.status}
                            onChange={handleChange}
                          ></SelectPhysicalCertificateStatus>
                        </div>
                        <div
                          className={classes.grdCell1}
                          style={{ marginRight: 30 }}
                        ></div>
                        <div className={classes.grdCell1}></div>
                      </div>
                      <div className={classes.grdRow}>
                        <div
                          className={classes.grdCell1}
                          style={{ marginRight: 30 }}
                        >
                          <TextField
                            fullWidth
                            required={true}
                            name="receiptTrackingNo"
                            label="Receipt Tracking No"
                            value={modalData.receiptTrackingNo}
                            onChange={handleChange}
                            InputLabelProps={{ shrink: true }}
                          />
                        </div>
                        <div
                          className={classes.grdCell1}
                          style={{ marginRight: 30 }}
                        >
                          <TextField
                            fullWidth
                            required={true}
                            name="receivedBy"
                            label="Received By"
                            value={modalData.receivedBy}
                            onChange={handleChange}
                            InputLabelProps={{ shrink: true }}
                          />
                        </div>
                        <div className={classes.grdCell1}>
                          <TextField
                            fullWidth
                            required={true}
                            name="receivedDate"
                            label="Received Date"
                            type="date"
                            value={modalData.receivedDate}
                            onChange={handleChange}
                            InputLabelProps={{ shrink: true }}
                          />
                        </div>
                      </div>
                      <div className={classes.grdRow} style={{ margin: 0 }}>
                        <div
                          className={classes.grdCell1}
                          style={{ marginRight: 30 }}
                        >
                          <TextField
                            fullWidth
                            required={true}
                            name="sendTrackingNo"
                            label="Send Tracking No"
                            value={modalData.sendTrackingNo}
                            onChange={handleChange}
                            InputLabelProps={{ shrink: true }}
                          />
                        </div>
                        <div
                          className={classes.grdCell1}
                          style={{ marginRight: 30 }}
                        >
                          <TextField
                            fullWidth
                            required={true}
                            name="sentBy"
                            label="Sent By"
                            value={modalData.sentBy}
                            onChange={handleChange}
                            InputLabelProps={{ shrink: true }}
                          />
                        </div>
                        <div className={classes.grdCell1}>
                          <TextField
                            fullWidth
                            required={true}
                            name="sentDate"
                            label="Sent Date"
                            type="date"
                            value={modalData.sentDate}
                            onChange={handleChange}
                            InputLabelProps={{ shrink: true }}
                          />
                        </div>
                      </div>
                    </Box>
                    <Box mt={5}>
                      <Table
                        title={'Locations'}
                        data={locations}
                        columns={locationColumn}
                        options={locationOptions}
                      />
                    </Box>
                  </AccordionDetails>
                </Accordion>
                <Accordion className={classes.accordion}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography className={classes.heading}>
                      Transfer Agent
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails className={classes.accordionDetails}>
                    <div className={classes.grdRow}>
                      <div className={classes.grdCell1}>
                        <InputLabel shrink>
                          Name
                          <IconButton
                            aria-label="search"
                            color="secondary"
                            onClick={handleOpenSelectTransferAgentModal}
                          >
                            <SearchIcon />
                          </IconButton>
                        </InputLabel>
                        <TextField
                          fullWidth
                          disabled
                          name="agentName"
                          value={modalData.agentName}
                          onChange={handleChange}
                          InputLabelProps={{ shrink: true }}
                        />
                      </div>
                    </div>
                    <div className={classes.grdRow}>
                      <div
                        className={classes.grdCell1}
                        style={{ marginRight: 30 }}
                      >
                        <TextField
                          fullWidth
                          disabled
                          name="address"
                          label="Address"
                          value={modalData.address}
                          onChange={handleChange}
                          InputLabelProps={{ shrink: true }}
                        />
                      </div>
                      <div
                        className={classes.grdCell1}
                        style={{ marginRight: 30 }}
                      >
                        <TextField
                          fullWidth
                          disabled
                          name="city"
                          label="City"
                          value={modalData.city}
                          onChange={handleChange}
                          InputLabelProps={{ shrink: true }}
                        />
                      </div>
                      <div className={classes.grdCell1}>
                        <TextField
                          fullWidth
                          disabled
                          name="zipCode"
                          label="Zip Code"
                          value={modalData.zipCode}
                          onChange={handleChange}
                          InputLabelProps={{ shrink: true }}
                        />
                      </div>
                    </div>
                    <div className={classes.grdRow} style={{ margin: 0 }}>
                      <div
                        className={classes.grdCell1}
                        style={{ marginRight: 30 }}
                      >
                        <TextField
                          fullWidth
                          disabled
                          name="state"
                          label="State"
                          value={modalData.state}
                          onChange={handleChange}
                          InputLabelProps={{ shrink: true }}
                        />
                      </div>
                      <div
                        className={classes.grdCell1}
                        style={{ marginRight: 30 }}
                      >
                        <TextField
                          fullWidth
                          disabled
                          name="country"
                          label="Country"
                          value={modalData.country}
                          onChange={handleChange}
                          InputLabelProps={{ shrink: true }}
                        />
                      </div>
                      <div className={classes.grdCell1}>
                        <TextField
                          fullWidth
                          disabled
                          name="contactNo"
                          label="Contact No"
                          value={modalData.contactNo}
                          onChange={handleChange}
                          InputLabelProps={{ shrink: true }}
                        />
                      </div>
                    </div>
                  </AccordionDetails>
                </Accordion>
                <Accordion className={classes.accordion}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography className={classes.heading}>Notes</Typography>
                  </AccordionSummary>
                  <AccordionDetails className={classes.accordionDetails}>
                    <Box>
                      <Typography variant="h6" gutterBottom>
                        Internal Note
                      </Typography>
                      <SunEditor
                        showToolbar={true}
                        enableToolbar={true}
                        name="internalNote"
                        label="Internal Note"
                        setOptions={{
                          height: '100%',
                          minHeight: 300,
                          buttonList: complex,
                        }}
                        setContents={internalNote}
                        onChange={setInternalNote}
                      />
                    </Box>
                    <Box mt={5}>
                      <Typography variant="h6" gutterBottom>
                        Note
                      </Typography>
                      <SunEditor
                        showToolbar={true}
                        enableToolbar={true}
                        name="note"
                        label="Note"
                        setOptions={{
                          height: '100%',
                          minHeight: 300,
                          buttonList: complex,
                        }}
                        setContents={note}
                        onChange={setNote}
                      />
                    </Box>
                  </AccordionDetails>
                </Accordion>
                <Accordion className={classes.accordion}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography className={classes.heading}>
                      Attachments
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails className={classes.accordionDetails}>
                    <div className={classes.grdRow}>
                      <div
                        className={classes.actionContainer}
                        style={{ margin: 0 }}
                      >
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
                  </AccordionDetails>
                </Accordion>
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
                        handleClose(
                          {
                            ...modalData,
                            note: note,
                            internalNote: internalNote,
                          },
                          isEdit,
                          locations
                        );
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
      {openSelectTransferAgent && (
        <SelectTransferAgentModal
          onClose={handleCloseSelectTransferAgentModal}
          open={openSelectTransferAgent}
        ></SelectTransferAgentModal>
      )}
    </React.Fragment>
  );
}
