import React, { useState, useEffect } from 'react';
import {
  Box,
  InputLabel,
  IconButton,
  TextField,
  Select,
  MenuItem,
  Button,
} from '@material-ui/core';
import { Visibility as ViewIcon, Create as EditIcon } from '@material-ui/icons';
import OpenItemDetailsModal from './OpenItemDetailsModal';
import OpenItemEditModal from './OpenItemEditModal';
import OpenItemUpdateStatusModal from './OpenItemUpdateStatusModal';
import {
  notifyInfo,
  notifyError,
  notifySuccess,
} from 'components/Notification/Notification';
import {
  listOpenItem,
  editOpenItem,
  recap,
  sendDO,
  editOpenItemStatus,
} from '../../../services/OpenItemService';
import SearchButton from '../../../components/Button/Search';
import SelectAccountNo from '../../../components/AutoComplete/SelectAccountNo';
import { getSystemDate } from '../../../services/ProfileService';
import QueryParam from '../../../services/QueryParamService';
import SelectSymbol from '../../../components/AutoComplete/SelectSymbol';
import SelectCusip from '../../../components/AutoComplete/SelectCusip';

import useStyles from '../../../styles';
import Table, { columnType } from 'components/Table/Table';

export default function OpenItemTable({ params }) {
  const classes = useStyles();
  //Set value of Settle date search parameter
  useEffect(
    () => {
      async function init() {
        if (searchData.systemDate) return;

        const systemDate = await getSystemDate();
        setSearchData({ ...searchData, settleDate: systemDate });
      }

      init();
    },
    // eslint-disable-next-line
    []
  );

  const [rows, setRows] = useState([]);
  const [loading, setLoading] = React.useState(false);
  const [showFilter, setShowFilter] = React.useState(true);
  const [edit, setEdit] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [updateStatus, setUpdateStatus] = React.useState(false);
  const [rowData, setRowData] = React.useState({});
  const [idsToUpdate] = React.useState([]);
  const [rowsToUpdate] = React.useState([]);

  //search parameters initial value
  const [searchData, setSearchData] = React.useState(
    QueryParam.get({
      settleDate: '',
      symbol: '',
      accountNo: '',
      contraBrokerCode: '',
      cusip: '',
      status: '',
    })
  );

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
                  aria-label="view"
                  onClick={() => {
                    setRowData(rows[dataIndex]);
                    setOpen(true);
                  }}
                >
                  <ViewIcon />
                </IconButton>
                <IconButton
                  aria-label="edit"
                  onClick={() => {
                    setRowData(rows[dataIndex]);
                    setEdit(true);
                  }}
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
      name: 'openItemId',
      label: 'Open Item ID',
    },
    {
      name: 'settleDate',
      label: 'Settle Date',
      type: columnType.date,
    },
    {
      name: 'accountId',
      label: 'Account ID',
    },
    {
      name: 'correspondent',
      label: 'Correspondent',
    },
    {
      name: 'accountNo',
      label: 'Account No',
    },
    {
      name: 'contraBroker',
      label: 'Contra Broker',
    },
    {
      name: 'originalCusip',
      label: 'Original Cusip',
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
      name: 'qtyMatched',
      label: 'QTY Matched',
      type: columnType.quantity,
    },
    {
      name: 'qtyUnmatched',
      label: 'QTY Unmatched',
      type: columnType.quantity,
    },
    {
      name: 'dtccQty',
      label: 'DTCC Qty',
      type: columnType.quantity,
    },
    {
      name: 'dtccGrossAmt',
      label: 'DTCC Gross Amount',
      type: columnType.amount,
    },
    {
      name: 'execessQty',
      label: 'Excess Qty',
      type: columnType.quantity,
    },
    {
      name: 'excessGrossAmt',
      label: 'Excess Gross Amount',
      type: columnType.amount,
    },
    {
      name: 'obligationControlNo',
      label: 'Obligation Control No.',
      type: columnType.amount,
    },
    {
      name: 'apibalQty',
      label: 'APIBAL Qty',
      type: columnType.quantity,
    },
    {
      name: 'exposureAmt',
      label: 'Exposure Amount',
      type: columnType.amount,
    },
    {
      name: 'closingPrice',
      label: 'Closing Price',
      type: columnType.amount,
    },
    {
      name: 'marketValue',
      label: 'Market Value',
      type: columnType.amount,
    },
    {
      name: 'age',
      label: 'Age',
    },
    {
      name: 'status',
      label: 'Status',
    },
    {
      name: 'note',
      label: 'Note',
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
    isRowSelectable: (dataIndex) => isUpdateEnabled(dataIndex),
    selectableRows: 'multiple',
    customToolbarSelect: (selectedRows, a, b) => {
      return (
        <div
          className={classes.grdRow}
          style={{ margin: 0, padding: 0, marginRight: 20 }}
        ></div>
      );
    },
    onRowSelectionChange: (_, selectedRows) => {
      console.log(selectedRows);
      handleSetSelectedIds(selectedRows);
    },
  };

  const isUpdateEnabled = (dataIndex) => {
    return rows[dataIndex].status !== 'made';
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleEditClose = async (data) => {
    if (!data) {
      setEdit(false);
      return;
    }

    try {
      // EDIT
      const resp = await editOpenItem(data);
      const rowsCopy = [...rows];
      const index = rows.indexOf(rowData);
      rowsCopy[index] = resp.openItem;
      setRows(rowsCopy);

      notifySuccess('Open Item has been updated.');
    } catch (error) {
      notifyError(error.message);
    }

    setEdit(false);
  };

  const handleSearch = async () => {
    try {
      setLoading(true);
      QueryParam.set(searchData);
      const data = await listOpenItem(searchData);
      setRows(data.openItemsList);
      notifyInfo(data.openItemsList.length + ' search results.');
    } catch (error) {
      notifyError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSendDO = async () => {
    try {
      QueryParam.set(searchData);
      await sendDO(searchData);
      notifySuccess('Send DO is successful.');
    } catch (error) {
      notifyError(error.message);
    }
  };

  const handleRecap = async () => {
    try {
      QueryParam.set(searchData);
      await recap(searchData);
      notifySuccess('Recap is successful.');
    } catch (error) {
      notifyError(error.message);
    }
  };

  const handleUpdateStatus = async (data) => {
    const rowsCopy = [...rows];
    var counter = 0;
    try {
      for (const r of idsToUpdate) {
        const response = await editOpenItemStatus(r, data);
        rowsCopy[rowsToUpdate[counter]] = response.openItem;
        setRows(rowsCopy);
        counter++;
      }
    } catch (error) {
      notifyError(error.message);
    } finally {
      notifySuccess('Status has been updated successfully');
      idsToUpdate.splice(0);
      rowsToUpdate.splice(0);
    }
    setUpdateStatus(false);
  };

  const handleSetSelectedIds = (data) => {
    idsToUpdate.splice(0);
    rowsToUpdate.splice(0);
    for (var a = 0; a < data.length; a++) {
      idsToUpdate[a] = rows[data[a].dataIndex].openItemId;
      rowsToUpdate[a] = [data[a].dataIndex];
    }
  };

  const handleChange = (e) => {
    const input = e.currentTarget.name ? e.currentTarget : e.target;

    setSearchData({
      ...searchData,
      [input.name]: input.value,
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
                  name="settleDate"
                  fullWidth
                  label="Settle Date"
                  type="date"
                  value={searchData.settleDate}
                  onChange={handleChange}
                  InputLabelProps={{ shrink: true }}
                />
              </div>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <SelectAccountNo
                  freeSolo={true}
                  name="accountNo"
                  label="Account No"
                  value={searchData.accountNo}
                  // correspondent={searchData.correspondent}
                  onChange={handleChange}
                  type="" //client or gl
                ></SelectAccountNo>
              </div>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <InputLabel shrink id="contra_broker_code">
                  Contra Broker Code
                </InputLabel>
                <TextField
                  fullWidth
                  name="contraBrokerCode"
                  value={searchData.contraBrokerCode}
                  onChange={handleChange}
                />
              </div>
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
                <SelectCusip
                  freeSolo={true}
                  name="cusip"
                  label="Cusip"
                  value={searchData.cusip}
                  onChange={handleChange}
                  InputLabelProps={{ shrink: true }}
                />
              </div>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <InputLabel shrink>Status</InputLabel>
                <Select
                  name="status"
                  displayEmpty
                  fullWidth
                  value={searchData.status}
                  onChange={handleChange}
                >
                  <MenuItem value="">
                    <em>Blank</em>
                  </MenuItem>
                  <MenuItem value="made">Made</MenuItem>
                  <MenuItem value="unmade">Un-made</MenuItem>
                  <MenuItem value="send_do">Send DO</MenuItem>
                  <MenuItem value="sent">Sent</MenuItem>
                </Select>
              </div>
            </div>
          </div>
        ) : null}
        <div className={classes.actionContainer}>
          <div className={classes.grdCellNone} style={{ marginRight: 10 }}>
            <SearchButton
              onClick={handleSearch}
              loading={loading}
              showfilter={(status) => setShowFilter(status)}
            />
          </div>
          <div className={classes.grdCellNone} style={{ marginRight: 10 }}>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              onClick={() => {
                if (idsToUpdate.length === 0) {
                  notifyInfo('No selected rows');
                } else {
                  setUpdateStatus(true);
                }
              }}
            >
              Update Status
            </Button>
          </div>
          <div className={classes.grdCellNone} style={{ marginRight: 10 }}>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              onClick={() => {
                handleSendDO();
              }}
            >
              Send DO
            </Button>
          </div>
          <div className={classes.grdCellNone}>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              onClick={() => {
                handleRecap();
              }}
            >
              RECAP
            </Button>
          </div>
        </div>
      </Box>
      <Box component="div" mt={2}>
        <Table
          title="Open Item"
          data={rows}
          columns={columns}
          options={options}
        />
      </Box>

      {open && (
        <OpenItemDetailsModal
          onClose={handleClose}
          open={open}
          value={rowData}
        ></OpenItemDetailsModal>
      )}

      {edit && (
        <OpenItemEditModal
          onClose={handleEditClose}
          open={edit}
          value={rowData}
        ></OpenItemEditModal>
      )}

      {updateStatus && (
        <OpenItemUpdateStatusModal
          onClose={handleUpdateStatus}
          open={updateStatus}
        ></OpenItemUpdateStatusModal>
      )}
    </div>
  );
}
