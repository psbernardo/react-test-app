import {
  DayTradeBuyingPowerServiceClient,
  ListDayTradeBuyingPowerRequest,
  ListDayTradeBuyingPowerDetailRequest,
} from '../proto/riskmanagerpb/daytradebuyingpower_grpc_web_pb';

import { notifyError } from 'components/Notification/Notification';
import { auth } from '../lib/auth/Auth';
import { stringToProtoDate, objectToProtoDate } from './ConvertService';

const service = new DayTradeBuyingPowerServiceClient(
  window.env.GRPC_ENDPOINT,
  {},
  { ...auth }
);

export async function listDayTradeBuyingPower(param) {
  return new Promise((resolve, reject) => {
    const req = new ListDayTradeBuyingPowerRequest();
    req.setFromDate(stringToProtoDate(param.fromDate));
    req.setToDate(stringToProtoDate(param.toDate));
    req.setCorrespondent(param.correspondent);
    req.setMasterAccountNo(param.masterAccountNo);

    service.listDayTradeBuyingPower(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function listDayTradeBuyingPowerDetail(param) {
  return new Promise((resolve, reject) => {
    const req = new ListDayTradeBuyingPowerDetailRequest();
    req.setTradeDate(objectToProtoDate(param.tradeDate));
    req.setMasterAccountNo(param.masterAccountNo);

    service.listDayTradeBuyingPowerDetail(req, {}, (error, response) => {
      if (error) {
        notifyError(error.message);
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}
