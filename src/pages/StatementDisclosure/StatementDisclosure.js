/*ReactJS*/
import React from 'react';

/*Material UI Components*/
import { Typography, Breadcrumbs, Box } from '@material-ui/core';

/*Styles */
import useStyles from '../../styles';

/*Table Components */
import StatementDisclosureTable from './Components/StatementDisclosureTable';

export default function StatementDisclosure(props) {
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
            Disclosure
          </Typography>
          <Breadcrumbs aria-label="breadcrumb">
            <span color="inherit">Admin</span>
            <span color="inherit">MISC</span>
            <Typography color="primary">Disclosure</Typography>
          </Breadcrumbs>
        </Box>
        <Box mt={2}>
          <StatementDisclosureTable params={props} />
        </Box>
      </div>
    </React.Fragment>
  );
}
