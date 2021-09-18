/*ReactJS*/
import React from 'react';

/*Material UI Components*/
import { Typography, Breadcrumbs, Box } from '@material-ui/core';

/*Styles*/
import useStyles from '../../styles';

/*Table Components*/
import EtfTable from './Components/EtfTableComponent';

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
            ETF
          </Typography>
          <Breadcrumbs aria-label="breadcrumb">
            <span color="inherit">Security</span>
            <span color="inherit">Security Details</span>
            <Typography color="primary">ETF</Typography>
          </Breadcrumbs>
        </Box>
        <Box mt={2}>
          <EtfTable params={props} />
        </Box>
      </div>
    </React.Fragment>
  );
}
