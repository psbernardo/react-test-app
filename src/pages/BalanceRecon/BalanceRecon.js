/*ReactJS*/
import React from 'react';

/*Material UI Components*/
import { Typography, Breadcrumbs, Box } from '@material-ui/core';

/*Styles*/
import useStyles from '../../styles';

/*Table Components*/
import BalanceReconTable from './Components/BalanceReconTable';

export default function BalanceRecon(props) {
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
            Balance Recon
          </Typography>
          <Breadcrumbs aria-label="breadcrumb">
            <span color="inherit">Transaction</span>
            <span color="inherit">Omnibus</span>
            <Typography color="primary">Balance Recon</Typography>
          </Breadcrumbs>
        </Box>
        <Box mt={2}>
          <BalanceReconTable params={props} />
        </Box>
      </div>
    </React.Fragment>
  );
}
