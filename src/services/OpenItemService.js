import {
  OpenItemServiceClient,
  ListOpenItemRequest,
  ListOpenItemDetailsRequest,
  EditOpenItemRequest,
  SendDORequest,
  RecapRequest,
  EditStatusRequest,
} from '../proto/dtccpb/openitem_grpc_web_pb';
import { objectToProtoDate, stringToProtoDate } from './ConvertService';
import { auth } from '../lib/auth/Auth';

const service = new OpenItemServiceClient(
  window.env.GRPC_ENDPOINT,
  {},
  { ...auth }
);

export async function listOpenItem(param) {
  return new Promise((resolve, reject) => {
    let req = new ListOpenItemRequest();
    req.setSettleDate(stringToProtoDate(param.settleDate));
    req.setAccountNo(param.accountNo);
    req.setSymbol(param.symbol);
    req.setContraBroker(param.contraBrokerCode);
    req.setCusip(param.cusip);
    req.setStatus(param.status);
    service.listOpenItem(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function listOpenItemDetails(param) {
  return new Promise((resolve, reject) => {
    let req = new ListOpenItemDetailsRequest();
    req.setSettleDate(objectToProtoDate(param.settleDate));
    req.setOriginalCusip(param.originalCusip);
    service.listOpenItemDetails(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        console.log(response.toObject())
        resolve(response.toObject());
        
      }
    });
  });
}

export async function editOpenItem(param) {
  return new Promise((resolve, reject) => {
    let req = new EditOpenItemRequest();
    req.setOpenItemId(param.openItemId);
    req.setExecessQty(param.execessQty);
    req.setNote(param.note);
    req.setStatus(param.status);
    service.editOpenItem(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function sendDO(param) {
  return new Promise((resolve, reject) => {
    let req = new SendDORequest();
    req.setSettleDate(stringToProtoDate(param.settleDate));
    service.sendDO(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function recap(param) {
  return new Promise((resolve, reject) => {
    let req = new RecapRequest();
    req.setSettleDate(stringToProtoDate(param.settleDate));
    service.recap(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function editOpenItemStatus(id, param) {
  return new Promise((resolve, reject) => {
    let req = new EditStatusRequest();
    req.setOpenItemId(id);
    req.setStatus(param.status);
    service.editStatus(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}
