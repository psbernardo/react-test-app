import {
  ProfitAndLossServiceClient,
  ListProfitAndLossRequest,
  ListDetailsProfitAndLossRequest,
} from '../proto/reportpb/profitandloss_grpc_web_pb';
import { stringToProtoDate, objectToProtoDate } from './ConvertService';
import { auth } from '../lib/auth/Auth';

const service = new ProfitAndLossServiceClient(
  window.env.GRPC_ENDPOINT,
  {},
  { ...auth }
);

export async function listProfitAndLoss(param) {
  return new Promise((resolve, reject) => {
    let req = new ListProfitAndLossRequest();
    req.setFromDate(stringToProtoDate(param.fromDate));
    req.setToDate(stringToProtoDate(param.toDate));
    req.setCorrespondent(param.correspondent);
    req.setBranch(param.branch);
    req.setAccountNo(param.accountNo);
    req.setMasterAccountNo(param.masterAccountNo);
    req.setRep(param.setRep);
    req.setAssetType(param.assetType);
    req.setSymbol(param.symbol);
    req.setPlType(param.plType);

    service.listProfitAndLoss(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function listDetailsProfitAndLoss(param) {
  return new Promise((resolve, reject) => {
    let req = new ListDetailsProfitAndLossRequest();
    req.setProcessDate(objectToProtoDate(param.processDate));
    req.setAccountId(param.accountId);
    req.setOriginalCusip(param.originalCusip);

    service.listDetailsProfitAndLoss(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}
