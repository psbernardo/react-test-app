/**
 * @fileoverview gRPC-Web generated client stub for achpb
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')
const proto = {};
proto.achpb = require('./bankaccount_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.achpb.BankAccountServiceClient =
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
proto.achpb.BankAccountServicePromiseClient =
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
 *   !proto.achpb.BankAccount,
 *   !proto.achpb.CreateBankAccountResponse>}
 */
const methodDescriptor_BankAccountService_CreateBankAccount = new grpc.web.MethodDescriptor(
  '/achpb.BankAccountService/CreateBankAccount',
  grpc.web.MethodType.UNARY,
  proto.achpb.BankAccount,
  proto.achpb.CreateBankAccountResponse,
  /**
   * @param {!proto.achpb.BankAccount} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.achpb.CreateBankAccountResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.achpb.BankAccount,
 *   !proto.achpb.CreateBankAccountResponse>}
 */
const methodInfo_BankAccountService_CreateBankAccount = new grpc.web.AbstractClientBase.MethodInfo(
  proto.achpb.CreateBankAccountResponse,
  /**
   * @param {!proto.achpb.BankAccount} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.achpb.CreateBankAccountResponse.deserializeBinary
);


/**
 * @param {!proto.achpb.BankAccount} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.achpb.CreateBankAccountResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.achpb.CreateBankAccountResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.achpb.BankAccountServiceClient.prototype.createBankAccount =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/achpb.BankAccountService/CreateBankAccount',
      request,
      metadata || {},
      methodDescriptor_BankAccountService_CreateBankAccount,
      callback);
};


/**
 * @param {!proto.achpb.BankAccount} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.achpb.CreateBankAccountResponse>}
 *     A native promise that resolves to the response
 */
proto.achpb.BankAccountServicePromiseClient.prototype.createBankAccount =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/achpb.BankAccountService/CreateBankAccount',
      request,
      metadata || {},
      methodDescriptor_BankAccountService_CreateBankAccount);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.achpb.UpdateBankAccountRequest,
 *   !proto.achpb.UpdateBankAccountResponse>}
 */
const methodDescriptor_BankAccountService_UpdateBankAccount = new grpc.web.MethodDescriptor(
  '/achpb.BankAccountService/UpdateBankAccount',
  grpc.web.MethodType.UNARY,
  proto.achpb.UpdateBankAccountRequest,
  proto.achpb.UpdateBankAccountResponse,
  /**
   * @param {!proto.achpb.UpdateBankAccountRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.achpb.UpdateBankAccountResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.achpb.UpdateBankAccountRequest,
 *   !proto.achpb.UpdateBankAccountResponse>}
 */
const methodInfo_BankAccountService_UpdateBankAccount = new grpc.web.AbstractClientBase.MethodInfo(
  proto.achpb.UpdateBankAccountResponse,
  /**
   * @param {!proto.achpb.UpdateBankAccountRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.achpb.UpdateBankAccountResponse.deserializeBinary
);


/**
 * @param {!proto.achpb.UpdateBankAccountRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.achpb.UpdateBankAccountResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.achpb.UpdateBankAccountResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.achpb.BankAccountServiceClient.prototype.updateBankAccount =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/achpb.BankAccountService/UpdateBankAccount',
      request,
      metadata || {},
      methodDescriptor_BankAccountService_UpdateBankAccount,
      callback);
};


/**
 * @param {!proto.achpb.UpdateBankAccountRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.achpb.UpdateBankAccountResponse>}
 *     A native promise that resolves to the response
 */
proto.achpb.BankAccountServicePromiseClient.prototype.updateBankAccount =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/achpb.BankAccountService/UpdateBankAccount',
      request,
      metadata || {},
      methodDescriptor_BankAccountService_UpdateBankAccount);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.achpb.ReadBankAccountRequest,
 *   !proto.achpb.ReadBankAccountResponse>}
 */
const methodDescriptor_BankAccountService_ReadBankAccount = new grpc.web.MethodDescriptor(
  '/achpb.BankAccountService/ReadBankAccount',
  grpc.web.MethodType.UNARY,
  proto.achpb.ReadBankAccountRequest,
  proto.achpb.ReadBankAccountResponse,
  /**
   * @param {!proto.achpb.ReadBankAccountRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.achpb.ReadBankAccountResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.achpb.ReadBankAccountRequest,
 *   !proto.achpb.ReadBankAccountResponse>}
 */
const methodInfo_BankAccountService_ReadBankAccount = new grpc.web.AbstractClientBase.MethodInfo(
  proto.achpb.ReadBankAccountResponse,
  /**
   * @param {!proto.achpb.ReadBankAccountRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.achpb.ReadBankAccountResponse.deserializeBinary
);


/**
 * @param {!proto.achpb.ReadBankAccountRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.achpb.ReadBankAccountResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.achpb.ReadBankAccountResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.achpb.BankAccountServiceClient.prototype.readBankAccount =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/achpb.BankAccountService/ReadBankAccount',
      request,
      metadata || {},
      methodDescriptor_BankAccountService_ReadBankAccount,
      callback);
};


/**
 * @param {!proto.achpb.ReadBankAccountRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.achpb.ReadBankAccountResponse>}
 *     A native promise that resolves to the response
 */
proto.achpb.BankAccountServicePromiseClient.prototype.readBankAccount =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/achpb.BankAccountService/ReadBankAccount',
      request,
      metadata || {},
      methodDescriptor_BankAccountService_ReadBankAccount);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.achpb.ListBankAccountRequest,
 *   !proto.achpb.ListBankAccountResponse>}
 */
const methodDescriptor_BankAccountService_ListBankAccount = new grpc.web.MethodDescriptor(
  '/achpb.BankAccountService/ListBankAccount',
  grpc.web.MethodType.UNARY,
  proto.achpb.ListBankAccountRequest,
  proto.achpb.ListBankAccountResponse,
  /**
   * @param {!proto.achpb.ListBankAccountRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.achpb.ListBankAccountResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.achpb.ListBankAccountRequest,
 *   !proto.achpb.ListBankAccountResponse>}
 */
const methodInfo_BankAccountService_ListBankAccount = new grpc.web.AbstractClientBase.MethodInfo(
  proto.achpb.ListBankAccountResponse,
  /**
   * @param {!proto.achpb.ListBankAccountRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.achpb.ListBankAccountResponse.deserializeBinary
);


/**
 * @param {!proto.achpb.ListBankAccountRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.achpb.ListBankAccountResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.achpb.ListBankAccountResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.achpb.BankAccountServiceClient.prototype.listBankAccount =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/achpb.BankAccountService/ListBankAccount',
      request,
      metadata || {},
      methodDescriptor_BankAccountService_ListBankAccount,
      callback);
};


/**
 * @param {!proto.achpb.ListBankAccountRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.achpb.ListBankAccountResponse>}
 *     A native promise that resolves to the response
 */
proto.achpb.BankAccountServicePromiseClient.prototype.listBankAccount =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/achpb.BankAccountService/ListBankAccount',
      request,
      metadata || {},
      methodDescriptor_BankAccountService_ListBankAccount);
};


module.exports = proto.achpb;

