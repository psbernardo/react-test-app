import {
  TransactionReconServiceClient,
  ListTransactionReconRequest,
  ReadTransactionReconRequest,
} from '../proto/reconpb/transactionrecon_grpc_web_pb';
import { objectToProtoDate, stringToProtoDate } from './ConvertService';
import { auth } from '../lib/auth/Auth';

const service = new TransactionReconServiceClient(
  window.env.GRPC_ENDPOINT,
  {},
  { ...auth }
);

export async function listTransactionRecon(param) {
  return new Promise((resolve, reject) => {
    let req = new ListTransactionReconRequest();
    req.setTradeDate(stringToProtoDate(param.tradeDate));
    req.setContraAccount(param.contraAccountNo);
    req.setAccount(param.account);
    req.setEntryType(param.entryType);
    req.setSymbol(param.symbol);

    service.listTransactionRecon(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function readTransactionRecon(param) {
  return new Promise((resolve, reject) => {
    let req = new ReadTransactionReconRequest();
    req.setTradeDate(objectToProtoDate(param.tradeDate));
    req.setContraAccount(param.contraAccount);
    req.setAccount(param.account);
    req.setEntryType(param.entryType);
    req.setSymbol(param.symbol);

    service.readTransactionRecon(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}
