import React, { useState, useEffect } from 'react';
import useStyles from '../../../styles';
import SelectFilePathType from '../../../components/AutoComplete/SelectFilePathType';

import {
  Typography,
  Button,
  TextField,
  Modal,
  Backdrop,
  Fade,
  Box,
} from '@material-ui/core';
import { dateProtoObjectToString } from '../../../services/ConvertService';
export default function FilePathModal({
  onClose: handleClose,
  open: isOpen,
  value,
}) {
  const classes = useStyles();
  const [modalData, setModalData] = useState({});
  const [isEdit, setIsEdit] = React.useState(false);

  useEffect(() => {
    if (isOpen) {
      let modalValue = { ...value };
      modalValue.fromDate = dateProtoObjectToString(value.fromDate);
      modalValue.toDate = dateProtoObjectToString(value.toDate);

      setModalData(modalValue);
      if (value.filePathId) {
        setIsEdit(true);
      }
    }
  }, [isOpen, value]);

  const handleChange = (e) => {
    const input = e.currentTarget.name ? e.currentTarget : e.target;
    setModalData({
      ...modalData,
      [input.name]: input.value,
    });
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
            {isEdit ? 'Edit' : 'Add New'} File Path
          </Typography>
          <Box mt={5}>
            <form noValidate autoComplete="off">
              <div className={classes.grdRow}>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <SelectFilePathType
                    freeSolo={true}
                    required={true}
                    name="type"
                    label="Type"
                    value={modalData.type}
                    onChange={handleChange}
                    InputLabelProps={{ shrink: true }}
                  />
                </div>
                <div className={classes.grdCell1}>
                  <SelectFilePathType
                    freeSolo={true}
                    name="subType"
                    label="Sub Type"
                    field="sub_type"
                    value={modalData.subType}
                    onChange={handleChange}
                    InputLabelProps={{ shrink: true }}
                  />
                </div>
              </div>
              <div className={classes.grdRow}>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <SelectFilePathType
                    freeSolo={true}
                    name="filePath"
                    label="File Path"
                    field="file_path"
                    value={modalData.filePath}
                    onChange={handleChange}
                    InputLabelProps={{ shrink: true }}
                  />
                </div>
                <div className={classes.grdCell1}>
                  <SelectFilePathType
                    freeSolo={true}
                    name="fileNameFormat"
                    label="File Name Format"
                    field="file_name_format"
                    value={modalData.fileNameFormat}
                    onChange={handleChange}
                    InputLabelProps={{ shrink: true }}
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
        </div>
      </Fade>
    </Modal>
  );
}
