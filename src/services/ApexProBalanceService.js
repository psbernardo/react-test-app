import {
  ApexProBalanceServiceClient,
  ListBalanceRequest,
} from '../proto/apexpropb/balance_grpc_web_pb';
import { Pagination } from 'proto/utilspb/pagination_pb';
import { stringToProtoDate } from './ConvertService';
import { auth } from '../lib/auth/Auth';

const service = new ApexProBalanceServiceClient(
  window.env.GRPC_ENDPOINT,
  {},
  { ...auth }
);

export async function listBalance(param, paging) {
  return new Promise((resolve, reject) => {
    let req = new ListBalanceRequest();
    req.setSystemDate(stringToProtoDate(param.systemDate));
    req.setAccountNo(param.accountNo);

    if (paging) {
      let pg = new Pagination();
      pg.setPageNo(paging.pageNo);
      pg.setPageSize(paging.rowsPerPage);
      pg.setSortName(paging.sortName);
      pg.setSortDirection(paging.sortDirection);
      req.setPagination(pg);
    }

    service.listBalance(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}
