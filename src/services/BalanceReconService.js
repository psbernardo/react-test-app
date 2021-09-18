import {
  BalanceReconServiceClient,
  ListBalanceReconRequest,
} from '../proto/reconpb/balancerecon_grpc_web_pb';
import { stringToProtoDate } from './ConvertService';
import { auth } from '../lib/auth/Auth';

const service = new BalanceReconServiceClient(
  window.env.GRPC_ENDPOINT,
  {},
  { ...auth }
);

export async function listBalanceRecon(param) {
  return new Promise((resolve, reject) => {
    let req = new ListBalanceReconRequest();
    req.setSystemDate(stringToProtoDate(param.systemDate));

    service.listBalanceRecon(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}
