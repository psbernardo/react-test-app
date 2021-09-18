import React, { useState, useEffect } from 'react';
import { notifyInfo, notifyError } from 'components/Notification/Notification';
import TAFFeeModal from './TAFFeeModal';
import { listTafFee } from '../../../services/TafFeeService';
import { Visibility as ViewIcon } from '@material-ui/icons';
import { Box, TextField, IconButton } from '@material-ui/core';
import Table, { columnType } from 'components/Table/Table';
import useStyles from '../../../styles';
import SearchButton from '../../../components/Button/Search';
import QueryParam from '../../../services/QueryParamService';
import SelectCorrespondent from 'components/AutoComplete/SelectCorrespondent';
import SelectAccountNo from '../../../components/AutoComplete/SelectAccountNo';
import SelectSystemCode from '../../../components/Dropdown/SelectSystemCode';
import SelectMasterAccountNo from '../../../components/AutoComplete/SelectMasterAccountNo';
import SelectBranch from '../../../components/AutoComplete/SelectBranch';
import SelectRep from '../../../components/AutoComplete/SelectRep';
import { getSystemDate } from '../../../services/ProfileService';

export default function TAFFeeTable({ params }) {
  const classes = useStyles();

  useEffect(
    () => {
      async function init() {
        const monthNames = [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December',
        ];

        const systemDate = await getSystemDate();
        const date = new Date(systemDate);
        const searchDataCopy = { ...searchData };

        if (!searchData.month) {
          searchDataCopy.month = monthNames[date.getMonth()];
        }

        if (!searchData.year) {
          searchDataCopy.year = date.getFullYear().toString();
        }

        setSearchData(searchDataCopy);
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
              <div align={'left'} className={classes.grdCell1}>
                <IconButton
                  aria-label="details"
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
      name: 'month',
      label: 'Month',
      options: {
        display: false,
      },
    },
    {
      name: 'year',
      label: 'Year',
      options: {
        display: false,
      },
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
      name: 'accountName',
      label: 'Account Name',
      options: {
        display: false,
      },
    },
    {
      name: 'qty',
      label: 'Qty',
      type: columnType.quantity,
      addFooter: true,
    },
    {
      name: 'tafFee',
      label: 'TAF Fee',
      type: columnType.amount,
      addFooter: true,
    },
    {
      name: 'qtyLimit',
      label: 'Qty Limit',
      type: columnType.quantity,
      addFooter: true,
      options: {
        display: false,
      },
    },
    {
      name: 'maxQtyCount',
      label: 'Max Qty Count',
      type: columnType.quantity,
      addFooter: true,
    },
    {
      name: 'maxRate',
      label: 'Max Rate',
      type: columnType.percentage,
    },
    {
      name: 'maxFee',
      label: 'Max Fee',
      type: columnType.amount,
      addFooter: true,
    },
    {
      name: 'minQty',
      label: 'Min Qty',
      type: columnType.quantity,
      addFooter: true,
    },
    {
      name: 'minRate',
      label: 'Min Rate',
      type: columnType.percentage,
    },
    {
      name: 'minFee',
      label: 'Min Fee',
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

  const [rowData, setRowData] = React.useState({});
  const [open, setOpen] = React.useState(false);
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = React.useState(false);
  const [showFilter, setShowFilter] = React.useState(true);
  const [searchData, setSearchData] = React.useState(
    QueryParam.get({
      month: '',
      year: '',
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
      const data = await listTafFee(searchData);
      setRows(data.tafFeesList);
      notifyInfo(data.tafFeesList.length + ' search results.');
    } catch (error) {
      console.error(error);
      notifyError(error.message);
    } finally {
      setLoading(false);
    }
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
                <SelectSystemCode
                  name="month"
                  label="Month"
                  type="Month"
                  value={searchData.month}
                  onChange={handleChange}
                ></SelectSystemCode>
              </div>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <TextField
                  fullWidth
                  name="year"
                  label="Year"
                  value={searchData.year}
                  onChange={handleChange}
                  inputProps={{ maxLength: 4 }}
                  InputLabelProps={{ shrink: true }}
                />
              </div>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <SelectCorrespondent
                  freeSolo={true}
                  name="correspondent"
                  label="Correspondent"
                  value={searchData.correspondent}
                  onChange={handleChange}
                />
              </div>
              <div className={classes.grdCell1}>
                <SelectBranch
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
          title={'TAF Fee'}
          data={rows}
          columns={columns}
          options={options}
        />
      </Box>
      {open && (
        <TAFFeeModal
          onClose={handleClose}
          open={open}
          value={rowData}
        ></TAFFeeModal>
      )}
    </div>
  );
}
