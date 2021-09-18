import authSvc from '../../services/AuthService';

const InterceptedStream = function(stream) {
  this.stream = stream;
};

/** @override */
InterceptedStream.prototype.on = function(eventType, callback) {
  if (eventType === 'error') {
    const errorCallback = async (response) => {
      if (response.code === 7) {
        authSvc.setAuthErrorMessage(response.message);
      }
      if (response.code === 16) {
        authSvc.removeToken();
        authSvc.setAuthErrorMessage(response.message);
        if (window.location.pathname !== '/login')
          window.location.href = '/login';
      }
      callback(response);
    };
    this.stream.on('error', errorCallback);
  } else {
    this.stream.on(eventType, callback);
  }

  return this;
};

/** @override */
InterceptedStream.prototype.cancel = function() {
  this.stream.cancel();
  return this;
};

const AuthenticationInterceptor = function() {};

/** @override */
AuthenticationInterceptor.prototype.intercept = function(request, invoker) {
  const apiPath = request.b.name;
  if (apiPath !== '/authpb.AuthService/RefreshToken') {
    authSvc.refreshToken(auth);
  }

  const md = request.getMetadata();
  request.c = {
    Authorization: authSvc.getToken(),
    ...md,
  }; //TODO This is a workaround because 'request.withMetadata' not working
  return new InterceptedStream(invoker(request));
};

export const auth = {
  streamInterceptors: [new AuthenticationInterceptor()],
};
