import {
  EntitlementServiceClient,
  ListEntitlementRequest,
} from '../proto/reorgpb/entitlement_grpc_web_pb';
import { stringToProtoDate } from './ConvertService';
import { auth } from '../lib/auth/Auth';

const service = new EntitlementServiceClient(
  window.env.GRPC_ENDPOINT,
  {},
  { ...auth }
);

export async function listEntitlement(param) {
  return new Promise((resolve, reject) => {
    let req = new ListEntitlementRequest();
    req.setSystemDate(stringToProtoDate(param.systemDate));
    req.setProcessDate(stringToProtoDate(param.processDate));
    req.setPositionDate(stringToProtoDate(param.positionDate));
    req.setEntryType(param.entryType);
    req.setAccountNo(param.accountNo);
    req.setAccountName(param.accountName);
    req.setSymbol(param.symbol);
    req.setTextNumber(param.textNumber);
    req.setPendingTrnsOnly(param.pendingTrnsOnly);
    service.listEntitlement(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}
