import {
  DataFileTransferServiceClient,
  DataFileTransfer,
} from '../proto/dtccpb/datafiletransfer_grpc_web_pb';
import { stringToProtoDate } from './ConvertService';
import { auth } from '../lib/auth/Auth';

const service = new DataFileTransferServiceClient(
  window.env.GRPC_ENDPOINT,
  {},
  { ...auth }
);

export async function listDataFileTransfer(param) {
  return new Promise((resolve, reject) => {
    let req = new DataFileTransfer();
    req.setDataFileTransferId(param.dataFileTransferId);
    req.setProcessId(param.processId);
    req.setSystemDate(stringToProtoDate(param.systemDate));
    req.setFileName(param.fileName);
    req.setStatus(param.Status);

    service.listDataFileTransfer(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function listDataFileTransferDetails(param) {
  return new Promise((resolve, reject) => {
    let req = new DataFileTransfer();
    service.listDataFileTransferDetails(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function processDataFileTransfer(processName, rollbackDate) {
  return new Promise((resolve, reject) => {
    let req = new DataFileTransfer();
    req.setRollbackDate(stringToProtoDate(rollbackDate));
    req.setProcess(processName);

    service.processDataFileTransfer(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}
