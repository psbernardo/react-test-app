import { notifyError } from 'components/Notification/Notification';
import {
  AccountAccess,
  ListAccountAccessRequest,
  ListAccountAccessorRequest,
  AccountAccessServiceClient,
  DeleteAccountAccessRequest,
} from '../proto/clientpb/accountaccess_grpc_web_pb';

import { auth } from '../lib/auth/Auth';
const service = new AccountAccessServiceClient(
  window.env.GRPC_ENDPOINT,
  {},
  { ...auth }
);

export async function createAccountAccess(param) {
  return new Promise((resolve, reject) => {
    const req = new AccountAccess();
    req.setUsrId(param.usrId);
    req.setAccountId(param.accountId);

    service.createAccountAccess(req, {}, (error, response) => {
      if (error) {
        notifyError(error.message);
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function listAccountAccess(param) {
  return new Promise((resolve, reject) => {
    const req = new ListAccountAccessRequest();
    req.setUsrId(param.usrId);
    req.setCorrespondent(param.correspondent);
    req.setBranch(param.branch);
    req.setAccountNo(param.accountNo);
    req.setAccountName(param.accountName);
    req.setAccountNo(param.masterAccountNo);
    req.setRep(param.rep);
    req.setBroker(param.broker);
    req.setStatus(param.status);

    service.listAccountAccess(req, {}, (error, response) => {
      if (error) {
        notifyError(error.message);
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function deleteAccountAccess(param) {
  return new Promise((resolve, reject) => {
    let req = new DeleteAccountAccessRequest();
    req.setAccountAccessId(param.accountAccessId);

    service.deleteAccountAccess(req, {}, (error, response) => {
      if (error) {
        notifyError(error.message);
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function listAccessors(id) {
  return new Promise((resolve, reject) => {
    let req = new ListAccountAccessorRequest();
    req.setAccountId(id);

    service.listAccountAccessor(req, {}, (error, response) => {
      if (error) {
        notifyError(error.message);
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function listAccessorsOnCreate(id) {
  return new Promise((resolve, reject) => {
    let req = new ListAccountAccessorRequest();
    req.setAccountId(id);

    service.listAccountAccessorOnCreate(req, {}, (error, response) => {
      if (error) {
        notifyError(error.message);
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}
