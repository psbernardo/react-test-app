/*ReactJS*/
import React from 'react';

/*Material UI components*/
import { Typography, Breadcrumbs, Box } from '@material-ui/core';

/*Styles*/
import useStyles from '../../styles';

/*Table Component*/
import EmailSenderTable from './Components/EmailSenderTable';

export default function EmailSender(props) {
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
            Email Sender
          </Typography>
          <Breadcrumbs aria-label="breadcrumb">
            <span color="inherit">Admin</span>
            <Typography color="primary">Email Manager</Typography>
            <Typography color="primary">Email Sender</Typography>
          </Breadcrumbs>
        </Box>
        <Box mt={2}>
          <EmailSenderTable params={props} />
        </Box>
      </div>
    </React.Fragment>
  );
}
