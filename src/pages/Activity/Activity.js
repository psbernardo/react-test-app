/*ReactJS*/
import React from 'react';

/*Material UI Components*/
import { Typography, Breadcrumbs, Box } from '@material-ui/core';

/*Style*/
import useStyles from '../../styles';

/*Table Component*/
import ActivityTable from './Components/ActivityTable';

export default function Activity(props) {
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
            Activity
          </Typography>
          <Breadcrumbs aria-label="breadcrumb">
            <span color="inherit">Transaction</span>
            <span color="inherit">TRNS</span>
            <Typography color="primary">Activity</Typography>
          </Breadcrumbs>
        </Box>
        <Box mt={2}>
          <ActivityTable params={props} />
        </Box>
      </div>
    </React.Fragment>
  );
}
