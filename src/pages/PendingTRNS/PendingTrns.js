/*ReactJS*/
import React from 'react';

/*Material UI Components*/
import { Typography, Breadcrumbs, Box } from '@material-ui/core';

/*Style*/
import useStyles from '../../styles';

/*Table Component*/
import PendingTrnsTable from './Components/PendingTrnsTable';

export default function PendingTrns(props) {
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
            Pending TRNS
          </Typography>
          <Breadcrumbs aria-label="breadcrumb">
            <span color="inherit">Transaction</span>
            <span color="inherit">TRNS</span>
            <Typography color="primary">Pending TRNS</Typography>
          </Breadcrumbs>
        </Box>
        <Box mt={2}>
          <PendingTrnsTable params={props} />
        </Box>
      </div>
    </React.Fragment>
  );
}
