import React, { useEffect, useState } from 'react';
import { notifyError } from 'components/Notification/Notification';
import CheckIcon from '@material-ui/icons/Check';
import { Close as CloseIcon } from '@material-ui/icons';
import {
  Modal,
  Backdrop,
  Fade,
  Box,
  Tooltip,
  IconButton,
} from '@material-ui/core';
import { listTransferAgent } from '../../../services/TransferAgentService';
import Table from 'components/Table/Table';
import useStyles from '../../../styles';

export default function SelectTransferAgentModal({
  onClose: handleClose,
  open: isOpen,
}) {
  const classes = useStyles();
  const [rows, setRows] = useState([]);
  const options = {
    selectableRows: 'single',
    customToolbarSelect: (selectedRows) => {
      return (
        <div
          className={classes.grdRow}
          style={{ margin: 0, padding: 0, marginRight: 20 }}
        >
          <div align={'left'} className={classes.grdCell1}>
            <Tooltip title="Select" arrow>
              <div>
                <IconButton
                  aria-label="select transfer agent"
                  onClick={() =>
                    handleClose(rows[selectedRows.data[0].dataIndex])
                  }
                >
                  <CheckIcon />
                </IconButton>
              </div>
            </Tooltip>
          </div>
        </div>
      );
    },
    textLabels: {
      selectedRows: {
        text: 'select this transfer agent',
      },
    },
  };

  const columns = [
    {
      name: 'agentName',
      label: 'Agent Name',
    },
    {
      name: 'address',
      label: 'Address',
    },
    {
      name: 'city',
      label: 'City',
    },
    {
      name: 'state',
      label: 'State',
    },
    {
      name: 'zipCode',
      label: 'Zip Code',
    },
    {
      name: 'country',
      label: 'Country',
    },
    {
      name: 'contactNo',
      label: 'Contact No',
    },
    {
      name: 'note',
      label: 'Note',
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

  useEffect(() => {
    if (isOpen) {
      (async () => {
        try {
          const { transferAgentsList } = await listTransferAgent();
          setRows(transferAgentsList);
        } catch (error) {
          notifyError(error.message);
        }
      })();
    }
  }, [isOpen]);

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
          <Box>
            <Table
              title={'Transfer Agent Lookup'}
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
        </div>
      </Fade>
    </Modal>
  );
}
