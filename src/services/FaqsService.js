import {
  Faqs,
  ReadFaqsRequest,
  // UpdateFaqsRequest,
  ListFaqsRequest,
  DeleteFaqsRequest,
  FaqsServiceClient,
} from '../proto/admpb/faqs_grpc_web_pb';
import authSvc from './AuthService';
import { notifyError } from 'components/Notification/Notification';
import { stringToProtoDate } from './ConvertService';
import moment from 'moment-timezone';
import { auth } from '../lib/auth/Auth';

const service = new FaqsServiceClient(
  window.env.GRPC_ENDPOINT,
  {},
  { ...auth }
);

// const user = authSvc.getCurrentUser();

export async function createFaqs(param) {
  return new Promise((resolve, reject) => {
    const req = new Faqs();
    req.setPageId(param.pageId ? parseInt(param.pageId) : 0);
    // req.setPageId(parseInt(param.pageId));
    req.setPageName(param.pageName);
    req.setQuestion(param.question);
    req.setAnswer(param.answer);

    // req.setGridName('');
    // req.setTableSchema('');

    service.createFaqs(req, {}, (error, response) => {
      if (error) {
        notifyError(error.message);
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function readFaqs(id) {
  return new Promise((resolve, reject) => {
    const req = new ReadFaqsRequest();
    req.setPageId(id);

    service.readFaqs(req, {}, (error, response) => {
      if (error) {
        resolve({ faqs: { faqId: 0 } });
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function updateFaqs(param) {
  return new Promise((resolve, reject) => {
    const req = new Faqs();
    req.setFaqId(param.faqId);
    req.setPageId(param.pageId ? parseInt(param.pageId) : 0);
    // req.setPageId(parseInt(param.pageId));
    req.setPageName(param.pageName);
    req.setQuestion(param.question);
    req.setAnswer(param.answer);
    // req.setGridName('');
    // req.setTableSchema('');

    service.updateFaqs(req, {}, (error, response) => {
      if (error) {
        notifyError(error.message);
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function deleteFaqs(id) {
  return new Promise((resolve, reject) => {
    const req = new DeleteFaqsRequest();
    req.setFaqId(id);

    service.deleteFaqs(req, {}, (error, response) => {
      if (error) {
        notifyError(error.message);
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function listFaqs(param) {
  return new Promise((resolve, reject) => {
    const req = new ListFaqsRequest();
    // req.setPageId(param.pageId ? parseInt(param.pageId) : 0);

    req.setPageName(param['pageName']);
    req.setQuestion(param['question']);

    service.listFaqs(req, {}, (error, response) => {
      if (error) {
        notifyError(error.message);
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

// export async function getNewFaqsId() {
//   return new Promise((resolve, reject) => {
//     let req = new GetNewFaqsIdRequest();

//     service.getNewFaqsId(req, {}, (error, response) => {
//       if (error) {
//         reject(error);
//       } else {
//         resolve(response.toObject());
//       }
//     });
//   });
// }
