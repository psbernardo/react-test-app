import {
  ListOptionRequest,
  OptionProfileServiceClient,
  Option,
  ReadOptionRequest,
} from '../proto/assetpb/option_grpc_web_pb';
import { notifyError } from '../components/Notification/Notification';
import { auth } from '../lib/auth/Auth';
import { Pagination } from 'proto/utilspb/pagination_pb';
import { stringToProtoDate } from './ConvertService';

const service = new OptionProfileServiceClient(
  window.env.GRPC_ENDPOINT,
  {},
  { ...auth }
);

export async function listOptionProfile(param, paging) {
  return new Promise((resolve, reject) => {
    const req = new ListOptionRequest();
    console.log(param, paging);
    req.setUnderlyingOriginalCusip(param.underlyingOriginalCusip);
    req.setSymbol(param.symbol);
    req.setExpirationDate(stringToProtoDate(param.expirationDate));
    req.setMonth(param.month);
    req.setYear(param.year);
    req.setPc(param.pc);
    req.setSecType(param.secType);
    req.setStatus(param.status);

    if (paging) {
      let pg = new Pagination();
      pg.setPageNo(paging.pageNo);
      pg.setPageSize(paging.rowsPerPage);
      pg.setSortName(paging.sortName);
      pg.setSortDirection(paging.sortDirection);
      req.setPagination(pg);
    }

    service.listOptionProfile(req, {}, (error, response) => {
      if (error) {
        notifyError(error.message);
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function createOptionProfile(param) {
  return new Promise((resolve, reject) => {
    const req = new Option();
    req.setSymbol(param.symbol);
    req.setSymbolDescription(param.symbolDescription);
    req.setMultiplier(param.multiplier);
    req.setStatus(param.status);
    req.setSecType(param.secType);

    service.createOptionProfile(req, {}, (error, response) => {
      if (error) {
        notifyError(error.message);
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function updateOptionProfile(param) {
  return new Promise((resolve, reject) => {
    const req = new Option();
    req.setId(param.id);
    req.setSymbol(param.symbol);
    req.setSymbolDescription(param.symbolDescription);
    req.setMultiplier(param.multiplier);
    req.setStatus(param.status);
    req.setSecType(param.secType);

    service.updateOptionProfile(req, {}, (error, response) => {
      if (error) {
        notifyError(error.message);
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function readOption(param) {
  return new Promise((resolve, reject) => {
    let req = new ReadOptionRequest();
    req.setSymbol(param.symbol);
    req.setSymbolDescription(param.symbolDescription);
    req.setOriginalCusip(param.originalCusip);
    req.setStatus(param.status);

    service.readOption(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}
