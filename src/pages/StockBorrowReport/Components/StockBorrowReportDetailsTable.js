import React, { useState, useEffect } from 'react';
import useStyles from '../../../styles';
import {
  Modal,
  Backdrop,
  Fade,
  Box,
  TextField,
  Typography,
  Button,
} from '@material-ui/core';
import Table, { columnType } from 'components/Table/Table';
import { listReportDetail } from '../../../services/StockBorrowReportService';

export default function StockBorrowDetailsTable({
  onClose: handleClose,
  open: isOpen,
  value,
  edit: isEdit,
}) {
  const classes = useStyles();

  const [rows, setRows] = useState([]);
  const [modalData, setModalData] = useState({});

  const columns = [
    {
      name: 'correspondent',
      label: 'Correspondent',
    },
    {
      name: 'accountNo',
      label: 'Account No',
    },
    {
      name: 'accountName',
      label: 'Account Name',
    },
    {
      name: 'settlementObligation',
      label: 'Settlement Obligation',
      type: columnType.amount,
    },
    {
      name: 'tradeObligation',
      label: 'Trade Obligation',
      type: columnType.amount,
    },
    {
      name: 'preFailCredit',
      label: 'Pre Fail Credit',
      type: columnType.amount,
    },
  ];

  const options = {
    selectableRows: 'none',
  };

  useEffect(
    () => {
      async function init() {
        const data = await listReportDetail(value);
        console.log(data);
        setRows(data.reportdetailsList);
        setModalData(value);
      }

      if (isOpen) {
        init();
      }
    }, // eslint-disable-next-line
    [isOpen]
  );

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
            {isEdit ? 'Edit' : 'View'} Report
          </Typography>
          <Box id="transition-modal-description">
            <form className={classes.modalForm} noValidate autoComplete="off">
              <Box component="div" mt={2}>
                <Table
                  title="STOCK BORROW DETAILS"
                  data={rows}
                  columns={columns}
                  options={options}
                />
              </Box>
              <div className={classes.grdRow} style={{ marginTop: 15 }}>
                <TextField
                  name="note"
                  label="Note"
                  fullWidth
                  InputProps={{
                    readOnly: !isEdit,
                  }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  value={modalData.note || ''}
                  onChange={handleChange}
                />
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
