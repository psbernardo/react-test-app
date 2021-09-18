import {
  TradeSummaryServiceClient,
  ListTradeSummaryRequest,
  UpdateTradeSummaryRequest,
} from '../proto/cnspb/tradesummary_grpc_web_pb';
import { stringToProtoDate } from './ConvertService';
import { auth } from '../lib/auth/Auth';

const service = new TradeSummaryServiceClient(
  window.env.GRPC_ENDPOINT,
  {},
  { ...auth }
);

export async function listTradeSummary(param) {
  return new Promise((resolve, reject) => {
    let req = new ListTradeSummaryRequest();
    req.setSettleDate(stringToProtoDate(param.settleDate));
    req.setSymbol(param.symbol);
    req.setCusip(param.cusip);
    req.setSymbolDescription(param.symbolDescription);
    req.setShowBreakOnly(param.showBreakOnly);
    service.listTradeSummary(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function updateTradeSummary(param) {
  return new Promise((resolve, reject) => {
    const req = new UpdateTradeSummaryRequest();
    req.setTradeSummaryId(param.tradeSummaryId);
    req.setNote(param.note);

    service.updateTradeSummary(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}
