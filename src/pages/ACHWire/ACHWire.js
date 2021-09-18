/*ReactJS*/
import React from 'react';

/*Material UI Components*/
import { Typography, Breadcrumbs, Box } from '@material-ui/core';

/*Styles*/
import useStyles from '../../styles';

/*Table Components*/
import ACHWireTable from './Components/ACHWireTable';

export default function ACHWire(props) {
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
            ACH\Wire
          </Typography>
          <Breadcrumbs aria-label="breadcrumb">
            <span color="inherit">Balance</span>
            <span color="inherit">Bank</span>
            <Typography color="primary">ACH\Wire</Typography>
          </Breadcrumbs>
        </Box>
        <Box mt={2}>
          <ACHWireTable params={props} />
        </Box>
      </div>
    </React.Fragment>
  );
}
