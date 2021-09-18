/*Service*/
import {
  AverageDailyVolumeServiceClient,
  ListAverageDailyVolumeRequest,
  ReadAverageDailyVolumeRequest,
} from '../proto/trademonitoringpb/averagedailyvolume_grpc_web_pb';
import {
  objectToProtoDate,
  objectToProtoTimeStamp,
  stringToProtoDate,
} from './ConvertService';
import { auth } from '../lib/auth/Auth';

const service = new AverageDailyVolumeServiceClient(
  window.env.GRPC_ENDPOINT,
  {},
  { ...auth }
);

export async function listAverageDailyVolume(param) {
  return new Promise((resolve, reject) => {
    const req = new ListAverageDailyVolumeRequest();
    req.setFromDate(stringToProtoDate(param.fromDate));
    req.setToDate(stringToProtoDate(param.toDate));
    req.setCorrespondent(param.correspondent);
    req.setTraderId(param.traderId);
    req.setSymbol(param.symbol);
    req.setExecutingVenue(param.executingVenue);

    service.listAverageDailyVolume(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function listAverageDailyVolumeDetails(param) {
  return new Promise((resolve, reject) => {
    const req = new ReadAverageDailyVolumeRequest();
    req.setCorrespondent(param.correspondent);
    req.setAccountNo(param.accountNo);
    req.setTraderId(param.traderId);
    req.setTradeDate(objectToProtoDate(param.tradeDate));
    req.setTradeAt(objectToProtoTimeStamp(param.tradeAt));
    req.setSymbol(param.symbol);
    req.setExecutingVenue(param.executingVenue);

    service.readAverageDailyVolume(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}
