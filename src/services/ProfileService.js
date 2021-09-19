import { createSelector } from 'reselect'; //memoization
import {
  ReadProfileRequest,
  ProfileServiceClient,
  SettleDateRequest,
} from '../proto/admpb/profile_grpc_web_pb';
import { auth } from '../lib/auth/Auth';
import { padString, stringToProtoDate } from './ConvertService';
const {REACT_APP_GRPC_ENDPOINT} = process.env;
const service = new ProfileServiceClient(
  REACT_APP_GRPC_ENDPOINT,
  {},
  { ...auth }
);

async function readProfilePromise() {
  return new Promise((resolve, reject) => {
    service.readProfile(new ReadProfileRequest(), {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

//memoization -  cached result when the same inputs occur again
export const readProfile = createSelector(
  () =>
    (async () => {
      const { profile } = await readProfilePromise();
      return profile;
    })(),
  (profile) => profile
);

const getDate = async (type) => {
  const profile = await readProfile();

  const { year, month, day } = profile[type];
  const m = padString(month, '0', 2);
  const d = padString(day, '0', 2);

  return `${year}-${m}-${d}`;
};

const getValue = async (type) => {
  const profile = await readProfile();
  return profile[type];
};

async function getSettleDatePromise(tradate) {
  return new Promise((resolve, reject) => {
    let req = new SettleDateRequest();
    req.setTradeDate(stringToProtoDate(tradate));
    service.getSettleDate(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

//memoization -  cached result when the same inputs occur again
export const getSettleDateProfile = createSelector(
  (tradeDate) =>
    (async () => {
      const { profile } = await getSettleDatePromise(tradeDate);
      return profile;
    })(),
  (profile) => profile
);

const getSettleDateByTradate = async (tradeDate) => {
  const profile = await getSettleDateProfile(tradeDate);

  const { year, month, day } = profile['settleDate'];
  const m = padString(month, '0', 2);
  const d = padString(day, '0', 2);

  return `${year}-${m}-${d}`;
};

export async function getTradeDate() {
  return await getDate('tradeDate');
}

export async function getSettleDate() {
  return await getDate('settleDate');
}

export async function getSystemDate() {
  return await getDate('systemDate');
}

export async function getPreviousDate() {
  return await getDate('previousDate');
}

export async function getSettleDateTradate(tradeDate) {
  return await getSettleDateByTradate(tradeDate);
}

export async function getParticipationNo() {
  return await getValue('participantNo');
}

export async function getCorrespondent() {
  return await getValue('correspondent');
}
