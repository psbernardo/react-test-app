import { notifyError } from 'components/Notification/Notification';
import {
  ConcentrationServiceClient,
  ListConcentrationRequest,
  ListConcentrationDetailRequest,
} from '../proto/trademonitoringpb/concentration_grpc_web_pb';
import { Pagination } from '../proto/utilspb/pagination_pb';
import { stringToProtoDate, objectToProtoDate } from './ConvertService';
import { auth } from '../lib/auth/Auth';

const service = new ConcentrationServiceClient(
  window.env.GRPC_ENDPOINT,
  {},
  { ...auth }
);

export async function listConcentration(param, paging) {
  return new Promise((resolve, reject) => {
    const req = new ListConcentrationRequest();
    req.setSettleDate(stringToProtoDate(param.settleDate));
    req.setSymbol(param.symbol);
    req.setCusip(param.cusip);

    if (paging) {
      let pg = new Pagination();
      pg.setPageNo(paging.pageNo);
      pg.setPageSize(paging.rowsPerPage);
      pg.setSortName(paging.sortName);
      pg.setSortDirection(paging.sortDirection);
      req.setPagination(pg);
    }

    service.listConcentration(req, {}, (error, response) => {
      if (error) {
        notifyError(error.message);
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function listConcentrationDetail(param) {
  return new Promise((resolve, reject) => {
    const req = new ListConcentrationDetailRequest();
    req.setSettleDate(objectToProtoDate(param.settleDate));
    req.setSymbol(param.symbol);
    req.setCusip(param.cusip);

    service.listConcentrationDetail(req, {}, (error, response) => {
      if (error) {
        notifyError(error.message);
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}
