import {
  TableSettings,
  TableSettingsServiceClient,
} from '../proto/admpb/tablesettings_grpc_web_pb';
import {
  notifySuccess,
  notifyError,
} from 'components/Notification/Notification';
import { auth } from '../lib/auth/Auth';

const service = new TableSettingsServiceClient(
  window.env.GRPC_ENDPOINT,
  {},
  { ...auth }
);

const requestParameter = (param) => {
  let req = new TableSettings();
  req.setUsrId(param.userId);
  req.setGridName(param.title);
  req.setVisibleColumns(param.visibleColumns.join(','));
  req.setColumnOrder(param.columnOrder.join(','));

  return req;
};

export async function createTableSettings(param) {
  return new Promise((resolve, reject) => {
    const req = requestParameter(param);

    service.createTableSettings(req, {}, (error, response) => {
      if (error) {
        notifyError(error.message);
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function updateTableSettings(param) {
  return new Promise((resolve, reject) => {
    const req = requestParameter(param);

    service.updateTableSettings(req, {}, (error, response) => {
      if (error) {
        // Create new table settings record as it is not found
        createTableSettings(param);
        reject(error);
      } else {
        resolve(response.toObject());
        notifySuccess('Table has been saved.');
      }
    });
  });
}

export async function readTableSettings(param) {
  return new Promise((resolve, reject) => {
    let req = new TableSettings();
    req.setUsrId(param.userId);
    req.setGridName(param.title);

    service.readTableSettings(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject().tableSetting);
      }
    });
  });
}
