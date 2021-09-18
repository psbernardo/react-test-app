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
  InputLabel,
  TextField,
} from '@material-ui/core';
import SelectPage from '../../../components/AutoComplete/SelectPage';
import TextEditor from '../../../components/TextEditor/TextEditor';
// import FieldDefinitionTable from './FieldDefinitionTable';

export default function NonMroModal({
  onClose: handleClose,
  open: isOpen,
  value,
  saving,
}) {
  const classes = useStyles();
  const [modalData, setModalData] = useState({});
  const [editorValue, setEditorValue] = useState('');
  const [editorValue2, setEditorValue2] = useState('');
  const [isEdit, setIsEdit] = React.useState(false);

  useEffect(() => {
    if (isOpen) {
      let modalValue = { ...value };
      setModalData(modalValue);

      if (value.faqId) {
        // setEditorValue(value.question);
        setEditorValue2(value.answer);
        setIsEdit(true);
      }
    }
  }, [isOpen, value]);

  const handleDownload = () => {
    let messageKey = '';
    var element = document.createElement('a');
    element.setAttribute(
      'href',
      'data:text/plain;charset=utf-8,' + encodeURIComponent(modalData.text)
    );
    element.setAttribute('download', modalData.fileDownload);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
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
            Preview {modalData.fileName}
          </Typography>
          <Box mt={5}>
            <form noValidate autoComplete="off">
              <div className={classes.grdRow}>
                <div
                  className={classes.grdCell1}
                  style={{
                    whiteSpace: 'pre-wrap',
                    maxHeight: '600px',
                    overflow: 'scroll',
                  }}
                >
                  {modalData.text}
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
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    onClick={() => {
                      handleDownload();
                    }}
                  >
                    Download
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
