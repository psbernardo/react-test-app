import {
  MonthlyCustomerBalanceServiceClient,
  ListMonthlyCustomerBalanceRequest,
} from '../proto/regulatorypb/monthlycustomerbalance_grpc_web_pb';
import { objectToProtoDate, stringToProtoDate } from './ConvertService';
import { auth } from '../lib/auth/Auth';

const service = new MonthlyCustomerBalanceServiceClient(
  window.env.GRPC_ENDPOINT,
  {},
  { ...auth }
);

export async function listMonthlyCustomerBalance(param) {
  return new Promise((resolve, reject) => {
    let req = new ListMonthlyCustomerBalanceRequest();
    req.setFromDate(stringToProtoDate(param.fromDate));
    req.setToDate(stringToProtoDate(param.toDate));
    service.listMonthlyCustomerBalance(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function listMonthlyCustomerBalanceDetails(param) {
  return new Promise((resolve, reject) => {
    let req = new ListMonthlyCustomerBalanceRequest();
    req.setFromDate(objectToProtoDate(param.fromDate));
    req.setToDate(objectToProtoDate(param.toDate));
    service.listMonthlyCustomerBalanceDetails(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}
