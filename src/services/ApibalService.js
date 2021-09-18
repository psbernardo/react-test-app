import {
  ApibalServiceClient,
  ListApibalRequest,
  ListApibalDetailsRequest,
  EditApibalRequest,
} from '../proto/dtccpb/apibal_grpc_web_pb';
import { objectToProtoDate, stringToProtoDate } from './ConvertService';
import { auth } from '../lib/auth/Auth';

const service = new ApibalServiceClient(
  window.env.GRPC_ENDPOINT,
  {},
  { ...auth }
);

export async function listApibal(param) {
  return new Promise((resolve, reject) => {
    let req = new ListApibalRequest();
    req.setSettleDate(stringToProtoDate(param.settleDate));
    req.setSymbol(param.symbol);
    req.setCusip(param.cusip);
    req.setSymbolDescription(param.symbolDescription);
    service.listApibal(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function listApibalDetails(param) {
  return new Promise((resolve, reject) => {
    let req = new ListApibalDetailsRequest();
    req.setSettleDate(objectToProtoDate(param.settleDate));
    req.setOriginalCusip(param.originalCusip);
    service.listApibalDetails(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function editApibal(param) {
  return new Promise((resolve, reject) => {
    let req = new EditApibalRequest();
    req.setApibalId(param.apibalId);
    req.setNote(param.note);
    service.editApibal(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}