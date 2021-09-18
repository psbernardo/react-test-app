/*Service*/
import {
  SetupServiceClient,
  Setup,
  ListSetupRequest,
  ListSurveillanceGroupRequest,
  ListSurveillanceRequest,
} from '../proto/surveillancepb/setup_grpc_web_pb';

import { auth } from '../lib/auth/Auth';

const service = new SetupServiceClient(
  window.env.GRPC_ENDPOINT,
  {},
  { ...auth }
);

export async function listSetup(param) {
  return new Promise((resolve, reject) => {
    const req = new ListSetupRequest();
    req.setPageId(param.pageId);
    req.setPageName(param.pageName);
    req.setStatus(param.status);
    req.setSurveillanceGroup(param.surveillanceGroup);
    req.setSurveillance(param.surveillance);

    service.listSetup(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function createSetup(param) {
  return new Promise((resolve, reject) => {
    let req = new Setup();
    req.setPageId(param.pageId);
    req.setReviewerCount(param.reviewerCount);
    req.setStatus(param.status);
    req.setSurveillanceGroup(param.surveillanceGroup);
    req.setSurveillance(param.surveillance);
    req.setPageName(param.pageName);
    req.setNote(param.note);

    service.createSetup(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function updateSetup(param) {
  return new Promise((resolve, reject) => {
    let req = new Setup();
    req.setSetupId(param.setupId);
    req.setPageId(param.pageId);
    req.setReviewerCount(param.reviewerCount);
    req.setStatus(param.status);
    req.setSurveillanceGroup(param.surveillanceGroup);
    req.setSurveillance(param.surveillance);
    req.setPageName(param.pageName);
    req.setNote(param.note);

    service.updateSetup(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function listSurveillanceGroup(surveillanceGroup) {
  return new Promise((resolve, reject) => {
    const req = new ListSurveillanceGroupRequest();
    req.setSurveillanceGroup(surveillanceGroup);

    service.listSurveillanceGroup(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function listSurveillance(surveillanceGroup, surveillance) {
  return new Promise((resolve, reject) => {
    const req = new ListSurveillanceRequest();
    req.setSurveillance(surveillance);

    service.listSurveillance(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}
