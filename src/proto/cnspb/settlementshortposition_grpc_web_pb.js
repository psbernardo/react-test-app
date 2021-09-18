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
const proto = {};
proto.cnspb = require('./settlementshortposition_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.cnspb.SettlementShortPositionServiceClient =
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
proto.cnspb.SettlementShortPositionServicePromiseClient =
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
 *   !proto.cnspb.ListSettlementShortPositionRequest,
 *   !proto.cnspb.ListSettlementShortPositionResponse>}
 */
const methodDescriptor_SettlementShortPositionService_ListSettlementShortPosition = new grpc.web.MethodDescriptor(
  '/cnspb.SettlementShortPositionService/ListSettlementShortPosition',
  grpc.web.MethodType.UNARY,
  proto.cnspb.ListSettlementShortPositionRequest,
  proto.cnspb.ListSettlementShortPositionResponse,
  /**
   * @param {!proto.cnspb.ListSettlementShortPositionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cnspb.ListSettlementShortPositionResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cnspb.ListSettlementShortPositionRequest,
 *   !proto.cnspb.ListSettlementShortPositionResponse>}
 */
const methodInfo_SettlementShortPositionService_ListSettlementShortPosition = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cnspb.ListSettlementShortPositionResponse,
  /**
   * @param {!proto.cnspb.ListSettlementShortPositionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cnspb.ListSettlementShortPositionResponse.deserializeBinary
);


/**
 * @param {!proto.cnspb.ListSettlementShortPositionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cnspb.ListSettlementShortPositionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cnspb.ListSettlementShortPositionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cnspb.SettlementShortPositionServiceClient.prototype.listSettlementShortPosition =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cnspb.SettlementShortPositionService/ListSettlementShortPosition',
      request,
      metadata || {},
      methodDescriptor_SettlementShortPositionService_ListSettlementShortPosition,
      callback);
};


/**
 * @param {!proto.cnspb.ListSettlementShortPositionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cnspb.ListSettlementShortPositionResponse>}
 *     A native promise that resolves to the response
 */
proto.cnspb.SettlementShortPositionServicePromiseClient.prototype.listSettlementShortPosition =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cnspb.SettlementShortPositionService/ListSettlementShortPosition',
      request,
      metadata || {},
      methodDescriptor_SettlementShortPositionService_ListSettlementShortPosition);
};


module.exports = proto.cnspb;

