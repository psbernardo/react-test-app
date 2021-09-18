/**
 * @fileoverview gRPC-Web generated client stub for apexpropb
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
proto.apexpropb = require('./balance_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.apexpropb.ApexProBalanceServiceClient =
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
proto.apexpropb.ApexProBalanceServicePromiseClient =
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
 *   !proto.apexpropb.ListBalanceRequest,
 *   !proto.apexpropb.ListBalanceResponse>}
 */
const methodDescriptor_ApexProBalanceService_ListBalance = new grpc.web.MethodDescriptor(
  '/apexpropb.ApexProBalanceService/ListBalance',
  grpc.web.MethodType.UNARY,
  proto.apexpropb.ListBalanceRequest,
  proto.apexpropb.ListBalanceResponse,
  /**
   * @param {!proto.apexpropb.ListBalanceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.apexpropb.ListBalanceResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.apexpropb.ListBalanceRequest,
 *   !proto.apexpropb.ListBalanceResponse>}
 */
const methodInfo_ApexProBalanceService_ListBalance = new grpc.web.AbstractClientBase.MethodInfo(
  proto.apexpropb.ListBalanceResponse,
  /**
   * @param {!proto.apexpropb.ListBalanceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.apexpropb.ListBalanceResponse.deserializeBinary
);


/**
 * @param {!proto.apexpropb.ListBalanceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.apexpropb.ListBalanceResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.apexpropb.ListBalanceResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.apexpropb.ApexProBalanceServiceClient.prototype.listBalance =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/apexpropb.ApexProBalanceService/ListBalance',
      request,
      metadata || {},
      methodDescriptor_ApexProBalanceService_ListBalance,
      callback);
};


/**
 * @param {!proto.apexpropb.ListBalanceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.apexpropb.ListBalanceResponse>}
 *     Promise that resolves to the response
 */
proto.apexpropb.ApexProBalanceServicePromiseClient.prototype.listBalance =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/apexpropb.ApexProBalanceService/ListBalance',
      request,
      metadata || {},
      methodDescriptor_ApexProBalanceService_ListBalance);
};


module.exports = proto.apexpropb;

