import React from 'react';
import NoteModal from './NoteModal';
import { Button, Box } from '@material-ui/core';
import {
  notifySuccess,
  notifyError,
} from 'components/Notification/Notification';
import { Add as AddIcon } from '@material-ui/icons';
import { createNote } from '../../../services/NoteService';
import Table, { columnType } from 'components/Table/Table';

import useStyles from '../../../styles';

export default function NoteTable({ accountId, list: rows, set: setRows }) {
  const classes = useStyles();
  const [rowData, setRowData] = React.useState({});
  const [validation, setValidation] = React.useState({});
  const [open, setOpen] = React.useState(false);

  const options = {
    selectableRows: 'none',
  };
  const columns = [
    {
      name: 'subject', //4
      label: 'Subject',
    },
    {
      name: 'note', //3
      label: 'Note',
    },
    {
      name: 'createdBy', //2
      label: 'Created By',
    },
    {
      name: 'createdAt', //1
      label: 'Create At',
      type: columnType.dateTime,
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

  const handleOpen = (data) => {
    if (!data) {
      //ADD default values
      data = {
        noteType: '',
        subject: '',
        note: '',
      };
    }

    setRowData(data);
    setOpen(true);
  };

  const handleClose = async (data, isEdit) => {
    if (!data) {
      setValidation({});
      setOpen(false);
      return;
    }

    try {
      let valid = true;

      setValidation({
        noteType: !data.noteType,
        subject: !data.subject,
        note: !data.note,
      });

      if (!data.noteType) {
        notifyError('Note Type is required.');
        valid = false;
      }
      if (!data.subject) {
        notifyError('Subject is required.');
        valid = false;
      }
      if (!data.note) {
        notifyError('Note is required.');
        valid = false;
      }

      if (!valid) {
        return;
      }

      //ADD
      data.linkId = accountId;
      const { note } = await createNote(accountId, data);
      setRows([note, ...rows]);
      notifySuccess('New note has been added.');

      setValidation({});
      setOpen(false);
    } catch (error) {
      notifyError(error.message);
      console.error(error);
    }
  };

  return (
    <div className={classes.root}>
      <Box component="div">
        <div className={classes.grdRow}>
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
        </div>
      </Box>
      <Box component="div" mt={2}>
        <Table
          title={'NOTES'}
          data={rows}
          columns={columns}
          options={options}
        />
      </Box>
      {open && (
        <NoteModal
          onClose={handleClose}
          open={open}
          value={rowData}
          validation={validation}
        ></NoteModal>
      )}
    </div>
  );
}
