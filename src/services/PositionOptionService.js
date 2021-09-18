import {
  ListPositionRequest,
  ProcessPositionRequest,
  OccPositionServiceClient,
  ProcessPosition,
} from '../proto/occpb/position_grpc_web_pb';
import { stringToProtoDate } from './ConvertService';
import { auth } from '../lib/auth/Auth';

const service = new OccPositionServiceClient(
  window.env.GRPC_ENDPOINT,
  {},
  { ...auth }
);

export async function listPositionOption(param, paging) {
  return new Promise((resolve, reject) => {
    let req = new ListPositionRequest();
    req.setSettleDate(stringToProtoDate(param.settleDate));
    req.setEntryType(param.entryType);
    req.setCorrespondent(param.correspondent);
    req.setBranch(param.branch);
    req.setAccountNo(param.accountNo);
    req.setMasterAccountNo(param.masterAccountNo);
    req.setRep(param.rep);
    req.setBroker(param.broker);
    req.setSymbol(param.symbol);

    service.listPosition(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function processPositionOption(param) {
  return new Promise((resolve, reject) => {
    let positionsList = requestPositionParameter(param.positions);
    let req = new ProcessPositionRequest();
    req.setProcessPositionsList(positionsList);

    service.processPosition(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

const requestPositionParameter = (list) => {
  let listReq = [];

  list.forEach(async (row) => {
    let req = new ProcessPosition();

    req.setStageId(row.stageId);

    listReq.push(req);
  });

  return listReq;
};
