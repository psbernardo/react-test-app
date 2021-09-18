/*ReactJS*/
import React from 'react';

/*Material UI components*/
import { Typography, Breadcrumbs, Box } from '@material-ui/core';

/*Styles*/
import useStyles from '../../styles';

/*Table Component*/
import LargeTraderIDTable from './Components/LargeTraderIDTable';

export default function LargeTraderID(props) {
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
            Large Trader ID
          </Typography>
          <Breadcrumbs aria-label="breadcrumb">
            <span color="inherit">Compliance</span>
            <Typography color="primary">BlueSheet</Typography>
            <Typography color="primary">Large Trader ID</Typography>
          </Breadcrumbs>
        </Box>
        <Box mt={2}>
          <LargeTraderIDTable params={props} />
        </Box>
      </div>
    </React.Fragment>
  );
}
