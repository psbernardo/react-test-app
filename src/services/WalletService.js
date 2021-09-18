import {
  Wallet,
  ListWalletRequest,
  WalletServiceClient,
  UpdateWalletRequest,
  ListWalletAuditRequest,
} from '../proto/bankpb/wallet_grpc_web_pb';
import { auth } from '../lib/auth/Auth';

const service = new WalletServiceClient(
  window.env.GRPC_ENDPOINT,
  {},
  { ...auth }
);

export async function createWallet(param) {
  return new Promise((resolve, reject) => {
    let req = new Wallet();
    req.setNote(param.note);
    req.setSymbol(param.symbol);
    req.setStatus(param.status);
    req.setWallet(param.wallet);
    req.setAccountNo(param.accountNo);
    req.setAccountId(param.accountId);

    service.createWallet(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function listWallet(param) {
  return new Promise((resolve, reject) => {
    const req = new ListWalletRequest();
    req.setStatus(param.status);
    req.setSecSubType(param.secSubType);
    req.setSymbol(param.symbol);

    service.listWallet(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function updateWallet(param) {
  return new Promise((resolve, reject) => {
    const req = new UpdateWalletRequest();
    req.setWalletId(param.walletId);
    req.setStatus(param.status);
    req.setNote(param.note);

    service.updateWallet(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function listWalletAudit(id) {
  return new Promise((resolve, reject) => {
    const req = new ListWalletAuditRequest();
    req.setWalletId(id);

    service.listWalletAudit(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}
