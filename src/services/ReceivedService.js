import {
  UnmatchedReceivedServiceClient,
  ListUnmatchedReceivedRequest,
  UpdateUnmatchedReceivedRequest,
} from '../proto/dtccpb/unmatchedreceived_grpc_web_pb';
import { stringToProtoDate } from './ConvertService';
import { auth } from '../lib/auth/Auth';

const service = new UnmatchedReceivedServiceClient(
  window.env.GRPC_ENDPOINT,
  {},
  { ...auth }
);

export async function listUnmatchedReceived(param) {
  return new Promise((resolve, reject) => {
    let req = new ListUnmatchedReceivedRequest();
    req.setSystemDate(stringToProtoDate(param.systemDate));
    req.setSettleDate(stringToProtoDate(param.settleDate));
    req.setSymbol(param.symbol);
    req.setCusip(param.cusip);
    req.setDelivererId(param.delivererId);
    req.setDelivererName(param.delivererName);
    service.listUnmatchedReceived(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function updateUnmatchedReceived(param) {
  return new Promise((resolve, reject) => {
    let req = new UpdateUnmatchedReceivedRequest();
    console.log(param);
    req.setReceivedId(param.receivedId);
    req.setNote(param.note);
    req.setStatus(param.status);
    console.log(req);
    service.updateUnmatchedReceived(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}
