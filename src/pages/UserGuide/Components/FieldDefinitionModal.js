import React, { useState, useEffect } from 'react';
import useStyles from '../../../styles';
import {
  Typography,
  Modal,
  Backdrop,
  Fade,
  Box,
  Button,
  TextField,
} from '@material-ui/core';
import { listFieldDefinition } from '../../../services/FieldDefinitionService';
import FieldDefinitionTable from './FieldDefinitionTable';
import TextEditor from '../../../components/TextEditor/TextEditor';

export default function FieldDefinitionModal({
  onClose: handleClose,
  open: isOpen,
  value,
  isEditValues,
}) {
  const classes = useStyles();

  const [modalData, setModalData] = useState({});
  const [rows, setRows] = useState([]);
  const [editorValue, setEditorValue] = useState('');

  async function fetchData() {
    const data = await listFieldDefinition(
      value.userGuideId ? value.userGuideId : ''
    );
    setRows(data.fieldDefinitionsList);
  }

  useEffect(() => {
    if (isOpen) {
      if (isEditValues) {
        let modalValue = { ...value };
        setModalData(modalValue);
        setEditorValue(value.description);
      } else {
        if (value.userGuideId) {
          fetchData();
        } else {
          setRows(value);
        }
      }
    }
  }, [isOpen, value]);

  const handleChange = async (e) => {
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
        handleClose(false, false, '', '');
      }}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{ timeout: 500 }}
    >
      <Fade in={isOpen}>
        <div className={classes.fadeModalLg}>
          <Typography
            id="transition-modal-title"
            variant="h4"
            className={classes.textBold}
          >
            {isEditValues
              ? 'Edit Field Definition'
              : 'Add/Remove Field Definitions'}
          </Typography>
          <Box>
            {isEditValues ? (
              <Box mt={5}>
                <div className={classes.grdRow}>
                  <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                    <TextField
                      fullWidth
                      name="sampleValue"
                      label="Sample Value"
                      value={modalData.sampleValue}
                      onChange={handleChange}
                      InputLabelProps={{ shrink: true }}
                    />
                  </div>
                  <div className={classes.grdCell1}>
                    <TextField
                      fullWidth
                      name="ordinalPosition"
                      label="Ordinal Position"
                      value={modalData.ordinalPosition}
                      onChange={handleChange}
                      InputLabelProps={{ shrink: true }}
                    />
                  </div>
                </div>
                <div className={classes.grdRow}>
                  <div className={classes.grdCell1}>
                    <TextEditor
                      label="Description"
                      setContents={editorValue}
                      onChange={setEditorValue}
                    ></TextEditor>
                  </div>
                </div>
              </Box>
            ) : (
              <FieldDefinitionTable
                open={isOpen}
                value={rows}
                isEdit={true}
                userGuideId={value.userGuideId}
                modalLvl={2}
              ></FieldDefinitionTable>
            )}
          </Box>
          <div className={classes.modalFooter}>
            <div className={classes.grdCellNone} style={{ marginRight: 10 }}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                onClick={() => {
                  handleClose(true, false, '', '');
                }}
              >
                Close
              </Button>
            </div>
            {isEditValues ? (
              <div className={classes.grdCellNone}>
                <Button
                  variant="contained"
                  color="secondary"
                  size="large"
                  onClick={() => {
                    handleClose(false, true, modalData, editorValue);
                  }}
                >
                  Save
                </Button>
              </div>
            ) : null}
          </div>
        </div>
      </Fade>
    </Modal>
  );
}
