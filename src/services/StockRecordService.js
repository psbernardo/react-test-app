/*Service*/
import {
  StockRecordServiceClient,
  ListStockRecordRequest,
  ListStockRecordDetailRequest,
} from '../proto/reportpb/stockrecord_grpc_web_pb';

import { notifyError } from 'components/Notification/Notification';
import { auth } from '../lib/auth/Auth';
import { stringToProtoDate, objectToProtoDate } from './ConvertService';
import { Pagination } from '../proto/utilspb/pagination_pb';

const service = new StockRecordServiceClient(
  window.env.GRPC_ENDPOINT,
  {},
  { ...auth }
);

export async function listStockRecord(param,paging) {
  return new Promise((resolve, reject) => {
    const req = new ListStockRecordRequest();
    req.setSymbol(param.symbol);
    req.setCusip(param.cusip);
    req.setSettleDate(stringToProtoDate(param.settleDate));
    req.setAssetType(param.assetType);
    if (paging) {
     let pg = new Pagination();
     pg.setPageNo(paging.pageNo);
     pg.setPageSize(paging.rowsPerPage);
     pg.setSortName(paging.sortName);
     pg.setSortDirection(paging.sortDirection);
     req.setPagination(pg);
   }
    service.listStockRecord(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function listStockRecordDetails(param) {
  return new Promise((resolve, reject) => {
    const req = new ListStockRecordDetailRequest();
    console.log(param.settleDate);
    req.setSettleDate(objectToProtoDate(param.settleDate));
    req.setSymbol(param.symbol);

    service.listStockRecordDetail(req, {}, (error, response) => {
      if (error) {
        notifyError(error.message);
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}
