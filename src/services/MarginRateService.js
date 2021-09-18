import { notifyError } from 'components/Notification/Notification';
import {
  CreateRateRequest,
  UpdateRateRequest,
  ListRateRequest,
  DeleteRateRequest,
  RateServiceClient,
} from '../proto/marginpb/rate_grpc_web_pb';
import { stringToProtoDate } from './ConvertService';

import { auth } from '../lib/auth/Auth';
const service = new RateServiceClient(
  window.env.GRPC_ENDPOINT,
  {},
  { ...auth }
);

export async function createRate(param) {
  return new Promise((resolve, reject) => {
    const req = new CreateRateRequest();
    req.setFromDate(stringToProtoDate(param.fromDate));
    req.setToDate(stringToProtoDate(param.toDate));
    req.setSymbol(param.symbol);
    req.setRequirementType(param.requirementType);
    req.setLongRate(param.longRate);
    req.setShortRate(param.shortRate);
    req.setStatus(param.status);

    service.createRate(req, {}, (error, response) => {
      if (error) {
        notifyError(error.message);
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function updateRate(param) {
  return new Promise((resolve, reject) => {
    const req = new UpdateRateRequest();
    req.setRateId(param.rateId);
    req.setFromDate(stringToProtoDate(param.fromDate));
    req.setToDate(stringToProtoDate(param.toDate));
    req.setSymbol(param.symbol);
    req.setRequirementType(param.requirementType);
    req.setLongRate(param.longRate);
    req.setShortRate(param.shortRate);
    req.setStatus(param.status);

    service.updateRate(req, {}, (error, response) => {
      if (error) {
        notifyError(error.message);
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function listRate(param) {
  return new Promise((resolve, reject) => {
    const req = new ListRateRequest();
    req.setFromDate(stringToProtoDate(param.fromDate));
    req.setToDate(stringToProtoDate(param.toDate));
    req.setSymbol(param.symbol);
    req.setRequirementType(param.requirementType);
    req.setStatus(param.status);
    service.listRate(req, {}, (error, response) => {
      if (error) {
        notifyError(error.message);
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function deleteRate(id) {
  return new Promise((resolve, reject) => {
    let req = new DeleteRateRequest();
    req.setRateId(id);
    service.deleteRate(req, {}, (error, response) => {
      if (error) {
        notifyError(error.message);
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}
