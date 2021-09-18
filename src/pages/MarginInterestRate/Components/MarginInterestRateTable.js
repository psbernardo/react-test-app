import React, { useState, useEffect } from 'react';
import {
  notifySuccess,
  notifyInfo,
  notifyError,
} from 'components/Notification/Notification';
import { Button, Box, TextField, IconButton } from '@material-ui/core';
import { useConfirm } from 'material-ui-confirm';
import Table, { columnType } from 'components/Table/Table';
import {
  Add as AddIcon,
  Create as EditIcon,
  Delete as DeleteIcon,
} from '@material-ui/icons';
import useStyles from '../../../styles';
import QueryParam from '../../../services/QueryParamService';
import SelectCorrespondent from '../../../components/AutoComplete/SelectCorrespondent';
import SelectAccountName from '../../../components/AutoComplete/SelectAccountName';
import SelectSystemCode from '../../../components/Dropdown/SelectSystemCode';
import SearchButton from '../../../components/Button/Search';

import {
  createInterestRate,
  updateInterestRate,
  deleteInterestRate,
  listInterestRate,
} from '../../../services/MarginInterestRateService';
import { listSystemNumber } from '../../../services/SystemNumberService';

import { getSystemDate } from '../../../services/ProfileService';

import InterestRateModal from './MarginInterestRateModal';

export default function MarginInterestRateTable({ params }) {
  const classes = useStyles();
  const confirm = useConfirm();

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
              <div className={classes.grdCell1}>
                <IconButton
                  aria-label="delete"
                  disabled={!isDeleteEnabled(dataIndex)}
                  onClick={() => {
                    handleDelete([
                      {
                        dataIndex: dataIndex,
                      },
                    ]);
                  }}
                >
                  <DeleteIcon />
                </IconButton>
              </div>
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
      name: 'branch',
      label: 'Branch',
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
      name: 'federalRate',
      label: 'Federal Rate',
      type: columnType.percentage,
    },
    {
      name: 'creditRate',
      label: 'Credit Rate',
      type: columnType.percentage,
    },
    {
      name: 'debitRate',
      label: 'Debit Rate',
      type: columnType.percentage,
    },
    {
      name: 'note',
      label: 'Note',
      options: {
        display: false,
      },
    },
    {
      name: 'status',
      label: 'Status',
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

  const [rowData, setRowData] = React.useState({});
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [showFilter, setShowFilter] = React.useState(true);
  const [rows, setRows] = useState([]);
  const [federalRate, setFederalRate] = React.useState(0);
  const [creditRate, setCreditRate] = React.useState(0);
  const [debitRate, setDebitRate] = React.useState(0);
  const [sysDate, setSysDate] = React.useState(null);
  const [searchData, setSearchData] = React.useState(
    QueryParam.get({
      correspondent: '',
      accountName: '',
      branch: '',
      rep: '',
      status: 'Active',
    })
  );

  // const [rowsSelected, setRowsSelected] = React.useState([]);
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
      const data = await listInterestRate(searchData);
      setRows(data.interestRatesList);

      notifyInfo(data.interestRatesList.length + ' search results.');
    } catch (error) {
      console.error(error);
      notifyError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = (rowsToDelete) => {
    let messageKey = '';
    if (rowsToDelete.length === 1) {
      // messageKey = rows[rowsToDelete[0].dataIndex].accountNo;
      messageKey = 'Margin Interest Rate ';
    } else {
      messageKey = rowsToDelete.length + ' items';
    }

    confirm({
      description:
        "You are about to delete '" +
        messageKey +
        "'. Please confirm your action.",
      confirmationText: 'Yes, Delete',
    }).then(async () => {
      const rowsCopy = [...rows];
      try {
        for (const r of rowsToDelete) {
          const index = r.dataIndex;
          const res = await deleteInterestRate(rows[index].marginRateId);
          rowsCopy[index] = res.interestRate;
        }

        notifySuccess(messageKey + ' Margin interest rate has been deleted');
        const data = await listInterestRate(searchData);
        setRows(data.interestRatesList);
      } catch (error) {
        console.error(error);
        notifyError(error.message);
      }
    });
  };

  const handleOpen = (data) => {
    if (!data) {
      //ADD default values
      data = {
        correspondent: '',
        masterAccountNo: '',
        status: 'Active',
        fromDate: sysDate,
        toDate: sysDate,
        creditRate: creditRate,
        debitRate: debitRate,
        federalRate: federalRate,
        branch: '',
        rep: '',
        note: '',
      };
    }

    setRowData(data);
    setOpen(true);
  };

  const handleClose = async (data, isEdit) => {
    if (!data || isEdit == 'backdropClick') {
      setOpen(false);
      return;
    }

    try {
      let valid = true;
      if (
        !(data.correspondent || '').replace(/ /g, '') &&
        !data.branch &&
        !data.masterAccountNo &&
        !data.rep
      ) {
        notifyError(
          'Correspondent, Branch, Master Account No or Rep is required.'
        );
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

      if (!data.creditRate) {
        notifyError('Credit Rate is required.');
        valid = false;
      }

      if (!data.debitRate) {
        notifyError('Debit Rate is required.');
        valid = false;
      }

      if (!valid) {
        return;
      }

      if (isEdit) {
        //EDIT
        const resp = await updateInterestRate(data);
        const rowsCopy = [...rows];
        const index = rows.indexOf(rowData);
        rowsCopy[index] = resp.interestRate;
        setRows(rowsCopy);
        notifySuccess('Margin interest rate has been updated.');
      } else {
        //ADD
        const resp = await createInterestRate(data);
        setRows([resp.interestRate, ...rows]);
        notifySuccess('New margin interest rate has been added.');
      }

      setOpen(false);
    } catch (error) {
      console.error(error);
      notifyError(error.message);
    }
  };

  useEffect(
    () => {
      async function init() {
        // if (searchData.tradeDate) return;

        const systemDate = await getSystemDate();
        setSysDate(systemDate);
        const searchDataCopy = { ...searchData };

        if (!searchData.fromDate) {
          searchDataCopy.fromDate = systemDate;
        }

        if (!searchData.toDate) {
          searchDataCopy.toDate = systemDate;
        }
        try {
          const param = {
            type: 'Margin Interest Rate',
          };
          const data = await listSystemNumber(param);
          for (const systemNumbers of data.systemNumbersList) {
            if (systemNumbers.subType === 'Fed Rate') {
              setFederalRate(systemNumbers.rate);
            } else if (systemNumbers.subType === 'Credit Rate') {
              setCreditRate(systemNumbers.rate);
            } else if (systemNumbers.subType === 'Debit Rate') {
              setDebitRate(systemNumbers.rate);
            }
          }
        } catch (error) {
          console.error(error);
          notifyError(error.message);
        }

        setSearchData(searchDataCopy);
      }

      init();
    },
    // eslint-disable-next-line
    []
  );

  const isDeleteEnabled = (dataIndex) => {
    return rows[dataIndex].status;
  };

  const options = {
    // rowsSelected: rowsSelected,
    selectableRows: 'multiple',
    isRowSelectable: (dataIndex) => isDeleteEnabled(dataIndex),
    onRowsDelete: (selectedItems) => {
      handleDelete(selectedItems.data);
      return false;
    },
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
              {/* <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <SelectAccountNo
                  required={false}
                  freeSolo={true}
                  name="accountNo"
                  label="Account No"
                  value={searchData.accountNo}
                  correspondent={searchData.correspondent}
                  onChange={handleChange}
                  type="client" //client or gl
                ></SelectAccountNo>
              </div> */}
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <TextField
                  fullWidth
                  name="rep"
                  label="Rep"
                  value={searchData.rep}
                  onChange={handleChange}
                  className={classes.textField}
                  inputProps={{ maxLength: 150 }}
                  InputLabelProps={{ shrink: true }}
                />
              </div>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <TextField
                  fullWidth
                  name="branch"
                  label="Branch"
                  value={searchData.branch}
                  onChange={handleChange}
                  className={classes.textField}
                  inputProps={{ maxLength: 50 }}
                  InputLabelProps={{ shrink: true }}
                />
              </div>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <SelectAccountName
                  freeSolo={true}
                  required={false}
                  name="accountName"
                  label="Master Account Name"
                  value={searchData.accountName}
                  onChange={handleChange}
                  type="client" //client or gl
                ></SelectAccountName>
              </div>

              <div className={classes.grdCell1}>
                <SelectSystemCode
                  name="status"
                  label="Status"
                  type="Status"
                  subType="Client Setup"
                  value={searchData.status}
                  onChange={handleChange}
                ></SelectSystemCode>
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
          title={'Margin Interest Rate'}
          data={rows}
          columns={columns}
          options={options}
        />
      </Box>
      {open && (
        <InterestRateModal
          onClose={handleClose}
          open={open}
          value={rowData}
        ></InterestRateModal>
      )}
    </div>
  );
}
