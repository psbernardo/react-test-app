/*ReactJS*/
import React from 'react';

/*Material UI components*/
import { Typography, Breadcrumbs, Box } from '@material-ui/core';

/*Styles*/
import useStyles from '../../styles';

/*Table Component*/
import AverageDailyVolumeTable from './components/AverageDailyVolumeTable';

export default function AverageDailyVolume(props) {
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
            Average Daily Volume
          </Typography>
          <Breadcrumbs aria-label="breadcrumb">
            <span color="inherit">Surveillance</span>
            <span color="inherit">Trade Monitoring</span>
            <Typography color="primary">Average Daily Volume</Typography>
          </Breadcrumbs>
        </Box>
        <Box mt={2}>
          <AverageDailyVolumeTable params={props} />
        </Box>
      </div>
    </React.Fragment>
  );
}
