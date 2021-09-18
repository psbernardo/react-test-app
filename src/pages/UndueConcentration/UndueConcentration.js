import React from 'react';
import { Typography, Breadcrumbs, Box } from '@material-ui/core';
import UndueConcentrationTable from './Components/UndueConcentrationTable';
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
            Undue Concentration
          </Typography>
          <Breadcrumbs aria-label="breadcrumb">
            <span color="inherit">Surveillance</span>
            <span color="inherit">Trade Monitoring</span>
            <Typography color="primary">Undue Concentration</Typography>
          </Breadcrumbs>
        </Box>
        <Box mt={2}>
          <UndueConcentrationTable params={props} />
        </Box>
      </div>
    </React.Fragment>
  );
}
