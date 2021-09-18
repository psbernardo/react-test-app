import {
  FinraShortPositionServiceClient,
  ListFinraShortPositionRequest,
  ListPositionDetailsRequest,
  DownloadFinraShortPositionRequest,
} from '../proto/regulatorypb/finrashortposition_grpc_web_pb';
import { objectToProtoDate, stringToProtoDate } from './ConvertService';
import { auth } from '../lib/auth/Auth';
import download from './DownloadService';

const service = new FinraShortPositionServiceClient(
  window.env.GRPC_ENDPOINT,
  {},
  { ...auth }
);

export async function listFinraShortPosition(param) {
  return new Promise((resolve, reject) => {
    let req = new ListFinraShortPositionRequest();
    req.setSettleDate(stringToProtoDate(param.settleDate));
    req.setPreviousSettleDate(stringToProtoDate(param.prevSettleDate));
    req.setExchangeCode(param.exchangeCode);
    req.setSymbol(param.symbol);
    service.listFinraShortPosition(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function listPositionDetails(param) {
  return new Promise((resolve, reject) => {
    let req = new ListPositionDetailsRequest();
    req.setSettleDate(objectToProtoDate(param.settleDate));
    req.setSymbol(param.symbol);
    service.listPositionDetails(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function downloadFinra(param) {
  return new Promise((resolve, reject) => {
    const req = new DownloadFinraShortPositionRequest();
    req.setSettleDate(stringToProtoDate(param.settleDate));
    req.setPreviousSettleDate(stringToProtoDate(param.prevSettleDate));
    req.setExchangeCode(param.exchangeCode);
    req.setSymbol(param.symbol);

    service.downloadFinra(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        const fileName = download(response);
        resolve(fileName);
      }
    });
  });
}
