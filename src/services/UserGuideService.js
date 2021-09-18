import {
  CreateUserGuideRequest,
  ReadUserGuideRequest,
  UpdateUserGuideRequest,
  ListUserGuideRequest,
  DeleteUserGuideRequest,
  UserGuideServiceClient,
  GetNewUserGuideIdRequest,
} from '../proto/admpb/userguide_grpc_web_pb';
import authSvc from './AuthService';
import { notifyError } from 'components/Notification/Notification';
import { stringToProtoDate } from './ConvertService';
import moment from 'moment-timezone';
import { auth } from '../lib/auth/Auth';

const service = new UserGuideServiceClient(
  window.env.GRPC_ENDPOINT,
  {},
  { ...auth }
);

const user = authSvc.getCurrentUser();

export async function createUserGuide(param) {
  return new Promise((resolve, reject) => {
    const req = new CreateUserGuideRequest();
    req.setPageId(parseInt(param.pageId));
    req.setPageName(param.pageName);
    req.setContent(param.content);
    req.setModifiedBy(user.Name);
    req.setModifiedDate(
      stringToProtoDate(moment(new Date()).format('yyyy-MM-DD'))
    );
    req.setGridName('');
    req.setTableSchema('');

    service.createUserGuide(req, {}, (error, response) => {
      if (error) {
        notifyError(error.message);
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function readUserGuide(id) {
  return new Promise((resolve, reject) => {
    const req = new ReadUserGuideRequest();
    req.setPageId(id);

    service.readUserGuide(req, {}, (error, response) => {
      if (error) {
        resolve({ userGuide: { userGuideId: 0 } });
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function updateUserGuide(param) {
  return new Promise((resolve, reject) => {
    const req = new UpdateUserGuideRequest();
    req.setUserGuideId(param.userGuideId);
    req.setPageId(parseInt(param.pageId));
    req.setPageName(param.pageName);
    req.setContent(param.content);
    req.setModifiedBy(user.Name);
    req.setModifiedDate(
      stringToProtoDate(moment(new Date()).format('yyyy-MM-DD'))
    );
    req.setGridName('');
    req.setTableSchema('');

    service.updateUserGuide(req, {}, (error, response) => {
      if (error) {
        notifyError(error.message);
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function deleteUserGuide(id) {
  return new Promise((resolve, reject) => {
    const req = new DeleteUserGuideRequest();
    req.setUserGuideId(id);

    service.deleteUserGuide(req, {}, (error, response) => {
      if (error) {
        notifyError(error.message);
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function listUserGuide(param) {
  return new Promise((resolve, reject) => {
    const req = new ListUserGuideRequest();
    req.setPageId(param.pageId ? parseInt(param.pageId) : 0);
    req.setContent(param.content);

    service.listUserGuide(req, {}, (error, response) => {
      if (error) {
        notifyError(error.message);
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function getNewUserGuideId() {
  return new Promise((resolve, reject) => {
    let req = new GetNewUserGuideIdRequest();

    service.getNewUserGuideId(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}
