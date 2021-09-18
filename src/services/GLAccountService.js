import {
  GeneralLedger,
  DeleteGeneralLedgerRequest,
  GeneralLedgerServiceClient,
  ReadGeneralLedgerRequest,
  Empty,
} from '../proto/accountpb/generalledger_grpc_web_pb';

import { auth } from '../lib/auth/Auth';
const service = new GeneralLedgerServiceClient(
  window.env.GRPC_ENDPOINT,
  {},
  { ...auth }
);

export async function createGeneralLedger(param) {
  return new Promise((resolve, reject) => {
    const req = requestParameter(param);

    service.createGeneralLedger(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function updateGeneralLedger(param) {
  return new Promise((resolve, reject) => {
    const req = requestParameter(param);

    service.updateGeneralLedger(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

const requestParameter = (param) => {
  let req = new GeneralLedger();
  req.setAccountId(param.accountId);
  req.setAccountName(param.accountName);
  req.setAccountNo(param.accountNo);
  req.setMasterAccountNo(param.masterAccountNo);
  req.setGlType(param.glType);
  req.setBroker(param.broker);
  req.setStatus(param.status);
  req.setReserveCalcCode(param.reserveCalcCode);
  req.setSide(param.side);

  return req;
};

export async function listGeneralLedger(param) {
  return new Promise((resolve, reject) => {
    const req = requestParameter(param);

    service.listGeneralLedger(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function deleteGeneralLedger(id) {
  return new Promise((resolve, reject) => {
    let req = new DeleteGeneralLedgerRequest();
    req.setAccountId(id);

    service.deleteGeneralLedger(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function getNewIdGeneralLedger(id) {
  return new Promise((resolve, reject) => {
    let req = new Empty();

    service.getNewIdGeneralLedger(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function readGeneralLedger(id) {
  return new Promise((resolve, reject) => {
    let req = new ReadGeneralLedgerRequest();
    req.setAccountId(id);

    service.readGeneralLedger(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}
