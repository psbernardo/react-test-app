import {
  ReserveServiceClient,
  ListReserveRequest,
  ListReserveDetailRequest,
} from '../proto/compliancepb/reserve_grpc_web_pb';
import { objectToProtoDate, stringToProtoDate } from './ConvertService';
import { auth } from '../lib/auth/Auth';

const service = new ReserveServiceClient(
  window.env.GRPC_ENDPOINT,
  {},
  { ...auth }
);

export async function listReserve(param) {
  return new Promise((resolve, reject) => {
    let req = new ListReserveRequest();
    req.setSettleDate(stringToProtoDate(param.settleDate));
    req.setType(param.type);
    req.setCode(param.code);
    service.listReserve(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function listReserveDetail(param) {
  return new Promise((resolve, reject) => {
    let req = new ListReserveDetailRequest();
    req.setSettleDate(objectToProtoDate(param.settleDate));
    req.setType(param.type);
    req.setCode(param.code);
    service.listReserveDetail(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}
