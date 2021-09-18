/*ReactJS*/
import React from 'react';

/*Material UI Components*/
import { Typography, Breadcrumbs, Box } from '@material-ui/core';

/*Styles*/
import useStyles from '../../styles';

/*Table Components*/
import PositionReconTable from './Components/PositionReconTable';

export default function PositionRecon(props) {
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
            Position Recon
          </Typography>
          <Breadcrumbs aria-label="breadcrumb">
            <span color="inherit">Transaction</span>
            <span color="inherit">Omnibus</span>
            <Typography color="primary">Position Recon</Typography>
          </Breadcrumbs>
        </Box>
        <Box mt={2}>
          <PositionReconTable params={props} />
        </Box>
      </div>
    </React.Fragment>
  );
}
