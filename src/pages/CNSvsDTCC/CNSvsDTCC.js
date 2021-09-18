/*ReactJS*/
import React from 'react';

/*Material UI Components*/
import { Typography, Breadcrumbs, Box } from '@material-ui/core';

/*Styles*/
import useStyles from '../../styles';

/*Table Components*/
import CNSvsDTCCTable from './Components/CNSvsDTCCTable';

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
            CNS vs DTCC
          </Typography>
          <Breadcrumbs aria-label="breadcrumb">
            <span color="inherit">Position</span>
            <span color="inherit">CNS</span>
            <Typography color="primary">CNS vs DTCC</Typography>
          </Breadcrumbs>
        </Box>
        <Box mt={2}>
          <CNSvsDTCCTable params={props} />
        </Box>
      </div>
    </React.Fragment>
  );
}
