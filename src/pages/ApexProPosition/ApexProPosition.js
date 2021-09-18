/*ReactJS*/
import React from 'react';

/*Material UI Components*/
import { Typography, Breadcrumbs, Box } from '@material-ui/core';

/*Styles*/
import useStyles from '../../styles';

/*Table Components*/
import ApexProPositionTable from './Components/ApexProPositionTable';

export default function ApexProPosition(props) {
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
            ApexPro Position
          </Typography>
          <Breadcrumbs aria-label="breadcrumb">
            <span color="inherit">Transaction</span>
            <span color="inherit">Omnibus</span>
            <Typography color="primary">ApexPro Position</Typography>
          </Breadcrumbs>
        </Box>
        <Box mt={2}>
          <ApexProPositionTable params={props} />
        </Box>
      </div>
    </React.Fragment>
  );
}
