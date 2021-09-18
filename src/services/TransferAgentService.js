import { notifyError } from 'components/Notification/Notification';
import {
  CreateTransferAgentRequest,
  UpdateTransferAgentRequest,
  ListTransferAgentRequest,
  DeleteTransferAgentRequest,
  TransferAgentServiceClient,
  ReadTransferAgentRequest,
} from '../proto/reportpb/transferagent_grpc_web_pb';

import { auth } from '../lib/auth/Auth';
const service = new TransferAgentServiceClient(
  window.env.GRPC_ENDPOINT,
  {},
  { ...auth }
);

export async function createTransferAgent(param) {
  return new Promise((resolve, reject) => {
    const req = new CreateTransferAgentRequest(param);
    req.setAgentName(param.agentName);
    req.setAddress(param.address);
    req.setCity(param.city);
    req.setState(param.state);
    req.setZipCode(param.zipCode);
    req.setCountry(param.country);
    req.setContactNo(param.contactNo);
    req.setNote(param.note);

    service.createTransferAgent(req, {}, (error, response) => {
      if (error) {
        notifyError(error.message);
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function updateTransferAgent(param) {
  return new Promise((resolve, reject) => {
    const req = new UpdateTransferAgentRequest(param);

    req.setTransferAgentId(param.transferAgentId);
    req.setAgentName(param.agentName);
    req.setAddress(param.address);
    req.setCity(param.city);
    req.setState(param.state);
    req.setZipCode(param.zipCode);
    req.setCountry(param.country);
    req.setContactNo(param.contactNo);
    req.setNote(param.note);

    service.updateTransferAgent(req, {}, (error, response) => {
      if (error) {
        notifyError(error.message);
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function listTransferAgent() {
  return new Promise((resolve, reject) => {
    const req = new ListTransferAgentRequest();
    service.listTransferAgent(req, {}, (error, response) => {
      if (error) {
        notifyError(error.message);
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function deleteTransferAgent(id) {
  return new Promise((resolve, reject) => {
    let req = new DeleteTransferAgentRequest();
    req.setTransferAgentId(id);

    service.deleteTransferAgent(req, {}, (error, response) => {
      if (error) {
        notifyError(error.message);
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function readTransferAgent(id) {
  return new Promise((resolve, reject) => {
    let req = new ReadTransferAgentRequest();
    req.setTransferAgentId(id);

    service.readTransferAgent(req, {}, (error, response) => {
      if (error) {
        notifyError(error.message);
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}
