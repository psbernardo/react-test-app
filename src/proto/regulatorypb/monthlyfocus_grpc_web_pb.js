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
proto.regulatorypb = require('./monthlyfocus_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.regulatorypb.MonthlyFocusServiceClient = function(
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
proto.regulatorypb.MonthlyFocusServicePromiseClient = function(
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
 *   !proto.regulatorypb.ListMonthlyFocusRequest,
 *   !proto.regulatorypb.ListMonthlyFocusResponse>}
 */
const methodDescriptor_MonthlyFocusService_ListMonthlyFocus = new grpc.web.MethodDescriptor(
  '/regulatorypb.MonthlyFocusService/ListMonthlyFocus',
  grpc.web.MethodType.UNARY,
  proto.regulatorypb.ListMonthlyFocusRequest,
  proto.regulatorypb.ListMonthlyFocusResponse,
  /**
   * @param {!proto.regulatorypb.ListMonthlyFocusRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.regulatorypb.ListMonthlyFocusResponse.deserializeBinary
);

/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.regulatorypb.ListMonthlyFocusRequest,
 *   !proto.regulatorypb.ListMonthlyFocusResponse>}
 */
const methodInfo_MonthlyFocusService_ListMonthlyFocus = new grpc.web.AbstractClientBase.MethodInfo(
  proto.regulatorypb.ListMonthlyFocusResponse,
  /**
   * @param {!proto.regulatorypb.ListMonthlyFocusRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.regulatorypb.ListMonthlyFocusResponse.deserializeBinary
);

/**
 * @param {!proto.regulatorypb.ListMonthlyFocusRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.regulatorypb.ListMonthlyFocusResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.regulatorypb.ListMonthlyFocusResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.regulatorypb.MonthlyFocusServiceClient.prototype.listMonthlyFocus = function(
  request,
  metadata,
  callback
) {
  return this.client_.rpcCall(
    this.hostname_ + '/regulatorypb.MonthlyFocusService/ListMonthlyFocus',
    request,
    metadata || {},
    methodDescriptor_MonthlyFocusService_ListMonthlyFocus,
    callback
  );
};

/**
 * @param {!proto.regulatorypb.ListMonthlyFocusRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.regulatorypb.ListMonthlyFocusResponse>}
 *     A native promise that resolves to the response
 */
proto.regulatorypb.MonthlyFocusServicePromiseClient.prototype.listMonthlyFocus = function(
  request,
  metadata
) {
  return this.client_.unaryCall(
    this.hostname_ + '/regulatorypb.MonthlyFocusService/ListMonthlyFocus',
    request,
    metadata || {},
    methodDescriptor_MonthlyFocusService_ListMonthlyFocus
  );
};

module.exports = proto.regulatorypb;
