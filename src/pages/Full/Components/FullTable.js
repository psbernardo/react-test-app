import React, { useState } from 'react';
import { Button, Box, InputLabel, MenuItem, Select } from '@material-ui/core';
import { notifyInfo, notifyError } from 'components/Notification/Notification';
import Table, { columnType } from 'components/Table/Table';
import { CompareArrowsRounded as CancelAndCorrectIcon } from '@material-ui/icons';
import SelectAccountNo from '../../../components/AutoComplete/SelectAccountNo';
import SelectMasterAccountNo from '../../../components/AutoComplete/SelectMasterAccountNo';
import SelectAccountName from '../../../components/AutoComplete/SelectAccountName';
import QueryParam from '../../../services/QueryParamService';
import SearchButton from '../../../components/Button/Search';
import useStyles from '../../../styles';
import SelectCorrespondent from 'components/AutoComplete/SelectCorrespondent';
import { listAcatsFull } from '../../../services/AcatsFullService';

export default function FullTable({ params }) {
  const classes = useStyles();

  const options = {};

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
      options: {
        display: false,
      },
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
      name: 'capacity',
      label: 'Capacity',
    },
    {
      name: 'investmentObjectiveDate',
      label: 'Investment Objective Date',
      options: {
        display: false,
      },
      type: columnType.date,
    },
    {
      name: 'w8w9ReceivedDate',
      label: 'W8W9 Received Date',
      options: {
        display: false,
      },
      type: columnType.date,
    },
    {
      name: 'privacyContent',
      label: 'Privacy Content',
      options: {
        display: false,
        customBodyRenderLite: (dataIndex) => {
          return rows[dataIndex].privacyContent ? '1' : '0';
        },
      },
    },
    {
      name: 'dayTrader',
      label: 'Day Trader',
      options: {
        customBodyRenderLite: (dataIndex) => {
          return rows[dataIndex].dayTrader ? '1' : '0';
        },
      },
    },
    {
      name: 'multiplier',
      label: 'Multiplier',
      options: {
        display: false,
      },
    },
    {
      name: 'investmentObjectiveCode',
      label: 'Investment Objective Code',
      options: {
        display: false,
      },
    },
    {
      name: 'legalEntity',
      label: 'Legal Entity',
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

  const [loading, setLoading] = React.useState(false);
  const [showFilter, setShowFilter] = React.useState(true);
  const [rows, setRows] = useState([]);
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
      const data = await listAcatsFull(searchData);
      console.log(data);
      setRows(data.acatsfullsList);
      notifyInfo(data.acatsfullsList.length + ' search results.');
    } catch (error) {
      notifyError(error.message);
    } finally {
      setLoading(false);
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
                  freeSolo={true}
                  name="correspondent"
                  labelid="correspondent"
                  label="Correspondent"
                  value={searchData.correspondent}
                  onChange={handleChange}
                />
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
                  name="status"
                  fullWidth
                  value={searchData.status}
                  onChange={handleChange}
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
            >
              Transfer
            </Button>
          </div>
        </div>
      </Box>
      <Box component="div" mt={2}>
        <Table
          title={'ACATS Full'}
          data={rows}
          columns={columns}
          options={options}
        />
      </Box>
    </div>
  );
}
