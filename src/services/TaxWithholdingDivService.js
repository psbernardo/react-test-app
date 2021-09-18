import {
  TaxWithholdingDivServiceClient,
  ListTaxWithholdingDivRequest,
} from '../proto/reportpb/taxwithholdingdiv_grpc_web_pb';
import { stringToProtoDate } from './ConvertService';
import { auth } from '../lib/auth/Auth';

const service = new TaxWithholdingDivServiceClient(
  window.env.GRPC_ENDPOINT,
  {},
  { ...auth }
);

export async function listTaxWithholdingDiv(param) {
  return new Promise((resolve, reject) => {
    let req = new ListTaxWithholdingDivRequest();
    req.setFromDate(stringToProtoDate(param.fromDate));
    req.setToDate(stringToProtoDate(param.toDate));
    req.setCorrespondent(param.correspondent);
    req.setAccountNo(param.accountNo);
    req.setAccountName(param.accountName);
    req.setTaxCountry(param.taxCountry);
    service.listTaxWithholdingDiv(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}
