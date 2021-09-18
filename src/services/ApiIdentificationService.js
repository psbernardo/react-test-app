import {
  APIIdentificationServiceClient,
  ListApiIdentificationRequest,
} from '../proto/apipb/identification_grpc_web_pb';
import { auth } from '../lib/auth/Auth';

const service = new APIIdentificationServiceClient(
  window.env.GRPC_ENDPOINT,
  {},
  { ...auth }
);

export async function listApiIdentification(param) {
  return new Promise((resolve, reject) => {
    let req = new ListApiIdentificationRequest();
    req.setOwnerId(param.ownerId);

    service.listApiIdentification(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}
