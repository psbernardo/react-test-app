import { notifyError } from 'components/Notification/Notification';
import {
  ListTafFeeRequest,
  ListTafFeeDetailsRequest,
  TafFeeServiceClient,
} from '../proto/feepb/taffee_grpc_web_pb';
import { auth } from '../lib/auth/Auth';

const service = new TafFeeServiceClient(
  window.env.GRPC_ENDPOINT,
  {},
  { ...auth }
);

export async function listTafFee(param) {
  return new Promise((resolve, reject) => {
    const req = new ListTafFeeRequest();
    req.setMonth(param.month);
    req.setYear(param.year);
    req.setCorrespondent(param.correspondent);
    req.setBranch(param.branch);
    req.setAccountNo(param.accountNo);
    req.setMasterAccountNo(param.masterAccountNo);
    req.setRep(param.rep);
    req.setBranch(param.branch);

    service.listTafFee(req, {}, (error, response) => {
      if (error) {
        notifyError(error.message);
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function listTafFeeDetails(param) {
  return new Promise((resolve, reject) => {
    const req = new ListTafFeeDetailsRequest();
    req.setMonth(param.month);
    req.setYear(param.year);
    req.setAccountId(param.accountId);

    service.listTafFeeDetails(req, {}, (error, response) => {
      if (error) {
        notifyError(error.message);
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}
