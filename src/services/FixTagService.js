import {
  FixTagServiceClient,
  FixTag,
  DeleteFixTagRequest,
} from '../proto/fixpb/tag_grpc_web_pb';
import { auth } from '../lib/auth/Auth';

const service = new FixTagServiceClient(
  window.env.GRPC_ENDPOINT,
  {},
  {
    ...auth,
  }
);

const requestParameter = (param) => {
  let req = new FixTag();
  req.setTagId(param.tagId);
  req.setReport(param.report);
  req.setFixTag(param.fixTag);
  req.setFieldName(param.fieldName);
  req.setDescription(param.description);
  req.setUiDescription(param.uiDescription);
  req.setIdentityCol(param.identityCol);
  req.setTableName(param.tableName);
  req.setColumnName(param.columnName);
  req.setOrdinalPosition(param.ordinalPosition);
  req.setIdentityValue(param.identityValue);

  return req;
};

export async function createFixTag(param) {
  return new Promise((resolve, reject) => {
    const req = requestParameter(param);
    service.createFixTag(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function updateFixTag(param) {
  return new Promise((resolve, reject) => {
    const req = requestParameter(param);
    service.updateFixTag(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function listFixTagSetup(param) {
  return new Promise((resolve, reject) => {
    const req = requestParameter(param);
    service.listFixTagSetup(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function listFixTagValue(param) {
  return new Promise((resolve, reject) => {
    const req = requestParameter(param);
    service.listFixTagValue(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function deleteFixTag(id) {
  return new Promise((resolve, reject) => {
    const req = new DeleteFixTagRequest();
    req.setTagId(id);
    service.deleteFixTag(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function processFixTag(param) {
  return new Promise((resolve, reject) => {
    const req = requestParameter(param);
    service.processFixTag(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}
