/*ReactJS*/
import React from 'react';

/*Material UI Components*/
import { Typography, Breadcrumbs, Box } from '@material-ui/core';

/*Styles*/
import useStyles from '../../styles';

/*Table Components*/
import PhysicalCertificateTable from './Components/PhysicalCertificateTable';

export default function PhysicalCertificate(props) {
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
            Physical Certificate
          </Typography>
          <Breadcrumbs aria-label="breadcrumb">
            <span color="inherit">Position</span>
            <span color="inherit">Physical Certificate</span>
            <Typography color="primary">Physical Certificate</Typography>
          </Breadcrumbs>
        </Box>
        <Box mt={2}>
          <PhysicalCertificateTable params={props} />
        </Box>
      </div>
    </React.Fragment>
  );
}
