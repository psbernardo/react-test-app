import React from 'react';
import { Box, TextField } from '@material-ui/core';
import useStyles from '../../../styles';

export default function ExtendedSetupModal({
  accountId,
  data: modalData,
  set: setModalData,
}) {
  const classes = useStyles();

  const handleChange = (e) => {
    const input = e.currentTarget.name ? e.currentTarget : e.target;
    const copyModalData = {
      ...modalData,
      [input.name]: ['primeBroker', 'executingBroker', 'institutionNo', 'agentNo', 'agentAccountNo', 'traderId'].includes(input.name) ? input.value.toUpperCase() : input.value,
    };

    setModalData(copyModalData);
  };

  return (
    <Box>
      <div className={classes.grdRow}>
        <div className={classes.grdCell1} style={{ marginRight: 30 }}>
          <TextField
            fullWidth
            name="beneficiary"
            label="Beneficiary"
            value={modalData.beneficiary}
            onChange={handleChange}
            InputLabelProps={{ shrink: true }}
            inputProps={{ maxLength: 300 }}
          />
        </div>
        <div className={classes.grdCell1} style={{ marginRight: 30 }}>
          <TextField
            fullWidth
            name="primeBroker"
            label="Prime Broker"
            value={modalData.primeBroker}
            onChange={handleChange}
            InputLabelProps={{ shrink: true }}
            inputProps={{ maxLength: 300 }}
          />
        </div>
        <div className={classes.grdCell1} style={{ marginRight: 30 }}>
          <TextField
            fullWidth
            name="participantNo"
            label="Participant No"
            value={modalData.participantNo}
            onChange={handleChange}
            InputLabelProps={{ shrink: true }}
            inputProps={{ maxLength: 4 }}
          />
        </div>
        <div className={classes.grdCell1}>
          <TextField
            fullWidth
            name="executingBroker"
            label="Executing Broker"
            value={modalData.executingBroker}
            onChange={handleChange}
            InputLabelProps={{ shrink: true }}
            inputProps={{ maxLength: 10 }}
          />
        </div>
      </div>
      <div className={classes.grdRow}>
        <div className={classes.grdCell1} style={{ marginRight: 30 }}>
          <TextField
            fullWidth
            name="institutionNo"
            label="Institution No"
            value={modalData.institutionNo}
            onChange={handleChange}
            InputLabelProps={{ shrink: true }}
            inputProps={{ maxLength: 10 }}
          />
        </div>
        <div className={classes.grdCell1} style={{ marginRight: 30 }}>
          <TextField
            fullWidth
            name="agentNo"
            label="Agent No"
            value={modalData.agentNo}
            onChange={handleChange}
            InputLabelProps={{ shrink: true }}
            inputProps={{ maxLength: 10 }}
          />
        </div>
        <div className={classes.grdCell1} style={{ marginRight: 30 }}>
          <TextField
            fullWidth
            name="agentAccountNo"
            label="Agent Account No"
            value={modalData.agentAccountNo}
            onChange={handleChange}
            InputLabelProps={{ shrink: true }}
            inputProps={{ maxLength: 10 }}
          />
        </div>
        <div className={classes.grdCell1}>
          <TextField
            fullWidth
            name="traderId"
            label="Trader ID"
            value={modalData.traderId}
            onChange={handleChange}
            InputLabelProps={{ shrink: true }}
            inputProps={{ maxLength: 10 }}
          />
        </div>
      </div>  
    </Box>
  );
}
