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
  InputLabel,
} from '@material-ui/core';
import SelectTaxCountry from '../../../components/AutoComplete/SelectTaxCountry';
import SelectSystemCode from '../../../components/Dropdown/SelectSystemCode';
import SelectAccountAddress from '../../../components/AutoComplete/SelectAccountAddress';
import ImageDropZone from '../../../components/Misc/ImageDropZone';
import { readAddress } from '../../../services/AccountAddressService';

export default function AddressModal({
  onClose: handleClose,
  open: isOpen,
  value,
  validation,
  importMode: isImport,
}) {
  const classes = useStyles();
  const [modalData, setModalData] = useState({});
  const [isEdit, setIsEdit] = React.useState(false);
  const [initialFile, setInitialFile] = useState({});

  const setupData = async (value) => {
    if (value.imgProofOfAddress || value.imgProofOfAddress !== '') {
      await fetch(value.imgProofOfAddress)
        .then(function(res) {
          return res.arrayBuffer();
        })
        .then(function(buf) {
          const file = new File([buf], 'image_data.jpg', {
            type: 'image/*',
          });
          setInitialFile(file);
        });
    } else {
      setInitialFile({});
    }

    setModalData({ ...value });
  };
  useEffect(() => {
    if (isOpen) {
      setupData(value);
      if (value.addressId) {
        setIsEdit(true);
      }
    }
  }, [isOpen, value]);

  const handleChange = (e) => {
    const input = e.currentTarget.name ? e.currentTarget : e.target;

    if (input.name === 'state') {
      modalData.country = [''].includes(input.value) ? '' : 'US';
    }

    setModalData({
      ...modalData,
      [input.name]: input.value,
    });
  };

  const handleAutoFill = async (addressId) => {
    const { address } = await readAddress(addressId);
    address.ownerId = value.ownerId;
    setModalData({ ...address });
  };

  const handleUploadedPhotoStatus = ({ meta, file }, status) => {
    if (status === 'done') {
      const reader = new FileReader();

      reader.addEventListener(
        'load',
        function() {
          setModalData({ ...modalData, imgProofOfAddress: reader.result });
        },
        false
      );

      reader.readAsDataURL(file);
    }
  };
  const handleUploadPhoto = (files) => {
    console.log(files.map((f) => f.meta));
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
      BackdropProps={{ timeout: 500 }}
    >
      <Fade in={isOpen}>
        <div className={classes.fadeModalLg}>
          <Typography
            id="transition-modal-title"
            className={classes.textBold}
            variant="h4"
            gutterBottom
          >
            {isEdit ? 'Edit' : 'Add New '} Address
          </Typography>
          <Box mt={5}>
            <form className={classes.modalForm} noValidate autoComplete="off">
              <div className={classes.grdRow}>
                {!isImport ? (
                  <div
                    className={classes.grdCellNone}
                    style={{ marginRight: 20 }}
                  >
                    <ImageDropZone
                      error={validation.imgProofOfAddress}
                      label="Proof of Address"
                      onChangeStatus={handleUploadedPhotoStatus}
                      onSubmit={handleUploadPhoto}
                      initialFiles={[initialFile]}
                    />
                  </div>
                ) : null}
                <div className={classes.grdCell1}>
                  <div className={classes.grdRow}>
                    <div
                      className={classes.grdCell1}
                      style={{ marginRight: 30 }}
                    >
                      <SelectSystemCode
                        error={validation.addressType}
                        required={true}
                        name="addressType"
                        label="Address Type"
                        type="Address Type"
                        value={modalData.addressType}
                        onChange={handleChange}
                      ></SelectSystemCode>
                    </div>
                    <div className={classes.grdCell1}>
                      {isEdit ? (
                        <TextField
                          error={validation.address1}
                          fullWidth
                          required={true}
                          name="address1"
                          label="Address 1"
                          value={modalData.address1 || ''}
                          onChange={handleChange}
                          inputProps={{ maxLength: 300 }}
                          InputLabelProps={{ shrink: true }}
                        />
                      ) : (
                        <SelectAccountAddress
                          error={validation.address1}
                          onChange={handleAutoFill}
                          onInputChange={handleChange}
                          label="Address 1 "
                        />
                      )}
                    </div>
                  </div>
                  <div className={classes.grdRow}>
                    <div
                      className={classes.grdCell1}
                      style={{ marginRight: 30 }}
                    >
                      <TextField
                        fullWidth
                        name="address2"
                        label="Address 2"
                        value={modalData.address2 || ''}
                        onChange={handleChange}
                        inputProps={{ maxLength: 300 }}
                        InputLabelProps={{ shrink: true }}
                      />
                    </div>
                    <div className={classes.grdCell1}>
                      <TextField
                        fullWidth
                        name="address3"
                        label="Address 3"
                        value={modalData.address3 || ''}
                        onChange={handleChange}
                        inputProps={{ maxLength: 300 }}
                        InputLabelProps={{ shrink: true }}
                      />
                    </div>
                  </div>
                  <div className={classes.grdRow}>
                    <div
                      className={classes.grdCell1}
                      style={{ marginRight: 30 }}
                    >
                      <TextField
                        error={validation.city}
                        fullWidth
                        required={true}
                        name="city"
                        label="City"
                        value={modalData.city || ''}
                        onChange={handleChange}
                        inputProps={{ maxLength: 50 }}
                        InputLabelProps={{ shrink: true }}
                      />
                    </div>
                    <div className={classes.grdCell1}>
                      <SelectSystemCode
                        error={validation.state}
                        name="state"
                        label="State"
                        type="State"
                        value={modalData.state || ''}
                        onChange={handleChange}
                      ></SelectSystemCode>
                    </div>
                  </div>
                  <div className={classes.grdRow}>
                    <div
                      className={classes.grdCell1}
                      style={{ marginRight: 30 }}
                    >
                      <TextField
                        fullWidth
                        name="zip"
                        label="Zip"
                        value={modalData.zip || ''}
                        onChange={handleChange}
                        inputProps={{ maxLength: 10 }}
                        InputLabelProps={{ shrink: true }}
                      />
                    </div>
                    <div className={classes.grdCell1}>
                      <SelectTaxCountry
                        error={validation.country}
                        required={true}
                        name="country"
                        label="Country"
                        value={modalData.country || ''}
                        key={modalData.country}
                        onChange={(selected) => {
                          setModalData({
                            ...modalData,
                            country: selected?.code,
                          });
                        }}
                      ></SelectTaxCountry>
                    </div>
                  </div>
                  <div className={classes.grdRow}>
                    <div className={classes.grdCell1}>
                      <SelectSystemCode
                        error={validation.country}
                        required={true}
                        name="status"
                        label="Status"
                        type="Status"
                        subType="Client Setup"
                        value={modalData.status || ''}
                        onChange={handleChange}
                      ></SelectSystemCode>
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
