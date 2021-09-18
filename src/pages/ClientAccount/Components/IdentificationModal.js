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
} from '@material-ui/core';
import SelectTaxCountry from '../../../components/AutoComplete/SelectTaxCountry';
import SelectTaxIdType from '../../../components/Dropdown/SelectTaxIdType';
import SelectSystemCode from '../../../components/Dropdown/SelectSystemCode';
import { dateProtoObjectToString } from '../../../services/ConvertService';
import InputMask from 'react-input-mask';
import ImageDropZone from '../../../components/Misc/ImageDropZone';

export default function IdentificationModal({
  onClose: handleClose,
  open: isOpen,
  importMode: isImport,
  value,
  validation,
}) {
  const classes = useStyles();
  const [modalData, setModalData] = useState({
    ownerId: value.ownerId,
    type: '',
    id: '',
    countryOfIssuance: '',
    imgGovernmentId: '',
    issueDate: '',
    expirationDate: '',
    status: true,
  });
  const [isEdit, setIsEdit] = React.useState(false);
  const [maskValue, setMaskValue] = React.useState('999999999');
  const taxIdMaskRef = React.createRef();
  const [initialFile, setInitialFile] = useState({});
  const [mounted, setMounted] = React.useState(false);

  const setupData = async (value) => {
    let valueCopy = { ...value };
    valueCopy.expirationDate = dateProtoObjectToString(
      valueCopy.expirationDate
    );
    valueCopy.issueDate = dateProtoObjectToString(valueCopy.issueDate);
    if (valueCopy.imgGovernmentId || valueCopy.imgGovernmentId !== '') {
      await fetch(valueCopy.imgGovernmentId)
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

    setModalData({ ...valueCopy });
  };

  useEffect(() => {
    if (isOpen || !mounted) {
      setupData(value);

      if (isImport || value.identificationId) {
        setIsEdit(true);
      }

      handleTaxIdMask(value.type);
    }
    return () => {
      setMounted(true);
    };
    // eslint-disable-next-line
  }, [isOpen, value, isImport, mounted]);

  const handleChange = (e) => {
    const input = e.currentTarget.name ? e.currentTarget : e.target;

    if (input.name === 'type') {
      modalData.countryOfIssuance = ['SSN', 'TIN'].includes(input.value)
        ? 'US'
        : '';
    }

    setModalData({
      ...modalData,
      [input.name]: ['id'].includes(input.name)
        ? input.value.toUpperCase()
        : input.value,
    });
  };

  const handleTaxIdMask = (type) => {
    if (type === 'SSN') {
      setMaskValue('999-99-9999');
    } else if (type === 'TIN') {
      setMaskValue('99-9999999');
    } else if (type === 'Passport' || type === 'Driver License') {
      setMaskValue('*********');
    }
  };

  const handleUploadedPhotoStatus = ({ meta, file }, status) => {
    if (status === 'done') {
      const reader = new FileReader();

      reader.addEventListener(
        'load',
        function() {
          setModalData({ ...modalData, imgGovernmentId: reader.result });
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
            {isEdit ? 'Edit' : 'Add New'} Identification
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
                      label="Government ID"
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
                      <SelectTaxIdType
                        required={true}
                        name="type"
                        label="Type"
                        type="Identification"
                        itemLabel="code"
                        country={modalData.taxCountry}
                        value={modalData.type}
                        onChange={(e) => {
                          handleTaxIdMask(e.target.value);
                          handleChange(e);
                        }}
                      ></SelectTaxIdType>
                    </div>
                    <div
                      className={classes.grdCell1}
                      style={{ marginRight: 30 }}
                    >
                      <InputMask
                        mask={maskValue}
                        value={modalData.id}
                        ref={taxIdMaskRef}
                        beforeMaskedValueChange={(newState, oldState) => {
                          if (newState.value !== oldState.value) {
                            handleChange({
                              currentTarget: {
                                name: 'id',
                                value: newState.value,
                              },
                            });
                          }
                          return {
                            value: newState.value,
                            selection: newState.selection,
                          };
                        }}
                      >
                        {() => (
                          <TextField
                            // error={!modalData.id}
                            fullWidth={true}
                            required={true}
                            id="id"
                            name="id"
                            label="ID"
                            InputLabelProps={{ shrink: true }}
                          />
                        )}
                      </InputMask>
                    </div>
                  </div>
                  <div className={classes.grdRow}>
                    <div
                      className={classes.grdCell1}
                      style={{ marginRight: 30 }}
                    >
                      <SelectTaxCountry
                        required={true}
                        name="countryOfIssuance"
                        label="Country Of Issuance"
                        value={modalData.countryOfIssuance}
                        onChange={(selected) => {
                          setModalData({
                            ...modalData,
                            countryOfIssuance: selected?.code,
                          });
                        }}
                      ></SelectTaxCountry>
                    </div>
                    <div
                      className={classes.grdCell1}
                      style={{ marginRight: 30 }}
                    ></div>
                  </div>
                  {modalData.type === 'TIN' ||
                  modalData.type === 'SSN' ||
                  modalData.type === 'International TIN' ? null : (
                    <div className={classes.grdRow}>
                      <div
                        className={classes.grdCell1}
                        style={{ marginRight: 30 }}
                      >
                        <TextField
                          fullWidth
                          required={true}
                          name="issueDate"
                          label="Issue Date"
                          type="date"
                          value={modalData.issueDate}
                          onChange={handleChange}
                          InputLabelProps={{ shrink: true }}
                        />
                      </div>
                      <div
                        className={classes.grdCell1}
                        style={{ marginRight: 30 }}
                      >
                        <TextField
                          fullWidth
                          required={true}
                          name="expirationDate"
                          label="Expiration Date"
                          type="date"
                          value={modalData.expirationDate}
                          onChange={handleChange}
                          InputLabelProps={{ shrink: true }}
                        />
                      </div>
                    </div>
                  )}
                  <div className={classes.grdRow}>
                    <div className={classes.grdCell1}>
                      <SelectSystemCode
                        required={true}
                        name="status"
                        label="Status"
                        type="Status"
                        subType="Client Setup"
                        value={modalData.status}
                        onChange={handleChange}
                      ></SelectSystemCode>
                    </div>
                    <div
                      className={classes.grdCell1}
                      style={{ marginRight: 30 }}
                    ></div>
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
