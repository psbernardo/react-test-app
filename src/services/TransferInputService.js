import {
  TransferInput,
  TransferInputServiceClient,
} from '../proto/compliancepb/transferinput_grpc_web_pb';
import download from '../services/DownloadService.js';
import { auth } from '../lib/auth/Auth';

const service = new TransferInputServiceClient(
  window.env.GRPC_ENDPOINT,
  {},
  { ...auth }
);

export async function createPendingTransferInput(param) {
  return new Promise((resolve, reject) => {
    let req = new TransferInput();
    req.setSubmittingParticipantNo(param.submittingParticipantNo);
    req.setOriginalReceiverNo(param.originalReceiverNo);
    req.setOriginalDelivererNo(param.originalDelivererNo);
    req.setReceiverCorrespondent(param.receiverCorrespondent);
    console.log(param);
    req.setAccountIdsList(param.accountIds);
    req.setDelivererAccountNo(param.delivererAccountNo);

    service.createPendingTransferInput(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function downloadTransferInput(param) {
  return new Promise((resolve, reject) => {
    let req = new TransferInput();
    req.setSubmittingParticipantNo(param.submittingParticipantNo);
    req.setOriginalReceiverNo(param.originalReceiverNo);
    req.setOriginalDelivererNo(param.originalDelivererNo);
    req.setReceiverCorrespondent(param.receiverCorrespondent);
    console.log(param);
    req.setAccountIdsList(param.accountIds);
    req.setDelivererAccountNo(param.delivererAccountNo);

    service.downloadTransferInput(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        download(response);
      }
    });
  });
}

