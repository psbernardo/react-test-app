import {
  ListServiceClient,
  ListPositionRequest,
  MovePositionRequest,
  Position,
} from '../proto/reportpb/position_grpc_web_pb';
import { Pagination } from 'proto/utilspb/pagination_pb';
import { stringToProtoDate } from './ConvertService';
import { auth } from '../lib/auth/Auth';

const service = new ListServiceClient(
  window.env.GRPC_ENDPOINT,
  {},
  { ...auth }
);

export async function listPosition(param, paging) {
  return new Promise((resolve, reject) => {
    let req = new ListPositionRequest();
    req.setDate(stringToProtoDate(param.date));
    req.setCorrespondent(param.correspondent);
    req.setAccountNo(param.accountNo);
    req.setAccountName(param.accountName);
    req.setMasterAccountNo(param.masterAccountNo);
    req.setBroker(param.broker);
    req.setType(param.type);
    req.setSymbol(param.symbol);
    req.setCusip(param.cusip);
    req.setDateType(param.dateType);
    req.setUnpricedSecurity(param.unpricedSecurity);
    req.setBranch(param.branch);
    req.setRep(param.rep);

    if (paging) {
      let pg = new Pagination();
      pg.setPageNo(paging.pageNo);
      pg.setPageSize(paging.rowsPerPage);
      pg.setSortName(paging.sortName);
      pg.setSortDirection(paging.sortDirection);
      req.setPagination(pg);
    }

    service.listPosition(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function movePosition(param) {
  return new Promise((resolve, reject) => {
    let positionsList = requestPositionParameter(param.positions);
    let req = new MovePositionRequest();
    req.setDateType(param.dateType);
    req.setDate(stringToProtoDate(param.date));
    req.setEntryType(param.entryType);
    req.setContraCorrespondent(param.contraCorrespondent);
    req.setContraAccountNo(param.contraAccountNo);
    req.setContraSubAccountNo(param.contraSubAccountNo);
    req.setDescription(param.description);
    req.setPositionsList(positionsList);

    service.movePosition(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

const requestPositionParameter = (list) => {
  let listReq = [];

  list.forEach(async (row) => {
    let req = new Position();

    req.setAccountId(row.accountId);
    req.setOriginalCusip(row.originalCusip);

    listReq.push(req);
  });

  return listReq;
};
