import {
  TaxRate,
  ListTaxRateRequest,
  DeleteTaxRateRequest,
  TaxRateServiceClient,
} from '../proto/irspb/taxrate_grpc_web_pb';
import { notifyError } from 'components/Notification/Notification';
import { auth } from '../lib/auth/Auth';

const service = new TaxRateServiceClient(
  window.env.GRPC_ENDPOINT,
  {},
  { ...auth }
);

const requestParameter = (param) => {
  let req = new TaxRate();
  req.setTaxRateId(param.taxRateId);
  req.setCountryCode(param.countryCode);
  req.setRate(param.rate);

  return req;
};

export async function createTaxRate(param) {
  return new Promise((resolve, reject) => {
    const req = requestParameter(param);
    service.createTaxRate(req, {}, (error, response) => {
      if (error) {
        notifyError(error.message);
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function updateTaxRate(param) {
  return new Promise((resolve, reject) => {
    const req = requestParameter(param);
    service.updateTaxRate(req, {}, (error, response) => {
      if (error) {
        notifyError(error.message);
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function listTaxRate(param) {
  return new Promise((resolve, reject) => {
    const req = new ListTaxRateRequest();
    req.setCountry(param.country);
    service.listTaxRate(req, {}, (error, response) => {
      if (error) {
        notifyError(error.message);
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function deleteTaxRate(id) {
  return new Promise((resolve, reject) => {
    const req = new DeleteTaxRateRequest();
    req.setTaxRateId(id);
    service.deleteTaxRate(req, {}, (error, response) => {
      if (error) {
        notifyError(error.message);
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}
