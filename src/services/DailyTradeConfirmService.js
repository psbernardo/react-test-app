import {
  DailyTradeConfirmServiceClient,
  ListDailyTradeConfirmRequest,
  DownloadDailyTradeConfirmationRequest,
} from '../proto/reportpb/dailytradeconfirm_grpc_web_pb';
import { stringToProtoDate } from './ConvertService';
import {
  notifySuccess,
  notifyError,
} from 'components/Notification/Notification';
import download from './DownloadService';
import { auth } from '../lib/auth/Auth';

const service = new DailyTradeConfirmServiceClient(
  window.env.GRPC_ENDPOINT,
  {},
  { ...auth }
);

export async function listDailyTradeConfirm(param) {
  return new Promise((resolve, reject) => {
    let req = new ListDailyTradeConfirmRequest();
    req.setFromDate(stringToProtoDate(param.fromDate));
    req.setToDate(stringToProtoDate(param.toDate));
    req.setCorrespondent(param.correspondent);
    req.setBranch(param.branch);
    req.setAccountNo(param.accountNo);
    req.setAccountName(param.accountName);
    req.setMasterAccountNo(param.masterAccountNo);
    req.setRep(param.rep);

    service.listDailyTradeConfirm(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function downloadDailyTradeConfirmation(tradeDate, accountId) {
  return new Promise((resolve, reject) => {
    const req = new DownloadDailyTradeConfirmationRequest();

    req.setTradeDate(tradeDate);
    req.setAccountId(accountId);

    service.downloadDailyTradeConfirmation(req, {}, (error, response) => {
      if (error) {
        notifyError(error.message);
        reject(error);
      } else {
        download(response);
        notifySuccess('Download completed');
      }
    });
  });
}
