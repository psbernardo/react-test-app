import {
  BankBalanceServiceClient,
  ListBalanceRequest,
  ListBalanceDetailsRequest,
} from '../proto/bankpb/balance_grpc_web_pb';
import { objectToProtoDate, stringToProtoDate } from './ConvertService';
import { auth } from '../lib/auth/Auth';

const service = new BankBalanceServiceClient(
  window.env.GRPC_ENDPOINT,
  {},
  { ...auth }
);

export async function listBalance(param) {
  return new Promise((resolve, reject) => {
    let req = new ListBalanceRequest();
    req.setSystemDate(stringToProtoDate(param.systemDate));
    req.setSource(param.source);
    req.setAccount(param.account);

    service.listBalance(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function listDetails(param) {
  return new Promise((resolve, reject) => {
    let req = new ListBalanceDetailsRequest();
    console.log(param);
    req.setSystemDate(objectToProtoDate(param.systemDate));
    req.setSource(param.source);
    req.setAccount(param.account);

    service.listBalanceDetails(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}
