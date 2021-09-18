/*ReactJS*/
import React from 'react';

/*Material UI Components*/
import { Typography, Breadcrumbs, Box } from '@material-ui/core';

/*Styles*/
import useStyles from '../../styles';

/*Table Components*/
import CallLogTable from './Components/CallLogTable';

export default function CallLog(props) {
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
            Call Logs
          </Typography>
          <Breadcrumbs aria-label="breadcrumb">
            <span color="inherit">Compliance</span>
            <span color="inherit">Risk Manager</span>
            <Typography color="primary">Call Logs</Typography>
          </Breadcrumbs>
        </Box>
        <Box mt={2}>
          <CallLogTable params={props} />
        </Box>
      </div>
    </React.Fragment>
  );
}
