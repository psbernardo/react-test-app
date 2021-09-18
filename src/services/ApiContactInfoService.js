import {
  ApiContactInfoServiceClient,
  ListApiContactInfoRequest,
} from '../proto/apipb/contactinfo_grpc_web_pb';
import { auth } from '../lib/auth/Auth';

const service = new ApiContactInfoServiceClient(
  window.env.GRPC_ENDPOINT,
  {},
  { ...auth }
);

export async function listApiContactInfo(param) {
  return new Promise((resolve, reject) => {
    let req = new ListApiContactInfoRequest();
    req.setOwnerId(param.ownerId);

    service.listApiContactInfo(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}
