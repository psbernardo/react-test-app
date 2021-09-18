import React, { useState } from 'react';
import {
  GetAppRounded as DownloadIcon,
  Delete as DeleteIcon,
} from '@material-ui/icons';
import { Button, Box, IconButton, Tooltip } from '@material-ui/core';

import AttachFileIcon from '@material-ui/icons/AttachFile';
import {
  notifySuccess,
  notifyError,
} from 'components/Notification/Notification';
import { useConfirm } from 'material-ui-confirm';
import Table, { columnType } from 'components/Table/Table';
import {
  attachFiles,
  listFile,
  deleteFile,
  downloadFile,
} from '../../../services/CommonService';
import useStyles from '../../../styles';

export default function AttachmentTable({ accountId }) {
  const linkType = 'ClientAccount';
  const classes = useStyles();
  const confirm = useConfirm();
  const [rows, setRows] = useState([]);
  const [rowsSelected, setRowsSelected] = React.useState([]);

  const options = {
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
      name: 'uploadedBy', //2
      label: 'Uploaded By',
    },
    {
      name: 'uploadedAt', //1
      label: 'Uploaded At',
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

  const handleSearch = async (noNotif) => {
    try {
      const { attachedFilesList } = await listFile(accountId, linkType);
      setRows(attachedFilesList);
    } catch (error) {
      notifyError(error.message);
    }
  };

  const handleAttachFile = async (e) => {
    const newRows = await attachFiles(accountId, linkType, e.target.files);
    setRows([...newRows, ...rows]);
    notifySuccess('File has been uploaded');
  };

  React.useEffect(
    () => {
      handleSearch();
    },
    // eslint-disable-next-line
    []
  );

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

  const handleDelete = (rowsToDelete) => {
    let messageKey = '';
    if (rowsToDelete.length === 1) {
      messageKey = rows[rowsToDelete[0].dataIndex].fileName;
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
      const rowsCopy = [...rows];
      try {
        for (const r of rowsToDelete) {
          const index = r.dataIndex;
          await deleteFile(rows[index].id);
          idsToDelete.push(rows[index].id);
        }
      } catch (error) {
        console.error(error);
        notifyError(error.message);
      } finally {
        const filtered = rowsCopy.filter((r) => !idsToDelete.includes(r.id));
        setRows(filtered);
        notifySuccess(messageKey + ' has been deleted');
      }
    });
  };

  const isDeleteEnalbed = (dataIndex) => {
    return rows[dataIndex].status !== 'Disabled';
  };

  return (
    <div className={classes.root}>
      <Box component="div">
        <div className={classes.grdRow}>
          <div className={classes.grdCellNone} style={{ marginRight: 10 }}>
            <input
              onChange={handleAttachFile}
              accept="*/*"
              className={classes.input}
              style={{ display: 'none' }}
              id="raised-button-file"
              multiple
              type="file"
            />
            <label htmlFor="raised-button-file">
              <Button
                // variant="raised"
                variant="contained"
                size="large"
                component="span"
                startIcon={<AttachFileIcon />}
                color="secondary"
                className={classes.button}
              >
                Attach File
              </Button>
            </label>
          </div>
        </div>
      </Box>
      <Box component="div" mt={2}>
        <Table
          title={'CLIENT ATTACHMENTS'}
          data={rows}
          columns={columns}
          options={options}
        />
      </Box>
    </div>
  );
}
