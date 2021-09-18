import {
    ListReserve15c3Request,
    UpdateReserve15c3Request,
    Reserve15c3ServiceClient,
    Reserve15c3,
  } from '../proto/regulatorypb/reserve15c3_grpc_web_pb';
import { notifyError } from 'components/Notification/Notification';
import { auth } from '../lib/auth/Auth';
import { objectToProtoDate, stringToProtoDate } from './ConvertService';
  
const service = new Reserve15c3ServiceClient(
  window.env.GRPC_ENDPOINT,
  {},
  { ...auth }
);
  
export async function updateReserve15c3(param) {
  return new Promise((resolve, reject) => {
    const req = new UpdateReserve15c3Request();
    req.setSettleDate(stringToProtoDate(param.settleDate));
    req.setCode(param.code);
    req.setAdjCredit(param.adjCredit);
    req.setAdjDebit(param.adjDebit);
    
    service.updateReserve15c3(req, {}, (error, response) => {
      if (error) {
        notifyError(error.message);
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function listReserve15c3(param) {
  return new Promise((resolve, reject) => {
    const req = new ListReserve15c3Request();
    req.setSettleDate(stringToProtoDate(param.settleDate));
    req.setCode(param.code);
    req.setBroker(param.broker);

    service.listReserve15c3(req, {}, (error, response) => {
      if (error) {
        notifyError(error.messsage);
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function viewReserve15c3(param) {
  return new Promise((resolve, reject) => {
    const req = new Reserve15c3();
    req.setSettleDate(objectToProtoDate(param.settleDate));
    req.setCode(param.code);

    service.viewReserve15c3(req, {}, (error, response) => {
      if (error) {
        notifyError(error.messsage);
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}