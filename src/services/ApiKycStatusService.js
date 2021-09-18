import {
  APIKycStatusServiceClient,
  ListApiKycStatusRequest,
} from '../proto/apipb/kycstatus_grpc_web_pb';
import { auth } from '../lib/auth/Auth';

const service = new APIKycStatusServiceClient(
  window.env.GRPC_ENDPOINT,
  {},
  { ...auth }
);

export async function listApiKycStatus(param) {
  return new Promise((resolve, reject) => {
    let req = new ListApiKycStatusRequest();
    req.setBrokerId(param.brokerId);
    req.setOwnerId(param.ownerId)

    service.listApiKycStatus(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}
