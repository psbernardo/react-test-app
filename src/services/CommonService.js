import { createSelector } from 'reselect'; //memoization
import {
  NoteServiceClient,
  ListNoteRequest,
} from '../proto/commonpb/note_grpc_web_pb';
import {
  File,
  FileServiceClient,
  AttachFileRequest,
  ListFileRequest,
  DeleteFileRequest,
  DownloadFileRequest,
} from '../proto/commonpb/file_grpc_web_pb';
import {
  LazyAccountRequest,
  LazyAccountServiceClient,
  EmptyRequest,
  LazyFirstCorrespondentRequest,
} from '../proto/commonpb/lazyaccount_grpc_web_pb';
import {
  ReadPrimaryOwnerRequest,
  ListServiceClient,
  ListBankAccountRequest,
  ListSystemCodeRequest,
  LazyLoadRequest,
  LazyLoadSecurityRequest,
  ListSubAccountNoRequest,
  ListEmptyRequest,
  ListCusipRequest,
  LazyBrokerRequest,
  ListBankNameRequest,
  ListPageRequest,
} from '../proto/commonpb/list_grpc_web_pb';
import {
  LazySystemCodeRequest,
  LazySystemCodeServiceClient,
} from '../proto/commonpb/lazysystemcode_grpc_web_pb';
import { stringToProtoDate } from './ConvertService';

import { auth } from '../lib/auth/Auth';
import download from './DownloadService';

const listService = new ListServiceClient(
  window.env.GRPC_ENDPOINT,
  {},
  { ...auth }
);

const lazyService = new LazyAccountServiceClient(
  window.env.GRPC_ENDPOINT,
  {},
  { ...auth }
);

const noteService = new NoteServiceClient(
  window.env.GRPC_ENDPOINT,
  {},
  { ...auth }
);

const fileService = new FileServiceClient(
  window.env.GRPC_ENDPOINT,
  {},
  { ...auth }
);

const systemCodeService = new LazySystemCodeServiceClient(
  window.env.GRPC_ENDPOINT,
  {},
  { ...auth }
);

export async function listBankAccount(correspondent, accountNo) {
  return new Promise((resolve, reject) => {
    const req = new ListBankAccountRequest();
    req.setCorrespondent(correspondent);
    req.setAccountNo(accountNo);

    listService.listBankAccount(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

//Get list of System Codes
export async function listSystemCodes(type, subType) {
  return new Promise((resolve, reject) => {
    const req = new ListSystemCodeRequest();
    req.setType(type);
    req.setSubType(subType);

    listService.listSystemCode(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function readPrimaryOwner(param) {
  return new Promise((resolve, reject) => {
    const req = new ReadPrimaryOwnerRequest();
    req.setCorrespondent(param.correspondent);
    req.setAccountNo(param.accountNo);

    listService.readPrimaryOwner(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function listNotes(accountId, linkId, noteType) {
  return new Promise((resolve, reject) => {
    let req = new ListNoteRequest();

    if (accountId) {
      req.setAccountId(accountId);
    }

    if (linkId) {
      req.setLinkId(linkId);
    }

    req.setNoteType(noteType);

    noteService.listNote(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

//memoization -  cached result when the same inputs occur again
export const lazyCorrespondent = createSelector(
  (newCorrespondent) => newCorrespondent,
  (newCorrespondent) => (async () => await lazyCorrespondentPromise())()
);

async function lazyCorrespondentPromise() {
  return new Promise((resolve, reject) => {
    lazyService.lazyCorrespondent(new EmptyRequest(), {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

//memoization -  cached result when the same inputs occur again
export const lazyAccountName = createSelector(
  (correspondent, key, accountType) =>
    (async () =>
      await lazyAccountNamePromise(key, correspondent, accountType))(),
  (correspondents) => correspondents
);

async function lazyAccountNamePromise(key, correspondent, accountType) {
  return new Promise((resolve, reject) => {
    const req = getLazyAccountRequest(key, correspondent, accountType);

    lazyService.lazyAccountName(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

//memoization -  cached result when the same inputs occur again
export const lazyAccountNo = createSelector(
  (correspondent, key, accountType) =>
    (async () => await lazyAccountNoPromise(key, correspondent, accountType))(),
  (correspondents) => correspondents
);

async function lazyAccountNoPromise(key, correspondent, accountType) {
  return new Promise((resolve, reject) => {
    const req = getLazyAccountRequest(key, correspondent, accountType);

    lazyService.lazyAccountNo(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

//memoization -  cached result when the same inputs occur again
export const lazyMasterAccountNo = createSelector(
  (correspondent, key, accountType) =>
    (async () =>
      await lazyMasterAccountNoPromise(key, correspondent, accountType))(),
  (correspondents) => correspondents
);

const lazyMasterAccountNoPromise = async (key, correspondent, accountType) => {
  return new Promise((resolve, reject) => {
    const req = getLazyAccountRequest(key, correspondent, accountType);

    lazyService.lazyMasterAccountNo(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
};

const getLazyAccountRequest = (key, correspondent, accountType) => {
  const req = new LazyAccountRequest();
  req.setKey(key);
  req.setLimit(50);
  req.setCorrespondent(correspondent);
  req.setType(accountType);

  return req;
};

//memoization -  cached result when the same inputs occur again
export const lazyLoadSecurity = createSelector(
  (key, assetType) => ({
    key: key,
    assetType: assetType,
  }),
  (p) => (async () => await lazyLoadSecurityPromise(p.key, 100, p.assetType))()
);

const lazyLoadSecurityPromise = async (key, limit, assetType) => {
  return new Promise((resolve, reject) => {
    let req = new LazyLoadSecurityRequest();
    req.setLimit(limit);
    req.setKey(key);
    req.setAssetType(assetType);

    listService.lazyLoadSecurity(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
};

//memoization -  cached result when the same inputs occur again
export const lazyLoadCodeType = createSelector(
  (key, field) => ({
    key: key,
    field: field,
  }),
  (param) => (async () => await lazyLoadCodeTypePromise(param, 100))()
);

const lazyLoadCodeTypePromise = async (param, limit) => {
  return new Promise((resolve, reject) => {
    let req = new LazyLoadRequest();
    req.setLimit(limit);
    req.setKey(param.key);
    req.setField(param.field);

    listService.lazyLoadSystemCodeType(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
};

export async function listFile(linkId, linkType) {
  return new Promise((resolve, reject) => {
    let req = new ListFileRequest();
    req.setLinkType(linkType);
    req.setLinkId(linkId);

    fileService.listFile(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function deleteFile(id) {
  return new Promise((resolve, reject) => {
    let req = new DeleteFileRequest();
    req.setId(id);

    fileService.deleteFile(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function attachFiles(linkId, linkType, files) {
  let response = [];
  try {
    let req = new AttachFileRequest();
    req.setLinkId(linkId);
    req.setLinkType(linkType);

    for (let i = 0; i < files.length; i++) {
      let f = new File();
      const fileBytes = await readFileAsArrayBuffer(files[i]);
      f.setMimeType(files[i].type);
      f.setFileBytes(fileBytes);
      f.setFileName(files[i].name);
      req.setFile(f);

      const res = await attachFilePromise(req);

      //notify success
      response.push(res);
    }
  } catch (error) {
    console.error(error);
    //notify error
  }

  return response;
}

async function attachFilePromise(req) {
  return new Promise((resolve, reject) => {
    fileService.attachFile(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

function readFileAsArrayBuffer(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (event) => {
      const arrayBuffer = event.target.result;
      const bytes = new Uint8Array(arrayBuffer);
      resolve(bytes);
    };

    reader.onerror = (err) => {
      reject(err);
    };

    reader.readAsArrayBuffer(file);
  });
}

export async function downloadFile(id) {
  return new Promise((resolve, reject) => {
    const req = new DownloadFileRequest();
    req.setId(id);

    fileService.downloadFile(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        const fileName = download(response);
        resolve(fileName);
      }
    });
  });
}
//memoization -  cached result when the same inputs occur again
export const lazyLoadAccount = createSelector(
  (listClient, value, selectedCorrespondent, type, showAccountName) =>
    (async () =>
      await lazyLoadAccountPromise(
        listClient,
        value,
        selectedCorrespondent,
        type,
        showAccountName
      ))(),
  (returnValue) => returnValue
);

async function lazyLoadAccountPromise(
  value,
  selectedCorrespondent,
  type,
  showAccountName
) {
  return new Promise((resolve, reject) => {
    let listAccountReq = new LazyLoadRequest();
    if (type === 'correspondent') {
      listAccountReq.setLimit(10000);
      listAccountReq.setKey('');
    } else {
      listAccountReq.setLimit(100);
      listAccountReq.setKey(value);
    }

    listService.lazyLoadAccount(listAccountReq, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        const data = response
          .toObject()
          .accountsList.filter((v) => {
            if (selectedCorrespondent) {
              return v.correspondent === selectedCorrespondent && v[type];
            }

            return v[type];
          })
          .map((v) => {
            if (!showAccountName) {
              return {
                [type]: v[type],
              };
            }

            return {
              [type]: v[type],
              accountName: v.accountName,
            };
          });
        resolve(removeDuplicates(data, (item) => item[type]));
      }
    });
  });
}

//memoization -  cached result when the same inputs occur again
export const lazyLoadSubType = createSelector(
  (key) => key,
  (key) => (async () => await lazyLoadSystemNumberSubTypePromise(key, 100))()
);

const lazyLoadSystemNumberSubTypePromise = async (key, limit) => {
  return new Promise((resolve, reject) => {
    let req = new LazyLoadRequest();
    req.setLimit(limit);
    req.setKey(key);

    listService.lazyLoadSystemNumberSubType(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
};

//memoization -  cached result when the same inputs occur again
export const lazySystemCode = createSelector(
  (props) => (async () => await LazySystemCodePromise(props))(),
  (code) => code
);
// const handleUploadClose = async () => {
//   setOpenImport(false);
// };
export const LazySystemCodePromise = async (props) => {
  return new Promise((resolve, reject) => {
    const req = new LazySystemCodeRequest();
    req.setType(props.type);
    req.setSubType(props.subType);
    req.setNote(props.note);
    req.setCode(props.code);
    if (props.limit) {
      req.setLimit(props.limit);
    }
    if (props.limit != null) {
      req.setLimit(props.limit);
    }

    systemCodeService.lazySystemCode(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
};

//memoization -  cached result when the same inputs occur again
export const lazyloadCountry = createSelector(
  (key) => key,
  (key) => (async () => await lazyLoadSystemCodeCountryPromise(key, 100))()
);

const lazyLoadSystemCodeCountryPromise = async (key, limit) => {
  return new Promise((resolve, reject) => {
    let req = new LazyLoadRequest();
    req.setLimit(limit);
    req.setKey(key);

    listService.lazyLoadSystemCodeCountry(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
};

export const lazyloadExchangeCode = createSelector(
  (key) => key,
  (key) => (async () => await lazyLoadExchangeCodePromise(key, 100))()
);

const lazyLoadExchangeCodePromise = async (key, limit) => {
  return new Promise((resolve, reject) => {
    let req = new LazyLoadRequest();
    req.setLimit(limit);
    req.setKey(key);

    listService.lazyLoadExchangeCode(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
};

export const lazyloadRequestingAnalyst = createSelector(
  (key) => key,
  (key) => (async () => await lazyloadRequestingAnalystPromise(key, 100))()
);

const lazyloadRequestingAnalystPromise = async (key, limit) => {
  return new Promise((resolve, reject) => {
    let req = new LazyLoadRequest();
    req.setLimit(limit);
    req.setKey(key);

    listService.lazyLoadRequestingAnalyst(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
};

export const lazyloadCusip = createSelector(
  (key) => key,
  (key) => (async () => await lazyloadCusipPromise(key, 100))()
);

const lazyloadCusipPromise = async (key, limit) => {
  return new Promise((resolve, reject) => {
    let req = new LazyLoadRequest();
    req.setLimit(limit);
    req.setKey(key);

    listService.lazyLoadCusip(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
};

//memoization -  cached result when the same inputs occur again
export const lazySubAccountNo = createSelector(
  (props) => (async () => await LazySubAccountNoPromise(props))(),
  (code) => code
);

async function LazySubAccountNoPromise(props) {
  return new Promise((resolve, reject) => {
    const req = new ListSubAccountNoRequest();
    req.setLimit(50);
    req.setKey(props.key);
    req.setAccountNo(props.accountNo);

    listService.lazyLoadSubAcount(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

function removeDuplicates(data, key) {
  return [...new Map(data.map((item) => [key(item), item])).values()];
}

export const lazyAccountWallet = createSelector(
  (key) => key,
  (key) => (async () => await lazyloadAccountWalletPromise(key, 100))()
);

const lazyloadAccountWalletPromise = async (key, limit) => {
  return new Promise((resolve, reject) => {
    let req = new LazyLoadRequest();
    req.setLimit(limit);
    req.setKey(key);

    listService.lazyLoadAccountWallet(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
};

export async function listSignetWallet() {
  return new Promise((resolve, reject) => {
    const req = new ListEmptyRequest();

    listService.listSignetWallet(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function listHouseAccount() {
  return new Promise((resolve, reject) => {
    const req = new ListEmptyRequest();

    listService.listHouseAccount(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function listCusip(systemDate, symbol) {
  return new Promise((resolve, reject) => {
    const req = new ListCusipRequest();
    req.setSystemDate(stringToProtoDate(systemDate));
    req.setSymbol(symbol);

    listService.listCusip(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

//memoization -  cached result when the same inputs occur again
export const lazyBroker = createSelector(
  (props) => (async () => await LazyBrokerPromise(props))(),
  (broker) => broker
);
// const handleUploadClose = async () => {
//   setOpenImport(false);
// };
export const LazyBrokerPromise = async (props) => {
  return new Promise((resolve, reject) => {
    const req = new LazyBrokerRequest();
    req.setBroker(props.broker);
    if (props.limit) {
      req.setLimit(props.limit);
    }
    if (props.limit != null) {
      req.setLimit(props.limit);
    }

    listService.listBroker(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
};

//memoization -  cached result when the same inputs occur again
export const lazyRep = createSelector((key) =>
  (async () => await lazyRepPromise(key))()
);

const lazyRepPromise = async (key) => {
  return new Promise((resolve, reject) => {
    const req = getLazyAccountRequest(key);

    lazyService.lazyRep(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
};

//memoization -  cached result when the same inputs occur again
export const lazyBranch = createSelector((key) =>
  (async () => await lazyBranchPromise(key))()
);

const lazyBranchPromise = async (key) => {
  return new Promise((resolve, reject) => {
    const req = getLazyAccountRequest(key);

    lazyService.lazyBranch(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
};

export const getCorrespondent = createSelector((accountNo) =>
  (async () => await getCorrespondentPromise(accountNo))()
);

export const getCorrespondentPromise = async (accountNo) => {
  return new Promise((resolve, reject) => {
    let req = new LazyFirstCorrespondentRequest();
    req.setAccountNo(accountNo);

    lazyService.lazyFirstCorrespondent(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject().correspondent);
      }
    });
  });
};

export async function listBankName(props) {
  return new Promise((resolve, reject) => {
    const req = new ListBankNameRequest();
    req.setKey(props.key);
    req.setLimit(props.limit);

    listService.listBankName(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function listPage(props) {
  return new Promise((resolve, reject) => {
    const req = new ListPageRequest();
    req.setKey(props.key);
    req.setLimit(props.limit);

    listService.listPage(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

//memoization -  cached result when the same inputs occur again
export const lazyAdministratorName = createSelector(
  (key) => (async () => await lazyAdministratorNamePromise(key))(),
  (correspondents) => correspondents
);

async function lazyAdministratorNamePromise(key) {
  return new Promise((resolve, reject) => {
    const req = getLazyAccountRequest(key);

    lazyService.lazyAdministratorName(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}
