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


var google_type_date_pb = require('../../google/type/date_pb.js')
const proto = {};
proto.accountpb = require('./accountprocess_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.accountpb.AccountProcessServiceClient =
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
proto.accountpb.AccountProcessServicePromiseClient =
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
 *   !proto.accountpb.AccountProcess,
 *   !proto.accountpb.AccountProcess>}
 */
const methodDescriptor_AccountProcessService_CreateAccountProcess = new grpc.web.MethodDescriptor(
  '/accountpb.AccountProcessService/CreateAccountProcess',
  grpc.web.MethodType.UNARY,
  proto.accountpb.AccountProcess,
  proto.accountpb.AccountProcess,
  /**
   * @param {!proto.accountpb.AccountProcess} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.accountpb.AccountProcess.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.accountpb.AccountProcess,
 *   !proto.accountpb.AccountProcess>}
 */
const methodInfo_AccountProcessService_CreateAccountProcess = new grpc.web.AbstractClientBase.MethodInfo(
  proto.accountpb.AccountProcess,
  /**
   * @param {!proto.accountpb.AccountProcess} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.accountpb.AccountProcess.deserializeBinary
);


/**
 * @param {!proto.accountpb.AccountProcess} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.accountpb.AccountProcess)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.accountpb.AccountProcess>|undefined}
 *     The XHR Node Readable Stream
 */
proto.accountpb.AccountProcessServiceClient.prototype.createAccountProcess =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/accountpb.AccountProcessService/CreateAccountProcess',
      request,
      metadata || {},
      methodDescriptor_AccountProcessService_CreateAccountProcess,
      callback);
};


/**
 * @param {!proto.accountpb.AccountProcess} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.accountpb.AccountProcess>}
 *     A native promise that resolves to the response
 */
proto.accountpb.AccountProcessServicePromiseClient.prototype.createAccountProcess =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/accountpb.AccountProcessService/CreateAccountProcess',
      request,
      metadata || {},
      methodDescriptor_AccountProcessService_CreateAccountProcess);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.accountpb.AccountProcess,
 *   !proto.accountpb.AccountProcess>}
 */
const methodDescriptor_AccountProcessService_UpdateAccountProcess = new grpc.web.MethodDescriptor(
  '/accountpb.AccountProcessService/UpdateAccountProcess',
  grpc.web.MethodType.UNARY,
  proto.accountpb.AccountProcess,
  proto.accountpb.AccountProcess,
  /**
   * @param {!proto.accountpb.AccountProcess} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.accountpb.AccountProcess.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.accountpb.AccountProcess,
 *   !proto.accountpb.AccountProcess>}
 */
const methodInfo_AccountProcessService_UpdateAccountProcess = new grpc.web.AbstractClientBase.MethodInfo(
  proto.accountpb.AccountProcess,
  /**
   * @param {!proto.accountpb.AccountProcess} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.accountpb.AccountProcess.deserializeBinary
);


/**
 * @param {!proto.accountpb.AccountProcess} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.accountpb.AccountProcess)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.accountpb.AccountProcess>|undefined}
 *     The XHR Node Readable Stream
 */
proto.accountpb.AccountProcessServiceClient.prototype.updateAccountProcess =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/accountpb.AccountProcessService/UpdateAccountProcess',
      request,
      metadata || {},
      methodDescriptor_AccountProcessService_UpdateAccountProcess,
      callback);
};


/**
 * @param {!proto.accountpb.AccountProcess} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.accountpb.AccountProcess>}
 *     A native promise that resolves to the response
 */
proto.accountpb.AccountProcessServicePromiseClient.prototype.updateAccountProcess =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/accountpb.AccountProcessService/UpdateAccountProcess',
      request,
      metadata || {},
      methodDescriptor_AccountProcessService_UpdateAccountProcess);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.accountpb.ListAccountProcessRequest,
 *   !proto.accountpb.ListAccountProcessResponse>}
 */
const methodDescriptor_AccountProcessService_ListAccountProcess = new grpc.web.MethodDescriptor(
  '/accountpb.AccountProcessService/ListAccountProcess',
  grpc.web.MethodType.UNARY,
  proto.accountpb.ListAccountProcessRequest,
  proto.accountpb.ListAccountProcessResponse,
  /**
   * @param {!proto.accountpb.ListAccountProcessRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.accountpb.ListAccountProcessResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.accountpb.ListAccountProcessRequest,
 *   !proto.accountpb.ListAccountProcessResponse>}
 */
const methodInfo_AccountProcessService_ListAccountProcess = new grpc.web.AbstractClientBase.MethodInfo(
  proto.accountpb.ListAccountProcessResponse,
  /**
   * @param {!proto.accountpb.ListAccountProcessRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.accountpb.ListAccountProcessResponse.deserializeBinary
);


/**
 * @param {!proto.accountpb.ListAccountProcessRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.accountpb.ListAccountProcessResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.accountpb.ListAccountProcessResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.accountpb.AccountProcessServiceClient.prototype.listAccountProcess =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/accountpb.AccountProcessService/ListAccountProcess',
      request,
      metadata || {},
      methodDescriptor_AccountProcessService_ListAccountProcess,
      callback);
};


/**
 * @param {!proto.accountpb.ListAccountProcessRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.accountpb.ListAccountProcessResponse>}
 *     A native promise that resolves to the response
 */
proto.accountpb.AccountProcessServicePromiseClient.prototype.listAccountProcess =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/accountpb.AccountProcessService/ListAccountProcess',
      request,
      metadata || {},
      methodDescriptor_AccountProcessService_ListAccountProcess);
};


module.exports = proto.accountpb;

