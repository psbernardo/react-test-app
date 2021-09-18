import {
  ListDataDictionaryRequest,
  UpdateDataDictionaryRequest,
  DataDictionaryServiceClient,
} from '../proto/admpb/datadictionary_grpc_web_pb';
import { notifyError } from 'components/Notification/Notification';
import { auth } from '../lib/auth/Auth';

const service = new DataDictionaryServiceClient(
  window.env.GRPC_ENDPOINT,
  {},
  { ...auth }
);

export async function listDataDictionary(param) {
  return new Promise((resolve, reject) => {
    const req = new ListDataDictionaryRequest();
    req.setField(param.field);

    service.listDataDictionary(req, {}, (error, response) => {
      if (error) {
        notifyError(error.message);
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function updateDataDictionary(param) {
  return new Promise((resolve, reject) => {
    const req = new UpdateDataDictionaryRequest();
    req.setFieldId(param.fieldId);
    req.setSampleValue(param.sampleValue);
    req.setDescription(param.description);

    service.updateDataDictionary(req, {}, (error, response) => {
      if (error) {
        notifyError(error.message);
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}
