/**
 * @fileoverview gRPC-Web generated client stub for systempb
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_type_date_pb = require('../../google/type/date_pb.js')

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')
const proto = {};
proto.systempb = require('./process_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.systempb.ProcessServiceClient =
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
proto.systempb.ProcessServicePromiseClient =
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
 *   !proto.systempb.ListProcessRequest,
 *   !proto.systempb.ListProcessResponse>}
 */
const methodDescriptor_ProcessService_ListProcess = new grpc.web.MethodDescriptor(
  '/systempb.ProcessService/ListProcess',
  grpc.web.MethodType.UNARY,
  proto.systempb.ListProcessRequest,
  proto.systempb.ListProcessResponse,
  /**
   * @param {!proto.systempb.ListProcessRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.systempb.ListProcessResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.systempb.ListProcessRequest,
 *   !proto.systempb.ListProcessResponse>}
 */
const methodInfo_ProcessService_ListProcess = new grpc.web.AbstractClientBase.MethodInfo(
  proto.systempb.ListProcessResponse,
  /**
   * @param {!proto.systempb.ListProcessRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.systempb.ListProcessResponse.deserializeBinary
);


/**
 * @param {!proto.systempb.ListProcessRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.systempb.ListProcessResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.systempb.ListProcessResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.systempb.ProcessServiceClient.prototype.listProcess =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/systempb.ProcessService/ListProcess',
      request,
      metadata || {},
      methodDescriptor_ProcessService_ListProcess,
      callback);
};


/**
 * @param {!proto.systempb.ListProcessRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.systempb.ListProcessResponse>}
 *     Promise that resolves to the response
 */
proto.systempb.ProcessServicePromiseClient.prototype.listProcess =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/systempb.ProcessService/ListProcess',
      request,
      metadata || {},
      methodDescriptor_ProcessService_ListProcess);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.systempb.ProcessSystemProcessRequest,
 *   !proto.systempb.ProcessSystemProcessResponse>}
 */
const methodDescriptor_ProcessService_ProcessSystemProcess = new grpc.web.MethodDescriptor(
  '/systempb.ProcessService/ProcessSystemProcess',
  grpc.web.MethodType.UNARY,
  proto.systempb.ProcessSystemProcessRequest,
  proto.systempb.ProcessSystemProcessResponse,
  /**
   * @param {!proto.systempb.ProcessSystemProcessRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.systempb.ProcessSystemProcessResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.systempb.ProcessSystemProcessRequest,
 *   !proto.systempb.ProcessSystemProcessResponse>}
 */
const methodInfo_ProcessService_ProcessSystemProcess = new grpc.web.AbstractClientBase.MethodInfo(
  proto.systempb.ProcessSystemProcessResponse,
  /**
   * @param {!proto.systempb.ProcessSystemProcessRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.systempb.ProcessSystemProcessResponse.deserializeBinary
);


/**
 * @param {!proto.systempb.ProcessSystemProcessRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.systempb.ProcessSystemProcessResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.systempb.ProcessSystemProcessResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.systempb.ProcessServiceClient.prototype.processSystemProcess =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/systempb.ProcessService/ProcessSystemProcess',
      request,
      metadata || {},
      methodDescriptor_ProcessService_ProcessSystemProcess,
      callback);
};


/**
 * @param {!proto.systempb.ProcessSystemProcessRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.systempb.ProcessSystemProcessResponse>}
 *     Promise that resolves to the response
 */
proto.systempb.ProcessServicePromiseClient.prototype.processSystemProcess =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/systempb.ProcessService/ProcessSystemProcess',
      request,
      metadata || {},
      methodDescriptor_ProcessService_ProcessSystemProcess);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.systempb.LazyProcessRequest,
 *   !proto.systempb.LazyProcessResponse>}
 */
const methodDescriptor_ProcessService_LazyProcess = new grpc.web.MethodDescriptor(
  '/systempb.ProcessService/LazyProcess',
  grpc.web.MethodType.UNARY,
  proto.systempb.LazyProcessRequest,
  proto.systempb.LazyProcessResponse,
  /**
   * @param {!proto.systempb.LazyProcessRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.systempb.LazyProcessResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.systempb.LazyProcessRequest,
 *   !proto.systempb.LazyProcessResponse>}
 */
const methodInfo_ProcessService_LazyProcess = new grpc.web.AbstractClientBase.MethodInfo(
  proto.systempb.LazyProcessResponse,
  /**
   * @param {!proto.systempb.LazyProcessRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.systempb.LazyProcessResponse.deserializeBinary
);


/**
 * @param {!proto.systempb.LazyProcessRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.systempb.LazyProcessResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.systempb.LazyProcessResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.systempb.ProcessServiceClient.prototype.lazyProcess =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/systempb.ProcessService/LazyProcess',
      request,
      metadata || {},
      methodDescriptor_ProcessService_LazyProcess,
      callback);
};


/**
 * @param {!proto.systempb.LazyProcessRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.systempb.LazyProcessResponse>}
 *     Promise that resolves to the response
 */
proto.systempb.ProcessServicePromiseClient.prototype.lazyProcess =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/systempb.ProcessService/LazyProcess',
      request,
      metadata || {},
      methodDescriptor_ProcessService_LazyProcess);
};


module.exports = proto.systempb;

