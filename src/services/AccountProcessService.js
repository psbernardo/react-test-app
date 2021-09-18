import { notifyError } from 'components/Notification/Notification';
import {
    AccountProcess,
    AccountProcessServiceClient,
    ListAccountProcessRequest,
} from '../proto/accountpb/accountprocess_grpc_web_pb';
import { objectToProtoDate, stringToProtoDate } from './ConvertService';
import { auth } from '../lib/auth/Auth';
const service = new AccountProcessServiceClient(
  window.env.GRPC_ENDPOINT,
  {},
  { ...auth }
);

export async function createAccountProcess(param,ref) {
    return new Promise((resolve, reject) => {
    const req = ToAccountProcess(param,ref);
      service.createAccountProcess(req, {}, (error, response) => {
        if (error) {
          reject(error);
        } else {
          resolve(response.toObject());
        }
      });
    });
  }

  
export async function updateAccountProcess(param) {
    return new Promise((resolve, reject) => {
    const req = ToAccountProcess(param);
      service.updateAccountProcess(req, {}, (error, response) => {
        if (error) {
          reject(error);
        } else {
          resolve(response.toObject());
        }
      });
    });
  }


  export async function listAccountProcess(params) {
    return new Promise((resolve, reject) => {
        let req = new ListAccountProcessRequest();
        req.setCorrespondent(params.correspondent);
        req.setBranch(params.branch);
        req.setAccountNo(params.accountNo);
        req.setMasterAccountNo(params.masterAccountNo);
        req.setRep(params.rep);
        req.setProcess(params.process);
        req.setStatus(params.status);
      service.listAccountProcess(req, {}, (error, response) => {
        if (error) {
          reject(error);
        } else {
          resolve(response.toObject());
        }
      });
    });
  }
  
  


const  ToAccountProcess = (params,ref) => {
    let req = new AccountProcess();
    req.setProcessId(params.processId);
    req.setCorrespondent(params.correspondent);
    req.setBranch(params.branch);
    req.setAccountNo(params.accountNo);
    req.setMasterAccountNo(params.masterAccountNo);
    req.setRep(params.rep);
    req.setProcess(params.process);
    if (ref.note === "Date Range") {
      req.setFromDate(stringToProtoDate(params.fromDate));
      req.setToDate(stringToProtoDate(params.toDate));
    }
 
    req.setAmt(params.amt);
    req.setRate(params.rate);
    req.setQty(params.qty);
    req.setStatus(params.status);
    req.setNote(params.note);
    req.setType(params.type);
    return req;
}
