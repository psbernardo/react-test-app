import {
  EmailManagerServiceClient,
  ListEmailManagerRequest,
  EmailManager,
  DropdownRecipientsRequest,
} from '../proto/admpb/emailmanager_grpc_web_pb';
import { auth } from '../lib/auth/Auth';

const service = new EmailManagerServiceClient(
  window.env.GRPC_ENDPOINT,
  {},
  { ...auth }
);

export async function listEmailManager(param) {
  return new Promise((resolve, reject) => {
    let req = new ListEmailManagerRequest();

    req.setRecipientEmailGroup(param.recipientEmailGroup);
    req.setName(param.name);
    req.setEmail(param.email);
    req.setStatus(param.status);

    service.listEmailManager(req, {}, (error, response) => {
      if (error) {
        console.log(error);
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function createEmailManager(param) {
  return new Promise((resolve, reject) => {
    const req = new EmailManager();
    req.setRecipientEmailGroup(param.recipientEmailGroup);
    req.setStatus(param.status);
    req.setUsrId(param.usrId);
    service.createEmailManager(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function updateEmailManager(param) {
  return new Promise((resolve, reject) => {
    const req = new EmailManager();
    req.setEmailManagerId(param.emailManagerId);
    req.setRecipientEmailGroup(param.recipientEmailGroup);
    req.setStatus(param.status);
    req.setUsrId(param.usrId);
    service.updateEmailManager(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function dropdownRecipients() {
  return new Promise((resolve, reject) => {
    const req = new DropdownRecipientsRequest();
    req.setLimit(50);

    service.dropdownRecipients(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function deleteEmailManager(emailManagerId) {
  return new Promise((resolve, reject) => {
    const req = new EmailManager();
    req.setEmailManagerId(emailManagerId);

    service.deleteEmailManager(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function readEmailManager(emailManagerId) {
  return new Promise((resolve, reject) => {
    const req = new EmailManager();
    req.setEmailManagerId(emailManagerId);

    service.readEmailManager(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}
