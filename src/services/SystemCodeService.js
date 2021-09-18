import {
  SystemCode,
  DeleteSystemCodeRequest,
  SystemCodeServiceClient,
} from '../proto/admpb/systemcode_grpc_web_pb';
import { notifyError } from 'components/Notification/Notification';
import { auth } from '../lib/auth/Auth';

const service = new SystemCodeServiceClient(
  window.env.GRPC_ENDPOINT,
  {},
  { ...auth }
);

const requestParameter = (param) => {
  let req = new SystemCode();
  req.setSystemCodeId(param.systemCodeId);
  req.setType(param.type);
  req.setSubType(param.subType);
  req.setCode(param.code);
  req.setDescription(param.description);
  req.setNote(param.note);

  return req;
};

export async function createSystemCode(param) {
  return new Promise((resolve, reject) => {
    const req = requestParameter(param);
    service.createSystemCode(req, {}, (error, response) => {
      if (error) {
        notifyError(error.message);
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function listSystemCode(param) {
  return new Promise((resolve, reject) => {
    const req = requestParameter(param);

    service.listSystemCode(req, {}, (error, response) => {
      if (error) {
        notifyError(error.message);
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function deleteSystemCode(param) {
  return new Promise((resolve, reject) => {
    const req = new DeleteSystemCodeRequest();
    req.setSystemCodeId(param);

    service.deleteSystemCode(req, {}, (error, response) => {
      if (error) {
        notifyError(error.message);
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function updateSystemCode(param) {
  return new Promise((resolve, reject) => {
    const req = requestParameter(param);

    service.updateSystemCode(req, {}, (error, response) => {
      if (error) {
        notifyError(error.message);
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function readSystemCode(param) {
  return new Promise((resolve, reject) => {
    const req = requestParameter(param);
    
    service.readSystemCode(req, {}, (error, response) => {
      if (error) {
        notifyError(error.message);
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

// const validate = (error, response) => {
//     if(error) {
//         notifyError(error.message);
//         reject(error)
//     } else {
//         resolve(response.toObject());
//     }
// }
