import { notifyError } from 'components/Notification/Notification';
import {
  SystemNumber,
  SystemNumberServiceClient,
  DeleteSystemNumberRequest,
} from '../proto/admpb/systemnumber_grpc_web_pb';
import { stringToProtoDate } from './ConvertService';
import { auth } from '../lib/auth/Auth';
const service = new SystemNumberServiceClient(
  window.env.GRPC_ENDPOINT,
  {},
  { ...auth }
);

export async function createSystemNumber(param) {
  return new Promise((resolve, reject) => {
    const req = new SystemNumber();
    req.setType(param.type);
    req.setSubType(param.subType);
    req.setFromDate(stringToProtoDate(param.fromDate));
    req.setToDate(stringToProtoDate(param.toDate));
    req.setRate(param.rate);
    req.setStatus(param.status);
    service.createSystemNumber(req, {}, (error, response) => {
      if (error) {
        notifyError(error.message);
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function updateSystemNumber(param) {
  return new Promise((resolve, reject) => {
    const req = new SystemNumber();
    req.setSystemNumberId(param.systemNumberId);
    req.setType(param.type);
    req.setSubType(param.subType);
    req.setFromDate(stringToProtoDate(param.fromDate));
    req.setToDate(stringToProtoDate(param.toDate));
    req.setRate(param.rate);
    req.setStatus(param.status);

    service.updateSystemNumber(req, {}, (error, response) => {
      if (error) {
        notifyError(error.message);
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function listSystemNumber(param) {
  return new Promise((resolve, reject) => {
    const req = new SystemNumber();
    req.setSystemNumberId(param.systemNumberId);
    req.setType(param.type);
    req.setSubType(param.subType);
    req.setFromDate(stringToProtoDate(param.fromDate));
    req.setToDate(stringToProtoDate(param.toDate));
    req.setStatus(param.status);
    req.setRate(param.rate);

    service.listSystemNumber(req, {}, (error, response) => {
      if (error) {
        notifyError(error.message);
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function deleteSystemNumber(id) {
  return new Promise((resolve, reject) => {
    const req = new DeleteSystemNumberRequest();
    req.setSystemNumberId(id);
    service.deleteSystemNumber(req, {}, (error, response) => {
      if (error) {
        notifyError(error.message);
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}
