import React, { useState, useEffect } from 'react';
import { IconButton, Modal, Backdrop, Fade, Box } from '@material-ui/core';
import { Close as CloseIcon } from '@material-ui/icons';
import { listParameterAudit } from '../../../services/ParameterService';

import Table, { columnType } from 'components/Table/Table';
import useStyles from '../../../styles';

export default function ParameterAuditModal({
  onClose: handleClose,
  open: isOpen,
  value: parameterId,
}) {
  const classes = useStyles();
  const [rows, setRows] = useState([]);
  const [mounted, setMounted] = React.useState(false);
  const options = {
    selectableRows: 'none',
  };

  const columns = [
    {
      name: 'report',
      label: 'Report',
    },
    {
      name: 'field',
      label: 'Field',
    },
    {
      name: 'sign',
      label: 'Sign',
    },
    {
      name: 'value',
      label: 'Value',
      type: columnType.amount,
    },
    {
      name: 'modifiedBy',
      label: 'Modified By',
      options: {
        display: false,
      },
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
    const setAuditData = async () => {
      const { parameterList } = await listParameterAudit(parameterId);
      setRows(parameterList);
      console.log(parameterList);
    };

    if (isOpen && !mounted) {
      setAuditData();
    }
    // eslint-disable-next-line
    return () => {
      setMounted(true); // This worked for me
    };
  }, [isOpen, mounted, parameterId]);

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
          <Box component="div">
            <Table
              title="PARAMETER AUDIT LOG"
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
