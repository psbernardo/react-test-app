import { notifyError } from 'components/Notification/Notification';
import {
  Credential,
  ListCredentialRequest,
  DeleteCredentialRequest,
  CredentialServiceClient,
} from '../proto/admpb/credential_grpc_web_pb';
import { auth } from '../lib/auth/Auth';

import { stringToProtoDate } from './ConvertService';

const service = new CredentialServiceClient(
  window.env.GRPC_ENDPOINT,
  {},
  { ...auth }
);

export async function createCredential(param) {
  return new Promise((resolve, reject) => {
    const req = new Credential();
    req.setNote(param.note);
    req.setStatus(param.status);
    req.setFromDate(stringToProtoDate(param.fromDate));
    req.setToDate(stringToProtoDate(param.toDate));
    req.setUserName(param.userName);
    req.setCredential(param.credential);
    req.setHost(param.host);
    req.setPassword(param.password);
    req.setPasswordPrefix(param.passwordPrefix);
    req.setPort(param.port);
    req.setHostKey(param.hostKey);
    req.setType(param.type);
    req.setFtpDir(param.ftpDir);

    service.createCredential(req, {}, (error, response) => {
      if (error) {
        notifyError(error.message);
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function updateCredential(param) {
  return new Promise((resolve, reject) => {
    const req = new Credential();
    req.setNote(param.note);
    req.setStatus(param.status);
    req.setFromDate(stringToProtoDate(param.fromDate));
    req.setToDate(stringToProtoDate(param.toDate));
    req.setUserName(param.userName);
    req.setCredential(param.credential);
    req.setCredentialId(param.credentialId);
    req.setHost(param.host);
    req.setPassword(param.password);
    req.setPasswordPrefix(param.passwordPrefix);
    req.setPort(param.port);
    req.setHostKey(param.hostKey);
    req.setType(param.type);
    req.setFtpDir(param.ftpDir);

    service.updateCredential(req, {}, (error, response) => {
      if (error) {
        notifyError(error.message);
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function deleteCredential(id) {
  return new Promise((resolve, reject) => {
    const req = new DeleteCredentialRequest();
    req.setCredentialId(id);
    service.deleteCredential(req, {}, (error, response) => {
      if (error) {
        notifyError(error.message);
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function listCredential(param) {
  return new Promise((resolve, reject) => {
    const req = new ListCredentialRequest();
    req.setCredential(param.credential);
    req.setUserName(param.userName);
    req.setStatus(param.status);
    service.listCredential(req, {}, (error, response) => {
      if (error) {
        notifyError(error.message);
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}
