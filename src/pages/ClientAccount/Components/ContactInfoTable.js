import React from 'react';
import ContactInfoModal from './ContactInfoModal';
import { Button, Box, IconButton } from '@material-ui/core';
import { useConfirm } from 'material-ui-confirm';
import {
  notifySuccess,
  notifyError,
} from 'components/Notification/Notification';
import {
  Add as AddIcon,
  Create as EditIcon,
  Delete as DeleteIcon,
} from '@material-ui/icons';
import {
  updateContactInfo,
  createContactInfo,
  deleteContactInfo,
} from '../../../services/ContactInfoService';
import Table, { columnType } from 'components/Table/Table';
import useStyles from '../../../styles';

export default function ContactInfoTable({
  accountId,
  list: rows,
  set: setRows,
}) {
  const classes = useStyles();
  const confirm = useConfirm();
  const [rowData, setRowData] = React.useState({});
  const [open, setOpen] = React.useState(false);

  const isDeleteEnabled = (dataIndex) => {
    return rows[dataIndex].status !== 'disabled';
  };

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
      type: columnType.buttons,
      options: {
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
              <div align={'left'} className={classes.grdCellNone}>
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
      name: 'contactInfoType',
      label: 'Contact Info Type',
    },
    {
      name: 'contactInfo',
      label: 'Contact Info',
    },
    {
      name: 'status',
      label: 'Status',
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

  const handleDelete = (rowsToDelete) => {
    let messageKey = '';
    if (rowsToDelete.length === 1) {
      messageKey = rows[rowsToDelete[0].dataIndex].contactInfoId;
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
          await deleteContactInfo(rows[index].contactInfoId);
          idsToDelete.push(rows[index].contactInfoId);
        }
      } catch (error) {
        notifyError(error.message);
      } finally {
        for (let i = 0; i < rowsCopy.length; i++) {
          if (idsToDelete.includes(rowsCopy[i].contactInfoId)) {
            rowsCopy[i].status = 'disabled';
          }
        }
        setRows(rowsCopy);
        notifySuccess(messageKey + ' Contact Info has been deleted');
      }
    });
  };

  const handleOpen = (data) => {
    if (!data) {
      //ADD default values
      data = {
        contactInfoType: '',
        contactInfo: '',
      };
    }

    setRowData(data);
    setOpen(true);
  };

  const handleClose = async (data, isEdit, contactInfo) => {
    if (!data) {
      setOpen(false);
      return;
    }
    let valid = true;

    if (!data.contactInfoType) {
      notifyError('Contact Info Type is required.');
      valid = false;
    }

    if (
      data.contactInfoType === 'Primary' ||
      data.contactInfoType === 'Mobile' ||
      data.contactInfoType === 'Office'
    ) {
      data.contactInfo = contactInfo;
    }

    if (!data.contactInfo) {
      notifyError('Contact Info is required.');
      valid = false;
    }

    if (!data.status) {
      notifyError('Status is required.');
      valid = false;
    }

    if (
      data.contactInfoType === 'Primary Email' ||
      data.contactInfoType === 'Email'
    ) {
      if (
        !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]*$/i.test(
          data.contactInfo
        )
      ) {
        notifyError('Invalid email address.');
        valid = false;
      }
    }

    if (!valid) {
      return;
    }

    try {
      if (isEdit) {
        //EDIT
        const { contactInfo } = await updateContactInfo(accountId, data);
        const index = rows.indexOf(rowData);
        // rows[index] = contactInfo;
        const rowsCopy = [...rows];
        rowsCopy[index] = contactInfo;
        setRows(rowsCopy);
        notifySuccess('Contact info has been updated.');
      } else {
        //ADD
        const { contactInfo } = await createContactInfo(accountId, data);
        setRows([contactInfo, ...rows]);
        notifySuccess('New contact info has been added.');
      }

      setOpen(false);
    } catch (error) {
      console.error(error);
      notifyError(error.message);
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
          title={'CONTACT INFORMATIONS'}
          data={rows}
          columns={columns}
          options={options}
        />
      </Box>
      {open && (
        <ContactInfoModal
          onClose={handleClose}
          open={open}
          value={rowData}
        ></ContactInfoModal>
      )}
    </div>
  );
}
