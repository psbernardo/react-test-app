/*ReactJS*/
import React from 'react';

/*Material UI Components*/
import { Typography, Breadcrumbs, Box } from '@material-ui/core';

/*Styles*/
import useStyles from '../../styles';

/*Table Components*/
import SllTable from './Components/SllTableComponent';

export default function Etf(props) {
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
            SLL
          </Typography>
          <Breadcrumbs aria-label="breadcrumb">
            <span color="inherit">Security</span>
            <span color="inherit">Security Details</span>
            <Typography color="primary">SLL</Typography>
          </Breadcrumbs>
        </Box>
        <Box mt={2}>
          <SllTable params={props} />
        </Box>
      </div>
    </React.Fragment>
  );
}
