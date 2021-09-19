import {
  Administrator,
  AdministratorServiceClient,
  ListAdministratorRequest,
  DeleteAdministratorRequest,
  ChangePasswordRequest,
  Access,
  ListAccessOptionRequest,
  ListSubAccessOptionRequest,
  EmptyRequest,
} from '../proto/usrpb/administrator_grpc_web_pb';
import { notifyError } from 'components/Notification/Notification';
import { auth } from '../lib/auth/Auth';
const {REACT_APP_GRPC_ENDPOINT} = process.env;
const service = new AdministratorServiceClient(
  REACT_APP_GRPC_ENDPOINT,
  {},
  { ...auth }
);

const requestParameter = (param) => {
  let req = new Administrator();
  req.setUsrId(param.usrId);
  req.setEmail(param.email);
  req.setName(param.name);
  req.setPassword(param.password);
  req.setDefaultAccess(param.defaultAccess);
  req.setMobileNo(param.mobileNo);
  req.setUserType(param.userType);
  req.setStatus(param.status);
  req.setAdmin(param.admin);
  req.setAuthenticationMode(param.authenticationMode);
  if (param.admin != undefined && param.admin) {
    req.setCorrespondent(param.correspondent);
  } else {
    req.setCorrespondent(null);
  }

  return req;
};

export async function createAdministrator(param) {
  return new Promise((resolve, reject) => {
    const req = requestParameter(param);

    service.createAdministrator(req, {}, (error, response) => {
      if (error) {
        notifyError(error.message);
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function listAdministrator(param) {
  return new Promise((resolve, reject) => {
    const req = new ListAdministratorRequest();
    req.setEmail(param.email);
    req.setName(param.name);
    req.setUserType(param.userType);
    req.setStatus(param.status);

    service.listAdministrator(req, {}, (error, response) => {
      if (error) {
        notifyError(error.message);
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function updateAdministrator(param) {
  return new Promise((resolve, reject) => {
    const req = requestParameter(param);
    service.updateAdministrator(req, {}, (error, response) => {
      if (error) {
        notifyError(error.message);
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function deleteAdministrator(id) {
  return new Promise((resolve, reject) => {
    const req = new DeleteAdministratorRequest();
    req.setUserId(id);
    service.deleteAdministrator(req, {}, (error, response) => {
      if (error) {
        notifyError(error.message);
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function changePassword(param) {
  return new Promise((resolve, reject) => {
    const req = new ChangePasswordRequest();
    req.setUsrId(param.usrId);
    req.setOldPassword(param.oldPassword);
    req.setNewPassword(param.newPassword);
    service.changePassword(req, {}, (error, response) => {
      if (error) {
        notifyError(error.message);
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

const accessParameter = (param) => {
  let req = new Access();
  req.setUsrId(param.usrId);
  req.setAccessId(param.accessId);
  req.setAccess(param.access);
  req.setSubAccess(param.subAccess);

  return req;
};

export async function createAccess(param) {
  return new Promise((resolve, reject) => {
    const req = accessParameter(param);
    service.createAccess(req, {}, (error, response) => {
      if (error) {
        notifyError(error.message);
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function updateAccess(param) {
  return new Promise((resolve, reject) => {
    const req = accessParameter(param);
    service.updateAccess(req, {}, (error, response) => {
      if (error) {
        notifyError(error.message);
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function listAccess(param) {
  return new Promise((resolve, reject) => {
    const req = accessParameter(param);
    service.listAccess(req, {}, (error, response) => {
      if (error) {
        notifyError(error.message);
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function listAccessOption(arg) {
  return new Promise((resolve, reject) => {
    const req = new ListAccessOptionRequest();
    req.setSubAccess(arg);
    service.listAccessOption(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function listSubAccessOption(arg) {
  return new Promise((resolve, reject) => {
    const req = new ListSubAccessOptionRequest();
    req.setAccess(arg);
    service.listSubAccessOption(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function listDefaultAccessOption() {
  return new Promise((resolve, reject) => {
    service.listDefaultAccessOption(
      new EmptyRequest(),
      {},
      (error, response) => {
        if (error) {
          reject(error);
        } else {
          resolve(response.toObject());
        }
      }
    );
  });
}
