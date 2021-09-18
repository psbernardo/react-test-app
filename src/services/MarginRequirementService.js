import {
  RequirementServiceClient,
  ListRequirementRequest,
  ListRequirementDetailRequest,
} from '../proto/marginpb/requirement_grpc_web_pb';
import { stringToProtoDate } from './ConvertService';
import { auth } from '../lib/auth/Auth';

const service = new RequirementServiceClient(
  window.env.GRPC_ENDPOINT,
  {},
  { ...auth }
);

export async function listRequirement(param) {
  return new Promise((resolve, reject) => {
    let req = new ListRequirementRequest();
    req.setTradeDate(stringToProtoDate(param.tradeDate));
    req.setCorrespondent(param.correspondent);
    req.setMasterAccountNo(param.masterAccountNo);
    req.setAccountName(param.accountName);
    req.setExchangeCall(param.exchangeCall);
    req.setFedCall(param.fedCall);
    req.setHouseCall(param.houseCall);
    req.setBuyingPowerCall(param.buyingPowerCall);
    req.setMinBalanceCall(param.minBalanceCall);
    service.listRequirement(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function listRequirementDetail(param) {
  return new Promise((resolve, reject) => {
    let req = new ListRequirementDetailRequest();

    req.setTradeDate(stringToProtoDate(param.tradeDate));
    req.setMasterAccountNo(param.masterAccountNo);
    service.listRequirementDetail(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}
