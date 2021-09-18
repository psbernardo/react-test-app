import React, { useState, useEffect } from 'react';
import {
  listSetup,
  createSetup,
  updateSetup,
} from '../../../services/SurveillanceSetupService';

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
  Button,
} from '@material-ui/core';

import { Add as AddIcon, Create as EditIcon } from '@material-ui/icons';

import Table, { columnType } from 'components/Table/Table';
import useStyles from '../../../styles';
import SearchButton from '../../../components/Button/Search';

import QueryParam from '../../../services/QueryParamService';

import SetupModal from './SetupModal';
import SelectPage from '../../../components/AutoComplete/SelectPage';
import SelectSurveillanceGroup from '../../../components/AutoComplete/SelectSurveillanceGroup';
import SelectSurveillance from '../../../components/AutoComplete/SelectSurveillance';
import {
  createRecurrence,
  updateRecurrence,
} from '../../../services/RecurrenceService';

export default function SetupTable() {
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
              <div align={'left'} className={classes.grdCellNone}>
                <IconButton
                  aria-label="edit"
                  onClick={() => handleOpen(rows[dataIndex], true)}
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
      name: 'surveillanceGroup',
      label: 'Surveillance Group',
    },
    {
      name: 'surveillance',
      label: 'Surveillance',
    },
    {
      name: 'pageName',
      label: 'Page Name',
    },
    {
      name: 'reviewerCount',
      label: 'Reviewer Count',
    },
    {
      name: 'recurring',
      label: 'Recurring',
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
        customBodyRenderLite: (dataIndex) => {
          const v = rows[dataIndex].note;
          return <div dangerouslySetInnerHTML={{ __html: v }} />;
        },
      },
    },
    {
      name: 'createdAt',
      label: 'Created At',
      type: columnType.dateTime,
    },
    {
      name: 'modifiedBy',
      label: 'Modified By',
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
      surveillance: '',
      surveillanceGroup: '',
      pageId: '',
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
      const data = await listSetup(searchData);
      setRows(data.setupList);
      notifyInfo(data.setupList.length + ' search results.');
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
      //ADD default values
      data = {
        pageId: 0,
        pageName: '',
        reviewerCount: 0,
        status: 'Active',
        note: '',
        recurring: '',
        recurringId: 0,
        surveillanceGroup: '',
        surveillance: '',
      };
    }
    setRowData(data);
    setOpen(true);
  };

  const handleClose = async (data, recData, isEdit, editorValue) => {
    if (!data || !recData) {
      setOpen(false);
      return;
    }
    let valid = true;

    if (!data.reviewerCount || data.reviewerCount <= 0) {
      notifyError('Reviewer Count is required.');
      valid = false;
    }

    if (!data.status) {
      notifyError('Status is required.');
      valid = false;
    }

    if (!data.surveillance) {
      notifyError('Surveillance is required.');
      valid = false;
    }

    if (!data.surveillanceGroup) {
      notifyError('Surveillance Group is required.');
      valid = false;
    }

    if (!recData.recurring) {
      notifyError('Recurring is required.');
      valid = false;
    }

    if (
      recData.recurring === 'Daily' &&
      recData.settleDate == false &&
      recData.tradeDate == false &&
      recData.calendarDate == false
    ) {
      notifyError('Daily is required.');
      valid = false;
    } else if (
      recData.recurring === 'Weekly' &&
      recData.monday == false &&
      recData.tuesday == false &&
      recData.wednesday == false &&
      recData.thursday == false &&
      recData.friday == false &&
      recData.saturday == false
    ) {
      notifyError('Weekly is required.');
      valid = false;
    } else if (recData.recurring === 'Monthly' && recData.day === '') {
      notifyError('Monthly is required.');
      valid = false;
    } else if (recData.recurring === 'Quarterly' && recData.day === '') {
      notifyError('Quarterly is required.');
      valid = false;
    } else if (
      recData.recurring === 'Yearly' &&
      recData.day === '' &&
      recData.month === ''
    ) {
      notifyError('Yearly is required.');
      valid = false;
    }

    data.note = editorValue;

    if (!valid) {
      return;
    }
    let recurrence;
    let resp;
    try {
      if (isEdit) {
        // //EDIT
        recData.linkId = data.setupId;
        recData.report = data.surveillanceGroup + ' - ' + data.surveillance;
        if (recData.recurringId != 0) {
          recurrence = await updateRecurrence(recData);
        } else {
          recurrence = await createRecurrence(recData);
        }

        resp = await updateSetup(data);
        const rowsCopy = [...rows];
        const index = rows.indexOf(rowData);
        rowsCopy[index] = resp.setup;

        notifySuccess('Surveillance Setup has been updated.');
      } else {
        //ADD
        await createSetup(data).then(async (items) => {
          recData.linkId = items.setup.setupId;
          recData.report =
            items.setup.surveillanceGroup + ' - ' + items.setup.surveillance;
          await createRecurrence(recData).then((item2) => {
            items.setup.recurringId = item2.recurrence.recurringId;
            items.setup.recurring = item2.recurrence.recurring;
            setRows([items.setup, ...rows]);
            notifySuccess('New Surveillance Setup has been added.');
          });
        });
      }
      setOpen(false);
    } catch (error) {
      notifyError(error.message);
      console.error(error);
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
                <SelectSurveillanceGroup
                  freeSolo={true}
                  name="surveillanceGroup"
                  label="Surveillance Group"
                  value={searchData.surveillanceGroup}
                  onChange={handleChange}
                ></SelectSurveillanceGroup>
              </div>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <SelectSurveillance
                  freeSolo={true}
                  name="surveillance"
                  label="Surveillance"
                  value={searchData.surveillance}
                  onChange={handleChange}
                ></SelectSurveillance>
              </div>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <SelectPage
                  name="pageName"
                  label="Page Name"
                  value={searchData.pageName}
                  onChange={handleChange}
                ></SelectPage>
              </div>
              <div className={classes.grdCell1}>
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
                  <MenuItem value="Inactive">Inactive</MenuItem>
                  <MenuItem value="Active">Active</MenuItem>
                </Select>
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
          title={'Surveillance Setup'}
          data={rows}
          columns={columns}
          options={options}
        />
      </Box>
      {open && (
        <SetupModal
          onClose={handleClose}
          open={open}
          value={rowData}
        ></SetupModal>
      )}
    </div>
  );
}
