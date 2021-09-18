import {
  ReportSetup,
  ReportSetupServiceClient,
  DeleteReportSetupRequest,
  BatchCreateReportSetupRequest,
} from '../proto/accountpb/reportsetup_grpc_web_pb';

import { auth } from '../lib/auth/Auth';
const service = new ReportSetupServiceClient(
  window.env.GRPC_ENDPOINT,
  {},
  { ...auth }
);

export async function createReportSetup(accountId, param) {
  return new Promise((resolve, reject) => {
    const req = new ReportSetup();
    req.setSetupId(param.setupId);
    req.setAccountId(accountId);
    req.setSetupType(param.setupType);
    req.setAccess(param.access);
    req.setDeliveryType(param.deliveryType);

    service.createReportSetup(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function updateReportSetup(accountId, param) {
  return new Promise((resolve, reject) => {
    const req = new ReportSetup();
    req.setSetupId(param.setupId);
    req.setAccountId(accountId);
    req.setSetupType(param.setupType);
    req.setAccess(param.access);
    req.setDeliveryType(param.deliveryType);

    service.updateReportSetup(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function deleteReportSetup(id) {
  return new Promise((resolve, reject) => {
    const req = new DeleteReportSetupRequest();
    req.setSetupId(id);

    service.deleteReportSetup(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}
