import React, { useState, useEffect } from 'react';
import { formatPbDate } from 'lib/fmt';
import { Box, IconButton, TextField } from '@material-ui/core';
import { notifyInfo, notifyError } from 'components/Notification/Notification';
import {
  listDailyTradeConfirm,
  downloadDailyTradeConfirmation,
} from '../../../services/DailyTradeConfirmService';
import SearchButton from '../../../components/Button/Search';
import SelectCorrespondent from '../../../components/AutoComplete/SelectCorrespondent';
import SelectAccountNo from '../../../components/AutoComplete/SelectAccountNo';
import SelectMasterAccountNo from '../../../components/AutoComplete/SelectMasterAccountNo';
import SelectAccountName from '../../../components/AutoComplete/SelectAccountName';
import SelectBranch from '../../../components/AutoComplete/SelectBranch';
import SelectRep from '../../../components/AutoComplete/SelectRep';
import { getSystemDate } from '../../../services/ProfileService';
import { GetAppRounded as DownloadIcon } from '@material-ui/icons';
import QueryParam from '../../../services/QueryParamService';
import useStyles from '../../../styles';
import Table, { columnType } from 'components/Table/Table';

export default function BalanceTable({ params }) {
  const classes = useStyles();

  useEffect(
    () => {
      async function init() {
        // if (searchData.tradeDate) return;

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

  const [rows, setRows] = useState([]);

  const [loading, setLoading] = React.useState(false);
  const [showFilter, setShowFilter] = React.useState(true);

  // //search parameters initial value
  const [searchData, setSearchData] = useState(
    QueryParam.get({
      fromDate: '',
      toDate: '',
      correspondent: '',
      branch: '',
      accountNo: '',
      accountName: '',
      masterAccountNo: '',
      rep: '',
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
                  aria-label="download"
                  onClick={() =>
                    downloadDailyTradeConfirmation(
                      formatPbDate(rows[dataIndex].tradeDate),
                      rows[dataIndex].accountId
                    )
                  }
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
      name: 'tradeDate',
      label: 'Trade Date',
      type: columnType.date,
    },
    {
      name: 'correspondent',
      label: 'Correspondent',
    },
    {
      name: 'branch',
      label: 'Branch',
    },
    {
      name: 'accountNo',
      label: 'Account No',
    },
    {
      name: 'accountName',
      label: 'Account Name',
    },
    {
      name: 'masterAccountNo',
      label: 'Master Account No',
    },
    {
      name: 'rep',
      label: 'Rep/Advisor',
    },
    {
      name: 'trnsCount',
      label: 'TRNS Count',
      type: columnType.quantity,
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
    selectableRows: 'none',
  };

  const handleSearch = async () => {
    try {
      setLoading(true);
      QueryParam.set(searchData);
      const data = await listDailyTradeConfirm(searchData);
      setRows(data.dailyTradeConfirmationsList);

      notifyInfo(data.dailyTradeConfirmationsList.length + ' search results.');
    } catch (error) {
      notifyError(error.message);
    } finally {
      setLoading(false);
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
                <SelectCorrespondent
                  required={false}
                  name="correspondent"
                  value={searchData.correspondent}
                  onChange={handleChange}
                ></SelectCorrespondent>
              </div>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <SelectBranch
                  required={false}
                  freeSolo={true}
                  name="branch"
                  label="Branch"
                  value={searchData.branch}
                  onChange={handleChange}
                ></SelectBranch>
              </div>
              
            </div>
            <div className={classes.grdRow}>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <SelectAccountNo
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
                <SelectMasterAccountNo
                  name="masterAccountNo"
                  label="Master Account No"
                  value={searchData.masterAccountNo}
                  onChange={handleChange}
                  freeSolo={true}
                ></SelectMasterAccountNo>
              </div>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <SelectRep
                  required={false}
                  freeSolo={true}
                  name="rep"
                  label="Rep"
                  value={searchData.rep}
                  onChange={handleChange}
                ></SelectRep>
              </div>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
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
              onClick={handleSearch}
              loading={loading}
              showfilter={(status) => setShowFilter(status)}
            />
          </div>
        </div>
      </Box>
      <Box component="div" mt={2}>
        <Table
          title="DAILY TRADE CONFIRM"
          data={rows}
          columns={columns}
          options={options}
        />
      </Box>
    </div>
  );
}
