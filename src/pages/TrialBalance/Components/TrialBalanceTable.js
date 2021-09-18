import React, { useState, useEffect } from 'react';
import { Box, Button, TextField } from '@material-ui/core';
import {
  Visibility as VisibilityIcon,
  VisibilityOff as VisibilityOffIcon,
} from '@material-ui/icons';
import { notifyInfo, notifyError } from 'components/Notification/Notification';
import { listTrialBalance } from '../../../services/TrialBalanceService';
import SearchButton from '../../../components/Button/Search';
import SelectCorrespondent from '../../../components/AutoComplete/SelectCorrespondent';
import SelectAccountNo from '../../../components/AutoComplete/SelectAccountNo';
import SelectMasterAccountNo from '../../../components/AutoComplete/SelectMasterAccountNo';
import SelectAccountName from '../../../components/AutoComplete/SelectAccountName';
import SelectBranch from '../../../components/AutoComplete/SelectBranch';
import SelectSystemCode from '../../../components/Dropdown/SelectSystemCode';
import SelectRep from '../../../components/AutoComplete/SelectRep';
import Table, { columnType } from '../../../components/Table/Table';
import QueryParam from '../../../services/QueryParamService';
import { getSystemDate } from '../../../services/ProfileService';
import useStyles from '../../../styles';

export default function BalanceTable({ params }) {
  const classes = useStyles();

  const [rows, setRows] = useState([]);
  const [origRows, setOrigRows] = useState([]);
  const [loading, setLoading] = React.useState(false);
  const [showFilter, setShowFilter] = React.useState(true);
  const [showZeroValues, setShowZeroValues] = React.useState(true);
  const [searchData, setSearchData] = React.useState(
    QueryParam.get({
      correspondent: '',
      accountName: '',
      accountNo: '',
      broker: '',
      masterAccountNo: '',
      type: '',
      date: '',
      dateType: 'System Date',
    })
  );

  useEffect(
    () => {
      async function init() {
        if (searchData.date) return;

        const systemDate = await getSystemDate();
        setSearchData({ ...searchData, date: systemDate });
      }

      init();
    },
    // eslint-disable-next-line
    []
  );

  useEffect(
    () => {
      setRows(filterZeroValues(origRows));
    },
    // eslint-disable-next-line
    [showZeroValues]
  );

  const filterZeroValues = (list) => {
    if (showZeroValues) {
      return [...list];
    }

    const filteredRows = list.filter((row) => {
      return row.sdDebitCashBalance !== '0' || row.sdCreditCashBalance !== '0';
    });

    return [...filteredRows];
  };

  const options = {
    selectableRows: 'none',
  };

  const columns = [
    {
      name: 'correspondent',
      label: 'Correspondent',
    },
    {
      name: 'branch',
      label: 'Branch',
      type: columnType.text,
      options: {
        display: false,
      },
    },
    {
      name: 'accountNo',
      label: 'Account No',
    },
    {
      name: 'masterAccountNo',
      label: 'Master Account No',
      options: {
        display: false,
      },
    },
    {
      name: 'rep',
      label: 'Rep',
      type: columnType.text,
      options: {
        display: false,
      },
    },
    {
      name: 'accountName',
      label: 'Account Name',
    },
    {
      name: 'broker',
      label: 'Broker',
      options: {
        display: false,
      },
    },
    {
      name: 'type',
      label: 'Type',
      options: {
        display: false,
      },
    },
    {
      name: 'date',
      label: 'Date',
      type: columnType.date,
    },
    {
      name: 'debitCashBalance',
      label: 'Debit Cash Balance',
      type: columnType.amount,
      addFooter: true,
    },
    {
      name: 'creditCashBalance',
      label: 'Credit Cash Balance',
      type: columnType.amount,
      addFooter: true,
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

  const handleSearch = async () => {
    try {
      setLoading(true);
      QueryParam.set(searchData);
      const { trialBalancesList } = await listTrialBalance(searchData);
      setOrigRows(trialBalancesList);
      const filteredRows = filterZeroValues(trialBalancesList);
      setRows(filteredRows);
      notifyInfo(filteredRows.length + ' search results.');
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
                <SelectSystemCode
                  name="dateType"
                  label="Date Type"
                  type="Date Type"
                  value={searchData.dateType}
                  onChange={handleChange}
                ></SelectSystemCode>
              </div>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <TextField
                  fullWidth
                  name="date"
                  label="Date"
                  type="date"
                  value={searchData.date}
                  onChange={handleChange}
                  InputLabelProps={{ shrink: true }}
                />
              </div>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <SelectSystemCode
                  name="broker"
                  label="Broker"
                  type="Broker"
                  value={searchData.broker}
                  onChange={handleChange}
                ></SelectSystemCode>
              </div>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <SelectSystemCode
                  name="type"
                  label="Type"
                  type="Type"
                  subType="Client Type"
                  value={searchData.type}
                  onChange={handleChange}
                ></SelectSystemCode>
              </div>
              <div className={classes.grdCell1}>
                <SelectCorrespondent
                  freeSolo={true}
                  name="correspondent"
                  value={searchData.correspondent}
                  onChange={handleChange}
                ></SelectCorrespondent>
              </div>
            </div>
            <div className={classes.grdRow}>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <SelectBranch
                  freeSolo={true}
                  name="branch"
                  label="Branch"
                  value={searchData.branch}
                  onChange={handleChange}
                ></SelectBranch>
              </div>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <SelectAccountNo
                  freeSolo={true}
                  name="accountNo"
                  label="Account No"
                  value={searchData.accountNo}
                  correspondent={searchData.correspondent}
                  onChange={handleChange}
                ></SelectAccountNo>
              </div>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <SelectMasterAccountNo
                  freeSolo={true}
                  name="masterAccountNo"
                  label="Master Account No"
                  value={searchData.masterAccountNo}
                  onChange={handleChange}
                ></SelectMasterAccountNo>
              </div>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <SelectRep
                  freeSolo={true}
                  name="rep"
                  label="Rep"
                  value={searchData.rep}
                  onChange={handleChange}
                ></SelectRep>
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
          <div className={classes.grdCellNone} style={{ marginRight: 10 }}>
            <SearchButton
              onClick={handleSearch}
              loading={loading}
              showfilter={(status) => setShowFilter(status)}
            />
          </div>
          <div className={classes.grdCellNone}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              startIcon={
                showZeroValues ? <VisibilityIcon /> : <VisibilityOffIcon />
              }
              onClick={() => {
                setShowZeroValues(showZeroValues ? false : true);
              }}
            >
              {showZeroValues ? 'Hide' : 'Show'} Zero Values
            </Button>
          </div>
        </div>
      </Box>
      <Box component="div" mt={2}>
        <Table
          title="TRIAL BALANCE"
          data={rows}
          columns={columns}
          options={options}
        />
      </Box>
    </div>
  );
}
