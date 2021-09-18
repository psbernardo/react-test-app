/*ReactJS*/
import React from 'react';

/*Material UI Components*/
import { Typography, Breadcrumbs, Box } from '@material-ui/core';

/*Styles*/
import useStyles from '../../styles';

/*Table Components*/
import FaqsTable from './Components/FaqsTable';

export default function Faqs(props) {
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
            Question and Answer
          </Typography>
          <Breadcrumbs aria-label="breadcrumb">
            <span color="inherit">Admin</span>
            <span color="inherit">User Guide</span>
            <Typography color="primary">Question and Answer</Typography>
          </Breadcrumbs>
        </Box>
        <Box mt={2}>
          <FaqsTable params={props} />
        </Box>
      </div>
    </React.Fragment>
  );
}
