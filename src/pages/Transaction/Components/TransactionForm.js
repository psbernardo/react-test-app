import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';
import {
  stringToProtoDate,
  stringToProtoTradeTimeStamp,
} from '../../../services/ConvertService';

import {
  Transaction,
  ReadTransactionRequest,
  TransactionFee,
  GetFeeRequest,
  ListFeesRequest,
  TransactionServiceClient,
  GetAmountSignRequest,
} from '../../../proto/trnspb/transaction_grpc_web_pb';
import {
  ListAccountRequest,
  ListServiceClient,
} from '../../../proto/commonpb/list_grpc_web_pb';
import {
  ReadProfileRequest,
  ProfileServiceClient,
  SettleDateRequest,
} from '../../../proto/admpb/profile_grpc_web_pb';
import { listProfile } from '../../../services/SystemProfileService';
import {
  Typography,
  Box,
  TextField,
  Button,
  AccordionDetails,
  InputAdornment,
  Tooltip,
} from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import Alert from '@material-ui/lab/Alert';
import {
  notifySuccess,
  notifyError,
} from 'components/Notification/Notification';
import {
  AssignmentReturn as ImportIcon,
  CollectionsBookmarkRounded,
} from '@material-ui/icons';
/*styles */
import useStyles from '../styles';

/*Moment JS*/
import moment from 'moment-timezone';
import { formatPbDate } from 'lib/fmt';

/*Custom components*/
import SelectAccountNo from '../../../components/AutoComplete/SelectAccountNo';
import SelectCorrespondent from '../../../components/AutoComplete/SelectCorrespondent';
import SymbolSelect from '../../../components/AutoComplete/SelectSymbol';
import VendorSelect from '../../../components/AutoComplete/Vendor';
import SelectSubAccountNo from '../../../components/AutoComplete/SelectSubAccountNo';
import SelectAutoCompleteBroker from '../../../components/AutoComplete/SelectAutoCompleteBroker';
import { DropDownListCapacity } from '../../../components/AutoComplete/DropDownListSystemCode';
import TransactionUploadModal from './TransactionUploadModal';
import {
  ReadPendingTrnsRequest,
  PendingTrnsServiceClient,
} from '../../../proto/trnspb/pendingtrns_grpc_web_pb';
import { SelectEntryType } from '../../../components/AutoComplete/SelectEntryType';
import { SelectSide } from '../../../components/AutoComplete/SelectSystemCode';

import {
  LazySystemCodePromise,
  getCorrespondentPromise,
} from '../../../services/CommonService';

import FeesComponent from './Fees';
import { auth } from '../../../lib/auth/Auth';
const transactionClient = new TransactionServiceClient(
  window.env.GRPC_ENDPOINT,
  {},
  { ...auth }
);
const accounts = new ListServiceClient(
  window.env.GRPC_ENDPOINT,
  {},
  { ...auth }
);
const systemDate = new ProfileServiceClient(
  window.env.GRPC_ENDPOINT,
  {},
  { ...auth }
);
const pendingtrnsClient = new PendingTrnsServiceClient(
  window.env.GRPC_ENDPOINT,
  {},
  { ...auth }
);

function saveTransaction(
  transactionClient,
  params,
  trnsId,
  screen,
  cancelAndCorrect,
  pending,
  actionType,
  setMessage,
  setPendingTrnsId,
  pendingTrnsId,
  callbackAction
) {
  let req = new Transaction();
  req.setProcess(params.process);
  if (screen === 'Trade') {
    if (!params.entryType) {
      notifyError('Entry Type is required.');
      return;
    }
    if (!params.accountNumber) {
      notifyError('Account No. is required.');
      return;
    }
    if (!params.contraAccount) {
      notifyError('Contra Account is required.');
      return;
    }
    if (!params.side) {
      notifyError('Side is required.');
      return;
    }
    if (!params.symbol) {
      notifyError('Symbol is required.');
      return;
    }
    if (!params.qty) {
      notifyError('Quantity is required.');
      return;
    }
    if (!params.price) {
      notifyError('Price is required.');
      return;
    }
    if (!params.tradeDate) {
      notifyError('Trade Date is required.');
      return;
    }
    if (!params.capacity) {
      notifyError('Capacity is required.');
      return;
    }
    if (!params.executingVenue) {
      notifyError('Executing Venue is required.');
      return;
    }

    req.setEntryType(params.entryType);
    req.setCorrespondent(params.correspondent);
    req.setContraCorrespondent(params.contraCorrespondent);
    req.setAccountNo(params.accountNumber);
    req.setContraAccountNo(params.contraAccount);
    req.setSide(params.side);
    req.setSymbol(params.symbol);
    req.setQty(params.qty.numberformat.toString());
    req.setPrice(params.price.numberformat.toString());
    req.setGrossAmt(
      params.grossAmount.numberformat
        ? params.grossAmount.numberformat.toString()
        : '0'
    );
    req.setNetAmt(params.netAmount.numberformat.toString());
    req.setTradeAt(stringToProtoTradeTimeStamp(params.tradeDate));
    req.setTradeDate(stringToProtoDate(params.tradeDate));
    req.setSettleDate(stringToProtoDate(params.settleDate));
    req.setDescription(params.description);
    req.setExternalId(params.externalId);
    req.setExecutingVenue(params.executingVenue);
    req.setOrderId(params.orderId);
    req.setFees(params.fees.toString());
    req.setSubAccountNo(params.subAccountNo);
    req.setContraSubAccountNo(params.contraSubAccountNo);
    req.setCapacity(params.capacity);
    req.setReferenceId(params.referenceId);
    req.setTraderId(params.traderId);

    let trnsFees = [];
    params.feeList.forEach((item) => {
      let trnsFee = new TransactionFee();
      trnsFee.setFeeType(item.feeType);
      trnsFee.setFee(item.fee.toString());
      trnsFees.push(trnsFee);
    });

    req.setTransactionFeesList(trnsFees);
  }

  if (screen === 'Cash Movement') {
    if (!params.entryType) {
      notifyError('Entry Type is required.');
      return;
    }
    if (!params.accountNumber) {
      notifyError('Account No. is required.');
      return;
    }
    if (!params.contraAccount) {
      notifyError('Contra Account is required.');
      return;
    }

    let netAmt;
    if (params.entryType === 'CSD') {
      netAmt = Math.abs(params.netAmount.numberformat) * -1;
    } else if (params.entryType === 'CSW') {
      netAmt = Math.abs(params.netAmount.numberformat);
    } else {
      netAmt = params.netAmount.numberformat;
    }

    req.setEntryType(params.entryType);
    req.setCorrespondent(params.correspondent);
    req.setContraCorrespondent(params.contraCorrespondent);
    req.setAccountNo(params.accountNumber);
    req.setContraAccountNo(params.contraAccount);
    req.setNetAmt(netAmt.toString());
    req.setSettleDate(stringToProtoDate(params.settleDate));
    req.setDescription(params.description);
    req.setExternalId(params.externalId);
    req.setVendor(params.vendor);
    req.setSubAccountNo(params.subAccountNo);
    req.setContraSubAccountNo(params.contraSubAccountNo);
    req.setReferenceId(params.referenceId);
    req.setTraderId(params.traderId);
  }

  if (screen === 'Cash and Position Movement') {
    if (!params.entryType) {
      notifyError('Entry Type is required.');
      return;
    }
    if (!params.accountNumber) {
      notifyError('Account No. is required.');
      return;
    }
    if (!params.contraAccount) {
      notifyError('Contra Account is required.');
      return;
    }
    if (!params.symbol) {
      notifyError('Symbol is required.');
      return;
    }
    if (!params.qty && !params.netAmount.numberformat) {
      if (!params.qty) {
        notifyError('Quantity is required.');
        return;
      } else {
        notifyError('Net Amount is required.');
        return;
      }
    }

    req.setEntryType(params.entryType);
    req.setCorrespondent(params.correspondent);
    req.setContraCorrespondent(params.contraCorrespondent);
    req.setAccountNo(params.accountNumber);
    req.setContraAccountNo(params.contraAccount);
    req.setSymbol(params.symbol);
    req.setQty(
      params.qty.numberformat !== '0' ? params.qty.numberformat.toString() : ''
    );
    req.setPrice(params.price.numberformat.toString());
    req.setNetAmt(params.netAmount.numberformat.toString());
    req.setSettleDate(stringToProtoDate(params.settleDate));
    req.setDescription(params.description);
    req.setSubAccountNo(params.subAccountNo);
    req.setContraSubAccountNo(params.contraSubAccountNo);
    req.setReferenceId(params.referenceId);
    req.setTraderId(params.traderId);
  }

  if (screen === 'Position Movement') {
    if (!params.entryType) {
      notifyError('Entry Type is required.');
      return;
    }
    if (!params.accountNumber) {
      notifyError('Account No. is required.');
      return;
    }
    if (!params.contraAccount) {
      notifyError('Contra Account is required.');
      return;
    }
    if (!params.symbol) {
      notifyError('Symbol is required.');
      return;
    }
    if (!params.qty) {
      notifyError('Quantity is required.');
      return;
    }
    if (!params.price) {
      notifyError('Price is required.');
      return;
    }

    req.setEntryType(params.entryType);
    req.setCorrespondent(params.correspondent);
    req.setContraCorrespondent(params.contraCorrespondent);
    req.setAccountNo(params.accountNumber);
    req.setContraAccountNo(params.contraAccount);
    req.setSymbol(params.symbol);
    req.setQty(params.qty.numberformat.toString());
    req.setPrice(params.price.numberformat.toString());
    req.setSettleDate(stringToProtoDate(params.settleDate));
    req.setDescription(params.description);
    req.setSubAccountNo(params.subAccountNo);
    req.setContraSubAccountNo(params.contraSubAccountNo);
    req.setReferenceId(params.referenceId);
    req.setTraderId(params.traderId);
  }

  if (pending && actionType !== 'process-pending') {
    req.setTradeDate(stringToProtoDate(params.tradeDate));
    transactionClient.createPendingTransaction(req, {}, (err, res) => {
      if (err) {
        notifyError(err.message);
        return;
      }

      const response = res.toObject();
      if (response.errorMessage === '') {
        notifySuccess('Pending Transaction has been added.');
        callbackAction();
      } else {
        notifyError(
          response.status.charAt(0).toUpperCase() +
            response.status.slice(1) +
            '. ' +
            response.errorMessage
        );
      }
    });
  } else {
    if (actionType === 'process-pending') {
      req.setTrnsId(trnsId);
      transactionClient.processPendingTransaction(req, {}, (err, res) => {
        if (err) {
          notifyError(err.message);
          return;
        }

        const response = res.toObject();

        if (response.errorMessage === '' && params.process) {
          setMessage({
            severity: 'success',
            message: 'Pending transaction has been processed.',
            button: 'process',
          });
          notifySuccess('Pending transaction has been processed.');
          callbackAction();
        } else if (response.errorMessage === '' && !params.process) {
          setMessage({
            severity: 'success',
            message: 'Pending transaction has been saved.',
            button: 'save',
          });
          notifySuccess('Pending transaction has been saved.');
          callbackAction();
        } else {
          notifyError(
            response.status.charAt(0).toUpperCase() +
              response.status.slice(1) +
              '. ' +
              response.errorMessage
          );
        }
      });
    } else if (cancelAndCorrect) {
      req.setTrnsId(trnsId);
      req.setPreviousTrnsId(trnsId);

      transactionClient.correctTransaction(req, {}, (err) => {
        if (err) {
          notifyError(err.message);
          return;
        }
        notifySuccess('Transaction has been corrected.');
        callbackAction();
      });
    } else {
      if (pendingTrnsId > 0) {
        req.setTrnsId(pendingTrnsId);
      }

      transactionClient.createTransaction(req, {}, (err, res) => {
        if (err) {
          notifyError(err.message);
          return;
        }

        const response = res.toObject();
        if (response.errorMessage === '') {
          setPendingTrnsId(0);
          notifySuccess('Transaction has been added.');
          callbackAction();
        } else {
          setPendingTrnsId(response.trnsId);
          notifyError(
            response.status.charAt(0).toUpperCase() +
              response.status.slice(1) +
              '. ' +
              response.errorMessage +
              ' Transaction was saved in pending.'
          );
          callbackAction();
        }
      });
    }
  }
}

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

export default function TransactionForm({ trnsid, accountid, actionType }) {
  const defaultEntryType = 'CNS';
  const classes = useStyles();
  const [isCancelAndCorrect, setIsCancelAndCorrect] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const [, setAccountList] = useState([]);

  const [screen, setScreen] = useState(1);
  const [screenDescription, setScreenDescription] = useState('Trade');
  const [transactionValue, setTransactionValue] = useState('TRD');
  const [pendingTrnsId, setPendingTrnsId] = useState(0);
  const [sideValue, setSideValue] = useState('');
  const [correspondentValue, setCorrespondentValue] = useState('');
  const [contraCorrespondentValue, setContraCorrespondentValue] = useState('');
  const [accountNumberValue, setAccountNumberValue] = useState('');
  const [contraAccountValue, setContraAccountValue] = useState(
    defaultEntryType
  );
  const [symbolValue, setSymbolValue] = useState('');
  const [qtyValue, setQtyValue] = useState({ numberformat: '' });
  const [priceValue, setPriceValue] = React.useState({ numberformat: '' });
  const [grossAmountValue, setGrossAmountValue] = useState({
    numberformat: '',
  });
  const [netAmountValue, setNetAmountValue] = useState({ numberformat: '' });
  const [tradeDateValue, setTradeDateValue] = useState('');
  const [settleDateValue, setSettleDateValue] = useState('');
  const [descriptionValue, setDescriptionValue] = useState('');
  const [externalIdValue, setExternalIdValue] = useState('');
  const [executingVenueValue, setExecutingVenueValue] = useState('');
  const [vendorValue, setVendorValue] = useState('');
  const [orderIdValue, setOrderIdValue] = useState('');
  const [capacityValue, setCapacityValue] = useState('Agency');
  const [isDisabled, setIsDisabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const [subAccountNo, setSubAccountNo] = useState('');
  const [contraSubAccountNo, setContraSubAccountNo] = useState('');
  const [traderId, setTraderId] = useState('');
  const [referenceId, setReferenceId] = useState('');
  const [previousTrnsId, setPreviousTrnsId] = useState(0);
  const [message, setMessage] = useState({
    severity: 'success',
    message: '',
    button: '',
  });
  const [feesValue, setFeesValue] = useState(0);
  const [feeListValue, setFeeListValue] = useState([
    { feeType: 'TAF Fee', fee: 0 },
    { feeType: 'REG Fee', fee: 0 },
    { feeType: 'Commission Fee', fee: 0 },
  ]);

  const [openImport, setOpenImport] = React.useState(false);
  const [entryTypeOptions, setEntryTypeOptions] = React.useState([]);
  const [netAmountTooltip, setNetAmountTooltip] = useState('');

  const handleUploadClose = async () => {
    setOpenImport(false);
  };

  const mapScreenNo = (entryTypes) => {
    const getScreenNo = (note) => {
      if (note === 'Trade') return 1;
      if (note === 'Cash Movement') return 2;
      if (note === 'Position Movement') return 3;
      if (note === 'Cash and Position Movement') return 4;
    };
    const list = entryTypes.map((x) => {
      x.screen_no = getScreenNo(x.note);
      return x;
    });
    return list;
  };

  const getDebitCreditSign = async () => {
    const { profile } = await listProfile({});

    const tooltip =
      'Debit (' + profile.debitSign + ')/Credit (' + profile.creditSign + ')';

    setNetAmountTooltip(tooltip);
  };

  useEffect(() => {
    LazySystemCodePromise({ type: 'Entry Type', code: '', limi: 70 }).then(
      (d) => {
        setEntryTypeOptions(mapScreenNo(d.systemCodeList));
      }
    );

    getDebitCreditSign();
  }, []);

  useEffect(() => {
    let total = 0;
    feeListValue.forEach((item) => {
      total += parseFloat(item.fee);
    });
    setFeesValue(total);
  }, [feeListValue]);

  useEffect(() => {
    let grossAmount =
      (qtyValue.numberformat || 0) * (priceValue.numberformat || 0);

    let req = new GetAmountSignRequest();
    req.setAmount(grossAmount.toString());
    req.setValue(sideValue ? sideValue : 'Buy');

    transactionClient.getAmountSign(req, {}, (err, res) => {
      setGrossAmountValue({
        ...grossAmountValue,
        numberformat: res.toObject().amt,
      });
    });
  }, [qtyValue, priceValue]);

  useEffect(() => {
    if (actionType === 'enter-trns') {
      setNetAmountValue({
        ...netAmountValue,
        numberformat: (grossAmountValue.numberformat || 0) - (feesValue || 0),
      });
    }
  }, [grossAmountValue, feesValue]);

  useEffect(() => {
    if (sideValue) {
      if (sideValue !== 'Buy') {
        setQtyValue({
          ...qtyValue,
          numberformat: Math.abs(qtyValue.numberformat) * -1,
        });
      } else {
        setFeeListValue([
          { feeType: 'TAF Fee', fee: 0 },
          { feeType: 'REG Fee', fee: 0 },
          { feeType: 'Commission Fee', fee: 0 },
        ]);

        setQtyValue({
          ...qtyValue,
          numberformat: Math.abs(qtyValue.numberformat),
        });
      }
    } // eslint-disable-next-line
  }, [sideValue]);

  useEffect(() => {
    let req = new ListFeesRequest();

    transactionClient.listFees(req, {}, (err, res) => {
      if (err) {
        notifyError(err.message);
        return;
      }
      let newArr = [];
      res.toObject().feesList.forEach((fee) => {
        newArr.push({ feeType: fee.feeType, fee: 0 });
      });
      setFeeListValue(newArr);
    }); // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (transactionValue === 'TRD' && screenDescription === 'Trade') {
      setContraAccountValue(defaultEntryType);
    }
  }, [transactionValue, screenDescription]);

  useEffect(() => {
    async function setSettleDate() {
      if (transactionValue === 'TRD' && tradeDateValue) {
        let req = new SettleDateRequest();
        req.setTradeDate(stringToProtoDate(tradeDateValue));
        systemDate.getSettleDate(req, {}, (err, res) => {
          if (err) {
            console.error(err);
          } else {
            setSettleDateValue(
              moment(
                new Date(formatPbDate(res.toObject().profile.settleDate))
              ).format('YYYY-MM-DD')
            );
          }
        });
      } else {
        systemDate.readProfile(new ReadProfileRequest(), {}, (err, res) => {
          if (err) {
            console.error(err);
          } else {
            setSettleDateValue(
              moment(
                new Date(formatPbDate(res.toObject().profile.systemDate))
              ).format('YYYY-MM-DD')
            );
          }
        });
      }
    }

    setSettleDate();
  }, [tradeDateValue, transactionValue]);

  const useDebouncedEffect = (effect, deps, delay) => {
    useEffect(() => {
      const handler = setTimeout(() => effect(), delay);

      return () => clearTimeout(handler);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [...(deps || []), delay]);
  };

  useDebouncedEffect(
    () => calculateFees(grossAmountValue.numberformat, qtyValue.numberformat),
    [sideValue, grossAmountValue, qtyValue],
    1000
  );

  const inputs = [
    {
      name: 'correspondent',
      type: 'autocomplete-correspondent',
      label: 'Correspondent',
      required: false,
    },
    {
      name: 'contra_correspondent',
      type: 'autocomplete-contracorrespondent',
      label: 'Contra Correspondent',
      required: false,
    },
    {
      name: 'account_number',
      type: 'autocomplete-accountno',
      label: 'Account No',
      required: true,
    },
    {
      name: 'vendor',
      type: 'text',
      label: 'Vendor',
    },
    {
      name: 'contra_account',
      type: 'autocomplete-contraaccount',
      label: 'Contra Account No',
      required: true,
    },
    {
      name: 'side',
      type: 'side',
      label: 'Side',
      required: true,
    },
    {
      name: 'symbol',
      type: 'autocomplete-symbol',
      label: 'Symbol',
      required: true,
    },
    {
      name: 'qty',
      type: 'number',
      label: 'QTY',
      required: true,
    },
    {
      name: 'price',
      type: 'number',
      label: 'Price',
      required: true,
    },
    {
      name: 'gross_amount',
      type: 'number',
      label: 'Gross Amount',
      required: false,
      disabled: isDisabled,
    },
    {
      name: 'fees',
      type: 'multiple-fees',
      label: 'Fees',
      required: false,
    },
    {
      name: 'net_amount',
      type: 'number',
      label: 'Net Amount',
      required: false,
      disabled: isDisabled,
    },
    {
      name: 'trade_date',
      type: 'time',
      label: 'Trade Date (ET)',
      required: true,
    },
    {
      name: 'settle_date',
      type: 'date',
      label: 'Settle Date',
      required: false,
    },
    {
      name: 'description',
      type: 'text',
      label: 'Description',
      required: false,
    },
    {
      name: 'entry_type',
      type: 'entry-type',
      label: 'Entry Type',
      required: true,
    },
    {
      name: 'external_id',
      type: 'text',
      label: 'External ID',
      required: false,
    },
    {
      name: 'executing_venue',
      type: 'autocomplete-executing-venue',
      label: 'Executing Venue',
      required: true,
    },
    {
      name: 'order_id',
      type: 'text',
      label: 'Order ID',
      required: false,
    },
    {
      name: 'sub_account_no',
      type: 'autocomplete-subaccountno',
      label: 'Sub Account No',
      required: false,
    },
    {
      name: 'contra_sub_account_no',
      type: 'autocomplete-contrasubaccountno',
      label: 'Contra Sub Account No',
      required: false,
    },
    {
      name: 'capacity',
      type: 'capacity-dropdown',
      label: 'Capacity',
      required: true,
    },
    {
      name: 'numberformat',
      type: 'numberformat',
      label: 'Format Number',
      required: true,
    },
    {
      name: 'trader_id',
      type: 'text',
      label: 'Trader ID',
      required: false,
    },
    {
      name: 'reference_id',
      type: 'text',
      label: 'Reference ID',
      required: false,
    },
  ];

  useEffect(() => {
    if (isPending) {
      handleSubmit();
      setIsPending(false);
    } // eslint-disable-next-line
  }, [isPending]);

  useEffect(() => {
    //disabled gross amount and net amount if selected screen is Trade
    if (screenDescription === 'Trade') {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }

    //get list of accounts
    let listValues = new ListAccountRequest();
    accounts.listAccount(listValues, {}, (err, res) => {
      if (err) {
        notifyError(err.message);
        return;
      }
      setAccountList(res.toObject().accountsList);
    });

    //load db system date
    let profileReq = new ReadProfileRequest();

    systemDate.readProfile(profileReq, {}, (err, res) => {
      if (err) {
        console.error(err);
      } else {
        setTradeDateValue(
          moment(
            new Date(formatPbDate(res.toObject().profile.tradeDate))
          ).format('YYYY-MM-DDTh:mm')
        );
        if (transactionValue !== 'TRD') {
          setSettleDateValue(
            moment(
              new Date(formatPbDate(res.toObject().profile.systemDate))
            ).format('YYYY-MM-DD')
          );
        }
      }
    });
  }, [trnsid, accountid, transactionValue, screenDescription, actionType]);

  useEffect(() => {
    if (trnsid) {
      let readReq;

      if (actionType === 'process-pending') {
        readReq = new ReadPendingTrnsRequest();
        readReq.setStageId(trnsid);
      } else {
        setIsCancelAndCorrect(true);
        readReq = new ReadTransactionRequest();
        readReq.setTrnsId(trnsid);
        readReq.setAccountId(accountid);
      }
      setLoading(true);
      (actionType === 'process-pending'
        ? pendingtrnsClient
        : transactionClient
      ).readTransaction(readReq, {}, (err, res) => {
        if (err) {
          notifyError(err.message);
          setMessage({
            severity: 'error',
            message: err.message,
          });
          setLoading(false);
          return;
        }

        const trns = res.toObject();
        if (
          trns.pendingTransaction &&
          trns.pendingTransaction.status === 'correct'
        ) {
          setMessage({
            severity: 'success',
            message: 'Transaction is already corrected.',
          });
          notifySuccess('Transaction is already corrected.');
        }
        if (err) {
          notifyError(err.message);
          return;
        }
        let data =
          actionType === 'process-pending'
            ? trns.pendingTransaction
            : trns.transaction;
        LazySystemCodePromise({ type: 'Entry Type', code: '', limi: 70 }).then(
          (d) => {
            const options = mapScreenNo(d.systemCodeList);
            const targetScreen = options.find((o) => o.code === data.entryType);
            if (!targetScreen) {
              notifyError(`unknown entry type ${data.entryType}`);
              return;
            } else {
              setScreen(targetScreen.screen_no);
              setScreenDescription(targetScreen.note);
            }
          }
        );

        setTransactionValue(data.entryType);
        setCorrespondentValue(data.correspondent);
        setContraCorrespondentValue(data.contraCorrespondent);
        setAccountNumberValue(data.accountNo);
        setContraAccountValue(data.contraAccountNo);
        setExternalIdValue(data.externalId);
        setSideValue(data.side);
        setSymbolValue(data.symbol);
        setQtyValue({
          ...qtyValue,
          numberformat: data.qty,
        });
        setPriceValue({
          ...priceValue,
          numberformat: data.price,
        });
        setGrossAmountValue(data.grossAmt);
        setFeesValue(data.fees);
        setNetAmountValue({
          ...netAmountValue,
          numberformat: data.netAmt,
        });
        if (!data.tradeAt && actionType !== 'process-pending') {
          setTradeDateValue(
            data.tradeAt
              ? moment(new Date(data.tradeAt.seconds * 1000))
                  .toISOString()
                  .substring(0, 16)
              : ''
          );
        } else {
          // handling pending transaction tradeDate null value
          loadDetaultTradeDateValue();
        }
        setSettleDateValue(
          data.settleDate
            ? moment(
                new Date(
                  data.settleDate.year,
                  data.settleDate.month - 1,
                  data.settleDate.day,
                  0,
                  0,
                  0,
                  0
                )
              ).format('yyyy-MM-DD')
            : ''
        );
        setDescriptionValue(data.description);
        setExecutingVenueValue(data.executingVenue);
        setVendorValue(data.vendorValue);
        setOrderIdValue(data.orderId);
        let newArr = data.transactionFeesList.map((item) => {
          return { ...item, fee: item.fee };
        });
        setFeeListValue(newArr);
        setCapacityValue(data.capacity);
        setPreviousTrnsId(data.previousTrnsId);
        setLoading(false);
      });
    } else {
      setIsCancelAndCorrect(false);
    } // eslint-disable-next-line
  }, [trnsid]);

  const loadDetaultTradeDateValue = () => {
    systemDate.readProfile(new ReadProfileRequest(), {}, (err, res) => {
      if (err) {
        console.error(err);
      } else {
        setTradeDateValue(
          moment(
            new Date(formatPbDate(res.toObject().profile.tradeDate))
          ).format('YYYY-MM-DDTh:mm')
        );
      }
    });
  };

  const handleTradeEntryOnChangeType = (event) => {
    const selectedValue = event.target.value;
    let targetValue;

    targetValue = entryTypeOptions.find((o) => o.code === event.target.value);

    if (targetValue) {
      setScreen(targetValue?.screen_no);
      setScreenDescription(targetValue?.note);
      setTransactionValue(selectedValue);
      setCorrespondentValue('');
      setContraCorrespondentValue('');
      setAccountNumberValue('');
      setContraAccountValue('');
      setSymbolValue('');
      setDescriptionValue('');
      setQtyValue('');
      setPriceValue('');
      setSideValue('');
      setGrossAmountValue('');
      setFeesValue('');
      setNetAmountValue('');
      setTradeDateValue('');
      setSettleDateValue('');
      setSettleDateValue('');
      setExternalIdValue('');
      setExecutingVenueValue('');
      setVendorValue('');
      setOrderIdValue('');
      setCapacityValue('');
      setSubAccountNo('');
      setContraSubAccountNo('');
      setCapacityValue('');
      setTraderId('');
      setReferenceId('');
      setContraAccountValue(selectedValue === 'TRD' ? defaultEntryType : '');
    }
  };

  const handleSubmit = (process = false) => {
    if (screenDescription === 'Trade') {
      saveTransaction(
        transactionClient,
        {
          entryType: transactionValue,
          correspondent: correspondentValue,
          contraCorrespondent: contraCorrespondentValue,
          accountNumber: accountNumberValue,
          contraAccount: contraAccountValue,
          side: sideValue,
          symbol: symbolValue,
          qty: qtyValue,
          price: priceValue,
          grossAmount: grossAmountValue,
          fees: feesValue,
          netAmount: netAmountValue,
          tradeDate: tradeDateValue,
          settleDate: settleDateValue,
          description: descriptionValue,
          externalId: externalIdValue,
          executingVenue: executingVenueValue,
          orderId: orderIdValue,
          feeList: feeListValue,
          subAccountNo: subAccountNo,
          contraSubAccountNo: contraSubAccountNo,
          capacity: capacityValue,
          process: process,
          traderId: traderId,
          referenceId: referenceId,
        },
        trnsid,
        screenDescription,
        isCancelAndCorrect,
        isPending,
        actionType,
        setMessage,
        setPendingTrnsId,
        pendingTrnsId,
        handleClearValuesOnSuccess
      );
    }

    if (screenDescription === 'Cash Movement') {
      saveTransaction(
        transactionClient,
        {
          entryType: transactionValue,
          correspondent: correspondentValue,
          contraCorrespondent: contraCorrespondentValue,
          accountNumber: accountNumberValue,
          contraAccount: contraAccountValue,
          netAmount: netAmountValue,
          settleDate: settleDateValue,
          description: descriptionValue,
          externalId: externalIdValue,
          vendor: vendorValue,
          subAccountNo: subAccountNo,
          contraSubAccountNo: contraSubAccountNo,
          process: process,
          traderId: traderId,
          referenceId: referenceId,
        },
        trnsid,
        screenDescription,
        isCancelAndCorrect,
        isPending,
        actionType,
        setMessage,
        setPendingTrnsId,
        pendingTrnsId,
        handleClearValuesOnSuccess
      );
    }

    if (screenDescription === 'Cash and Position Movement') {
      saveTransaction(
        transactionClient,
        {
          entryType: transactionValue,
          correspondent: correspondentValue,
          contraCorrespondent: contraCorrespondentValue,
          accountNumber: accountNumberValue,
          contraAccount: contraAccountValue,
          symbol: symbolValue,
          qty: qtyValue,
          price: priceValue,
          netAmount: netAmountValue,
          settleDate: settleDateValue,
          description: descriptionValue,
          subAccountNo: subAccountNo,
          contraSubAccountNo: contraSubAccountNo,
          process: process,
          traderId: traderId,
          referenceId: referenceId,
        },
        trnsid,
        screenDescription,
        isCancelAndCorrect,
        isPending,
        actionType,
        setMessage,
        setPendingTrnsId,
        pendingTrnsId,
        handleClearValuesOnSuccess
      );
    }

    if (screenDescription === 'Position Movement') {
      saveTransaction(
        transactionClient,
        {
          entryType: transactionValue,
          correspondent: correspondentValue,
          contraCorrespondent: contraCorrespondentValue,
          accountNumber: accountNumberValue,
          contraAccount: contraAccountValue,
          symbol: symbolValue,
          qty: qtyValue,
          price: priceValue,
          settleDate: settleDateValue,
          description: descriptionValue,
          subAccountNo: subAccountNo,
          contraSubAccountNo: contraSubAccountNo,
          process: process,
          traderId: traderId,
          referenceId: referenceId,
        },
        trnsid,
        screenDescription,
        isCancelAndCorrect,
        isPending,
        actionType,
        setMessage,
        setPendingTrnsId,
        pendingTrnsId,
        handleClearValuesOnSuccess
      );
    }
  };

  const handleClearValuesOnSuccess = () => {
    setQtyValue('');
    setPriceValue('');
    setNetAmountValue('');
    setGrossAmountValue('');
    setExternalIdValue('');
    let newArr = feeListValue.map((item) => {
      return { ...item, fee: 0 };
    });
    setFeeListValue(newArr);
  };

  function getTransactionForm(elements, screenNo) {
    const renderRowWrapper = elements.map((itemsRow) => (
      <div
        key={itemsRow}
        className={
          itemsRow.length > 2 ? classes.grdRow : classes.grdRowInlineFlex
        }
      >
        {getFormFields(itemsRow, screenNo)}{' '}
      </div>
    ));

    if (loading) {
      return <Typography variant="h5">Loading transaction...</Typography>;
    }

    return (
      <Box className={classes.container}>
        <form id="transaction-form">
          <div className={classes.containerTitle}>
            <div className={classes.grdRow}>
              <div className={classes.grdCell1}>
                <Typography variant="h4" className={classes.textBold}>
                  {screenDescription}
                </Typography>
              </div>
              {actionType !== 'process-pending' && (
                <div className={classes.grdCellNone}>
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    startIcon={<ImportIcon />}
                    onClick={() => {
                      setOpenImport(true);
                    }}
                  >
                    Import
                  </Button>
                </div>
              )}
            </div>
            <br />
            {renderRowWrapper}
          </div>
          <div className={classes.grdRow}>
            {actionType === 'process-pending' && (
              <div className={classes.grdCellNone} style={{ marginRight: 10 }}>
                {message.message && message.button === 'save' ? (
                  <Alert severity={message.severity}>{message.message}</Alert>
                ) : (
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    onClick={() => handleSubmit()}
                  >
                    Save
                  </Button>
                )}
              </div>
            )}
            <div className={classes.grdCellNone} style={{ marginRight: 10 }}>
              {message.message && message.button !== 'save' ? (
                <Alert severity={message.severity}>{message.message}</Alert>
              ) : (
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  onClick={() => handleSubmit(true)}
                >
                  {actionType === 'process-pending' ? 'Process' : 'Save'}
                </Button>
              )}
            </div>
            {actionType !== 'process-pending' && (
              <div className={classes.grdCell1}>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  onClick={() => setIsPending(true)}
                >
                  Save to Pending
                </Button>
              </div>
            )}
          </div>
        </form>
        {openImport && (
          <TransactionUploadModal
            onClose={handleUploadClose}
            open={openImport}
          ></TransactionUploadModal>
        )}
      </Box>
    );
  }

  function onTextInput(e, name) {
    const value = e.target.value;

    if (name === 'description') setDescriptionValue(value);
    if (name === 'external_id') setExternalIdValue(value);
    if (name === 'order_id') setOrderIdValue(value);
    if (name === 'vendor') setVendorValue(value);
    if (name === 'reference_id') setReferenceId(value);
    if (name === 'trader_id') setTraderId(value);
  }

  function calculateFees(grossAmt, qty) {
    if (!sideValue || sideValue === 'Buy') {
      return;
    }

    if (!grossAmt && !qty) {
      return;
    }

    let req = new GetFeeRequest();
    let calcResult = {
      feeTypeReg: 'REG Fee',
      feeTypeTaf: 'TAF Fee',
      regFee: '0',
      tafFee: '0',
    };

    if (grossAmt) {
      req.setGrossAmt(grossAmt !== 0 ? grossAmt.toString() : '0.00');
      req.setCorrespondent(correspondentValue);
      req.setTradeDate(stringToProtoDate(tradeDateValue));
      req.setAssetType('E');

      transactionClient.getRegFee(req, {}, (err, res) => {
        if (err) {
          notifyError(err.message);
          return;
        }
        calcResult.regFee =
          grossAmt !== '0' && grossAmt !== '' ? res.toObject().fee : '0';
      });
      setRegAndTafFeeCalcResult(calcResult);
    }

    if (qty) {
      req.setQty(qty !== '' ? qty.toString() : '0');
      req.setCorrespondent(correspondentValue);
      req.setTradeDate(stringToProtoDate(tradeDateValue));
      req.setAssetType('E');

      transactionClient.getTafFee(req, {}, (err, res) => {
        if (err) {
          notifyError(err.message);
          return;
        }

        calcResult.tafFee =
          qty !== '0' && qty !== '' ? res.toObject().fee : '0';
        setRegAndTafFeeCalcResult(calcResult);
      });
    }
  }

  function onNumberInput(e, name) {
    const value = e.target.value;
    const eventName = e.target.name;

    if (name === 'qty')
      setQtyValue({
        ...qtyValue,
        [eventName]:
          sideValue !== 'Buy' && sideValue !== ''
            ? Math.abs(value) * -1
            : value,
      });
    if (name === 'price')
      setPriceValue({
        ...priceValue,
        [eventName]: value,
      });
    if (name === 'gross_amount') {
      setGrossAmountValue({
        ...grossAmountValue,
        [eventName]: value,
      });
    }

    if (name === 'fees') setFeesValue(value);
    if (name === 'net_amount') {
      if (transactionValue === 'CSD') {
        setNetAmountValue({
          ...netAmountValue,
          [eventName]: Math.abs(value) * -1,
        });
      } else {
        setNetAmountValue({
          ...netAmountValue,
          [eventName]: value,
        });
      }
    }
  }

  function onDateInput(e, name) {
    const value = e.target.value;
    if (name === 'settle_date') setSettleDateValue(value);
  }

  function onTimeInput(e, name) {
    const value = e.target.value;
    if (name === 'trade_date') setTradeDateValue(value);
  }

  function getFormFields(row, screenNo) {
    let generatedRow = [];
    let count = 0;
    const screen = 'screen' + screenNo;
    row.forEach((inputField) => {
      count++;
      const rowKey = screen + count;

      //xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
      const inputObject = inputs.find((o) => o.name === inputField);
      generatedRow.push(getFormField(inputObject, rowKey, row.length));
    });
    return generatedRow;
  }

  function updateFeeValue(feeType, v) {
    let newArr = feeListValue.map((item) => {
      if (feeType === item.feeType) {
        return { ...item, fee: v };
      } else {
        return item;
      }
    });
    setFeeListValue(newArr);
  }

  function setRegAndTafFeeCalcResult(res) {
    let newArr = feeListValue.map((item) => {
      if (item.feeType === res.feeTypeReg) {
        return { ...item, fee: res.regFee };
      } else if (item.feeType === res.feeTypeTaf) {
        return { ...item, fee: res.tafFee };
      } else {
        return item;
      }
    });
    setFeeListValue(newArr);
  }

  async function setAccountNoCorrespondent(accountNo) {
    const correspondent = await getCorrespondentPromise(accountNo);
    const trimmed = correspondent.replace(/\s+/, '');
    setCorrespondentValue(trimmed);
  }

  async function setContraAccountNoContraCorrespondent(accountNo) {
    const correspondent = await getCorrespondentPromise(accountNo);
    const trimmed = correspondent.replace(/\s+/, '');
    setContraCorrespondentValue(trimmed);
  }

  function getValue(name) {
    if (name === 'correspondent') return correspondentValue;
    if (name === 'contra_correspondent') return contraCorrespondentValue;
    if (name === 'account_number') return accountNumberValue;
    if (name === 'contra_account') return contraAccountValue;
    if (name === 'symbol') return symbolValue;
    if (name === 'description') return descriptionValue;
    if (name === 'qty') return qtyValue;
    if (name === 'price') return priceValue;
    if (name === 'gross_amount') return grossAmountValue;
    if (name === 'fees') return feesValue;
    if (name === 'net_amount') return netAmountValue;
    if (name === 'trade_date') return tradeDateValue;
    if (name === 'settle_date') return settleDateValue;
    if (name === 'external_id') return externalIdValue;
    if (name === 'executing_venue') return executingVenueValue;
    if (name === 'order_id') return orderIdValue;
    if (name === 'vendor') return vendorValue;
    if (name === 'contra_sub_account_no') return contraSubAccountNo;
    if (name === 'sub_account_no') return subAccountNo;
    if (name === 'symbol') return symbolValue;
    if (name === 'capacity') return capacityValue;
    if (name === 'trader_id') return traderId;
    if (name === 'reference_id') return referenceId;
  }

  function getFormField(inputObject, rowKey, rowCount) {
    if (!inputObject) return;

    const { name, type, label, required, disabled } = inputObject;
    let field = '';

    switch (type) {
      case 'text':
        field = (
          <TextField
            required={required}
            label={label}
            key={name}
            fullWidth
            onInput={(e) => onTextInput(e, name)}
            value={getValue(name) || ''}
            InputLabelProps={{
              shrink: true,
            }}
          />
        );
        break;
      case 'number':
        field = (
          <TextField
            required={required}
            disabled={disabled}
            label={label}
            key={name}
            name="numberformat"
            fullWidth
            value={getValue(name).numberformat || ''}
            InputLabelProps={{ shrink: true }}
            InputProps={{
              inputComponent: numberFormatCustom,
              startAdornment: (
                <InputAdornment position="start">
                  {name !== 'qty' ? '$' : ''}
                </InputAdornment>
              ),
              endAdornment: name === 'net_amount' && [2, 4].includes(screen) && (
                <Tooltip
                  title={netAmountTooltip}
                  arrow
                  placement="top"
                  style={{ cursor: 'pointer' }}
                >
                  <InfoIcon />
                </Tooltip>
              ),
            }}
            onChange={(e) => onNumberInput(e, name)}
          />
        );
        break;
      case 'date':
        field = (
          <TextField
            required={required}
            fullWidth
            label={label}
            key={name}
            type="date"
            onInput={(e) => onDateInput(e, name)}
            value={getValue(name) || ''}
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
          />
        );
        break;
      case 'time':
        field = (
          <TextField
            required={required}
            fullWidth
            label={label}
            key={name}
            type="datetime-local"
            onInput={(e) => onTimeInput(e, name)}
            value={getValue(name) || ''}
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
          />
        );
        break;
      case 'autocomplete-correspondent':
        field = (
          <SelectCorrespondent
            halfWidth
            required={required}
            name={name}
            label={label}
            value={getValue(name) || ''}
            onChange={(e) => setCorrespondentValue(e.target.value)}
          ></SelectCorrespondent>
        );
        break;
      case 'autocomplete-accountno':
        field = (
          <SelectAccountNo
            required={true}
            freeSolo={true}
            name={name}
            id="accountNo"
            labelid="accountNo"
            label="Account No"
            value={getValue(name) || ''}
            correspondent={correspondentValue}
            onChange={(e) => {
              setAccountNumberValue(e.target.value);
              setAccountNoCorrespondent(e.target.value);
            }}
            allowInputChange={true}
          ></SelectAccountNo>
        );
        break;
      case 'autocomplete-contracorrespondent':
        field = (
          <SelectCorrespondent
            halfWidth
            required={required}
            name={name}
            label={label}
            value={getValue(name) || ''}
            onChange={(e) => setContraCorrespondentValue(e.target.value)}
          ></SelectCorrespondent>
        );
        break;
      case 'autocomplete-contraaccount':
        field = (
          <SelectAccountNo
            required={true}
            freeSolo={true}
            name={name}
            id={name}
            labelid="name"
            label={label}
            value={getValue(name) || ''}
            correspondent={contraCorrespondentValue}
            onChange={(e) => {
              setContraAccountValue(e.target.value);
              setContraAccountNoContraCorrespondent(e.target.value);
            }}
          ></SelectAccountNo>
        );
        break;
      case 'autocomplete-vendor':
        field = (
          <VendorSelect
            required={required}
            labelid={name}
            label={label}
            value={getValue(name) || ''}
            onChange={(e) => setVendorValue(e.target.value)}
            setNewValue={(event, newValue) => {
              if (newValue) {
                setVendorValue(newValue.code);
              } else {
                setVendorValue('');
                return;
              }
            }}
          />
        );
        break;
      case 'autocomplete-subaccountno':
        field = (
          <SelectSubAccountNo
            freeSolo={false}
            name={name}
            id={name}
            labelid="name"
            label={label}
            value={getValue(name) || ''}
            accountNo={accountNumberValue}
            onChange={(e) => setSubAccountNo(e.target.value)}
            disabled={accountNumberValue ? false : true}
          ></SelectSubAccountNo>
        );
        break;
      case 'autocomplete-contrasubaccountno':
        field = (
          <SelectSubAccountNo
            freeSolo={false}
            name={name}
            id={name}
            labelid="name"
            label={label}
            value={getValue(name) || ''}
            accountNo={contraAccountValue}
            onChange={(e) => setContraSubAccountNo(e.target.value)}
            disabled={contraAccountValue ? false : true}
          ></SelectSubAccountNo>
        );
        break;
      case 'multiple-fees':
        field = (
          <>
            <FeesComponent value={feesValue}>
              {feeListValue.map((fee) => (
                <AccordionDetails className={classes.details} key={fee.feeType}>
                  <TextField
                    fullWidth
                    labelid={fee.feeType}
                    label={fee.feeType}
                    value={fee.fee}
                    onBlur={(e) => {
                      if (e.target.value === '') {
                        updateFeeValue(fee.feeType, 0);
                      }
                    }}
                    onChange={(e) => {
                      updateFeeValue(fee.feeType, e.target.value);
                    }}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </AccordionDetails>
              ))}
            </FeesComponent>
          </>
        );
        break;
      case 'entry-type':
        field = (
          <SelectEntryType
            required={required}
            name={name}
            label={label}
            value={transactionValue || ''}
            onChange={handleTradeEntryOnChangeType}
          ></SelectEntryType>
        );
        break;
      case 'side':
        field = (
          <SelectSide
            required={required}
            name={name}
            label={label}
            value={sideValue || ''}
            onChange={(e) => {
              setSideValue(e.target.value);
            }}
          ></SelectSide>
          // <DropDownListSide
          //   onChange={(e) => {
          //     setSideValue(e.target.value);
          //   }}
          //   required={required}
          //   label={label}
          //   value={sideValue || ''}
          //   name={name}
          // ></DropDownListSide>
        );
        break;
      case 'autocomplete-symbol':
        field = (
          <SymbolSelect
            freeSolo={true}
            name={name}
            id={name}
            labelid="name"
            label={label}
            value={getValue(name) || ''}
            onChange={(e) => setSymbolValue(e.target.value)}
          ></SymbolSelect>
        );
        break;
      case 'capacity-dropdown':
        field = (
          <DropDownListCapacity
            onChange={(e) => {
              setCapacityValue(e.target.value);
            }}
            required={required}
            label={label}
            value={capacityValue || ''}
            name={name}
          ></DropDownListCapacity>
        );
        break;
      case 'autocomplete-executing-venue':
        field = (
          <SelectAutoCompleteBroker
            required={required}
            freeSolo={true}
            name={name}
            label={label}
            value={executingVenueValue}
            onChange={(e) => setExecutingVenueValue(e.target.value)}
          ></SelectAutoCompleteBroker>
        );
        break;
      default:
        field = <></>;
    }

    const autoWidth = rowCount > 2 ? '100%' : '300px';
    return (
      <div
        className={classes.grdCell1}
        key={rowKey}
        style={{ marginRight: 10, width: autoWidth }}
      >
        {' '}
        {field}{' '}
      </div>
    );
  }

  function renderForm() {
    const tradeElements = [
      [
        'entry_type',
        'correspondent',
        'account_number',
        'sub_account_no',
        'contra_correspondent',
        'contra_account',
        'contra_sub_account_no',
      ],
      ['symbol', 'qty', 'price', 'side', 'fees'],
      ['gross_amount', 'net_amount', 'trade_date', 'settle_date'],
      [
        'description',
        'external_id',
        'executing_venue',
        'order_id',
        'capacity',
        'trader_id',
        'reference_id',
      ],
    ];

    const cashElements = [
      [
        'entry_type',
        'correspondent',
        'account_number',
        'sub_account_no',
        'contra_correspondent',
      ],
      [
        'contra_account',
        'contra_sub_account_no',
        'net_amount',
        'settle_date',
        'description',
      ],
      ['external_id', 'vendor', 'reference_id'],
    ];

    const positionElements = [
      [
        'entry_type',
        'correspondent',
        'account_number',
        'sub_account_no',
        'contra_correspondent',
      ],
      ['contra_account', 'contra_sub_account_no', 'symbol', 'qty', 'price'],
      ['settle_date', 'description', 'reference_id'],
    ];

    const cashPositionElements = [
      [
        'entry_type',
        'correspondent',
        'account_number',
        'sub_account_no',
        'contra_correspondent',
      ],
      ['contra_account', 'contra_sub_account_no', 'symbol', 'qty', 'price'],
      ['net_amount', 'description', 'settle_date', 'trader_id', 'reference_id'],
    ];

    let elements = [];
    if (screen === 1) elements = tradeElements;
    if (screen === 2) elements = cashElements;
    if (screen === 3) elements = positionElements;
    if (screen === 4) elements = cashPositionElements;

    return getTransactionForm(elements, screen);
  }

  return <>{renderForm()}</>;
}
