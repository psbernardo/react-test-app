import {
  CallLogServiceClient,
  ListCallLogRequest,
  CallLog,
} from '../proto/marginpb/calllog_grpc_web_pb';
import { notifyError } from 'components/Notification/Notification';
import { auth } from '../lib/auth/Auth';
import { stringToProtoDate } from './ConvertService';

const service = new CallLogServiceClient(
  window.env.GRPC_ENDPOINT,
  {},
  { ...auth }
);

export async function listCallLog(param) {
  return new Promise((resolve, reject) => {
    let req = new ListCallLogRequest();
    req.setToDate(stringToProtoDate(param.toDate));
    req.setFromDate(stringToProtoDate(param.fromDate));
    req.setCorrespondent(param.correspondent);
    req.setMasterAccountNo(param.masterAccountNo);
    req.setAccountName(param.accountName);
    req.setCallType(param.callType);

    service.listCallLog(req, {}, (error, response) => {
      if (error) {
        notifyError(error.message);
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function updateCallLog(param) {
  return new Promise((resolve, reject) => {
    const req = new CallLog();
    req.setRequirementLogId(param.requirementLogId);
    req.setCallStatus(param.callStatus);
    req.setCallStatusReason(param.callStatusReason);

    service.updateCallLog(req, {}, (error, response) => {
      if (error) {
        notifyError(error.message);
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}
