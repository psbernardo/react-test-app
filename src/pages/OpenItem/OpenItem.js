/*ReactJS*/
import React from 'react';

/*Material UI Components*/
import { Typography, Breadcrumbs, Box } from '@material-ui/core';

/*Styles*/
import useStyles from '../../styles';

/*Table Components*/
import OpenItemTable from './Components/OpenItemTable';

export default function OpenItem(props) {
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
            Open Item
          </Typography>
          <Breadcrumbs aria-label="breadcrumb">
            <span color="inherit">Position</span>
            <span color="inherit">DTCC</span>
            <Typography color="primary">Open Item</Typography>
          </Breadcrumbs>
        </Box>
        <Box mt={2}>
          <OpenItemTable params={props} />
        </Box>
      </div>
    </React.Fragment>
  );
}
