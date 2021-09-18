import {
  // Faqs,
  // ReadFaqsRequest,
  // // UpdateFaqsRequest,
  ListNonMroRequest,
  ReadNonMroFileRequest,
  // DeleteFaqsRequest,
  NonMROServiceClient,
} from '../proto/reportpb/nonmro_grpc_web_pb';
import authSvc from './AuthService';
import { notifyError } from 'components/Notification/Notification';
import { stringToProtoDate } from './ConvertService';
import moment from 'moment-timezone';
import { auth } from '../lib/auth/Auth';

const service = new NonMROServiceClient(
  window.env.GRPC_ENDPOINT,
  {},
  { ...auth }
);

export async function readNonMroFile(param) {
  return new Promise((resolve, reject) => {
    const req = new ReadNonMroFileRequest();

    req.setFileName(param['fileName']);
    req.setSystemDate(stringToProtoDate(param.systemDate));

    service.readNonMroFile(req, {}, (error, response) => {
      if (error) {
        notifyError(error.message);
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function listNonMroFile(param) {
  return new Promise((resolve, reject) => {
    const req = new ListNonMroRequest();

    service.listNonMroFile(req, {}, (error, response) => {
      if (error) {
        notifyError(error.message);
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}
