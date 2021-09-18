import React, { useState, useEffect } from 'react';
import { IconButton, Modal, Backdrop, Fade, Box } from '@material-ui/core';
import { Close as CloseIcon } from '@material-ui/icons';
import { listAccessors } from '../../../services/ClientAccountAccessService';

import Table from 'components/Table/Table';
import useStyles from '../../../styles';

export default function ClientAccountAccessorModal({
  onClose: handleClose,
  open: isOpen,
  id,
}) {
  const classes = useStyles();
  const [rows, setRows] = useState([]);
  const [mounted, setMounted] = React.useState(false);
  const options = {
    selectableRows: 'none',
  };

  const columns = [
    {
      name: 'name',
      label: 'Name',
    },
    {
      name: 'email',
      label: 'Email',
    },
    {
      name: 'mobileNo',
      label: 'Mobile No',
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

  const setListOfAccessor = async () => {
    const data = await listAccessors(id);
    setRows(data.accountAccessorsList);
  };

  useEffect(() => {
    if (isOpen && !mounted) {
      setListOfAccessor();
    }
    // eslint-disable-next-line
    return () => {
      setMounted(true); // This worked for me
    };
    // eslint-disable-next-line
  }, [isOpen, mounted]);

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
        <div className={classes.tableModalFullMd}>
          <Box component="div">
            <Table
              title="Accessors List"
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
