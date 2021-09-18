import React, { useState, useEffect } from 'react';
import { Box, TextField, Button } from '@material-ui/core';
import { formatQty, formatDollar } from 'lib/fmt';
import {
  notifyInfo,
  notifyError,
  notifySuccess,
} from 'components/Notification/Notification';
import { listBalance } from '../../../services/BalanceService';
import SearchButton from '../../../components/Button/Search';
import SelectCorrespondent from '../../../components/AutoComplete/SelectCorrespondent';
import SelectAccountNo from '../../../components/AutoComplete/SelectAccountNo';
import SelectMasterAccountNo from '../../../components/AutoComplete/SelectMasterAccountNo';
import SelectAccountName from '../../../components/AutoComplete/SelectAccountName';
import SelectBranch from '../../../components/AutoComplete/SelectBranch';
import SelectRep from '../../../components/AutoComplete/SelectRep';
import SelectSystemCode from '../../../components/Dropdown/SelectSystemCode';
import QueryParam from '../../../services/QueryParamService';
import { getSystemDate } from '../../../services/ProfileService';
import Table, { columnType } from 'components/Table/Table';
import useStyles from '../../../styles';
import MoveBalanceModal from './MoveBalanceModal';

export default function BalanceTable({ params }) {
  const classes = useStyles();

  useEffect(
    () => {
      async function init() {
        if (searchData.systemDate) return;

        const systemDate = await getSystemDate();
        setCurrentDate(systemDate);
        setSearchData({ ...searchData, date: systemDate });
      }

      init();
    },
    // eslint-disable-next-line
    []
  );

  const [pagination, setPagination] = useState({});
  const [footerData, setFooterData] = useState({});
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = React.useState(false);
  const [showFilter, setShowFilter] = React.useState(true);
  const [isNotMovable, setIsNotMovable] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectableRows, setSelectableRows] = useState('multiple');
  const [currentDate, setCurrentDate] = useState('');
  const [rowsToUpdate] = React.useState([]);
  const [balancesList] = React.useState([]);

  const [searchData, setSearchData] = React.useState(
    QueryParam.get({
      correspondent: '',
      accountName: '',
      accountNo: '',
      broker: '',
      masterAccountNo: '',
      type: '',
      date: '',
      dateType: 'system_date',
    })
  );

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
      name: 'subAccountNo',
      label: 'Sub Account No',
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
      name: 'marginType',
      label: 'Margin Type',
      options: {
        display: false,
      },
    },
    {
      name: 'dateType',
      label: 'Date Type',
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
      name: 'cashBalance',
      label: 'Cash Balance',
      type: columnType.amount,
      addFooter: true,
    },
    {
      name: 'longMarketValue',
      label: 'Long Market Value',
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
      name: 'equity',
      label: 'Equity',
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
      name: 'regFee',
      label: 'Reg Fee',
      type: columnType.amount,
      addFooter: true,
      options: {
        display: false,
      },
    },
    {
      name: 'tafFee',
      label: 'Taf Fee',
      type: columnType.amount,
      addFooter: true,
      options: {
        display: false,
      },
    },
    {
      name: 'commission',
      label: 'Commission',
      type: columnType.amount,
      addFooter: true,
      options: {
        display: false,
      },
    },
    {
      name: 'fees',
      label: 'Fees',
      type: columnType.amount,
      addFooter: true,
      options: {
        display: false,
      },
    },
    {
      name: 'haircut',
      label: 'Haircut',
      type: columnType.amount,
      addFooter: true,
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

  const options = {
    selectableRows: selectableRows,
    selectableRowsHideCheckboxes: isNotMovable,
    customToolbarSelect: (selectedRows, a, b) => {
      return (
        <div
          className={classes.grdRow}
          style={{ margin: 0, padding: 0, marginRight: 10 }}
        >
          <div className={classes.grdCell1}>
            <Button
              variant="contained"
              color="primary"
              size="medium"
              onClick={() => {
                handleOpen(selectedRows.data);
              }}
            >
              Move Balance
            </Button>
          </div>
        </div>
      );
    },
  };

  const getCsvData = async () => {
    const data = await listBalance(searchData);
    return data.balancesList;
  };

  const handleSearch = async (paginationChange) => {
    try {
      setLoading(true);
      QueryParam.set(searchData);

      let paginationCopy = {
        ...pagination,
        reload: false,
        pageNo: paginationChange === true ? pagination.pageNo : 0,
      };

      const data = await listBalance(searchData, paginationCopy);
      if (paginationChange !== true) {
        notifyInfo(data.summary.totalRows + ' search results.');
      }

      paginationCopy.count = data.summary.totalRows;
      setPagination(paginationCopy);
      setRows(data.balancesList);

      setFooterData({
        cashBalance: formatDollar(data.summary.cashBalance),
        longMarketValue: formatDollar(data.summary.longMarketValue),
        shortMarketValue: formatDollar(data.summary.shortMarketValue),
        equity: formatQty(data.summary.equity),
        adjustedBalance: formatDollar(data.summary.adjustedBalance),
      });

      if (searchData.date === currentDate) {
        setIsNotMovable(false);
        setSelectableRows('multiple');
      } else {
        setSelectableRows('none');
        setIsNotMovable(true);
      }
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

  const handleOpen = (data) => {
    rowsToUpdate.splice(0);
    for (var a = 0; a < data.length; a++) {
      rowsToUpdate[a] = data[a].dataIndex;
    }

    setIsOpen(true);
  };

  const handleClose = async (data) => {
    if (!data) {
      setIsOpen(false);
      return;
    }

    try {
      let valid = true;

      if (!data.entryType) {
        notifyError('Entry Type is required.');
        valid = false;
      }
      if (!data.contraAccountNo) {
        notifyError('Contra Account No is required.');
        valid = false;
      }

      if (!valid) {
        return;
      }

      balancesList.splice(0);
      for (var a = 0; a < rowsToUpdate.length; a++) {
        balancesList.push(rows[rowsToUpdate[a]]);
      }

      notifySuccess(
        balancesList.length + ' balances has been moved successfully'
      );
      setIsOpen(false);
    } catch (error) {
      console.error(error);
      notifyError(error.message);
    }
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
                  type="Sub Account Type"
                  value={searchData.type}
                  onChange={handleChange}
                ></SelectSystemCode>
              </div>
              <div className={classes.grdCell1}>
                <SelectCorrespondent
                  name="correspondent"
                  value={searchData.correspondent}
                  onChange={handleChange}
                  freeSolo={true}
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
          title={'BALANCE'}
          data={rows}
          columns={columns}
          options={options}
          footerData={footerData}
          onSearch={handleSearch}
          pagination={pagination}
          setPagination={setPagination}
          getCsvData={getCsvData}
        />
      </Box>
      {isOpen && (
        <MoveBalanceModal
          onClose={handleClose}
          open={isOpen}
        ></MoveBalanceModal>
      )}
    </div>
  );
}
