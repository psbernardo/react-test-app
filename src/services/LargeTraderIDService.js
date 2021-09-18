import {
  LargeTraderIDServiceClient,
  ListLargeTraderIDRequest,
  UpdateLargeTraderIDRequest,
} from '../proto/blusheetpb/largetraderid_grpc_web_pb';
import { stringToProtoDate } from './ConvertService';
import { auth } from '../lib/auth/Auth';

const service = new LargeTraderIDServiceClient(
  window.env.GRPC_ENDPOINT,
  {},
  { ...auth }
);

export async function listLargeTraderID(param) {
  return new Promise((resolve, reject) => {
    let req = new ListLargeTraderIDRequest();
    req.setCorrespondent(param.correspondent);
    req.setBranch(param.branch);
    req.setAccountNo(param.accountNo);
    req.setMasterAccountNo(param.masterAccountNo);
    req.setRep(param.rep);
    req.setBroker(param.broker);
    req.setStatus(param.status);

    service.listLargeTraderID(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function updateLargeTraderID(param) {
  return new Promise((resolve, reject) => {
    let req = new UpdateLargeTraderIDRequest();
    req.setAccountId(param.accountId);
    req.setFromDate(stringToProtoDate(param.fromDate));
    req.setToDate(stringToProtoDate(param.toDate));
    req.setLargeTraderId(param.largeTraderId);
    req.setOptionalSuffix(param.optionalSuffix);
    req.setQualifier(param.qualifier);

    service.updateLargeTraderID(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}
