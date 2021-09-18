/*ReactJS*/
import React from 'react';

/*Material UI components*/
import { Typography, Breadcrumbs, Box } from '@material-ui/core';

/*Styles*/
import useStyles from '../../styles';

/*Table Component*/
import TAFFeeTable from './components/TAFFeeTable';

export default function TAFFee(props) {
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
            TAF Fee
          </Typography>
          <Breadcrumbs aria-label="breadcrumb">
            <span color="inherit">Balance</span>
            <span color="inherit">Fee</span>
            <Typography color="primary">TAF Fee</Typography>
          </Breadcrumbs>
        </Box>
        <Box mt={2}>
          <TAFFeeTable params={props} />
        </Box>
      </div>
    </React.Fragment>
  );
}
