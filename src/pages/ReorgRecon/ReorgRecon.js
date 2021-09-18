/*ReactJS*/
import React from 'react';

/*Material UI Components*/
import { Typography, Breadcrumbs, Box } from '@material-ui/core';

/*Styles*/
import useStyles from '../../styles';

/*Table Components*/
import ReOrgReconTable from './Components/ReorgReconTable';

export default function ReOrgRecon() {
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
            Corp ReOrg Recon
          </Typography>
          <Breadcrumbs aria-label="breadcrumb">
            <span color="inherit">Position</span>
            <span color="inherit">Corp Action</span>
            <Typography color="primary">Corp ReOrg Recon</Typography>
          </Breadcrumbs>
        </Box>
        <Box mt={2}>
          <ReOrgReconTable />
        </Box>
      </div>
    </React.Fragment>
  );
}
