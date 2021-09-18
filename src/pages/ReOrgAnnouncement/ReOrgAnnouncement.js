import React, { useEffect } from 'react';
import {
  Typography,
  Breadcrumbs,
  Box,
  InputLabel,
  Select,
  MenuItem,
} from '@material-ui/core';

/*styles */
import useStyles from '../../styles';

/*components */
import DividendTable from './Components/DividendTable';
import MergerTable from './Components/MergerTable';
import SpinOffTable from './Components/SpinOffTable';
import QueryParam from '../../services/QueryParamService';
import SplitTable from './Components/SplitTable';

export default function ProfitAndLoss() {
  const classes = useStyles();

  const [announcementType, setAnnouncementType] = React.useState('dividend');

  useEffect(() => {
    const announcementType = QueryParam.getUrlParameter('announcementType');

    if (announcementType) {
      setAnnouncementType(announcementType);
    }
  }, []);

  const announcmentTable = () => {
    if (announcementType === 'dividend') {
      return <DividendTable announcementType={announcementType} />;
    } else if (announcementType === 'merger') {
      return <MergerTable announcementType={announcementType} />;
    } else if (announcementType === 'spin_off') {
      return <SpinOffTable announcementType={announcementType} />;
    } else {
      return <SplitTable announcementType={announcementType} />;
    }
  };

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
              Announcement
            </Typography>
            <Breadcrumbs aria-label="breadcrumb">
              <span color="inherit">Position</span>
              <span color="inherit">Corp Action</span>
              <Typography color="primary">Announcement</Typography>
            </Breadcrumbs>
          </div>
          <div className={classes.grdCell1} style={{ alignSelf: 'flex-end' }}>
            <InputLabel shrink id="announcement">
              Announcement Type
            </InputLabel>
            <Select
              labelId="announcement"
              displayEmpty
              fullWidth
              value={announcementType}
              onChange={(e) => setAnnouncementType(e.target.value)}
            >
              <MenuItem value="dividend">Dividend</MenuItem>
              <MenuItem value="merger">Merger</MenuItem>
              <MenuItem value="spin_off">Spin-Off</MenuItem>
              <MenuItem value="split">Split</MenuItem>
            </Select>
          </div>
        </div>
        <Box mt={2}>{announcmentTable}</Box>
      </div>
    </React.Fragment>
  );
}
