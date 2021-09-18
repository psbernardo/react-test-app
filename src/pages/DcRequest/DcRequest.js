/*ReactJS*/
import React from 'react';

/*Material UI Components*/
import { Typography, Breadcrumbs, Box } from '@material-ui/core';

/*Styles*/
import useStyles from '../../styles';

/*Table Components*/
import DcRequestTable from './Components/DcRequestTable';

export default function DcRequest(props) {
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
            Digital Bank Request
          </Typography>
          <Breadcrumbs aria-label="breadcrumb">
            <span color="inherit">Balance</span>
            <span color="inherit">Bank</span>
            <Typography color="primary">Digital Bank Request</Typography>
          </Breadcrumbs>
        </Box>
        <Box mt={2}>
          <DcRequestTable params={props} />
        </Box>
      </div>
    </React.Fragment>
  );
}
