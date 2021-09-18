import { notifyError } from 'components/Notification/Notification';
import {
  Identification,
  IdentificationServiceClient,
  DeleteIdentificationRequest,
  ListIdentificationAuditRequest,
} from '../proto/accountpb/identification_grpc_web_pb';
import { stringToProtoDate } from './ConvertService';
import { auth } from '../lib/auth/Auth';
import { ContactSupportOutlined } from '@material-ui/icons';
const service = new IdentificationServiceClient(
  window.env.GRPC_ENDPOINT,
  {},
  {
    ...auth,
  }
);

export async function createIdentification(accountId, param) {
  return new Promise((resolve, reject) => {
    const req = new Identification();
    req.setAccountId(accountId);
    req.setOwnerId(param.ownerId);
    req.setType(param.type);
    req.setId(param.id);
    req.setCountryOfIssuance(param.countryOfIssuance);
    req.setIssueDate(stringToProtoDate(param.issueDate));
    req.setExpirationDate(stringToProtoDate(param.expirationDate));
    req.setImgGovernmentId(param.imgGovernmentId);
    req.setStatus(param.status);

    service.createIdentification(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        let res = response.toObject();

        if (res.identification.msg) {
          notifyError(res.identification.msg);
        } else {
          resolve(response.toObject());
        }
      }
    });
  });
}

export async function updateIdentification(accountId, param) {
  return new Promise((resolve, reject) => {
    const req = new Identification();
    req.setIdentificationId(param.identificationId);
    req.setOwnerId(param.ownerId);
    req.setAccountId(accountId);
    req.setType(param.type);
    req.setId(param.id);
    req.setCountryOfIssuance(param.countryOfIssuance);
    req.setIssueDate(stringToProtoDate(param.issueDate));
    req.setExpirationDate(stringToProtoDate(param.expirationDate));
    req.setImgGovernmentId(param.imgGovernmentId);
    req.setStatus(param.status);

    service.updateIdentification(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        let res = response.toObject();

        if (res.identification.msg) {
          notifyError(res.identification.msg);
        } else {
          resolve(response.toObject());
        }
      }
    });
  });
}

export async function deleteIdentification(id, ownerId) {
  return new Promise((resolve, reject) => {
    const req = new DeleteIdentificationRequest();
    req.setIdentificationId(id);
    req.setOwnerId(ownerId);

    service.deleteIdentification(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function listIdentification(param) {
  return new Promise((resolve, reject) => {
    const req = new Identification();
    req.setAccountId(param.accountId);
    req.setOwnerId(param.ownerId);

    service.listIdentification(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function listIdentificationAudit(id) {
  return new Promise((resolve, reject) => {
    const req = new ListIdentificationAuditRequest();
    req.setAccountId(id);

    service.listIdentificationAudit(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}
