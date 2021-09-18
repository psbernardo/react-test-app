import React, { useEffect } from 'react';
import {
  Typography,
  Breadcrumbs,
  Box,
} from '@material-ui/core';
import SegregationTable from './Components/SegregationTable';
import SegregationBalanceTable from './Components/SegregationBalanceTable';
import SelectSystemCode from 'components/Dropdown/SelectSystemCode';
import QueryParam from '../../services/QueryParamService';
import useStyles from '../../styles';

export default function Segregation(props) {
  const classes = useStyles();
  const [segregationType, setSegregationType] = React.useState('Per Account');

  useEffect(() => {
    const segType = QueryParam.getUrlParameter('segregationType');

    if (segType) {
      setSegregationType(segType);
    }
  }, []);

  return (
    <React.Fragment>
      <div className={classes.pageContainer}>
        <div className={classes.grdRow}>
          <div className={classes.grdCellNone} style={{ marginRight: 30 }}>
            <Typography
              variant="h2"
              className={classes.textBold}
              align="left"
              gutterBottom={true}
            >
              Segregation
            </Typography>
            <Breadcrumbs aria-label="breadcrumb">
              <span color="inherit">Compliance</span>
              <span color="inherit">Segregation</span>
              <Typography color="primary">Segregation</Typography>
            </Breadcrumbs>
          </div>
          <div className={classes.grdCell1} style={{ alignSelf: 'flex-end' }}>
            <SelectSystemCode
              name="segregation"
              label="Segregation"
              type="Report Type"
              subType="Segregation"
              value={segregationType}
              onChange={(e) => setSegregationType(e.target.value)}
            ></SelectSystemCode>
          </div>
        </div>
        <Box mt={2}>
          {segregationType === 'Per Account' ? (
            <SegregationBalanceTable params={props} segType={segregationType} />
          ) : (
            <SegregationTable params={props} segType={segregationType} />
          )}
        </Box>
      </div>
    </React.Fragment>
  );
}
