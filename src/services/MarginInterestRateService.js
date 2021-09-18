import {
  InterestRate,
  InterestRateServiceClient,
  ListInterestRateRequest,
  DeleteInterestRateRequest,
} from '../proto/marginpb/interestrate_grpc_web_pb';
import { notifyError } from 'components/Notification/Notification';
import { stringToProtoDate } from './ConvertService';
import { auth } from '../lib/auth/Auth';

const service = new InterestRateServiceClient(
  window.env.GRPC_ENDPOINT,
  {},
  { ...auth }
);

const requestParameter = (param) => {
  let req = new InterestRate();
  req.setMarginRateId(param.marginRateId);
  req.setCorrespondent(param.correspondent);
  req.setMasterAccountNo(param.masterAccountNo);
  req.setFederalRate(param.federalRate);
  req.setCreditRate(param.creditRate);
  req.setDebitRate(param.debitRate);
  req.setNote(param.note);
  req.setStatus(param.status);
  req.setBranch(param.branch);
  req.setRep(param.rep);
  req.setFromDate(stringToProtoDate(param.fromDate));
  req.setToDate(stringToProtoDate(param.toDate));
  return req;
};

export async function createInterestRate(param) {
  return new Promise((resolve, reject) => {
    const req = requestParameter(param);

    service.createInterestRate(req, {}, (error, response) => {
      if (error) {
        notifyError(error.message);
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function listInterestRate(param) {
  return new Promise((resolve, reject) => {
    const req = new ListInterestRateRequest();
    req.setCorrespondent(param.correspondent);
    req.setMasterAccountNo(param.accountName);
    req.setStatus(param.status);
    req.setRep(param.rep);
    req.setBranch(param.branch);

    service.listInterestRate(req, {}, (error, response) => {
      if (error) {
        notifyError(error.message);
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function deleteInterestRate(interestRateId) {
  return new Promise((resolve, reject) => {
    const req = new DeleteInterestRateRequest();
    req.setMarginRateId(interestRateId);

    service.deleteInterestRate(req, {}, (error, response) => {
      if (error) {
        notifyError(error.message);
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function updateInterestRate(param) {
  return new Promise((resolve, reject) => {
    const req = requestParameter(param);

    service.updateInterestRate(req, {}, (error, response) => {
      if (error) {
        notifyError(error.message);
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}
