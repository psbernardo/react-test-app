import {
  APIStatusServiceClient,
  ListApiStatusRequest,
} from '../proto/apipb/status_grpc_web_pb';
import { auth } from '../lib/auth/Auth';

const service = new APIStatusServiceClient(
  window.env.GRPC_ENDPOINT,
  {},
  { ...auth }
);

export async function listApiStatus(param) {
  return new Promise((resolve, reject) => {
    let req = new ListApiStatusRequest();
    req.setBrokerId(param.brokerId);

    service.listApiStatus(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}
