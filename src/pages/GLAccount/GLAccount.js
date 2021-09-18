/*ReactJS*/
import React from 'react';

/*Material UI Components*/
import { Typography, Breadcrumbs, Box } from '@material-ui/core';

/*Styles*/
import useStyles from '../../styles';

/*Table Components*/
import GLAccountTable from './Components/GLAccountTable';

export default function GLAccount(props) {
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
            GL Account
          </Typography>
          <Breadcrumbs aria-label="breadcrumb">
            <span color="inherit">Admin</span>
            <span color="inherit">Account Setup</span>
            <Typography color="primary">GL Account</Typography>
          </Breadcrumbs>
        </Box>
        <Box mt={2}>
          <GLAccountTable params={props} />
        </Box>
      </div>
    </React.Fragment>
  );
}
