import {
  DividendServiceClient,
  ListDividendRequest,
} from '../proto/reorgpb/dividend_grpc_web_pb';
import { stringToProtoDate } from './ConvertService';
import {
  MergerServiceClient,
  ListMergerRequest,
} from '../proto/reorgpb/merger_grpc_web_pb';

import {
  SpinOffServiceClient,
  ListSpinOffRequest,
} from '../proto/reorgpb/spinoff_grpc_web_pb';

import {
  SplitServiceClient,
  ListSplitRequest,
} from '../proto/reorgpb/split_grpc_web_pb';

import { notifyError } from 'components/Notification/Notification';
import { auth } from '../lib/auth/Auth';

const service = new DividendServiceClient(
  window.env.GRPC_ENDPOINT,
  {},
  { ...auth }
);
const merger = new MergerServiceClient(
  window.env.GRPC_ENDPOINT,
  {},
  { ...auth }
);
const spinoff = new SpinOffServiceClient(
  window.env.GRPC_ENDPOINT,
  {},
  { ...auth }
);
const split = new SplitServiceClient(window.env.GRPC_ENDPOINT, {}, { ...auth });

export async function listDividend(param) {
  return new Promise((resolve, reject) => {
    const req = new ListDividendRequest();
    req.setFromSystemDate(stringToProtoDate(param.fromSystemDate));
    req.setToSystemDate(stringToProtoDate(param.toSystemDate));
    req.setSymbol(param.symbol);

    service.listDividend(req, {}, (error, response) => {
      if (error) {
        notifyError(error.message);
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function listMerger(param) {
  return new Promise((resolve, reject) => {
    const req = new ListMergerRequest();
    req.setFromSystemDate(stringToProtoDate(param.fromSystemDate));
    req.setToSystemDate(stringToProtoDate(param.toSystemDate));
    req.setTargetSymbol(param.symbol);

    merger.listMerger(req, {}, (error, response) => {
      if (error) {
        notifyError(error.message);
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function listSpinOff(param) {
  return new Promise((resolve, reject) => {
    const req = new ListSpinOffRequest();
    req.setFromSystemDate(stringToProtoDate(param.fromSystemDate));
    req.setToSystemDate(stringToProtoDate(param.toSystemDate));
    req.setTargetSymbol(param.symbol);

    spinoff.listSpinOff(req, {}, (error, response) => {
      if (error) {
        notifyError(error.message);
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function listSplit(param) {
  return new Promise((resolve, reject) => {
    const req = new ListSplitRequest();
    req.setFromSystemDate(stringToProtoDate(param.fromSystemDate));
    req.setToSystemDate(stringToProtoDate(param.toSystemDate));
    req.setTargetSymbol(param.symbol);

    split.listSplit(req, {}, (error, response) => {
      if (error) {
        notifyError(error.message);
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}
