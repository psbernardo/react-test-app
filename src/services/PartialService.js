import {
  PartialServiceClient,
  ListPartialRequest,
  Partial,
  DownloadPartialRequest,
  TransferPartialRequest,
  ImportRequest,
  File,
} from '../proto/acatspb/partial_grpc_web_pb';
import { stringToProtoDate, objectToProtoDate } from './ConvertService';
import download from '../services/DownloadService.js';
import { auth } from '../lib/auth/Auth';

const service = new PartialServiceClient(
  window.env.GRPC_ENDPOINT,
  {},
  { ...auth }
);

export async function listPartial(param) {
  return new Promise((resolve, reject) => {
    let req = new ListPartialRequest();
    req.setCorrespondent(param.correspondent);
    req.setAccountNo(param.accountNo);
    req.setAccountName(param.accountName);
    req.setMasterAccountNo(param.masterAccountNo);
    req.setBroker(param.broker);
    req.setType(param.type);
    req.setSymbol(param.symbol);
    req.setCusip(param.cusip);
    req.setSystemDate(stringToProtoDate(param.systemDate));

    service.listPartial(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function editPartial(param) {
  return new Promise((resolve, reject) => {
    let req = new Partial();
    req.setAccountId(param.accountId);
    req.setAccountNo(param.accountNo);
    req.setAccountName(param.accountName);
    req.setMasterAccountNo(param.masterAccountNo);
    req.setSymbol(param.symbol);
    req.setSymbolDescription(param.symbolDescription);
    req.setCusip(param.cusip);
    req.setPositionQty(param.positionQty);
    req.setCostBasis(param.costBasis);
    req.setPartialQty(param.partialQty);
    req.setPartialCostBasis(param.partialCostBasis);
    req.setStatus(param.status);
    req.setSystemDate(objectToProtoDate(param.systemDate));
    req.setSubmittingParticipantNo(param.submittingParticipantNo);
    req.setOriginalReceiverNo(param.originalReceiverNo);
    req.setOriginalDelivererNo(param.originalDelivererNo);
    service.editPartial(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function transferPartial(param) {
  return new Promise((resolve, reject) => {
    let req = new TransferPartialRequest();
    req.setSubmittingParticipantNo(param.submittingParticipantNo);
    req.setOriginalReceiverNo(param.originalReceiverNo);
    req.setOriginalDelivererNo(param.originalDelivererNo);
    req.setAccountIdsList(param.accountIds);
    req.setCusipsList(param.cusips);
    req.setSystemDate(stringToProtoDate(param.systemDate));

    service.transferPartial(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function downloadPartial(param) {
  return new Promise((resolve, reject) => {
    let req = new DownloadPartialRequest();
    req.setSubmittingParticipantNo(param.submittingParticipantNo);
    req.setOriginalReceiverNo(param.originalReceiverNo);
    req.setOriginalDelivererNo(param.originalDelivererNo);
    req.setAccountIdsList(param.accountIds);
    req.setCusipsList(param.cusips);
    req.setSystemDate(stringToProtoDate(param.systemDate));

    service.downloadPartial(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        download(response);
      }
    });
  });
}

export async function importAccount(file, systemDate) {
  let response = null;
  try {
    let req = new ImportRequest();
    let f = new File();
    const fileBytes = await readFileAsArrayBuffer(file);
    f.setMimeType(file.type);
    f.setFileBytes(fileBytes);
    f.setFileName(file.name);
    req.setFile(f);
    req.setSystemDate(stringToProtoDate(systemDate));

    const res = await importAccountSuspense(req);

    //notify success
    response = res;
  } catch (error) {
    console.error(error);
    throw error;
    //notify error
  }
  return response;
}

async function importAccountSuspense(req) {
  return new Promise((resolve, reject) => {
    service.importAccountSuspense(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

function readFileAsArrayBuffer(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (event) => {
      const arrayBuffer = event.target.result;
      const bytes = new Uint8Array(arrayBuffer);
      resolve(bytes);
    };

    reader.onerror = (err) => {
      reject(err);
    };

    reader.readAsArrayBuffer(file);
  });
}
