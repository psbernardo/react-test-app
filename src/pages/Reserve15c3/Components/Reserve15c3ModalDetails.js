import React, { useState, useEffect } from 'react';
import useStyles from '../../../styles';
import {
  Modal,
  Backdrop,
  Fade,
  Box,
  IconButton,
} from '@material-ui/core';
import { Close as CloseIcon } from '@material-ui/icons';
import Table, { columnType } from 'components/Table/Table';
import {
    viewReserve15c3,
  } from '../../../services/Reserve15c3Service';

export default function Reserve15c3ModalDetails({
  onClose: handleClose,
  open: isOpen,
  value,
}) {
  const classes = useStyles();

  const [rows, setRows] = useState([]);
 
  const columns = [
    {
      name: 'settleDate',
      label: 'Settle Date',
      type: columnType.date,
    },
    {
      name: 'accountNo',
      label: 'Account No.',
    },
    {
      name: 'accountName',
      label: 'Account Name',
    },
    {
      name: 'cashBalance',
      label: 'Cash Balance',
      type: columnType.amount,
    },
    {
      name: 'shortMarketValue',
      label: 'Short Market Value',
      type: columnType.amount,
    },
    {
      name: 'lognMarketValue',
      label: 'Long Market Value',
      type: columnType.amount,
    },
    {
      name: 'equity',
      label: 'Equity',
      type: columnType.amount,
    },
    {
      name: 'adjustedBalance',
      label: 'Adjusted Balance',
      type: columnType.amount,
    },
    {
      name: 'a-selectAll',
      label: 'Select All',
      options: {
        display: true,
        print: false,
        download: false,
        filter: false,
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
        const data = await viewReserve15c3(value);
        setRows(data.reserve15c3detailsList);
      }

      if (isOpen) {
        init();
      }
    }, // eslint-disable-next-line
    [isOpen]
  );



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
        <div className={classes.tableModalFull}>
          <Box id="transition-modal-description">
            <Box component="div" mt={2}>
              <Table
                title="Reserve 15C3 Details"
                data={rows}
                columns={columns}
                options={options}
              />
            </Box>
            <div className={classes.modalFooter} style={{ margin: 0 }}>
              <div className={classes.grdCellNone} style={{ marginRight: 10 }}>
                <div
                  className={classes.modalCloseIcon}
                  style={{ marginRight: 10 }}
                >
                  <IconButton
                    aria-label="close"
                    onClick={() => {
                      handleClose();
                    }}
                  >
                    <CloseIcon style={{ color: '#f1f1f1' }} />
                  </IconButton>
                </div>
              </div>
            </div>
          </Box>
        </div>
      </Fade>
    </Modal>
  );
}
