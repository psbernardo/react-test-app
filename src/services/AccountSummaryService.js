import {
  AccountSummaryServiceClient,
  ListAccountSummaryRequest,
  ListAccountSummaryDetailRequest,
  UpdateAccountSummaryRequest,
} from '../proto/cnspb/accountsummary_grpc_web_pb';
import { objectToProtoDate, stringToProtoDate } from './ConvertService';
import { auth } from '../lib/auth/Auth';

const service = new AccountSummaryServiceClient(
  window.env.GRPC_ENDPOINT,
  {},
  { ...auth }
);

export async function listAccountSummary(param) {
  return new Promise((resolve, reject) => {
    let req = new ListAccountSummaryRequest();
    req.setSettleDate(stringToProtoDate(param.settleDate));
    req.setSymbol(param.symbol);
    req.setCusip(param.cusip);
    req.setShowBreakOnly(param.showBreakOnly);
    service.listAccountSummary(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function listAccountSummaryDetail(param) {
  return new Promise((resolve, reject) => {
    let req = new ListAccountSummaryDetailRequest();
    req.setSettleDate(objectToProtoDate(param.settleDate));
    req.setOriginalCusip(param.originalCusip);
    service.listAccountSummaryDetail(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}
