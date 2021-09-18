import React, { useState, useEffect } from 'react';
import AccountDetailsModal from './AccountDetailsModal';
import { notifyInfo, notifyError } from 'components/Notification/Notification';
import { Box, TextField, IconButton } from '@material-ui/core';
import Table, { columnType } from 'components/Table/Table';
import useStyles from '../../../styles';
import { Visibility as ViewIcon } from '@material-ui/icons';
import SelectMasterAccountNo from '../../../components/AutoComplete/SelectMasterAccountNo';
import SelectAccountName from '../../../components/AutoComplete/SelectAccountName';
import SelectSystemCode from 'components/Dropdown/SelectSystemCode';
import SearchButton from '../../../components/Button/Search';
import { getSystemDate } from '../../../services/ProfileService';
import QueryParam from '../../../services/QueryParamService';
import { listSegAccount } from 'services/SegregationService';

export default function SegregationBalanceTable({ params, segType }) {
  const classes = useStyles();

  useEffect(
    () => {
      async function init() {
        if (searchData.settleDate) return;

        const settleDate = await getSystemDate();
        setSearchData({ ...searchData, settleDate: settleDate });
      }

      init();
    },
    // eslint-disable-next-line
    []
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
              <div align={'left'} className={classes.grdCeNone}>
                <IconButton
                  aria-label="view"
                  onClick={() => {
                    setRowData(rows[dataIndex]);
                    setOpen(true);
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
      name: 'correspondent',
      label: 'Correspondent',
      options: {
        display: false,
      },
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
      name: 'broker',
      label: 'Broker',
    },
    {
      name: 'cashBalance',
      label: 'Cash Balance',
      type: columnType.amount,
      addFooter: true,
    },
    {
      name: 'shortMarketValue',
      label: 'Short Market Value',
      type: columnType.amount,
      addFooter: true,
    },
    {
      name: 'adjustedBalance',
      label: 'Adjusted Balance',
      type: columnType.amount,
      addFooter: true,
    },
    {
      name: 'loanRate',
      label: 'Loan Rate',
      type: columnType.percentage,
      options: {
        display: false,
      },
    },
    {
      name: 'loanValue',
      label: 'Loan Value',
      type: columnType.amount,
      addFooter: true,
      options: {
        display: false,
      },
    },
    {
      name: 'longMarketValue',
      label: 'Long Market Value',
      type: columnType.amount,
      addFooter: true,
      options: {
        display: false,
      },
    },
    {
      name: 'lockup',
      label: 'Lockup',
      type: columnType.amount,
      addFooter: true,
    },
    {
      name: 'segAmt',
      label: 'Seg Amt',
      type: columnType.amount,
      addFooter: true,
    },
    {
      name: 'excessMarginAmt',
      label: 'Excess Margin Amt',
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

  const options = {
    selectableRows: 'none',
  };

  const [rows, setRows] = useState([]);

  const handleSearch = async () => {
    try {
      setLoading(true);
      QueryParam.set(searchData);
      const data = await listSegAccount(searchData);
      setRows(data.segAccountsList);
      notifyInfo(data.segAccountsList.length + ' search results.');
    } catch (error) {
      console.error(error);
      notifyError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleClose = async () => {
    setOpen(false);
  };

  const [loading, setLoading] = React.useState(false);
  const [rowData, setRowData] = React.useState({});
  const [open, setOpen] = React.useState(false);
  const [showFilter, setShowFilter] = React.useState(true);
  const [searchData, setSearchData] = React.useState(
    QueryParam.get({
      settleDate: '',
      correspondent: '',
      masterAccountNo: '',
      accountName: '',
      broker: '',
    })
  );

  const handleChange = (e, x) => {
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
                  name="settleDate"
                  label="Settle Date"
                  type="date"
                  value={searchData.settleDate}
                  onChange={handleChange}
                  InputLabelProps={{ shrink: true }}
                />
              </div>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <SelectMasterAccountNo
                  name="masterAccountNo"
                  label="Master Account No"
                  value={searchData.masterAccountNo}
                  onChange={handleChange}
                ></SelectMasterAccountNo>
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
              <div className={classes.grdCell1}>
                <SelectSystemCode
                  name="broker"
                  label="Broker"
                  type="Broker"
                  value={searchData.broker}
                  onChange={handleChange}
                ></SelectSystemCode>
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
          title={'Segregation Account'}
          data={rows}
          columns={columns}
          options={options}
        />
      </Box>
      {open && (
        <AccountDetailsModal
          onClose={handleClose}
          open={open}
          value={rowData}
        ></AccountDetailsModal>
      )}
    </div>
  );
}
