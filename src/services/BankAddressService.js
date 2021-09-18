import { notifyError } from 'components/Notification/Notification';
import {
  CreateBankAddressRequest,
  UpdateBankAddressRequest,
  ListBankAddressRequest,
  BankAddressServiceClient,
  DeleteBankAddressRequest,
  ListBankAddressAuditRequest,
  ReadBankAddressRequest,
  ReadComplateBankAddressRequest,
} from '../proto/bankpb/address_grpc_web_pb';

import { auth } from '../lib/auth/Auth';
const service = new BankAddressServiceClient(
  window.env.GRPC_ENDPOINT,
  {},
  { ...auth }
);

export async function createBankAddress(param) {
  return new Promise((resolve, reject) => {
    const req = new CreateBankAddressRequest();
    req.setBankName(param.bankName);
    req.setBankRoutingNo(param.bankRoutingNo);
    req.setAddress(param.address);
    req.setCity(param.city);
    req.setZipCode(param.zipCode);
    req.setState(param.state);
    req.setStatus(param.status);
    req.setCountry(param.country);

    service.createBankAddress(req, {}, (error, response) => {
      if (error) {
        notifyError(error.message);
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function updateBankAddress(param) {
  return new Promise((resolve, reject) => {
    const req = new UpdateBankAddressRequest();
    req.setBankAddressId(param.bankAddressId);
    req.setAddress(param.address);
    req.setCity(param.city);
    req.setZipCode(param.zipCode);
    req.setState(param.state);
    req.setStatus(param.status);
    req.setCountry(param.country);

    service.updateBankAddress(req, {}, (error, response) => {
      if (error) {
        notifyError(error.message);
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function listBankAddress(param) {
  return new Promise((resolve, reject) => {
    const req = new ListBankAddressRequest();
    req.setBankRoutingNo(param.bankRoutingNo);
    req.setBankName(param.bankName);

    service.listBankAddress(req, {}, (error, response) => {
      if (error) {
        notifyError(error.message);
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function deleteBankAddress(id) {
  return new Promise((resolve, reject) => {
    let req = new DeleteBankAddressRequest();
    req.setBankAddressId(id);

    service.deleteBankAddress(req, {}, (error, response) => {
      if (error) {
        notifyError(error.message);
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function listBankAddressAudit(id) {
  return new Promise((resolve, reject) => {
    const req = new ListBankAddressAuditRequest();
    req.setBankAddressId(id);

    service.listBankAddressAudit(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function readBankAddress(id) {
  return new Promise((resolve, reject) => {
    const req = new ReadBankAddressRequest();
    req.setBankAddressId(id.bankAddressId ? id.bankAddressId : id);

    service.readBankAddress(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject().bankAddress);
      }
    });
  });
}

export async function readCompleteAddress(param) {
  return new Promise((resolve, reject) => {
    const req = new ReadComplateBankAddressRequest();
    req.setBankRoutingNo(param.bankRoutingNo);
    req.setBankName(param.bankName);

    service.readCompleteBankAddress(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}
