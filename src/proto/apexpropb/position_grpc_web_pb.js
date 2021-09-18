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
proto.apexpropb = require('./position_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.apexpropb.ApexProPositionServiceClient =
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
proto.apexpropb.ApexProPositionServicePromiseClient =
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
 *   !proto.apexpropb.ListPositionRequest,
 *   !proto.apexpropb.ListPositionResponse>}
 */
const methodDescriptor_ApexProPositionService_ListPosition = new grpc.web.MethodDescriptor(
  '/apexpropb.ApexProPositionService/ListPosition',
  grpc.web.MethodType.UNARY,
  proto.apexpropb.ListPositionRequest,
  proto.apexpropb.ListPositionResponse,
  /**
   * @param {!proto.apexpropb.ListPositionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.apexpropb.ListPositionResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.apexpropb.ListPositionRequest,
 *   !proto.apexpropb.ListPositionResponse>}
 */
const methodInfo_ApexProPositionService_ListPosition = new grpc.web.AbstractClientBase.MethodInfo(
  proto.apexpropb.ListPositionResponse,
  /**
   * @param {!proto.apexpropb.ListPositionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.apexpropb.ListPositionResponse.deserializeBinary
);


/**
 * @param {!proto.apexpropb.ListPositionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.apexpropb.ListPositionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.apexpropb.ListPositionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.apexpropb.ApexProPositionServiceClient.prototype.listPosition =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/apexpropb.ApexProPositionService/ListPosition',
      request,
      metadata || {},
      methodDescriptor_ApexProPositionService_ListPosition,
      callback);
};


/**
 * @param {!proto.apexpropb.ListPositionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.apexpropb.ListPositionResponse>}
 *     Promise that resolves to the response
 */
proto.apexpropb.ApexProPositionServicePromiseClient.prototype.listPosition =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/apexpropb.ApexProPositionService/ListPosition',
      request,
      metadata || {},
      methodDescriptor_ApexProPositionService_ListPosition);
};


module.exports = proto.apexpropb;

