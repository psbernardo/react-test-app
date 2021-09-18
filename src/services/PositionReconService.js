import {
  PositionReconServiceClient,
  ListPositionReconRequest,
} from '../proto/reconpb/positionrecon_grpc_web_pb';
import { stringToProtoDate } from './ConvertService';
import { auth } from '../lib/auth/Auth';

const service = new PositionReconServiceClient(
  window.env.GRPC_ENDPOINT,
  {},
  { ...auth }
);

export async function listPositionRecon(param) {
  return new Promise((resolve, reject) => {
    let req = new ListPositionReconRequest();
    req.setSystemDate(stringToProtoDate(param.systemDate));

    service.listPositionRecon(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}
