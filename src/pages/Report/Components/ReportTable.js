import React, { useState, useEffect } from 'react';
import ReportModal from './ReportModal';
import {
  Box,
  IconButton,
  TextField,
  InputLabel,
  Select,
  MenuItem,
} from '@material-ui/core';
import {
  notifyInfo,
  notifyError,
  notifySuccess,
} from 'components/Notification/Notification';
import { Create as EditIcon } from '@material-ui/icons';
import SelectCorrespondent from '../../../components/AutoComplete/SelectCorrespondent';
import SearchButton from '../../../components/Button/Search';
import QueryParam from '../../../services/QueryParamService';
import { getSystemDate } from '../../../services/ProfileService';
import useStyles from '../../../styles';
import Table, { columnType } from 'components/Table/Table';
import { listReport } from '../../../services/ReportService';
export default function ReportTable() {
  const classes = useStyles();

  useEffect(
    () => {
      async function init() {
        if (searchData.systemDate) return;

        const systemDate = await getSystemDate();
        setSearchData({
          ...searchData,
          fromDate: systemDate,
          toDate: systemDate,
        });
      }

      init();
    },
    // eslint-disable-next-line
    []
  );

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
      name: 'foreId',
      label: 'Fore ID',
    },
    {
      name: 'tradeDate',
      label: 'Trade Date',
      type: columnType.date,
    },
    {
      name: 'systemDate',
      label: 'System Date',
      type: columnType.date,
    },
    {
      name: 'correspondent',
      label: 'correspondent',
    },
    {
      name: 'submitter',
      label: 'Submitter',
    },
    {
      name: 'status',
      label: 'Status',
    },
    {
      name: 'foreCount',
      label: 'Fore Count',
      type: columnType.quantity,
      addFooter: true,
    },
    {
      name: 'rejectNonRepairableCount',
      label: 'Reject Non Repairable Count',
      type: columnType.quantity,
      addFooter: true,
    },
    {
      name: 'rejectRepairableCount',
      label: 'Reject  Repairable Count',
      type: columnType.quantity,
      addFooter: true,
    },
    {
      name: 'exchangeRouteCount',
      label: 'Exchange Route Count',
      type: columnType.quantity,
      addFooter: true,
    },
    {
      name: 'interFirmRouteCount',
      label: 'Inter Firm Route Count',
      type: columnType.quantity,
      addFooter: true,
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
  const [openEdit, setOpenEdit] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [showFilter, setShowFilter] = React.useState(true);
  const [rows, setRows] = useState([]);
  const [searchData, setSearchData] = React.useState(
    QueryParam.get({
      dateType: 'system_date',
      fromDate: '',
      toDate: '',
      correspondent: '',
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
      const { reportsList } = await listReport(searchData);

      setRows(reportsList);
      notifyInfo(reportsList.length + ' search results.');
    } catch (error) {
      notifyError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleCloseEdit = (editedData) => {
    if (editedData) {
      //EDIT
      const rowsCopy = [...rows];
      const index = rows.indexOf(rowData);
      rowsCopy[index] = editedData;
      setRows(rowsCopy);
      notifySuccess('Oats report has been updated.');
    }

    // console.log(editedData);
    setOpenEdit(false);
  };

  const handleOpenEdit = (data) => {
    setRowData(data);
    setOpenEdit(true);
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
                  <MenuItem value="system_date">System Date</MenuItem>
                  <MenuItem value="trade_date">Trade Date</MenuItem>
                </Select>
              </div>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <TextField
                  name="fromDate"
                  fullWidth
                  label="From Date"
                  type="date"
                  value={searchData.fromDate}
                  onChange={handleChange}
                  InputLabelProps={{ shrink: true }}
                />
              </div>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <TextField
                  name="toDate"
                  fullWidth
                  label="To Date"
                  type="date"
                  value={searchData.toDate}
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
                <TextField
                  name="status"
                  fullWidth
                  label="Status"
                  value={searchData.status}
                  onChange={handleChange}
                  InputLabelProps={{ shrink: true }}
                />
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
        <Table title="Report" data={rows} columns={columns} options={options} />
      </Box>
      {openEdit && (
        <ReportModal
          onClose={handleCloseEdit}
          open={openEdit}
          value={rowData}
        ></ReportModal>
      )}
    </div>
  );
}
