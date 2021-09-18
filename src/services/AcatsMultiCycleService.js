import { notifyError } from 'components/Notification/Notification';
import {
  ListTransactionRequest,
  TransactionServiceClient,
} from '../proto/acatspb/transaction_grpc_web_pb';
import { stringToProtoDate } from './ConvertService';

import { auth } from '../lib/auth/Auth';
const service = new TransactionServiceClient(
  window.env.GRPC_ENDPOINT,
  {},
  { ...auth }
);

export async function listAcatsMultiCycleMRO(param) {
  return new Promise((resolve, reject) => {
    const req = new ListTransactionRequest();
    req.setFromDate(stringToProtoDate(param.fromDate));
    req.setToDate(stringToProtoDate(param.toDate));

    service.listTransaction(req, {}, (error, response) => {
      if (error) {
        notifyError(error.message);
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}
