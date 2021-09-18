import {
  CreateFieldDefinitionRequest,
  ReadFieldDefinitionRequest,
  UpdateFieldDefinitionRequest,
  ListFieldDefinitionRequest,
  DeleteFieldDefinitionRequest,
  FieldDefinitionServiceClient,
} from '../proto/admpb/fielddefinition_grpc_web_pb';
import { notifyError } from 'components/Notification/Notification';
import { auth } from '../lib/auth/Auth';

const service = new FieldDefinitionServiceClient(
  window.env.GRPC_ENDPOINT,
  {},
  { ...auth }
);

export async function createFieldDefinition(param) {
  return new Promise((resolve, reject) => {
    const req = new CreateFieldDefinitionRequest();
    req.setUserGuideId(param.userGuideId);
    req.setFieldId(param.fieldId);

    service.createFieldDefinition(req, {}, (error, response) => {
      if (error) {
        notifyError(error.message);
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function readFieldDefinition(id) {
  return new Promise((resolve, reject) => {
    const req = new ReadFieldDefinitionRequest();
    req.setFieldDefinitionId(id);

    service.readFieldDefinition(req, {}, (error, response) => {
      if (error) {
        resolve({ userGuide: { userGuideId: 0 } });
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function updateFieldDefinition(param) {
  return new Promise((resolve, reject) => {
    const req = new UpdateFieldDefinitionRequest();
    req.setFieldDefinitionId(param.fieldDefinitionId);
    req.setUserGuideId(param.userGuideId);
    req.setSampleValue(param.sampleValue);
    req.setDescription(param.description);
    req.setOrdinalPosition(param.ordinalPosition);

    service.updateFieldDefinition(req, {}, (error, response) => {
      if (error) {
        notifyError(error.message);
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function deleteFieldDefinition(param) {
  return new Promise((resolve, reject) => {
    const req = new DeleteFieldDefinitionRequest();
    req.setFieldDefinitionId(param.fieldDefinitionId);
    req.setUserGuideId(param.userGuideId);
    req.setFieldId(param.fieldId);

    service.deleteFieldDefinition(req, {}, (error, response) => {
      if (error) {
        notifyError(error.message);
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function listFieldDefinition(id, field) {
  return new Promise((resolve, reject) => {
    const req = new ListFieldDefinitionRequest();
    req.setUserGuideId(id);
    req.setField(field);

    service.listFieldDefinition(req, {}, (error, response) => {
      if (error) {
        notifyError(error.message);
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}
