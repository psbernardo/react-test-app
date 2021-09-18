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
proto.reportpb = require('./glbalance_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.reportpb.GLBalanceServiceClient =
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
proto.reportpb.GLBalanceServicePromiseClient =
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
 *   !proto.reportpb.ListGLBalanceRequest,
 *   !proto.reportpb.ListGLBalanceResponse>}
 */
const methodDescriptor_GLBalanceService_ListGLBalance = new grpc.web.MethodDescriptor(
  '/reportpb.GLBalanceService/ListGLBalance',
  grpc.web.MethodType.UNARY,
  proto.reportpb.ListGLBalanceRequest,
  proto.reportpb.ListGLBalanceResponse,
  /**
   * @param {!proto.reportpb.ListGLBalanceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.reportpb.ListGLBalanceResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.reportpb.ListGLBalanceRequest,
 *   !proto.reportpb.ListGLBalanceResponse>}
 */
const methodInfo_GLBalanceService_ListGLBalance = new grpc.web.AbstractClientBase.MethodInfo(
  proto.reportpb.ListGLBalanceResponse,
  /**
   * @param {!proto.reportpb.ListGLBalanceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.reportpb.ListGLBalanceResponse.deserializeBinary
);


/**
 * @param {!proto.reportpb.ListGLBalanceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.reportpb.ListGLBalanceResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.reportpb.ListGLBalanceResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.reportpb.GLBalanceServiceClient.prototype.listGLBalance =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/reportpb.GLBalanceService/ListGLBalance',
      request,
      metadata || {},
      methodDescriptor_GLBalanceService_ListGLBalance,
      callback);
};


/**
 * @param {!proto.reportpb.ListGLBalanceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.reportpb.ListGLBalanceResponse>}
 *     A native promise that resolves to the response
 */
proto.reportpb.GLBalanceServicePromiseClient.prototype.listGLBalance =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/reportpb.GLBalanceService/ListGLBalance',
      request,
      metadata || {},
      methodDescriptor_GLBalanceService_ListGLBalance);
};


module.exports = proto.reportpb;

