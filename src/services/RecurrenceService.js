import {
  Recurrence,
  RecurrenceServiceClient,
  ListRecurrenceRequest,
} from '../proto/admpb/recurrence_grpc_web_pb';

import { auth } from '../lib/auth/Auth';
const service = new RecurrenceServiceClient(
  window.env.GRPC_ENDPOINT,
  {},
  { ...auth }
);

export async function createRecurrence(param) {
  return new Promise((resolve, reject) => {
    const req = new Recurrence();
    req.setFunctionName(param.functionName);
    req.setReport(param.report);
    req.setLinkId(param.linkId);
    req.setRecurring(param.recurring);
    req.setDay(param.day);
    req.setMonth(param.month);
    req.setMonday(param.monday);
    req.setTuesday(param.tuesday);
    req.setWednesday(param.wednesday);
    req.setThursday(param.thursday);
    req.setFriday(param.friday);
    req.setSaturday(param.saturday);
    req.setSettleDate(param.settleDate);
    req.setTradeDate(param.tradeDate);
    req.setCalendarDate(param.calendarDate);

    service.createRecurrence(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function updateRecurrence(param) {
  return new Promise((resolve, reject) => {
    const req = new Recurrence();
    req.setRecurrenceId(param.recurrenceId);
    req.setFunctionName(param.functionName);
    req.setReport(param.report);
    req.setLinkId(param.linkId);
    req.setRecurring(param.recurring);
    req.setDay(param.day);
    req.setMonth(param.month);
    req.setMonday(param.monday);
    req.setTuesday(param.tuesday);
    req.setWednesday(param.wednesday);
    req.setThursday(param.thursday);
    req.setFriday(param.friday);
    req.setSaturday(param.saturday);
    req.setSettleDate(param.settleDate);
    req.setTradeDate(param.tradeDate);
    req.setCalendarDate(param.calendarDate);

    service.updateRecurrence(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function listRecurrence(param) {
  return new Promise((resolve, reject) => {
    const req = new ListRecurrenceRequest();
    req.setRecurrenceId(param.recurringId);
    req.setFunctionName(param.functionName);
    req.setReport(param.report);
    req.setLinkId(param.linkId);

    service.listRecurrence(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}
