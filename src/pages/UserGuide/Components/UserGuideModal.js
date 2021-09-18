import React, { useState, useEffect } from 'react';
import useStyles from '../../../styles';
import {
  Typography,
  Button,
  Modal,
  Backdrop,
  Fade,
  Box,
  CircularProgress,
} from '@material-ui/core';
import SelectPage from '../../../components/AutoComplete/SelectPage';
import TextEditor from '../../../components/TextEditor/TextEditor';
import FieldDefinitionTable from './FieldDefinitionTable';

export default function UserGuideModal({
  onClose: handleClose,
  open: isOpen,
  value,
  saving,
}) {
  const classes = useStyles();
  const [modalData, setModalData] = useState({});
  const [editorValue, setEditorValue] = useState('');
  const [isEdit, setIsEdit] = React.useState(false);

  useEffect(() => {
    if (isOpen) {
      let modalValue = { ...value };
      setModalData(modalValue);

      if (value.userGuideId) {
        setEditorValue(value.content);

        setIsEdit(true);
      }
    }
  }, [isOpen, value]);

  const handleChange = async (e) => {
    const input = e.currentTarget.name ? e.currentTarget : e.target;
    const modalDataCopy = { ...modalData };

    if (['pageName'].includes(input.name)) {
      modalDataCopy.pageId = input.pageId;
      modalDataCopy.pageName = input.value;
    }

    setModalData(modalDataCopy);
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
        <div className={classes.fadeModalFull}>
          <Typography
            id="transition-modal-title"
            variant="h4"
            className={classes.textBold}
            gutterBottom
          >
            {value.action !== 'Add' ? 'Edit' : 'Add New'} User Guide
          </Typography>
          <Box mt={5}>
            <form noValidate autoComplete="off">
              <div className={classes.grdRow}>
                <div className={classes.grdCell1}>
                  <SelectPage
                    required={true}
                    name="pageName"
                    label="Page Name"
                    value={modalData.pageName}
                    onChange={handleChange}
                  ></SelectPage>
                </div>
              </div>
              <div className={classes.grdRow}>
                <div className={classes.grdCell1}>
                  <TextEditor
                    setContents={editorValue}
                    onChange={setEditorValue}
                  ></TextEditor>
                </div>
              </div>
              <Box>
                <FieldDefinitionTable
                  open={isOpen}
                  value={value}
                  isEdit={isEdit}
                  modalLvl={1}
                ></FieldDefinitionTable>
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
                    disabled={saving}
                    onClick={() => {
                      handleClose(modalData, isEdit, editorValue);
                    }}
                    startIcon={
                      saving ? (
                        <CircularProgress
                          style={{ color: '#ffffff', height: 20, width: 20 }}
                        />
                      ) : null
                    }
                  >
                    {saving ? 'Saving...' : 'Save'}
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
