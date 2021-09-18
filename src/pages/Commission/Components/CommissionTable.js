import React, { useState, useEffect } from 'react';
import CommissionModal from './CommissionModal';
import {
  TextField,
  Button,
  Box,
  IconButton,
  Select,
  MenuItem,
  InputLabel,
} from '@material-ui/core';
import { useConfirm } from 'material-ui-confirm';
import {
  notifySuccess,
  notifyInfo,
  notifyError,
} from 'components/Notification/Notification';
import {
  Add as AddIcon,
  CheckCircle as CheckCircleIcon,
  Create as EditIcon,
  Delete as DeleteIcon,
} from '@material-ui/icons';
import SearchButton from '../../../components/Button/Search';
import QueryParam from '../../../services/QueryParamService';
import { formatQty, formatDollar } from 'lib/fmt';
import useStyles from '../../../styles';
import Table, { columnType } from 'components/Table/Table';
import SelectBranch from '../../../components/AutoComplete/SelectBranch';
import SelectMasterAccountNo from '../../../components/AutoComplete/SelectMasterAccountNo';
import SelectRep from '../../../components/AutoComplete/SelectRep';
import SelectCorrespondent from '../../../components/AutoComplete/SelectCorrespondent';
import SelectSystemCode from '../../../components/Dropdown/SelectSystemCode';
import { getSystemDate } from '../../../services/ProfileService';

import {
  createCommission,
  updateCommission,
  deleteCommission,
  listCommission,
} from '../../../services/CommissionService';

export default function CommissionTable() {
  const classes = useStyles();
  const confirm = useConfirm();
  const options = {
    onRowsDelete: (selectedItems) => {
      handleDelete(selectedItems.data);
      return false;
    },
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
              <div className={classes.grdCellNone}>
                <IconButton
                  aria-label="delete"
                  //disabled={!isDeleteEnabled(dataIndex)} //#JS: if delete function relies on status value, show this else remove
                  disabled={rows[dataIndex].status === 'Inactive'}
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
                  disabled={rows[dataIndex].status === 'Inactive'}
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
      type: columnType.text,
    },
    {
      name: 'rep',
      label: 'Rep',
    },
    {
      name: 'status',
      label: 'Status',
    },
    {
      name: 'chargeBy',
      label: 'Charge By',
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
        customBodyRenderLite: (dataIndex) => {
          return (
            <div align="center">
              {rows[dataIndex].buy ? <CheckCircleIcon /> : null}
            </div>
          );
        },
      },
    },
    {
      name: 'buyAmt',
      label: 'Buy Amt',
      type: columnType.amount,
      addFooter: true,
    },
    {
      name: 'sell',
      label: 'Sell',
      options: {
        customBodyRenderLite: (dataIndex) => {
          return (
            <div align="center">
              {rows[dataIndex].sell ? <CheckCircleIcon /> : null}
            </div>
          );
        },
      },
    },
    {
      name: 'sellAmt',
      label: 'Sell Amt',
      type: columnType.amount,
      addFooter: true,
    },
    {
      name: 'shortSell',
      label: 'Short Sell',
      options: {
        customBodyRenderLite: (dataIndex) => {
          return (
            <div align="center">
              {rows[dataIndex].shortSell ? <CheckCircleIcon /> : null}
            </div>
          );
        },
      },
    },
    {
      name: 'shortSellAmt',
      label: 'Short Sell Amt',
      type: columnType.amount,
      addFooter: true,
    },
    {
      name: 'maxCommission',
      label: 'Max Commission',
      type: columnType.amount,
      addFooter: true,
    },
    {
      name: 'minCommission',
      label: 'Min Commission',
      type: columnType.amount,
      addFooter: true,
    },

    {
      name: 'note',
      label: 'Note',
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

  const [pagination, setPagination] = useState({});
  const [footerData, setFooterData] = useState({});
  const [rowData, setRowData] = React.useState({});
  const [open, setOpen] = React.useState(false);
  const [saving, setSaving] = React.useState(false);
  const [openDetails, setOpenDetails] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [showFilter, setShowFilter] = React.useState(true);
  const [rows, setRows] = useState([]);
  const [sysDate, setSysDate] = React.useState(null);
  const [searchData, setSearchData] = React.useState(
    QueryParam.get({
      branch: '',
      buy: '',
      buyAmt: '',
      fromDate: '',
      masterAccountNo: '',
      note: '',
      rep: '',
      sell: '',
      sellAmt: '',
      shortSell: '',
      status: 'Active',
      toDate: '',
      chargeBy: '',
      commissionId: '',
      correspondent: '',
      maxCommission: '',
      minCommission: '',
      shortSellAmt: '',
    })
  );

  const handleChange = (e, x) => {
    const input = e.currentTarget.name ? e.currentTarget : e.target;

    setSearchData({
      ...searchData,
      [input.name]: input.value,
    });
  };

  const handleSearch = async (paginationChange) => {
    try {
      setLoading(true);
      QueryParam.set(searchData);

      let paginationCopy = {
        ...pagination,
        reload: false,
        pageNo: paginationChange === true ? pagination.pageNo : 0,
        rowsPerPage: pagination.rowsPerPage || 50,
      };

      const data = await listCommission(searchData, paginationCopy);
      if (paginationChange !== true) {
        notifyInfo(data.totalRows + ' search results.');
      }

      paginationCopy.count = data.totalRows;
      setPagination(paginationCopy);
      setRows(data.commissionsList);
    } catch (error) {
      notifyError(error.message);
    } finally {
      setLoading(false);
    }
  };
  const handleOpen = (data) => {
    if (!data) {
      data = {
        branch: '',
        buy: '',
        buyAmt: '',
        fromDate: sysDate,
        masterAccountNo: '',
        note: '',
        rep: '',
        sell: '',
        sellAmt: '',
        shortSell: '',
        status: 'Active',
        toDate: '',
        chargeBy: 'Side',
        commissionId: '',
        correspondent: '',
        maxCommission: '',
        minCommission: '',
        shortSellAmt: '',
      };
    }

    setRowData(data);
    setOpen(true);
  };

  const handleClose = async (data, isValid, isEdit) => {
    if (!data) {
      setOpen(false);
      return;
    }

    try {
      if (!isValid) {
        return;
      }

      if (isEdit) {
        const resp = await updateCommission(data);
        const rowsCopy = [...rows];
        const index = rows.indexOf(rowData);
        rowsCopy[index] = resp.commission;
        setRows(rowsCopy);
        notifySuccess(' Commission has been updated.');
      } else {
        const resp = await createCommission(data);
        setRows([resp.commission, ...rows]);
        notifySuccess('Commission has been added.');
      }
      setSaving(false);
      setOpen(false);
    } catch (error) {
      console.error(error);
      setSaving(false);
      notifyError(error.message);
    }
  };

  const handleDelete = (rowsToDelete) => {
    let messageKey = '';
    if (rowsToDelete.length === 1) {
      messageKey = 'Commission';
    } else {
      messageKey = rowsToDelete.length + ' items';
    }
    // console.log(rows)
    let idsToDelete = [];
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
          await deleteCommission(rows[index].commissionId);
          idsToDelete.push(rows[index].commissionId);
        }
      } catch (error) {
        notifyError(error.message);
      } finally {
        const filtered = rowsCopy.filter(
          (r) => !idsToDelete.includes(r.commissionId)
        );
        setRows(filtered);
        notifySuccess(messageKey + ' has been deleted');
      }
    });
  };

  useEffect(
    () => {
      async function init() {
        // if (searchData.tradeDate) return;

        const systemDate = await getSystemDate();
        setSysDate(systemDate);
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
                <SelectCorrespondent
                  style={{ width: 288 }}
                  name="correspondent"
                  label="Correspondent"
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
                <SelectMasterAccountNo
                  name="masterAccountNo"
                  label="Master Account No"
                  value={searchData.masterAccountNo}
                  // correspondent={searchData.correspondent}
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
                <InputLabel shrink>Charge By</InputLabel>
                <Select
                  name="chargeBy"
                  label="Charge By"
                  value={searchData.chargeBy}
                  onChange={handleChange}
                  fullWidth
                >
                  <MenuItem value="">
                    <em></em>
                  </MenuItem>
                  <MenuItem value="Share">
                    <em>Share</em>
                  </MenuItem>
                  <MenuItem value="Amount">
                    <em>Amount</em>
                  </MenuItem>
                  <MenuItem value="Side">
                    <em>Side</em>
                  </MenuItem>
                </Select>
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
                handleOpen('', true);
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
          title={'Commission'}
          data={rows}
          columns={columns}
          options={options}
        />
      </Box>
      {open && (
        <CommissionModal
          onClose={handleClose}
          open={open}
          value={rowData}
          saving={saving}
        ></CommissionModal>
      )}
    </div>
  );
}
