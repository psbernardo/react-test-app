/*ReactJS*/
import React from 'react';

/*Material UI Components*/
import { Typography, Breadcrumbs, Box } from '@material-ui/core';

/*Styles*/
import useStyles from '../../styles';

/*Table Components*/
import AdministratorTable from './Components/AdministratorTable';

export default function Administrator(props) {
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
            User
          </Typography>
          <Breadcrumbs aria-label="breadcrumb">
            <span color="inherit">Admin</span>
            <span color="inherit">Account Setup</span>
            <Typography color="primary">User</Typography>
          </Breadcrumbs>
        </Box>
        <Box mt={2}>
          <AdministratorTable params={props} />
        </Box>
      </div>
    </React.Fragment>
  );
}
