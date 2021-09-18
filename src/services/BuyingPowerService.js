import {
  BuyingPowerServiceClient,
  ListBuyingPowerRequest,
} from '../proto/marginpb/buyingpower_grpc_web_pb';
import { auth } from '../lib/auth/Auth';
import { stringToProtoDate } from './ConvertService';

const service = new BuyingPowerServiceClient(
  window.env.GRPC_ENDPOINT,
  {},
  { ...auth }
);

export async function listBuyingPower(param) {
  return new Promise((resolve, reject) => {
    const req = new ListBuyingPowerRequest();
    req.setFromDate(stringToProtoDate(param.fromDate));
    req.setToDate(stringToProtoDate(param.toDate));
    req.setCorrespondent(param.correspondent);
    req.setMasterAccountNo(param.masterAccountNo);
    req.setAccountName(param.accountName);

    service.listBuyingPower(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}
