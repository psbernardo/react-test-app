/*ReactJS*/
import React from 'react';

/*Material UI Components*/
import { Typography, Breadcrumbs, Box } from '@material-ui/core';

/*Styles */
import useStyles from '../../styles';

/*Table Components */
import FeeTable from './Components/FeeTable';

export default function Fee(props) {
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
            Fee
          </Typography>
          <Breadcrumbs aria-label="breadcrumb">
            <span color="inherit">Transaction</span>
            <span color="inherit">TRNS</span>
            <Typography color="primary">Fee</Typography>
          </Breadcrumbs>
        </Box>
        <Box mt={2}>
          <FeeTable params={props} />
        </Box>
      </div>
    </React.Fragment>
  );
}
