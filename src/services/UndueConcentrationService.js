import { notifyError } from 'components/Notification/Notification';
import {
  UndueConcentrationServiceClient,
  ListUndueConcentrationRequest,
  ListUndueConcentrationDetailRequest,
} from '../proto/trademonitoringpb/undueconcentration_grpc_web_pb';
import { Pagination } from '../proto/utilspb/pagination_pb';
import { stringToProtoDate, objectToProtoDate } from './ConvertService';
import { auth } from '../lib/auth/Auth';

const service = new UndueConcentrationServiceClient(
  window.env.GRPC_ENDPOINT,
  {},
  { ...auth }
);

export async function listUndueConcentration(param, paging) {
  return new Promise((resolve, reject) => {
    const req = new ListUndueConcentrationRequest();
    req.setTradeDate(stringToProtoDate(param.tradeDate));
    req.setSymbol(param.symbol);
    req.setCusip(param.cusip);
    req.setGroupby(param.groupby);

    if (paging) {
      let pg = new Pagination();
      pg.setPageNo(paging.pageNo);
      pg.setPageSize(paging.rowsPerPage);
      pg.setSortName(paging.sortName);
      pg.setSortDirection(paging.sortDirection);
      req.setPagination(pg);
    }

    service.listUndueConcentration(req, {}, (error, response) => {
      if (error) {
        notifyError(error.message);
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function listUndueConcentrationDetail(param) {
  return new Promise((resolve, reject) => {
    const req = new ListUndueConcentrationDetailRequest();
    req.setTradeDate(objectToProtoDate(param.tradeDate));
    req.setMasterAccountNo(param.masterAccountNo);

    service.listUndueConcentrationDetail(req, {}, (error, response) => {
      if (error) {
        notifyError(error.message);
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}
