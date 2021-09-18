import {
  APIClientServiceClient,
  ListApiClientRequest,
} from '../proto/apipb/client_grpc_web_pb';
import { auth } from '../lib/auth/Auth';

const service = new APIClientServiceClient(
  window.env.GRPC_ENDPOINT,
  {},
  { ...auth }
);

export async function listApiClient(param) {
  return new Promise((resolve, reject) => {
    let req = new ListApiClientRequest();
    req.setBrokerId(param.brokerId);

    service.listApiClient(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}
