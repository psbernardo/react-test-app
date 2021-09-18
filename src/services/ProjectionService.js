import {
  ProjectionServiceClient,
  ListProjectionRequest,
  ListProjectionDetailRequest,
} from '../proto/cnspb/projection_grpc_web_pb';
import { objectToProtoDate, stringToProtoDate } from './ConvertService';
import { auth } from '../lib/auth/Auth';

const service = new ProjectionServiceClient(
  window.env.GRPC_ENDPOINT,
  {},
  { ...auth }
);

export async function listProjection(param) {
  return new Promise((resolve, reject) => {
    let req = new ListProjectionRequest();
    req.setFromDate(stringToProtoDate(param.fromDate));
    req.setToDate(stringToProtoDate(param.toDate));
    service.listProjection(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function listProjectionDetail(param) {
  return new Promise((resolve, reject) => {
    let req = new ListProjectionDetailRequest();
    req.setFromDate(objectToProtoDate(param.fromDate));
    service.listProjectionDetail(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}
