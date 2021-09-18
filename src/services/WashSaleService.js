/*Service*/
import {
  WashSaleServiceClient,
  ListWashSaleRequest,
  ReadWashSaleRequest,
} from '../proto/trademonitoringpb/washsale_grpc_web_pb';
import {
  objectToProtoDate,
  objectToProtoTimeStamp,
  stringToProtoDate,
} from './ConvertService';
import { auth } from '../lib/auth/Auth';

const service = new WashSaleServiceClient(
  window.env.GRPC_ENDPOINT,
  {},
  { ...auth }
);

export async function listWashSale(param) {
  return new Promise((resolve, reject) => {
    const req = new ListWashSaleRequest();
    req.setFromDate(stringToProtoDate(param.fromDate));
    req.setToDate(stringToProtoDate(param.toDate));
    req.setCorrespondent(param.correspondent);
    req.setAccountNo(param.accountNo);
    req.setTraderId(param.traderId);
    req.setSymbol(param.symbol);

    service.listWashSale(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function listWashSaleDetails(param) {
  return new Promise((resolve, reject) => {
    const req = new ReadWashSaleRequest();
    req.setAccountId(param.accountId);
    req.setTraderId(param.traderId);
    req.setTradeDate(objectToProtoDate(param.tradeDate));
    req.setTradeAt(objectToProtoTimeStamp(param.tradeAt));
    req.setSymbol(param.symbol);

    service.readWashSale(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}
