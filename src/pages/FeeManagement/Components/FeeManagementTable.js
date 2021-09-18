import React, { useState } from 'react';
import FeeManagementDetailsModal from './FeeManagementDetailsModal';
import {
  Button,
  Box,
  Checkbox,
  IconButton,
  InputLabel,
  FormControlLabel,
} from '@material-ui/core';
import {
  notifySuccess,
  notifyInfo,
  notifyError,
} from 'components/Notification/Notification';
import {
  Add as AddIcon,
  Create as EditIcon,
  CheckCircle as CheckCircleIcon,
} from '@material-ui/icons';
import Table, { columnType } from 'components/Table/Table';
import SelectCorrespondent from '../../../components/AutoComplete/SelectCorrespondent';
import SelectAccountNo from '../../../components/AutoComplete/SelectAccountNo';
import SelectMasterAccountNo from '../../../components/AutoComplete/SelectMasterAccountNo';
import SearchButton from '../../../components/Button/Search';
import QueryParam from '../../../services/QueryParamService';
import {
  createFeeManagement,
  listFeeManagement,
  updateFeeManagement,
} from '../../../services/FeeManagementService';
import useStyles from '../../../styles';

export default function MarginRateTable() {
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
      name: 'correspondent',
      label: 'Correspondent',
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
      name: 'fromDate',
      label: 'From Date',
      type: columnType.date,
    },
    {
      name: 'toDate',
      label: 'To Date',
      type: columnType.date,
    },
    {
      name: 'buy',
      label: 'Buy',
      options: {
        //format date to string
        customBodyRenderLite: (dataIndex) => {
          return rows[dataIndex].buy ? <CheckCircleIcon /> : null;
        },
      },
    },
    {
      name: 'sell',
      label: 'Sell',
      options: {
        //format date to string
        customBodyRenderLite: (dataIndex) => {
          return rows[dataIndex].sell ? <CheckCircleIcon /> : null;
        },
      },
    },
    {
      name: 'shortSell',
      label: 'Short Sell',
      options: {
        //format date to string
        customBodyRenderLite: (dataIndex) => {
          return rows[dataIndex].shortSell ? <CheckCircleIcon /> : null;
        },
      },
    },
    {
      name: 'calcType',
      label: 'Calc Type',
    },
    {
      name: 'feeRate',
      label: 'Fee Rate',
    },
    {
      name: 'status',
      label: 'Status',
      options: {
        //format date to string
        customBodyRenderLite: (dataIndex) => {
          return rows[dataIndex].status ? <CheckCircleIcon /> : null;
        },
      },
    },
    {
      name: 'contraAccount',
      label: 'Contra Account No',
    },
    {
      name: 'feeType',
      label: 'Fee Type',
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
  // const sortedColumns = columns.slice(0);
  // sortedColumns.sort(function(a, b) {
  //   return a.order - b.order;
  // });
  const [rowData, setRowData] = React.useState({});
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [showFilter, setShowFilter] = React.useState(true);
  const [rows, setRows] = useState([]);
  const [searchData, setSearchData] = React.useState(
    QueryParam.get({
      correspondent: '',
      accountNo: '',
      masterAccountNo: '',
      contraAccount: '',
      status: false,
    })
  );

  const handleChange = (e, checkboxValue) => {
    const input = e.currentTarget.name ? e.currentTarget : e.target;

    setSearchData({
      ...searchData,
      [input.name]: checkboxValue !== undefined ? checkboxValue : input.value,
    });
  };

  const handleSearch = async () => {
    try {
      setLoading(true);
      QueryParam.set(searchData);
      const data = await listFeeManagement(searchData);
      setRows(data.feeManagementsList);
      notifyInfo(data.feeManagementsList.length + ' search results.');
    } catch (error) {
      console.error(error);
      notifyError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleOpen = (data) => {
    if (!data) {
      //ADD default values
      data = {
        correspondent: '',
        accountNo: '',
        masterAccountNo: '',
        fromDate: '',
        toDate: '',
        calcType: '',
        feeType: '',
        feeRate: '',
        contraAccountNo: '',
        buy: false,
        sell: false,
        shortSell: false,
        active: false,
      };
    }

    setRowData(data);
    setOpen(true);
  };

  const handleClose = async (data, isEdit) => {
    if (!data) {
      setOpen(false);
      return;
    }

    let valid = true;
    if (!data.correspondent) {
      notifyError('Correspondent is required.');
      valid = false;
    }
    if (!data.accountNo) {
      notifyError('Account Number is required.');
      valid = false;
    }
    if (!data.masterAccountNo) {
      notifyError('Master Account number is required.');
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
    if (!data.calcType) {
      notifyError('Calc Type is required.');
      valid = false;
    }
    if (!data.feeRate) {
      notifyError('Fee Rate is required.');
      valid = false;
    }
    if (!data.contraAccount) {
      notifyError('Contra Account number is required.');
      valid = false;
    }
    if (!valid) {
      return;
    }

    try {
      if (isEdit) {
        //EDIT
        const resp = await updateFeeManagement(data);
        const rowsCopy = [...rows];
        const index = rows.indexOf(rowData);
        rowsCopy[index] = resp.feeManagement;
        setRows(rowsCopy);
        notifySuccess('Fee Management has been updated.');
      } else {
        //ADD
        const resp = await createFeeManagement(data);
        setRows([resp.feeManagement, ...rows]);
        notifySuccess('New Fee Management has been added.');
      }

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
                  required={false}
                  name="correspondent"
                  value={searchData.correspondent}
                  onChange={handleChange}
                ></SelectCorrespondent>
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
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <SelectMasterAccountNo
                  required={false}
                  name="masterAccountNo"
                  label="Master Account No"
                  value={searchData.masterAccountNo}
                  // correspondent={searchData.correspondent}
                  onChange={handleChange}
                  type="" //client or gl
                ></SelectMasterAccountNo>
              </div>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <SelectAccountNo
                  required={false}
                  freeSolo={true}
                  name="contraAccount"
                  label="Contra Account No"
                  value={searchData.contraAccount}
                  correspondent={searchData.correspondent}
                  onChange={handleChange}
                  type="" //client or gl
                ></SelectAccountNo>
              </div>
              <div className={classes.grdCell1}>
                <InputLabel shrink></InputLabel>
                <FormControlLabel
                  control={<Checkbox color="primary" />}
                  name="status"
                  label="Status"
                  checked={searchData.status}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        ) : null}
        <div className={classes.actionContainer}>
          <div className={classes.grdCellNone} style={{ marginRight: 10 }}>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              startIcon={<AddIcon />}
              onClick={() => {
                handleOpen();
              }}
            >
              Add New
            </Button>
          </div>
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
          title={'FEE MANAGEMENTS'}
          data={rows}
          columns={columns}
          options={options}
        />
      </Box>
      {open && (
        <FeeManagementDetailsModal
          onClose={handleClose}
          open={open}
          value={rowData}
        ></FeeManagementDetailsModal>
      )}
    </div>
  );
}
