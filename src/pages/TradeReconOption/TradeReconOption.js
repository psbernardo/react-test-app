/*ReactJS*/
import React from 'react';

/*Material UI components*/
import { Typography, Breadcrumbs, Box } from '@material-ui/core';

/*Styles*/
import useStyles from '../../styles';

/*Table Component*/
import TradeReconOptionTable from './components/TradeReconOptionTable';

export default function TradeReconOption(props) {
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
            Trade Reconcillation Option
          </Typography>
          <Breadcrumbs aria-label="breadcrumb">
            <span color="inherit">Position</span>
            <span color="inherit">OCC</span>
            <Typography color="primary">Option</Typography>
          </Breadcrumbs>
        </Box>
        <Box mt={2}>
          <TradeReconOptionTable params={props} />
        </Box>
      </div>
    </React.Fragment>
  );
}