import React from 'react';
import { Typography, Breadcrumbs, Box } from '@material-ui/core';
import SpoofingTable from './Components/SpoofingTable';
import useStyles from '../../styles';

export default function Spoofing(props) {
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
            Spoofing
          </Typography>
          <Breadcrumbs aria-label="breadcrumb">
            <span color="inherit">Surveillance</span>
            <span color="inherit">Trade Monitoring</span>
            <Typography color="primary">Spoofing</Typography>
          </Breadcrumbs>
        </Box>
        <Box mt={2}>
          <SpoofingTable params={props} />
        </Box>
      </div>
    </React.Fragment>
  );
}
