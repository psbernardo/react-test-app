/**
 * @fileoverview gRPC-Web generated client stub for reportpb
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
proto.reportpb = require('./segregation_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.reportpb.SegregationServiceClient =
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
proto.reportpb.SegregationServicePromiseClient =
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
 *   !proto.reportpb.ListSegregationRequest,
 *   !proto.reportpb.ListSegregationResponse>}
 */
const methodDescriptor_SegregationService_ListSegregation = new grpc.web.MethodDescriptor(
  '/reportpb.SegregationService/ListSegregation',
  grpc.web.MethodType.UNARY,
  proto.reportpb.ListSegregationRequest,
  proto.reportpb.ListSegregationResponse,
  /**
   * @param {!proto.reportpb.ListSegregationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.reportpb.ListSegregationResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.reportpb.ListSegregationRequest,
 *   !proto.reportpb.ListSegregationResponse>}
 */
const methodInfo_SegregationService_ListSegregation = new grpc.web.AbstractClientBase.MethodInfo(
  proto.reportpb.ListSegregationResponse,
  /**
   * @param {!proto.reportpb.ListSegregationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.reportpb.ListSegregationResponse.deserializeBinary
);


/**
 * @param {!proto.reportpb.ListSegregationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.reportpb.ListSegregationResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.reportpb.ListSegregationResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.reportpb.SegregationServiceClient.prototype.listSegregation =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/reportpb.SegregationService/ListSegregation',
      request,
      metadata || {},
      methodDescriptor_SegregationService_ListSegregation,
      callback);
};


/**
 * @param {!proto.reportpb.ListSegregationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.reportpb.ListSegregationResponse>}
 *     Promise that resolves to the response
 */
proto.reportpb.SegregationServicePromiseClient.prototype.listSegregation =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/reportpb.SegregationService/ListSegregation',
      request,
      metadata || {},
      methodDescriptor_SegregationService_ListSegregation);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.reportpb.ListSegregationLockupRequest,
 *   !proto.reportpb.ListSegregationLockupResponse>}
 */
const methodDescriptor_SegregationService_ListSegregationLockup = new grpc.web.MethodDescriptor(
  '/reportpb.SegregationService/ListSegregationLockup',
  grpc.web.MethodType.UNARY,
  proto.reportpb.ListSegregationLockupRequest,
  proto.reportpb.ListSegregationLockupResponse,
  /**
   * @param {!proto.reportpb.ListSegregationLockupRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.reportpb.ListSegregationLockupResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.reportpb.ListSegregationLockupRequest,
 *   !proto.reportpb.ListSegregationLockupResponse>}
 */
const methodInfo_SegregationService_ListSegregationLockup = new grpc.web.AbstractClientBase.MethodInfo(
  proto.reportpb.ListSegregationLockupResponse,
  /**
   * @param {!proto.reportpb.ListSegregationLockupRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.reportpb.ListSegregationLockupResponse.deserializeBinary
);


/**
 * @param {!proto.reportpb.ListSegregationLockupRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.reportpb.ListSegregationLockupResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.reportpb.ListSegregationLockupResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.reportpb.SegregationServiceClient.prototype.listSegregationLockup =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/reportpb.SegregationService/ListSegregationLockup',
      request,
      metadata || {},
      methodDescriptor_SegregationService_ListSegregationLockup,
      callback);
};


/**
 * @param {!proto.reportpb.ListSegregationLockupRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.reportpb.ListSegregationLockupResponse>}
 *     Promise that resolves to the response
 */
proto.reportpb.SegregationServicePromiseClient.prototype.listSegregationLockup =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/reportpb.SegregationService/ListSegregationLockup',
      request,
      metadata || {},
      methodDescriptor_SegregationService_ListSegregationLockup);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.reportpb.ListSegregationBalanceRequest,
 *   !proto.reportpb.ListSegregationBalanceResponse>}
 */
const methodDescriptor_SegregationService_ListSegregationBalance = new grpc.web.MethodDescriptor(
  '/reportpb.SegregationService/ListSegregationBalance',
  grpc.web.MethodType.UNARY,
  proto.reportpb.ListSegregationBalanceRequest,
  proto.reportpb.ListSegregationBalanceResponse,
  /**
   * @param {!proto.reportpb.ListSegregationBalanceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.reportpb.ListSegregationBalanceResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.reportpb.ListSegregationBalanceRequest,
 *   !proto.reportpb.ListSegregationBalanceResponse>}
 */
const methodInfo_SegregationService_ListSegregationBalance = new grpc.web.AbstractClientBase.MethodInfo(
  proto.reportpb.ListSegregationBalanceResponse,
  /**
   * @param {!proto.reportpb.ListSegregationBalanceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.reportpb.ListSegregationBalanceResponse.deserializeBinary
);


/**
 * @param {!proto.reportpb.ListSegregationBalanceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.reportpb.ListSegregationBalanceResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.reportpb.ListSegregationBalanceResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.reportpb.SegregationServiceClient.prototype.listSegregationBalance =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/reportpb.SegregationService/ListSegregationBalance',
      request,
      metadata || {},
      methodDescriptor_SegregationService_ListSegregationBalance,
      callback);
};


/**
 * @param {!proto.reportpb.ListSegregationBalanceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.reportpb.ListSegregationBalanceResponse>}
 *     Promise that resolves to the response
 */
proto.reportpb.SegregationServicePromiseClient.prototype.listSegregationBalance =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/reportpb.SegregationService/ListSegregationBalance',
      request,
      metadata || {},
      methodDescriptor_SegregationService_ListSegregationBalance);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.reportpb.DownloadSegregationRequest,
 *   !proto.reportpb.File>}
 */
const methodDescriptor_SegregationService_DownloadSegregation = new grpc.web.MethodDescriptor(
  '/reportpb.SegregationService/DownloadSegregation',
  grpc.web.MethodType.UNARY,
  proto.reportpb.DownloadSegregationRequest,
  proto.reportpb.File,
  /**
   * @param {!proto.reportpb.DownloadSegregationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.reportpb.File.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.reportpb.DownloadSegregationRequest,
 *   !proto.reportpb.File>}
 */
const methodInfo_SegregationService_DownloadSegregation = new grpc.web.AbstractClientBase.MethodInfo(
  proto.reportpb.File,
  /**
   * @param {!proto.reportpb.DownloadSegregationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.reportpb.File.deserializeBinary
);


/**
 * @param {!proto.reportpb.DownloadSegregationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.reportpb.File)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.reportpb.File>|undefined}
 *     The XHR Node Readable Stream
 */
proto.reportpb.SegregationServiceClient.prototype.downloadSegregation =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/reportpb.SegregationService/DownloadSegregation',
      request,
      metadata || {},
      methodDescriptor_SegregationService_DownloadSegregation,
      callback);
};


/**
 * @param {!proto.reportpb.DownloadSegregationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.reportpb.File>}
 *     Promise that resolves to the response
 */
proto.reportpb.SegregationServicePromiseClient.prototype.downloadSegregation =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/reportpb.SegregationService/DownloadSegregation',
      request,
      metadata || {},
      methodDescriptor_SegregationService_DownloadSegregation);
};


module.exports = proto.reportpb;

