import {
  UserAccessServiceClient,
  ListUserAccessRequest,
  UserAccess,
} from '../proto/usrpb/useraccess_grpc_web_pb';
import { auth } from '../lib/auth/Auth';

const service = new UserAccessServiceClient(
  REACT_APP_GRPC_ENDPOINT,
  {},
  { ...auth }
);

export async function listUserAccess(userId) {
  return new Promise((resolve, reject) => {
    let req = new ListUserAccessRequest();
    req.setUserId(userId);

    service.listUserAccess(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject().userAccessesList);
      }
    });
  });
}

export async function saveUserAccess(param, newAccessType) {
  return new Promise((resolve, reject) => {
    let req = new UserAccess();
    req.setUserId(param.userId);
    req.setAccess(newAccessType);
    req.setPageId(param.pageId);
    req.setMenu(param.menu);
    req.setSubMenu(param.subMenu);
    req.setPageName(param.pageName);

    service.saveUserAccess(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}
