import {
  StatementDisclosure,
  ListStatementDisclosureRequest,
  StatementDisclosureServiceClient,
  DeleteStatementDisclosureRequest,
  DownloadBlankReportRequest,
} from '../proto/reportpb/statementdisclosure_grpc_web_pb';
import download from './DownloadService';
import { notifyError } from 'components/Notification/Notification';
import { auth } from '../lib/auth/Auth';

const service = new StatementDisclosureServiceClient(
  window.env.GRPC_ENDPOINT,
  {},
  { ...auth }
);

const requestParameter = (param) => {
  let req = new StatementDisclosure();
  req.setDisclosureId(param.disclosureId);
  req.setCorrespondent(param.correspondent);
  req.setDisclosure(param.disclosure);
  req.setStatus(param.status);
  req.setReportType(param.reportType);
  req.setCreatedBy('Logged User');

  return req;
};

export async function createStatementDisclosure(param) {
  return new Promise((resolve, reject) => {
    const req = requestParameter(param);
    service.createStatementDisclosure(req, {}, (error, response) => {
      if (error) {
        notifyError(error.message);
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function updateStatementDisclosure(param) {
  return new Promise((resolve, reject) => {
    const req = requestParameter(param);
    service.updateStatementDisclosure(req, {}, (error, response) => {
      if (error) {
        notifyError(error.message);
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function listStatementDisclosure(param) {
  return new Promise((resolve, reject) => {
    const req = new ListStatementDisclosureRequest();
    req.setCorrespondent(param.correspondent);
    req.setStatus(param.status);
    service.listStatementDisclosure(req, {}, (error, response) => {
      if (error) {
        notifyError(error.message);
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function deleteStatementDisclosure(id) {
  return new Promise((resolve, reject) => {
    const req = new DeleteStatementDisclosureRequest();
    req.setDisclosureId(id);
    service.deleteStatementDisclosure(req, {}, (error, response) => {
      if (error) {
        notifyError(error.message);
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function downloadBlankReport(param, disclosure) {
  return new Promise((resolve, reject) => {
    const req = new DownloadBlankReportRequest();
    req.setCorrespondent(param.correspondent);
    req.setReportType(param.reportType);
    req.setDisclosure(disclosure);

    service.downloadBlankReport(req, {}, (error, response) => {
      if (error) {
        notifyError(error.message);
        reject(error);
      } else {
        download(response);
      }
    });
  });
}
