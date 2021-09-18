import {
  GLBalanceServiceClient,
  ListGLBalanceRequest,
} from '../proto/reportpb/glbalance_grpc_web_pb';
import { stringToProtoDate } from './ConvertService';
import { auth } from '../lib/auth/Auth';

const service = new GLBalanceServiceClient(
  window.env.GRPC_ENDPOINT,
  {},
  { ...auth }
);

export async function listGLBalance(param) {
  return new Promise((resolve, reject) => {
    let req = new ListGLBalanceRequest();
    req.setFromDate(stringToProtoDate(param.fromDate));
    req.setToDate(stringToProtoDate(param.toDate));
    req.setCorrespondent(param.correspondent);
    req.setAccountNo(param.accountNo);
    req.setAccountName(param.accountName);
    req.setMasterAccountNo(param.masterAccountNo);
    req.setType(param.type);
    req.setDateType(param.dateType);

    service.listGLBalance(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}
