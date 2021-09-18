import React, { useState, useEffect } from 'react';
import {
  Box,
  TextField,
  IconButton,
  InputLabel,
  Select,
  MenuItem,
} from '@material-ui/core';

import { Visibility as ViewIcon } from '@material-ui/icons';

import Table, { columnType } from 'components/Table/Table';

import { notifyInfo, notifyError } from 'components/Notification/Notification';
import { listProfitAndLoss } from '../../../services/ProfitAndLossService';
import SearchButton from '../../../components/Button/Search';
import SelectCorrespondent from '../../../components/AutoComplete/SelectCorrespondent';
import SelectAccountNo from '../../../components/AutoComplete/SelectAccountNo';
import SelectBranch from '../../../components/AutoComplete/SelectBranch';
import SelectRep from '../../../components/AutoComplete/SelectRep';
import SelectMasterAccountNo from '../../../components/AutoComplete/SelectMasterAccountNo';
import SelectSystemCode from '../../../components/Dropdown/SelectSystemCode';
import SelectSymbol from '../../../components/AutoComplete/SelectSymbol';
import { getSystemDate } from '../../../services/ProfileService';
import QueryParam from '../../../services/QueryParamService';
import useStyles from '../../../styles';
import ProfitAndLossTableDetailsTable from './ProfitAndLossTableDetailsTable';

export default function BalanceTable({ params }) {
  const classes = useStyles();
  //Set value of system date search parameter
  useEffect(
    () => {
      async function init() {
        if (searchData.fromDate) return;

        const systemDate = await getSystemDate();
        setSearchData({
          ...searchData,
          fromDate: systemDate,
          toDate: systemDate,
        });
      }

      init();
    },
    // eslint-disable-next-line
    []
  );

  const [rowData, setRowData] = React.useState({});
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = React.useState(false);
  const [showFilter, setShowFilter] = React.useState(true);
  const [open, setOpen] = React.useState(false);
  //search parameters initial value
  const [searchData, setSearchData] = React.useState(
    QueryParam.get({
      fromDate: '',
      toDate: '',
      plType: '',
      correspondent: '',
      branch: '',
      accountNo: '',
      masterAccountNo: '',
      rep: '',
      assetType: '',
      symbol: '',
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
              <div align={'left'} className={classes.grdCellNone}>
                <IconButton
                  aria-label="view"
                  onClick={() => {
                    handleOpen(rows[dataIndex]);
                  }}
                >
                  <ViewIcon />
                </IconButton>
              </div>
            </div>
          );
        },
      },
    },
    {
      name: 'processDate',
      label: 'Process Date',
      type: columnType.date,
    },
    {
      name: 'accountId',
      label: 'Account ID',
      options: {
        display: false,
      },
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
      name: 'masterAccountNo',
      label: 'Master Account No',
    },
    {
      name: 'rep',
      label: 'Rep',
    },
    {
      name: 'originalCusip',
      label: 'Original Cusip',
      options: {
        display: false,
      },
    },
    {
      name: 'assetType',
      label: 'Asset Type',
    },
    {
      name: 'symbol',
      label: 'Symbol',
    },
    {
      name: 'symbolDescription',
      label: 'Symbol Description',
    },
    {
      name: 'realized',
      label: 'Realized',
      type: columnType.amount,
      addFooter: true,
    },
    {
      name: 'marketValue',
      label: 'Market Value',
      type: columnType.amount,
      addFooter: true,
    },
    {
      name: 'positionValue',
      label: 'Position Value',
      type: columnType.amount,
      addFooter: true,
    },
    {
      name: 'unrealized',
      label: 'Unrealized',
      type: columnType.amount,
      addFooter: true,
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
      const data = await listProfitAndLoss(searchData);
      setRows(data.profitandlossList);

      notifyInfo(data.profitandlossList.length + ' search results.');
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

  //Opens modal for edit
  const handleOpen = (data) => {
    setRowData(data);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <SelectCorrespondent
                    required={true}
                    name="correspondent"
                    label="Correspondent"
                    value={searchData.correspondent}
                    onChange={handleChange}
                  ></SelectCorrespondent>
                </div>
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
            </div>
            <div className={classes.grdRow}>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <SelectMasterAccountNo
                  required={false}
                  freeSolo={true}
                  name="masterAccountNo"
                  label="Master Account No"
                  value={searchData.masterAccountNo}
                  // correspondent={searchData.correspondent}
                  onChange={handleChange}
                  type="" //client or gl
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
                <SelectSystemCode
                  name="assetType"
                  label="Asset Type"
                  type="Asset Type"
                  value={searchData.assetType}
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
                  InputLabelProps={{ shrink: true }}
                />
              </div>

              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <InputLabel shrink>PL Type</InputLabel>
                <Select
                  fullWidth
                  value={searchData.plType}
                  onChange={handleChange}
                  name="plType"
                >
                  <MenuItem value="">
                    <em>Blank</em>
                  </MenuItem>
                  <MenuItem value="AVG">AVG</MenuItem>
                  <MenuItem value="FIFO">FIFO</MenuItem>
                  <MenuItem value="LILO">LILO</MenuItem>
                </Select>
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
          title="PROFIT AND LOSS"
          data={rows}
          columns={columns}
          options={options}
        />
      </Box>

      {open && (
        <ProfitAndLossTableDetailsTable
          onClose={handleClose}
          open={open}
          value={rowData}
        ></ProfitAndLossTableDetailsTable>
      )}
    </div>
  );
}
