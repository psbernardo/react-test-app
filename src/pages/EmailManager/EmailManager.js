/*ReactJS*/
import React from 'react';

/*Material UI components*/
import { Typography, Breadcrumbs, Box } from '@material-ui/core';

/*Styles*/
import useStyles from '../../styles';

/*Table Component*/
import EmailManagerTable from './Components/EmailManagerTable';

export default function EmailManager(props) {
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
            Email Manager
          </Typography>
          <Breadcrumbs aria-label="breadcrumb">
            <span color="inherit">Admin</span>
            <Typography color="primary">Email Manager</Typography>
            <Typography color="primary">Email Manager</Typography>
          </Breadcrumbs>
        </Box>
        <Box mt={2}>
          <EmailManagerTable params={props} />
        </Box>
      </div>
    </React.Fragment>
  );
}
