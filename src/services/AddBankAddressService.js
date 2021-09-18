import { notifyError } from 'components/Notification/Notification';
import {
  CreateBankAddressRequest,
  UpdateBankAddressRequest,
  BankAddressServiceClient,
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

    service.updateBankAddress(req, {}, (error, response) => {
      console.log(error, response);
      if (error) {
        notifyError(error.message);
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}
