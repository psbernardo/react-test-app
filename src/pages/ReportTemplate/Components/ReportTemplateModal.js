import React, { useState, useEffect } from 'react';
import useStyles from '../../../styles';

import {
  Typography,
  Button,
  Modal,
  Backdrop,
  Fade,
  Box,
  InputLabel,
  TextField,
} from '@material-ui/core';
import { AddAPhoto as AddAPhotoIcon } from '@material-ui/icons';
import SelectCorrespondent from '../../../components/AutoComplete/SelectCorrespondent';
import CountriesSelect from '../../../components/AutoComplete/Countries';
import StateSelect from './../../../components/Dropdown/State';
import SelectSystemCode from 'components/Dropdown/SelectSystemCode';

export default function ReportTemplateModal({
  onClose: handleClose,
  open: isOpen,
  value,
}) {
  const classes = useStyles();
  const [modalData, setModalData] = useState({
    photo: '',
  });
  const [isEdit, setIsEdit] = React.useState(false);

  useEffect(() => {
    if (isOpen) {
      let modalValue = { ...value };
      setModalData(modalValue);
      if (value.templateId) {
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

  const selectPhoto = (e) => {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      setModalData({ ...modalData, photo: reader.result });
    };

    reader.readAsDataURL(file);
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
            {isEdit ? 'Edit' : 'Add New'} Report Template
          </Typography>
          <Box mt={5}>
            <form noValidate autoComplete="off">
              <div className={classes.grdRow}>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <div className={classes.grdRow}>
                    <div className={classes.grdCell1}>
                      <div className={classes.logoContainer}>
                        {modalData.photo ? (
                          <img
                            className={classes.uploadThumbnail}
                            src={modalData.photo}
                            alt="logo"
                          />
                        ) : (
                          <label className={classes.noThumbnailLabel}>
                            Please select an Image for report logo.
                          </label>
                        )}
                      </div>
                      <input
                        style={{ display: 'none' }}
                        accept="image/*"
                        id="input-photo"
                        type="file"
                        onChange={(e) => {
                          selectPhoto(e);
                        }}
                      />
                      <label htmlFor="input-photo">
                        <Button
                          variant="contained"
                          color="primary"
                          component="span"
                          size="large"
                          fullWidth
                          startIcon={<AddAPhotoIcon />}
                        >
                          Select Photo
                        </Button>
                      </label>
                    </div>
                  </div>
                  <div className={classes.grdRow}>
                    <div className={classes.grdCell1}>
                      <SelectCorrespondent
                        required={true}
                        name="correspondent"
                        value={modalData.correspondent}
                        onChange={handleChange}
                      ></SelectCorrespondent>
                    </div>
                  </div>
                  <div className={classes.grdRow}>
                    <div className={classes.grdCell1}>
                      <SelectSystemCode
                        name="status"
                        label="Status"
                        type="Status"
                        subType="AD"
                        value={modalData.status}
                        onChange={handleChange}
                      ></SelectSystemCode>
                    </div>
                  </div>
                </div>
                <div className={classes.grdCell1}>
                  <div className={classes.grdRow}>
                    <div className={classes.grdCell1}>
                      <TextField
                        name="address"
                        label="Address"
                        required={true}
                        fullWidth
                        InputLabelProps={{
                          shrink: true,
                        }}
                        value={modalData.address}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className={classes.grdRow}>
                    <div className={classes.grdCell1}>
                      <TextField
                        name="city"
                        label="City"
                        required={true}
                        fullWidth
                        InputLabelProps={{ shrink: true }}
                        value={modalData.city}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className={classes.grdRow}>
                    <div className={classes.grdCell1}>
                      <InputLabel shrink>State</InputLabel>
                      <StateSelect
                        name="state"
                        fullWidth
                        value={modalData.state}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className={classes.grdRow}>
                    <div className={classes.grdCell1}>
                      <TextField
                        name="zip"
                        label="Zip Code"
                        fullWidth
                        InputLabelProps={{
                          shrink: true,
                        }}
                        value={modalData.zip}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className={classes.grdRow}>
                    <div className={classes.grdCell1}>
                      <CountriesSelect
                        name="country"
                        labelid="country"
                        label="Country"
                        value={modalData.country}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
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
