import {
  CancelTransactionRequest,
  TransactionServiceClient,
  Transaction,
  TransactionFee,
  BatchCreateTransactionRequest,
  BatchCreatePendingTransactionRequest,
  BatchProcessPendingTransactionRequest,
  BatchCancelTransactionRequest,
} from '../proto/trnspb/transaction_grpc_web_pb';
import {
  objectToProtoDate,
  stringToProtoDate,
  stringToProtoTradeTimeStamp,
} from './ConvertService';

import { auth } from '../lib/auth/Auth';
import { notifyError } from 'components/Notification/Notification';

const service = new TransactionServiceClient(
  window.env.GRPC_ENDPOINT,
  {},
  { ...auth }
);

const requestTransactionParameter = (list) => {
  let listReq = [];

  list.forEach(async (row) => {
    let req = new Transaction();

    req.setEntryType(row.entryType);
    req.setCorrespondent(row.correspondent);
    req.setAccountNo(row.accountNo);
    req.setContraCorrespondent(row.contraCorrespondent);
    req.setContraAccountNo(row.contraAccountNo);
    req.setSide(row.side);
    req.setSymbol(row.symbol);
    req.setQty(row.qty);
    req.setPrice(row.price);
    req.setGrossAmt(row.grossAmt);
    req.setTradeAt(stringToProtoTradeTimeStamp(row.tradeDate));
    req.setTradeDate(stringToProtoDate(row.tradeDate));
    req.setSettleDate(stringToProtoDate(row.settleDate));
    req.setDescription(row.description);
    req.setExternalId(row.externalId);
    req.setExecutingVenue(row.executingVenue);
    req.setOrderId(row.orderId);
    req.setContraSubAccountNo(row.contraSubAccountNo);
    req.setSubAccountNo(row.subAccountNo);
    req.setCommission(row.commission);
    req.setCapacity(row.capacity);

    listReq.push(req);
  });

  return listReq;
};

const requestTransactionIdParameter = (trns) => {
  console.log(trns);

  let req = new CancelTransactionRequest();
  req.setTrnsId(trns.trnsId);

  return req;
};

export async function cancelTransaction(trnsId) {
  return new Promise((resolve, reject) => {
    const req = new CancelTransactionRequest();
    req.setTrnsId(trnsId);

    service.cancelTransaction(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function batchCancelTransaction(trnsIds) {
  return new Promise((resolve, reject) => {
    let batch = [];

    trnsIds.forEach(function(id) {
      const trnsId = requestTransactionIdParameter(id);
      batch.push(trnsId);
    });

    let req = new BatchCancelTransactionRequest();
    req.setCancelTransactionsList(batch);

    service.batchCancelTransaction(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function processPendingTransaction(trns) {
  return new Promise((resolve, reject) => {
    let req = getTransactionRequest(trns);

    service.processPendingTransaction(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

const getTransactionRequest = (trns) => {
  let req = new Transaction();
  req.setTrnsId(trns.stageId);
  req.setCorrespondent(trns.correspondent);
  req.setContraCorrespondent(trns.contraCorrespondent);
  req.setAccountNo(trns.accountNo);
  req.setContraAccountNo(trns.contraAccountNo);
  req.setSymbol(trns.symbol);
  req.setTradeAt(stringToProtoTradeTimeStamp(trns.tradeDate));
  req.setSettleDate(objectToProtoDate(trns.settleDate));
  req.setTradeDate(objectToProtoDate(trns.tradeDate));
  req.setEntryType(trns.entryType);
  req.setSide(trns.side);
  req.setQty(trns.qty);
  req.setPrice(trns.price);
  req.setGrossAmt(trns.grossAmt);
  req.setNetAmt(trns.netAmt);
  req.setDescription(trns.description);
  req.setCreatedBy(trns.createdBy);
  req.setExecutingVenue(trns.executingVenue);
  req.setOrderId(trns.orderId);
  req.setVendor(trns.vendor);
  req.setBatchNo(trns.batchNo);
  req.setCapacity(trns.capacity);
  req.setCommission(trns.commission);

  let trnsFees = [];
  let trnsFee = new TransactionFee();
  trnsFee.setFeeType('Commission Fee');
  trnsFee.setFee(trns.fees);
  trnsFees.push(trnsFee);
  req.setTransactionFeesList(trnsFees);
  return req;
};

export async function batchProcessPendingTransaction(trnsList) {
  return new Promise((resolve, reject) => {
    let list = [];

    trnsList.forEach(function(data) {
      const trns = getTransactionRequest(data);
      list.push(trns);
    });

    let req = new BatchProcessPendingTransactionRequest();
    req.setTransactionsList(list);

    service.batchProcessPendingTransaction(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export const checkEntryType = (e) => {
  let trd = ['TRD', 'CORR'];
  let pm = ['ACATS', 'JNLS', 'DTF'];
  let cm = ['ACATC', 'CSD', 'CSW', 'INT', 'JNLC', 'PTC', 'PTR', 'FEE'];
  let cpm = [
    'REORG',
    'SPLIT',
    'SPIN',
    'DIV',
    'ALLOC',
    'DIVNRA',
    'DIVWH',
    'MA',
    'SEG',
    'CIL',
  ];
  if (trd.includes(e)) {
    return 'trd';
  } else if (pm.includes(e)) {
    return 'pm';
  } else if (cm.includes(e)) {
    return 'cm';
  } else if (cpm.includes(e)) {
    return 'cpm';
  } else {
    return;
  }
};

export const validateEntries = (d) => {
  if (!GetValueByOjbectName('Entry Type', d)) {
    return true;
  }

  if (!GetValueByOjbectName('Account No', d)) {
    return true;
  }

  if (checkEntryType(GetValueByOjbectName('Entry Type', d)) === 'trd') {
    if (!GetValueByOjbectName('Side', d)) {
      return true;
    }
    if (!GetValueByOjbectName('Trade Date', d)) {
      return true;
    }
  }
  if (
    checkEntryType(GetValueByOjbectName('Entry Type', d)) === 'trd' ||
    checkEntryType(GetValueByOjbectName('Entry Type', d)) === 'pm' ||
    checkEntryType(GetValueByOjbectName('Entry Type', d)) === 'cpm'
  ) {
    if (!GetValueByOjbectName('Symbol', d)) {
      return true;
    }
  }
  if (
    checkEntryType(GetValueByOjbectName('Entry Type', d)) === 'trd' ||
    checkEntryType(GetValueByOjbectName('Entry Type', d)) === 'pm' ||
    checkEntryType(GetValueByOjbectName('Entry Type', d)) === 'cpm'
  ) {
    if (!GetValueByOjbectName('Qty', d)) {
      return true;
    }
    if (!GetValueByOjbectName('Price', d)) {
      return true;
    }
  }
  if (checkEntryType(GetValueByOjbectName('Entry Type', d)) === 'trd') {
    if (!GetValueByOjbectName('Executing Venue', d)) {
      return true;
    }
    if (!GetValueByOjbectName('Capacity', d)) {
      return true;
    }
  }
  return false;
};
async function executeBatchCreateTransaction(req) {
  return new Promise((resolve, reject) => {
    service.batchCreateTransaction(req, {}, (error, response) => {
      if (error) {
        console.log(error);
        notifyError(error.message);
        reject(error);
      } else {
        resolve(response.toObject());
        return response.toObject();
      }
    });
  });
}

export async function batchCreateTrns(param) {
  let listReq = requestTransactionParameter(param);
  let batchReq = new BatchCreateTransactionRequest();
  batchReq.setTransactionsList(listReq);

  try {
    console.table(batchReq);
    const res = await executeBatchCreateTransaction(batchReq);
    return res.transactionResponsesList;
  } catch (err) {
    console.log(err);
    return err;
  }
}

export const convertDataToTransactionModel = (d) => {
  let dt = GetValueByOjbectName('Trade Date', d).split(/ /);
  dt.shift();

  return {
    correspondent: GetValueByOjbectName('Correspondent', d),
    contraCorrespondent: GetValueByOjbectName('Contra Correspondent', d),
    accountNo: GetValueByOjbectName('Account No', d),
    entryType: GetValueByOjbectName('Entry Type', d),
    tradeDate: GetValueByOjbectName('Trade Date', d),
    symbol: GetValueByOjbectName('Symbol', d),
    side: GetValueByOjbectName('Side', d),
    qty: GetValueByOjbectName('Qty', d),
    price: GetValueByOjbectName('Price', d),
    contraAccountNo: GetValueByOjbectName('Contra Account No', d),
    settleDate: GetValueByOjbectName('Settle Date', d),
    grossAmt: GetValueByOjbectName('Gross Amt', d),
    description: GetValueByOjbectName('Description', d),
    externalId: GetValueByOjbectName('External ID', d),
    executingVenue: GetValueByOjbectName('Executing Venue', d),
    orderId: GetValueByOjbectName('Order ID', d),
    vendor: GetValueByOjbectName('Vendor', d),
    contraSubAccountNo: GetValueByOjbectName('Contra Sub Account No', d),
    subAccountNo: GetValueByOjbectName('Sub Account No', d),
    commission: GetValueByOjbectName('Commission', d),
    capacity: GetValueByOjbectName('Capacity', d),
    error: validateEntries(d),
  };
};

const GetValueByOjbectName = (name, d) => {
  if (Object.prototype.hasOwnProperty.call(d, name)) {
    return d[name];
  }
  return '';
};

async function executeBatchCreatePendingTransaction(req) {
  return new Promise((resolve, reject) => {
    service.batchCreatePendingTransaction(req, {}, (error, response) => {
      if (error) {
        console.log(error);
        notifyError(error.message);
        reject(error);
      } else {
        resolve(response.toObject());
        return response.toObject();
      }
    });
  });
}

export async function batchCreatePendingTransaction(param) {
  let listReq = requestTransactionParameter(param);
  let batchReq = new BatchCreatePendingTransactionRequest();
  batchReq.setTransactionsList(listReq);

  try {
    const res = await executeBatchCreatePendingTransaction(batchReq);
    return res.transactionResponsesList;
  } catch (err) {
    return err;
  }
}
