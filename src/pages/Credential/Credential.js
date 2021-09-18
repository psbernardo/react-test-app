import React from 'react';
import { Typography, Breadcrumbs, Box } from '@material-ui/core';
import useStyles from '../../styles';
import CredentialTable from './Components/CredentialTable';

export default function Credential(props) {
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
            Credential
          </Typography>
          <Breadcrumbs aria-label="breadcrumb">
            <span color="inherit">Admin</span>
            <span color="inherit">MISC</span>
            <Typography color="primary">Credential</Typography>
          </Breadcrumbs>
        </Box>
        <Box mt={2}>
          <CredentialTable params={props} />
        </Box>
      </div>
    </React.Fragment>
  );
}
