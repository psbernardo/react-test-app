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

var proto_utilspb_pagination_pb = require('../../proto/utilspb/pagination_pb.js')

var proto_reportpb_position_pb = require('../../proto/reportpb/position_pb.js')
const proto = {};
proto.reportpb = require('./balance_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.reportpb.BalanceServiceClient =
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
proto.reportpb.BalanceServicePromiseClient =
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
 *   !proto.reportpb.ListBalanceRequest,
 *   !proto.reportpb.ListBalanceResponse>}
 */
const methodDescriptor_BalanceService_ListBalance = new grpc.web.MethodDescriptor(
  '/reportpb.BalanceService/ListBalance',
  grpc.web.MethodType.UNARY,
  proto.reportpb.ListBalanceRequest,
  proto.reportpb.ListBalanceResponse,
  /**
   * @param {!proto.reportpb.ListBalanceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.reportpb.ListBalanceResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.reportpb.ListBalanceRequest,
 *   !proto.reportpb.ListBalanceResponse>}
 */
const methodInfo_BalanceService_ListBalance = new grpc.web.AbstractClientBase.MethodInfo(
  proto.reportpb.ListBalanceResponse,
  /**
   * @param {!proto.reportpb.ListBalanceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.reportpb.ListBalanceResponse.deserializeBinary
);


/**
 * @param {!proto.reportpb.ListBalanceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.reportpb.ListBalanceResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.reportpb.ListBalanceResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.reportpb.BalanceServiceClient.prototype.listBalance =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/reportpb.BalanceService/ListBalance',
      request,
      metadata || {},
      methodDescriptor_BalanceService_ListBalance,
      callback);
};


/**
 * @param {!proto.reportpb.ListBalanceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.reportpb.ListBalanceResponse>}
 *     Promise that resolves to the response
 */
proto.reportpb.BalanceServicePromiseClient.prototype.listBalance =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/reportpb.BalanceService/ListBalance',
      request,
      metadata || {},
      methodDescriptor_BalanceService_ListBalance);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.reportpb.ListBalanceRequest,
 *   !proto.reportpb.ListBalanceSummaryReportResponse>}
 */
const methodDescriptor_BalanceService_ListBalanceSummaryReport = new grpc.web.MethodDescriptor(
  '/reportpb.BalanceService/ListBalanceSummaryReport',
  grpc.web.MethodType.UNARY,
  proto.reportpb.ListBalanceRequest,
  proto.reportpb.ListBalanceSummaryReportResponse,
  /**
   * @param {!proto.reportpb.ListBalanceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.reportpb.ListBalanceSummaryReportResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.reportpb.ListBalanceRequest,
 *   !proto.reportpb.ListBalanceSummaryReportResponse>}
 */
const methodInfo_BalanceService_ListBalanceSummaryReport = new grpc.web.AbstractClientBase.MethodInfo(
  proto.reportpb.ListBalanceSummaryReportResponse,
  /**
   * @param {!proto.reportpb.ListBalanceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.reportpb.ListBalanceSummaryReportResponse.deserializeBinary
);


/**
 * @param {!proto.reportpb.ListBalanceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.reportpb.ListBalanceSummaryReportResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.reportpb.ListBalanceSummaryReportResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.reportpb.BalanceServiceClient.prototype.listBalanceSummaryReport =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/reportpb.BalanceService/ListBalanceSummaryReport',
      request,
      metadata || {},
      methodDescriptor_BalanceService_ListBalanceSummaryReport,
      callback);
};


/**
 * @param {!proto.reportpb.ListBalanceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.reportpb.ListBalanceSummaryReportResponse>}
 *     Promise that resolves to the response
 */
proto.reportpb.BalanceServicePromiseClient.prototype.listBalanceSummaryReport =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/reportpb.BalanceService/ListBalanceSummaryReport',
      request,
      metadata || {},
      methodDescriptor_BalanceService_ListBalanceSummaryReport);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.reportpb.MoveBalanceRequest,
 *   !proto.reportpb.Empty>}
 */
const methodDescriptor_BalanceService_MoveBalance = new grpc.web.MethodDescriptor(
  '/reportpb.BalanceService/MoveBalance',
  grpc.web.MethodType.UNARY,
  proto.reportpb.MoveBalanceRequest,
  proto_reportpb_position_pb.Empty,
  /**
   * @param {!proto.reportpb.MoveBalanceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto_reportpb_position_pb.Empty.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.reportpb.MoveBalanceRequest,
 *   !proto.reportpb.Empty>}
 */
const methodInfo_BalanceService_MoveBalance = new grpc.web.AbstractClientBase.MethodInfo(
  proto_reportpb_position_pb.Empty,
  /**
   * @param {!proto.reportpb.MoveBalanceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto_reportpb_position_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.reportpb.MoveBalanceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.reportpb.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.reportpb.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.reportpb.BalanceServiceClient.prototype.moveBalance =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/reportpb.BalanceService/MoveBalance',
      request,
      metadata || {},
      methodDescriptor_BalanceService_MoveBalance,
      callback);
};


/**
 * @param {!proto.reportpb.MoveBalanceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.reportpb.Empty>}
 *     Promise that resolves to the response
 */
proto.reportpb.BalanceServicePromiseClient.prototype.moveBalance =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/reportpb.BalanceService/MoveBalance',
      request,
      metadata || {},
      methodDescriptor_BalanceService_MoveBalance);
};


module.exports = proto.reportpb;

