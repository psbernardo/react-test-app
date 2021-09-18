/*ReactJS*/
import React, { useState, useEffect } from 'react';
import useStyles from '../../../styles';
import {
  Typography,
  Button,
  Modal,
  Backdrop,
  Fade,
  Box,
  TextField,
  FormControlLabel,
  Checkbox,
  InputLabel,
  MenuItem,
  Select,
} from '@material-ui/core';
import Table from 'components/Table/Table';
import { notifyError } from 'components/Notification/Notification';

import { readEmailManager } from '../../../services/EmailManagerService';

export default function EmailManagerModal({
  onClose: handleClose,
  open: isOpen,
  value,
}) {
  const classes = useStyles();
  const [modalData, setModalData] = useState({
    emailManagerId: '',
    recipientEmailGroup: '',
    usrId: '',
    status: 'Active',
    usrIdArr: [],
  });
  const [isEdit, setIsEdit] = React.useState(false);
  const [rowsSelected, setRowsSelected] = React.useState([]);
  const [rows, setRows] = useState([]);

  useEffect(() => {
    if (isOpen) {
      let modalValue = { ...value };
      if (value.emailManagerId) {
        setIsEdit(true);
        setModalData({
          ...modalValue,
          usrIdArr: [],
        });
      } else {
        setModalData(modalValue);
      }
      getDetails(value.emailManagerId);
    }

    // eslint-disable-next-line
  }, [isOpen, value]);

  const getDetails = async (emailManagerId) => {
    try {
      const data = await readEmailManager(emailManagerId);

      setRows(data.emailManagerListList);

      const selectedRows = [];
      data.emailManagerListList.forEach((element, index) => {
        if (element.status) {
          selectedRows.push(index);
        }
      });
      setRowsSelected(selectedRows);
    } catch (error) {
      notifyError(error.message);
    }
  };
  const options = {
    selectableRows: 'multiple',
    rowsSelected: rowsSelected,
    onRowSelectionChange: (
      currentRowsSelected,
      allRowsSelected,
      rowsSelected
    ) => {
      let rowsCopy = [...rows];
      rowsCopy.forEach(async (row, index) => {
        const x = allRowsSelected.find((item) => item.dataIndex === index);
        if (!x) {
          rowsCopy[index].status = false;
        } else {
          rowsCopy[index].status = true;
        }
      });
      setRows(rowsCopy);
      setRowsSelected(rowsSelected);
    },
  };

  const columns = [
    {
      name: 'name',
      label: 'Name',
      visibleState: useState(true),
      align: 'left',
      order: 1,
    },
    {
      name: 'email',
      label: 'Email',
      visibleState: useState(true),
      align: 'left',
      order: 2,
    },
    {
      name: 'mobileNo',
      label: 'Mobile No',
      visibleState: useState(true),
      align: 'left',
      order: 3,
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

  const handleChange = (e) => {
    const input = e.currentTarget.name ? e.currentTarget : e.target;

    setModalData({
      ...modalData,
      [input.name]: input.value,
    });
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
        <div className={classes.fadeModalFull}>
          <Typography
            id="transition-modal-title"
            className={classes.textBold}
            variant="h4"
            gutterBottom
          >
            {isEdit ? 'Edit' : 'Add New'} Employee Group Setup
          </Typography>
          <Box mt={5}>
            <form className={classes.modalForm} noValidate autoComplete="off">
              <div className={classes.grdRow}>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <TextField
                    fullWidth
                    required={true}
                    name="recipientEmailGroup"
                    label="RecipientEmailGroup"
                    value={modalData.recipientEmailGroup}
                    onChange={handleChange}
                    inputProps={{ maxLength: 100 }}
                    InputLabelProps={{ shrink: true }}
                  />
                </div>
                <div className={classes.grdCell1}>
                  <InputLabel shrink>Status</InputLabel>
                  <Select
                    name="status"
                    displayEmpty
                    fullWidth
                    value={modalData.status}
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
              <Box component="div" mt={2}>
                <Table
                  title={'User Accounts'}
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
                      handleClose(modalData, rows, isEdit);
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
  );
}
