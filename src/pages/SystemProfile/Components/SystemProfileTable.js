import React, { useState, useEffect } from 'react';
import moment from 'moment-timezone';
import {
  Box,
  Button,
  Card,
  CardContent,
  InputLabel,
  TextField,
  Select,
  MenuItem,
} from '@material-ui/core';
import {
  notifyInfo,
  notifyError,
  notifySuccess,
} from 'components/Notification/Notification';
import {
  listProfile,
  executeProfile,
  updateProfile,
} from '../../../services/SystemProfileService';
import SearchButton from '../../../components/Button/Search';
import RollbackDateModal from './RollbackDateModal';
import {
  getPreviousDate,
  getSystemDate,
  getTradeDate,
  getSettleDate,
} from '../../../services/ProfileService';

import useStyles from '../../../styles';

export default function SystemProfileTable({ params }) {
  const classes = useStyles();
  //Set value of system date search parameter
  useEffect(
    () => {
      async function init() {
        const systemDate = await getSystemDate();
        const tradeDate = await getTradeDate();
        const settleDate = await getSettleDate();
        const previousDate = await getPreviousDate();

        setSearchData({ ...searchData, systemDate: systemDate });

        const data = await listProfile(searchData);
        console.log(data);
        setProfileData({
          ...profileData,
          systemDate: systemDate,
          tradeDate: tradeDate,
          settleDate: settleDate,
          previousDate: previousDate,
          baseCurrency: data.profile.baseCurrency,
          versionNo: data.profile.versionNo,
          participantNo: data.profile.participantNo,
          correspondent: data.profile.correspondent,
          debitSign: data.profile.debitSign,
          creditSign: data.profile.creditSign,
        });
      }

      init();
    },
    // eslint-disable-next-line
    []
  );

  const [loading, setLoading] = React.useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [modalRollbackDate] = React.useState(
    moment(new Date()).format('yyyy-MM-DD')
  );

  const [profileData, setProfileData] = useState({
    systemDate: '',
    tradeDate: '',
    settleDate: '',
    previousDate: '',
    baseCurrency: '',
    versionNo: '',
    participantNo: '',
    debitSign: '',
    creditSign: '',
  });

  // //search parameters initial value
  const [searchData, setSearchData] = useState({
    search: '',
  });

  const executeProcess = async (process, rollbackDate) => {
    setIsLoading(true);
    try {
      await executeProfile(process, rollbackDate);
      notifySuccess(process + ' has been processed.');
      handleSearch();
    } catch (error) {
      notifyError(error.message);
    }
    setIsLoading(false);
  };

  const handleClose = async (rollbackDate, setModalIsLoading) => {
    if (!rollbackDate) return setOpen(false);

    await executeProcess('rollback', rollbackDate);
    setModalIsLoading(false);
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleSearch = async () => {
    try {
      setLoading(true);
      const systemDate = await getSystemDate();
      const tradeDate = await getTradeDate();
      const settleDate = await getSettleDate();
      const previousDate = await getPreviousDate();

      setSearchData({ ...searchData, systemDate: systemDate });

      const data = await listProfile(searchData);
      console.log(data);
      setProfileData({
        ...profileData,
        systemDate: systemDate,
        tradeDate: tradeDate,
        settleDate: settleDate,
        previousDate: previousDate,
        baseCurrency: data.profile.baseCurrency,
        versionNo: data.profile.versionNo,
        participantNo: data.profile.participantNo,
        debitSign: data.profile.debitSign,
        creditSign: data.profile.creditSign,
      });
      if (!data.profile) {
        notifyInfo('0 search results.');
      } else {
        notifyInfo('1 search results.');
      }
    } catch (error) {
      notifyError(error.message);
    } finally {
      setLoading(false);
    }
  };

  function onSubmmiterParticipantNoChange(e, name) {
    const input = e.currentTarget.name ? e.currentTarget : e.target;
    let isValid = /^[0-9]{0,4}$/.test(input.value);
    if (isValid) {
      setProfileData({
        ...profileData,
        [input.name]: input.value,
      });
    }
  }

  return (
    <div className={classes.root}>
      <Box component="div" mt={5}>
        <div className={classes.actionContainer}>
          <div className={classes.grdCellNone}>
            <SearchButton
              onClick={handleSearch}
              loading={loading}
              hideFilterButton={true}
            />
          </div>
          <div className={classes.grdCellNone} style={{ marginRight: 10 }}>
            <Button
              disabled={isLoading}
              variant="contained"
              color="primary"
              size="large"
              onClick={() => {
                executeProcess('eod');
              }}
            >
              Process EOD
            </Button>
          </div>
          <div className={classes.grdCellNone} style={{ marginRight: 10 }}>
            <Button
              disabled={isLoading}
              variant="contained"
              color="primary"
              size="large"
              //startIcon={<AddIcon />}
              onClick={() => {
                executeProcess('bod');
              }}
            >
              Process BOD
            </Button>
          </div>
          <div className={classes.grdCellNone} style={{ marginRight: 10 }}>
            <Button
              disabled={isLoading}
              variant="contained"
              color="primary"
              size="large"
              //startIcon={<AddIcon />}
              onClick={() => handleOpen('')}
            >
              Rollback
            </Button>
          </div>

          <div className={classes.grdCellNone} style={{ marginRight: 10 }}>
            <Button
              disabled={isLoading}
              variant="contained"
              color="secondary"
              size="large"
              //startIcon={<AddIcon />}
              onClick={() => {
                updateProfile(profileData).then((res) => {
                  notifySuccess('System Profile updated');
                });
              }}
            >
              Update
            </Button>
          </div>
        </div>
        <div className={classes.grdRow}></div>
        <Card className={classes.root} variant="outlined">
          <CardContent>
            <div>
              <div className={classes.grdRow}>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <InputLabel shrink id="systemDate">
                    System Date
                  </InputLabel>
                  <TextField
                    fullWidth
                    type="date"
                    labelid="systemDate"
                    value={profileData.systemDate}
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                </div>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <InputLabel shrink id="tradeDate">
                    Trade Date
                  </InputLabel>
                  <TextField
                    fullWidth
                    type="date"
                    labelid="tradeDate"
                    value={profileData.tradeDate}
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                </div>
              </div>
              <div className={classes.grdRow}>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <InputLabel shrink id="settleDate">
                    Settle Date
                  </InputLabel>
                  <TextField
                    fullWidth
                    type="date"
                    labelid="settleDate"
                    value={profileData.settleDate}
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                </div>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <InputLabel shrink id="previousDate">
                    Previous Date
                  </InputLabel>
                  <TextField
                    fullWidth
                    type="date"
                    labelid="previousDate"
                    value={profileData.previousDate}
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                </div>
              </div>
              <div className={classes.grdRow}>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <InputLabel shrink id="baseCurrency">
                    Base Currency
                  </InputLabel>
                  <TextField
                    fullWidth
                    labelid="baseCurrency"
                    value={profileData.baseCurrency}
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                </div>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <InputLabel shrink id="versionNo">
                    Version No
                  </InputLabel>
                  <TextField
                    fullWidth
                    labelid="versionNo"
                    value={profileData.versionNo}
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                </div>
              </div>

              <div className={classes.grdRow}>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <InputLabel shrink id="debitSign">
                    Debit Sign
                  </InputLabel>
                  <Select
                    labelId="debitSign"
                    displayEmpty
                    fullWidth
                    value={profileData.debitSign}
                    onChange={(e) =>
                      setProfileData({
                        ...profileData,
                        debitSign: e.target.value,
                      })
                    }
                  >
                    <MenuItem value="+">+</MenuItem>
                    <MenuItem value="-">-</MenuItem>
                  </Select>
                </div>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <InputLabel shrink id="creditSign">
                    Credit Sign
                  </InputLabel>
                  <Select
                    labelId="creditSign"
                    displayEmpty
                    fullWidth
                    value={profileData.creditSign}
                    onChange={(e) =>
                      setProfileData({
                        ...profileData,
                        creditSign: e.target.value,
                      })
                    }
                  >
                    <MenuItem value="+">+</MenuItem>
                    <MenuItem value="-">-</MenuItem>
                  </Select>
                </div>
              </div>

              <div className={classes.grdRow}>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <InputLabel shrink id="correspondent">
                    Correspondent
                  </InputLabel>
                  <TextField
                    fullWidth
                    labelid="correspondent"
                    name="correspondent"
                    inputProps={{ maxLength: 4 }}
                    value={profileData.correspondent}
                    onChange={(e) =>
                      setProfileData({
                        ...profileData,
                        correspondent: e.target.value,
                      })
                    }
                  />
                </div>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <InputLabel shrink id="participantNo">
                    Participant No
                  </InputLabel>
                  <TextField
                    fullWidth
                    labelid="participantNo"
                    name="participantNo"
                    value={profileData.participantNo}
                    onChange={onSubmmiterParticipantNoChange}
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </Box>
      {open && (
        <RollbackDateModal
          onClose={handleClose}
          open={open}
          value={modalRollbackDate}
        ></RollbackDateModal>
      )}
    </div>
  );
}
