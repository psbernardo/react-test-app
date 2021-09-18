import {
  ProcessingStatusServiceClient,
  ListProcessingStatusRequest,
} from '../proto/catpb/processingstatus_grpc_web_pb';
import { stringToProtoDate } from './ConvertService';
import { auth } from '../lib/auth/Auth';

const service = new ProcessingStatusServiceClient(
  window.env.GRPC_ENDPOINT,
  {},
  { ...auth }
);

export async function listProcessingStatus(param) {
  return new Promise((resolve, reject) => {
    let req = new ListProcessingStatusRequest();
    req.setSystemDate(stringToProtoDate(param.systemDate));
    req.setCorrespondent(param.correspondent);
    service.listProcessingStatus(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}
