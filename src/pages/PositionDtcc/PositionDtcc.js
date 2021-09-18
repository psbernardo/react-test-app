import React from 'react';
import { Typography, Breadcrumbs, Box } from '@material-ui/core';
import useStyles from '../../styles';
import PositionDtccTable from './Components/PositionDtccTable';

export default function PositionDtcc(props) {
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
            Position
          </Typography>
          <Breadcrumbs aria-label="breadcrumb">
            <span color="inherit">Position</span>
            <span color="inherit">DTCC</span>
            <Typography color="primary">Position</Typography>
          </Breadcrumbs>
        </Box>
        <Box mt={2}>
          <PositionDtccTable params={props} />
        </Box>
      </div>
    </React.Fragment>
  );
}
