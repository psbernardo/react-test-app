/**
 * @fileoverview gRPC-Web generated client stub for accountpb
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.accountpb = require('./accounttype_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.accountpb.AccountTypeServiceClient =
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
proto.accountpb.AccountTypeServicePromiseClient =
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
 *   !proto.accountpb.AccountType,
 *   !proto.accountpb.CreateAccountTypeResponse>}
 */
const methodDescriptor_AccountTypeService_CreateAccountType = new grpc.web.MethodDescriptor(
  '/accountpb.AccountTypeService/CreateAccountType',
  grpc.web.MethodType.UNARY,
  proto.accountpb.AccountType,
  proto.accountpb.CreateAccountTypeResponse,
  /**
   * @param {!proto.accountpb.AccountType} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.accountpb.CreateAccountTypeResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.accountpb.AccountType,
 *   !proto.accountpb.CreateAccountTypeResponse>}
 */
const methodInfo_AccountTypeService_CreateAccountType = new grpc.web.AbstractClientBase.MethodInfo(
  proto.accountpb.CreateAccountTypeResponse,
  /**
   * @param {!proto.accountpb.AccountType} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.accountpb.CreateAccountTypeResponse.deserializeBinary
);


/**
 * @param {!proto.accountpb.AccountType} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.accountpb.CreateAccountTypeResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.accountpb.CreateAccountTypeResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.accountpb.AccountTypeServiceClient.prototype.createAccountType =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/accountpb.AccountTypeService/CreateAccountType',
      request,
      metadata || {},
      methodDescriptor_AccountTypeService_CreateAccountType,
      callback);
};


/**
 * @param {!proto.accountpb.AccountType} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.accountpb.CreateAccountTypeResponse>}
 *     Promise that resolves to the response
 */
proto.accountpb.AccountTypeServicePromiseClient.prototype.createAccountType =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/accountpb.AccountTypeService/CreateAccountType',
      request,
      metadata || {},
      methodDescriptor_AccountTypeService_CreateAccountType);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.accountpb.AccountType,
 *   !proto.accountpb.UpdateAccountTypeResponse>}
 */
const methodDescriptor_AccountTypeService_UpdateAccountType = new grpc.web.MethodDescriptor(
  '/accountpb.AccountTypeService/UpdateAccountType',
  grpc.web.MethodType.UNARY,
  proto.accountpb.AccountType,
  proto.accountpb.UpdateAccountTypeResponse,
  /**
   * @param {!proto.accountpb.AccountType} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.accountpb.UpdateAccountTypeResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.accountpb.AccountType,
 *   !proto.accountpb.UpdateAccountTypeResponse>}
 */
const methodInfo_AccountTypeService_UpdateAccountType = new grpc.web.AbstractClientBase.MethodInfo(
  proto.accountpb.UpdateAccountTypeResponse,
  /**
   * @param {!proto.accountpb.AccountType} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.accountpb.UpdateAccountTypeResponse.deserializeBinary
);


/**
 * @param {!proto.accountpb.AccountType} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.accountpb.UpdateAccountTypeResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.accountpb.UpdateAccountTypeResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.accountpb.AccountTypeServiceClient.prototype.updateAccountType =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/accountpb.AccountTypeService/UpdateAccountType',
      request,
      metadata || {},
      methodDescriptor_AccountTypeService_UpdateAccountType,
      callback);
};


/**
 * @param {!proto.accountpb.AccountType} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.accountpb.UpdateAccountTypeResponse>}
 *     Promise that resolves to the response
 */
proto.accountpb.AccountTypeServicePromiseClient.prototype.updateAccountType =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/accountpb.AccountTypeService/UpdateAccountType',
      request,
      metadata || {},
      methodDescriptor_AccountTypeService_UpdateAccountType);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.accountpb.ReadAccountTypeRequest,
 *   !proto.accountpb.ReadAccountTypeResponse>}
 */
const methodDescriptor_AccountTypeService_ReadAccountType = new grpc.web.MethodDescriptor(
  '/accountpb.AccountTypeService/ReadAccountType',
  grpc.web.MethodType.UNARY,
  proto.accountpb.ReadAccountTypeRequest,
  proto.accountpb.ReadAccountTypeResponse,
  /**
   * @param {!proto.accountpb.ReadAccountTypeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.accountpb.ReadAccountTypeResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.accountpb.ReadAccountTypeRequest,
 *   !proto.accountpb.ReadAccountTypeResponse>}
 */
const methodInfo_AccountTypeService_ReadAccountType = new grpc.web.AbstractClientBase.MethodInfo(
  proto.accountpb.ReadAccountTypeResponse,
  /**
   * @param {!proto.accountpb.ReadAccountTypeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.accountpb.ReadAccountTypeResponse.deserializeBinary
);


/**
 * @param {!proto.accountpb.ReadAccountTypeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.accountpb.ReadAccountTypeResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.accountpb.ReadAccountTypeResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.accountpb.AccountTypeServiceClient.prototype.readAccountType =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/accountpb.AccountTypeService/ReadAccountType',
      request,
      metadata || {},
      methodDescriptor_AccountTypeService_ReadAccountType,
      callback);
};


/**
 * @param {!proto.accountpb.ReadAccountTypeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.accountpb.ReadAccountTypeResponse>}
 *     Promise that resolves to the response
 */
proto.accountpb.AccountTypeServicePromiseClient.prototype.readAccountType =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/accountpb.AccountTypeService/ReadAccountType',
      request,
      metadata || {},
      methodDescriptor_AccountTypeService_ReadAccountType);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.accountpb.DeleteAccountTypeRequest,
 *   !proto.accountpb.DeleteAccountTypeResponse>}
 */
const methodDescriptor_AccountTypeService_DeleteAccountType = new grpc.web.MethodDescriptor(
  '/accountpb.AccountTypeService/DeleteAccountType',
  grpc.web.MethodType.UNARY,
  proto.accountpb.DeleteAccountTypeRequest,
  proto.accountpb.DeleteAccountTypeResponse,
  /**
   * @param {!proto.accountpb.DeleteAccountTypeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.accountpb.DeleteAccountTypeResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.accountpb.DeleteAccountTypeRequest,
 *   !proto.accountpb.DeleteAccountTypeResponse>}
 */
const methodInfo_AccountTypeService_DeleteAccountType = new grpc.web.AbstractClientBase.MethodInfo(
  proto.accountpb.DeleteAccountTypeResponse,
  /**
   * @param {!proto.accountpb.DeleteAccountTypeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.accountpb.DeleteAccountTypeResponse.deserializeBinary
);


/**
 * @param {!proto.accountpb.DeleteAccountTypeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.accountpb.DeleteAccountTypeResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.accountpb.DeleteAccountTypeResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.accountpb.AccountTypeServiceClient.prototype.deleteAccountType =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/accountpb.AccountTypeService/DeleteAccountType',
      request,
      metadata || {},
      methodDescriptor_AccountTypeService_DeleteAccountType,
      callback);
};


/**
 * @param {!proto.accountpb.DeleteAccountTypeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.accountpb.DeleteAccountTypeResponse>}
 *     Promise that resolves to the response
 */
proto.accountpb.AccountTypeServicePromiseClient.prototype.deleteAccountType =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/accountpb.AccountTypeService/DeleteAccountType',
      request,
      metadata || {},
      methodDescriptor_AccountTypeService_DeleteAccountType);
};


module.exports = proto.accountpb;

