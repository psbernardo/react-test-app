import {
  ListUserRoleRequest,
  AddRoleRequest,
  RoleServiceClient,
  SaveRoleRequest,
  DeleteRoleRequest,
  Role,
} from '../proto/usrpb/role_grpc_web_pb';

import { auth } from '../lib/auth/Auth';
const service = new RoleServiceClient(
  window.env.GRPC_ENDPOINT,
  {},
  { ...auth }
);

export async function listUserRole(role) {
  return new Promise((resolve, reject) => {
    const req = new ListUserRoleRequest();
    req.setRole(role);

    service.listUserRole(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function listRoles() {
  return new Promise((resolve, reject) => {
    const req = new ListUserRoleRequest();

    service.listRoles(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function addRole(role) {
  return new Promise((resolve, reject) => {
    const req = new AddRoleRequest();
    req.setRole(role);

    service.addRole(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function saveRoles(rolevalue, rows) {
  return new Promise((resolve, reject) => {
    let roles = [];
    rows.forEach((row) => {
      let role = new Role();
      role.setRole(rolevalue);
      role.setService(row.service);
      role.setRead(row.read);
      role.setWrite(row.write);
      role.setDownload(row.download);
      roles.push(role);
    });

    const req = new SaveRoleRequest();
    req.setRolesList(roles);

    service.saveRoles(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function deleteRole(role) {
  return new Promise((resolve, reject) => {
    const req = new DeleteRoleRequest();
    req.setRole(role);
    service.deleteRole(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}
