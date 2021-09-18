import {
  EquityServiceClient,
  ReadEquityRequest,
} from '../proto/assetpb/equity_grpc_web_pb';
import { auth } from '../lib/auth/Auth';

const service = new EquityServiceClient(
  window.env.GRPC_ENDPOINT,
  {},
  { ...auth }
);

export async function readEquity(param) {
  return new Promise((resolve, reject) => {
    let req = new ReadEquityRequest();
    req.setSymbol(param.symbol);
    req.setSymbolDescription(param.symbolDescription);
    req.setOriginalCusip(param.originalCusip);
    req.setStatus(param.status);

    service.readEquity(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}
