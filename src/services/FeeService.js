import {
  FeeServiceClient,
  ListFeeRequest,
} from '../proto/trnspb/fee_grpc_web_pb';
import { stringToProtoDate } from './ConvertService';
import { auth } from '../lib/auth/Auth';

const service = new FeeServiceClient(window.env.GRPC_ENDPOINT, {}, { ...auth });

export async function listFee(param) {
  return new Promise((resolve, reject) => {
    let req = new ListFeeRequest();
    req.setFromDate(stringToProtoDate(param.fromDate));
    req.setToDate(stringToProtoDate(param.toDate));
    req.setFeeType(param.feeType);
    req.setContraAccount(param.contraAccount);
    req.setDateType(param.dateType);

    service.listFee(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}
