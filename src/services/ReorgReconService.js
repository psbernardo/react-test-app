import {
  ReOrgReconServiceClient,
  ListReOrgReconRequest,
  ListReOrgReconDetailRequest,
} from '../proto/reorgpb/reorgrecon_grpc_web_pb';
import { objectToProtoDate, stringToProtoDate } from './ConvertService';
import { auth } from '../lib/auth/Auth';

const service = new ReOrgReconServiceClient(
  window.env.GRPC_ENDPOINT,
  {},
  { ...auth }
);

export async function listReOrgRecon(param) {
  return new Promise((resolve, reject) => {
    let req = new ListReOrgReconRequest();
    req.setSystemDate(stringToProtoDate(param.systemDate));
    req.setSymbol(param.symbol);
    service.listReOrgRecon(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function listReOrgReconDetail(param) {
  return new Promise((resolve, reject) => {
    let req = new ListReOrgReconDetailRequest();
    req.setSystemDate(objectToProtoDate(param.systemDate));
    req.setSymbol(param.symbol);
    service.listReOrgReconDetail(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}
