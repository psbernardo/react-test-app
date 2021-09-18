/*ReactJS*/
import React from 'react';

/*Material UI Components*/
import { Typography, Breadcrumbs, Box } from '@material-ui/core';

/*Styles*/
import useStyles from '../../styles';

/*Table Components*/
import SurveillanceOfacTable from './Components/SurveillanceOfacTable';

export default function SurveillanceOfac(props) {
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
            OFAC
          </Typography>
          <Breadcrumbs aria-label="breadcrumb">
            <span color="inherit">Surveillance</span>
            <span color="inherit">Surveillance</span>
            <Typography color="primary">OFAC</Typography>
          </Breadcrumbs>
        </Box>
        <Box mt={2}>
          <SurveillanceOfacTable params={props} />
        </Box>
      </div>
    </React.Fragment>
  );
}
