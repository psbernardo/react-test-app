/*ReactJS*/
import React, { useState, useEffect } from 'react';
import useStyles from '../../../styles';
import GlSubAccountModal from './GLSubAccountModal';
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
  Typography,
  Button,
  Modal,
  Backdrop,
  Fade,
  Box,
  TextField,
  Tooltip,
  IconButton,
} from '@material-ui/core';
import Table, { columnType } from 'components/Table/Table';
import { SelectReserveCalcCode } from '../../../components/AutoComplete/SelectSystemCode';
import SelectSystemCode from '../../../components/Dropdown/SelectSystemCode';
import SelectGLSide from '../../../components/Dropdown/SelectGLSide';

import {
  createSubAccount,
  updateSubAccount,
  deleteSubAccount,
  listSubAccount,
} from '../../../services/SubAccountService';

import { useConfirm } from 'material-ui-confirm';

export default function GLAccountModal({
  onClose: handleClose,
  open: isOpen,
  value,
}) {
  const classes = useStyles();
  const confirm = useConfirm();
  const [modalData, setModalData] = useState({
    exchangeCode: '',
    requestingAnalyst: '',
  });
  const [isEdit, setIsEdit] = React.useState(false);
  const [rows, setRows] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [rowData, setRowData] = React.useState({});

  useEffect(() => {
    if (isOpen) {
      let modalValue = { ...value };

      setModalData(modalValue);

      if (value.action !== 'add') {
        setIsEdit(true);
      }

      (async () => {
        const { subAccountsList } = await listSubAccount(value.accountId, 'gl');
        setRows(subAccountsList);
      })();
    }
  }, [isOpen, value]);

  const options = {
    // rowsSelected: rowsSelected,
    selectableRows: 'multiple',
    isRowSelectable: (dataIndex) => isDeleteEnabled(dataIndex),
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
      name: 'subAccount',
      label: 'Sub Account',
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

  const isDeleteEnabled = (dataIndex) => {
    return rows[dataIndex].status !== 'Disabled';
  };

  const handleDelete = (rowsToDelete) => {
    let messageKey = '';
    if (rowsToDelete.length === 1) {
      messageKey = rows[rowsToDelete[0].dataIndex].subAccount;
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
          await deleteSubAccount(rows[index].subAccountId, 'gl');
          idsToDelete.push(rows[index].subAccountId);
        }
      } catch (error) {
        notifyError(error.message);
      } finally {
        for (let i = 0; i < rowsCopy.length; i++) {
          if (idsToDelete.includes(rowsCopy[i].subAccountId)) {
            rowsCopy[i].status = 'Disabled';
          }
        }
        setRows(rowsCopy);
        notifySuccess(messageKey + ' GL sub account has been deleted');
      }
    });
  };

  const handleChange = (e) => {
    const input = e.currentTarget.name ? e.currentTarget : e.target;

    setModalData({
      ...modalData,
      [input.name]: input.value,
    });
  };

  const handleOpen = (data) => {
    if (!data) {
      //ADD default values
      data = {
        accountId: value.accountId,
        subAccount: '',
        accountName: '',
        status: 'Active',
      };
    }

    setRowData(data);
    setOpen(true);
  };

  const handleSubAccountClose = async (data, isEdit) => {
    if (!data) {
      setOpen(false);
      return;
    }
    try {
      if (isEdit) {
        //EDIT
        const { subAccount } = await updateSubAccount(
          value.accountId,
          data,
          'gl'
        );
        const index = rows.indexOf(rowData);

        const rowsCopy = [...rows];
        rowsCopy[index] = subAccount;
        setRows(rowsCopy);
        notifySuccess('GL sub account has been updated.');
      } else {
        //ADD
        const { subAccount } = await createSubAccount(
          value.accountId,
          data,
          'gl'
        );
        setRows([subAccount, ...rows]);
        notifySuccess('New GL sub account has been added.');
      }

      setOpen(false);
    } catch (error) {
      console.error(error);
      notifyError(error.message);
    }
  };

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
            {isEdit ? 'Edit' : 'Add New'} GL Account
          </Typography>
          <Box mt={5}>
            <form className={classes.modalForm} noValidate autoComplete="off">
              <div className={classes.grdRow}>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <TextField
                    fullWidth
                    required
                    disabled={isEdit}
                    label="Account Name"
                    name="accountName"
                    value={modalData.accountName}
                    onChange={handleChange}
                    inputProps={{ maxLength: 300 }}
                    InputLabelProps={{ shrink: true }}
                  />
                </div>
                <div className={classes.grdCell1}>
                  <TextField
                    fullWidth
                    required
                    disabled={isEdit}
                    name="accountNo"
                    label="Account No"
                    value={modalData.accountNo}
                    onChange={handleChange}
                    inputProps={{ maxLength: 50 }}
                    InputLabelProps={{ shrink: true }}
                  />
                </div>
              </div>
              <div className={classes.grdRow}>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <TextField
                    fullWidth
                    name="masterAccountNo"
                    label="Master Account No"
                    value={modalData.masterAccountNo}
                    onChange={handleChange}
                    inputProps={{ maxLength: 50 }}
                    InputLabelProps={{ shrink: true }}
                  />
                </div>
                <div className={classes.grdCell1}>
                  <SelectSystemCode
                    name="glType"
                    label="GL Type"
                    type="GL Type"
                    value={modalData.glType}
                    onChange={handleChange}
                  ></SelectSystemCode>
                </div>
              </div>
              <div className={classes.grdRow}>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <SelectSystemCode
                    name="broker"
                    label="Broker"
                    type="Broker"
                    value={modalData.broker}
                    onChange={handleChange}
                  ></SelectSystemCode>
                </div>
                <div className={classes.grdCell1}>
                  <SelectSystemCode
                    name="status"
                    label="Status"
                    type="Status"
                    subType="Client Setup"
                    value={modalData.status}
                    onChange={handleChange}
                  ></SelectSystemCode>
                </div>
              </div>
              <div className={classes.grdRow}>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <SelectReserveCalcCode
                    name="reserveCalcCode"
                    label="Reserve Calc Code"
                    value={modalData.reserveCalcCode}
                    onChange={handleChange}
                  />
                </div>
                <div className={classes.grdCell1}>
                  <SelectGLSide
                    name="side"
                    label="Side"
                    value={modalData.side}
                    onChange={handleChange}
                  ></SelectGLSide>
                </div>
              </div>
              <div className={classes.grdRow}>
                <div className={classes.actionContainer}>
                  <div
                    className={classes.grdCellNone}
                    style={{ marginRight: 10 }}
                  >
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
              </div>
              <Box component="div" mt={2}>
                <Table
                  title={'GL SUB ACCOUNTS'}
                  data={rows}
                  columns={columns}
                  options={options}
                />
              </Box>
              <div className={classes.modalFooter}>
                <div
                  className={classes.grdCellNone}
                  style={{ marginRight: 10 }}
                >
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    onClick={() => {
                      handleClose();
                    }}
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
                      handleClose(modalData, isEdit);
                    }}
                  >
                    Save
                  </Button>
                </div>
              </div>
            </form>
          </Box>
          {open && (
            <GlSubAccountModal
              onClose={handleSubAccountClose}
              open={open}
              value={rowData}
            ></GlSubAccountModal>
          )}
        </div>
      </Fade>
    </Modal>
  );
}
