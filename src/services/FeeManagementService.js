import { notifyError } from 'components/Notification/Notification';
import {
  CreateFeeManagementRequest,
  UpdateFeeManagementRequest,
  ListFeeManagementRequest,
  FeeManagementServiceClient,
} from '../proto/feepb/management_grpc_web_pb';
import { stringToProtoDate } from './ConvertService';

import { auth } from '../lib/auth/Auth';
const service = new FeeManagementServiceClient(
  window.env.GRPC_ENDPOINT,
  {},
  { ...auth }
);

export async function createFeeManagement(param) {
  return new Promise((resolve, reject) => {
    const req = new CreateFeeManagementRequest();
    req.setPreviousId(param.previousId);
    req.setCorrespondent(param.correspondent);
    req.setAccountNo(param.accountNo);
    req.setMasterAccountNo(param.masterAccountNo);
    req.setFromDate(stringToProtoDate(param.fromDate));
    req.setToDate(stringToProtoDate(param.toDate));
    req.setBuy(param.buy);
    req.setSell(param.sell);
    req.setShortSell(param.shortSell);
    req.setCalcType(param.calcType);
    req.setFeeRate(param.feeRate);
    req.setStatus(param.status);
    req.setContraAccount(param.contraAccount);
    req.setFeeType(param.feeType);

    service.createFeeManagement(req, {}, (error, response) => {
      if (error) {
        notifyError(error.message);
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function updateFeeManagement(param) {
  return new Promise((resolve, reject) => {
    const req = new UpdateFeeManagementRequest();
    req.setFeeManagementId(param.feeManagementId);
    req.setStatus(param.status);

    service.updateFeeManagement(req, {}, (error, response) => {
      if (error) {
        notifyError(error.message);
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function listFeeManagement(param) {
  return new Promise((resolve, reject) => {
    const req = new ListFeeManagementRequest();
    req.setCorrespondent(param.correspondent);
    req.setAccountNo(param.accountNo);
    req.setMasterAccountNo(param.masterAccountNo);
    req.setStatus(param.status);
    req.setContraAccount(param.contraAccount);

    service.listFeeManagement(req, {}, (error, response) => {
      if (error) {
        notifyError(error.message);
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}
