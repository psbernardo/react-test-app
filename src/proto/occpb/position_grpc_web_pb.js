/**
 * @fileoverview gRPC-Web generated client stub for occpb
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
proto.occpb = require('./position_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.occpb.OccPositionServiceClient =
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
proto.occpb.OccPositionServicePromiseClient =
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
 *   !proto.occpb.ListPositionRequest,
 *   !proto.occpb.ListPositionResponse>}
 */
const methodDescriptor_OccPositionService_ListPosition = new grpc.web.MethodDescriptor(
  '/occpb.OccPositionService/ListPosition',
  grpc.web.MethodType.UNARY,
  proto.occpb.ListPositionRequest,
  proto.occpb.ListPositionResponse,
  /**
   * @param {!proto.occpb.ListPositionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.occpb.ListPositionResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.occpb.ListPositionRequest,
 *   !proto.occpb.ListPositionResponse>}
 */
const methodInfo_OccPositionService_ListPosition = new grpc.web.AbstractClientBase.MethodInfo(
  proto.occpb.ListPositionResponse,
  /**
   * @param {!proto.occpb.ListPositionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.occpb.ListPositionResponse.deserializeBinary
);


/**
 * @param {!proto.occpb.ListPositionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.occpb.ListPositionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.occpb.ListPositionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.occpb.OccPositionServiceClient.prototype.listPosition =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/occpb.OccPositionService/ListPosition',
      request,
      metadata || {},
      methodDescriptor_OccPositionService_ListPosition,
      callback);
};


/**
 * @param {!proto.occpb.ListPositionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.occpb.ListPositionResponse>}
 *     Promise that resolves to the response
 */
proto.occpb.OccPositionServicePromiseClient.prototype.listPosition =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/occpb.OccPositionService/ListPosition',
      request,
      metadata || {},
      methodDescriptor_OccPositionService_ListPosition);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.occpb.ProcessPositionRequest,
 *   !proto.occpb.Empty>}
 */
const methodDescriptor_OccPositionService_ProcessPosition = new grpc.web.MethodDescriptor(
  '/occpb.OccPositionService/ProcessPosition',
  grpc.web.MethodType.UNARY,
  proto.occpb.ProcessPositionRequest,
  proto.occpb.Empty,
  /**
   * @param {!proto.occpb.ProcessPositionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.occpb.Empty.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.occpb.ProcessPositionRequest,
 *   !proto.occpb.Empty>}
 */
const methodInfo_OccPositionService_ProcessPosition = new grpc.web.AbstractClientBase.MethodInfo(
  proto.occpb.Empty,
  /**
   * @param {!proto.occpb.ProcessPositionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.occpb.Empty.deserializeBinary
);


/**
 * @param {!proto.occpb.ProcessPositionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.occpb.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.occpb.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.occpb.OccPositionServiceClient.prototype.processPosition =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/occpb.OccPositionService/ProcessPosition',
      request,
      metadata || {},
      methodDescriptor_OccPositionService_ProcessPosition,
      callback);
};


/**
 * @param {!proto.occpb.ProcessPositionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.occpb.Empty>}
 *     Promise that resolves to the response
 */
proto.occpb.OccPositionServicePromiseClient.prototype.processPosition =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/occpb.OccPositionService/ProcessPosition',
      request,
      metadata || {},
      methodDescriptor_OccPositionService_ProcessPosition);
};


module.exports = proto.occpb;

