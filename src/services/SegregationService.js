import {
  Seg,
  ListSegDetailRequest,
  SegServiceClient,
} from '../proto/segpb/seg_grpc_web_pb';
import { notifyError } from 'components/Notification/Notification';
import { auth } from '../lib/auth/Auth';
import { objectToProtoDate, stringToProtoDate } from './ConvertService';

const service = new SegServiceClient(window.env.GRPC_ENDPOINT, {}, { ...auth });

export async function listSegAccount(param) {
  return new Promise((resolve, reject) => {
    const req = new Seg();
    req.setSettleDate(stringToProtoDate(param.settleDate));
    req.setMasterAccountNo(param.masterAccountNo);
    req.setAccountName(param.accountName);
    req.setBroker(param.broker);

    service.listSegAccount(req, {}, (error, response) => {
      if (error) {
        notifyError(error.message);
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function listSegSymbol(param) {
  return new Promise((resolve, reject) => {
    const req = new Seg();
    req.setSettleDate(stringToProtoDate(param.settleDate));
    req.setSymbol(param.symbol);

    service.listSegSymbol(req, {}, (error, response) => {
      if (error) {
        notifyError(error.message);
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function listSegDetail(param) {
  return new Promise((resolve, reject) => {
    const req = new ListSegDetailRequest();
    req.setSettleDate(objectToProtoDate(param.settleDate));
    req.setMasterAccountNo(param.masterAccountNo);
    req.setSymbol(param.symbol);

    service.listSegDetail(req, {}, (error, response) => {
      if (error) {
        notifyError(error.message);
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}