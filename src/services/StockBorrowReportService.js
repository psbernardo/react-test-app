/*Service*/
import {
  ReportServiceClient,
  ListReportRequest,
  ListReportDetailRequest,
  Report,
} from '../proto/stockborrowpb/report_grpc_web_pb';

import { auth } from '../lib/auth/Auth';
import { stringToProtoDate, objectToProtoDate } from './ConvertService';

const service = new ReportServiceClient(
  window.env.GRPC_ENDPOINT,
  {},
  { ...auth }
);

export async function listReport(param) {
  return new Promise((resolve, reject) => {
    const req = new ListReportRequest();
    req.setSymbol(param.symbol);
    req.setCusip(param.cusip);
    req.setSettleDate(stringToProtoDate(param.settleDate));

    service.listReport(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function listReportDetail(param) {
  return new Promise((resolve, reject) => {
    const req = new ListReportDetailRequest();
    req.setOriginalCusip(param.originalCusip);
    req.setSettleDate(objectToProtoDate(param.settleDate));

    service.listReportDetail(req, {}, (error, response) => {
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
    const req = new Report();
    req.setSettleDate(objectToProtoDate(param.settleDate));
    req.setOriginalCusip(param.originalCusip);
    req.setNote(param.note);

    service.updateReport(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}
