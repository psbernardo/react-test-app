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
proto.reportpb = require('./trialbalance_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.reportpb.TrialBalanceServiceClient =
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
proto.reportpb.TrialBalanceServicePromiseClient =
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
 *   !proto.reportpb.ListTrialBalanceRequest,
 *   !proto.reportpb.ListTrialBalanceResponse>}
 */
const methodDescriptor_TrialBalanceService_ListTrialBalance = new grpc.web.MethodDescriptor(
  '/reportpb.TrialBalanceService/ListTrialBalance',
  grpc.web.MethodType.UNARY,
  proto.reportpb.ListTrialBalanceRequest,
  proto.reportpb.ListTrialBalanceResponse,
  /**
   * @param {!proto.reportpb.ListTrialBalanceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.reportpb.ListTrialBalanceResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.reportpb.ListTrialBalanceRequest,
 *   !proto.reportpb.ListTrialBalanceResponse>}
 */
const methodInfo_TrialBalanceService_ListTrialBalance = new grpc.web.AbstractClientBase.MethodInfo(
  proto.reportpb.ListTrialBalanceResponse,
  /**
   * @param {!proto.reportpb.ListTrialBalanceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.reportpb.ListTrialBalanceResponse.deserializeBinary
);


/**
 * @param {!proto.reportpb.ListTrialBalanceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.reportpb.ListTrialBalanceResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.reportpb.ListTrialBalanceResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.reportpb.TrialBalanceServiceClient.prototype.listTrialBalance =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/reportpb.TrialBalanceService/ListTrialBalance',
      request,
      metadata || {},
      methodDescriptor_TrialBalanceService_ListTrialBalance,
      callback);
};


/**
 * @param {!proto.reportpb.ListTrialBalanceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.reportpb.ListTrialBalanceResponse>}
 *     A native promise that resolves to the response
 */
proto.reportpb.TrialBalanceServicePromiseClient.prototype.listTrialBalance =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/reportpb.TrialBalanceService/ListTrialBalance',
      request,
      metadata || {},
      methodDescriptor_TrialBalanceService_ListTrialBalance);
};


module.exports = proto.reportpb;

