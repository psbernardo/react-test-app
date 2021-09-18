/*ReactJS*/
import React from 'react';

/*Material UI Components*/
import { Typography, Breadcrumbs, Box } from '@material-ui/core';

/*Styles */
import useStyles from '../../styles';

/*Table Components */
import SystemCodeTable from './Components/SystemCodeTable';

export default function SystemCode(props) {
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
            System Code
          </Typography>
          <Breadcrumbs aria-label="breadcrumb">
            <span color="inherit">Admin</span>
            <span color="inherit">System Profile</span>
            <Typography color="primary">System Code</Typography>
          </Breadcrumbs>
        </Box>
        <Box mt={2}>
          <SystemCodeTable params={props} />
        </Box>
      </div>
    </React.Fragment>
  );
}
