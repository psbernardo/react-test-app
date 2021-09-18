/*ReactJS*/
import React from 'react';

/*Material UI Components*/
import { Typography, Breadcrumbs, Box } from '@material-ui/core';

/*Styles*/
import useStyles from '../../styles';

/*Table Components*/
import TransferAgentTable from './Components/TransferAgentTable';

export default function TransferAgent(props) {
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
            Transfer Agent
          </Typography>
          <Breadcrumbs aria-label="breadcrumb">
            <span color="inherit">Position</span>
            <span color="inherit">Physical Certificate</span>
            <Typography color="primary">Transfer Agent</Typography>
          </Breadcrumbs>
        </Box>
        <Box mt={2}>
          <TransferAgentTable params={props} />
        </Box>
      </div>
    </React.Fragment>
  );
}
