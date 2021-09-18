import React, { useState } from 'react';
import LargeTraderDetailsModal from './LargeTraderDetailsModal';
import {
  notifyError,
  notifyInfo,
  notifySuccess,
} from 'components/Notification/Notification';
import {
  listLargeTraderID,
  updateLargeTraderID,
} from '../../../services/LargeTraderIDService';
import {
  IconButton,
  Box,
} from '@material-ui/core';
import { Create as EditIcon } from '@material-ui/icons';
import useStyles from '../../../styles';
import SelectCorrespondent from '../../../components/AutoComplete/SelectCorrespondent';
import SelectMasterAccountNo from '../../../components/AutoComplete/SelectMasterAccountNo';
import SelectAccountNo from '../../../components/AutoComplete/SelectAccountNo';
import SelectSystemCode from '../../../components/Dropdown/SelectSystemCode';
import SelectBranch from '../../../components/AutoComplete/SelectBranch';
import SelectRep from '../../../components/AutoComplete/SelectRep';
import SearchButton from '../../../components/Button/Search';
import QueryParam from '../../../services/QueryParamService';
import Table, { columnType } from 'components/Table/Table';

export default function LargeTraderIDTable({ params }) {
  const classes = useStyles();

  const options = {
    selectableRows: 'none',
  };

  const columns = [
    {
      name: '',
      options: {
        draggable: false,
        resizable: false,
        print: false,
        searchable: false,
        filter: false,
        sort: false,
        empty: true,
        viewColumns: false,
        download: false,
        customBodyRenderLite: (dataIndex) => {
          return (
            <div
              align={'left'}
              className={classes.grdRow}
              style={{ margin: 0, padding: 0 }}
            >
              <div align={'left'} className={classes.grdCell1}>
                <IconButton
                  aria-label="edit"
                  onClick={() => handleOpen(rows[dataIndex])}
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
      name: 'accountId',
      label: 'Account ID',
      options: {
        display: false,
      }
    },
    {
      name: 'primaryAccountId',
      label: 'Primary Account ID',
      options: {
        display: false,
      }
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
      name: 'commonId',
      label: 'Common ID',
    },
    {
      name: 'broker',
      label: 'Broker',
    },
    {
      name: 'status',
      label: 'Status',
    },
    {
      name: 'createdAt',
      label: 'Created At',
      type: columnType.dateTime,
    },
    {
      name: 'fromDate',
      label: 'From Date',
      type: columnType.date,
    },
    {
      name: 'toDate',
      label: 'To Date',
      type: columnType.date,
      options: {
        display: false,
      }
    },
    {
      name: 'largeTraderId',
      label: 'Large Trader Id',
    },
    {
      name: 'optionalSuffix',
      label: 'Optional Suffix',
      options: {
        display: false,
      }
    },
    {
      name: 'qualifier',
      label: 'Qualifier',
      options: {
        display: false,
      }
    },
    {
      name: 'modifiedAt',
      label: 'Modified At',
      type: columnType.dateTime,
      options: {
        display: false,
      }
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
      correspondent: '',
      branch: '',
      accountNo: '',
      masterAccountNo: '',
      rep: '',
      broker: '',
      status: '',  
    })
  );

  const handleChange = (e) => {
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
      const data = await listLargeTraderID(searchData);
      setRows(data.largeTraderIdList);
      notifyInfo(data.largeTraderIdList.length + ' search results.');
    } catch (error) {
      notifyError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleOpen = (data) => {
    if (!data) {
      //ADD default values
      data = {
        largeTraderId: '',
        optionalSuffix: '',
        qualifier: '',
        primaryAccount: false,
      };
    }

    setRowData(data);
    setOpen(true);
  };

  const handleClose = async (data) => {
    if (!data) {
      setOpen(false);
      return;
    }

    try {
      let valid = true;

      if (!data.largeTraderId) {
        notifyError('Large Trader ID is required.');
        valid = false;
      }
      if (!data.fromDate) {
        notifyError('From Date is required.');
        valid = false;
      }
      if (!data.toDate) {
        notifyError('To Date is required.');
        valid = false;
      }
      if (!data.optionalSuffix) {
        notifyError('Optional Suffix is required.');
        valid = false;
      }

      if (!data.qualifier) {
        notifyError('Qualifier is required.');
        valid = false;
      }

      if (!valid) {
        return;
      }

      //EDIT
      const resp = await updateLargeTraderID(data);
      const rowsCopy = [...rows];
      const index = rows.indexOf(rowData);
      rowsCopy[index] = resp;
      setRows(rowsCopy);
      notifySuccess('Large Trader ID has been updated.');
      setOpen(false);
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
                <SelectCorrespondent
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
              <div className={classes.grdCell1}>
                <SelectMasterAccountNo
                  freeSolo={true}
                  name="masterAccountNo"
                  label="Master Account No"
                  value={searchData.masterAccountNo}
                  onChange={handleChange}
                ></SelectMasterAccountNo>
              </div>
            </div>
            <div className={classes.grdRow}>
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
                  name="status"
                  label="Status"
                  type="Status"
                  subType="AI"
                  value={searchData.status}
                  onChange={handleChange}
                ></SelectSystemCode>
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
          title={'Large Trader ID'}
          data={rows}
          columns={columns}
          options={options}
        />
      </Box>
      {open && (
        <LargeTraderDetailsModal
          onClose={handleClose}
          open={open}
          value={rowData}
        ></LargeTraderDetailsModal>
      )}
    </div>
  );
}
