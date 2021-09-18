/*ReactJS*/
import React, { useState, useEffect, useCallback } from 'react';
import useStyles from '../../../styles';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';
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
import SelectMasterAccountNo from '../../../components/AutoComplete/SelectMasterAccountNo';
import SelectBranch from '../../../components/AutoComplete/SelectBranch';
import SelectCorrespondent from '../../../components/AutoComplete/SelectCorrespondent';
import SelectRep from '../../../components/AutoComplete/SelectRep';
import SelectAccountNo from '../../../components/AutoComplete/SelectAccountNo';
import SelectAccountProcessNoBlank from '../../../components/Dropdown/SelectAccountProcessNoBlank';
import SelectSystemCode from '../../../components/Dropdown/SelectSystemCode';
import { listSystemCode } from '../../../services/SystemCodeService';
import { notifyError } from 'components/Notification/Notification';
import { dateProtoObjectToString } from '../../../services/ConvertService';
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



export default function AccountProcessModal({
  onClose: handleClose,
  open: isOpen,
  value,
}) {
  const classes = useStyles();
  const [modalData, setModalData] = useState({});
  const [isEdit, setIsEdit] = React.useState(false);
  const [systemCode,setSystemCode] = React.useState([]);

  const [subType,setSubType] =React.useState('');
  const [description,setDescription] =React.useState('');
  const [note,setNote] =React.useState('');

  const fetchSystemCode = useCallback(async () => {
    const resp = await listSystemCode({type:"Account Process"})
    setSystemCode(resp.systemCodesList);
  }, [])

    useEffect(()=>{
        fetchSystemCode();
    },[fetchSystemCode]);



  useEffect(() => {
    if (isOpen) {
      setModalData({ ...value
        , toDate:dateProtoObjectToString(value.toDate)
        , fromDate:dateProtoObjectToString(value.fromDate) });
      if (value.processId) {
        setIsEdit(true);
      }
    }
  }, [isOpen, value]);

  useEffect(()=>{
    if(systemCode.length > 0){
        let sysCode = systemCode.find((s) => {
            return s.code === modalData.process;
          })
          setSubType(sysCode.subType);
          setDescription(sysCode.description);
          setNote(sysCode.note);
         
          let modalDataCopy = {...modalData};
          let val = modalDataCopy[toProperName(sysCode.subType)];
          if (val=== undefined ){
            modalDataCopy[toProperName(sysCode.subType)] = '';
          }

          if (note === "Date Range") {
            if (modalData.fromDate === undefined){
              modalDataCopy.fromDate ='';
              }
            if (modalData.toDate === undefined){
              modalDataCopy.toDate = '';
              }
          }
          let valDesc = modalDataCopy[toProperName(sysCode.description)];
          if(valDesc === undefined){
            if(sysCode.description === "Amount"){
              modalDataCopy.amt ='';
            }else  if(sysCode.description === "Quantity"){
              modalDataCopy.qty ='';
            }else{
              modalDataCopy['' + toProperName(sysCode.description)] = '';
            }
          }

          if(modalDataCopy.status === undefined){
            modalDataCopy.status ='Active';
          }

          // setModalData(modalDataCopy);
    }
  },[modalData.process,systemCode]);

  const handleChange = (e) => {
    const input = e.currentTarget?.name ? e.currentTarget : e.target;
    setModalData({
      ...modalData,
      [input.name]: input.value,
    });
  };

  const accountLevelInput = (subType) => {
    if (subType === "Master Account No"){
      return (<SelectMasterAccountNo
        required={true}
        name="masterAccountNo"
        label="Master Account No"
        value={modalData.masterAccountNo}
        correspondent={modalData.correspondent}
        onChange={handleChange}
        ></SelectMasterAccountNo>
      )
    }
    if (subType === "Correspondent"){
        return (<SelectCorrespondent
          required={true}
          name="correspondent"
          label="Correspondent"
          value={modalData.correspondent}
          onChange={handleChange}>
        </SelectCorrespondent>
      )
    }
    if (subType === "Rep"){
        return (<SelectRep
          freeSolo={true}
          required={true}
          name="rep"
          label="Rep"
          value={modalData.rep}
          onChange={handleChange}> 
        </SelectRep>
      )
    }
    if (subType === "Account No"){
        return (<SelectAccountNo
          freeSolo={true}
          required={true}
          name="accountNo"
          label="Account No"
          value={modalData.accountNo}
          correspondent=""
          onChange={(e) => setModalData({...modalData,accountNo:e.target.value})}
          allowInputChange={true}>
        </SelectAccountNo>
      )
    }
    if (subType ==="Branch"){
        return (<SelectBranch
          freeSolo={true}
          required={true}
          name="branch"
          label="Branch"
          value={modalData.branch}
          onChange={handleChange}>
        </SelectBranch>
      );
    }
  } 

  const GetInput = (description) => {
    if (description === "Rate") {
      return (<TextField
        required={true}
        name="rate"
        label="Rate"
        value={modalData.rate}
        onChange={handleChange}
        InputProps={{
          inputComponent: numberFormatCustom,
          startAdornment: (<InputAdornment position="start">{'%'}</InputAdornment>),
        }}
        InputLabelProps={{ shrink: true }}
        />
      )
    } 

    if (description === "Amount") {
      return (<TextField
        required={true}
        name="amt"
        label="Amount"
        value={modalData.amt}
        onChange={handleChange}
        InputProps={{
          inputComponent: numberFormatCustom,
          startAdornment: (<InputAdornment position="start">{'$'}</InputAdornment>),
        }}
        InputLabelProps={{ shrink: true }}
        />
      )
    } 

    if (description === "Quantity"){
        return (<TextField
            required={true}
            name="qty"
            label="QTY"
            value={modalData.qty}
            onChange={handleChange}
            InputProps={{
              inputComponent: numberFormatCustom,
              startAdornment: (<InputAdornment position="start">{''}</InputAdornment>),
            }}
            InputLabelProps={{ shrink: true }}
          />
        )
    }

    if (description === "Type"){
      return ( <SelectSystemCode
        required={true}
        name="type"
        label="Type"
        type = {modalData.process}
        subType=""
        value={modalData.type}
        onChange={handleChange}
      ></SelectSystemCode>
      )
  }
    
   
  }

  function toProperName(string) {
      let str = string.charAt(0).toLowerCase() + string.slice(1);
    return  str.replace(/\s/g, '')
  }

  const getValue = (name)=>{
      let val = '';
    if(name === "Amount"){
        val = modalData['amt'];
    }else  if(name === "Quantity"){
        val = modalData['qty'];
    }else{
        val =  modalData[toProperName(name)];
    }
    return val?.trim();
  }

  const isEmpty = (name) => {
   let val = getValue(name);
   return val?.trim() === "";
  }

  const validate = ()=>{
    let valid = true;
    if (note === "Date Range") {
        if (modalData.fromDate === ''){
            notifyError('From Date is required.');
            valid = false;
          }
        if (modalData.toDate === ''){
            notifyError('To Date is required.');
            valid = false;
          }
      }

      if (isEmpty(description) && description !== 'None' ){
        notifyError(description +' is required.');
        valid = false;
      }

      if (isEmpty(subType)){
        notifyError(subType +' is required.');
        valid = false;
      }

      if (modalData?.status?.trim() === ''){
        notifyError('Status is required.');
        valid = false;
      }
      return valid;
  }

  const cleanData = () =>{
    const modalDataCopy = {...modalData};
    for(let item in systemCode){
      
      try{
        if (item.subType !== subType){
          modalDataCopy[toProperName(item.subType)] = '';
        }

        if(item.description !== description){
          if(item.description === "Amount"){
             modalData['amt']='';
          }else  if(item.description === "Quantity"){
            modalData['qty']='';
          }else{
             modalData['' + toProperName(item.description)] = '';
          }
        }

        if(note !== 'Date Range'){
          modalData['fromDate']='';
          modalData['toDate']='';
        }

      }catch{
       
      }
      return modalData;
    }
  }

  const status = () =>{
      return ( <SelectSystemCode
        fullWidth
        required={true}
        name="status"
        label="Status"
        type ="Status"
        subType="AI"
        value={modalData.status}
        onChange={handleChange}
      ></SelectSystemCode>)
  }

  const notes = () => {
    return (
      <TextField
      fullWidth
      name="note"
      label="Note"
      type="text"
      value={modalData.note}
      onChange={handleChange}
       InputLabelProps={{ shrink: true }}
    />
    )
  }

  const statusOrAmount = (isTrue)=>{
      if(isTrue){
          return status();
      }else{
          if (description === "None"){
            return notes();
          }else{
            return GetInput(description)
          }
         
      }
  }



  return (
    <Modal
      className={classes.modalBackdrop}
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={isOpen}
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
            {isEdit ? 'Edit' : 'Add New'} Account Process
          </Typography>
          <Box mt={5}>
            <form className={classes.modalForm} noValidate autoComplete="off">
              <div className={classes.grdRow}>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                  <SelectAccountProcessNoBlank
                    name="process"
                    label="Process"
                    type ="Account Process"
                    subType=""
                    optionType=""
                    value={modalData.process}
                    onChange={handleChange}
                  ></SelectAccountProcessNoBlank>
                </div>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                    {accountLevelInput(subType)}
                </div>
                <div className={classes.grdCell1}>
                    {statusOrAmount(description === "None")}
                </div>
              </div>
              <div className={classes.grdRow}>
                <div className={classes.grdCell1 } style={ description !== "None" ? { marginRight: 30, maxWidth: "31%" } : {marginRight: 30}}>
                    {statusOrAmount(description !== "None")}
                </div>
                <div className={description === "None" ? classes.grdCellNone : classes.grdCell1 } style={{ marginRight: 15 }}>
                  {description !== "None" && notes()}
                </div>
                {/* <div className={classes.grdCell1}>
                </div> */}
              </div>
              <div className={classes.grdRow}>
              <div className={classes.grdCell1} style={{ marginRight: 30 }}>
              { note === "Date Range" && (
                      <TextField
                        fullWidth
                        required={true}
                        name="fromDate"
                        label="From Date"
                        type="date"
                        value={modalData.fromDate}
                        onChange={handleChange}
                        InputLabelProps={{ shrink: true }}
                      />
                    ) 
                    }
                </div>
                <div className={classes.grdCell1} style={{ marginRight: 30 }}>
                { note === "Date Range" && (
                              <TextField
                              required={true}
                              name="toDate"
                              fullWidth
                              label="To  Date"
                              type="date"
                              value={modalData.toDate}
                              onChange={handleChange}
                              InputLabelProps={{ shrink: true }}
                              inputProps={{
                                min: modalData.fromDate,
                              }}
                            />
                    ) 
                    }
                </div>
                <div className={classes.grdCell1}>
               
                </div>
              </div>
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
                        let isValid = validate();
                        if (isValid === true){
                          handleClose(cleanData(), isValid, {description:description,subType:subType,note:note});
                        }
                     
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
