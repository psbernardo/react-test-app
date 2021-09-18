/**
 * @fileoverview gRPC-Web generated client stub for regulatorypb
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!

/* eslint-disable */
// @ts-nocheck

const grpc = {};
grpc.web = require('grpc-web');

var google_type_date_pb = require('../../google/type/date_pb.js');
const proto = {};
proto.regulatorypb = require('./monthlycustomerbalance_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.regulatorypb.MonthlyCustomerBalanceServiceClient = function(
  hostname,
  credentials,
  options
) {
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
proto.regulatorypb.MonthlyCustomerBalanceServicePromiseClient = function(
  hostname,
  credentials,
  options
) {
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
 *   !proto.regulatorypb.ListMonthlyCustomerBalanceRequest,
 *   !proto.regulatorypb.ListMonthlyCustomerBalanceResponse>}
 */
const methodDescriptor_MonthlyCustomerBalanceService_ListMonthlyCustomerBalance = new grpc.web.MethodDescriptor(
  '/regulatorypb.MonthlyCustomerBalanceService/ListMonthlyCustomerBalance',
  grpc.web.MethodType.UNARY,
  proto.regulatorypb.ListMonthlyCustomerBalanceRequest,
  proto.regulatorypb.ListMonthlyCustomerBalanceResponse,
  /**
   * @param {!proto.regulatorypb.ListMonthlyCustomerBalanceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.regulatorypb.ListMonthlyCustomerBalanceResponse.deserializeBinary
);

/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.regulatorypb.ListMonthlyCustomerBalanceRequest,
 *   !proto.regulatorypb.ListMonthlyCustomerBalanceResponse>}
 */
const methodInfo_MonthlyCustomerBalanceService_ListMonthlyCustomerBalance = new grpc.web.AbstractClientBase.MethodInfo(
  proto.regulatorypb.ListMonthlyCustomerBalanceResponse,
  /**
   * @param {!proto.regulatorypb.ListMonthlyCustomerBalanceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.regulatorypb.ListMonthlyCustomerBalanceResponse.deserializeBinary
);

/**
 * @param {!proto.regulatorypb.ListMonthlyCustomerBalanceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.regulatorypb.ListMonthlyCustomerBalanceResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.regulatorypb.ListMonthlyCustomerBalanceResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.regulatorypb.MonthlyCustomerBalanceServiceClient.prototype.listMonthlyCustomerBalance = function(
  request,
  metadata,
  callback
) {
  return this.client_.rpcCall(
    this.hostname_ +
      '/regulatorypb.MonthlyCustomerBalanceService/ListMonthlyCustomerBalance',
    request,
    metadata || {},
    methodDescriptor_MonthlyCustomerBalanceService_ListMonthlyCustomerBalance,
    callback
  );
};

/**
 * @param {!proto.regulatorypb.ListMonthlyCustomerBalanceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.regulatorypb.ListMonthlyCustomerBalanceResponse>}
 *     A native promise that resolves to the response
 */
proto.regulatorypb.MonthlyCustomerBalanceServicePromiseClient.prototype.listMonthlyCustomerBalance = function(
  request,
  metadata
) {
  return this.client_.unaryCall(
    this.hostname_ +
      '/regulatorypb.MonthlyCustomerBalanceService/ListMonthlyCustomerBalance',
    request,
    metadata || {},
    methodDescriptor_MonthlyCustomerBalanceService_ListMonthlyCustomerBalance
  );
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.regulatorypb.ListMonthlyCustomerBalanceRequest,
 *   !proto.regulatorypb.ListMonthlyCustomerBalanceDetailsResponse>}
 */
const methodDescriptor_MonthlyCustomerBalanceService_ListMonthlyCustomerBalanceDetails = new grpc.web.MethodDescriptor(
  '/regulatorypb.MonthlyCustomerBalanceService/ListMonthlyCustomerBalanceDetails',
  grpc.web.MethodType.UNARY,
  proto.regulatorypb.ListMonthlyCustomerBalanceRequest,
  proto.regulatorypb.ListMonthlyCustomerBalanceDetailsResponse,
  /**
   * @param {!proto.regulatorypb.ListMonthlyCustomerBalanceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.regulatorypb.ListMonthlyCustomerBalanceDetailsResponse.deserializeBinary
);

/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.regulatorypb.ListMonthlyCustomerBalanceRequest,
 *   !proto.regulatorypb.ListMonthlyCustomerBalanceDetailsResponse>}
 */
const methodInfo_MonthlyCustomerBalanceService_ListMonthlyCustomerBalanceDetails = new grpc.web.AbstractClientBase.MethodInfo(
  proto.regulatorypb.ListMonthlyCustomerBalanceDetailsResponse,
  /**
   * @param {!proto.regulatorypb.ListMonthlyCustomerBalanceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.regulatorypb.ListMonthlyCustomerBalanceDetailsResponse.deserializeBinary
);

/**
 * @param {!proto.regulatorypb.ListMonthlyCustomerBalanceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.regulatorypb.ListMonthlyCustomerBalanceDetailsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.regulatorypb.ListMonthlyCustomerBalanceDetailsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.regulatorypb.MonthlyCustomerBalanceServiceClient.prototype.listMonthlyCustomerBalanceDetails = function(
  request,
  metadata,
  callback
) {
  return this.client_.rpcCall(
    this.hostname_ +
      '/regulatorypb.MonthlyCustomerBalanceService/ListMonthlyCustomerBalanceDetails',
    request,
    metadata || {},
    methodDescriptor_MonthlyCustomerBalanceService_ListMonthlyCustomerBalanceDetails,
    callback
  );
};

/**
 * @param {!proto.regulatorypb.ListMonthlyCustomerBalanceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.regulatorypb.ListMonthlyCustomerBalanceDetailsResponse>}
 *     A native promise that resolves to the response
 */
proto.regulatorypb.MonthlyCustomerBalanceServicePromiseClient.prototype.listMonthlyCustomerBalanceDetails = function(
  request,
  metadata
) {
  return this.client_.unaryCall(
    this.hostname_ +
      '/regulatorypb.MonthlyCustomerBalanceService/ListMonthlyCustomerBalanceDetails',
    request,
    metadata || {},
    methodDescriptor_MonthlyCustomerBalanceService_ListMonthlyCustomerBalanceDetails
  );
};

module.exports = proto.regulatorypb;
