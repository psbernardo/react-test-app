import {
    Sll,
    ListSllRequest,
    SllServiceClient
} from '../proto/assetpb/sll_grpc_web_pb';
import { notifyError } from 'components/Notification/Notification';
import { auth } from '../lib/auth/Auth'

const service = new SllServiceClient(window.env.GRPC_ENDPOINT, {}, { ...auth });

const requestParameter = (param) => {
    let req = new Sll();
    req.setSllUuid(param.sllUuid);
    req.setSymbol(param.symbol);
    req.setSymbolDescription(param.symbolDescription);
    req.setMarket(param.market);
    req.setStatusDescription(param.statusDescription);
    req.setStatusId(param.statusId);

    return req;
};

export async function createSll(param) {
    return new Promise((resolve, reject) => {
        const req = requestParameter(param);

        service.createSll(req, {}, (error, response) => {
            if(error) {
                notifyError(error.message);
                reject(error)
            } else {
                resolve(response.toObject());
            }
        });
    });
}

export async function listSll(param) {
    return new Promise((resolve, reject) => {
        const req = new ListSllRequest();
        req.setSymbol(param.symbol);
        service.listSll(req, {}, (error, response) => {
            if(error) {
                notifyError(error.message);
                reject(error)
            } else {
                resolve(response.toObject());
            }
        });
    });
}

export async function updateSll(param) {
    return new Promise((resolve, reject) => {
        const req = requestParameter(param);

        service.updateSll(req, {}, (error, response) => {
            if(error) {
                notifyError(error.message);
                reject(error)
            } else {
                resolve(response.toObject());
            }
        });
    });
}
