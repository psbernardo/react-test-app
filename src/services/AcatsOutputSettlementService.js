import { notifyError } from 'components/Notification/Notification';
import {
  OutputSettlement,
  OutputSettlementServiceClient,
} from '../proto/acatspb/outputsettlement_grpc_web_pb';
import { stringToProtoDate } from './ConvertService';

import { auth } from '../lib/auth/Auth';
const service = new OutputSettlementServiceClient(
  window.env.GRPC_ENDPOINT,
  {},
  { ...auth }
);

export async function listOutputSettlement(param) {
  return new Promise((resolve, reject) => {
    const req = new OutputSettlement();
    req.setFromDate(stringToProtoDate(param.fromDate));
    req.setToDate(stringToProtoDate(param.toDate));

    service.listOutputSettlement(req, {}, (error, response) => {
      if (error) {
        notifyError(error.message);
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}
