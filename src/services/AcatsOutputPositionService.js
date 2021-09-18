import { notifyError } from 'components/Notification/Notification';
import {
  OutputPosition,
  OutputPositionServiceClient,
} from '../proto/acatspb/outgoingposition_grpc_web_pb';
import { stringToProtoDate } from './ConvertService';

import { auth } from '../lib/auth/Auth';
const service = new OutputPositionServiceClient(
  window.env.GRPC_ENDPOINT,
  {},
  { ...auth }
);

export async function listOutputPositionMRO(param) {
  return new Promise((resolve, reject) => {
    const req = new OutputPosition();
    req.setFromDate(stringToProtoDate(param.fromDate));
    req.setToDate(stringToProtoDate(param.toDate));

    service.listOutputPosition(req, {}, (error, response) => {
      if (error) {
        notifyError(error.message);
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}
