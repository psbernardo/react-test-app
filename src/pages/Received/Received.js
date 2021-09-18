/*ReactJS*/
import React from 'react';

/*Material UI Components*/
import { Typography, Breadcrumbs, Box } from '@material-ui/core';

/*Styles*/
import useStyles from '../../styles';

/*Table Components*/
import ReceivedTable from './Components/ReceivedTable';

export default function Received(props) {
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
            Received
          </Typography>
          <Breadcrumbs aria-label="breadcrumb">
            <span color="inherit">Position</span>
            <span color="inherit">DTCC</span>
            <Typography color="primary">Received</Typography>
          </Breadcrumbs>
        </Box>
        <Box mt={2}>
          <ReceivedTable params={props} />
        </Box>
      </div>
    </React.Fragment>
  );
}
