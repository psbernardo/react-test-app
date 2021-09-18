import {
  SubAccount,
  SubAccountServiceClient,
  DeleteSubAccountRequest,
  ListSubAccountRequest,
} from '../proto/accountpb/subaccount_grpc_web_pb';

import { auth } from '../lib/auth/Auth';
const service = new SubAccountServiceClient(
  window.env.GRPC_ENDPOINT,
  {},
  { ...auth }
);

export async function listSubAccount(accountId, type) {
  return new Promise((resolve, reject) => {
    const req = new ListSubAccountRequest();
    req.setAccountId(accountId);
    req.setType(type);

    service.listSubAccount(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function createSubAccount(accountId, param, type) {
  return new Promise((resolve, reject) => {
    const req = new SubAccount();
    req.setSubAccountId(param.subAccountId);
    req.setAccountId(accountId);
    req.setSubAccount(param.subAccount);
    req.setStatus(param.status);
    req.setType(type);

    service.createSubAccount(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function updateSubAccount(accountId, param, type) {
  return new Promise((resolve, reject) => {
    const req = new SubAccount();
    req.setSubAccountId(param.subAccountId);
    req.setAccountId(accountId);
    req.setSubAccount(param.subAccount);
    req.setStatus(param.status);
    req.setType(type);

    service.updateSubAccount(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function deleteSubAccount(id, type) {
  return new Promise((resolve, reject) => {
    const req = new DeleteSubAccountRequest();
    req.setSubAccountId(id);
    req.setType(type);

    service.deleteSubAccount(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}
