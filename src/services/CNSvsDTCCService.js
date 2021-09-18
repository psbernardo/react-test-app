import {
  CNSvsDTCC,
  CNSvsDTCCServiceClient,
  ListCNSvsDTCCRequest,
  ListCNSvsDTCCDetailsRequest,
} from '../proto/cnspb/cnsvsdtcc_grpc_web_pb';
import { objectToProtoDate, stringToProtoDate } from './ConvertService';
import { auth } from '../lib/auth/Auth';

const service = new CNSvsDTCCServiceClient(
  window.env.GRPC_ENDPOINT,
  {},
  { ...auth }
);

export async function listCNSvsDTCC(param) {
  return new Promise((resolve, reject) => {
    let req = new ListCNSvsDTCCRequest();
    req.setSettleDate(stringToProtoDate(param.settleDate));
    req.setSymbol(param.symbol);
    req.setCusip(param.cusip);
    req.setSymbolDescription(param.symbolDescription);
    req.setShowBreaksOnly(param.showBreaksOnly);
    service.listCNSvsDTCC(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function listCNSvsDTCCDetails(param) {
  return new Promise((resolve, reject) => {
    let req = new ListCNSvsDTCCDetailsRequest();
    req.setSettleDate(objectToProtoDate(param.settleDate));
    req.setSymbol(param.symbol);
    service.listCNSvsDTCCDetails(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function updateNote(param) {
  return new Promise((resolve, reject) => {
    let req = new CNSvsDTCC();
    req.setCnsVsDtccId(param.cnsVsDtccId);
    req.setNote(param.note);
    service.updateNote(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}
