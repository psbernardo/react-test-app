import { notifyError } from 'components/Notification/Notification';
import {
  PhysicalCert,
  UpdatePhysicalCertRequest,
  CreatePhysicalCertRequest,
  EmptyRequest,
  ListPhysicalCertRequest,
  DeletePhysicalCertRequest,
  PhysicalCertServiceClient,
  ListLocationRequest,
  Location,
} from '../proto/physicalcertpb/physicalcert_grpc_web_pb';

import { auth } from '../lib/auth/Auth';
import { stringToProtoDate, objectToProtoDate } from './ConvertService';
const service = new PhysicalCertServiceClient(
  window.env.GRPC_ENDPOINT,
  {},
  { ...auth }
);

function convertLocationToPb(locations) {
  let reqLocations = [];
  for (let i = 0; i < locations.length; i++) {
    const loc = new Location();
    loc.setPhysicalCertId(locations[i].physicalCertId);
    loc.setLocationId(locations[i].locationId);
    loc.setUserName(locations[i].userName);
    loc.setSystemDate(objectToProtoDate(locations[i].systemDate));
    loc.setLocationCode(locations[i].locationCode);
    loc.setLocation(locations[i].location);
    loc.setQty(locations[i].qty + '');
    reqLocations.push(loc);
  }

  return reqLocations;
}

export async function createPhysicalCert(param, locations) {
  return new Promise((resolve, reject) => {
    const req = new CreatePhysicalCertRequest();
    const pc = new PhysicalCert();
    pc.setPhysicalCertId(param.physicalCertId);
    pc.setUserName(param.userName);
    pc.setSystemDate(stringToProtoDate(param.systemDate));
    pc.setPhysicalCertNo(param.physicalCertNo);
    pc.setQty(param.qty);
    pc.setFees(param.fees);
    pc.setSymbol(param.symbol);
    pc.setCusip(param.cusip);
    pc.setSymbolDescription(param.symbolDescription);
    pc.setDtcEligible(param.dtcEligible);
    pc.setCorrespondent(param.correspondent);
    pc.setOffice(param.office);
    pc.setAccountNo(param.accountNo);
    pc.setSubAccountNo(param.subAccountNo);
    pc.setMarginType(param.marginType);
    pc.setStatus(param.status);
    pc.setReceiptTrackingNo(param.receiptTrackingNo);
    pc.setReceivedBy(param.receivedBy);
    pc.setReceivedDate(stringToProtoDate(param.receivedDate));
    pc.setSendTrackingNo(param.sendTrackingNo);
    pc.setSentBy(param.sentBy);
    pc.setSentDate(stringToProtoDate(param.sentDate));
    pc.setTransferAgentId(param.transferAgentId);
    pc.setAgentName(param.agentName);
    pc.setInternalNote(param.internalNote);
    pc.setNote(param.note);
    req.setPhysicalCert(pc);

    const reqLocations = convertLocationToPb(locations);
    req.setLocationsList(reqLocations);

    service.createPhysicalCert(req, {}, (error, response) => {
      if (error) {
        notifyError(error.message);
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function getNewIdPhysicalCert() {
  return new Promise((resolve, reject) => {
    const req = new EmptyRequest();

    service.getNewIdPhysicalCert(req, {}, (error, response) => {
      if (error) {
        notifyError(error.message);
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function updatePhysicalCert(param, locations) {
  return new Promise((resolve, reject) => {
    const req = new UpdatePhysicalCertRequest(param);

    req.setPhysicalCertId(param.physicalCertId);
    req.setStatus(param.status);
    req.setReceiptTrackingNo(param.receiptTrackingNo);
    req.setReceivedBy(param.receivedBy);
    req.setReceivedDate(stringToProtoDate(param.receivedDate));
    req.setSendTrackingNo(param.sendTrackingNo);
    req.setSentBy(param.sentBy);
    req.setSentDate(stringToProtoDate(param.sentDate));
    req.setTransferAgentId(param.transferAgentId);
    req.setAgentName(param.agentName);
    req.setInternalNote(param.internalNote);
    req.setNote(param.note);

    const reqLocations = convertLocationToPb(locations);
    req.setLocationsList(reqLocations);

    service.updatePhysicalCert(req, {}, (error, response) => {
      if (error) {
        notifyError(error.message);
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function listPhysicalCert(param) {
  return new Promise((resolve, reject) => {
    const req = new ListPhysicalCertRequest();

    req.setFromDate(stringToProtoDate(param.fromDate));
    req.setToDate(stringToProtoDate(param.toDate));
    req.setUserName(param.userName);
    req.setAgentName(param.transferAgent);
    req.setOffice(param.office);
    req.setAccountNo(param.accountNo);
    req.setSubAccountNo(param.subAccountNo);
    req.setMarginType(param.marginType);
    req.setSymbol(param.symbol);
    req.setCorrespondent(param.correspondent);
    req.setCusip(param.cusip);
    req.setStatus(param.status);
    req.setPhysicalCertNo(param.physicalCertNo);
    req.setUserId(param.userId);

    service.listPhysicalCert(req, {}, (error, response) => {
      if (error) {
        notifyError(error.message);
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function deletePhysicalCert(id) {
  return new Promise((resolve, reject) => {
    let req = new DeletePhysicalCertRequest();
    req.setPhysicalCertId(id);

    service.deletePhysicalCert(req, {}, (error, response) => {
      if (error) {
        notifyError(error.message);
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function listLocation(physicalCertId) {
  return new Promise((resolve, reject) => {
    const req = new ListLocationRequest();

    req.setPhysicalCertId(physicalCertId);
    service.listLocation(req, {}, (error, response) => {
      if (error) {
        notifyError(error.message);
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}
