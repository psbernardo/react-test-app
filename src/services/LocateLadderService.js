import {
  LocateLadderServiceClient,
  ListLocateLadderReportRequest,
} from '../proto/reportpb/locateladder_grpc_web_pb';
import { stringToProtoDate } from './ConvertService';
import { auth } from '../lib/auth/Auth';

const service = new LocateLadderServiceClient(
  window.env.GRPC_ENDPOINT,
  {},
  { ...auth }
);

export async function ListLocateLadderReport(param) {
  return new Promise((resolve, reject) => {
    let req = new ListLocateLadderReportRequest();
    req.setSettleDate(stringToProtoDate(param.settleDate));
    req.setCorrespondent(param.correspondent);
    req.setAccountNo(param.accountNo);
    req.setAccountName(param.accountName);
    req.setMasterAccountNo(param.masterAccountNo);
    req.setBroker(param.broker);
    req.setType(param.type);
    req.setSymbol(param.symbol);
    req.setCusip(param.cusip);

    service.listLocateLadder(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        console.log(response.toObject());
        resolve(response.toObject());
      }
    });
  });
}
