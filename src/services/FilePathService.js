import { createSelector } from 'reselect'; //memoization
import {
  FilePathServiceClient,
  FilePath,
  DeleteFilePathRequest,
  LazyLoadRequest,
} from '../proto/admpb/filepath_grpc_web_pb';
import { auth } from '../lib/auth/Auth';

const service = new FilePathServiceClient(
  window.env.GRPC_ENDPOINT,
  {},
  { ...auth }
);

const requestParameter = (param) => {
  let req = new FilePath();
  req.setFilePathId(param.filePathId);
  req.setType(param.type);
  req.setSubType(param.subType);
  req.setFilePath(param.filePath);
  req.setFileNameFormat(param.fileNameFormat);

  return req;
};

export async function createFilePath(param) {
  return new Promise((resolve, reject) => {
    const req = requestParameter(param);
    service.createFilePath(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function updateFilePath(param) {
  return new Promise((resolve, reject) => {
    const req = requestParameter(param);
    service.updateFilePath(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function listFilePath(param) {
  return new Promise((resolve, reject) => {
    const req = requestParameter(param);
    service.listFilePath(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function deleteFilePath(id) {
  return new Promise((resolve, reject) => {
    const req = new DeleteFilePathRequest();
    req.setFilePathId(id);
    service.deleteFilePath(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

//memoization -  cached result when the same inputs occur again
export const lazyLoadType = createSelector(
  (key, field) => ({
    key: key,
    field: field,
  }),
  (param) => (async () => await lazyLoadTypePromise(param, 100))()
);

const lazyLoadTypePromise = async (param, limit) => {
  return new Promise((resolve, reject) => {
    let req = new LazyLoadRequest();
    req.setLimit(limit);
    req.setKey(param.key);
    req.setField(param.field);

    service.lazyLoadType(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
};
