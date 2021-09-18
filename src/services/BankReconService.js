import { stringToProtoDate, objectToProtoDate } from './ConvertService';
import {
  BankReconServiceClient,
  ListReconRequest,
  ListReconDetailRequest,
} from '../proto/bankpb/recon_grpc_web_pb';
import { auth } from '../lib/auth/Auth';
const service = new BankReconServiceClient(
  window.env.GRPC_ENDPOINT,
  {},
  { ...auth }
);

export async function listRecon(param) {
  return new Promise((resolve, reject) => {
    const req = new ListReconRequest();
    req.setSystemDate(stringToProtoDate(param.systemDate));
    req.setBankSource(param.bankSource);
    req.setBankAccount(param.bankAccount);
    req.setHouseAccount(param.houseAccount);

    service.listRecon(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function listReconDetail(param) {
  return new Promise((resolve, reject) => {
    const req = new ListReconDetailRequest();
    req.setSystemDate(objectToProtoDate(param.systemDate));
    req.setBankAccount(param.bankAccount);
    req.setHouseAccount(param.houseAccount);

    service.listReconDetail(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}
