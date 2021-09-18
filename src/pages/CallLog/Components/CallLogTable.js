import React, { useState, useEffect } from 'react';
import CallLogModal from './CallLogModal';
import {
  notifySuccess,
  notifyInfo,
  notifyError,
} from 'components/Notification/Notification';
import {
  Box,
  TextField,
  IconButton,
} from '@material-ui/core';
import Table, { columnType } from 'components/Table/Table';
import { Create as EditIcon } from '@material-ui/icons';
import useStyles from '../../../styles';
import SelectCorrespondent from '../../../components/AutoComplete/SelectCorrespondent';
import SelectMasterAccountNo from '../../../components/AutoComplete/SelectMasterAccountNo';
import SelectAccountName from '../../../components/AutoComplete/SelectAccountName';
import SelectSystemCode from 'components/Dropdown/SelectSystemCode';
import SearchButton from '../../../components/Button/Search';
import QueryParam from '../../../services/QueryParamService';
import { listCallLog, updateCallLog } from '../../../services/CallLogService';
import { getPreviousDate } from '../../../services/ProfileService';

export default function CallLogTable({ params }) {
  const classes = useStyles();

  const options = {
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
              <div align={'left'} className={classes.grdCell1}>
                <IconButton
                  aria-label="details"
                  onClick={() => {
                    handleOpen(rows[dataIndex]);
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
      name: 'tradeDate',
      label: 'Trade Date',
      type: columnType.date,
    },
    {
      name: 'correspondent',
      label: 'Correspondent',
    },
    {
      name: 'masterAccountNo',
      label: 'Master Account No',
    },
    {
      name: 'accountName',
      label: 'Account Name',
    },
    {
      name: 'callType',
      label: 'Call Type',
    },
    {
      name: 'callReq',
      label: 'Call Requirement',
      type: columnType.amount,
      addFooter: true,
    },
    {
      name: 'callAmt',
      label: 'Call Amt',
      type: columnType.amount,
      addFooter: true,
    },
    {
      name: 'callStatus',
      label: 'Call Status',
      type: columnType.status,
    },
    {
      name: 'callStatusReason',
      label: 'Call Status Reason',
    },
    {
      name: 'modifiedBy',
      label: 'Modified By',
    },
    {
      name: 'modifiedDate',
      label: 'Modified Date',
      type: columnType.dateTime,
    },
    {
      name: 'dueDate',
      label: 'Due Date',
      type: columnType.date,
    },
    {
      name: 'callStatusReasonCount',
      label: 'Call Status Reason Count',
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
  const [searchData, setSearchData] = React.useState(
    QueryParam.get({
      fromDate: '',
      toDate: '',
      callType: '',
      correspondent: '',
      masterAccountNo: '',
      accountName: '',
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
      const data = await listCallLog(searchData);
      setRows(data.callLogsList);
      notifyInfo(data.callLogsList.length + ' search results.');
    } catch (error) {
      console.error(error);
      notifyError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleOpen = (data) => {
    setRowData(data);
    setOpen(true);
  };

  const handleClose = async (data,closeOnly) => {

    if (closeOnly) {
      setOpen(false);
      return;
    }

    if (!data) {
      setOpen(false);
      return;
    }

    try {
      if (!data.callStatus) {
        notifyError('Call status is required.');
        return;
      }

      if (!data.callStatusReason) {
        notifyError('Call status reason is required.');
        return;
      }

      const resp = await updateCallLog(data);
      const rowsCopy = [...rows];
      const index = rows.indexOf(rowData);
      rowsCopy[index] = resp.callLog;
      setRows(rowsCopy);
      notifySuccess('Call log has been updated.');
      setOpen(false);
    } catch (error) {
      console.error(error);
      notifyError(error.message);
    }
  };

  useEffect(
    () => {
      async function init() {
        if (searchData.toDate || searchData.fromDate) return;

        const systemDate = await getPreviousDate();
        setSearchData({
          ...searchData,
          toDate: systemDate,
          fromDate: systemDate,
        });
      }

      init();
    },
    // eslint-disable-next-line
    []
  );

  return (
    <div className={classes.root}>
      <Box component="div" mt={5}>
        {showFilter ? (
          <div>
            <div className={classes.grdRow}>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <TextField
                  name="fromDate"
                  fullWidth
                  label="From Date"
                  type="date"
                  value={searchData.fromDate}
                  onChange={handleChange}
                  InputLabelProps={{ shrink: true }}
                />
              </div>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <TextField
                  name="toDate"
                  fullWidth
                  label="To Date"
                  type="date"
                  value={searchData.toDate}
                  onChange={handleChange}
                  InputLabelProps={{ shrink: true }}
                />
              </div>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <SelectSystemCode
                  name="callType"
                  label="Call Type"
                  type="Call Type"
                  value={searchData.callType}
                  onChange={handleChange}
                ></SelectSystemCode>
              </div>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <SelectCorrespondent
                  name="correspondent"
                  value={searchData.correspondent}
                  onChange={handleChange}
                ></SelectCorrespondent>
              </div>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <SelectMasterAccountNo
                  name="masterAccountNo"
                  label="Master Account No"
                  value={searchData.masterAccountNo}
                  onChange={handleChange}
                ></SelectMasterAccountNo>
              </div>
              <div className={classes.grdCell1}>
                <SelectAccountName
                  freeSolo={true}
                  label="Account Name"
                  name="accountName"
                  value={searchData.accountName}
                  onChange={handleChange}
                ></SelectAccountName>
              </div>
            </div>
          </div>
        ) : null}
        <div className={classes.actionContainer}>
          <div className={classes.grdCellNone}>
            <SearchButton
              onClick={() => handleSearch()}
              loading={loading}
              showfilter={(status) => setShowFilter(status)}
            />
          </div>
        </div>
      </Box>
      <Box component="div" mt={2}>
        <Table
          title={'Call Logs'}
          data={rows}
          columns={columns}
          options={options}
        />
      </Box>
      {open && (
        <CallLogModal
          onClose={handleClose}
          open={open}
          value={rowData}
        ></CallLogModal>
      )}
    </div>
  );
}
