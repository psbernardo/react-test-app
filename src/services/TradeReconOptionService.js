import {
  ListTradeReconRequest,
  TradeReconServiceClient,
} from '../proto/occpb/traderecon_grpc_web_pb';
import { notifyError } from '../components/Notification/Notification';
import { auth } from '../lib/auth/Auth';
import { stringToProtoDate } from './ConvertService';

const service = new TradeReconServiceClient(
  window.env.GRPC_ENDPOINT,
  {},
  { ...auth }
);

export async function listTradeRecon(param) {
  return new Promise((resolve, reject) => {
    const req = new ListTradeReconRequest();
    req.setTradeDate(stringToProtoDate(param.tradeDate));
    req.setMpid(param.mpid);
    req.setSymbol(param.symbol);

    service.listTradeRecon(req, {}, (error, response) => {
      if (error) {
        notifyError(error.message);
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function createOptionProfile(param) {
  return new Promise((resolve, reject) => {
    const req = new Option();
    req.setSymbol(param.symbol);
    req.setSymbolDescription(param.symbolDescription);
    req.setMultiplier(param.multiplier);
    req.setStatus(param.status);
    req.setSecType(param.secType);

    service.createOptionProfile(req, {}, (error, response) => {
      if (error) {
        notifyError(error.message);
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}
