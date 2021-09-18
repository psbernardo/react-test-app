import { notifyError } from 'components/Notification/Notification';
import {
  Template,
  ListTemplateRequest,
  TemplateServiceClient,
  DeleteTemplateRequest,
} from '../proto/reportpb/template_grpc_web_pb';

import { auth } from '../lib/auth/Auth';

const service = new TemplateServiceClient(
  window.env.GRPC_ENDPOINT,
  {},
  { ...auth }
);

export async function createTemplate(param) {
  return new Promise((resolve, reject) => {
    const req = new Template();
    req.setTemplateId(param.templateId);
    req.setCorrespondent(param.correspondent);
    req.setAddress(param.address);
    req.setCity(param.city);
    req.setState(param.state);
    req.setZip(param.zip);
    req.setCountry(param.country);
    req.setPhoto(param.photo);
    req.setStatus('Active');

    service.createTemplate(req, {}, (error, response) => {
      if (error) {
        notifyError(error.message);
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function updateTemplate(param) {
  return new Promise((resolve, reject) => {
    const req = new Template();
    req.setTemplateId(param.templateId);
    req.setCorrespondent(param.correspondent);
    req.setAddress(param.address);
    req.setCity(param.city);
    req.setState(param.state);
    req.setZip(param.zip);
    req.setCountry(param.country);
    req.setPhoto(param.photo);
    req.setStatus(param.status);

    service.updateTemplate(req, {}, (error, response) => {
      if (error) {
        notifyError(error.message);
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function listTemplate(param) {
  return new Promise((resolve, reject) => {
    const req = new ListTemplateRequest();
    req.setCorrespondent(param.correspondent);
    req.setStatus(param.status);

    service.listTemplate(req, {}, (error, response) => {
      if (error) {
        notifyError(error.message);
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function deleteTemplate(id) {
  return new Promise((resolve, reject) => {
    let req = new DeleteTemplateRequest();
    req.setTemplateId(id);

    service.deleteTemplate(req, {}, (error, response) => {
      if (error) {
        notifyError(error.message);
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}
