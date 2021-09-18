/*Service*/
import { notifyError } from 'components/Notification/Notification';
import {
  RateServiceClient,
  ListRateRequest,
  DeleteRateRequest,
  ListRateAuditRequest,
  GetCusipRequest,
  ImportRequest,
  Rate,
  File,
} from '../proto/stockborrowpb/rate_grpc_web_pb';

import { auth } from '../lib/auth/Auth';
import { stringToProtoDate } from './ConvertService';

const service = new RateServiceClient(
  window.env.GRPC_ENDPOINT,
  {},
  { ...auth }
);

const requestParameter = (param) => {
  let req = new Rate();
  req.setRateId(param.rateId);
  req.setSystemDate(stringToProtoDate(param.systemDate));
  req.setOriginalCusip(param.originalCusip);
  req.setSymbol(param.symbol);
  req.setCusip(param.cusip);
  req.setBorrowRate(param.borrowRate);
  req.setLoanRate(param.loanRate);
  req.setLendingPitRate(param.lendingPitRate);
  req.setHighestRate(param.highestRate.toString());
  req.setMarkUpRate(param.markUpRate);
  req.setFinalRate(param.finalRate.toString());
  req.setSource(param.source);
  req.setStatus(param.status);

  return req;
};

export async function listRate(param) {
  return new Promise((resolve, reject) => {
    const req = new ListRateRequest();
    req.setSymbol(param.symbol);
    req.setCusip(param.cusip);
    req.setSource(param.source);
    req.setStatus(param.status);

    service.listRate(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function createRate(param) {
  return new Promise((resolve, reject) => {
    const req = requestParameter(param);
    service.createRate(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function deleteRate(id) {
  return new Promise((resolve, reject) => {
    const req = new DeleteRateRequest();
    req.setRateId(id);

    service.deleteRate(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function updateRate(param) {
  return new Promise((resolve, reject) => {
    const req = requestParameter(param);
    service.updateRate(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function listRateAudit(rateId) {
  return new Promise((resolve, reject) => {
    let req = new ListRateAuditRequest();
    req.setRateId(rateId);

    service.listRateAudit(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function getCusip(symbol) {
  return new Promise((resolve, reject) => {
    let req = new GetCusipRequest();
    req.setSymbol(symbol);

    service.getCusip(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function importAnetics(file, systemDate) {
  let response = null;
  try {
    let req = new ImportRequest();
    let f = new File();
    const fileBytes = await readFileAsArrayBuffer(file);
    f.setMimeType(file.type);
    f.setFileBytes(fileBytes);
    f.setFileName(file.name);
    req.setFile(f);
    req.setSystemDate(stringToProtoDate(systemDate));

    const res = await importAneticsPromise(req);

    //notify success
    response = res;
  } catch (error) {
    console.error(error);
    throw error;
    //notify error
  }

  return response;
}

async function importAneticsPromise(req) {
  return new Promise((resolve, reject) => {
    service.importAnetics(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function importLendingPit(file, systemDate) {
  let response = null;
  try {
    let req = new ImportRequest();
    let f = new File();
    const fileBytes = await readFileAsArrayBuffer(file);
    f.setMimeType(file.type);
    f.setFileBytes(fileBytes);
    f.setFileName(file.name);
    req.setFile(f);
    req.setSystemDate(stringToProtoDate(systemDate));

    const res = await importLendingPitPromise(req);

    //notify success
    response = res;
  } catch (error) {
    console.error(error);
    throw error;
    //notify error
  }

  return response;
}

async function importLendingPitPromise(req) {
  return new Promise((resolve, reject) => {
    service.importLendingPit(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

function readFileAsArrayBuffer(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (event) => {
      const arrayBuffer = event.target.result;
      const bytes = new Uint8Array(arrayBuffer);
      resolve(bytes);
    };

    reader.onerror = (err) => {
      reject(err);
    };

    reader.readAsArrayBuffer(file);
  });
}
