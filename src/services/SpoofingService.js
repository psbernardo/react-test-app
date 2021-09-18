import { notifyError } from 'components/Notification/Notification';
import {
  SpoofingServiceClient,
  ListSpoofingRequest,
  DetailsSpoofingRequest,
} from '../proto/trademonitoringpb/spoofing_grpc_web_pb';
import {
  stringToProtoDate,
  objectToProtoDate,
  objectToProtoTimeStamp,
} from './ConvertService';
import { auth } from '../lib/auth/Auth';

const service = new SpoofingServiceClient(
  window.env.GRPC_ENDPOINT,
  {},
  { ...auth }
);

export async function detailsSpoofing(param) {
  return new Promise((resolve, reject) => {
    const req = new DetailsSpoofingRequest();
    req.setTradeDate(objectToProtoDate(param.tradeDate));
    req.setTradeAt(objectToProtoTimeStamp(param.tradeAt));
    req.setCorrespondent(param.correspondent);
    req.setAccountNo(param.accountNo);
    req.setSymbol(param.symbol);

    service.detailsSpoofing(req, {}, (error, response) => {
      if (error) {
        notifyError(error.message);
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function listSpoofing(param) {
  return new Promise((resolve, reject) => {
    const req = new ListSpoofingRequest();
    req.setTradeDate(stringToProtoDate(param.tradeDate));
    req.setCorrespondent(param.correspondent);
    req.setAccountNo(param.accountNo);
    req.setSymbol(param.symbol);

    service.listSpoofing(req, {}, (error, response) => {
      if (error) {
        notifyError(error.message);
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}
