import {
  DcRequest,
  ListDcRequest,
  DcRequestServiceClient,
  ListDcAuditRequest,
} from '../proto/bankpb/dcrequest_grpc_web_pb';
import { auth } from '../lib/auth/Auth';
import { stringToProtoDate } from './ConvertService';

const service = new DcRequestServiceClient(
  window.env.GRPC_ENDPOINT,
  {},
  { ...auth }
);

export async function createDc(param) {
  return new Promise((resolve, reject) => {
    let req = new DcRequest();
    req.setDcRequestId(param.dcRequestId);
    req.setWalletId(param.walletId);
    req.setContraWalletId(param.contraWalletId);
    req.setAccountNo(param.accountNo);
    req.setAmt(param.amt);
    req.setTransferType(param.transferType);
    req.setStatus(param.status);
    req.setInternalId(param.internalId);
    req.setPublicDescription(param.publicDescription);
    req.setPrivateDescription(param.privateDescription);
    req.setCreatedBy(param.createdBy);
    req.setBroker(param.broker);
    req.setSystemDate(param.systemDate);
    req.setConfirmationId(param.confirmationId);
    req.setReferenceId(param.referenceId);
    req.setCorrespondent(param.correspondent);
    req.setMasterAccountNo(param.masterAccountNo);
    req.setAccountName(param.accountName);
    req.setType(param.type);

    service.createDc(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function listDc(param) {
  return new Promise((resolve, reject) => {
    const req = new ListDcRequest();
    req.setFromDate(stringToProtoDate(param.fromDate));
    req.setToDate(stringToProtoDate(param.toDate));
    req.setCorrespondent(param.correspondent);
    req.setAccountNo(param.accountNo);
    req.setTransferType(param.transferType);
    req.setStatus(param.status);

    service.listDc(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function updateDc(param) {
  return new Promise((resolve, reject) => {
    let req = new DcRequest();
    req.setDcRequestId(param.dcRequestId);
    req.setStatus(param.status);
    req.setInternalId(param.internalId);
    req.setPublicDescription(param.publicDescription);
    req.setPrivateDescription(param.privateDescription);

    service.updateDc(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function listDcAudit(id) {
  return new Promise((resolve, reject) => {
    const req = new ListDcAuditRequest();
    req.setDcRequestId(id);

    service.listDcAudit(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}
