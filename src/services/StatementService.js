import {
  StatementServiceClient,
  ListStatementRequest,
  DownloadStatementRequest,
} from '../proto/reportpb/statement_grpc_web_pb';
import download from './DownloadService';
import { notifyError } from 'components/Notification/Notification';
import { auth } from '../lib/auth/Auth';

const service = new StatementServiceClient(
  window.env.GRPC_ENDPOINT,
  {},
  { ...auth }
);

export async function listStatement(param) {
  return new Promise((resolve, reject) => {
    let req = new ListStatementRequest();
    req.setMonth(param.month.toUpperCase());
    req.setYear(param.year);
    req.setCorrespondent(param.correspondent);
    req.setBranch(param.branch);
    req.setAccountNo(param.accountNo);
    req.setAccountName(param.accountName);
    req.setMasterAccountNo(param.masterAccountNo);
    req.setRep(param.rep);

    service.listStatement(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function downloadMonthlyStatement(month, year, accountId) {
  return new Promise((resolve, reject) => {
    const req = new DownloadStatementRequest();
    req.setMonth(month.toUpperCase());
    req.setYear(year);
    req.setAccountId(accountId);

    service.downloadStatement(req, {}, (error, response) => {
      if (error) {
        notifyError(error.message);
        reject(error);
      } else {
        download(response);
      }
    });
  });
}
