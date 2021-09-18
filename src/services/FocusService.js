import {
  MonthlyFocusServiceClient,
  ListMonthlyFocusRequest,
} from '../proto/regulatorypb/monthlyfocus_grpc_web_pb';
import { stringToProtoDate } from './ConvertService';
import { auth } from '../lib/auth/Auth';

const service = new MonthlyFocusServiceClient(
  window.env.GRPC_ENDPOINT,
  {},
  { ...auth }
);

export async function listMonthlyFocus(param) {
  return new Promise((resolve, reject) => {
    let req = new ListMonthlyFocusRequest();
    req.setFromDate(stringToProtoDate(param.fromDate));
    req.setToDate(stringToProtoDate(param.toDate));

    service.listMonthlyFocus(req, {}, (error, response) => {
      console.log(error, response);
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}
