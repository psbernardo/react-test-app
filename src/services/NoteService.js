import {
  ListNoteRequest,
  NoteServiceClient,
  Note,
} from '../proto/commonpb/note_grpc_web_pb';
import { stringToProtoTimeSpan } from './ConvertService';

import { auth } from '../lib/auth/Auth';
const service = new NoteServiceClient(
  window.env.GRPC_ENDPOINT,
  {},
  { ...auth }
);

export async function listNote(accountId, param) {
  return new Promise((resolve, reject) => {
    const req = new ListNoteRequest();
    req.setAccountId(accountId);
    req.setLinkId(accountId);
    req.setNoteType(param.noteType);

    service.listNote(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

/**
 * get list of notes where link_id is different from account_id
 * @param {*} param
 * @returns list of notes
 */
export async function listNoteGeneric(param) {
  return new Promise((resolve, reject) => {
    const req = new ListNoteRequest();
    req.setAccountId(param.accountId);
    req.setLinkId(param.linkId);
    req.setNoteType(param.noteType);

    service.listNote(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function createNote(accountId, param) {
  return new Promise((resolve, reject) => {
    const req = new Note();
    req.setNoteId(param.noteId);
    req.setAccountId(accountId);
    req.setLinkId(param.linkId);
    req.setNoteType(param.noteType);
    req.setSubject(param.subject);
    req.setNote(param.note);
    req.setCreatedBy(param.createdBy);
    req.setCreatedAt(stringToProtoTimeSpan(param.createdAt));

    service.createNote(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}
