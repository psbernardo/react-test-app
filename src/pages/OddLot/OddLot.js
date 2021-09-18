/*ReactJS*/
import React from 'react';

/*Material UI components*/
import { Typography, Breadcrumbs, Box } from '@material-ui/core';

/*Styles*/
import useStyles from '../../styles';

/*Table Component*/
import OddLotTable from './components/OddLotTable';

export default function OddLot(props) {
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
            Odd Lot
          </Typography>
          <Breadcrumbs aria-label="breadcrumb">
            <span color="inherit">Surveillance</span>
            <span color="inherit">Trade Monitoring</span>
            <Typography color="primary">Odd Lot</Typography>
          </Breadcrumbs>
        </Box>
        <Box mt={2}>
          <OddLotTable params={props} />
        </Box>
      </div>
    </React.Fragment>
  );
}
