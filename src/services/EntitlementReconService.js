import {
  EntitlementReconServiceClient,
  ListEntitlementReconRequest,
  ListEntitlementReconDetailRequest,
} from '../proto/reorgpb/entitlementrecon_grpc_web_pb';
import { stringToProtoDate, objectToProtoDate } from './ConvertService';
import { auth } from '../lib/auth/Auth';

const service = new EntitlementReconServiceClient(
  window.env.GRPC_ENDPOINT,
  {},
  { ...auth }
);

export async function listEntitlementRecon(param) {
  return new Promise((resolve, reject) => {
    let req = new ListEntitlementReconRequest();
    req.setSystemDate(stringToProtoDate(param.systemDate));
    req.setSettleDate(stringToProtoDate(param.settleDate));
    req.setEntryType(param.entryType);
    req.setTextNumber(param.textNumber);
    req.setSymbol(param.symbol);
    service.listEntitlementRecon(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function listEntitlementReconDetail(param) {
  return new Promise((resolve, reject) => {
    let req = new ListEntitlementReconDetailRequest();
    req.setSystemDate(objectToProtoDate(param.systemDate));
    req.setOriginalCusip(param.originalCusip);
    console.log(param);
    service.listEntitlementReconDetail(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}
