/*ReactJS*/
import React from 'react';

/*Material UI Components*/
import { Typography, Breadcrumbs, Box } from '@material-ui/core';

/*Styles*/
import useStyles from '../../styles';

/*Table Components*/
import ReportTemplateTable from './Components/ReportTemplateTable';

export default function SegregationReportTemplate(props) {
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
            Report Template
          </Typography>
          <Breadcrumbs aria-label="breadcrumb">
            <span color="inherit">Transaction</span>
            <span color="inherit">Report</span>
            <Typography color="primary">Report Template</Typography>
          </Breadcrumbs>
        </Box>
        <Box mt={2}>
          <ReportTemplateTable params={props} />
        </Box>
      </div>
    </React.Fragment>
  );
}
