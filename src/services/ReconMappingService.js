import { notifyError } from 'components/Notification/Notification';
import {
  CreateAccountMappingRequest,
  UpdateAccountMappingRequest,
  ListAccountMappingRequest,
  DeleteAccountMappingRequest,
  AccountMappingServiceClient,
} from '../proto/reconpb/accountmapping_grpc_web_pb';

import { auth } from '../lib/auth/Auth';
const service = new AccountMappingServiceClient(
  window.env.GRPC_ENDPOINT,
  {},
  { ...auth }
);

export async function createAccountMapping(param) {
  return new Promise((resolve, reject) => {
    const req = new CreateAccountMappingRequest(param);
    req.setReport(param.report);
    req.setAccount(param.account);
    req.setContraAccount(param.contraAccount);
    req.setContraSource(param.contraSource);

    service.createAccountMapping(req, {}, (error, response) => {
      if (error) {
        notifyError(error.message);
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function updateAccountMapping(param) {
  return new Promise((resolve, reject) => {
    const req = new UpdateAccountMappingRequest(param);

    req.setAccountMappingId(param.accountMappingId);
    req.setReport(param.report);
    req.setAccount(param.account);
    req.setContraAccount(param.contraAccount);
    req.setContraSource(param.contraSource);

    service.updateAccountMapping(req, {}, (error, response) => {
      if (error) {
        notifyError(error.message);
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function listAccountMapping(param) {
  return new Promise((resolve, reject) => {
    const req = new ListAccountMappingRequest(param);
    req.setReport(param.report);
    req.setAccount(param.account);
    req.setContraAccount(param.contraAccount);
    req.setContraSource(param.contraSource);
    service.listAccountMapping(req, {}, (error, response) => {
      if (error) {
        notifyError(error.message);
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function deleteAccountMapping(id) {
  return new Promise((resolve, reject) => {
    let req = new DeleteAccountMappingRequest();
    req.setAccountMappingId(id);

    service.deleteAccountMapping(req, {}, (error, response) => {
      if (error) {
        notifyError(error.message);
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}
