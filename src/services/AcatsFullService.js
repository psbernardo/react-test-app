import { notifyError } from 'components/Notification/Notification';
import {
  ListAcatsFullRequest,
  AcatsFullServiceClient,
} from '../proto/accountpb/acatsfull_grpc_web_pb';

import { auth } from '../lib/auth/Auth';
const service = new AcatsFullServiceClient(
  window.env.GRPC_ENDPOINT,
  {},
  { ...auth }
);

export async function listAcatsFull(param) {
  return new Promise((resolve, reject) => {
    const req = new ListAcatsFullRequest();
    req.setCorrespondent(param.correspondent);
    req.setAccountNo(param.accountNo);
    req.setMasterAccountNo(param.masterAccountNo);
    req.setAccountName(param.accountName);
    req.setBroker(param.broker);
    req.setStatus(param.status);

    service.listAcatsFull(req, {}, (error, response) => {
      if (error) {
        notifyError(error.message);
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}
