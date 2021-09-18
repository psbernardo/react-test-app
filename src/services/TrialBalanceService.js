import {
  TrialBalanceServiceClient,
  ListTrialBalanceRequest,
} from '../proto/reportpb/trialbalance_grpc_web_pb';
import { stringToProtoDate } from './ConvertService';
import { auth } from '../lib/auth/Auth';

const service = new TrialBalanceServiceClient(
  window.env.GRPC_ENDPOINT,
  {},
  { ...auth }
);

export async function listTrialBalance(param) {
  return new Promise((resolve, reject) => {
    let req = new ListTrialBalanceRequest();
    req.setDate(stringToProtoDate(param.date));
    req.setCorrespondent(param.correspondent);
    req.setAccountNo(param.accountNo);
    req.setAccountName(param.accountName);
    req.setMasterAccountNo(param.masterAccountNo);
    req.setBroker(param.broker);
    req.setType(param.type);
    req.setDateType(param.dateType);

    service.listTrialBalance(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}
