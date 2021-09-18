import { notifyError } from 'components/Notification/Notification';
import {
  CreatePriorityRequest,
  UpdatePriorityRequest,
  ListPriorityRequest,
  PriorityServiceClient,
  DeletePriorityRequest,
  MaxPriorityNoRequest,
} from '../proto/segpb/priority_grpc_web_pb';
import { stringToProtoDate } from './ConvertService';

import { auth } from '../lib/auth/Auth';
const service = new PriorityServiceClient(
  window.env.GRPC_ENDPOINT,
  {},
  { ...auth }
);

export async function createPriority(param) {
  return new Promise((resolve, reject) => {
    const req = new CreatePriorityRequest();
    req.setSymbol(param.symbol);
    req.setFromDate(stringToProtoDate(param.fromDate));
    req.setToDate(stringToProtoDate(param.toDate));
    req.setPriorityType(param.priorityType);
    req.setPriorityNo(param.priorityNo);
    req.setStatus(param.status);

    service.createPriority(req, {}, (error, response) => {
      if (error) {
        notifyError(error.message);
        reject(error);
      } else {
        let res = response.toObject();

        if (res.priority.msg) {
          notifyError(res.priority.msg);
        } else {
          resolve(response.toObject());
        }
      }
    });
  });
}

export async function updatePriority(param) {
  return new Promise((resolve, reject) => {
    const req = new UpdatePriorityRequest();
    req.setSegPriorityId(param.segPriorityId);
    req.setSymbol(param.symbol);
    req.setFromDate(stringToProtoDate(param.fromDate));
    req.setToDate(stringToProtoDate(param.toDate));
    req.setPriorityType(param.priorityType);
    req.setPriorityNo(param.priorityNo);
    req.setStatus(param.status);

    service.updatePriority(req, {}, (error, response) => {
      if (error) {
        notifyError(error.message);
        reject(error);
      } else {
        let res = response.toObject();

        if (res.priority.msg) {
          notifyError(res.priority.msg);
        } else {
          resolve(response.toObject());
        }
      }
    });
  });
}

export async function listPriority(param) {
  return new Promise((resolve, reject) => {
    const req = new ListPriorityRequest();
    req.setSymbol(param.symbol);
    req.setPriorityType(param.priorityType);
    req.setStatus(param.status);

    service.listPriority(req, {}, (error, response) => {
      if (error) {
        notifyError(error.message);
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function deletePriority(id) {
  return new Promise((resolve, reject) => {
    let req = new DeletePriorityRequest();
    req.setSegPriorityId(id);

    service.deletePriority(req, {}, (error, response) => {
      if (error) {
        notifyError(error.message);
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function getPriorityNo(priorityType) {
  return new Promise((resolve, reject) => {
    const req = new MaxPriorityNoRequest();
    req.setPriorityType(priorityType);

    service.getMaxPriorityNo(req, {}, (error, response) => {
      if (error) {
        notifyError(error.message);
        reject(error);
      } else {
        resolve(response.toObject().maxPriority);
      }
    });
  });
}
