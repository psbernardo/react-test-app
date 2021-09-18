import React, { useState, useEffect } from 'react';
import {
  Button,
  Box,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Tooltip,
  IconButton,
} from '@material-ui/core';
import {
  notifyInfo,
  notifyError,
  notifyWarning,
  notifySuccess,
} from 'components/Notification/Notification';
import Table, { columnType } from 'components/Table/Table';
import {
  CompareArrowsRounded as CancelAndCorrectIcon,
  Create as EditIcon,
  AssignmentReturn as ImportIcon,
} from '@material-ui/icons';
import SelectAccountNo from '../../../components/AutoComplete/SelectAccountNo';
import SelectMasterAccountNo from '../../../components/AutoComplete/SelectMasterAccountNo';
import SelectAccountName from '../../../components/AutoComplete/SelectAccountName';
import SelectSymbol from '../../../components/AutoComplete/SelectSymbol';
import SelectCusip from '../../../components/AutoComplete/SelectCusip';
import QueryParam from '../../../services/QueryParamService';
import SearchButton from '../../../components/Button/Search';
import useStyles from '../../../styles';
import {
  getSystemDate,
  getParticipationNo,
  getCorrespondent,
} from '../../../services/ProfileService';
import { listPartial, editPartial } from '../../../services/PartialService';
import PartialModal from './PartialModal';
import PartialEditModal from './PartialEditModal';
import PartialUploadModal from './PartialUploadModal';

export default function PartialTable({ params }) {
  const classes = useStyles();

  const options = {
    selectableRows: 'mulitple',
    customToolbarSelect: (selectedRows, a, b) => {
      return (
        <div
          className={classes.grdRow}
          style={{ margin: 0, padding: 0, marginRight: 20 }}
        >
          <div align={'left'} className={classes.grdCell1}>
            <Tooltip title="Transfer" arrow>
              <div>
                <IconButton
                  id="icnTransfer"
                  aria-label="transfer"
                  onClick={() => {
                    handleTransfer(selectedRows.data);
                  }}
                >
                  <CancelAndCorrectIcon />
                </IconButton>
              </div>
            </Tooltip>
          </div>
        </div>
      );
    },
  };

  useEffect(
    () => {
      async function init() {
        if (searchData.systemDate) return;
        const systemDate = await getSystemDate();
        const partno = await getParticipationNo();
        setParticipantNo(partno);

        setSearchData({ ...searchData, systemDate: systemDate });
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
                  aria-label="edit"
                  onClick={() => handleOpenEdit(rows[dataIndex])}
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
      name: 'accountName',
      label: 'Account Name',
    },
    {
      name: 'masterAccountNo',
      label: 'Master Account No',
    },
    {
      name: 'symbol',
      label: 'Symbol',
    },
    {
      name: 'cusip',
      label: 'Cusip',
    },
    {
      name: 'symbolDescription',
      label: 'Symbol Description',
    },
    {
      name: 'positionQty',
      label: 'Position Qty',
      //type: columnType.quantity,
      //addFooter: true,
    },
    {
      name: 'partialQty',
      label: 'Partial Qty',
      //type: columnType.quantity,
      //addFooter: true,
    },
    {
      name: 'costBasis',
      label: 'Cost Basis',
      type: columnType.amount,
      addFooter: true,
    },
    {
      name: 'partialCostBasis',
      label: 'Partial Cost Basis',
      type: columnType.amount,
      addFooter: true,
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
  const [loading, setLoading] = React.useState(false);
  const [showFilter, setShowFilter] = React.useState(true);
  const [rows, setRows] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [openEdit, setOpenEdit] = React.useState(false);
  const [participantNo, setParticipantNo] = React.useState('');
  const [openImport, setOpenImport] = React.useState(false);
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
      systemDate: '',
    })
  );

  const handleChange = (e, x) => {
    const input = e.currentTarget.name ? e.currentTarget : e.target;

    setSearchData({
      ...searchData,
      [input.name]: input.value,
    });
  };

  const handleOpen = (accountIds, cusips) => {
    setRowData({
      submittingParticipantNo: participantNo,
      originalReceiverNo: participantNo,
      originalDelivererNo: '',
      accountIds: accountIds,
      cusips: cusips,
      systemDate: searchData.systemDate,
    });

    setOpen(true);
  };

  const handleSearch = async (isSearch = true) => {
    try {
      setLoading(true);
      QueryParam.set(searchData);
      const data = await listPartial(searchData);
      setRows(data.partialList);
      if (isSearch) {
        notifyInfo(data.partialList.length + ' search results.');
      }
    } catch (error) {
      notifyError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleClose = async (data) => {
    if (!data) {
      handleSearch(false);
      setOpen(false);
      return;
    }
  };

  const handleCloseEdit = async (data) => {
    if (!data) {
      setOpenEdit(false);
      return;
    }

    if (isNaN(Number(data.partialCostBasis))) {
      notifyError('Partial Cost Basis should be a number.');
      return;
    }
    if (Number(data.partialCostBasis) <= 0) {
      notifyError('Partial Cost Basis should be greater than 0.');
      return;
    }

    if (!data.partialQty) {
      notifyError('Qty is required.');
      return;
    }
    if (isNaN(Number(data.partialQty))) {
      notifyError('Partial Position Quantity should be a number.');
      return;
    }
    if (Number(data.partialQty) <= 0) {
      notifyError('Partial Position Quantity should be greater than 0.');
      return;
    }

    if (Number(data.positionQty) == Number(data.partialQty)) {
      notifyError(
        'Partial Position Quantity should not be equal to Position Quantity.'
      );
      return;
    }

    if (Number(data.partialQty) > Number(data.positionQty)) {
      notifyError(
        'Partial Position Quantity should be less than Position Qty.'
      );
      return;
    }

    try {
      setLoading(true);

      const rtn = await editPartial(data);
      const rowsCopy = [...rows];
      const index = rows.indexOf(rowData);
      rowsCopy[index] = rtn.partial;
      setRows(rowsCopy);
      notifySuccess('Position Qty and Cost Basis has been updated.');
    } catch (error) {
      notifyError(error.message);
    } finally {
      setLoading(false);
      setOpenEdit(false);
    }
  };

  const handleTransfer = (selected) => {
    let idsToTransfer = [];
    let cusipToTransfer = [];

    for (const s of selected) {
      idsToTransfer.push(rows[s.dataIndex].accountId);
      cusipToTransfer.push(rows[s.dataIndex].cusip);
    }

    handleOpen(idsToTransfer, cusipToTransfer);
  };

  const handleOpenEdit = (data) => {
    if (!data) {
      return;
    }

    setRowData(data);
    setOpenEdit(true);
  };

  const handleUploadClose = async () => {
    setOpenImport(false);
  };

  return (
    <div className={classes.root}>
      <Box component="div" mt={5}>
        {showFilter ? (
          <div>
            <div className={classes.grdRow}>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
             
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
                <InputLabel shrink>Broker</InputLabel>
                <Select
                  fullWidth
                  value={searchData.broker}
                  onChange={handleChange}
                  name="broker"
                >
                  <MenuItem value="">
                    <em>Blank</em>
                  </MenuItem>
                  <MenuItem value="broker_dealer">Broker Dealer</MenuItem>
                  <MenuItem value="non_broker_dealer">
                    Non Broker Dealer
                  </MenuItem>
                </Select>
              </div>
            </div>
            <div className={classes.grdRow}>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <InputLabel shrink>Type</InputLabel>
                <Select
                  name="type"
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
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <SelectSymbol
                  freeSolo={true}
                  name="symbol"
                  label="Symbol"
                  value={searchData.symbol}
                  onChange={handleChange}
                  InputLabelProps={{ shrink: true }}
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
                <TextField
                  name="systemDate"
                  fullWidth
                  label="System Date"
                  type="date"
                  value={searchData.systemDate}
                  onChange={handleChange}
                  InputLabelProps={{ shrink: true }}
                />
              </div>
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
          <div className={classes.grdCellNone} style={{ marginRight: 10 }}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              startIcon={<CancelAndCorrectIcon />}
              onClick={() => {
                try {
                  document.getElementById('icnTransfer').click();
                } catch (error) {
                  notifyWarning('No selected data to transfer.');
                }
              }}
            >
              Transfer
            </Button>
          </div>
          <div className={classes.grdCellNone}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              startIcon={<ImportIcon />}
              onClick={() => {
                setOpenImport(true);
              }}
            >
              Import
            </Button>
          </div>
        </div>
      </Box>
      <Box component="div" mt={2}>
        <Table
          title={'ACATS Partial'}
          data={rows}
          columns={columns}
          options={options}
        />
      </Box>
      {open && (
        <PartialModal
          onClose={handleClose}
          open={open}
          value={rowData}
        ></PartialModal>
      )}
      {openEdit && (
        <PartialEditModal
          onClose={handleCloseEdit}
          open={openEdit}
          value={rowData}
        ></PartialEditModal>
      )}

      {openImport && (
        <PartialUploadModal
          onClose={handleUploadClose}
          open={openImport}
        ></PartialUploadModal>
      )}
    </div>
  );
}
