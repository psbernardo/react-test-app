import React from 'react';
import { Typography, Breadcrumbs, Box } from '@material-ui/core';
import ConcentrationTable from './Components/ConcentrationTable';
import useStyles from '../../styles';

export default function Concentration(props) {
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
            Concentration
          </Typography>
          <Breadcrumbs aria-label="breadcrumb">
            <span color="inherit">Surveillance</span>
            <span color="inherit">Trade Monitoring</span>
            <Typography color="primary">Concentration</Typography>
          </Breadcrumbs>
        </Box>
        <Box mt={2}>
          <ConcentrationTable params={props} />
        </Box>
      </div>
    </React.Fragment>
  );
}
