import {
  SecurityMasterServiceClient,
  ListSecurityMasterRequest,
  SecurityMaster,
} from '../proto/assetpb/securitymaster_grpc_web_pb';
import { Pagination } from 'proto/utilspb/pagination_pb';
import { notifyError } from 'components/Notification/Notification';
import { auth } from '../lib/auth/Auth';

const service = new SecurityMasterServiceClient(
  window.env.GRPC_ENDPOINT,
  {},
  { ...auth }
);

const requestParameter = (param) => {
  let req = new SecurityMaster();
  req.setId(param.id);
  req.setOriginalCusip(param.originalCusip);
  req.setSymbol(param.symbol);
  req.setCusip(param.cusip);
  req.setSymbolDescription(param.symbolDescription);
  req.setAssetType(param.assetType);
  req.setStatus(param.status);
  req.setIsMarginable(param.isMarginable);

  return req;
};

export async function listSecurityMaster(param, paging) {
  return new Promise((resolve, reject) => {
    const req = new ListSecurityMasterRequest();
    req.setSymbol(param.symbol);
    req.setCusip(param.cusip);
    req.setAssetType(param.assetType);
    req.setStatus(param.status);
    req.setIsMarginable(param.isMarginable);

    if (paging) {
      let pg = new Pagination();
      pg.setPageNo(paging.pageNo);
      pg.setPageSize(paging.rowsPerPage);
      pg.setSortName(paging.sortName);
      pg.setSortDirection(paging.sortDirection);
      req.setPagination(pg);
    }

    service.listSecurityMaster(req, {}, (error, response) => {
      if (error) {
        notifyError(error.message);
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function createSecurityMaster(param) {
  return new Promise((resolve, reject) => {
    const req = requestParameter(param);

    service.createSecurityMaster(req, {}, (error, response) => {
      if (error) {
        notifyError(error.message);
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function updateSecurityMaster(param) {
  return new Promise((resolve, reject) => {
    const req = requestParameter(param);

    service.updateSecurityMaster(req, {}, (error, response) => {
      if (error) {
        notifyError(error.message);
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}
