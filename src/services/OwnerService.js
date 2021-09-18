import {
  ReadOwnerRequest,
  Owner,
  OwnerServiceClient,
  DeleteOwnerRequest,
  BatchCreateOwnerRequest,
  ListOwnerAuditRequest,
  ListOwnerAutoFillRequest,
} from '../proto/accountpb/owner_grpc_web_pb';
import { stringToProtoDate } from './ConvertService';
import { auth } from '../lib/auth/Auth';
const service = new OwnerServiceClient(
  window.env.GRPC_ENDPOINT,
  {},
  {
    ...auth,
  }
);

export async function createOwner(accountId, param) {
  return new Promise((resolve, reject) => {
    const req = new Owner();
    req.setAccountId(accountId);

    if (param) {
      req.setFirstName(param.firstName);
      req.setLastName(param.lastName);
      req.setDateOfBirth(stringToProtoDate(param.dateOfBirth));
      req.setOwnerType(param.ownerType);
      req.setOwnerId(param.ownerId);
    }

    service.createOwner(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function readOwner(ownerId, accountId) {
  return new Promise((resolve, reject) => {
    const req = new ReadOwnerRequest();
    req.setOwnerId(ownerId);
    req.setAccountId(accountId);

    service.readOwner(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function updateOwner(accountId, param) {
  return new Promise((resolve, reject) => {
    const req = new Owner();
    req.setOwnerId(param.ownerId);
    req.setAccountId(accountId);
    req.setOwnerType(param.ownerType);
    req.setFirstName(param.firstName);
    req.setMiddleName(param.middleName);
    req.setLastName(param.lastName);
    req.setStatus(param.status);
    req.setDateOfBirth(stringToProtoDate(param.dateOfBirth));
    req.setCitizenship(param.citizenship);
    req.setEmploymentStatus(param.employmentStatus);
    req.setEmploymentOccupation(param.employmentOccupation);
    req.setEmploymentName(param.employmentName);
    req.setOwnership(param.ownership);
    req.setStockOwnership(param.stockOwnership);
    req.setBrokerMember(param.brokerMember);
    req.setBrokerName(param.brokerName);
    req.setAffiliatePerson(param.affiliatePerson);
    req.setAffiliatePersonPosition(param.affiliatePersonPosition);

    req.setOfacStatus(param.ofacStatus);
    req.setOfacDate(stringToProtoDate(param.ofacDate));
    req.setKycStatus(param.kycStatus);
    req.setKycDate(stringToProtoDate(param.kycDate));
    req.setOfficer(param.officer);
    req.setOwner(param.owner);
    req.setOwnershipPercent(param.ownershipPercent);

    service.updateOwner(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function deleteOwner(id) {
  return new Promise((resolve, reject) => {
    const req = new DeleteOwnerRequest();
    req.setOwnerId(id);

    service.deleteOwner(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function listOwnerAudit(id) {
  return new Promise((resolve, reject) => {
    const req = new ListOwnerAuditRequest();
    req.setAccountId(id);

    service.listOwnerAudit(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function listOwnerAutoFill(account_id) {
  return new Promise((resolve, reject) => {
    const req = new ListOwnerAutoFillRequest();
    req.setAccountId(account_id);

    service.listOwnerAutoFill(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}
