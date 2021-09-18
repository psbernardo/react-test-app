import React, { useState } from 'react';
import {
  notifyError,
  notifySuccess,
} from 'components/Notification/Notification';
import {
  listEmailSender,
  createEmailSender,
  updateEmailSender,
  deleteEmailSender,
} from '../../../services/EmailSenderService';
import EmailSenderForm from './EmailSenderForm';
import {
  IconButton,
  Button,
  Box,
  TextField,
  InputLabel,
  Select,
  MenuItem,
} from '@material-ui/core';
import {
  Delete as DeleteIcon,
  Add as AddIcon,
  Create as EditIcon,
} from '@material-ui/icons';
import { useConfirm } from 'material-ui-confirm';
import useStyles from '../../../styles';
import SearchButton from '../../../components/Button/Search';
import SelectRecepientEmailGroup from '../../../components/Dropdown/SelectRecepientEmailGroup';
import SelectSystemCode from 'components/Dropdown/SelectSystemCode';
import QueryParam from '../../../services/QueryParamService';
import Table, { columnType } from 'components/Table/Table';
import {
  createRecurrence,
  updateRecurrence,
} from '../../../services/RecurrenceService';

export default function EmailSenderTable({ params }) {
  const confirm = useConfirm();
  const classes = useStyles();

  const options = {
    isRowSelectable: (dataIndex) => isDeleteEnabled(dataIndex),
    onRowsDelete: (selectedItems) => {
      handleDelete(selectedItems.data);
      return false;
    },
  };

  const columns = [
    {
      name: '',
      options: {
        draggable: false,
        resizable: false,
        print: false,
        searchable: false,
        filter: false,
        sort: false,
        empty: true,
        viewColumns: false,
        download: false,
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
      name: 'template',
      label: 'Template',
    },
    {
      name: 'sender',
      label: 'Sender',
    },
    {
      name: 'recipientEmailGroup',
      label: 'Recipient Email Group',
    },
    {
      name: 'subject',
      label: 'Subject',
    },
    {
      name: 'body',
      label: 'Body',
      options: {
        display: false,
        customBodyRenderLite: (dataIndex) => {
          const v = rows[dataIndex].body;
          return <div dangerouslySetInnerHTML={{ __html: v }} />;
        },
      },
    },
    {
      name: 'lastSentDate',
      label: 'Last Sent Date',
      type: columnType.date,
    },
    {
      name: 'status',
      label: 'Status',
    },
    {
      name: 'createdAt',
      label: 'Created At',
      type: columnType.dateTime,
      options: {
        display: false,
      },
    },
    {
      name: 'createdBy',
      label: 'Created By',
      options: {
        display: false,
      },
    },
    {
      name: 'recurring',
      label: 'Recurring',
    },
    {
      name: 'day',
      label: 'Day',
      options: {
        display: false,
      },
    },
    {
      name: 'month',
      label: 'Month',
      options: {
        display: false,
        customBodyRenderLite: (dataIndex) => {
          const months = [
            '',
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
          ];
          const v = rows[dataIndex].month;
          return <div align="right">{months[v]}</div>;
        },
      },
    },
    {
      name: 'monday',
      label: 'Monday',
      type: columnType.bool,
      options: {
        display: false,
      },
    },
    {
      name: 'tuesday',
      label: 'Tuesday',
      type: columnType.bool,
      options: {
        display: false,
      },
    },
    {
      name: 'wednesday',
      label: 'Wednesday',
      type: columnType.bool,
      options: {
        display: false,
      },
    },
    {
      name: 'thursday',
      label: 'Thursday',
      type: columnType.bool,
      options: {
        display: false,
      },
    },
    {
      name: 'friday',
      label: 'Friday',
      type: columnType.bool,
      options: {
        display: false,
      },
    },
    {
      name: 'saturday',
      label: 'Saturday',
      type: columnType.bool,
      options: {
        display: false,
      },
    },
    {
      name: 'sunday',
      label: 'Sunday',
      type: columnType.bool,
      options: {
        display: false,
      },
    },
    {
      name: 'settleDate',
      label: 'Settle Date',
      type: columnType.bool,
      options: {
        display: false,
      },
    },
    {
      name: 'tradeDate',
      label: 'Trade Date',
      type: columnType.bool,
      options: {
        display: false,
      },
    },
    {
      name: 'calendarDate',
      label: 'Calendar',
      type: columnType.bool,
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

  const [rowData, setRowData] = React.useState({});
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [showFilter, setShowFilter] = React.useState(true);
  const [rows, setRows] = useState([]);

  const [searchData, setSearchData] = React.useState(
    QueryParam.get({
      template: '',
      sender: '',
      recipient_email_group: '',
      status: '',
      recurring: '',
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
      const data = await listEmailSender(searchData);
      setRows(data.emailSenderList);
      notifySuccess(data.emailSenderList.length + ' search results.');
    } catch (error) {
      notifyError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleOpen = (data) => {
    if (!data) {
      //ADD default values
      data = {
        emailSenderId: 0,
        template: '',
        sender: '',
        recipientEmailGroup: '',
        subject: '',
        body: '',
        status: 'Active',
        recurring: 'Daily',
        day: '0',
        month: '0',
        monday: false,
        tuesday: false,
        wednesday: false,
        thursday: false,
        friday: false,
        saturday: false,
        sunday: false,
        settleDate: false,
        tradeDate: false,
        calendarDate: false,
      };
    }
    setRowData(data);
    setOpen(true);
  };

  const handleClose = async (data, modalContentValue, recData, isEdit) => {
    if (!data) {
      setOpen(false);
      return;
    }
    try {
      let valid = true;

      if (!data.template) {
        notifyError('Template is required.');
        valid = false;
      }

      if (!data.status) {
        notifyError('Sender is required.');
        valid = false;
      }

      if (!data.recipientEmailGroup) {
        notifyError('Recipient Email Group is required.');
        valid = false;
      }

      if (!data.subject) {
        notifyError('Subject is required.');
        valid = false;
      }

      if (!modalContentValue) {
        notifyError('Body is required.');
        valid = false;
      }
      data.body = modalContentValue;

      if (!data.status) {
        notifyError('Status is required.');
        valid = false;
      }

      if (!valid) {
        return;
      }
      let resp;
      if (isEdit) {
        //EDIT
        resp = await updateEmailSender(data);
        const rowsCopy = [...rows];
        const index = rows.indexOf(rowData);
        rowsCopy[index] = resp.emailSender;
        setRows(rowsCopy);
        notifySuccess('New Email Sender has been updated.');
      } else {
        // ADD
        const rowsCopy = [...rows];
        resp = await createEmailSender(data);
        rowsCopy.push(resp.emailSender);
        setRows(rowsCopy);
        notifySuccess('New Email Sender has been added.');
      }
      recData.linkId = resp.emailSender.emailSenderId;
      recData.report = data.template;
      if (recData.recurringId != 0) {
        await updateRecurrence(recData);
      } else {
        await createRecurrence(recData);
      }
      setOpen(false);
    } catch (error) {
      notifyError(error.message);
      console.error(error);
    }
  };

  const handleDelete = (rowsToDelete) => {
    let messageKey = '';
    if (rowsToDelete.length === 1) {
      messageKey = rows[rowsToDelete[0].dataIndex].template;
    } else {
      messageKey = rowsToDelete.length + ' items';
    }

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
          const resp = await deleteEmailSender(rows[index].emailSenderId);
          rowsCopy[index] = resp.emailSender;
        }
      } catch (error) {
        notifyError(error.message);
      }
      setRows(rowsCopy);
      notifySuccess(messageKey + ' email sender has been deleted');
    });
  };

  const isDeleteEnabled = (dataIndex) => {
    return rows[dataIndex].status !== 'Inactive';
  };

  return (
    <div className={classes.root}>
      <Box component="div" mt={5}>
        {showFilter ? (
          <div>
            <div className={classes.grdRow}>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <SelectSystemCode
                  required={true}
                  name="template"
                  label="Template"
                  type="Email"
                  subType="Template"
                  value={searchData.template}
                  onChange={handleChange}
                ></SelectSystemCode>
              </div>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <TextField
                  fullWidth
                  name="sender"
                  label="Sender"
                  value={searchData.sender}
                  onChange={handleChange}
                  inputProps={{ maxLength: 100 }}
                  InputLabelProps={{ shrink: true }}
                />
              </div>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <SelectRecepientEmailGroup
                  name="recipientEmailGroup"
                  label="Recipients Email Group"
                  value={searchData.recipientEmailGroup}
                  onChange={handleChange}
                ></SelectRecepientEmailGroup>
              </div>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                <InputLabel shrink>Status</InputLabel>
                <Select
                  name="status"
                  displayEmpty
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
              <div className={classes.grdCell1}>
                <SelectSystemCode
                  required={true}
                  name="recurring"
                  label="Recurring"
                  type="Email"
                  subType="Recurring"
                  value={searchData.recurring}
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
          title={'Email Sender'}
          data={rows}
          columns={columns}
          options={options}
        />
      </Box>
      {open && (
        <EmailSenderForm
          onClose={handleClose}
          open={open}
          value={rowData}
        ></EmailSenderForm>
      )}
    </div>
  );
}
