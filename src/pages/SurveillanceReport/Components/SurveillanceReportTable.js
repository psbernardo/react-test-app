import React, { useState, useEffect } from 'react';
import {
  listReport,
  updateReport,
} from '../../../services/SurveillanceReportService';

import {
  notifyInfo,
  notifyError,
  notifySuccess,
} from 'components/Notification/Notification';

import {
  Box,
  IconButton,
  Select,
  MenuItem,
  InputLabel,
  TextField,
  Tooltip,
} from '@material-ui/core';

import { TrackChanges as TrackChangesIcon } from '@material-ui/icons';

import Table, { columnType } from 'components/Table/Table';
import useStyles from '../../../styles';
import SearchButton from '../../../components/Button/Search';

import QueryParam from '../../../services/QueryParamService';

import SurveillanceReportModal from './SurveillanceReportModal';
import SelectAdministratorName from '../../../components/AutoComplete/SelectAdministratorName';
import SelectPage from '../../../components/AutoComplete/SelectPage';
import { getSystemDate } from '../../../services/ProfileService';

export default function SurveillanceReportTable() {
  const classes = useStyles();

  useEffect(
    () => {
      async function init() {
        if (searchData.systemDate) return;

        const systemDate = await getSystemDate();
        setSearchData({
          ...searchData,
          fromReportDate: systemDate,
          toReportDate: systemDate,
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
              <Tooltip title="Surveillance" arrow>
                <div align={'left'} className={classes.grdCellNone}>
                  <IconButton
                    aria-label="surveillance"
                    onClick={() => handleOpen(rows[dataIndex], true)}
                  >
                    <TrackChangesIcon />
                  </IconButton>
                </div>
              </Tooltip>
            </div>
          );
        },
      },
    },
    {
      name: 'pageName',
      label: 'Page Name',
    },
    {
      name: 'reportDate',
      label: 'Report Date',
      type: columnType.date,
    },
    {
      name: 'reviewNo',
      label: 'Review No',
    },
    {
      name: 'pendingCount',
      label: 'Pending Count',
    },
    {
      name: 'reviewedCount',
      label: 'Reviewed Count',
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

  const [searchData, setSearchData] = React.useState(
    QueryParam.get({
      reviewer: '',
      fromReportDate: '',
      toReportDate: '',
      pageName: '',
      status: '',
    })
  );

  const handleChange = (e) => {
    const input = e.currentTarget.name ? e.currentTarget : e.target;
    const searchDataCopy = { ...searchData };

    if (['pageName'].includes(input.name)) {
      searchDataCopy.pageId = input.pageId;
      searchDataCopy.pageName = input.value;
      setSearchData(searchDataCopy);
    } else {
      setSearchData({
        ...searchDataCopy,
        [input.name]: input.value,
      });
    }
  };

  const handleSearch = async () => {
    try {
      setLoading(true);
      QueryParam.set(searchData);
      const data = await listReport(searchData);
      setRows(data.reportList);
      notifyInfo(data.reportList.length + ' search results.');
    } catch (error) {
      console.error(error);
      notifyError(error.message);
    } finally {
      setLoading(false);
    }
  };

  //Opens modal for edit
  const handleOpen = (data) => {
    if (!data) {
      return;
    }

    setRowData(data);
    setOpen(true);
  };

  const handleClose = async (data, note, isReviewed) => {
    try {
      if (!data) {
        setOpen(false);
        return;
      }
      let valid = true;

      if (isReviewed) {
        data.status = 'Reviewed';
      }
      data.note = note;

      if (!data.note) {
        notifyError('Note is required.');
        valid = false;
      }

      if (!valid) {
        return;
      }

      await updateReport(data);

      if (isReviewed) {
        notifySuccess('Surveillance Report was successfully reviewed.');
      } else {
        notifySuccess('Note was updated.');
      }
    } catch (error) {
      notifyError(error.message);
    } finally {
      setOpen(false);
    }
  };

  /*=========================================================================================
  Table component
  ===========================================================================================*/
  return (
    <div className={classes.root}>
      <Box component="div" mt={5}>
        {showFilter ? (
          <div>
            <div className={classes.grdRow}>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <InputLabel shrink>From Report Date</InputLabel>
                <TextField
                  fullWidth
                  name="fromReportDate"
                  type="date"
                  value={searchData.fromReportDate}
                  onChange={handleChange}
                />
              </div>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <InputLabel shrink>To Report Date</InputLabel>
                <TextField
                  fullWidth
                  name="toReportDate"
                  type="date"
                  value={searchData.toReportDate}
                  onChange={handleChange}
                />
              </div>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <SelectPage
                  name="pageName"
                  label="Page Name"
                  value={searchData.pageName}
                  onChange={handleChange}
                ></SelectPage>
              </div>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <SelectAdministratorName
                  name="reviewer"
                  label="Reviewer"
                  value={searchData.reviewer}
                  onChange={handleChange}
                  InputLabelProps={{ shrink: true }}
                ></SelectAdministratorName>
              </div>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <InputLabel shrink id="status">
                  Status
                </InputLabel>
                <Select
                  name="status"
                  fullWidth
                  value={searchData.status}
                  onChange={handleChange}
                >
                  <MenuItem value="">
                    <em>Blank</em>
                  </MenuItem>
                  <MenuItem value="Reviewed">Reviewed</MenuItem>
                  <MenuItem value="Pending">Pending</MenuItem>
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
        </div>
      </Box>
      <Box component="div" mt={2}>
        <Table
          title={'Surveillance Report'}
          data={rows}
          columns={columns}
          options={options}
        />
      </Box>
      {open && (
        <SurveillanceReportModal
          onClose={handleClose}
          open={open}
          value={rowData}
        ></SurveillanceReportModal>
      )}
    </div>
  );
}
