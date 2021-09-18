import React, { useState, useEffect } from 'react';
import { listMarginInterestCalc } from '../../../services/MarginInterestCalcService';
import { getSystemDate } from '../../../services/ProfileService';
import { notifyInfo, notifyError } from 'components/Notification/Notification';
import { Box, TextField } from '@material-ui/core';
import Table, { columnType } from 'components/Table/Table';
import useStyles from '../../../styles';
import SelectCorrespondent from '../../../components/AutoComplete/SelectCorrespondent';
import SelectAccountNo from '../../../components/AutoComplete/SelectAccountNo';
import SelectAccountName from '../../../components/AutoComplete/SelectAccountName';
import SelectMasterAccountNo from '../../../components/AutoComplete/SelectMasterAccountNo';
import SelectBranch from '../../../components/AutoComplete/SelectBranch';
import SelectRep from '../../../components/AutoComplete/SelectRep';
import SearchButton from '../../../components/Button/Search';
import QueryParam from '../../../services/QueryParamService';

export default function MarginInterestCalcTable({ params }) {
  const classes = useStyles();

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
      name: 'accountName',
      label: 'Account Name',
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
      name: 'settleDate',
      label: 'Settle Date',
      type: columnType.date,
    },
    {
      name: 'sdCashBalance',
      label: 'Sd Cash Balance',
      type: columnType.amount,
    },
    {
      name: 'rate',
      label: 'Rate',
      type: columnType.quantity,
    },
    {
      name: 'marginInterest',
      label: 'Margin Interest',
      type: columnType.amount,
    },
    {
      name: 'status',
      label: 'Status',
    },
    {
      name: 'markUpdnRate',
      label: 'Mark Updn Rate',
      type: columnType.amount,
    },
    {
      name: 'markUpdnValue',
      label: 'Mark Updn Value',
      type: columnType.amount,
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

  const [loading, setLoading] = React.useState(false);
  const [showFilter, setShowFilter] = React.useState(true);
  const [rows, setRows] = useState([]);
  const [searchData, setSearchData] = React.useState(
    QueryParam.get({
      settleDate: '',
      correspondent: '',
      accountNo: '',
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
      const data = await listMarginInterestCalc(searchData);
      setRows(data.marginIntsList);
      notifyInfo(data.marginIntsList.length + ' search results.');
    } catch (error) {
      console.error(error);
      notifyError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(
    () => {
      async function init() {
        if (searchData.settleDate) return;

        const systemDate = await getSystemDate();
        setSearchData({ ...searchData, settleDate: systemDate });
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
                  fullWidth
                  name="settleDate"
                  label="Settle Date"
                  type="date"
                  value={searchData.settleDate}
                  onChange={handleChange}
                  InputLabelProps={{ shrink: true }}
                />
              </div>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <SelectCorrespondent
                  freeSolo={true}
                  name="correspondent"
                  value={searchData.correspondent}
                  onChange={handleChange}
                ></SelectCorrespondent>
              </div>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <SelectBranch
                  freeSolo={true}
                  name="branch"
                  label="Branch"
                  value={searchData.branch}
                  onChange={handleChange}
                ></SelectBranch>
              </div>
              <div className={classes.grdCell1}>
                <SelectAccountNo
                  freeSolo={true}
                  name="accountNo"
                  label="Account No"
                  value={searchData.accountNo}
                  correspondent={searchData.correspondent}
                  onChange={handleChange}
                ></SelectAccountNo>
              </div>
            </div>
            <div className={classes.grdRow}>
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
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <SelectAccountName
                  freeSolo={true}
                  required={false}
                  label="Account Name"
                  name="accountName"
                  value={searchData.accountName}
                  onChange={handleChange}
                ></SelectAccountName>
              </div>
              <div className={classes.grdCell1}></div>
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
          title={'Margin Interest Calc'}
          data={rows}
          columns={columns}
          options={options}
        />
      </Box>
    </div>
  );
}
