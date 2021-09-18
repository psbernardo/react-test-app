import {
  TRNSServiceClient,
  ListTRNSRequest,
} from '../proto/apexpropb/trns_grpc_web_pb';
import { stringToProtoDate } from './ConvertService';
import { auth } from '../lib/auth/Auth';

const service = new TRNSServiceClient(
  window.env.GRPC_ENDPOINT,
  {},
  { ...auth }
);

export async function listApexProTRNS(param) {
  return new Promise((resolve, reject) => {
    let req = new ListTRNSRequest();
    req.setDateType(param.dateType);
    req.setFromDate(stringToProtoDate(param.fromDate));
    req.setToDate(stringToProtoDate(param.toDate));
    req.setAccountNo(param.accountNo);
    req.setEntryType(param.entryType);
    req.setSymbol(param.symbol);

    service.listTRNS(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}
