import {
  ReportServiceClient,
  ListReportRequest,
  UpdateReportRequest,
  ListRejectCodeRequest,
} from '../proto/oatspb/oats_grpc_web_pb';
import { stringToProtoDate } from './ConvertService';
import { auth } from '../lib/auth/Auth';

const service = new ReportServiceClient(
  window.env.GRPC_ENDPOINT,
  {},
  { ...auth }
);

export async function listReport(param) {
  return new Promise((resolve, reject) => {
    let req = new ListReportRequest();
    req.setFromDate(stringToProtoDate(param.fromDate));
    req.setToDate(stringToProtoDate(param.toDate));
    req.setDateType(param.dateType);
    req.setCorrespondent(param.correspondent);
    req.setStatus(param.status);
    service.listReport(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function updateReport(reportId, note, type) {
  console.log(reportId, note, type);
  return new Promise((resolve, reject) => {
    let req = new UpdateReportRequest();
    req.setReportId(reportId);
    req.setNote(note);
    req.setType(type);

    service.updateReport(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function listRejectCode(reportId, type) {
  return new Promise((resolve, reject) => {
    if (!type) resolve([]);

    let req = new ListRejectCodeRequest();
    req.setReportId(reportId);
    req.setType(type);

    service.listRejectCode(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject().rejectCodesList);
      }
    });
  });
}
