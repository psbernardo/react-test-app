/*Service*/
import {
  NoteServiceClient,
  Note,
} from '../../../proto/commonpb/note_grpc_web_pb';

/*ReactJS*/
import React, { useState } from 'react';

/*Material UI Components*/
import {
  TableCell,
  TableRow,
  Typography,
  Button,
  Modal,
  Backdrop,
  Fade,
  Box,
  TextField,
} from '@material-ui/core';

/*Toast Notification*/
import {
  notifySuccess,
  notifyError,
} from 'components/Notification/Notification';

/*Moment JS*/
import moment from 'moment/moment.js';

/*Material UI Icons*/
import { Add as AddIcon } from '@material-ui/icons';

/*UI Table*/
import Table, { columnType } from 'components/Table/Table';

/*Styles*/
import useStyles from '../../../styles';

import { auth } from '../../../lib/auth/Auth';

/*Google Time Stamp Protobuf*/
const timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

/*=========================================================================================
Postgres connection
===========================================================================================*/
const accountNote = new NoteServiceClient(
  window.env.GRPC_ENDPOINT,
  {},
  { ...auth }
);
/*=========================================================================================
End of postgres connection
===========================================================================================*/

/*=========================================================================================
Re-render component
===========================================================================================*/
function RenderComponent() {
  const [, setValue] = useState(0);
  return () => setValue((value) => ++value);
}
/*=========================================================================================
End of re-render component
===========================================================================================*/

export default function NoteTable({ accountid, linkid, notelist }) {
  const rows = notelist;

  /*=========================================================================================
  Component style
  ===========================================================================================*/
  const classes = useStyles();

  const reRender = RenderComponent(); //Re-renders component when something change in component state
  /*=========================================================================================
  End of component style
  ===========================================================================================*/

  /*=========================================================================================
  Add and Update note function
  ===========================================================================================*/
  function saveNote(
    reRender,
    isAdd,
    closeModal,
    noteId,
    accountId,
    linkId,
    noteType,
    subject,
    note
  ) {
    if (!noteType) {
      notifyError('Note type is required');
      return;
    }
    if (!subject) {
      notifyError('Subject is required');
      return;
    }
    if (!note) {
      notifyError('Note is required');
      return;
    }

    // CONVERT DATE TO TIMESTAMP PROTO
    let newCreatedAt = new Date();
    let pbCreatedAt = timestamp_pb.Timestamp.fromDate(newCreatedAt);

    if (isAdd) {
      let addReq = new Note();
      addReq.setAccountId(accountId);
      addReq.setLinkId(linkId);
      addReq.setNoteType(noteType);
      addReq.setSubject(subject);
      addReq.setNote(note);
      addReq.setCreatedAt(pbCreatedAt);
      addReq.setCreatedBy('logged user');

      accountNote.createNote(addReq, {}, (err, res) => {
        if (err) {
          console.error(err.message);
          notifyError(err.message);
          return;
        }
        let newNote = {
          noteId: res.toObject().note.noteId,
          accountId: res.toObject().note.accountId,
          linkId: res.toObject().note.linkId,
          noteType: noteType,
          subject: subject,
          note: note,
          // createdAt: moment(
          //   new Date(pbCreatedAt.toObject().seconds * 1000)
          // ).format('MM/DD/YYYY'),
          createdAt: res.toObject().note.createdAt
            ? moment(
                new Date(res.toObject().note.createdAt.seconds * 1000)
              ).format('MM/DD/YYYY hh:mm')
            : '--',
          createdBy: res.toObject().note.createdBy,
        };

        rows.push(newNote);
        notifySuccess('New note has been added.');
        reRender();
        closeModal();
      });
    } else {
      // CONVERT DATE TO TIMESTAMP PROTO
      let updatedCreatedAt = new Date();
      let updatedPbCreatedAt = timestamp_pb.Timestamp.fromDate(
        updatedCreatedAt
      );

      let updateReq = new Note();
      updateReq.setNoteId(noteId);
      updateReq.setAccountId(accountId);
      updateReq.setLinkId(linkId);
      updateReq.setNoteType(noteType);
      updateReq.setSubject(subject);
      updateReq.setNote(note);
      updateReq.setCreatedAt(updatedPbCreatedAt);
      updateReq.setCreatedBy('Jasik Suzara');

      accountNote.updateNote(updateReq, {}, (err) => {
        if (err) {
          console.log(err);
          notifyError(err);
          return;
        }
        for (let i = 0; i < rows.length; i++) {
          if (rows[i].noteId === noteId) {
            rows[i].noteType = noteType;
            rows[i].subject = subject;
            rows[i].note = note;
            rows[i].createdAt = new Date();
            rows[i].createdBy = 'logged user';
          }
        }
        notifySuccess('Note has been updated.');
        reRender();
        closeModal();
      });
    }
  }
  /*=========================================================================================
  End of Add and Update note function
  ===========================================================================================*/

  /*=========================================================================================
  Table configuration
  ===========================================================================================*/
  const [isVisibleSubject, setIsVisibleSubject] = React.useState(true);
  const [isVisibleNote, setIsVisibleNote] = React.useState(true);
  const [isVisibleCreatedBy, setIsVisibleCreatedBy] = React.useState(true);
  const [isVisibleCreatedAt, setIsVisibleCreatedAt] = React.useState(true);

  const columns = [
    {
      id: '1',
      name: 'subject',
      label: 'Subject',
    },
    {
      id: '2',
      name: 'note',
      label: 'Note',
    },
    {
      id: '3',
      name: 'createdBy',
      label: 'Created By',
    },
    {
      id: '4',
      name: 'createdAt',
      label: 'Created At',
      type: columnType.dateTime,
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

  const customTableRow = (data, dataIndex, rowIndex) => {
    if (!rows[rowIndex]) {
      return;
    }

    return (
      <TableRow hover role="checkbox" tabIndex={-1} key={rows[rowIndex].noteId}>
        <TableCell></TableCell>
        {isVisibleSubject ? (
          <TableCell align="left">{rows[rowIndex].subject}</TableCell>
        ) : null}
        {isVisibleNote ? (
          <TableCell align="left">{rows[rowIndex].note}</TableCell>
        ) : null}
        {isVisibleCreatedBy ? (
          <TableCell align="left">{rows[rowIndex].createdBy}</TableCell>
        ) : null}
        {isVisibleCreatedAt ? (
          <TableCell align="left">
            {rows[rowIndex].createdAt.seconds
              ? moment(
                  new Date(rows[rowIndex].createdAt.seconds * 1000)
                ).format('MM/DD/YYYY hh:mm')
              : rows[rowIndex].createdAt}
          </TableCell>
        ) : null}
      </TableRow>
    );
  };

  const showHideColumns = (column, action) => {
    if (column === 'subject') {
      if (action === 'remove') {
        setIsVisibleSubject(false);
      } else {
        setIsVisibleSubject(true);
      }
    }

    if (column === 'note') {
      if (action === 'remove') {
        setIsVisibleNote(false);
      } else {
        setIsVisibleNote(true);
      }
    }

    if (column === 'createdBy') {
      if (action === 'remove') {
        setIsVisibleCreatedBy(false);
      } else {
        setIsVisibleCreatedBy(true);
      }
    }

    if (column === 'createdAt') {
      if (action === 'remove') {
        setIsVisibleCreatedAt(false);
      } else {
        setIsVisibleCreatedAt(true);
      }
    }
  };

  const options = {
    filterType: 'select',
    customRowRender: customTableRow,
    onColumnViewChange: showHideColumns,
    download: false,
    filter: true,
    search: false,
    print: false,
    sort: true,
    viewColumns: true,
    selectableRowsHeader: false,
  };
  /*=========================================================================================
  End of table configuration
  ===========================================================================================*/

  /*========================================================================================= 
  Note modal
  ===========================================================================================*/
  const [noteId, setNoteId] = React.useState('');
  const [modalNoteTypeValue, setModalNoteTypeValue] = React.useState(
    'call_logs'
  );
  const [modalSubjectValue, setModalSubjectValue] = React.useState('');
  const [modalNoteValue, setModalNoteValue] = React.useState('');

  const [modalAddAction, setModalAddAction] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [modalTitleValue, setModalTitleValue] = React.useState('Add New');

  const handleOpen = (rowData, isAdd) => {
    if (isAdd) {
      setModalNoteTypeValue('call_logs');
      setModalSubjectValue('');
      setModalNoteValue('');

      setModalAddAction(true);
      setModalTitleValue('Add New');
    } else {
      setNoteId(rowData.noteId);
      setModalNoteTypeValue(rowData.noteType);
      setModalSubjectValue(rowData.subject);
      setModalNoteValue(rowData.note);

      setModalAddAction(false);
      setModalTitleValue('Edit');
    }
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  /*========================================================================================= 
  End of note modal
  ===========================================================================================*/

  return (
    <div className={classes.root}>
      <div className={classes.modalActionContainer}>
        <div className={classes.grdRow}>
          <div className={classes.grdCellNone}>
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
        </div>
      </div>
      <Box>
        <Table
          title={'Notes'}
          data={rows}
          columns={columns}
          options={options}
        />
      </Box>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modalBackdrop}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.fadeModalMd}>
            <Typography
              id="transition-modal-title"
              variant="h4"
              className={classes.textBold}
              gutterBottom
            >
              {modalTitleValue} Note
            </Typography>
            <Box mt={5}>
              <form noValidate autoComplete="off">
                <div className={classes.grdRow}>
                  <div className={classes.grdCell1}>
                    <TextField
                      required
                      type="text"
                      label="Subject"
                      fullWidth={true}
                      value={modalSubjectValue}
                      onChange={(e) => setModalSubjectValue(e.target.value)}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </div>
                </div>
                <div className={classes.grdRow}>
                  <div className={classes.grdCell1}>
                    <TextField
                      required
                      multiline
                      label="Note"
                      placeholder="Note"
                      fullWidth={true}
                      rows={4}
                      value={modalNoteValue}
                      onChange={(e) => setModalNoteValue(e.target.value)}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </div>
                </div>
                <div className={classes.modalFooter}>
                  <div
                    className={classes.grdCellNone}
                    style={{ marginRight: 10 }}
                  >
                    <Button
                      variant="contained"
                      color="primary"
                      size="large"
                      onClick={handleClose}
                    >
                      Close
                    </Button>
                  </div>
                  <div className={classes.grdCellNone}>
                    <Button
                      variant="contained"
                      color="secondary"
                      size="large"
                      onClick={() => {
                        saveNote(
                          reRender,
                          modalAddAction,
                          handleClose,
                          noteId,
                          accountid,
                          linkid,
                          modalNoteTypeValue,
                          modalSubjectValue,
                          modalNoteValue
                        );
                      }}
                    >
                      Save
                    </Button>
                  </div>
                </div>
              </form>
            </Box>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
