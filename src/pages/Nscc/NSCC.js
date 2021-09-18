/*ReactJS*/
import React from 'react';

/*Material UI components*/
import { Typography, Breadcrumbs, Box } from '@material-ui/core';

/*Styles*/
import useStyles from '../../styles';

/*Table Component*/
import NSCCTable from './Components/NSCCTable';

export default function NSCC(props) {
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
            NSCC
          </Typography>
          <Breadcrumbs aria-label="breadcrumb">
            <span color="inherit">Transaction</span>
            <span color="inherit">TRNS</span>
            <Typography color="primary">NSCC</Typography>
          </Breadcrumbs>
        </Box>
        <Box mt={2}>
          <NSCCTable params={props} />
        </Box>
      </div>
    </React.Fragment>
  );
}
