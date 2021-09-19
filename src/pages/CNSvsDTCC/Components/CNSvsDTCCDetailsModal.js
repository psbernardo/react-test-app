import React, { useState, useEffect } from 'react';
import useStyles from '../../../styles';
import Table, { columnType } from 'components/Table/Table';
import { IconButton, Modal, Backdrop, Fade, Box } from '@material-ui/core';
import { listCNSvsDTCCDetails } from '../../../services/CNSvsDTCCService';
import { Close as CloseIcon } from '@material-ui/icons';

export default function CNSvsDTCCDetailsModal({
  onClose: handleClose,
  open: isOpen,
  value,
}) {
  const classes = useStyles();

  const [rows, setRows] = useState([]);

  const [columnOrder, setColumnOrder] = React.useState([2, 0, 1, 3]);

  const columns = [
    {
      name: 'accountNo', //1
      label: 'Account',
    },
    {
      name: 'correspondent', //6
      label: 'Correspondent',
    },
    {
      name: 'marginType', //2
      label: 'Margin Type',
    },
    {
      name: 'sdQty', //3
      label: 'SD QTY',
      type: columnType.quantity,
    },
    {
      name: 'sdValue', //4
      label: 'SD Value',
      type: columnType.quantity,
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
    columnOrder: columnOrder,
    filterType: 'select',
    responsive: 'standard',
    download: true,
    filter: true,
    search: true,
    print: false,
    sort: true,
    viewColumns: true,
    resizableColumns: false,
    draggableColumns: {
      enabled: true,
    },
    selectableRowsHeader: true,
    selectableRows: false,
    rowsPerPage: 10,
    // downloadOptions: {
    //   filename: 'BalanceRecon_' + moment().format('MMMM Do YYYY') + '.csv',
    // },
    onColumnOrderChange: (newColumnOrder) => {
      setColumnOrder(newColumnOrder);
    },
  };

  useEffect(
    () => {
      async function init() {
        const data = await listCNSvsDTCCDetails(value);
        setRows(data.cnsVsDtccDetailsList);

        console.log(value);
        console.log(data);
      }

      if (isOpen) {
        init();
      }
    },
    // eslint-disable-next-line
    [isOpen]
  );

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
        <div className={classes.tableModalFull}>
          <Box component="div" mt={2}>
            <Table
              title="CNS vs DTCC"
              data={rows}
              columns={columns}
              options={options}
            />
          </Box>

          <div className={classes.modalFooter}>
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
        </div>
      </Fade>
    </Modal>
  );
}