import {
  ActivityServiceClient,
  DownloadTradeConfirmationRequest,
  ListActivityRequest,
} from '../proto/reportpb/activity_grpc_web_pb';
import { Pagination } from 'proto/utilspb/pagination_pb';
import { stringToProtoDate } from './ConvertService';
import {
  notifySuccess,
  notifyError,
} from 'components/Notification/Notification';
import download from './DownloadService';
import { auth } from '../lib/auth/Auth';

const service = new ActivityServiceClient(
  window.env.GRPC_ENDPOINT,
  {},
  { ...auth }
);

export async function downloadTradeConfirmation(trnsId, correspondent) {
  return new Promise((resolve, reject) => {
    const req = new DownloadTradeConfirmationRequest();
    req.setTrnsId(trnsId);
    req.setCorrespondent(correspondent);

    service.downloadTradeConfirmation(req, {}, (error, response) => {
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

export async function downloadDailyTradeConfirmation(trnsId) {
  return new Promise((resolve, reject) => {
    const req = new DownloadTradeConfirmationRequest();
    req.setTrnsId(trnsId);

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

export async function listActivity(param, paging) {
  return new Promise((resolve, reject) => {
    let req = new ListActivityRequest();
    req.setFromDate(stringToProtoDate(param.fromDate));
    req.setToDate(stringToProtoDate(param.toDate));
    req.setCorrespondent(param.correspondent);
    req.setAccountNo(param.accountNo);
    req.setContraAccountNo(param.contraAccountNo);
    req.setMasterAccountNo(param.masterAccountNo);
    req.setBroker(param.broker);
    req.setType(param.type);
    req.setSymbol(param.symbol);
    req.setCusip(param.cusip);
    req.setStatus(param.status);
    req.setDateType(param.dateType);
    req.setEntryType(param.entryType);
    req.setAsoftrns(param.asOfTRNS);
    req.setBranch(param.branch);
    req.setRep(param.rep);
    req.setSearchType(param.searchType);
    req.setCompressId(param.compressId);
    req.setSide(param.side);

    if (paging) {
      let pg = new Pagination();
      pg.setPageNo(paging.pageNo);
      pg.setPageSize(paging.rowsPerPage);
      pg.setSortName(paging.sortName);
      pg.setSortDirection(paging.sortDirection);
      req.setPagination(pg);
    }

    service.listActivity(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}
