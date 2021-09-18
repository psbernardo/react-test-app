/*ReactJS*/
import React from 'react';

/*Material UI components*/
import { Typography, Breadcrumbs, Box } from '@material-ui/core';

/*Styles*/
import useStyles from '../../styles';

/*Table Component*/
import OptionProfileTable from './components/OptionProfileTable';

export default function OptionProfile(props) {
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
            Option Profile
          </Typography>
          <Breadcrumbs aria-label="breadcrumb">
            <span color="inherit">Admin</span>
            <span color="inherit">Security Details</span>
            <Typography color="primary">Option Profile</Typography>
          </Breadcrumbs>
        </Box>
        <Box mt={2}>
          <OptionProfileTable params={props} />
        </Box>
      </div>
    </React.Fragment>
  );
}
