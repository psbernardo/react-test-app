import React, { useState, useEffect } from 'react';
import {
  notifyInfo,
  notifyError,
  notifySuccess,
} from 'components/Notification/Notification';
import {
  listProcess,
  processSystemProcess,
} from '../../../services/ProcessService';
import { Box, TextField, IconButton, Tooltip } from '@material-ui/core';
import { CompareArrowsRounded as CancelAndCorrectIcon } from '@material-ui/icons';
import Table, { columnType } from 'components/Table/Table';
import useStyles from '../../../styles';
import SearchButton from '../../../components/Button/Search';
import QueryParam from '../../../services/QueryParamService';
import { getSystemDate } from '../../../services/ProfileService';
import SelectSystemCode from '../../../components/Dropdown/SelectSystemCode';
import SystemProcessModal from './SystemProcessModal';
import SelectProcess from '../../../components/AutoComplete/SelectProcess';

export default function SystemProcessTable({ params }) {
  const classes = useStyles();

  useEffect(
    () => {
      async function init() {
        const systemDate = await getSystemDate();
        const searchDataCopy = { ...searchData };

        if (!searchData.systemDate) {
          searchDataCopy.systemDate = systemDate;
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
                <Tooltip title="Process" arrow>
                  <div>
                    <IconButton
                      aria-label="process"
                      disabled={rows[dataIndex].status !== 'Pending'}
                      onClick={() => handleOpen(rows[dataIndex])}
                    >
                      <CancelAndCorrectIcon />
                    </IconButton>
                  </div>
                </Tooltip>
              </div>
            </div>
          );
        },
      },
    },
    {
      name: 'systemDate',
      label: 'System Date',
      type: columnType.date,
    },
    {
      name: 'processOrder',
      label: 'Process Order',
      options: {
        display: false,
      },
    },
    {
      name: 'processGroup',
      label: 'Process Group',
    },
    {
      name: 'processDate',
      label: 'Process Date',
      type: columnType.date,
    },
    {
      name: 'process',
      label: 'Process',
    },
    {
      name: 'spCall',
      label: 'SP Call',
      options: {
        display: false,
      },
    },
    {
      name: 'processBy',
      label: 'Process By',
    },
    {
      name: 'processedAt',
      label: 'Processed At',
      type: columnType.dateTime,
      options: {
        display: false,
      },
    },
    {
      name: 'status',
      label: 'Status',
    },
    {
      name: 'note',
      label: 'Note',
      options: {
        display: false,
      },
    },
    {
      name: 'startTime',
      label: 'Start Time',
      options: {
        display: false,
        customBodyRenderLite: (dataIndex) => {
          if (rows[dataIndex].startTime) {
            const v = rows[dataIndex].startTime;
            return new Date(v.seconds * 1000).toISOString().substr(11, 8);
          }
        },
      },
    },
    {
      name: 'endTime',
      label: 'End Time',
      options: {
        display: false,
        customBodyRenderLite: (dataIndex) => {
          if (rows[dataIndex].endTime) {
            const v = rows[dataIndex].endTime;
            return new Date(v.seconds * 1000).toISOString().substr(11, 8);
          }
        },
      },
    },
    {
      name: 'duration',
      label: 'Duration',
      options: {
        display: false,
        customBodyRenderLite: (dataIndex) => {
          if (rows[dataIndex].duration) {
            const v = rows[dataIndex].duration;
            return new Date(v.seconds * 1000).toISOString().substr(11, 8);
          }
        },
      },
    },
    {
      name: 'fromSchedule',
      label: 'From Schedule',
      type: columnType.dateTime,
      options: {
        display: false,
      },
    },
    {
      name: 'toSchedule',
      label: 'To Schedule',
      type: columnType.dateTime,
      options: {
        display: false,
      },
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
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = React.useState(false);
  const [showFilter, setShowFilter] = React.useState(true);
  const [open, setOpen] = React.useState(false);
  const [searchData, setSearchData] = React.useState(
    QueryParam.get({
      systemDate: '',
      processGroup: '',
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
      const data = await listProcess(searchData);
      setRows(data.processesList);
      notifyInfo(data.processesList.length + ' search results.');
    } catch (error) {
      console.error(error);
      notifyError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleOpen = (data) => {
    setRowData(data);
    setOpen(true);
  };

  const handleClose = async (data) => {
    if (!data) {
      setOpen(false);
      return;
    }

    let valid = true;

    if (!data.note) {
      notifyError('Note is required.');
      valid = false;
    }

    if (!valid) {
      return;
    }

    try {
      const resp = await processSystemProcess(data);
      const rowsCopy = [...rows];
      const index = rows.indexOf(rowData);
      rowsCopy[index] = resp.process;
      setRows(rowsCopy);
      notifySuccess('System Process Record has been processed successfully.');
      setOpen(false);
    } catch (error) {
      notifyError(error.message);
      console.error(error);
    }
  };

  return (
    <div className={classes.root}>
      <Box component="div" mt={5}>
        {showFilter ? (
          <div>
            <div className={classes.grdRow}>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <TextField
                  fullWidth
                  name="systemDate"
                  label="System Date"
                  type="date"
                  value={searchData.systemDate}
                  onChange={handleChange}
                  InputLabelProps={{ shrink: true }}
                />
              </div>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <SelectSystemCode
                  name="processGroup"
                  label="Process Group"
                  type="System Process"
                  subType="Process Group"
                  value={searchData.processGroup}
                  onChange={handleChange}
                ></SelectSystemCode>
              </div>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <SelectSystemCode
                  name="status"
                  label="Status"
                  type="System Process"
                  subType="Status"
                  value={searchData.status}
                  onChange={handleChange}
                ></SelectSystemCode>
              </div>
              <div className={classes.grdCell1}>
                <SelectProcess
                  freeSolo={true}
                  label="Process"
                  name="process"
                  value={searchData.process}
                  onChange={handleChange}
                ></SelectProcess>
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
          title={'System Process'}
          data={rows}
          columns={columns}
          options={options}
        />
      </Box>
      {open && (
        <SystemProcessModal
          onClose={handleClose}
          open={open}
          value={rowData}
        ></SystemProcessModal>
      )}
    </div>
  );
}
