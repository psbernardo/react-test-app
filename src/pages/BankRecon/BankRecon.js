import React from 'react';
import { Typography, Breadcrumbs, Box } from '@material-ui/core';
import BankReconTable from './Components/BankReconTable';
import useStyles from '../../styles';

export default function BankRecon(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.pageContainer}>
        <Box>
          <Typography
            variant="h2"
            className={classes.textBold}
            align="left"
            gutterBottom={true}
          >
            Bank Recon
          </Typography>
          <Breadcrumbs aria-label="breadcrumb">
            <span color="inherit">Balance</span>
            <span color="inherit">Bank</span>
            <Typography color="primary">Bank Recon</Typography>
          </Breadcrumbs>
        </Box>
        <Box mt={2}>
          <BankReconTable params={props} />
        </Box>
      </div>
    </React.Fragment>
  );
}
