/*Service*/
import {
  MiniManipulationServiceClient,
  ListMiniManipulationRequest,
  ReadMiniManipulationRequest,
} from '../proto/trademonitoringpb/minimanipulation_grpc_web_pb';
import {
  objectToProtoDate,
  objectToProtoTimeStamp,
  stringToProtoDate,
} from './ConvertService';
import { auth } from '../lib/auth/Auth';

const service = new MiniManipulationServiceClient(
  window.env.GRPC_ENDPOINT,
  {},
  { ...auth }
);

export async function listMiniManipulation(param) {
  return new Promise((resolve, reject) => {
    const req = new ListMiniManipulationRequest();
    req.setFromDate(stringToProtoDate(param.fromDate));
    req.setToDate(stringToProtoDate(param.toDate));
    req.setCorrespondent(param.correspondent);
    req.setAccountNo(param.accountNo);
    req.setTraderId(param.traderId);
    req.setSymbol(param.symbol);

    service.listMiniManipulation(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function listMiniManipulationDetails(param) {
  return new Promise((resolve, reject) => {
    const req = new ReadMiniManipulationRequest();
    req.setTradeDate(objectToProtoDate(param.tradeDate));
    req.setTradeAt(objectToProtoTimeStamp(param.tradeAt));
    req.setCorrespondent(param.correspondent);
    req.setAccountNo(param.accountNo);
    req.setTraderId(param.traderId);
    req.setSymbol(param.symbol);

    service.readMiniManipulation(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}
