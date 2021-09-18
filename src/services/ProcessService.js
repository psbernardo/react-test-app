import { createSelector } from 'reselect'; //memoization
import { notifyError } from 'components/Notification/Notification';
import {
  ListProcessRequest,
  ProcessServiceClient,
  ProcessSystemProcessRequest,
  LazyProcessRequest,
} from '../proto/systempb/process_grpc_web_pb';
import { stringToProtoDate } from './ConvertService';
import { auth } from '../lib/auth/Auth';
const service = new ProcessServiceClient(
  window.env.GRPC_ENDPOINT,
  {},
  { ...auth }
);

export async function listProcess(param) {
  return new Promise((resolve, reject) => {
    const req = new ListProcessRequest();
    req.setSystemDate(stringToProtoDate(param.systemDate));
    req.setProcessGroup(param.processGroup);
    req.setStatus(param.status);
    req.setProcess(param.process);

    service.listProcess(req, {}, (error, response) => {
      if (error) {
        notifyError(error.message);
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function processSystemProcess(param) {
  return new Promise((resolve, reject) => {
    const req = new ProcessSystemProcessRequest();
    req.setProcessId(param.processId);
    req.setNote(param.note);

    service.processSystemProcess(req, {}, (error, response) => {
      if (error) {
        notifyError(error.message);
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

//memoization -  cached result when the same inputs occur again
export const lazyProcess = createSelector(
  (key) => (async () => await lazyProcessPromise(key))(),
  (correspondents) => correspondents
);

async function lazyProcessPromise(key) {
  return new Promise((resolve, reject) => {
    const req = new LazyProcessRequest();
    req.setKey(key);
    req.setLimit(50);

    service.lazyProcess(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}
