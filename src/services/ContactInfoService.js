import {
  ContactInfo,
  ContactInfoServiceClient,
  DeleteContactInfoRequest,
  BatchCreateContactInfoRequest,
  ListContactInfoAuditRequest,
} from '../proto/accountpb/contactinfo_grpc_web_pb';

import { auth } from '../lib/auth/Auth';
const service = new ContactInfoServiceClient(
  window.env.GRPC_ENDPOINT,
  {},
  { ...auth }
);

export async function createContactInfo(accountId, param, ownerId) {
  return new Promise((resolve, reject) => {
    const req = new ContactInfo();
    req.setOwnerId(ownerId);
    req.setContactInfoId(param.contactInfoId);
    req.setAccountId(accountId);
    req.setContactInfoType(param.contactInfoType);
    req.setContactInfo(param.contactInfo);
    req.setStatus(param.status);

    service.createContactInfo(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function updateContactInfo(accountId, param) {
  return new Promise((resolve, reject) => {
    const req = new ContactInfo();
    req.setContactInfoId(param.contactInfoId);
    req.setAccountId(accountId);
    req.setOwnerId(param.ownerId);
    req.setContactInfoType(param.contactInfoType);
    req.setContactInfo(param.contactInfo);
    req.setStatus(param.status);

    service.updateContactInfo(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function deleteContactInfo(id, ownerId) {
  return new Promise((resolve, reject) => {
    const req = new DeleteContactInfoRequest();
    req.setOwnerId(ownerId);
    req.setContactInfoId(id);

    service.deleteContactInfo(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function listContactInfo(param) {
  return new Promise((resolve, reject) => {
    const req = new ContactInfo();
    req.setAccountId(param.accountId);
    req.setOwnerId(param.ownerId);

    service.listContactInfo(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export const convertDataToContactInfoModel = (d) => {
  return {
    correspondent: GetValueByOjbectName('Correspondent', d),
    accountNo: GetValueByOjbectName('Account No', d),
    contactInfoType: GetValueByOjbectName('Contact Info Type', d),
    contactInfo: GetValueByOjbectName('Contact Info', d),
    error: validateEntries(d),
  };
};

const GetValueByOjbectName = (name, d) => {
  if (Object.prototype.hasOwnProperty.call(d, name)) {
    return d[name];
  }
  return '';
};

export const validateEntries = (d) => {
  if (!GetValueByOjbectName('Contact Info Type', d)) {
    return true;
  }

  if (!GetValueByOjbectName('Contact Info', d)) {
    return true;
  }

  return false;
};

async function executeBatchCreateContactInfo(req) {
  return new Promise((resolve, reject) => {
    service.batchCreateContactInfo(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
        return response.toObject();
      }
    });
  });
}

export async function batchCreateContactInfo(param) {
  let listReq = requestContactInfoParameter(param);
  let batchReq = new BatchCreateContactInfoRequest();
  batchReq.setContactInfoList(listReq);
  try {
    const res = await executeBatchCreateContactInfo(batchReq);
    return res.contactInfoResponsesList;
  } catch (err) {
    return err;
  }
}

const requestContactInfoParameter = (list) => {
  let listReq = [];

  list.forEach(async (row) => {
    let req = new ContactInfo();

    req.setAccountNo(row.accountNo);
    req.setCorrespondent(row.correspondent);
    req.setContactInfo(row.contactInfo);
    req.setContactInfoType(row.contactInfoType);

    listReq.push(req);
  });

  return listReq;
};

export async function listContactInfoAudit(id) {
  return new Promise((resolve, reject) => {
    const req = new ListContactInfoAuditRequest();
    req.setAccountId(id);

    service.listContactInfoAudit(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}
