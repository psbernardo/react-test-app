/*ReactJS*/
import React from 'react';

/*Material UI Components*/
import { Typography, Breadcrumbs, Box } from '@material-ui/core';

/*Styles*/
import useStyles from '../../styles';

/*Table Components*/
import ReconMappingTable from './Components/ReconMappingTable';

export default function ReconMapping(props) {
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
            Recon Mapping
          </Typography>
          <Breadcrumbs aria-label="breadcrumb">
            <span color="inherit">Admin</span>
            <span color="inherit">MISC</span>
            <Typography color="primary">Recon Mapping</Typography>
          </Breadcrumbs>
        </Box>
        <Box mt={2}>
          <ReconMappingTable params={props} />
        </Box>
      </div>
    </React.Fragment>
  );
}
