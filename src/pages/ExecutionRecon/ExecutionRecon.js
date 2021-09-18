/*ReactJS*/
import React from 'react';

/*Material UI Components*/
import { Typography, Breadcrumbs, Box } from '@material-ui/core';

/*Styles*/
import useStyles from '../../styles';

/*Table Components*/
import ExecutionReconTable from './Components/ExecutionReconTable';

export default function ExecutionRecon(props) {
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
            Execution Reconciliation
          </Typography>
          <Breadcrumbs aria-label="breadcrumb">
            <span color="inherit">Transaction</span>
            <span color="inherit">TRNS</span>
            <Typography color="primary">Execution Reconciliation</Typography>
          </Breadcrumbs>
        </Box>
        <Box mt={2}>
          <ExecutionReconTable params={props} />
        </Box>
      </div>
    </React.Fragment>
  );
}
