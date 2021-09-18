import {
  Address,
  AddressServiceClient,
  DeleteAddressRequest,
  BatchCreateAddressRequest,
  ListAddressAuditRequest,
  ListAddressAutoFillRequest,
  ReadAddressRequest,
} from '../proto/accountpb/address_grpc_web_pb';

import { auth } from '../lib/auth/Auth';
const service = new AddressServiceClient(
  window.env.GRPC_ENDPOINT,
  {},
  { ...auth }
);

export async function createAddress(accountId, param, ownerId) {
  return new Promise((resolve, reject) => {
    const req = new Address();

    req.setOwnerId(ownerId);
    req.setAddressId(param.addressId);
    req.setAccountId(accountId);
    req.setAddressType(param.addressType);
    req.setAddress1(param.address1);
    req.setAddress2(param.address2);
    req.setAddress3(param.address3);
    req.setCity(param.city);
    req.setState(param.state);
    req.setZip(param.zip);
    req.setCountry(param.country);
    req.setStatus(param.status);
    req.setImgProofOfAddress(param.imgProofOfAddress);

    service.createAddress(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function updateAddress(accountId, param) {
  return new Promise((resolve, reject) => {
    const req = new Address();
    req.setAddressId(param.addressId);
    req.setOwnerId(param.ownerId);
    req.setAccountId(accountId);
    req.setAddressType(param.addressType);
    req.setAddress1(param.address1);
    req.setAddress2(param.address2);
    req.setAddress3(param.address3);
    req.setCity(param.city);
    req.setState(param.state);
    req.setZip(param.zip);
    req.setCountry(param.country);
    req.setStatus(param.status);
    req.setImgProofOfAddress(param.imgProofOfAddress);

    service.updateAddress(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function deleteAddress(id, ownerId) {
  return new Promise((resolve, reject) => {
    const req = new DeleteAddressRequest();
    req.setOwnerId(ownerId);
    req.setAddressId(id);

    service.deleteAddress(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function listAddress(param) {
  return new Promise((resolve, reject) => {
    const req = new Address();
    req.setAccountId(param.accountId);
    req.setOwnerId(param.ownerId);

    service.listAddress(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function listAddressAudit(id) {
  return new Promise((resolve, reject) => {
    const req = new ListAddressAuditRequest();
    req.setAccountId(id);

    service.listAddressAudit(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export const convertDataToAddressModel = (d) => {
  return {
    correspondent: GetValueByOjbectName('Correspondent', d),
    accountNo: GetValueByOjbectName('Account No', d),
    addressType: GetValueByOjbectName('Address Type', d),
    address1: GetValueByOjbectName('Address 1', d),
    address2: GetValueByOjbectName('Address 2', d),
    address3: GetValueByOjbectName('Address 3', d),
    state: GetValueByOjbectName('State', d),
    city: GetValueByOjbectName('City', d),
    zip: GetValueByOjbectName('Zip Code', d),
    country: GetValueByOjbectName('Country', d),
    error: validateEntries(d),
  };
};

const GetValueByOjbectName = (name, d) => {
  if (Object.prototype.hasOwnProperty.call(d, name)) {
    return d[name];
  }
  return '';
};

export const validateEntries = (d) => {
  if (!GetValueByOjbectName('Address Type', d)) {
    return true;
  }
  if (!GetValueByOjbectName('Address 1', d)) {
    return true;
  }
  if (!GetValueByOjbectName('City', d)) {
    return true;
  }
  if (!GetValueByOjbectName('Country', d)) {
    return true;
  }

  return false;
};

async function executeBatchCreateAddress(req) {
  return new Promise((resolve, reject) => {
    service.batchCreateAddress(req, {}, (error, response) => {
      if (error) {
        console.log(error);
        reject(error);
      } else {
        resolve(response.toObject());
        return response.toObject();
      }
    });
  });
}

export async function batchCreateAddress(param) {
  let listReq = requestAddressParameter(param);
  let batchReq = new BatchCreateAddressRequest();
  batchReq.setAddressList(listReq);
  try {
    const res = await executeBatchCreateAddress(batchReq);
    return res.addressResponsesList;
  } catch (err) {
    console.log(err);
    return err;
  }
}

const requestAddressParameter = (list) => {
  let listReq = [];

  list.forEach(async (row) => {
    let req = new Address();

    req.setAccountNo(row.accountNo);
    req.setCorrespondent(row.correspondent);
    req.setAddressId(row.addressId);
    req.setAddressType(row.addressType);
    req.setAddress1(row.address1);
    req.setAddress2(row.address2);
    req.setAddress3(row.address3);
    req.setCity(row.city);
    req.setState(row.state);
    req.setZip(row.zip);
    req.setCountry(row.country);

    listReq.push(req);
  });

  return listReq;
};

export async function listAddressAutoFill() {
  return new Promise((resolve, reject) => {
    const req = new ListAddressAutoFillRequest();

    service.listAddressAutoFill(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function readAddress(addressId) {
  return new Promise((resolve, reject) => {
    const req = new ReadAddressRequest();
    req.setAddressId(addressId);

    service.readAddress(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}
