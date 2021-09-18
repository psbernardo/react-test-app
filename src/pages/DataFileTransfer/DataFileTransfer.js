/*ReactJS*/
import React from 'react';

/*Material UI Components*/
import { Typography, Breadcrumbs, Box } from '@material-ui/core';

/*Styles */
import useStyles from '../../styles';
/*Table Components */
import DataFileTransferTable from './Components/DataFileTransferTable';

export default function DataFileTransfer(props) {
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
            Data File Transfer
          </Typography>
          <Breadcrumbs aria-label="breadcrumb">
            <span color="inherit">Position</span>
            <span color="inherit">DTCC</span>
            <Typography color="primary">Data File Transfer</Typography>
          </Breadcrumbs>
        </Box>
        <Box mt={2}>
          <DataFileTransferTable params={props} />
        </Box>
      </div>
    </React.Fragment>
  );
}
