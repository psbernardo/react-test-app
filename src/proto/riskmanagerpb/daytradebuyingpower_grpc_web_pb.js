/**
 * @fileoverview gRPC-Web generated client stub for riskmanagerpb
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
proto.riskmanagerpb = require('./daytradebuyingpower_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.riskmanagerpb.DayTradeBuyingPowerServiceClient =
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
proto.riskmanagerpb.DayTradeBuyingPowerServicePromiseClient =
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
 *   !proto.riskmanagerpb.ListDayTradeBuyingPowerRequest,
 *   !proto.riskmanagerpb.ListDayTradeBuyingPowerResponse>}
 */
const methodDescriptor_DayTradeBuyingPowerService_ListDayTradeBuyingPower = new grpc.web.MethodDescriptor(
  '/riskmanagerpb.DayTradeBuyingPowerService/ListDayTradeBuyingPower',
  grpc.web.MethodType.UNARY,
  proto.riskmanagerpb.ListDayTradeBuyingPowerRequest,
  proto.riskmanagerpb.ListDayTradeBuyingPowerResponse,
  /**
   * @param {!proto.riskmanagerpb.ListDayTradeBuyingPowerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.riskmanagerpb.ListDayTradeBuyingPowerResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.riskmanagerpb.ListDayTradeBuyingPowerRequest,
 *   !proto.riskmanagerpb.ListDayTradeBuyingPowerResponse>}
 */
const methodInfo_DayTradeBuyingPowerService_ListDayTradeBuyingPower = new grpc.web.AbstractClientBase.MethodInfo(
  proto.riskmanagerpb.ListDayTradeBuyingPowerResponse,
  /**
   * @param {!proto.riskmanagerpb.ListDayTradeBuyingPowerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.riskmanagerpb.ListDayTradeBuyingPowerResponse.deserializeBinary
);


/**
 * @param {!proto.riskmanagerpb.ListDayTradeBuyingPowerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.riskmanagerpb.ListDayTradeBuyingPowerResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.riskmanagerpb.ListDayTradeBuyingPowerResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.riskmanagerpb.DayTradeBuyingPowerServiceClient.prototype.listDayTradeBuyingPower =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/riskmanagerpb.DayTradeBuyingPowerService/ListDayTradeBuyingPower',
      request,
      metadata || {},
      methodDescriptor_DayTradeBuyingPowerService_ListDayTradeBuyingPower,
      callback);
};


/**
 * @param {!proto.riskmanagerpb.ListDayTradeBuyingPowerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.riskmanagerpb.ListDayTradeBuyingPowerResponse>}
 *     A native promise that resolves to the response
 */
proto.riskmanagerpb.DayTradeBuyingPowerServicePromiseClient.prototype.listDayTradeBuyingPower =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/riskmanagerpb.DayTradeBuyingPowerService/ListDayTradeBuyingPower',
      request,
      metadata || {},
      methodDescriptor_DayTradeBuyingPowerService_ListDayTradeBuyingPower);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.riskmanagerpb.ListDayTradeBuyingPowerDetailRequest,
 *   !proto.riskmanagerpb.ListDayTradeBuyingPowerDetailResponse>}
 */
const methodDescriptor_DayTradeBuyingPowerService_ListDayTradeBuyingPowerDetail = new grpc.web.MethodDescriptor(
  '/riskmanagerpb.DayTradeBuyingPowerService/ListDayTradeBuyingPowerDetail',
  grpc.web.MethodType.UNARY,
  proto.riskmanagerpb.ListDayTradeBuyingPowerDetailRequest,
  proto.riskmanagerpb.ListDayTradeBuyingPowerDetailResponse,
  /**
   * @param {!proto.riskmanagerpb.ListDayTradeBuyingPowerDetailRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.riskmanagerpb.ListDayTradeBuyingPowerDetailResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.riskmanagerpb.ListDayTradeBuyingPowerDetailRequest,
 *   !proto.riskmanagerpb.ListDayTradeBuyingPowerDetailResponse>}
 */
const methodInfo_DayTradeBuyingPowerService_ListDayTradeBuyingPowerDetail = new grpc.web.AbstractClientBase.MethodInfo(
  proto.riskmanagerpb.ListDayTradeBuyingPowerDetailResponse,
  /**
   * @param {!proto.riskmanagerpb.ListDayTradeBuyingPowerDetailRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.riskmanagerpb.ListDayTradeBuyingPowerDetailResponse.deserializeBinary
);


/**
 * @param {!proto.riskmanagerpb.ListDayTradeBuyingPowerDetailRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.riskmanagerpb.ListDayTradeBuyingPowerDetailResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.riskmanagerpb.ListDayTradeBuyingPowerDetailResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.riskmanagerpb.DayTradeBuyingPowerServiceClient.prototype.listDayTradeBuyingPowerDetail =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/riskmanagerpb.DayTradeBuyingPowerService/ListDayTradeBuyingPowerDetail',
      request,
      metadata || {},
      methodDescriptor_DayTradeBuyingPowerService_ListDayTradeBuyingPowerDetail,
      callback);
};


/**
 * @param {!proto.riskmanagerpb.ListDayTradeBuyingPowerDetailRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.riskmanagerpb.ListDayTradeBuyingPowerDetailResponse>}
 *     A native promise that resolves to the response
 */
proto.riskmanagerpb.DayTradeBuyingPowerServicePromiseClient.prototype.listDayTradeBuyingPowerDetail =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/riskmanagerpb.DayTradeBuyingPowerService/ListDayTradeBuyingPowerDetail',
      request,
      metadata || {},
      methodDescriptor_DayTradeBuyingPowerService_ListDayTradeBuyingPowerDetail);
};


module.exports = proto.riskmanagerpb;

