/**
 * @fileoverview gRPC-Web generated client stub for cnspb
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_type_date_pb = require('../../google/type/date_pb.js')

var proto_utilspb_pagination_pb = require('../../proto/utilspb/pagination_pb.js')
const proto = {};
proto.cnspb = require('./accountsummary_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.cnspb.AccountSummaryServiceClient =
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
proto.cnspb.AccountSummaryServicePromiseClient =
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
 *   !proto.cnspb.ListAccountSummaryRequest,
 *   !proto.cnspb.ListAccountSummaryResponse>}
 */
const methodDescriptor_AccountSummaryService_ListAccountSummary = new grpc.web.MethodDescriptor(
  '/cnspb.AccountSummaryService/ListAccountSummary',
  grpc.web.MethodType.UNARY,
  proto.cnspb.ListAccountSummaryRequest,
  proto.cnspb.ListAccountSummaryResponse,
  /**
   * @param {!proto.cnspb.ListAccountSummaryRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cnspb.ListAccountSummaryResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cnspb.ListAccountSummaryRequest,
 *   !proto.cnspb.ListAccountSummaryResponse>}
 */
const methodInfo_AccountSummaryService_ListAccountSummary = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cnspb.ListAccountSummaryResponse,
  /**
   * @param {!proto.cnspb.ListAccountSummaryRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cnspb.ListAccountSummaryResponse.deserializeBinary
);


/**
 * @param {!proto.cnspb.ListAccountSummaryRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cnspb.ListAccountSummaryResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cnspb.ListAccountSummaryResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cnspb.AccountSummaryServiceClient.prototype.listAccountSummary =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cnspb.AccountSummaryService/ListAccountSummary',
      request,
      metadata || {},
      methodDescriptor_AccountSummaryService_ListAccountSummary,
      callback);
};


/**
 * @param {!proto.cnspb.ListAccountSummaryRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cnspb.ListAccountSummaryResponse>}
 *     Promise that resolves to the response
 */
proto.cnspb.AccountSummaryServicePromiseClient.prototype.listAccountSummary =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cnspb.AccountSummaryService/ListAccountSummary',
      request,
      metadata || {},
      methodDescriptor_AccountSummaryService_ListAccountSummary);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cnspb.ListAccountSummaryDetailRequest,
 *   !proto.cnspb.ListAccountSummaryDetailResponse>}
 */
const methodDescriptor_AccountSummaryService_ListAccountSummaryDetail = new grpc.web.MethodDescriptor(
  '/cnspb.AccountSummaryService/ListAccountSummaryDetail',
  grpc.web.MethodType.UNARY,
  proto.cnspb.ListAccountSummaryDetailRequest,
  proto.cnspb.ListAccountSummaryDetailResponse,
  /**
   * @param {!proto.cnspb.ListAccountSummaryDetailRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cnspb.ListAccountSummaryDetailResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cnspb.ListAccountSummaryDetailRequest,
 *   !proto.cnspb.ListAccountSummaryDetailResponse>}
 */
const methodInfo_AccountSummaryService_ListAccountSummaryDetail = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cnspb.ListAccountSummaryDetailResponse,
  /**
   * @param {!proto.cnspb.ListAccountSummaryDetailRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cnspb.ListAccountSummaryDetailResponse.deserializeBinary
);


/**
 * @param {!proto.cnspb.ListAccountSummaryDetailRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cnspb.ListAccountSummaryDetailResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cnspb.ListAccountSummaryDetailResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cnspb.AccountSummaryServiceClient.prototype.listAccountSummaryDetail =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cnspb.AccountSummaryService/ListAccountSummaryDetail',
      request,
      metadata || {},
      methodDescriptor_AccountSummaryService_ListAccountSummaryDetail,
      callback);
};


/**
 * @param {!proto.cnspb.ListAccountSummaryDetailRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cnspb.ListAccountSummaryDetailResponse>}
 *     Promise that resolves to the response
 */
proto.cnspb.AccountSummaryServicePromiseClient.prototype.listAccountSummaryDetail =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cnspb.AccountSummaryService/ListAccountSummaryDetail',
      request,
      metadata || {},
      methodDescriptor_AccountSummaryService_ListAccountSummaryDetail);
};


module.exports = proto.cnspb;

