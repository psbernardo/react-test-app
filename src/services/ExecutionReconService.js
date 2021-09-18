import {
  ExecutionReconServiceClient,
  ListExecutionReconRequest,
} from '../proto/reconpb/executionrecon_grpc_web_pb';
import { stringToProtoDate } from './ConvertService';
import { auth } from '../lib/auth/Auth';

const service = new ExecutionReconServiceClient(
  window.env.GRPC_ENDPOINT,
  {},
  { ...auth }
);

export async function listExecutionRecon(param) {
  return new Promise((resolve, reject) => {
    let req = new ListExecutionReconRequest();
    req.setTradeDate(stringToProtoDate(param.tradeDate));
    req.setCorrespondent(param.correspondent);
    req.setSymbol(param.symbol);
    req.setSide(param.side);
    // req.setStatus(param.status);

    service.listExecutionRecon(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}
