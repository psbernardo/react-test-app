import {
  AccountType,
  AccountTypeServiceClient,
  DeleteAccountTypeRequest,
  BatchCreateAccountTypeRequest,
} from '../proto/accountpb/accounttype_grpc_web_pb';

import { auth } from '../lib/auth/Auth';
const service = new AccountTypeServiceClient(
  window.env.GRPC_ENDPOINT,
  {},
  { ...auth }
);

export async function createAccountType(accountId, param) {
  return new Promise((resolve, reject) => {
    const req = new AccountType();
    req.setTypeId(param.typeId);
    req.setAccountId(accountId);
    req.setType(param.type);
    req.setTypeCode(param.typeCode);
    req.setStatus(param.status);

    service.createAccountType(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function updateAccountType(accountId, param) {
  return new Promise((resolve, reject) => {
    const req = new AccountType();
    req.setTypeId(param.typeId);
    req.setAccountId(accountId);
    req.setType(param.type);
    req.setTypeCode(param.typeCode);
    req.setStatus(param.status);

    service.updateAccountType(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function deleteAccountType(id) {
  return new Promise((resolve, reject) => {
    const req = new DeleteAccountTypeRequest();
    req.setTypeId(id);

    service.deleteAccountType(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}
