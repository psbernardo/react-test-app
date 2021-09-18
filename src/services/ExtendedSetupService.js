import {
  ExtendedSetup,
  ExtendedSetupServiceClient,
  ListExtendedSetupAuditRequest,
} from '../proto/accountpb/extendedsetup_grpc_web_pb';
import { auth } from '../lib/auth/Auth';
const service = new ExtendedSetupServiceClient(
  window.env.GRPC_ENDPOINT,
  {},
  {
    ...auth,
  }
);

export async function updateExtendedSetup(param) {
  return new Promise((resolve, reject) => {
    const req = new ExtendedSetup();
    req.setCorrespondent(param.correspondent);
    req.setAccountNo(param.accountNo);
    req.setBeneficiary(param.beneficiary);
    req.setPrimeBroker(param.primeBroker);
    req.setParticipantNo(param.participantNo);
    req.setExecutingBroker(param.executingBroker);
    req.setInstitutionNo(param.institutionNo);
    req.setAgentNo(param.agentNo);
    req.setAgentAccountNo(param.agentAccountNo);
    req.setTraderId(param.traderId);
    req.setAccountId(param.accountId);

    service.updateExtendedSetup(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function listExtendedSetupAudit(id) {
  return new Promise((resolve, reject) => {
    const req = new ListExtendedSetupAuditRequest();
    req.setAccountId(id);

    service.listExtendedSetupAudit(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}
