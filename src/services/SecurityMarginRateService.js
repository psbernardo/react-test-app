import {
  MarginRate,
  DeleteMarginRateRequest,
  MarginRateServiceClient,
} from '../proto/assetpb/marginrate_grpc_web_pb';
import { stringToProtoDate } from './ConvertService';

import { auth } from '../lib/auth/Auth';
const service = new MarginRateServiceClient(
  window.env.GRPC_ENDPOINT,
  {},
  { ...auth }
);

export async function createMarginRate(param) {
  return new Promise((resolve, reject) => {
    service.createMarginRate(getRequest(param), {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function updateMarginRate(param) {
  return new Promise((resolve, reject) => {
    service.updateMarginRate(getRequest(param), {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function listMarginRate(param) {
  return new Promise((resolve, reject) => {
    service.listMarginRate(getRequest(param), {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

function getRequest(param) {
  const req = new MarginRate();
  req.setMarginRateId(param.marginRateId);
  req.setFromDate(stringToProtoDate(param.fromDate));
  req.setToDate(stringToProtoDate(param.toDate));
  req.setSymbol(param.symbol);
  req.setRequirementType(param.requirementType);
  req.setStatus(param.status);
  req.setLongRate(param.longRate);
  req.setShortRate(param.shortRate);
  req.setCorrespondent(param.correspondent);

  return req;
}

export async function deleteMarginRate(id) {
  return new Promise((resolve, reject) => {
    let req = new DeleteMarginRateRequest();
    req.setMarginRateId(id);
    service.deleteMarginRate(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}
