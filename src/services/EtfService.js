import {
    EtfServiceClient,
    Etf,
    ListEtfRequest,
  } from '../proto/assetpb/etf_grpc_web_pb';
  import { notifyError } from 'components/Notification/Notification';
  import { auth } from '../lib/auth/Auth';

  const service = new EtfServiceClient(window.env.GRPC_ENDPOINT, {}, { ...auth });

  const requestParameter = (param) => {
    let req = new Etf();
    req.setSymbol(param.symbol);
    req.setCusip(param.cusip);
    req.setSymbolDescription(param.symbolDescription);
    req.setInverse(param.inverse);
    req.setLeveragedFactor(param.leveragedFactor);

    return req;
};

export async function createEtf(param) {
    return new Promise((resolve, reject) => {
        const req = requestParameter(param);

        service.createEtf(req, {}, (error, response) => {
            if(error) {
                notifyError(error.message);
                reject(error)
            } else {
                resolve(response.toObject());
            }
        });
    });
}

export async function listEtf(param) {
    return new Promise((resolve, reject) => {
        const req = new ListEtfRequest();
        req.setSymbol(param.symbol);
        req.setCusip(param.cusip);

        service.listEtf(req, {}, (error, response) => {
            if(error) {
                notifyError(error.message);
                reject(error)
            } else {
                resolve(response.toObject());
            }
        });
    });
}