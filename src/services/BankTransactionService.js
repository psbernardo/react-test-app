import {
  ListBankTransactionRequest,
  BankTransactionServiceClient,
  BankTransaction,
} from '../proto/trnspb/banktransaction_grpc_web_pb';
import { stringToProtoDate, objectToProtoDate } from './ConvertService';
import { auth } from '../lib/auth/Auth';

const service = new BankTransactionServiceClient(
  window.env.GRPC_ENDPOINT,
  {},
  { ...auth }
);

export async function listBankTransaction(param) {
  return new Promise((resolve, reject) => {
    let req = new ListBankTransactionRequest();
    req.setSource(param.source);
    req.setSystemDate(stringToProtoDate(param.systemDate));
    req.setAccount(param.account);

    service.listBankTransaction(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function readBankTransaction(param) {
  return new Promise((resolve, reject) => {
    let req = new BankTransaction();
    req.setSource(param.source);
    req.setSystemDate(objectToProtoDate(param.systemDate));
    req.setRequestId(param.requestId);

    service.readBankTransactionView(req, {}, (error, response) => {
      if (error) {
        console.log(error);
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}
