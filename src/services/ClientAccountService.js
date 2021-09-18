import {
  ClientServiceClient,
  Client,
  GetNewClientIdRequest,
  ListClientRequest,
  DeleteClientRequest,
  ReadClientRequest,
  ListClientAuditRequest,
  ImportClientRequest,
  ImportClearRequest,
  ImportDeleteRequest,
  ImportProcessRequest,
  ImportFilterRequest,
  File,
  ListCommonIdRequest,
  StageClient,
} from '../proto/accountpb/client_grpc_web_pb';
import { stringToProtoDate, stringToProtoTimeSpan } from './ConvertService';
import { auth } from '../lib/auth/Auth';

const service = new ClientServiceClient(
  window.env.GRPC_ENDPOINT,
  {},
  { ...auth }
);

export async function deleteClient(id) {
  return new Promise((resolve, reject) => {
    const req = new DeleteClientRequest();
    req.setAccountId(id);

    service.deleteClient(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function listClient(param) {
  return new Promise((resolve, reject) => {
    let req = new ListClientRequest();
    req.setCorrespondent(param.correspondent);
    req.setBranch(param.branch);
    req.setAccountNo(param.accountNo);
    req.setMasterAccountNo(param.masterAccountNo);
    req.setRep(param.rep);
    req.setAccountName(param.accountName);
    req.setBroker(param.broker);
    req.setStatus(param.status);

    service.listClient(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function listClientAudit(accountId) {
  return new Promise((resolve, reject) => {
    let req = new ListClientAuditRequest();
    req.setAccountId(accountId);

    service.listClientAudit(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function readClient(id) {
  return new Promise((resolve, reject) => {
    let req = new ReadClientRequest();
    req.setAccountId(id);

    service.readClient(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function getNewClientId() {
  return new Promise((resolve, reject) => {
    let req = new GetNewClientIdRequest();

    service.getNewClientId(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

const saveRequestParameter = (param) => {
  let req = new Client();
  req.setAccountId(param.accountId);
  req.setCorrespondent(param.correspondent);
  req.setAccountName(param.accountName);
  req.setAccountNo(param.accountNo);
  req.setMasterAccountNo(param.masterAccountNo);
  req.setStatus(param.status);
  req.setBroker(param.broker);
  req.setPrivacyContent(param.privacyContent);
  req.setDayTrader(param.dayTrader);
  req.setMultiplier(param.multiplier);
  req.setLegalEntity(param.legalEntity);
  req.setInvestmentObjectiveCode(param.investmentObjectiveCode);
  req.setTaxCountry(param.taxCountry);
  req.setTefra(param.tefra);
  req.setW8w9(param.w8w9);
  req.setInvestmentObjectiveDate(
    stringToProtoDate(param.investmentObjectiveDate)
  );
  req.setW8w9ReceivedDate(stringToProtoDate(param.w8w9ReceivedDate));
  req.setActivatedAt(stringToProtoTimeSpan(param.activatedAt));
  req.setDisabledAt(stringToProtoTimeSpan(param.disabledAt));
  req.setAccreditedInvestor(param.accreditedInvestor);
  req.setFdidFlag(param.fdidFlag);
  req.setFdid(param.fdid);
  req.setFdidEndReason(param.fdidEndReason);
  req.setBranch(param.branch);
  req.setRep(param.rep);
  req.setAccountType(param.accountType);
  req.setMarginType(param.marginType);
  req.setLargeTraderId(param.largeTraderId);
  req.setFpslParticipant(param.fpslParticipant);
  req.setCommonId(param.commonId);
  req.setStatusReason(param.statusReason);
  req.setSubType(param.subType);
  req.setAllowLiquidInvestment(param.allowLiquidInvestment);
  req.setWebTermConditions(stringToProtoTimeSpan(param.webTermConditions));
  req.setDisclosureStatement(stringToProtoTimeSpan(param.disclosureStatement));
  req.setFeeSchedule(stringToProtoTimeSpan(param.feeSchedule));
  req.setBeneficiary(param.beneficiary);
  req.setPrimeBroker(param.primeBroker);
  req.setParticipantNo(param.participantNo);
  req.setExecutingBroker(param.executingBroker);
  req.setInstitutionNo(param.institutionNo);
  req.setAgentNo(param.agentNo);
  req.setAgentAccountNo(param.agentAccountNo);
  req.setTraderId(param.traderId);
  req.setMarginDisclosure(param.marginDisclosure);
  req.setMarginAgreement(param.marginAgreement);
  req.setStocks(param.stocks);
  req.setEft(param.eft);
  req.setOption(param.option);
  req.setAnnualIncome(param.annualIncome);
  req.setLiquidNetWorth(param.liquidNetWorth);
  req.setSourceOfFunds(param.sourceOfFunds);
  req.setSigned(param.signed);
  req.setImgSignature(param.imgSignature);
  req.setBatchNo(param.batchNo);

  return req;
};

export async function updateClient(param) {
  return new Promise((resolve, reject) => {
    const req = saveRequestParameter(param);
    service.updateClient(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function createClient(param) {
  return new Promise((resolve, reject) => {
    const req = saveRequestParameter(param);
    service.createClient(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function attachFiles(file) {
  let response = null;
  try {
    let req = new ImportClientRequest();
    let f = new File();
    const fileBytes = await readFileAsArrayBuffer(file);
    f.setMimeType(file.type);
    f.setFileBytes(fileBytes);
    f.setFileName(file.name);
    req.setFile(f);

    const res = await attachFilePromise(req);

    //notify success
    response = res;
  } catch (error) {
    console.error(error);
    //notify error
  }

  return response;
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

async function attachFilePromise(req) {
  return new Promise((resolve, reject) => {
    service.importClient(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function importClear(batchNo) {
  return new Promise((resolve, reject) => {
    const req = new ImportClearRequest();
    req.setBatchNo(batchNo);
    service.importClear(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function importDelete(id) {
  return new Promise((resolve, reject) => {
    const req = new ImportDeleteRequest();
    req.setAccountId(id);

    service.importDelete(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function importProcess(batchNo) {
  return new Promise((resolve, reject) => {
    const req = new ImportProcessRequest();
    req.setBatchNo(batchNo);
    service.importProcess(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function importFilter(batchNo, status) {
  return new Promise((resolve, reject) => {
    const req = new ImportFilterRequest();
    req.setBatchNo(batchNo);
    req.setStatus(status);
    service.importFilter(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function listCommonId(param) {
  return new Promise((resolve, reject) => {
    let req = new ListCommonIdRequest();
    req.setCorrespondent(param.correspondent);
    req.setBranch(param.branch);
    req.setAccountNo(param.accountNo);
    req.setAccountName(param.accountName);
    req.setMasterAccountNo(param.masterAccountNo);
    req.setRep(param.rep);

    service.listCommonId(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}
