/*ReactJS*/
import React from 'react';

/*Material UI components*/
import { Typography, Breadcrumbs, Box } from '@material-ui/core';

/*Styles*/
import useStyles from '../../styles';

/*Table Component*/
import BlueSheetTable from './Components/BlueSheetTable';

export default function BlueSheet(props) {
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
            BlueSheet
          </Typography>
          <Breadcrumbs aria-label="breadcrumb">
            <span color="inherit">Compliance</span>
            <Typography color="primary">BlueSheet</Typography>
            <Typography color="primary">BlueSheet</Typography>
          </Breadcrumbs>
        </Box>
        <Box mt={2}>
          <BlueSheetTable params={props} />
        </Box>
      </div>
    </React.Fragment>
  );
}
