/*ReactJS*/
import React from 'react';

/*Material UI Components*/
import { Typography, Breadcrumbs, Box } from '@material-ui/core';

/*Styles */
import useStyles from '../../styles';

/*Table Components */
import { RoleTable } from './Components/RoleTable';

export default function Calendar(props) {
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
            Role
          </Typography>
          <Breadcrumbs aria-label="breadcrumb">
            <span color="inherit">Admin</span>
            <span color="inherit">User Management</span>
            <Typography color="primary">Role</Typography>
          </Breadcrumbs>
        </Box>
        <Box mt={2}>
          <RoleTable params={props} />
        </Box>
      </div>
    </React.Fragment>
  );
}
