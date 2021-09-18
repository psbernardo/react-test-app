import { notifyError } from 'components/Notification/Notification';
import {
  UpdateRequest,
  ListRequest,
  RequestServiceClient,
  ListRequestAuditRequest,
  CreateRequest,
  ReadMaximumWithdrawableRequest,
} from '../proto/bankpb/request_grpc_web_pb';
import { stringToProtoDate } from './ConvertService';
import { auth } from '../lib/auth/Auth';

const service = new RequestServiceClient(
  window.env.GRPC_ENDPOINT,
  {},
  { ...auth }
);

export async function create(param) {
  return new Promise((resolve, reject) => {
    const req = new CreateRequest();
    req.setCorrespondent(param.correspondent);
    req.setAccountNo(param.accountNo);
    req.setBankId(param.bankId);
    req.setTransferType(param.transferType);
    req.setAmt(param.amt);
    req.setFee(param.fee);
    req.setFedNo(param.fedNo);
    req.setExternalId(param.externalId);
    req.setBank(param.bank);
    req.setBankNote(param.bankNote);
    req.setInternalNote(param.internalNote);
    req.setStatus(param.status);
    req.setRequestType(param.requestType);
    // req.setSendTo(param.sendTo);

    service.create(req, {}, (error, response) => {
      if (error) {
        notifyError(error.message);
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function update(param) {
  return new Promise((resolve, reject) => {
    const req = new UpdateRequest();
    req.setRequestId(param.requestId);
    req.setStatus(param.status);
    req.setFedNo(param.fedNo);
    req.setInternalNote(param.internalNote);

    // req.setSendTo(param.sendTo);

    req.setExternalId(param.externalId);

    service.update(req, {}, (error, response) => {
      if (error) {
        notifyError(error.message);
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function list(param) {
  return new Promise((resolve, reject) => {
    const req = new ListRequest();
    req.setFromDate(stringToProtoDate(param.fromDate));
    req.setToDate(stringToProtoDate(param.toDate));
    req.setCorrespondent(param.correspondent);
    req.setAccountNo(param.accountNo);
    req.setMasterAccountNo(param.masterAccountNo);
    req.setTransferType(param.transferType);
    req.setStatus(param.status);
    req.setRequestType(param.requestType);

    service.list(req, {}, (error, response) => {
      if (error) {
        notifyError(error.message);
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function listRequestAudit(id) {
  return new Promise((resolve, reject) => {
    const req = new ListRequestAuditRequest();
    req.setRequestId(id);

    service.listRequestAudit(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function readMaximumWithdrawable(correspondent, accountNo) {
  return new Promise((resolve, reject) => {
    const req = new ReadMaximumWithdrawableRequest();
    req.setCorrespondent(correspondent);
    req.setAccountNo(accountNo);

    service.readMaximumWithdrawable(req, {}, (error, response) => {
      if (error) {
        notifyError(error.message);
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}
