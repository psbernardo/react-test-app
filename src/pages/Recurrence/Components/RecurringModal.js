/*ReactJS*/
import React, { useState, useEffect } from 'react';
import useStyles from '../../../styles';
import {
  Typography,
  Button,
  Modal,
  Backdrop,
  Fade,
  Box,
  FormControlLabel,
  Checkbox,
  InputLabel,
  MenuItem,
  Select,
  FormControl,
  RadioGroup,
  Radio,
  FormLabel,
  FormGroup,
  Grid,
} from '@material-ui/core';

export default function RecurringModal({
  onClose: handleClose,
  open: isOpen,
  value,
}) {
  const classes = useStyles();
  const [modalData, setModalData] = useState({
    recurringId: 0,
    functionName: '',
    report: '',
    linkId: 0,
    recurring: '',
    day: '',
    month: '',
    monday: false,
    tuesday: false,
    wednesday: false,
    thursday: false,
    friday: false,
    saturday: false,
    // sunday: false,
    settleDate: false,
    tradeDate: false,
    calendarDate: false,
  });
  const dailySelection = ['settleDate', 'tradeDate', 'calendarDate'];
  const weeklySelection = [
    // 'sunday',
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
  ];

  useEffect(() => {
    if (isOpen) {
      let modalValue = { ...value };
      setModalData(modalValue);
    }
    // eslint-disable-next-line
  }, [isOpen, value]);

  const handleChange = (e, checkboxValue) => {
    const input = e.currentTarget.name ? e.currentTarget : e.target;

    if (input.name === 'Daily') {
      modalData.settleDate = false;
      modalData.tradeDate = false;
      modalData.calendarDate = false;
      modalData.day = 0;
      modalData.month = 0;
    }
    if (input.name === 'Weekly') {
      // modalData.sunday = false;
      modalData.monday = false;
      modalData.tuesday = false;
      modalData.wednesday = false;
      modalData.thursday = false;
      modalData.friday = false;
      modalData.saturday = false;
      modalData.day = 0;
      modalData.month = 0;
    }
    if (input.name === 'Monthly' || input.name === 'Quarterly') {
      modalData.settleDate = false;
      modalData.tradeDate = false;
      modalData.calendarDate = false;
      // modalData.sunday = false;
      modalData.monday = false;
      modalData.tuesday = false;
      modalData.wednesday = false;
      modalData.thursday = false;
      modalData.friday = false;
      modalData.saturday = false;
      modalData.month = 0;
    }

    if (input.name !== 'Yearly') {
      modalData.settleDate = false;
      modalData.tradeDate = false;
      modalData.calendarDate = false;
      // modalData.sunday = false;
      modalData.monday = false;
      modalData.tuesday = false;
      modalData.wednesday = false;
      modalData.thursday = false;
      modalData.friday = false;
      modalData.saturday = false;
    }

    if (modalData.recurring === 'Daily') {
      if (dailySelection.includes(input.name)) {
        modalData.settleDate = false;
        modalData.tradeDate = false;
        modalData.calendarDate = false;
      }
    } else if (modalData.recurring === 'Weekly') {
      if (weeklySelection.includes(input.name)) {
        // modalData.sunday = false;
        modalData.monday = false;
        modalData.tuesday = false;
        modalData.wednesday = false;
        modalData.thursday = false;
        modalData.friday = false;
        modalData.saturday = false;
      }
    }

    setModalData({
      ...modalData,
      [input.name]:
        checkboxValue === true || checkboxValue === false
          ? checkboxValue
          : input.value,
    });
  };

  const daysDropdown = () => {
    var rows = [];
    for (var i = 1; i <= 31; i++) {
      rows.push(<MenuItem value={i}>{i}</MenuItem>);
    }
    return rows;
  };

  return (
    <Modal
      className={classes.modalBackdrop}
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={isOpen}
      onClose={() => {
        handleClose();
      }}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={isOpen}>
        <div className={classes.fadeModalMd}>
          <Typography
            id="transition-modal-title"
            className={classes.textBold}
            variant="h4"
            gutterBottom
          >
            Recurrence
          </Typography>
          <Box mt={5}>
            <form className={classes.modalForm} noValidate autoComplete="off">
              <Grid container spacing={3}>
                <Grid item xs={3}>
                  <FormControl component="fieldset">
                    <FormLabel component="legend">Reccurence Pattern</FormLabel>
                    <RadioGroup
                      aria-label="recurring"
                      name="recurring"
                      value={modalData.recurring}
                      onChange={handleChange}
                    >
                      <FormControlLabel
                        value="Daily"
                        control={<Radio />}
                        label="Daily"
                      />
                      <FormControlLabel
                        value="Weekly"
                        control={<Radio />}
                        label="Weekly"
                      />
                      <FormControlLabel
                        value="Monthly"
                        control={<Radio />}
                        label="Monthly"
                      />
                      <FormControlLabel
                        value="Quarterly"
                        control={<Radio />}
                        label="Quarterly"
                      />
                      <FormControlLabel
                        value="Yearly"
                        control={<Radio />}
                        label="Yearly"
                      />
                    </RadioGroup>
                  </FormControl>
                </Grid>
                <Grid item xs={9}>
                  {modalData.recurring === 'Daily' && (
                    <FormGroup
                      component="fieldset"
                      className={classes.formControl}
                    >
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={modalData.settleDate}
                            onChange={handleChange}
                            name="settleDate"
                            color="primary"
                          />
                        }
                        label="Settle Date"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={modalData.tradeDate}
                            onChange={handleChange}
                            name="tradeDate"
                            color="primary"
                          />
                        }
                        label="Trade Date"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={modalData.calendarDate}
                            onChange={handleChange}
                            name="calendarDate"
                            color="primary"
                          />
                        }
                        label="Calendar Date"
                      />
                    </FormGroup>
                  )}
                  {modalData.recurring === 'Weekly' && (
                    <FormGroup row>
                      {/* <FormControlLabel
                        control={
                          <Checkbox
                            checked={modalData.sunday}
                            onChange={handleChange}
                            name="sunday"
                            color="primary"
                          />
                        }
                        label="Sunday"
                      /> */}
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={modalData.monday}
                            onChange={handleChange}
                            name="monday"
                            color="primary"
                          />
                        }
                        label="Monday"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={modalData.tuesday}
                            onChange={handleChange}
                            name="tuesday"
                            color="primary"
                          />
                        }
                        label="Tuesday"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={modalData.wednesday}
                            onChange={handleChange}
                            name="wednesday"
                            color="primary"
                          />
                        }
                        label="Wednesday"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={modalData.thursday}
                            onChange={handleChange}
                            name="thursday"
                            color="primary"
                          />
                        }
                        label="Thursday"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={modalData.friday}
                            onChange={handleChange}
                            name="friday"
                            color="primary"
                          />
                        }
                        label="Friday"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={modalData.saturday}
                            onChange={handleChange}
                            name="saturday"
                            color="primary"
                          />
                        }
                        label="Saturday"
                      />
                    </FormGroup>
                  )}
                  {(modalData.recurring === 'Monthly' ||
                    modalData.recurring === 'Quarterly') && (
                    <FormControl style={{ minWidth: 120 }}>
                      <InputLabel shrink>Day</InputLabel>
                      <Select
                        displayEmpty
                        name="day"
                        fullWidth
                        value={modalData.day}
                        onChange={handleChange}
                      >
                        <MenuItem value="">
                          <em>Blank</em>
                        </MenuItem>
                        {daysDropdown()}
                      </Select>
                    </FormControl>
                  )}
                  {modalData.recurring === 'Yearly' && (
                    <div>
                      <FormControl style={{ minWidth: 120, marginRight: 30 }}>
                        <InputLabel shrink>Month</InputLabel>
                        <Select
                          fullWidth
                          name="month"
                          value={modalData.month}
                          onChange={handleChange}
                        >
                          <MenuItem value="">
                            <em>Blank</em>
                          </MenuItem>
                          <MenuItem value="1">January</MenuItem>
                          <MenuItem value="2">February</MenuItem>
                          <MenuItem value="3">March</MenuItem>
                          <MenuItem value="4">April</MenuItem>
                          <MenuItem value="5">May</MenuItem>
                          <MenuItem value="6">June</MenuItem>
                          <MenuItem value="7">July</MenuItem>
                          <MenuItem value="8">August</MenuItem>
                          <MenuItem value="9">September</MenuItem>
                          <MenuItem value="10">October</MenuItem>
                          <MenuItem value="11">November</MenuItem>
                          <MenuItem value="12">December</MenuItem>
                        </Select>
                      </FormControl>
                      <FormControl style={{ minWidth: 120 }}>
                        <InputLabel shrink>Day</InputLabel>
                        <Select
                          displayEmpty
                          name="day"
                          fullWidth
                          value={modalData.day}
                          onChange={handleChange}
                        >
                          <MenuItem value="">
                            <em>Blank</em>
                          </MenuItem>
                          {daysDropdown()}
                        </Select>
                      </FormControl>
                    </div>
                  )}
                </Grid>
              </Grid>
              <div className={classes.modalFooter}>
                <div
                  className={classes.grdCellNone}
                  style={{ marginRight: 10 }}
                >
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    onClick={() => {
                      handleClose();
                    }}
                  >
                    Close
                  </Button>
                </div>
                <div className={classes.grdCellNone}>
                  <Button
                    variant="contained"
                    color="secondary"
                    size="large"
                    onClick={() => {
                      handleClose(modalData);
                    }}
                  >
                    Save
                  </Button>
                </div>
              </div>
            </form>
          </Box>
        </div>
      </Fade>
    </Modal>
  );
}
