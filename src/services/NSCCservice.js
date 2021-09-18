import {
  NsccServiceClient,
  ListNsccRequest,
  CreateNsccRequest,
  UpdateNsccRequest,
  DeleteNsccRequest,
} from '../proto/trnspb/nscc_grpc_web_pb';
import { notifyError } from 'components/Notification/Notification';
import { stringToProtoDate } from './ConvertService';
import { auth } from '../lib/auth/Auth';

const service = new NsccServiceClient(
  window.env.GRPC_ENDPOINT,
  {},
  { ...auth }
);

export async function listNscc(param) {
  return new Promise((resolve, reject) => {
    let req = new ListNsccRequest();
    req.setDateType(param.dateType);
    req.setFromDate(stringToProtoDate(param.fromDate));
    req.setToDate(stringToProtoDate(param.toDate));
    req.setCorrespondent(param.correspondent);
    req.setSymbol(param.symbol);
    req.setCusip(param.cusip);
    req.setExecBroker(param.execBroker);
    req.setContraExecBroker(param.contraExecBroker);

    service.listNscc(req, {}, (error, response) => {
      // console.log(error, response);
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function createNscc(param) {
  return new Promise((resolve, reject) => {
    const req = new CreateNsccRequest();
    req.setTradeDate(stringToProtoDate(param.tradeDate));
    req.setSettleDate(stringToProtoDate(param.settleDate));
    req.setSubmitterParticipantNo(param.submitterParticipantNo);
    req.setSettleType(param.settleType);
    req.setExecBroker(param.execBroker);
    req.setExecBrokerNo(param.execBrokerNo);
    req.setContraExecBroker(param.contraExecBroker);
    req.setContraExecBrokerNo(param.contraExecBrokerNo);
    req.setCusip(param.cusip);
    req.setSymbol(param.symbol);
    req.setCurrencyCode(param.currencyCode);
    req.setQty(param.qty);
    req.setPrice(param.price);
    req.setCommission(param.commission);
    req.setTaxes(param.taxes);
    req.setFees(param.fees);
    req.setAccruedInterest(param.accruedInterest);
    req.setNetAmount(param.netAmount);
    req.setGrossAmount(param.grossAmount);
    req.setSide(param.side);
    service.createNscc(req, {}, (error, response) => {
      if (error) {
        notifyError(error.message);
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function updateNscc(param) {
  console.log(param);
  return new Promise((resolve, reject) => {
    const req = new UpdateNsccRequest();
    req.setNsccId(param.nsccId);
    req.setTradeDate(stringToProtoDate(param.tradeDate));
    req.setSettleDate(stringToProtoDate(param.settleDate));
    req.setSubmitterParticipantNo(param.submitterParticipantNo);
    req.setSettleType(param.settleType);
    req.setExecBroker(param.execBroker);
    req.setExecBrokerNo(param.execBrokerNo);
    req.setContraExecBroker(param.contraExecBroker);
    req.setContraExecBrokerNo(param.contraExecBrokerNo);
    req.setSymbol(param.symbol);
    req.setCusip(param.cusip);
    req.setCurrencyCode(param.currencyCode);
    req.setQty(param.qty);
    req.setPrice(param.price);
    req.setCommission(param.commission);
    req.setTaxes(param.taxes);
    req.setFees(param.fees);
    req.setAccruedInterest(param.accruedInterest);
    req.setNetAmount(param.netAmount);
    req.setGrossAmount(param.grossAmount);
    req.setSide(param.side);

    service.updateNscc(req, {}, (error, response) => {
      if (error) {
        notifyError(error.message);
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function deleteNscc(id) {
  return new Promise((resolve, reject) => {
    let req = new DeleteNsccRequest();
    req.setNsccId(id);
    service.deleteNscc(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}
