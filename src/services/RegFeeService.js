import { notifyError } from 'components/Notification/Notification';
import {
  ListRegFeeRequest,
  RegFeeServiceClient,
} from '../proto/feepb/regfee_grpc_web_pb';
import { stringToProtoDate } from './ConvertService';
import { auth } from '../lib/auth/Auth';
const service = new RegFeeServiceClient(
  window.env.GRPC_ENDPOINT,
  {},
  { ...auth }
);

export async function listRegFee(param) {
  return new Promise((resolve, reject) => {
    const req = new ListRegFeeRequest();
    req.setDateType(param.dateType);
    req.setFromDate(stringToProtoDate(param.fromDate));
    req.setToDate(stringToProtoDate(param.toDate));
    req.setCorrespondent(param.correspondent);
    req.setExecutingVenue(param.executingVenue);

    service.listRegFee(req, {}, (error, response) => {
      if (error) {
        notifyError(error.message);
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}
