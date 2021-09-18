import React, { useState, useEffect } from 'react';
import {
  Box,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
} from '@material-ui/core';
import { formatQty, formatDollar } from 'lib/fmt';
import {
  notifyInfo,
  notifyError,
  notifySuccess,
} from 'components/Notification/Notification';
import { listPosition, movePosition } from '../../../services/PositionService';
import SearchButton from '../../../components/Button/Search';
import SelectCorrespondent from '../../../components/AutoComplete/SelectCorrespondent';
import SelectAccountNo from '../../../components/AutoComplete/SelectAccountNo';
import SelectMasterAccountNo from '../../../components/AutoComplete/SelectMasterAccountNo';
import SelectAccountName from '../../../components/AutoComplete/SelectAccountName';
import SelectBranch from '../../../components/AutoComplete/SelectBranch';
import SelectRep from '../../../components/AutoComplete/SelectRep';
import SelectSystemCode from '../../../components/Dropdown/SelectSystemCode';
import { getSystemDate } from '../../../services/ProfileService';
import SelectSymbol from '../../../components/AutoComplete/SelectSymbol';
import SelectCusip from '../../../components/AutoComplete/SelectCusip';
import QueryParam from '../../../services/QueryParamService';
import Table, { columnType } from 'components/Table/Table';
import useStyles from '../../../styles';
import MovePositionModal from './MovePositionModal';

export default function BalanceTable({ params }) {
  const classes = useStyles();
  //Set value of system date search parameter
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

  const amtColor = (v) => {
    return { color: v < 0 && '#f44336' };
  };

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
  const [positionsList] = React.useState([]);

  //search parameters initial value
  const [searchData, setSearchData] = React.useState(
    QueryParam.get({
      correspondent: '',
      accountNo: '',
      accountName: '',
      masterAccountNo: '',
      broker: '',
      type: '',
      symbol: '',
      cusip: '',
      date: '',
      dateType: 'system_date',
      unpricedSecurity: false,
      branch: '',
      rep: '',
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
      options: {
        display: false,
      },
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
      options: {
        display: false,
      },
    },
    {
      name: 'accountNo',
      label: 'Account No',
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
      name: 'marginType',
      label: 'Margin Type',
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
      options: {
        display: false,
      },
    },
    {
      name: 'symbolDescription',
      label: 'Symbol Description',
      options: {
        display: false,
      },
    },
    {
      name: 'assetType',
      label: 'Asset Type',
      options: {
        display: false,
      },
    },
    {
      name: 'closingPrice',
      label: 'Closing Price',
      type: columnType.amount,
      options: {
        display: false,
        addFooter: false,
      },
    },
    {
      name: 'qty',
      label: 'Qty',
      type: columnType.quantity,
      addFooter: true,
    },
    {
      name: 'marketValue',
      label: 'Market Value',
      type: columnType.amount,
      addFooter: true,
    },
    {
      name: 'costBasis',
      label: 'Cost Basis',
      type: columnType.amount,
      addFooter: true,
    },
    {
      name: 'dateType',
      label: 'Date Type',
    },
    {
      name: 'date',
      label: 'Date',
      type: columnType.date,
    },
    {
      name: 'longQty',
      label: 'Long QTY',
      type: columnType.quantity,
      addFooter: true,
      options: {
        display: false,
      },
    },
    {
      name: 'shortQty',
      label: 'Short QTY',
      type: columnType.quantity,
      addFooter: true,
      options: {
        display: false,
      },
    },
    {
      name: 'shortMarketValue',
      label: 'Short Market Value',
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
    serverSide: true,
    selectableRows: selectableRows,
    selectableRowsHideCheckboxes: isNotMovable,
    customToolbarSelect: (selectedRows, a, b) => {
      return (
        <div
          className={classes.grdRow}
          style={{ margin: 0, padding: 0, marginRight: 20 }}
        >
          <div className={classes.grdCell1}>
            <Button
              style={{ marginRight: 20 }}
              variant="contained"
              color="primary"
              size="medium"
              onClick={() => {
                handleOpen(selectedRows.data);
              }}
            >
              Move Position
            </Button>
          </div>
        </div>
      );
    },
  };

  const getCsvData = async () => {
    const data = await listPosition(searchData);
    return data.positionsList;
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

      const data = await listPosition(searchData, paginationCopy);
      if (paginationChange !== true) {
        notifyInfo(data.summary.totalRows + ' search results.');
      }
      paginationCopy.count = data.summary.totalRows;
      setPagination(paginationCopy);
      setRows(data.positionsList);
      setFooterData({
        qty: formatQty(data.summary.qty),
        marketValue: formatDollar(data.summary.marketValue),
        costBasis: formatDollar(data.summary.costBasis),
      });

      // Show Checkboxes if date is equal to current date
      if (searchData.date == currentDate) {
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

  const handleChange = (e, checkboxValue) => {
    const input = e.currentTarget.name ? e.currentTarget : e.target;

    if (input.name === 'unpricedSecurity') {
      setSearchData({
        ...searchData,
        [input.name]: checkboxValue,
      });
    } else {
      setSearchData({
        ...searchData,
        [input.name]: input.value,
      });
    }
  };

  const handleOpen = (data) => {
    // Set Selected Rows to Local Variable
    rowsToUpdate.splice(0);
    for (var a = 0; a < data.length; a++) {
      rowsToUpdate[a] = data[a].dataIndex;
    }

    // Open Modal
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

      //PROCESS
      positionsList.splice(0);
      for (var a = 0; a < rowsToUpdate.length; a++) {
        positionsList.push(rows[rowsToUpdate[a]]);
      }

      const res = await movePosition({
        dateType: searchData.dateType,
        date: currentDate,
        entryType: data.entryType,
        contraCorrespondent: data.contraCorrespondent,
        contraAccountNo: data.contraAccountNo,
        contraSubAccountNo: data.contraSubAccountNo,
        description: data.description,
        positions: positionsList,
      });

      notifySuccess(
        positionsList.length + ' positions has been moved successfully'
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
                <InputLabel shrink id="dateType">
                  Date Type
                </InputLabel>
                <Select
                  name="dateType"
                  required
                  labelId="dateType"
                  fullWidth
                  value={searchData.dateType}
                  onChange={handleChange}
                >
                  <MenuItem value="">
                    <em>Blank</em>
                  </MenuItem>
                  <MenuItem value="settle_date">Settle Date</MenuItem>
                  <MenuItem value="system_date">System Date</MenuItem>
                  <MenuItem value="trade_date">Trade Date</MenuItem>
                </Select>
              </div>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <TextField
                  name="date"
                  fullWidth
                  label="Date"
                  type="date"
                  value={searchData.date}
                  onChange={handleChange}
                  InputLabelProps={{ shrink: true }}
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
                  type="text"
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
                  freeSolo={true}
                  required={false}
                  name="masterAccountNo"
                  label="Master Account No"
                  value={searchData.masterAccountNo}
                  correspondent={searchData.correspondent}
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
                <SelectAccountName
                  freeSolo={true}
                  required={false}
                  label="Account Name"
                  name="accountName"
                  value={searchData.accountName}
                  onChange={handleChange}
                ></SelectAccountName>
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
                <InputLabel shrink id="type">
                  Type
                </InputLabel>
                <Select
                  name="type"
                  required
                  labelId="type"
                  fullWidth
                  value={searchData.type}
                  onChange={handleChange}
                >
                  <MenuItem value="">
                    <em>Blank</em>
                  </MenuItem>
                  <MenuItem value="client">Client</MenuItem>
                  <MenuItem value="gl">GL</MenuItem>
                </Select>
              </div>
            </div>
            <div className={classes.grdRow}>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <SelectSymbol
                  freeSolo={true}
                  name="symbol"
                  label="Symbol"
                  value={searchData.symbol}
                  onChange={handleChange}
                  InputLabelProps={{ shrink: true }}
                  inputProps={{ maxLength: 30 }}
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
                <InputLabel shrink></InputLabel>
                <FormControlLabel
                  control={<Checkbox color="primary" />}
                  name="unpricedSecurity"
                  label="Unpriced Security"
                  checked={searchData.unpricedSecurity}
                  onChange={handleChange}
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
        </div>
      </Box>
      <Box component="div" mt={2}>
        <Table
          title={'POSITION'}
          data={rows}
          columns={columns}
          options={options}
          footerData={footerData}
          onSearch={handleSearch}
          pagination={pagination}
          setPagination={setPagination}
          getCsvData={getCsvData}
          additionalCell={true}
        />
      </Box>

      {isOpen && (
        <MovePositionModal
          onClose={handleClose}
          open={isOpen}
        ></MovePositionModal>
      )}
    </div>
  );
}
