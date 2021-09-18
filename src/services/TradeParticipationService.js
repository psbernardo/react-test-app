/*Service*/
import {
  TradeParticipationServiceClient,
  ListTradeParticipationRequest,
  ReadTradeParticipationRequest,
} from '../proto/trademonitoringpb/tradeparticipation_grpc_web_pb';
import {
  objectToProtoDate,
  objectToProtoTimeStamp,
  stringToProtoDate,
} from './ConvertService';
import { auth } from '../lib/auth/Auth';

const service = new TradeParticipationServiceClient(
  window.env.GRPC_ENDPOINT,
  {},
  { ...auth }
);

export async function listTradeParticipation(param) {
  return new Promise((resolve, reject) => {
    const req = new ListTradeParticipationRequest();
    req.setFromDate(stringToProtoDate(param.fromDate));
    req.setToDate(stringToProtoDate(param.toDate));
    req.setCorrespondent(param.correspondent);
    req.setTraderId(param.traderId);
    req.setSymbol(param.symbol);

    service.listTradeParticipation(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function listTradeParticipationDetails(param) {
  return new Promise((resolve, reject) => {
    const req = new ReadTradeParticipationRequest();

    req.setTradeDate(objectToProtoDate(param.tradeDate));
    req.setTradeAt(objectToProtoTimeStamp(param.tradeAt));
    req.setCorrespondent(param.correspondent);
    req.setAccountNo(param.accountNo);
    req.setTraderId(param.traderId);
    req.setSymbol(param.symbol);

    service.readTradeParticipation(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}
