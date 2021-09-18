/**
 * @fileoverview gRPC-Web generated client stub for authpb
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var proto_usrpb_useraccess_pb = require('../../proto/usrpb/useraccess_pb.js')
const proto = {};
proto.authpb = require('./auth_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.authpb.AuthServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.authpb.AuthServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.authpb.LoginRequest,
 *   !proto.authpb.LoginResponse>}
 */
const methodDescriptor_AuthService_Login = new grpc.web.MethodDescriptor(
  '/authpb.AuthService/Login',
  grpc.web.MethodType.UNARY,
  proto.authpb.LoginRequest,
  proto.authpb.LoginResponse,
  /**
   * @param {!proto.authpb.LoginRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.authpb.LoginResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.authpb.LoginRequest,
 *   !proto.authpb.LoginResponse>}
 */
const methodInfo_AuthService_Login = new grpc.web.AbstractClientBase.MethodInfo(
  proto.authpb.LoginResponse,
  /**
   * @param {!proto.authpb.LoginRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.authpb.LoginResponse.deserializeBinary
);


/**
 * @param {!proto.authpb.LoginRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.authpb.LoginResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.authpb.LoginResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.authpb.AuthServiceClient.prototype.login =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/authpb.AuthService/Login',
      request,
      metadata || {},
      methodDescriptor_AuthService_Login,
      callback);
};


/**
 * @param {!proto.authpb.LoginRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.authpb.LoginResponse>}
 *     Promise that resolves to the response
 */
proto.authpb.AuthServicePromiseClient.prototype.login =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/authpb.AuthService/Login',
      request,
      metadata || {},
      methodDescriptor_AuthService_Login);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.authpb.RefreshTokenRequest,
 *   !proto.authpb.LoginResponse>}
 */
const methodDescriptor_AuthService_RefreshToken = new grpc.web.MethodDescriptor(
  '/authpb.AuthService/RefreshToken',
  grpc.web.MethodType.UNARY,
  proto.authpb.RefreshTokenRequest,
  proto.authpb.LoginResponse,
  /**
   * @param {!proto.authpb.RefreshTokenRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.authpb.LoginResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.authpb.RefreshTokenRequest,
 *   !proto.authpb.LoginResponse>}
 */
const methodInfo_AuthService_RefreshToken = new grpc.web.AbstractClientBase.MethodInfo(
  proto.authpb.LoginResponse,
  /**
   * @param {!proto.authpb.RefreshTokenRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.authpb.LoginResponse.deserializeBinary
);


/**
 * @param {!proto.authpb.RefreshTokenRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.authpb.LoginResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.authpb.LoginResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.authpb.AuthServiceClient.prototype.refreshToken =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/authpb.AuthService/RefreshToken',
      request,
      metadata || {},
      methodDescriptor_AuthService_RefreshToken,
      callback);
};


/**
 * @param {!proto.authpb.RefreshTokenRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.authpb.LoginResponse>}
 *     Promise that resolves to the response
 */
proto.authpb.AuthServicePromiseClient.prototype.refreshToken =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/authpb.AuthService/RefreshToken',
      request,
      metadata || {},
      methodDescriptor_AuthService_RefreshToken);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.authpb.ValidateCodeRequest,
 *   !proto.authpb.ValidateCodeResponse>}
 */
const methodDescriptor_AuthService_ValidateCode = new grpc.web.MethodDescriptor(
  '/authpb.AuthService/ValidateCode',
  grpc.web.MethodType.UNARY,
  proto.authpb.ValidateCodeRequest,
  proto.authpb.ValidateCodeResponse,
  /**
   * @param {!proto.authpb.ValidateCodeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.authpb.ValidateCodeResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.authpb.ValidateCodeRequest,
 *   !proto.authpb.ValidateCodeResponse>}
 */
const methodInfo_AuthService_ValidateCode = new grpc.web.AbstractClientBase.MethodInfo(
  proto.authpb.ValidateCodeResponse,
  /**
   * @param {!proto.authpb.ValidateCodeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.authpb.ValidateCodeResponse.deserializeBinary
);


/**
 * @param {!proto.authpb.ValidateCodeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.authpb.ValidateCodeResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.authpb.ValidateCodeResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.authpb.AuthServiceClient.prototype.validateCode =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/authpb.AuthService/ValidateCode',
      request,
      metadata || {},
      methodDescriptor_AuthService_ValidateCode,
      callback);
};


/**
 * @param {!proto.authpb.ValidateCodeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.authpb.ValidateCodeResponse>}
 *     Promise that resolves to the response
 */
proto.authpb.AuthServicePromiseClient.prototype.validateCode =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/authpb.AuthService/ValidateCode',
      request,
      metadata || {},
      methodDescriptor_AuthService_ValidateCode);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.authpb.ChangePasswordRequest,
 *   !proto.authpb.ChangePasswordResponse>}
 */
const methodDescriptor_AuthService_ChangePassword = new grpc.web.MethodDescriptor(
  '/authpb.AuthService/ChangePassword',
  grpc.web.MethodType.UNARY,
  proto.authpb.ChangePasswordRequest,
  proto.authpb.ChangePasswordResponse,
  /**
   * @param {!proto.authpb.ChangePasswordRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.authpb.ChangePasswordResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.authpb.ChangePasswordRequest,
 *   !proto.authpb.ChangePasswordResponse>}
 */
const methodInfo_AuthService_ChangePassword = new grpc.web.AbstractClientBase.MethodInfo(
  proto.authpb.ChangePasswordResponse,
  /**
   * @param {!proto.authpb.ChangePasswordRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.authpb.ChangePasswordResponse.deserializeBinary
);


/**
 * @param {!proto.authpb.ChangePasswordRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.authpb.ChangePasswordResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.authpb.ChangePasswordResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.authpb.AuthServiceClient.prototype.changePassword =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/authpb.AuthService/ChangePassword',
      request,
      metadata || {},
      methodDescriptor_AuthService_ChangePassword,
      callback);
};


/**
 * @param {!proto.authpb.ChangePasswordRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.authpb.ChangePasswordResponse>}
 *     Promise that resolves to the response
 */
proto.authpb.AuthServicePromiseClient.prototype.changePassword =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/authpb.AuthService/ChangePassword',
      request,
      metadata || {},
      methodDescriptor_AuthService_ChangePassword);
};


module.exports = proto.authpb;

