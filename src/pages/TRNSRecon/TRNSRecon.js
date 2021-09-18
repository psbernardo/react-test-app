/*ReactJS*/
import React from 'react';

/*Material UI Components*/
import { Typography, Breadcrumbs, Box } from '@material-ui/core';

/*Styles*/
import useStyles from '../../styles';

/*Table Components*/
import TRNSReconTable from './Components/TRNSReconTable';

export default function TRNSRecon(props) {
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
            TRNS Recon
          </Typography>
          <Breadcrumbs aria-label="breadcrumb">
            <span color="inherit">Transaction</span>
            <span color="inherit">Omnibus</span>
            <Typography color="primary">Transaction Reconciliation</Typography>
          </Breadcrumbs>
        </Box>
        <Box mt={2}>
          <TRNSReconTable params={props} />
        </Box>
      </div>
    </React.Fragment>
  );
}
