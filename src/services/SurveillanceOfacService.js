/*Service*/
import {
  OfacServiceClient,
  Ofac,
  ListOfacRequest,
} from '../proto/surveillancepb/ofac_grpc_web_pb';
import { stringToProtoDate } from './ConvertService';

import { auth } from '../lib/auth/Auth';

const service = new OfacServiceClient(
  window.env.GRPC_ENDPOINT,
  {},
  { ...auth }
);

export async function listOfac(param) {
  return new Promise((resolve, reject) => {
    const req = new ListOfacRequest();
    req.setFirstName(param.firstName);
    req.setLastName(param.lastName);
    req.setStatus(param.status);
    req.setOfacStatus(param.ofacStatus);

    service.listOfac(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function updateOfac(param, isBatchUpdate) {
  return new Promise((resolve, reject) => {
    let req = new Ofac();

    req.setOfacId(param.ofacId);
    req.setOfacStatus(param.ofacStatus);

    if (isBatchUpdate) {
      req.setOfacDate(
        stringToProtoDate(new Date().toISOString().split('T')[0])
      );
    } else {
      if (param.ofacDate != undefined) {
        req.setOfacDate(stringToProtoDate(param.ofacDate));
      }
    }

    service.updateOfac(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}
