import {
  OutgoingServiceClient,
  ListOutgoingRequest,
  DownloadOutgoingRequest,
  RejectOutgoingRequest,
} from '../proto/acatspb/outgoing_grpc_web_pb';
import { File } from '../proto/commonpb/file_grpc_web_pb';
import { stringToProtoDate, objectToProtoDate } from './ConvertService';
import download from './DownloadService.js';
import { auth } from '../lib/auth/Auth';

const service = new OutgoingServiceClient(
  window.env.GRPC_ENDPOINT,
  {},
  { ...auth }
);

export async function listOutgoing(param) {
  return new Promise((resolve, reject) => {
    let req = new ListOutgoingRequest();
    req.setCorrespondent(param.correspondent);
    req.setAccountNo(param.accountNo);
    req.setAccountName(param.accountName);
    req.setMasterAccountNo(param.masterAccountNo);
    req.setBroker(param.broker);
    req.setSymbol(param.symbol);
    req.setCusip(param.cusip);
    req.setSettleDate(stringToProtoDate(param.systemDate));
    service.listOutgoing(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function downloadOutgoing(param) {
  return new Promise((resolve, reject) => {
    let req = new DownloadOutgoingRequest();
    req.setSubmittingParticipantNo(param.submittingParticipantNo);
    req.setOriginalReceiverNo(param.originalReceiverNo);
    req.setOriginalDelivererNo(param.originalDelivererNo);
    req.setAccountIdsList(param.accountIds);
    req.setCusipsList(param.cusips);
    req.setSystemDate(stringToProtoDate(param.systemDate));

    service.downloadOutgoing(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response);
        // download(response);
      }
    });
  });
}

export async function downloadFile(param) {
  return new Promise((resolve, reject) => {
    let f = new File();
    f.setMimeType(param[0]);
    f.setFileBytes(param[1]);
    f.setFileName(param[2]);

    resolve(download(f));
  });
}
export async function rejectOutgoing(param) {
  return new Promise((resolve, reject) => {
    let req = new RejectOutgoingRequest();
    req.setAccountIdsList(param.accountIds);
    req.setCusipsList(param.cusips);
    req.setReason(param.reason);

    service.rejectOutgoing(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}
