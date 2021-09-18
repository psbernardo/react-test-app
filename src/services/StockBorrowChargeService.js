/*Service*/
import {
  ChargeServiceClient,
  ListChargeRequest,
} from '../proto/stockborrowpb/charge_grpc_web_pb';

import { auth } from '../lib/auth/Auth';
import { stringToProtoDate } from './ConvertService';

const service = new ChargeServiceClient(
  window.env.GRPC_ENDPOINT,
  {},
  { ...auth }
);

export async function listCharge(param) {
  return new Promise((resolve, reject) => {
    const req = new ListChargeRequest();
    req.setSettleDate(stringToProtoDate(param.settleDate));
    req.setBorrowDate(stringToProtoDate(param.borrowDate));
    req.setCorrespondent(param.correspondent);
    req.setAccountNo(param.accountNo);
    req.setSymbol(param.symbol);
    req.setCusip(param.cusip);

    service.listCharge(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}
