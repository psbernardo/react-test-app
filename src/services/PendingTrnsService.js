import {
  PendingTrnsServiceClient,
  ListPendingTrnsRequest,
  DeletePendingTrnsRequest,
} from '../proto/trnspb/pendingtrns_grpc_web_pb';
import { stringToProtoDate } from './ConvertService';
import { notifyError } from 'components/Notification/Notification';
import { auth } from '../lib/auth/Auth';
import { Pagination } from 'proto/utilspb/pagination_pb';

const service = new PendingTrnsServiceClient(
  window.env.GRPC_ENDPOINT,
  {},
  { ...auth }
);

export async function listPendingTrns(param, paging) {
  return new Promise((resolve, reject) => {
    let req = new ListPendingTrnsRequest();

    req.setCorrespondent(param.correspondent);
    req.setAccountNo(param.accountNo);
    req.setSymbol(param.symbol);
    req.setStatus(param.status);
    req.setDateType(param.dateType);
    req.setFromDate(stringToProtoDate(param.fromDate));
    req.setToDate(stringToProtoDate(param.toDate));
    req.setEntryType(param.entryType);

    if (paging) {
      let pg = new Pagination();
      pg.setPageNo(paging.pageNo);
      pg.setPageSize(paging.rowsPerPage);
      pg.setSortName(paging.sortName);
      pg.setSortDirection(paging.sortDirection);
      req.setPagination(pg);
    }
    service.listPendingTrns(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function deletePendingTrns(stageIds) {
  return new Promise((resolve, reject) => {
    let req = new DeletePendingTrnsRequest();
    req.setStageIdList(stageIds);
    service.deletePendingTrns(req, {}, (error, response) => {
      if (error) {
        notifyError(error.message);
        reject(error);
      } else {
        resolve(response);
      }
    });
  });
}
