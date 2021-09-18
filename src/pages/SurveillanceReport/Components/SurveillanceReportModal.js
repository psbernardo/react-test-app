/*ReactJS*/
import React, { useState, useEffect } from 'react';
import useStyles from '../../../styles';
import {
  notifyError,
  notifySuccess,
} from 'components/Notification/Notification';
import { useConfirm } from 'material-ui-confirm';

import {
  Typography,
  Button,
  Modal,
  Backdrop,
  Fade,
  Box,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  InputLabel,
  IconButton,
  Tooltip,
} from '@material-ui/core';

import {
  ExpandMore as ExpandMoreIcon,
  AttachFile as AttachFileIcon,
  GetAppRounded as DownloadIcon,
  Delete as DeleteIcon,
} from '@material-ui/icons';

import TextEditor from '../../../components/TextEditor/TextEditor';
import {
  attachFiles,
  listFile,
  deleteFile,
  downloadFile,
} from '../../../services/CommonService';
import { listDetailsReport } from '../../../services/SurveillanceReportService';
import moment from 'moment-timezone';
import Table, { columnType } from 'components/Table/Table';

export default function SurveillanceReportModal({
  onClose: handleClose,
  open: isOpen,
  value,
}) {
  const classes = useStyles();
  const confirm = useConfirm();
  const [rows, setRows] = useState([]);
  const [note, setNote] = useState('');
  const [mounted, setMounted] = React.useState(false);
  const [rowsAttachement, setRowsAttachement] = React.useState([]);
  const [rowsSelected, setRowsSelected] = React.useState([]);
  const linkType = 'Surveillance';

  const columnsAttachement = [
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
                <IconButton
                  aria-label="download"
                  onClick={() => handleDownload([rows[dataIndex].id])}
                >
                  <DownloadIcon />
                </IconButton>
              </div>
            </div>
          );
        },
      },
    },
    {
      name: 'fileName',
      label: 'File Name',
    },
    {
      name: 'uploadedBy',
      label: 'Uploaded By',
    },
    {
      name: 'uploadedAt',
      label: 'Uploaded At',
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

  const optionsAttachement = {
    rowsSelected: rowsSelected,
    selectableRows: 'multiple',
    isRowSelectable: (dataIndex) => isDeleteEnalbed(dataIndex),
    onRowsDelete: (selectedItems) => {
      handleDelete(selectedItems.data);
      return false;
    },
    customToolbarSelect: (selectedRows, a, b) => {
      return (
        <div
          className={classes.grdRow}
          style={{ margin: 0, padding: 0, marginRight: 20 }}
        >
          <div className={classes.grdCell1}>
            <Tooltip title="Delete" arrow>
              <div>
                <IconButton
                  aria-label="delete"
                  onClick={() => {
                    handleDelete(selectedRows.data);
                  }}
                >
                  <DeleteIcon />
                </IconButton>
              </div>
            </Tooltip>
          </div>
          <div align={'left'} className={classes.grdCell1}>
            <Tooltip title="Download" arrow>
              <div>
                <IconButton
                  aria-label="download"
                  onClick={() =>
                    handleDownload(
                      selectedRows.data.map((d) => rows[d.dataIndex].id)
                    )
                  }
                >
                  <DownloadIcon />
                </IconButton>
              </div>
            </Tooltip>
          </div>
        </div>
      );
    },
  };

  const handleAttachFile = async (e, surveillanceId) => {
    const newRows = await attachFiles(surveillanceId, linkType, e.target.files);
    setRowsAttachement([...newRows, ...rowsAttachement]);
    notifySuccess('File has been uploaded');
  };

  const handleDownload = async (ids) => {
    for (let id of ids) {
      try {
        const fileName = await downloadFile(id);
        notifySuccess(fileName);
      } catch (error) {
        notifyError(error.message);
      }
    }
    setRowsSelected([]);
  };

  const isDeleteEnalbed = (dataIndex) => {
    return rows[dataIndex].status !== 'Disabled';
  };

  const handleDelete = (rowsToDelete) => {
    let messageKey = '';
    if (rowsToDelete.length === 1) {
      messageKey = rowsAttachement[rowsToDelete[0].dataIndex].fileName;
    } else {
      messageKey = rowsToDelete.length + ' items';
    }

    let idsToDelete = [];
    confirm({
      description:
        "You are about to delete '" +
        messageKey +
        "'. Please confirm your action.",
      confirmationText: 'Yes, delete',
    }).then(async () => {
      const rowsCopy = [...rowsAttachement];
      try {
        for (const r of rowsToDelete) {
          const index = r.dataIndex;
          await deleteFile(rowsAttachement[index].id);
          idsToDelete.push(rowsAttachement[index].id);
        }
      } catch (error) {
        console.error(error);
        notifyError(error.message);
      } finally {
        const filtered = rowsCopy.filter((r) => !idsToDelete.includes(r.id));
        setRowsAttachement(filtered);
        notifySuccess(messageKey + ' has been deleted');
      }
    });
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const data = {
          pageName: value.pageName,
          reportDate: value.reportDate,
        };

        const resp = await listDetailsReport(data);
        let rowsAttachementCopy = rowsAttachement;
        resp.reportList.map(async (item, index) => {
          let { attachedFilesList } = await listFile(
            item.surveillanceId,
            linkType
          );
          rowsAttachementCopy = rowsAttachementCopy.concat(attachedFilesList);
          setRowsAttachement(rowsAttachementCopy);
        });
        setRows(resp.reportList);
        if (resp.reportList[0] !== undefined) {
          setNote(resp.reportList[0].note);
        }
      } catch (error) {
        notifyError(error.message);
      }
    }
    if (isOpen && !mounted) {
      fetchData();
    }
    return () => {
      setMounted(true);
    };
  }, [isOpen, value, mounted]);

  return (
    <Modal
      className={classes.modalBackdrop}
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={isOpen}
      onClose={() => {
        handleClose();
      }}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={isOpen}>
        <div className={classes.fadeModalMd}>
          <Typography
            id="transition-modal-title"
            className={classes.textBold}
            variant="h4"
            gutterBottom
          >
            Surveillance Report
          </Typography>
          {rows.length ? (
            <Box id="transition-modal-description" mt={5}>
              {rows.map((item, index) => (
                <Accordion
                  className={classes.accordion}
                  key={item.surveillanceId}
                >
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <box mt={5} style={{ width: '100%' }}>
                      <div className={classes.grdRow} style={{ width: '100%' }}>
                        <div className={classes.grdCell1}>
                          <b>Review : # {item.reviewNo}</b>
                        </div>
                        <div className={classes.grdCell1}>
                          Status : <b>{item.status}</b>
                        </div>
                      </div>
                      {item.status === 'Reviewed' ? (
                        <div
                          className={classes.grdRow}
                          style={{ width: '100%' }}
                        >
                          <div className={classes.grdCell1}>
                            Reviewer : {item.reviewer}
                          </div>
                          <div className={classes.grdCell1}>
                            Review At :{' '}
                            {item.reviewAt
                              ? moment(
                                  new Date(item.reviewAt.seconds * 1000)
                                ).format('MM/DD/YYYY hh:mm')
                              : '--'}
                          </div>
                        </div>
                      ) : (
                        ''
                      )}
                    </box>
                  </AccordionSummary>
                  <AccordionDetails className={classes.accordionDetails}>
                    {index === 0 && item.status === 'Pending' ? (
                      <div>
                        <Box>
                          <TextEditor
                            label="Note"
                            setContents={note}
                            onChange={setNote}
                            disable={index !== 0}
                          ></TextEditor>
                        </Box>
                        <div className={classes.modalFooter}>
                          <div
                            className={classes.grdCellNone}
                            style={{ marginRight: 10 }}
                          >
                            <input
                              onChange={(e) => {
                                handleAttachFile(e, item.surveillanceId);
                              }}
                              accept="*/*"
                              className={classes.input}
                              style={{ display: 'none' }}
                              id="raised-button-file"
                              multiple
                              type="file"
                            />
                            <label htmlFor="raised-button-file">
                              <Button
                                variant="contained"
                                size="small"
                                component="span"
                                startIcon={<AttachFileIcon />}
                                color="secondary"
                                className={classes.button}
                              >
                                Attach File
                              </Button>
                            </label>
                          </div>
                          <div
                            className={classes.grdCellNone}
                            style={{ marginRight: 10 }}
                          >
                            <Button
                              variant="contained"
                              color="primary"
                              size="small"
                              onClick={() => {
                                handleClose(item, note, true);
                              }}
                            >
                              Review
                            </Button>
                          </div>
                          <div className={classes.grdCellNone}>
                            <Button
                              variant="contained"
                              color="secondary"
                              size="small"
                              onClick={() => {
                                handleClose(item, note);
                              }}
                            >
                              Save Note
                            </Button>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div>
                        <InputLabel shrink>Note</InputLabel>
                        <div dangerouslySetInnerHTML={{ __html: item.note }} />
                      </div>
                    )}
                  </AccordionDetails>
                </Accordion>
              ))}
              <Accordion className={classes.accordion} key={0}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography className={classes.heading}>
                    {' '}
                    Attachements{' '}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.accordionDetails}>
                  <Table
                    title={'ATTACHMENTS'}
                    data={rowsAttachement}
                    columns={columnsAttachement}
                    options={optionsAttachement}
                  />
                </AccordionDetails>
              </Accordion>
            </Box>
          ) : (
            <Typography
              variant="h6"
              style={{ marginTop: 12, marginBottom: 5, marginLeft: 23 }}
            >
              No Surveillance for this Report Date
            </Typography>
          )}
        </div>
      </Fade>
    </Modal>
  );
}
