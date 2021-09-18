import {
  ListCalendarRequest,
  UpdateTradeRequest,
  UpdateSettleRequest,
  CalendarServiceClient,
} from '../proto/admpb/calendar_grpc_web_pb';
import { notifyError } from 'components/Notification/Notification';
import { auth } from '../lib/auth/Auth';
import { stringToProtoDate } from './ConvertService';

const service = new CalendarServiceClient(
  window.env.GRPC_ENDPOINT,
  {},
  { ...auth }
);

export async function listCalendar(param) {
  return new Promise((resolve, reject) => {
    const req = new ListCalendarRequest();
    req.setFromDate(stringToProtoDate(param.fromDate));
    req.setToDate(stringToProtoDate(param.toDate));
    req.setHolidayName(param.holidayName);

    service.listCalendar(req, {}, (error, response) => {
      if (error) {
        notifyError(error.message);
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function updateSettleRecord(id, settle) {
  return new Promise((resolve, reject) => {
    const req = new UpdateSettleRequest();
    req.setId(id);
    req.setSettle(settle);

    service.updateSettle(req, {}, (error, response) => {
      if (error) {
        notifyError(error.message);
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function updateTradeRecord(id, trade) {
  return new Promise((resolve, reject) => {
    const req = new UpdateTradeRequest();
    req.setId(id);
    req.setTrade(trade);
    console.log(req)
    service.updateTrade(req, {}, (error, response) => {
      if (error) {
        notifyError(error.message);
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}
