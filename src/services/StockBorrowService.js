/*Service*/
import {
  StockBorrowServiceClient,
  ListStockBorrowRequest,
  ListStockBorrowDetailRequest,
} from '../proto/reportpb/stockborrow_grpc_web_pb';

import { notifyError } from 'components/Notification/Notification';
import { auth } from '../lib/auth/Auth';
import { stringToProtoDate, objectToProtoDate } from './ConvertService';

const service = new StockBorrowServiceClient(
  window.env.GRPC_ENDPOINT,
  {},
  { ...auth }
);

export async function listStockBorrow(param) {
  return new Promise((resolve, reject) => {
    const req = new ListStockBorrowRequest();
    req.setSymbol(param.symbol);
    req.setCusip(param.cusip);
    req.setSystemDate(stringToProtoDate(param.systemDate));

    service.listStockBorrow(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function listStockBorrowDetails(param) {
  return new Promise((resolve, reject) => {
    const req = new ListStockBorrowDetailRequest();
    req.setOriginalCusip(param.originalCusip);
    req.setSystemDate(objectToProtoDate(param.systemDate));

    service.listStockBorrowDetail(req, {}, (error, response) => {
      if (error) {
        notifyError(error.message);
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}
