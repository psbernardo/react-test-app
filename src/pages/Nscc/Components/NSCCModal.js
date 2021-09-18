/*ReactJS*/
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';
import useStyles from '../../../styles';
import { dateProtoObjectToString } from '../../../services/ConvertService';
import {
  AutoCompleteSettleType,
  AutoCompleteExecBrokerNo,
  AutoCompleteContraExecBroker,
  AutoCompleteContraExecBrokerNo,
  AutoCompleteCurrency,
} from '../../../components/AutoComplete/SelectSystemCode';
import 
  SelectAutoCompleteBroker
 from '../../../components/AutoComplete/SelectAutoCompleteBroker';
 import {
  DropDownListSide
} from '../../../components/AutoComplete/DropDownListSystemCode';
import 
  SelectSystemCode
 from '../../../components/Dropdown/SelectSystemCode';
import SymbolSelect from '../../../components/AutoComplete/SelectSymbol';
import {
  getTradeDate,
  getSettleDateTradate,
  getParticipationNo,
} from '../../../services/ProfileService';
import {
  listCusip,
  lazyBroker
} from '../../../services/CommonService';

import {
  Typography,
  Button,
  Modal,
  Backdrop,
  Fade,
  Box,
  TextField,
  InputAdornment,
} from '@material-ui/core';
import { TrendingUpRounded } from '@material-ui/icons';

function numberFormatCustom(props) {
  const { inputRef, onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      thousandSeparator
      isNumericString
    />
  );
}

numberFormatCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default function NSCCModal({
  onClose: handleClose,
  open: isOpen,
  value,
}) {
  const classes = useStyles();
  const [brokers, setBrokers] = React.useState([]);
  const [modalData, setModalData] = useState({
    submitterParticipantNo: '',
    settleType: '',
    execBroker: '',
    execBrokerNo: '',
    contraExecBroker: '',
    contraExecBrokerNo: '',
    cusip: '',
    symbol:'',
    currencyCode: 'USD',
    correspondent: '',
    grossAmount: '',
    netAmount:'',
    price:'',
    commision:'',
    taxes:'',
    fees:'',
    accuredInterest:'',
    qty:'',
    commission:'',
    accruedInterest:'',
    tradeDate: '',
    settleDate:'',
    side:'',
  });


  useEffect(() => {
   async  function getSettleDate() {
     getSettleDateTradate(modalData.tradeDate).then((settleDate) => {
        setModalData({
          ...modalData,
          settleDate: settleDate,
        });
      }).catch((err)=>{});
     
    }
    async function getCusip() {
      if(modalData.symbol){
     listCusip(modalData.tradeDate,modalData.symbol).then((res) =>{
        setModalData({
          ...modalData,
          "cusip": res.cusip,
        });
      }).catch((err)=>{});
    }
  }
    getSettleDate();
    getCusip();
  }, [modalData.tradeDate,modalData.symbol]);

  useEffect(() => {
    async function callFunc() {
    const gross = (modalData.qty || 0) * (modalData.price || 0)
    const totalFees = (parseFloat(modalData.commission) || 0) + (parseFloat(modalData.taxes) || 0) + (parseFloat(modalData.fees) || 0) + (parseFloat(modalData.accruedInterest) || 0) 
    const netAmount = gross - totalFees;
    setModalData({
      ...modalData,
      grossAmount:gross.toFixed(2),
      netAmount:netAmount.toFixed(2),
    });
  }
  callFunc();
  }, [modalData.qty, 
     modalData.price,
     modalData.commission,
     modalData.taxes,
     modalData.fees,
     modalData.accruedInterest]);

    useEffect(() => {
      async  function callFunc() {
      if (!brokers.length ) {
        const { brokersList } = await lazyBroker({
          broker: "",
           limit: 3000,
        });
        console.log(brokersList);
        setBrokers(brokersList.filter((s) => s.broker));
      }
    }
    callFunc();
    },[]);

     useEffect(() => {
       async function callFunc()  {
        const exebroc =  brokers.find((o) => o.broker === modalData.execBroker);
        if(exebroc){
          setModalData({
            ...modalData,
            execBrokerNo:exebroc.brokerNo,
          });
         }
       }
       callFunc();
    }, [modalData.execBroker]);

    useEffect(() => {
        const exebroc =  brokers.find((o) => o.broker === modalData.contraExecBroker);
      if(exebroc){
        setModalData({
          ...modalData,
          contraExecBrokerNo:exebroc.brokerNo,
        });
       }
    }, [modalData.contraExecBroker]);


    useEffect(() => {
      async function init() {
        let modalValue = {
          ...modalData,
        };
        if(value?.nsccId > 0){
          modalValue = {
            ...value,
          };
          modalValue.tradeDate =dateProtoObjectToString(value.tradeDate);
          modalValue.settleDate = dateProtoObjectToString(value.settleDate);
        }else{
          const tradeDate = await getTradeDate();
          const settleDate = await getSettleDateTradate(tradeDate);
          const participationNo  = await getParticipationNo();
          modalValue.submitterParticipantNo = participationNo;
          modalValue.tradeDate = tradeDate;
          modalValue.settleDate = settleDate;
        }
      setModalData(modalValue);
      }
  
      if (isOpen) {
          init();
      }
    }, [isOpen, value]);


  const handleChange = async (e, x) => {
    const input = e.currentTarget?.name ? e.currentTarget : e.target;
    setModalData({
      ...modalData,
      [input.name]: input.value,
    });
  };

  function onSubmmiterParticipantNoChange(e, name) {
    const input = e.currentTarget.name ? e.currentTarget : e.target;
   let isValid = /^[0-9]{0,4}$/.test(input.value)
   if(isValid){
    setModalData({
      ...modalData,
      [input.name]: input.value,
    });
   
   }
  }


  


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
        <div className={classes.fadeModalLg}>
          <Typography
            id="transition-modal-title"
            className={classes.textBold}
            variant="h4"
            gutterBottom
          >
            {value?.nsccId > 0 ? 'Edit' : 'Add New'} NSCC
          </Typography>
          <Box id="transition-modal-description">
            <form className={classes.modalForm} noValidate autoComplete="off">
              <div className={classes.grdRow}>
                <div className={classes.grdCell1} style={{ marginRight: 14 }}>
                  <TextField
                    fullWidth
                    name="tradeDate"
                    required={true}
                    label="Trade Date"
                    type="date"
                    value={modalData.tradeDate}
                    onChange={handleChange}
                    InputLabelProps={{ shrink: true }}
                  />
                </div>
                <div className={classes.grdCell1} style={{ marginRight: 14 }}>
                  <TextField
                    name="settleDate"
                    fullWidth
                    required={true}
                    label="Settle Date"
                    type="date"
                    value={modalData.settleDate}
                    onChange={handleChange}
                    InputLabelProps={{ shrink: true }}
                  />
                </div>
                <div className={classes.grdCell1} style={{ marginRight: 14 }}>
                  <TextField
                    name="submitterParticipantNo"
                    label="Submitter Participant No"
                    
                    required={true}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    inputProps={{pattern: "^[0-9]{4,6}$" }}
                    value={modalData.submitterParticipantNo}
                    onChange={onSubmmiterParticipantNoChange}
                  />
                </div>
                <div className={classes.grdCell1} style={{ marginRight: 14 }}>
                <SelectSystemCode
                 onChange={handleChange}
                 required={true}
                  label="Side"
                  value={modalData.side}
                  name="side"
                  optionType="Equity"
                  type ="Side"
                  subType="Equity"
                 ></SelectSystemCode>
                </div>
              </div>
              <div className={classes.grdRow}>
                <div className={classes.grdCell1} style={{ marginRight: 14 }}>
                  <SelectAutoCompleteBroker
                    required={true}
                    freeSolo={true}
                    name="execBroker"
                    label="Exec Broker"
                    value={modalData.execBroker}
                    onChange={handleChange}
                  ></SelectAutoCompleteBroker>
                </div>
                <div className={classes.grdCell1} style={{ marginRight: 14 }}>
                <TextField
                   
                    name="execBrokerNo"
                    label="Exec Broker No"
                    required={true}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    value={modalData.execBrokerNo}
                    onChange={handleChange}
                  />
                </div>
                <div className={classes.grdCell1} style={{ marginRight: 14 }}>
                <SelectAutoCompleteBroker
                    required={true}
                    freeSolo={true}
                    name="contraExecBroker"
                    label="Contra Exec Broker"
                    value={modalData.contraExecBroker}
                    onChange={handleChange}
                  ></SelectAutoCompleteBroker>
                </div>
                <div className={classes.grdCell1} style={{ marginRight: 14 }}>
                <TextField
                    name="contraExecBrokerNo"
                    label="Contra Exec Broker No"
                    required={true}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    value={modalData.contraExecBrokerNo}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className={classes.grdRow}>
              <div className={classes.grdCell1} style={{ marginRight: 14 }}>
              <SymbolSelect
                required={true}
                freeSolo={true}
                name={"symbol"}
                id={"symbol"}
                labelid="name"
                label="Symbol"
                value={modalData.symbol}
                onChange={handleChange}
                assetType='E'
                />
                </div>
                <div className={classes.grdCell1} style={{ marginRight: 14 }}>
                <TextField
                    name="cusip"
                    label="Cusip"
                    required={true}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    value={modalData.cusip}
                    onChange={handleChange}
                  />
                </div>
                <div className={classes.grdCell1} style={{ marginRight: 14 }}>
                 
                </div>
                <div
                  className={classes.grdCell1}
                  style={{ marginRight: 14 }}
                ></div>
              </div>
              <div className={classes.grdRow}>
                <div className={classes.grdCell1} style={{ marginRight: 14 }}>
                  <TextField
                    name="qty"
                    label="QTY"
                    required={true}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    value={modalData.qty}
                    onChange={handleChange}
                    InputProps={{
                      inputComponent: numberFormatCustom,
                      startAdornment: (
                        <InputAdornment position="start">
                           {''}
                        </InputAdornment>
                      ),
                    }}
                  />
                </div>
                <div className={classes.grdCell1} style={{ marginRight: 14 }}>
                  <TextField
                    name="price"
                    label="Price"
                    required={true}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    value={modalData.price}
                    onChange={handleChange}
                    InputProps={{
                      inputComponent: numberFormatCustom,
                      startAdornment: (
                        <InputAdornment position="start">
                          {'$'}
                        </InputAdornment>
                      ),
                    }}
                  />
                </div>
                <div className={classes.grdCell1} style={{ marginRight: 14 }}>
                  <TextField
                    name="commission"
                    label="Commission"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    value={modalData.commission}
                    onChange={handleChange}
                    InputProps={{
                      inputComponent: numberFormatCustom,
                      startAdornment: (
                        <InputAdornment position="start">
                          {'$'}
                        </InputAdornment>
                      ),
                    }}
                  />
                </div>
                <div className={classes.grdCell1} style={{ marginRight: 14 }}>
                  <TextField
                    name="taxes"
                    label="Taxes"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    value={modalData.taxes}
                    onChange={handleChange}
                    InputProps={{
                      inputComponent: numberFormatCustom,
                      startAdornment: (
                        <InputAdornment position="start">
                          {'$'}
                        </InputAdornment>
                      ),
                    }}
                  />
                </div>
              </div>
              <div className={classes.grdRow}>
                <div className={classes.grdCell1} style={{ marginRight: 14 }}>
                  <TextField
                    name="fees"
                    label="Fees"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    value={modalData.fees}
                    onChange={handleChange}
                    InputProps={{
                      inputComponent: numberFormatCustom,
                      startAdornment: (
                        <InputAdornment position="start">
                          {'$'}
                        </InputAdornment>
                      ),
                    }}
                  />
                </div>
                <div className={classes.grdCell1} style={{ marginRight: 14 }}>
                  <TextField
                    name="accruedInterest"
                    label="Accrued Interest"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    defaultValue="0"
                    value={modalData.accruedInterest  }
                    onChange={handleChange}
                    InputProps={{
                      inputComponent: numberFormatCustom,
                      startAdornment: (
                        <InputAdornment position="start">
                          {'$'}
                        </InputAdornment>
                      ),
                    }}
                  />
                </div>
                <div className={classes.grdCell1} style={{ marginRight: 14 }}>
                  <TextField
                    disabled={true}
                    name="grossAmount"
                    label="Gross Amount"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    value={modalData.grossAmount}
                    onChange={handleChange}
                    InputProps={{
                      inputComponent: numberFormatCustom,
                      startAdornment: (
                        <InputAdornment position="start">
                          {'$'}
                        </InputAdornment>
                      ),
                    }}
                  />
                </div>
                <div className={classes.grdCell1} style={{ marginRight: 14 }}>
                  <TextField
                   disabled={true}
                    name="netAmount"
                    label="Net Amount"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    value={modalData.netAmount}
                    onChange={handleChange}
                    InputProps={{
                      inputComponent: numberFormatCustom,
                      startAdornment: (
                        <InputAdornment position="start">
                          {'$'}
                        </InputAdornment>
                      ),
                    }}
                  />
                </div>
              </div>
              <div className={classes.modalFooter}>
                <div
                  className={classes.grdCellnone}
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
                <div className={classes.grdCellnone}>
                  <Button
                    variant="contained"
                    color="secondary"
                    size="large"
                    onClick={() => {
                      handleClose(modalData, (value?.nsccId > 0));
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
