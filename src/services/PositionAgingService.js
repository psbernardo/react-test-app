import {
  PositionAgingServiceClient,
  ListPositionAgingRequest,
  ListPositionAgingDetailRequest,
  UpdatePositionAgingRequest,
} from '../proto/cnspb/positionaging_grpc_web_pb';
import { objectToProtoDate, stringToProtoDate } from './ConvertService';
import { auth } from '../lib/auth/Auth';

const service = new PositionAgingServiceClient(
  window.env.GRPC_ENDPOINT,
  {},
  { ...auth }
);

export async function listPositionAging(param) {
  return new Promise((resolve, reject) => {
    let req = new ListPositionAgingRequest();
    req.setSettleDate(stringToProtoDate(param.settleDate));
    req.setSymbol(param.symbol);
    req.setCusip(param.cusip);
    req.setSymbolDescription(param.symbolDescription);
    service.listPositionAging(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function listPositionAgingDetail(param) {
  return new Promise((resolve, reject) => {
    let req = new ListPositionAgingDetailRequest();
    req.setSettleDate(objectToProtoDate(param.settleDate));
    req.setSymbol(param.symbol);
    service.listPositionAgingDetail(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function updatePositionAging(param) {
  return new Promise((resolve, reject) => {
    const req = new UpdatePositionAgingRequest();
    req.setPositionAgingId(param.positionAgingId);
    req.setNote(param.note);

    service.updatePositionAging(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}
