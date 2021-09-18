/*ReactJS*/
import React from 'react';

/*Material UI components*/
import { Typography, Breadcrumbs, Box } from '@material-ui/core';

/*Styles*/
import useStyles from '../../styles';

/*Table Component*/
import SecurityMasterTable from './components/SecurityMasterTable';

export default function SecurityMaster(props) {
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
            Master Profile
          </Typography>
          <Breadcrumbs aria-label="breadcrumb">
            <span color="inherit">Admin</span>
            <span color="inherit">Security Details</span>
            <Typography color="primary">Master Profile</Typography>
          </Breadcrumbs>
        </Box>
        <Box mt={2}>
          <SecurityMasterTable params={props} />
        </Box>
      </div>
    </React.Fragment>
  );
}
