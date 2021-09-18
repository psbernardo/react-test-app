import {
  PositionServiceClient,
  ListPositionRequest,
  ListPositionDetailRequest,
  UpdatePositionRequest,
} from '../proto/dtccpb/position_grpc_web_pb';
import { objectToProtoDate, stringToProtoDate } from './ConvertService';
import { auth } from '../lib/auth/Auth';

const service = new PositionServiceClient(
  window.env.GRPC_ENDPOINT,
  {},
  { ...auth }
);

export async function listPosition(param) {
  return new Promise((resolve, reject) => {
    let req = new ListPositionRequest();
    req.setSettleDate(stringToProtoDate(param.settleDate));
    req.setSymbol(param.symbol);
    req.setCusip(param.cusip);
    req.setSymbolDescription(param.symbolDescription);
    req.setShowBreakOnly(param.showBreakOnly);
    service.listPosition(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function listPositionDetail(param) {
  return new Promise((resolve, reject) => {
    let req = new ListPositionDetailRequest();
    req.setSettleDate(objectToProtoDate(param.settleDate));
    req.setSymbol(param.symbol);
    service.listPositionDetail(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function updatePosition(param) {
  return new Promise((resolve, reject) => {
    const req = new UpdatePositionRequest();
    req.setPositionId(param.positionId);
    req.setNote(param.note);

    service.updatePosition(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}
