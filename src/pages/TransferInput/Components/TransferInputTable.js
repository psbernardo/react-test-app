import React, { useState, useEffect } from 'react';
import TransferInputModal from './TransferInputModal';
import {
  notifyInfo,
  notifyError,
  notifyWarning,
} from 'components/Notification/Notification';

import { listClient } from '../../../services/ClientAccountService';

import {
  Box,
  InputLabel,
  Select,
  MenuItem,
  Tooltip,
  IconButton,
  Button,
} from '@material-ui/core';
import { CompareArrowsRounded as CancelAndCorrectIcon } from '@material-ui/icons';
import SelectCorrespondent from '../../../components/AutoComplete/SelectCorrespondent';
import SelectAccountNo from '../../../components/AutoComplete/SelectAccountNo';
import SelectMasterAccountNo from '../../../components/AutoComplete/SelectMasterAccountNo';
import SelectAccountName from '../../../components/AutoComplete/SelectAccountName';
import Table, { columnType } from 'components/Table/Table';
import useStyles from '../../../styles';
import QueryParam from '../../../services/QueryParamService';
import {
  getParticipationNo,
  getCorrespondent,
} from '../../../services/ProfileService';
import SearchButton from '../../../components/Button/Search';

export default function TransferInputTable({ params }) {
  const classes = useStyles();

  const columns = [
    {
      name: '',
      options: {
        filter: false,
        viewColumns: false,
        customBodyRenderLite: (dataIndex) => {
          return (
            <div
              align={'left'}
              className={classes.grdRow}
              style={{ margin: 0, padding: 0 }}
            ></div>
          );
        },
      },
    },
    {
      name: 'correspondent',
      label: 'Correspondent',
    },
    {
      name: 'accountName',
      label: 'Account Name',
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
      name: 'status',
      label: 'Status',
      options: {
        display: false,
      },
    },
    {
      name: 'activatedAt',
      label: 'Activated At',
      type: columnType.dateTime,
    },
    {
      name: 'disabledAt',
      label: 'Disabled At',
      type: columnType.dateTime,
    },
    {
      name: 'broker',
      label: 'Broker',
    },
    {
      name: 'Capacity',
      label: 'Capacity',
    },
    {
      name: 'inverstmentObjectiveDate',
      label: 'Inverstment Objective Date',
      type: columnType.date,
      options: {
        display: false,
      },
    },
    {
      name: 'w8w9ReceivedDate',
      label: 'W8W9 Received Date',
      type: columnType.date,
      options: {
        display: false,
      },
    },
    {
      name: 'privacyContent',
      label: 'Privacy Content',
      options: {
        display: false,
      },
    },
    {
      name: 'dayTrader',
      label: 'Day Trader',
    },
    {
      name: 'Multiplier',
      label: 'Multiplier',
      options: {
        display: false,
      },
    },
    {
      name: 'inverstmentObjectiveCode',
      label: 'Inverstment Objective Code',
      options: {
        display: false,
      },
    },
    {
      name: 'legalEntry',
      label: 'Legal Entry',
      options: {
        display: false,
      },
    },
    {
      name: 'taxCountry',
      label: 'Tax Country',
      options: {
        display: false,
      },
    },
    {
      name: 'w8w9',
      label: 'W8W9',
      options: {
        display: false,
      },
    },
    {
      name: 'tefra',
      label: 'TEFRA',
      options: {
        display: false,
      },
    },
    {
      name: 'createdBy',
      label: 'Created By',
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
  const [participantNo, setParticipantNo] = React.useState('');
  const [correspondent, setCorrespondent] = React.useState('');
  const [searchData, setSearchData] = React.useState(
    QueryParam.get({
      correspondent: '',
      accountNo: '',
      masterAccountNo: '',
      accountName: '',
      broker: '',
      status: '',
    })
  );

  useEffect(() => {
    (async () => {
      const partno = await getParticipationNo();
      const cor = await getCorrespondent();
      setParticipantNo(partno);
      setCorrespondent(cor);
    })();
  }, []);

  const handleTransfer = (selected) => {
    let idsToTransfer = [];

    for (const s of selected) {
      idsToTransfer.push(rows[s.dataIndex].accountId);
    }

    handleOpen(idsToTransfer);
  };

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
      const data = await listClient(searchData);
      setRows(data.clientsList);
      notifyInfo(data.clientsList.length + ' search results.');
    } catch (error) {
      console.error(error);
      notifyError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleOpen = (accountIds) => {
    setRowData({
      submittingParticipantNo: participantNo,
      originalReceiverNo: participantNo,
      receiverCorrespondent: correspondent,
      originalDelivererNo: '',
      delivererAccountNo: '',
      accountIds: accountIds,
    });

    setOpen(true);
  };

  const handleClose = async (data) => {
    if (!data) {
      setOpen(false);
      return;
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
            </div>
            <div className={classes.grdRow}>
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
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <InputLabel shrink>Status</InputLabel>
                <Select
                  fullWidth
                  value={searchData.status}
                  onChange={handleChange}
                  name="status"
                >
                  <MenuItem value="">
                    <em>Blank</em>
                  </MenuItem>
                  <MenuItem value="pending">Pending</MenuItem>
                  <MenuItem value="active">Active</MenuItem>
                  <MenuItem value="disabled">Disabled</MenuItem>
                </Select>
              </div>
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
        </div>
      </Box>
      <Box component="div" mt={2}>
        <Table
          title={'Transfer Input'}
          data={rows}
          columns={columns}
          options={options}
        />
      </Box>
      {open && (
        <TransferInputModal
          onClose={handleClose}
          open={open}
          value={rowData}
        ></TransferInputModal>
      )}
    </div>
  );
}
