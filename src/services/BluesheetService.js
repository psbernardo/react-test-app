import {
  BluesheetServiceClient,
  CreateBluesheetRequest,
  UpdateBlueSheetRequest,
  ListBluesheetRequest,
  ListSymbolCusipRequest,
  GetNewBluesheetIdRequest,
} from '../proto/blusheetpb/bluesheet_grpc_web_pb';
import { auth } from '../lib/auth/Auth';
import { stringToProtoDate } from './ConvertService';
import { notifyError } from 'components/Notification/Notification';

const service = new BluesheetServiceClient(
  window.env.GRPC_ENDPOINT,
  {},
  { ...auth }
);

export async function listBluesheet(param) {
  return new Promise((resolve, reject) => {
    let req = new ListBluesheetRequest();
    req.setStatus(param.status);
    req.setProcessDate(stringToProtoDate(param.processDate));
    req.setInquiryDate(stringToProtoDate(param.inquiryDate));
    req.setInquiryTrackingNo(param.inquiryTrackingNo);
    req.setExchangeCode(param.exchangeCode);
    req.setRequestAnalyst(param.requestAnalyst);
    req.setSymbol(param.symbol);
    req.setCusip(param.cusip);

    service.listBluesheet(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function createBluesheet(param) {
  return new Promise((resolve, reject) => {
    const req = new CreateBluesheetRequest();
    req.setBluesheetId(param.bluesheetId);
    req.setStatus(param.status);
    req.setInquiryDate(stringToProtoDate(param.inquiryDate));
    req.setInquiryTrackingNo(param.inquiryTrackingNo);
    req.setExchangeCode(param.exchangeCode);
    req.setSymbol(param.symbol);
    req.setCusip(param.cusip);
    req.setRequestAnalyst(param.requestAnalyst);
    req.setFromDate(stringToProtoDate(param.fromDate));
    req.setToDate(stringToProtoDate(param.toDate));
    req.setNote(param.note);

    service.createBluesheet(req, {}, (error, response) => {
      if (error) {
        notifyError(error.message);
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function updateBlueSheet(param) {
  return new Promise((resolve, reject) => {
    const req = new UpdateBlueSheetRequest();
    req.setBluesheetId(param.bluesheetId);
    req.setStatus(param.status);
    req.setInquiryDate(stringToProtoDate(param.inquiryDate));
    req.setInquiryTrackingNo(param.inquiryTrackingNo);
    req.setExchangeCode(param.exchangeCode);
    req.setSymbol(param.symbol);
    req.setCusip(param.cusip);
    req.setRequestAnalyst(param.requestAnalyst);
    req.setFromDate(stringToProtoDate(param.fromDate));
    req.setToDate(stringToProtoDate(param.toDate));
    req.setNote(param.note);

    service.updateBlueSheet(req, {}, (error, response) => {
      if (error) {
        notifyError(error.message);
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function listSymbolCusip(symbol, inquiryDate) {
  return new Promise((resolve, reject) => {
    const req = new ListSymbolCusipRequest();
    req.setSymbol(symbol);
    req.setInquiryDate(stringToProtoDate(inquiryDate));

    service.listSymbolCusip(req, {}, (error, response) => {
      if (error) {
        notifyError(error.message);
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function getNewBluesheetId() {
  return new Promise((resolve, reject) => {
    let req = new GetNewBluesheetIdRequest();

    service.getNewBluesheetId(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}
