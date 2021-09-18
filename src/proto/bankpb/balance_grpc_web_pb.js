/**
 * @fileoverview gRPC-Web generated client stub for bankpb
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
proto.bankpb = require('./balance_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.bankpb.BankBalanceServiceClient =
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
proto.bankpb.BankBalanceServicePromiseClient =
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
 *   !proto.bankpb.ListBalanceRequest,
 *   !proto.bankpb.ListBalanceResponse>}
 */
const methodDescriptor_BankBalanceService_ListBalance = new grpc.web.MethodDescriptor(
  '/bankpb.BankBalanceService/ListBalance',
  grpc.web.MethodType.UNARY,
  proto.bankpb.ListBalanceRequest,
  proto.bankpb.ListBalanceResponse,
  /**
   * @param {!proto.bankpb.ListBalanceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bankpb.ListBalanceResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.bankpb.ListBalanceRequest,
 *   !proto.bankpb.ListBalanceResponse>}
 */
const methodInfo_BankBalanceService_ListBalance = new grpc.web.AbstractClientBase.MethodInfo(
  proto.bankpb.ListBalanceResponse,
  /**
   * @param {!proto.bankpb.ListBalanceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bankpb.ListBalanceResponse.deserializeBinary
);


/**
 * @param {!proto.bankpb.ListBalanceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.bankpb.ListBalanceResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.bankpb.ListBalanceResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.bankpb.BankBalanceServiceClient.prototype.listBalance =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/bankpb.BankBalanceService/ListBalance',
      request,
      metadata || {},
      methodDescriptor_BankBalanceService_ListBalance,
      callback);
};


/**
 * @param {!proto.bankpb.ListBalanceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.bankpb.ListBalanceResponse>}
 *     Promise that resolves to the response
 */
proto.bankpb.BankBalanceServicePromiseClient.prototype.listBalance =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/bankpb.BankBalanceService/ListBalance',
      request,
      metadata || {},
      methodDescriptor_BankBalanceService_ListBalance);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.bankpb.ListBalanceDetailsRequest,
 *   !proto.bankpb.ListBalanceDetailsResponse>}
 */
const methodDescriptor_BankBalanceService_ListBalanceDetails = new grpc.web.MethodDescriptor(
  '/bankpb.BankBalanceService/ListBalanceDetails',
  grpc.web.MethodType.UNARY,
  proto.bankpb.ListBalanceDetailsRequest,
  proto.bankpb.ListBalanceDetailsResponse,
  /**
   * @param {!proto.bankpb.ListBalanceDetailsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bankpb.ListBalanceDetailsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.bankpb.ListBalanceDetailsRequest,
 *   !proto.bankpb.ListBalanceDetailsResponse>}
 */
const methodInfo_BankBalanceService_ListBalanceDetails = new grpc.web.AbstractClientBase.MethodInfo(
  proto.bankpb.ListBalanceDetailsResponse,
  /**
   * @param {!proto.bankpb.ListBalanceDetailsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bankpb.ListBalanceDetailsResponse.deserializeBinary
);


/**
 * @param {!proto.bankpb.ListBalanceDetailsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.bankpb.ListBalanceDetailsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.bankpb.ListBalanceDetailsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.bankpb.BankBalanceServiceClient.prototype.listBalanceDetails =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/bankpb.BankBalanceService/ListBalanceDetails',
      request,
      metadata || {},
      methodDescriptor_BankBalanceService_ListBalanceDetails,
      callback);
};


/**
 * @param {!proto.bankpb.ListBalanceDetailsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.bankpb.ListBalanceDetailsResponse>}
 *     Promise that resolves to the response
 */
proto.bankpb.BankBalanceServicePromiseClient.prototype.listBalanceDetails =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/bankpb.BankBalanceService/ListBalanceDetails',
      request,
      metadata || {},
      methodDescriptor_BankBalanceService_ListBalanceDetails);
};


module.exports = proto.bankpb;

