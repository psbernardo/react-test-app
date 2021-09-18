import React, { useState, useEffect } from 'react';
import PhysicalCertificateModal from './PhysicalCertificateModal';
import {
  notifySuccess,
  notifyInfo,
  notifyError,
} from 'components/Notification/Notification';
import {
  createPhysicalCert,
  updatePhysicalCert,
  listPhysicalCert,
  deletePhysicalCert,
  getNewIdPhysicalCert,
} from '../../../services/PhysicalCertificateService';
import { Button, Box, TextField, IconButton } from '@material-ui/core';
import {
  Delete as DeleteIcon,
  Create as EditIcon,
  Add as AddIcon,
} from '@material-ui/icons';
import { useConfirm } from 'material-ui-confirm';
import Table, { columnType } from 'components/Table/Table';
import useStyles from '../../../styles';
import SearchButton from '../../../components/Button/Search';
import { getSystemDate } from '../../../services/ProfileService';
import QueryParam from '../../../services/QueryParamService';
import SelectSymbol from 'components/AutoComplete/SelectSymbol';
import SelectCorrespondent from '../../../components/AutoComplete/SelectCorrespondent';
import SelectAccountNo from '../../../components/AutoComplete/SelectAccountNo';
import SelectSystemCode from '../../../components/Dropdown/SelectSystemCode';
import SelectPhysicalCertificateStatus from '../../../components/Dropdown/SelectPhysicalCertificateStatus';

export default function PhysicalCertificateTable({ params }) {
  const classes = useStyles();

  useEffect(
    () => {
      async function init() {
        // if (searchData.systemDate) return;

        const systemDate = await getSystemDate();
        const searchDataCopy = { ...searchData };

        if (!searchData.fromDate) {
          searchDataCopy.fromDate = systemDate;
        }

        if (!searchData.toDate) {
          searchDataCopy.toDate = systemDate;
        }

        setSearchData(searchDataCopy);
      }

      init();
    },
    // eslint-disable-next-line
    []
  );

  const confirm = useConfirm();

  const options = {
    isRowSelectable: (dataIndex) => isDeleteEnabled(dataIndex),
    onRowsDelete: (selectedItems) => {
      handleDelete(selectedItems.data);
      return false;
    },
    selectableRows: 'none',
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
              <div align={'left'} className={classes.grdCeNone}>
                <IconButton
                  aria-label="edit"
                  onClick={() => handleOpen(rows[dataIndex])}
                >
                  <EditIcon />
                </IconButton>
              </div>
              <div className={classes.grdCell1}>
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
            </div>
          );
        },
      },
    },
    {
      name: 'physicalCertNo',
      label: 'Cert No.',
    },
    {
      name: 'recievedDate',
      label: 'Received Date',
      type: columnType.date,
    },
    {
      name: 'receivedBy',
      label: 'Received By',
    },
    {
      name: 'status',
      label: 'Status',
    },
    {
      name: 'accountNo',
      label: 'Account',
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
      name: 'symbolDescription',
      label: 'Symbol Description',
    },
    {
      name: 'qty',
      label: 'QTY',
      type: columnType.quantity,
    },
    {
      name: 'fees',
      label: 'Fee',
      type: columnType.amount,
    },
    {
      name: 'location',
      label: 'Location',
    },
    {
      name: 'receiptTrackingNo',
      label: 'Receipt Tracking Number',
    },
    {
      name: 'sendTrackingNo',
      label: 'Send Tracking Number',
    },
    {
      name: 'receiptTrackingNo2',
      label: 'Receipt Tracking Number 2',
    },
    {
      name: 'sendTrackingNo2',
      label: 'Send Tracking Number 2',
    },
    {
      name: 'internalNote',
      label: 'Internal Note',
      options: {
        display: false,
      },
    },
    {
      name: 'note',
      label: 'Note',
      options: {
        display: false,
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

  const [rowData, setRowData] = React.useState({});
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [showFilter, setShowFilter] = React.useState(true);
  const [rows, setRows] = useState([]);
  const [searchData, setSearchData] = React.useState(
    QueryParam.get({
      fromDate: '',
      toDate: '',
      physicalCertNo: '',
      userName: '',
      transferAgent: '',
      office: '',
      accountNo: '',
      subAccountNo: '',
      marginType: '',
      symbol: '',
      correspondent: '',
      cusip: '',
      status: '',
    })
  );

  const handleChange = (e, x) => {
    const input = e.currentTarget.name ? e.currentTarget : e.target;

    setSearchData({
      ...searchData,
      [input.name]: input.value,
    });
  };

  const isDeleteEnabled = (dataIndex) => {
    return rows[dataIndex].status !== 'Disabled';
  };

  const handleSearch = async () => {
    try {
      setLoading(true);
      QueryParam.set(searchData);
      const data = await listPhysicalCert(searchData);
      setRows(data.physicalCertsList);
      notifyInfo(data.physicalCertsList.length + ' search results.');
    } catch (error) {
      console.error(error);
      notifyError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleOpen = async (data) => {
    if (!data) {
      const newPhysicalCert = await getNewIdPhysicalCert();
      setRowData(newPhysicalCert);
    } else {
      setRowData(data);
    }

    setOpen(true);
  };

  const handleClose = async (data, isEdit, locations) => {
    if (!data) {
      setOpen(false);
      return;
    }

    let valid = true;

    if (!data.physicalCertNo) {
      notifyError('Physical Cert No. is required.');
      valid = false;
    }
    if (!data.qty) {
      notifyError('Qty No is required.');
      valid = false;
    }
    if (!data.fees) {
      notifyError('Fee is required.');
      valid = false;
    }
    if (!data.symbol) {
      notifyError('Symbol is required.');
      valid = false;
    }
    if (!data.cusip) {
      notifyError('Cusip is required.');
      valid = false;
    }
    if (!data.symbolDescription) {
      notifyError('Symbol Description is required.');
      valid = false;
    }
    if (!data.correspondent) {
      notifyError('Correspondent is required.');
      valid = false;
    }
    if (!data.office) {
      notifyError('Office is required.');
      valid = false;
    }
    if (!data.accountNo) {
      notifyError('Account No is required.');
      valid = false;
    }
    if (!data.subAccountNo) {
      notifyError('Sub Account No is required.');
      valid = false;
    }
    if (!data.marginType) {
      notifyError('Margin Type is required.');
      valid = false;
    }
    if (!valid) {
      return;
    }
    try {
      if (isEdit) {
        //EDIT
        const resp = await updatePhysicalCert(data, locations);
        const rowsCopy = [...rows];
        const index = rows.indexOf(rowData);
        rowsCopy[index] = resp.physicalCert;
        setRows(rowsCopy);
        notifySuccess('Physical Certificate has been updated.');
      } else {
        //ADD
        const resp = await createPhysicalCert(data, locations);
        setRows([resp.physicalCert, ...rows]);
        notifySuccess('New Physical Certificate has been added.');
      }
      setOpen(false);
    } catch (error) {
      console.error(error);
      notifyError(error.message);
    }
  };

  const handleDelete = (rowsToDelete) => {
    let messageKey = '';
    if (rowsToDelete.length === 1) {
      messageKey = rows[rowsToDelete[0].dataIndex].physicalCertId;
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
          await deletePhysicalCert(rows[index].physicalCertId);
          idsToDelete.push(rows[index].physicalCertId);
        }
      } catch (error) {
        console.error(error);
        notifyError(error.message);
      } finally {
        const filtered = rowsCopy.filter(
          (r) => !idsToDelete.includes(r.physicalCertId)
        );
        setRows(filtered);
        notifySuccess(messageKey + ' has been deleted');
      }
    });
  };

  return (
    <div className={classes.root}>
      <Box component="div" mt={5}>
        {showFilter ? (
          <div>
            <div className={classes.grdRow}>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <TextField
                  fullWidth
                  name="fromDate"
                  label="From Date"
                  type="date"
                  value={searchData.fromDate}
                  onChange={handleChange}
                  className={classes.textField}
                  InputLabelProps={{ shrink: true }}
                  inputProps={{
                    max: searchData.toDate,
                  }}
                />
              </div>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <TextField
                  fullWidth
                  name="toDate"
                  label="To Date"
                  type="date"
                  value={searchData.toDate}
                  onChange={handleChange}
                  className={classes.textField}
                  InputLabelProps={{ shrink: true }}
                  inputProps={{
                    min: searchData.fromDate,
                  }}
                />
              </div>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <TextField
                  fullWidth
                  name="physicalCertNo"
                  label="Physical Certificate No"
                  value={searchData.physicalCertNo}
                  onChange={handleChange}
                  InputLabelProps={{ shrink: true }}
                />
              </div>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <TextField
                  fullWidth
                  name="userName"
                  label="User Name"
                  value={searchData.userName}
                  onChange={handleChange}
                  InputLabelProps={{ shrink: true }}
                />
              </div>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <TextField
                  fullWidth
                  name="transferAgent"
                  label="Transfer Agent"
                  value={searchData.transferAgent}
                  onChange={handleChange}
                  InputLabelProps={{ shrink: true }}
                />
              </div>
              <div className={classes.grdCell1}>
                <TextField
                  fullWidth
                  name="office"
                  label="Office"
                  value={searchData.office}
                  onChange={handleChange}
                  InputLabelProps={{ shrink: true }}
                />
              </div>
            </div>
            <div className={classes.grdRow}>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <SelectAccountNo
                  required={false}
                  freeSolo={true}
                  name="accountNo"
                  label="Account No"
                  value={searchData.accountNo}
                  correspondent={searchData.correspondent}
                  onChange={handleChange}
                  type="" //client or gl
                ></SelectAccountNo>
              </div>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <SelectSystemCode
                  name="subAccountNo"
                  label="Sub Account No"
                  type="Sub Account No"
                  value={searchData.subAccountNo}
                  onChange={handleChange}
                ></SelectSystemCode>
              </div>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <SelectSystemCode
                  name="marginType"
                  label="Margin Type"
                  type="Margin Type"
                  value={searchData.marginType}
                  onChange={handleChange}
                ></SelectSystemCode>
              </div>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <SelectSymbol
                  freeSolo={true}
                  name="symbol"
                  label="Symbol"
                  value={searchData.symbol}
                  onChange={handleChange}
                />
              </div>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <SelectCorrespondent
                  name="correspondent"
                  value={searchData.correspondent}
                  onChange={handleChange}
                ></SelectCorrespondent>
              </div>
              <div className={classes.grdCell1}>
                <TextField
                  fullWidth
                  name="cusip"
                  label="Cusip"
                  value={searchData.cusip}
                  onChange={handleChange}
                  InputLabelProps={{ shrink: true }}
                />
              </div>
            </div>
            <div className={classes.grdRow}>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <SelectPhysicalCertificateStatus
                  name="status"
                  label="Status"
                  value={searchData.status}
                  onChange={handleChange}
                ></SelectPhysicalCertificateStatus>
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
              <div className={classes.grdCell1}></div>
            </div>
          </div>
        ) : null}
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
              Add New Request
            </Button>
          </div>
          <div className={classes.grdCellNone}>
            <SearchButton
              onClick={handleSearch}
              loading={loading}
              showfilter={(status) => setShowFilter(status)}
            />
          </div>
        </div>
      </Box>
      <Box component="div" mt={2}>
        <Table
          title={'Physical Certificate'}
          data={rows}
          columns={columns}
          options={options}
        />
      </Box>
      {open && (
        <PhysicalCertificateModal
          onClose={handleClose}
          open={open}
          value={rowData}
        ></PhysicalCertificateModal>
      )}
    </div>
  );
}
