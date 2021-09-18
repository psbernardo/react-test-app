import {
  ProfileServiceClient,
  ListProfileRequest,
  ExecuteProfileRequest,
  UpdateProfileRequest,
} from '../proto/admpb/profile_grpc_web_pb';
import { stringToProtoDate } from './ConvertService';
import { auth } from '../lib/auth/Auth';
import { notifyError } from 'components/Notification/Notification';
const service = new ProfileServiceClient(
  window.env.GRPC_ENDPOINT,
  {},
  { ...auth }
);

export async function listProfile(param) {
  return new Promise((resolve, reject) => {
    let req = new ListProfileRequest();
    service.listProfile(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function executeProfile(processName, rollbackDate) {
  return new Promise((resolve, reject) => {
    let req = new ExecuteProfileRequest();
    req.setRollbackDate(stringToProtoDate(rollbackDate));
    req.setProcess(processName);

    service.executeProfile(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function updateProfile(param) {
  return new Promise((resolve, reject) => {
    let req = new UpdateProfileRequest();
    req.setParticipantNo(param.participantNo);
    req.setCorrespondent(param.correspondent);
    req.setDebitSign(param.debitSign);
    req.setCreditSign(param.creditSign);
    service.updateProfile(req, {}, (error, response) => {
      if (error) {
        notifyError(error.message);
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}
