import {
  MarginIntServiceClient,
  ListMarginIntRequest,
} from '../proto/reportpb/marginint_grpc_web_pb';
import { notifyError } from 'components/Notification/Notification';
import { auth } from '../lib/auth/Auth';

const google_date = require('../google/type/date_pb.js');
const service = new MarginIntServiceClient(
  window.env.GRPC_ENDPOINT,
  {},
  { ...auth }
);

export async function listMarginInterestCalc(param) {
  return new Promise((resolve, reject) => {
    const req = new ListMarginIntRequest();
    req.setCorrespondent(param.correspondent);
    req.setAccountNo(param.accountNo);
    req.setAccountName(param.accountName);

    if (param.settleDate) {
      let gglSettleDate = new google_date.Date();
      let [y, m, d] = param.settleDate.split('-');
      gglSettleDate.setYear(y);
      gglSettleDate.setMonth(m);
      gglSettleDate.setDay(d);
      req.setSettleDate(gglSettleDate);
    }

    service.listMarginInt(req, {}, (error, response) => {
      if (error) {
        notifyError(error.message);
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}
