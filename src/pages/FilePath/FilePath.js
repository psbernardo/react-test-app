/*ReactJS*/
import React from 'react';

/*Material UI Components*/
import { Typography, Breadcrumbs, Box } from '@material-ui/core';

/*Styles*/
import useStyles from '../../styles';

/*Table Components*/
import FilePathTable from './Components/FilePathTable';

export default function FilePath(props) {
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
            File Path
          </Typography>
          <Breadcrumbs aria-label="breadcrumb">
            <span color="inherit">Admin</span>
            <span color="inherit">System Profile</span>
            <Typography color="primary">File Path</Typography>
          </Breadcrumbs>
        </Box>
        <Box mt={2}>
          <FilePathTable params={props} />
        </Box>
      </div>
    </React.Fragment>
  );
}
