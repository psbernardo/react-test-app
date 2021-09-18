/*ReactJS*/
import React from 'react';

/*Material UI components*/
import { Typography, Breadcrumbs, Box } from '@material-ui/core';

/*Styles*/
import useStyles from '../../styles';

/*Table Component*/
import SystemProcessTable from './components/SystemProcessTable';

export default function SystemProcess(props) {
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
            System Process
          </Typography>
          <Breadcrumbs aria-label="breadcrumb">
            <span color="inherit">Admin</span>
            <span color="inherit">System Profile</span>
            <Typography color="primary">System Process</Typography>
          </Breadcrumbs>
        </Box>
        <Box mt={2}>
          <SystemProcessTable params={props} />
        </Box>
      </div>
    </React.Fragment>
  );
}
