/*ReactJS*/
import React from 'react';

/*Material UI components*/
import { Typography, Breadcrumbs, Box } from '@material-ui/core';

/*Styles*/
import useStyles from '../../styles';

/*Table Component*/
import DataDictionaryTable from './Components/DataDictionaryTable';

export default function DataDictionary(props) {
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
            Data Dictionary
          </Typography>
          <Breadcrumbs aria-label="breadcrumb">
            <span color="inherit">Admin</span>
            <Typography color="primary">User Guide</Typography>
            <Typography color="primary">Data Dictionary</Typography>
          </Breadcrumbs>
        </Box>
        <Box mt={2}>
          <DataDictionaryTable params={props} />
        </Box>
      </div>
    </React.Fragment>
  );
}
