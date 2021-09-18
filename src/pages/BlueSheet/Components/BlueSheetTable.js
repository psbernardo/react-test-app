import React, { useState, useEffect } from 'react';
import {
  notifyError,
  notifyInfo,
  notifySuccess,
} from 'components/Notification/Notification';
import {
  listBluesheet,
  createBluesheet,
  updateBlueSheet,
} from '../../../services/BluesheetService';
import { getSystemDate, getTradeDate } from '../../../services/ProfileService';
import BlueSheetModal from './BlueSheetModal';
import { IconButton, Button, Box, TextField } from '@material-ui/core';
import { Add as AddIcon, Create as EditIcon } from '@material-ui/icons';
import useStyles from '../../../styles';

import SelectSymbol from '../../../components/AutoComplete/SelectSymbol';
import SelectSystemCode from '../../../components/Dropdown/SelectSystemCode';
import SearchButton from '../../../components/Button/Search';
import QueryParam from '../../../services/QueryParamService';
import Table, { columnType } from 'components/Table/Table';

export default function BlueSheetTable({ params }) {
  const classes = useStyles();

  useEffect(
    () => {
      async function init() {
        // if (searchData.tradeDate) return;

        const tradeDate = await getTradeDate();
        const searchDataCopy = { ...searchData };
        const systemDate = await getSystemDate();
        setSysDate(systemDate);

        if (!searchData.processDate) {
          searchDataCopy.processDate = tradeDate;
        }

        if (!searchData.inquiryDate) {
          searchDataCopy.inquiryDate = tradeDate;
        }

        setSearchData(searchDataCopy);
      }

      init();
    },
    // eslint-disable-next-line
    []
  );

  const options = {
    selectableRows: 'none',
  };

  const columns = [
    {
      name: '',
      options: {
        draggable: false,
        resizable: false,
        print: false,
        searchable: false,
        filter: false,
        sort: false,
        empty: true,
        viewColumns: false,
        download: false,
        customBodyRenderLite: (dataIndex) => {
          return (
            <div
              align={'left'}
              className={classes.grdRow}
              style={{ margin: 0, padding: 0 }}
            >
              <div align={'left'} className={classes.grdCell1}>
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
      name: 'bluesheetId',
      label: 'BlueSheet ID',
      options: {
        display: false,
      },
    },
    {
      name: 'originalCusip',
      label: 'Original Cusip',
      options: {
        display: false,
      },
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
      name: 'exchangeCode',
      label: 'Exchange Code',
    },
    {
      name: 'inquiryDate',
      label: 'Inquiry Date',
      type: columnType.date,
    },
    {
      name: 'inquiryTrackingNo',
      label: 'Inquiry Tracking No',
    },
    {
      name: 'fromDate',
      label: 'From Date',
      type: columnType.date,
    },
    {
      name: 'toDate',
      label: 'To Date',
      type: columnType.date,
    },
    {
      name: 'recordCount',
      label: 'Record Count',
      type: columnType.quantity,
    },
    {
      name: 'requestAnalyst',
      label: 'Requesting Analyst',
    },
    {
      name: 'note',
      label: 'Note',
      options: {
        display: false,
      },
    },
    {
      name: 'processDate',
      label: 'Process Date',
      type: columnType.date,
    },
    {
      name: 'status',
      label: 'Status',
      type: columnType.status,
    },
    {
      name: 'modifiedBy',
      label: 'Modified By',
      options: {
        display: false,
      },
    },
    {
      name: 'modifiedDate',
      label: 'Modified Date',
      type: columnType.dateTime,
      options: {
        display: false,
      },
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

  const [rowData, setRowData] = React.useState({});
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [showFilter, setShowFilter] = React.useState(true);
  const [rows, setRows] = useState([]);
  const [sysDate, setSysDate] = React.useState(null);

  const [searchData, setSearchData] = React.useState(
    QueryParam.get({
      status: '',
      processDate: '',
      inquiryDate: '',
      inquiryTrackingNo: '',
      exchangeCode: '',
      requestAnalyst: '',
      symbol: '',
      cusip: '',
    })
  );

  const handleChange = (e, x) => {
    const input = e.currentTarget.name ? e.currentTarget : e.target;

    setSearchData({
      ...searchData,
      [input.name]: input.value,
    });
  };

  const handleSearch = async () => {
    try {
      setLoading(true);
      QueryParam.set(searchData);
      const data = await listBluesheet(searchData);
      setRows(data.bluesheetsList);
      notifyInfo(data.bluesheetsList.length + ' search results.');
    } catch (error) {
      notifyError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleOpen = (data) => {
    if (!data) {
      //ADD default values
      data = {
        bluesheetId: 0,
        note: '',
        status: 'Pending',
        inquiryTrackingNo: '',
        exchangeCode: '',
        symbol: '',
        cusip: '',
        requestingAnalyst: '',
        inquiryDate: sysDate,
        fromDate: '',
        toDate: '',
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
    try {
      let valid = true;

      if (!data.status) {
        notifyError('Status is required.');
        valid = false;
      }
      if (!data.inquiryDate) {
        notifyError('Inquiry Date is required.');
        valid = false;
      }

      if (!data.inquiryTrackingNo) {
        notifyError('Inquiry Tracking No. is required.');
        valid = false;
      }

      if (!data.exchangeCode) {
        notifyError('Exchange Code is required.');
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

      if (!data.requestAnalyst) {
        notifyError('Requesting Analyst is required.');
        valid = false;
      }

      if (!data.fromDate) {
        notifyError('From Date is required.');
        valid = false;
      }

      if (!data.toDate) {
        notifyError('To Date is required.');
        valid = false;
      }

      if (!valid) {
        return;
      }

      if (isEdit) {
        //EDIT
        const resp = await updateBlueSheet(data);
        const rowsCopy = [...rows];
        const index = rows.indexOf(rowData);
        rowsCopy[index] = resp.bluesheet;
        setRows(rowsCopy);
        notifySuccess('Bluesheet has been updated.');
      } else {
        // ADD
        const resp = await createBluesheet(data);
        setRows([resp.bluesheet, ...rows]);
        notifySuccess('New Bluesheet has been added.');
      }
      setOpen(false);
    } catch (error) {
      notifyError(error.message);
      console.error(error);
    }
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
                  name="processDate"
                  label="Process Date"
                  type="date"
                  value={searchData.processDate}
                  onChange={handleChange}
                  InputLabelProps={{ shrink: true }}
                />
              </div>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <TextField
                  fullWidth
                  name="inquiryDate"
                  label="Inquiry Date"
                  type="date"
                  value={searchData.inquiryDate}
                  onChange={handleChange}
                  InputLabelProps={{ shrink: true }}
                />
              </div>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <SelectSystemCode
                  name="status"
                  label="Status"
                  type="BlueSheet Status"
                  value={searchData.status}
                  onChange={handleChange}
                ></SelectSystemCode>
              </div>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <TextField
                  fullWidth
                  name="inquiryTrackingNo"
                  label="Inquiry Tracking No"
                  value={searchData.inquiryTrackingNo}
                  onChange={handleChange}
                  inputProps={{ maxLength: 30 }}
                  InputLabelProps={{ shrink: true }}
                />
              </div>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <TextField
                  fullWidth
                  name="exchangeCode"
                  label="Exchange Code"
                  value={searchData.exchangeCode}
                  onChange={handleChange}
                  inputProps={{ maxLength: 10 }}
                  InputLabelProps={{ shrink: true }}
                />
              </div>
              <div className={classes.grdCell1}>
                <TextField
                  fullWidth
                  name="requestAnalyst"
                  label="Request Analyst"
                  value={searchData.requestAnalyst}
                  onChange={handleChange}
                  inputProps={{ maxLength: 75 }}
                  InputLabelProps={{ shrink: true }}
                />
              </div>
            </div>
            <div>
              <div className={classes.grdRow}>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <SelectSymbol
                    freeSolo={true}
                    name="symbol"
                    label="Symbol"
                    value={searchData.symbol}
                    onChange={handleChange}
                    InputLabelProps={{ shrink: true }}
                  />
                </div>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <TextField
                    fullWidth
                    name="cusip"
                    label="Cusip"
                    value={searchData.cusip}
                    onChange={handleChange}
                    inputProps={{ maxLength: 9 }}
                    InputLabelProps={{ shrink: true }}
                  />
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
                <div className={classes.grdCell1}></div>
              </div>
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
              Add New
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
          title={'BlueSheet'}
          data={rows}
          columns={columns}
          options={options}
        />
      </Box>
      {open && (
        <BlueSheetModal
          onClose={handleClose}
          open={open}
          value={rowData}
        ></BlueSheetModal>
      )}
    </div>
  );
}
