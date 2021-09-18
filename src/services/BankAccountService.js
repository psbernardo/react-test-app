import { notifyError } from 'components/Notification/Notification';
import {
  Account,
  ListAccountRequest,
  ReadAccountRequest,
  AccountServiceClient,
  ListAccountAuditRequest,
  ListGlBankRequest,
  ReadDefaultGlBankRequest,
} from '../proto/bankpb/account_grpc_web_pb';

import { auth } from '../lib/auth/Auth';

const service = new AccountServiceClient(
  window.env.GRPC_ENDPOINT,
  {},
  { ...auth }
);

const getAcctRequest = (param) => {
  const req = new Account();
  req.setBankId(param.bankId);
  req.setCorrespondent(param.correspondent);
  req.setMasterAccountNo(param.masterAccountNo);
  req.setAccountNo(param.accountNo);
  req.setBankOwnerName(param.bankOwnerName);
  req.setAchRoutingNo(param.achRoutingNo);
  req.setWireRoutingNo(param.wireRoutingNo);
  req.setBankAccountNo(param.bankAccountNo);
  req.setBankAccountType(param.bankAccountType);
  req.setApprovedMethod(param.approvedMethod);
  req.setPlaidAccessToken(param.plaidAccessToken);
  req.setStatus(param.status);
  req.setBankName(param.bankName);
  req.setBankAddressId(param.bankAddressId);
  req.setBankIdentifierCode(param.bankIdentifierCode);
  req.setGlAccountId(param.glAccountId);

  return req;
};

export async function createAccount(param) {
  return new Promise((resolve, reject) => {
    service.createAccount(getAcctRequest(param), {}, (error, response) => {
      if (error) {
        notifyError(error.message);
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function updateAccount(param) {
  return new Promise((resolve, reject) => {
    service.updateAccount(getAcctRequest(param), {}, (error, response) => {
      if (error) {
        notifyError(error.message);
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function listAccount(param) {
  return new Promise((resolve, reject) => {
    const req = new ListAccountRequest();
    req.setCorrespondent(param.correspondent);
    req.setMasterAccountNo(param.masterAccountNo);
    req.setAccountNo(param.accountNo);
    req.setBankOwnerName(param.bankOwnerName);
    req.setAchRoutingNo(param.achRoutingNo);
    req.setBankAccountNo(param.bankAccountNo);
    req.setStatus(param.status);

    service.listAccount(req, {}, (error, response) => {
      if (error) {
        notifyError(error.message);
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function listGlBank() {
  return new Promise((resolve, reject) => {
    const req = new ListGlBankRequest();

    service.listGlBank(req, {}, (error, response) => {
      if (error) {
        notifyError(error.message);
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function readDefaultGlBank() {
  return new Promise((resolve, reject) => {
    const req = new ReadDefaultGlBankRequest();

    service.readDefaultGlBank(req, {}, (error, response) => {
      if (error) {
        notifyError(error.message);
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function readAccount(param) {
  return new Promise((resolve, reject) => {
    const req = new ReadAccountRequest();
    req.setBankId(param);

    service.readAccount(req, {}, (error, response) => {
      if (error) {
        notifyError(error.message);
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function listAccountAudit(id) {
  return new Promise((resolve, reject) => {
    const req = new ListAccountAuditRequest();
    req.setBankId(id);

    service.listAccountAudit(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}
