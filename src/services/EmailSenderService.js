import {
  EmailSenderServiceClient,
  ListEmailSenderRequest,
  EmailSender,
  DeleteEmailSenderRequest,
} from '../proto/admpb/emailsender_grpc_web_pb';
import { auth } from '../lib/auth/Auth';

const service = new EmailSenderServiceClient(
  window.env.GRPC_ENDPOINT,
  {},
  { ...auth }
);

export async function listEmailSender(param) {
  return new Promise((resolve, reject) => {
    let req = new ListEmailSenderRequest();
    req.setTemplate(param.template);
    req.setSender(param.sender);
    req.setRecipientEmailGroup(param.recipientEmailGroup);
    req.setStatus(param.status);
    req.setRecurring(param.recurring);

    service.listEmailSender(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function createEmailSender(param) {
  return new Promise((resolve, reject) => {
    const req = new EmailSender();
    req.setTemplate(param.template);
    req.setSender(param.sender);
    req.setRecipientEmailGroup(param.recipientEmailGroup);
    req.setSubject(param.subject);
    req.setBody(param.body);
    req.setStatus(param.status);
    req.setRecurring(param.recurring);
    req.setDay(parseInt(param.day));
    req.setMonth(parseInt(param.month));
    req.setSunday(param.sunday);
    req.setMonday(param.monday);
    req.setTuesday(param.tuesday);
    req.setWednesday(param.wednesday);
    req.setThursday(param.thursday);
    req.setFriday(param.friday);
    req.setSaturday(param.saturday);
    req.setSettleDate(param.settleDate);
    req.setTradeDate(param.tradeDate);
    req.setCalendarDate(param.calendarDate);

    service.createEmailSender(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function updateEmailSender(param) {
  return new Promise((resolve, reject) => {
    const req = new EmailSender();
    req.setEmailSenderId(param.emailSenderId);
    req.setTemplate(param.template);
    req.setSender(param.sender);
    req.setRecipientEmailGroup(param.recipientEmailGroup);
    req.setSubject(param.subject);
    req.setBody(param.body);
    req.setStatus(param.status);
    req.setRecurring(param.recurring);
    req.setDay(parseInt(param.day));
    req.setMonth(parseInt(param.month));
    req.setSunday(param.sunday);
    req.setMonday(param.monday);
    req.setTuesday(param.tuesday);
    req.setWednesday(param.wednesday);
    req.setThursday(param.thursday);
    req.setFriday(param.friday);
    req.setSaturday(param.saturday);
    req.setSettleDate(param.settleDate);
    req.setTradeDate(param.tradeDate);
    req.setCalendarDate(param.calendarDate);

    service.updateEmailSender(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function deleteEmailSender(emailSenderId) {
  return new Promise((resolve, reject) => {
    const req = new DeleteEmailSenderRequest();
    req.setEmailSenderId(emailSenderId);

    service.deleteEmailSender(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}
