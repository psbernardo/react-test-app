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
const proto = {};
proto.reportpb = require('./position_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.reportpb.ListServiceClient =
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
proto.reportpb.ListServicePromiseClient =
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
 *   !proto.reportpb.ListPositionRequest,
 *   !proto.reportpb.ListPositionResponse>}
 */
const methodDescriptor_ListService_ListPosition = new grpc.web.MethodDescriptor(
  '/reportpb.ListService/ListPosition',
  grpc.web.MethodType.UNARY,
  proto.reportpb.ListPositionRequest,
  proto.reportpb.ListPositionResponse,
  /**
   * @param {!proto.reportpb.ListPositionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.reportpb.ListPositionResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.reportpb.ListPositionRequest,
 *   !proto.reportpb.ListPositionResponse>}
 */
const methodInfo_ListService_ListPosition = new grpc.web.AbstractClientBase.MethodInfo(
  proto.reportpb.ListPositionResponse,
  /**
   * @param {!proto.reportpb.ListPositionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.reportpb.ListPositionResponse.deserializeBinary
);


/**
 * @param {!proto.reportpb.ListPositionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.reportpb.ListPositionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.reportpb.ListPositionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.reportpb.ListServiceClient.prototype.listPosition =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/reportpb.ListService/ListPosition',
      request,
      metadata || {},
      methodDescriptor_ListService_ListPosition,
      callback);
};


/**
 * @param {!proto.reportpb.ListPositionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.reportpb.ListPositionResponse>}
 *     Promise that resolves to the response
 */
proto.reportpb.ListServicePromiseClient.prototype.listPosition =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/reportpb.ListService/ListPosition',
      request,
      metadata || {},
      methodDescriptor_ListService_ListPosition);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.reportpb.MovePositionRequest,
 *   !proto.reportpb.Empty>}
 */
const methodDescriptor_ListService_MovePosition = new grpc.web.MethodDescriptor(
  '/reportpb.ListService/MovePosition',
  grpc.web.MethodType.UNARY,
  proto.reportpb.MovePositionRequest,
  proto.reportpb.Empty,
  /**
   * @param {!proto.reportpb.MovePositionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.reportpb.Empty.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.reportpb.MovePositionRequest,
 *   !proto.reportpb.Empty>}
 */
const methodInfo_ListService_MovePosition = new grpc.web.AbstractClientBase.MethodInfo(
  proto.reportpb.Empty,
  /**
   * @param {!proto.reportpb.MovePositionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.reportpb.Empty.deserializeBinary
);


/**
 * @param {!proto.reportpb.MovePositionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.reportpb.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.reportpb.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.reportpb.ListServiceClient.prototype.movePosition =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/reportpb.ListService/MovePosition',
      request,
      metadata || {},
      methodDescriptor_ListService_MovePosition,
      callback);
};


/**
 * @param {!proto.reportpb.MovePositionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.reportpb.Empty>}
 *     Promise that resolves to the response
 */
proto.reportpb.ListServicePromiseClient.prototype.movePosition =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/reportpb.ListService/MovePosition',
      request,
      metadata || {},
      methodDescriptor_ListService_MovePosition);
};


module.exports = proto.reportpb;

