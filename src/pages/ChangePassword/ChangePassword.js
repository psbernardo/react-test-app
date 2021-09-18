/*ReactJS*/
import React from 'react';

/*Styles*/
import useStyles from '../../styles';

/*Material UI Components*/
import { Typography, Box } from '@material-ui/core';

/*Components*/
import ChangePasswordForm from './Components/ChangePasswordForm';

export default function ChangePassword(props) {
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
            Change Password
          </Typography>
        </Box>
        <ChangePasswordForm params={props} />
      </div>
    </React.Fragment>
  );
}
