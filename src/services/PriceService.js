import {
  Price,
  ListPriceRequest,
  PriceServiceClient,
} from '../proto/assetpb/price_grpc_web_pb';
import { notifyError } from '../components/Notification/Notification';
import { auth } from '../lib/auth/Auth';
import { Pagination } from 'proto/utilspb/pagination_pb';
import { stringToProtoDate } from './ConvertService';

const service = new PriceServiceClient(
  window.env.GRPC_ENDPOINT,
  {},
  { ...auth }
);

export async function listPrice(param, paging) {
  return new Promise((resolve, reject) => {
    const req = new ListPriceRequest();
    req.setSystemDate(stringToProtoDate(param.systemDate));
    req.setSymbol(param.symbol);
    req.setCusip(param.cusip);
    req.setStalePrice(param.stalePrice);

    if (paging) {
      let pg = new Pagination();
      pg.setPageNo(paging.pageNo);
      pg.setPageSize(paging.rowsPerPage);
      pg.setSortName(paging.sortName);
      pg.setSortDirection(paging.sortDirection);
      req.setPagination(pg);
    }

    service.listPrice(req, {}, (error, response) => {
      if (error) {
        notifyError(error.message);
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

// Call function to create new price
export async function createPrice(param) {
  return new Promise((resolve, reject) => {
    const req = new Price();
    req.setSystemDate(stringToProtoDate(param.systemDate));
    req.setSymbol(param.symbol);
    req.setCusip(param.cusip);
    req.setExchangeCode(param.exchangeCode);
    req.setSic(param.sic);
    req.setIssueStatusCode(param.issueStatusCode);
    req.setPriceDate(stringToProtoDate(param.priceDate));
    req.setPrevPriceDate(
      stringToProtoDate(
        param.prevPriceDate ? param.prevPriceDate : '1900-01-01'
      )
    );
    req.setCurrentPrice(param.currentPrice);
    req.setPrevPrice(param.prevPrice);
    req.setOriginalCusip(param.originalCusip);
    req.setVolume(param.volume);
    req.setTradeTypeCode(param.tradeTypeCode);
    req.setIsHalted(param.isHalted);
    req.setSource(param.source);
    req.setFileDate(stringToProtoDate('1900-01-01'));

    service.createPrice(req, {}, (error, response) => {
      if (error) {
        notifyError(error.message);
        reject(error);
      } else {
        console.log(response.toObject());
        resolve(response.toObject());
      }
    });
  });
}

// Call function to edit existing price
export async function editPrice(param) {
  return new Promise((resolve, reject) => {
    const req = new Price();

    req.setId(param.id);
    req.setSystemDate(stringToProtoDate(param.systemDate));
    req.setSymbol(param.symbol);
    req.setCusip(param.cusip);
    req.setExchangeCode(param.exchangeCode);
    req.setSic(param.sic);
    req.setIssueStatusCode(param.issueStatusCode);
    req.setPriceDate(stringToProtoDate(param.priceDate));
    req.setPrevPriceDate(
      stringToProtoDate(
        param.prevPriceDate ? param.prevPriceDate : '1900-01-01'
      )
    );
    req.setCurrentPrice(param.currentPrice);
    req.setPrevPrice(param.prevPrice);
    req.setOriginalCusip(param.originalCusip);
    req.setVolume(param.volume);
    req.setTradeTypeCode(param.tradeTypeCode);
    req.setIsHalted(param.isHalted);
    req.setSource(param.source);
    req.setFileDate(stringToProtoDate(param.fileDate));
    req.setStalePriceAge(param.stalePriceAge);

    console.log(req);

    service.editPrice(req, {}, (error, response) => {
      if (error) {
        notifyError(error.message);
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

// Call function to delete existing price
export async function deletePrice(param) {
  return new Promise((resolve, reject) => {
    const req = new Price();

    req.setId(param);

    console.log(req);

    service.deletePrice(req, {}, (error, response) => {
      if (error) {
        notifyError(error.message);
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}
