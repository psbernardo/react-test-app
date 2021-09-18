/*Service*/
import {
  OddLotServiceClient,
  ListOddLotRequest,
  ReadOddLotRequest,
} from '../proto/trademonitoringpb/oddlot_grpc_web_pb';
import {
  objectToProtoDate,
  objectToProtoTimeStamp,
  stringToProtoDate,
} from './ConvertService';
import { auth } from '../lib/auth/Auth';

const service = new OddLotServiceClient(
  window.env.GRPC_ENDPOINT,
  {},
  { ...auth }
);

export async function listOddLot(param) {
  return new Promise((resolve, reject) => {
    const req = new ListOddLotRequest();
    req.setFromDate(stringToProtoDate(param.fromDate));
    req.setToDate(stringToProtoDate(param.toDate));
    req.setCorrespondent(param.correspondent);
    req.setAccountNo(param.accountNo);
    req.setTraderId(param.traderId);
    req.setSymbol(param.symbol);

    service.listOddLot(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function listOddLotDetails(param) {
  return new Promise((resolve, reject) => {
    const req = new ReadOddLotRequest();
    req.setAccountId(param.accountId);
    req.setTraderId(param.traderId);
    req.setTradeDate(objectToProtoDate(param.tradeDate));
    req.setTradeAt(objectToProtoTimeStamp(param.tradeAt));
    req.setSymbol(param.symbol);

    service.readOddLot(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}
