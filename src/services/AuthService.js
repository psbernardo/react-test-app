import jwtDecode from 'jwt-decode';
import moment from 'moment';

import {
  AuthServiceClient,
  LoginRequest,
  RefreshTokenRequest,
  ValidateCodeRequest,
  ChangePasswordRequest,
} from '../proto/authpb/auth_grpc_web_pb';

import { auth } from '../lib/auth/Auth';
const {REACT_APP_GRPC_ENDPOINT, TESTDB} = process.env;
const tokenKey = 'id_token';
const refreshTokenKey = 'refresh_token';
const authMsgKey = 'auth_error';
const client = new AuthServiceClient(REACT_APP_GRPC_ENDPOINT);
let userAccess = undefined;

export function getToken() {
  return localStorage.getItem(tokenKey);
}

export function removeToken() {
  localStorage.removeItem(tokenKey);
  localStorage.removeItem(refreshTokenKey);
  localStorage.removeItem('access');
  localStorage.removeItem('code_validity');
}

export function getAuthErrorMessage() {
  return localStorage.getItem(authMsgKey);
}

export function setAuthErrorMessage(msg) {
  return localStorage.setItem(authMsgKey, msg);
}

export function removeAuthErrorMessage() {
  return localStorage.removeItem(authMsgKey);
}

export function getCurrentUser() {
  try {
    const jwt = getToken();
    return jwtDecode(jwt);
  } catch (error) {
    return null;
  }
}

export function getUserAccess() {
  if (userAccess) {
    return userAccess;
  }
  const access = localStorage.getItem('access');
  userAccess = JSON.parse(access);
  return userAccess;
}

export function refreshToken(auth) {
  //if user not logged in then return
  const user = getCurrentUser();
  if (!user) return;

  //if token already expired then return
  const unixNow = new Date().getTime() / 1000;
  if (unixNow > user.exp) return;

  //if token will not expire in 1hr then return
  const refreshTime = moment(new Date())
    .add(60, 'm')
    .toDate();
  const refreshUnix = refreshTime.getTime() / 1000;
  if (refreshUnix < user.exp) return;

  //if token will about to expire then request a new one
  let req = new RefreshTokenRequest();
  req.setRefreshToken(localStorage.getItem(refreshTokenKey));
  req.setClientId(REACT_APP_GRPC_ENDPOINT);

  const service = new AuthServiceClient(
    REACT_APP_GRPC_ENDPOINT,
    {},
    { ...auth }
  );

  service.refreshToken(req, {}, (error, response) => {
    if (error) {
      console.error('refreshToken', error);
    } else {
      const {
        accessToken,
        refreshToken,
        userAccessesList,
      } = response.toObject();
      setTokens(accessToken, refreshToken, userAccessesList);
    }
  });
}

async function loginPromise(data) {
  return new Promise((resolve, reject) => {
    let req = new LoginRequest();
    req.setEmail(data.email);
    req.setPassword(data.password);
    req.setMode(data.mode);
    req.setClientId(REACT_APP_GRPC_ENDPOINT);
    req.setAuthenticationMode(data.authenticationMode);

    client.login(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export async function login(data) {
  let usrid = 0;
  const { accessToken, refreshToken, userAccessesList } = await loginPromise(
    data
  );

  setTokens(accessToken, refreshToken, userAccessesList);
  // return userAccessesList[0].userId;
  if (userAccessesList.length != 0) {
    usrid = userAccessesList[0].userId;
  }
  return usrid;
}

function setTokens(accessToken, refreshToken, userAccessesList) {
  localStorage.setItem(tokenKey, accessToken);
  localStorage.setItem(refreshTokenKey, refreshToken);

  let access = {};
  for (let i = 0; i < userAccessesList.length; i++) {
    const a = userAccessesList[i];
    if (a.access) {
      const key = (a.menu + a.subMenu + a.pageName).replace(/ /g, '');
      access[key] = a.access;
    }
  }

  localStorage.setItem('pages', JSON.stringify(userAccessesList));
  localStorage.setItem('access', JSON.stringify(access));
}

export function logout() {
  removeToken();
}

export function getPages() {
  const lsp = localStorage.getItem('pages');
  const pages = JSON.parse(lsp);
  return pages;
}

export function validateAuthCode(param) {
  const service = new AuthServiceClient(
    REACT_APP_GRPC_ENDPOINT,
    {},
    { ...auth }
  );

  return new Promise((resolve, reject) => {
    let req = new ValidateCodeRequest();
    req.setUsrId(param.usrId);
    req.setCode(param.code);

    service.validateCode(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        const res = response.toObject();

        if (res.status === 'Success') {
          localStorage.setItem('code_validity', true);
        }

        resolve(res);
      }
    });
  });
}

export function changePassword(param) {
  const service = new AuthServiceClient(
    REACT_APP_GRPC_ENDPOINT,
    {},
    { ...auth }
  );
  return new Promise((resolve, reject) => {
    let req = new ChangePasswordRequest();
    req.setUsrId(param.usrId);
    req.setLastPassword(param.lastPassword);
    req.setNewPassword(param.newPassword);

    service.changePassword(req, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.toObject());
      }
    });
  });
}

export function getValidCodeResponse() {
  const valid = localStorage.getItem('code_validity');
  return valid;
}

export default {
  removeToken,
  getToken,
  getAuthErrorMessage,
  setAuthErrorMessage,
  removeAuthErrorMessage,
  logout,
  login,
  getCurrentUser,
  refreshToken,
  getUserAccess,
  getPages,
  validateAuthCode,
  getValidCodeResponse,
  changePassword,
};
