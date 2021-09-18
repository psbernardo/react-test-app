import { notifyError } from 'components/Notification/Notification';
import {
  CommissionServiceClient,
  Commission,
  ListCommissionRequest,
  ReadCommissionRequest,
  DeleteCommissionRequest,
} from '../proto/feepb/commission_grpc_web_pb';
import { auth } from '../lib/auth/Auth';

import { stringToProtoDate } from './ConvertService';

const service = new CommissionServiceClient(
  window.env.GRPC_ENDPOINT,
  {},
  { ...auth }
);

export async function createCommission(param) {
  param.sellAmt = param.sellAmt == '' ? '0' : param.sellAmt;
  param.shortSellAmt = param.shortSellAmt == '' ? '0' : param.shortSellAmt;
  param.buyAmt = param.buyAmt == '' ? '0' : param.buyAmt;
  param.maxCommission = param.maxCommission == '' ? '0' : param.maxCommission;
  param.minCommission = param.minCommission == '' ? '0' : param.minCommission;
  return new Promise((resolve, reject) => {
    const req = new Commission();
    req.setBranch(param.branch);
    req.setBuy(param.buy);
    req.setBuyAmt(param.buyAmt);
    req.setFromDate(stringToProtoDate(param.fromDate));
    req.setMasterAccountNo(param.masterAccountNo);
    req.setNote(param.note);
    req.setRep(param.rep);
    req.setSell(param.sell);
    req.setSellAmt(param.sellAmt);
    req.setShortSell(param.shortSell);
    req.setStatus(param.status);
    req.setToDate(stringToProtoDate(param.toDate));
    req.setChargeBy(param.chargeBy);
    req.setCommissionId(param.commissionId);
    req.setCorrespondent(param.correspondent);
    req.setMaxCommission(param.maxCommission);
    req.setMinCommission(param.minCommission);
    req.setShortSellAmt(param.shortSellAmt);

    service.createCommission(req, {}, (error, response) => {
      if (error) {
        notifyError(error.message);
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function updateCommission(param) {
  param.sellAmt = param.sellAmt == '' ? '0' : param.sellAmt;
  param.shortSellAmt = param.shortSellAmt == '' ? '0' : param.shortSellAmt;
  param.buyAmt = param.buyAmt == '' ? '0' : param.buyAmt;
  param.maxCommission = param.maxCommission == '' ? '0' : param.maxCommission;
  param.minCommission = param.minCommission == '' ? '0' : param.minCommission;

  return new Promise((resolve, reject) => {
    const req = new Commission();
    req.setBranch(param.branch);
    req.setBuy(param.buy);
    req.setBuyAmt(param.buyAmt);
    req.setFromDate(stringToProtoDate(param.fromDate));
    req.setMasterAccountNo(param.masterAccountNo);
    req.setNote(param.note);
    req.setRep(param.rep);
    req.setSell(param.sell);
    req.setSellAmt(param.sellAmt);
    req.setShortSell(param.shortSell);
    req.setStatus(param.status);
    req.setToDate(stringToProtoDate(param.toDate));
    req.setChargeBy(param.chargeBy);
    req.setCommissionId(param.commissionId);
    req.setCorrespondent(param.correspondent);
    req.setMaxCommission(param.maxCommission);
    req.setMinCommission(param.minCommission);
    req.setShortSellAmt(param.shortSellAmt);

    service.updateCommission(req, {}, (error, response) => {
      if (error) {
        notifyError(error.message);
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function deleteCommission(param) {
  return new Promise((resolve, reject) => {
    const req = new DeleteCommissionRequest();
    req.setCommissionId(param);

    service.deleteCommission(req, {}, (error, response) => {
      if (error) {
        notifyError(error.message);
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function readCommission(param) {
  return new Promise((resolve, reject) => {
    const req = new ReadCommissionRequest();
    req.setCorrespondent(param.correspondent);
    req.setBranch(param.branch);
    req.setRep(param.rep);
    req.setMasterAccountNo(param.masterAccountNo);
    req.setFromDate(stringToProtoDate(param.fromDate));
    req.setToDate(stringToProtoDate(param.toDate));
    req.setChargeBy(param.chargeBy);
    req.setBuyAmt(param.buyAmt);
    req.setSellAmt(param.sellAmt);
    req.setShortSellAmt(param.shortSellAmt);
    req.setBuy(param.buy);
    req.setSell(param.sell);
    req.setShortSell(param.shortSell);
    req.setMinCommission(param.minCommission);
    req.setMaxCommission(param.maxCommission);
    req.setNote(param.note);
    req.setStatus(param.status);

    service.readCommission(req, {}, (error, response) => {
      if (error) {
        notifyError(error.message);
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function listCommission(param) {
  return new Promise((resolve, reject) => {
    const req = new ListCommissionRequest();
    req.setCorrespondent(param.correspondent);
    req.setBranch(param.branch);
    req.setRep(param.rep);
    req.setMasterAccountNo(param.masterAccountNo);
    req.setChargeBy(param.chargeBy);
    req.setStatus(param.status);
    service.listCommission(req, {}, (error, response) => {
      if (error) {
        notifyError(error.message);
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}
