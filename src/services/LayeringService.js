import { notifyError } from 'components/Notification/Notification';
import {
  LayeringServiceClient,
  ListLayeringRequest,
  DetailsLayeringRequest,
} from '../proto/trademonitoringpb/layering_grpc_web_pb';
import {
  stringToProtoDate,
  objectToProtoDate,
  objectToProtoTimeStamp,
} from './ConvertService';
import { auth } from '../lib/auth/Auth';

const service = new LayeringServiceClient(
  window.env.GRPC_ENDPOINT,
  {},
  { ...auth }
);

export async function detailsLayering(param) {
  return new Promise((resolve, reject) => {
    const req = new DetailsLayeringRequest();
    req.setTradeDate(objectToProtoDate(param.tradeDate));
    req.setTradeAt(objectToProtoTimeStamp(param.tradeAt));
    req.setCorrespondent(param.correspondent);
    req.setAccountNo(param.accountNo);
    req.setSymbol(param.symbol);

    service.detailsLayering(req, {}, (error, response) => {
      if (error) {
        notifyError(error.message);
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function listLayering(param) {
  return new Promise((resolve, reject) => {
    const req = new ListLayeringRequest();
    req.setTradeDate(stringToProtoDate(param.tradeDate));
    req.setCorrespondent(param.correspondent);
    req.setAccountNo(param.accountNo);
    req.setSymbol(param.symbol);

    service.listLayering(req, {}, (error, response) => {
      if (error) {
        notifyError(error.message);
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}
