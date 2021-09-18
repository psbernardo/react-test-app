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
import { listDetailsProfitAndLoss } from '../../../services/ProfitAndLossService';

export default function ProfitAndLossTableDetailsTable({
  onClose: handleClose,
  open: isOpen,
  value,
}) {
  const classes = useStyles();

  const [rows, setRows] = useState([]);
  const [modalData, setModalData] = useState({});

  const columns = [
    {
      name: 'processDate',
      label: 'Process Date',
      type: columnType.date,
    },
    {
      name: 'buyDate',
      label: 'Buy Date',
      type: columnType.date,
    },
    {
      name: 'sellDate',
      label: 'Sell Date',
      type: columnType.date,
    },
    {
      name: 'buyTrnsId',
      label: 'Buy Trns ID',
      options: {
        display: false,
      },
    },
    {
      name: 'sellTrnsId',
      label: 'Sell Trns ID',
    },
    {
      name: 'correspondent',
      label: 'Correspondent',
    },
    {
      name: 'branch',
      label: 'Branch',
    },
    {
      name: 'accountNo',
      label: 'Account No',
    },
    {
      name: 'masterAccountNo',
      label: 'Master Account No',
    },
    {
      name: 'rep',
      label: 'Rep',
    },
    {
      name: 'assetType',
      label: 'Asset Type',
    },
    {
      name: 'symbol',
      label: 'Symbol',
    },
    {
      name: 'symbolDescription',
      label: 'Symbol Description',
    },
    {
      name: 'plType',
      label: 'PL Type',
    },
    {
      name: 'entryType',
      label: 'Entry Type',
    },
    {
      name: 'closedQty',
      label: 'Closed Qty',
      type: columnType.quantity,
    },
    {
      name: 'buyPrice',
      label: 'Buy Price',
      type: columnType.amount,
    },
    {
      name: 'sellPrice',
      label: 'Sell Price',
      type: columnType.amount,
    },
    {
      name: 'buyNetAmt',
      label: 'Buy Amount Price',
      type: columnType.amount,
    },
    {
      name: 'sellNetAmt',
      label: 'Sell Amount Price',
      type: columnType.amount,
    },
    {
      name: 'realized',
      label: 'Realized',
      type: columnType.amount,
    },
    {
      name: 'positionQty',
      label: 'Position QTY',
      type: columnType.quantity,
    },
    {
      name: 'positionPrice',
      label: 'Position Price',
      type: columnType.amount,
    },
    {
      name: 'positionValue',
      label: 'Position Value',
      type: columnType.amount,
    },
    {
      name: 'closingPrice',
      label: 'Closing Price',
      type: columnType.amount,
    },
    {
      name: 'marketValue',
      label: 'Market Value',
      type: columnType.amount,
    },
    {
      name: 'unrealized',
      label: 'Unrealized',
      type: columnType.amount,
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

  const options = {
    selectableRows: 'none',
  };

  useEffect(
    () => {
      async function init() {
        const data = await listDetailsProfitAndLoss(value);
        setRows(data.profitandlossdetailsList);
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
            View Report
          </Typography>
          <Box id="transition-modal-description">
            <form className={classes.modalForm} noValidate autoComplete="off">
              <Box component="div" mt={2}>
                <Table
                  title="PROFIT AND LOSS DETAILS"
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
              </div>
            </form>
          </Box>
        </div>
      </Fade>
    </Modal>
  );
}
