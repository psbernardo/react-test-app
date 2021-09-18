/*Service*/
import {
  ParameterServiceClient,
  Parameter,
  ListParameterRequest,
  DeleteParameterRequest,
  ListParameterAuditRequest,
} from '../proto/trademonitoringpb/parameter_grpc_web_pb';

import { auth } from '../lib/auth/Auth';

const service = new ParameterServiceClient(
  window.env.GRPC_ENDPOINT,
  {},
  { ...auth }
);

export async function listParamater(param, paging) {
  return new Promise((resolve, reject) => {
    const req = new ListParameterRequest();
    req.setReport(param.report);
    req.setField(param.field);

    service.listParameter(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function createParameter(param) {
  return new Promise((resolve, reject) => {
    const req = new Parameter();
    req.setReport(param.report);
    req.setField(param.field);
    req.setSign(param.sign);
    req.setValue(param.value);

    service.createParameter(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function updateParameter(param) {
  return new Promise((resolve, reject) => {
    let req = new Parameter();
    req.setParameterId(param.parameterId);
    req.setReport(param.report);
    req.setField(param.field);
    req.setSign(param.sign);
    req.setValue(param.value);

    service.updateParameter(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function deleteParameter(id) {
  return new Promise((resolve, reject) => {
    const req = new DeleteParameterRequest();
    req.setParameterId(id);
    service.deleteParameter(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function listParameterAudit(id) {
  return new Promise((resolve, reject) => {
    const req = new ListParameterAuditRequest();
    req.setParameterId(id);

    service.listParameterAudit(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}
