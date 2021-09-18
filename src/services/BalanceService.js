import {
  BalanceServiceClient,
  ListBalanceRequest,
  MoveBalanceRequest,
  Balance,
} from '../proto/reportpb/balance_grpc_web_pb';
import { Pagination } from 'proto/utilspb/pagination_pb';
import { stringToProtoDate } from './ConvertService';
import { auth } from '../lib/auth/Auth';

const service = new BalanceServiceClient(
  window.env.GRPC_ENDPOINT,
  {},
  { ...auth }
);

export async function listBalance(param, paging) {
  return new Promise((resolve, reject) => {
    let req = new ListBalanceRequest();
    req.setDate(stringToProtoDate(param.date));
    req.setCorrespondent(param.correspondent);
    req.setAccountNo(param.accountNo);
    req.setAccountName(param.accountName);
    req.setMasterAccountNo(param.masterAccountNo);
    req.setBroker(param.broker);
    req.setType(param.type);
    req.setDateType(param.dateType);

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

export async function listBalanceSummaryReport(param) {
  return new Promise((resolve, reject) => {
    let req = new ListBalanceRequest();
    req.setDate(stringToProtoDate(param.date));
    req.setCorrespondent(param.correspondent);
    req.setAccountNo(param.accountNo);
    req.setAccountName(param.accountName);
    req.setMasterAccountNo(param.masterAccountNo);
    req.setBroker(param.broker);
    req.setType(param.type);
    req.setDateType(param.dateType);
    req.setSubAccountNo(param.subAccountNo);

    service.listBalanceSummaryReport(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function moveBalance(param) {
  return new Promise((resolve, reject) => {
    let balancesList = requestBalanceParameter(param.balances);
    let req = new MoveBalanceRequest();
    req.setDateType(param.dateType);
    req.setDate(stringToProtoDate(param.date));
    req.setEntryType(param.entryType);
    req.setContraCorrespondent(param.contraCorrespondent);
    req.setContraAccountNo(param.contraAccountNo);
    req.setContraSubAccountNo(param.contraSubAccountNo);
    req.setDescription(param.description);
    req.setBalancesList(balancesList);

    service.moveBalance(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

const requestBalanceParameter = (list) => {
  let listReq = [];

  list.forEach(async (row) => {
    let req = new Balance();
    req.setAccountId(row.accountId);
    listReq.push(req);
  });

  return listReq;
};
