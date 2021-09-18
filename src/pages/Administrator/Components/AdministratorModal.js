import React, { useState, useEffect } from 'react';
import useStyles from '../../../styles';
import AdministratorAccessModal from './AdministratorAccessModal';
import {
  notifyError,
  notifySuccess,
} from 'components/Notification/Notification';
import {
  Typography,
  Button,
  Modal,
  Backdrop,
  Fade,
  Box,
  TextField,
  IconButton,
  RadioGroup,
  InputLabel,
  Radio,
  FormControlLabel,
  Checkbox,
} from '@material-ui/core';
import { Add as AddIcon, Edit as EditIcon } from '@material-ui/icons';
import {
  listAccess,
  createAccess,
  updateAccess,
} from '../../../services/AdministratorService';
import SelectDefaultPageAccess from '../../../components/Dropdown/SelectDefaultPageAccess';
import SelectSystemCode from 'components/Dropdown/SelectSystemCode';
import TextFieldMobileNo from '../../../components/Textfield/TextFieldMobileNo';
import Table, { columnType } from 'components/Table/Table';
import SelectCorrespondent from '../../../components/AutoComplete/SelectCorrespondent';

export default function AdministratorModal({
  onClose: handleClose,
  open: isOpen,
  add: isAdd,
  value,
}) {
  const classes = useStyles();
  const [modalData, setModalData] = useState({
    usrId: '',
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
    defaultAccess: '',
    mobileNo: '',
    admin: false,
    authenticationMode: 'Email',
    correspondent: '',
  });
  const [isEdit, setIsEdit] = React.useState(false);
  const [rows, setRows] = useState([]);
  const [rowData, setRowData] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [modalAddAction, setModalAddAction] = React.useState(false);
  const [modalTitleValue, setModalTitleValue] = React.useState('Add New');

  useEffect(() => {
    if (isOpen) {
      setModalData({ ...value });

      if (isAdd) {
        // setIsEdit(true);
        setModalAddAction(true);
        setModalTitleValue('Add New');
      } else {
        setModalAddAction(false);
        setModalTitleValue('Edit');
      }

      (async () => {
        const data = await listAccess(value);
        setRows(data.accessesList);
      })();
    }
  }, [isOpen, value, isAdd]);

  const handleChange = (e) => {
    const input = e.currentTarget.name ? e.currentTarget : e.target;

    setModalData({
      ...modalData,
      [input.name]: input.value,
    });
  };

  const handleCheckboxToggle = (e, checkboxValue) => {
    const input = e.currentTarget.name ? e.currentTarget : e.target;

    setModalData({
      ...modalData,
      [input.name]:
        checkboxValue === true || checkboxValue === false
          ? checkboxValue
          : input.value,
    });
  };

  const options = {
    selectableRows: 'multiple',
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
      name: 'access',
      label: 'Access',
    },
    {
      name: 'subAccess',
      label: 'Sub Access',
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

  const handleOpen = (data, isAdd) => {
    if (isAdd) {
      data = {
        access: 0,
        subAccess: '',
      };
      setModalAddAction(true);
    } else {
      setModalAddAction(false);
    }
    setRowData(data);
    setOpen(true);
  };

  const handleAccessClose = async (data, isEdit) => {
    if (!data) {
      setOpen(false);
      return;
    }
    try {
      let valid = true;
      if (!data.access) {
        notifyError('Access is required.');
        valid = false;
      }
      if (!data.subAccess) {
        notifyError('Sub Access is required.');
        valid = false;
      }

      if (!valid) {
        return;
      }

      if (isEdit) {
        //EDIT
        const resp = await updateAccess(data);
        const rowsCopy = [...rows];
        const index = rows.indexOf(rowData);
        rowsCopy[index] = resp.access;
        setRows(rowsCopy);
        notifySuccess('Access has been updated.');
      } else {
        // ADD
        data.usrId = value.usrId;
        const resp = await createAccess(data);
        setRows([resp.access, ...rows]);
        notifySuccess('New Access has been added.');
      }
      setOpen(false);
    } catch (error) {
      notifyError(error.message);
      console.error(error);
    }
  };

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modalBackdrop}
      open={isOpen}
      onClose={() => {
        handleClose();
      }}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{ timeout: 500 }}
    >
      <Fade in={isOpen}>
        <div className={classes.fadeModalMd}>
          <Typography
            id="transition-modal-title"
            variant="h4"
            className={classes.textBold}
            gutterBottom
          >
            {modalTitleValue} User
          </Typography>
          <Box mt={5}>
            <form noValidate autoComplete="off">
              <div className={classes.grdRow}>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <TextField
                    fullWidth
                    required
                    name="name"
                    label="Name"
                    value={modalData.name}
                    onChange={handleChange}
                    inputProps={{ maxLength: 100 }}
                    InputLabelProps={{ shrink: true }}
                  />
                </div>
                <div className={classes.grdCell1}>
                  <TextField
                    fullWidth
                    required
                    name="email"
                    label="Email"
                    value={modalData.email}
                    onChange={handleChange}
                    inputProps={{ maxLength: 100 }}
                    InputLabelProps={{ shrink: true }}
                  />
                </div>
              </div>
              <div className={classes.grdRow}>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <TextField
                    fullWidth
                    required
                    name="password"
                    label="Password"
                    type="password"
                    autoComplete="new-password"
                    value={modalData.password}
                    onChange={handleChange}
                    inputProps={{ maxLength: 200 }}
                    InputLabelProps={{ shrink: true }}
                  />
                </div>
                <div className={classes.grdCell1}>
                  <TextField
                    fullWidth
                    required
                    name="passwordConfirm"
                    label="Confirm Password"
                    type="password"
                    autoComplete="new-password"
                    value={modalData.passwordConfirm}
                    onChange={handleChange}
                    inputProps={{ maxLength: 200 }}
                    InputLabelProps={{ shrink: true }}
                  />
                </div>
              </div>
              <div className={classes.grdRow}>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <SelectDefaultPageAccess
                    required={true}
                    name="defaultAccess"
                    label="Default Page Access"
                    value={modalData.defaultAccess}
                    onChange={handleChange}
                    inputProps={{ maxLength: 4 }}
                  ></SelectDefaultPageAccess>
                </div>
                <div className={classes.grdCell1}>
                  <TextFieldMobileNo
                    required
                    name="mobileNo"
                    label="Mobile No"
                    value={modalData.mobileNo}
                    onChange={handleChange}
                    onInput={(e) => {
                      e.target.value = Math.max(0, parseInt(e.target.value))
                        .toString()
                        .slice(0, 11);
                    }}
                  ></TextFieldMobileNo>
                </div>
              </div>
              <div className={classes.grdRow}>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <SelectSystemCode
                    required={true}
                    name="userType"
                    label="User Type"
                    type="User Type"
                    value={modalData.userType}
                    onChange={handleChange}
                  ></SelectSystemCode>
                </div>
                <div className={classes.grdCell1}>
                  <SelectSystemCode
                    required={true}
                    name="status"
                    label="Status"
                    type="Status"
                    subType="AI"
                    value={modalData.status}
                    onChange={handleChange}
                  ></SelectSystemCode>
                </div>
              </div>
              <div className={classes.grdRow}>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  {modalData.userType === 'Client' && (
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="admin"
                          checked={modalData.admin}
                          onChange={handleCheckboxToggle}
                        />
                      }
                      label="Admin"
                    />
                  )}
                </div>
                <div className={classes.grdCell1}>
                  <InputLabel>Send code authentication via:</InputLabel>
                  <RadioGroup
                    style={{ flexDirection: 'row' }}
                    name="authenticationMode"
                    value={modalData.authenticationMode}
                    onChange={handleChange}
                  >
                    <FormControlLabel
                      name="authenticationMode"
                      label="Text"
                      value="Text"
                      control={<Radio />}
                    />
                    <FormControlLabel
                      name="authenticationMode"
                      label="Email"
                      value="Email"
                      control={<Radio />}
                    />
                  </RadioGroup>
                </div>
              </div>
              <div className={classes.grdRow}>
                {modalData.admin === true && modalData.userType === 'Client' && (
                  <div className={classes.grdCell1}>
                    <SelectCorrespondent
                      required={true}
                      name="correspondent"
                      label="Correspondent"
                      value={modalData.correspondent}
                      onChange={handleChange}
                    ></SelectCorrespondent>
                  </div>
                )}
                <div
                  className={classes.grdCell1}
                  style={{ marginRight: 30 }}
                ></div>
              </div>
              <div className={classes.grdCellNone} style={{ marginRight: 10 }}>
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
              <Box component="div" mt={2}>
                <Table
                  title={'Access List'}
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
                      handleClose(modalData, modalAddAction);
                    }}
                  >
                    Save
                  </Button>
                </div>
              </div>
            </form>
          </Box>
          {open && (
            <AdministratorAccessModal
              onClose={handleAccessClose}
              open={open}
              add={modalAddAction}
              value={rowData}
            ></AdministratorAccessModal>
          )}
        </div>
      </Fade>
    </Modal>
  );
}
