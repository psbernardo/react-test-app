import {
  QuarterlyReportServiceClient,
  ListQuarterlyReportRequest,
  ListQuarterlyReportDetailsRequest,
} from '../proto/regulatorypb/quarterlyreport_grpc_web_pb';
import { objectToProtoDate, stringToProtoDate } from './ConvertService';
import { auth } from '../lib/auth/Auth';

const service = new QuarterlyReportServiceClient(
  window.env.GRPC_ENDPOINT,
  {},
  { ...auth }
);

export async function listQuarterlyReportFormCustody(param) {
  return new Promise((resolve, reject) => {
    let req = new ListQuarterlyReportRequest();
    req.setFromDate(stringToProtoDate(param.fromDate));
    req.setToDate(stringToProtoDate(param.toDate));
    service.listQuarterlyReportFormCustody(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function listQuarterlyReportFormCustodyDetails(param) {
  return new Promise((resolve, reject) => {
    let req = new ListQuarterlyReportDetailsRequest();
    req.setFromDate(objectToProtoDate(param.fromDate));
    req.setToDate(objectToProtoDate(param.toDate));
    service.listQuarterlyReportFormCustodyDetails(
      req,
      {},
      (error, response) => {
        if (error) {
          reject(error);
        } else {
          resolve(response.toObject());
        }
      }
    );
  });
}