import {
  SettlementShortPositionServiceClient,
  ListSettlementShortPositionRequest,
} from '../proto/cnspb/settlementshortposition_grpc_web_pb';
import { stringToProtoDate } from './ConvertService';
import { auth } from '../lib/auth/Auth';

const service = new SettlementShortPositionServiceClient(
  window.env.GRPC_ENDPOINT,
  {},
  { ...auth }
);

export async function listSettlementShortPosition(param) {
  return new Promise((resolve, reject) => {
    let req = new ListSettlementShortPositionRequest();
    req.setSettleDate(stringToProtoDate(param.settleDate));
    req.setSymbol(param.symbol);
    req.setCusip(param.cusip);
    req.setSymbolDescription(param.symbolDescription);
    service.listSettlementShortPosition(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}
