/*Service*/
import {
  ReportServiceClient,
  Report,
  ListReportRequest,
  ListDetailsReportRequest,
} from '../proto/surveillancepb/report_grpc_web_pb';
import { stringToProtoDate, objectToProtoDate } from './ConvertService';

import { auth } from '../lib/auth/Auth';

const service = new ReportServiceClient(
  window.env.GRPC_ENDPOINT,
  {},
  { ...auth }
);

export async function listReport(param) {
  return new Promise((resolve, reject) => {
    const req = new ListReportRequest();
    req.setPageName(param.pageName);
    req.setFromReportDate(stringToProtoDate(param.fromReportDate));
    req.setToReportDate(stringToProtoDate(param.toReportDate));
    req.setStatus(param.status);
    req.setReviewer(param.reviewer);

    service.listReport(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function updateReport(param) {
  return new Promise((resolve, reject) => {
    let req = new Report();
    req.setSurveillanceId(param.surveillanceId);
    req.setNote(param.note);
    req.setStatus(param.status);

    service.updateReport(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function listDetailsReport(param) {
  return new Promise((resolve, reject) => {
    const req = new ListDetailsReportRequest();
    req.setPageName(param.pageName);
    req.setReportDate(objectToProtoDate(param.reportDate));

    service.listDetailsReport(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}
