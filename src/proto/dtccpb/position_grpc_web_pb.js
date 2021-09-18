/**
 * @fileoverview gRPC-Web generated client stub for dtccpb
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
proto.dtccpb = require('./position_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.dtccpb.PositionServiceClient =
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
proto.dtccpb.PositionServicePromiseClient =
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
 *   !proto.dtccpb.UpdatePositionRequest,
 *   !proto.dtccpb.UpdatePositionResponse>}
 */
const methodDescriptor_PositionService_UpdatePosition = new grpc.web.MethodDescriptor(
  '/dtccpb.PositionService/UpdatePosition',
  grpc.web.MethodType.UNARY,
  proto.dtccpb.UpdatePositionRequest,
  proto.dtccpb.UpdatePositionResponse,
  /**
   * @param {!proto.dtccpb.UpdatePositionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.dtccpb.UpdatePositionResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.dtccpb.UpdatePositionRequest,
 *   !proto.dtccpb.UpdatePositionResponse>}
 */
const methodInfo_PositionService_UpdatePosition = new grpc.web.AbstractClientBase.MethodInfo(
  proto.dtccpb.UpdatePositionResponse,
  /**
   * @param {!proto.dtccpb.UpdatePositionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.dtccpb.UpdatePositionResponse.deserializeBinary
);


/**
 * @param {!proto.dtccpb.UpdatePositionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.dtccpb.UpdatePositionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.dtccpb.UpdatePositionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.dtccpb.PositionServiceClient.prototype.updatePosition =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/dtccpb.PositionService/UpdatePosition',
      request,
      metadata || {},
      methodDescriptor_PositionService_UpdatePosition,
      callback);
};


/**
 * @param {!proto.dtccpb.UpdatePositionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.dtccpb.UpdatePositionResponse>}
 *     A native promise that resolves to the response
 */
proto.dtccpb.PositionServicePromiseClient.prototype.updatePosition =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/dtccpb.PositionService/UpdatePosition',
      request,
      metadata || {},
      methodDescriptor_PositionService_UpdatePosition);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.dtccpb.ListPositionRequest,
 *   !proto.dtccpb.ListPositionResponse>}
 */
const methodDescriptor_PositionService_ListPosition = new grpc.web.MethodDescriptor(
  '/dtccpb.PositionService/ListPosition',
  grpc.web.MethodType.UNARY,
  proto.dtccpb.ListPositionRequest,
  proto.dtccpb.ListPositionResponse,
  /**
   * @param {!proto.dtccpb.ListPositionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.dtccpb.ListPositionResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.dtccpb.ListPositionRequest,
 *   !proto.dtccpb.ListPositionResponse>}
 */
const methodInfo_PositionService_ListPosition = new grpc.web.AbstractClientBase.MethodInfo(
  proto.dtccpb.ListPositionResponse,
  /**
   * @param {!proto.dtccpb.ListPositionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.dtccpb.ListPositionResponse.deserializeBinary
);


/**
 * @param {!proto.dtccpb.ListPositionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.dtccpb.ListPositionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.dtccpb.ListPositionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.dtccpb.PositionServiceClient.prototype.listPosition =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/dtccpb.PositionService/ListPosition',
      request,
      metadata || {},
      methodDescriptor_PositionService_ListPosition,
      callback);
};


/**
 * @param {!proto.dtccpb.ListPositionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.dtccpb.ListPositionResponse>}
 *     A native promise that resolves to the response
 */
proto.dtccpb.PositionServicePromiseClient.prototype.listPosition =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/dtccpb.PositionService/ListPosition',
      request,
      metadata || {},
      methodDescriptor_PositionService_ListPosition);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.dtccpb.ListPositionDetailRequest,
 *   !proto.dtccpb.ListPositionDetailResponse>}
 */
const methodDescriptor_PositionService_ListPositionDetail = new grpc.web.MethodDescriptor(
  '/dtccpb.PositionService/ListPositionDetail',
  grpc.web.MethodType.UNARY,
  proto.dtccpb.ListPositionDetailRequest,
  proto.dtccpb.ListPositionDetailResponse,
  /**
   * @param {!proto.dtccpb.ListPositionDetailRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.dtccpb.ListPositionDetailResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.dtccpb.ListPositionDetailRequest,
 *   !proto.dtccpb.ListPositionDetailResponse>}
 */
const methodInfo_PositionService_ListPositionDetail = new grpc.web.AbstractClientBase.MethodInfo(
  proto.dtccpb.ListPositionDetailResponse,
  /**
   * @param {!proto.dtccpb.ListPositionDetailRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.dtccpb.ListPositionDetailResponse.deserializeBinary
);


/**
 * @param {!proto.dtccpb.ListPositionDetailRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.dtccpb.ListPositionDetailResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.dtccpb.ListPositionDetailResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.dtccpb.PositionServiceClient.prototype.listPositionDetail =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/dtccpb.PositionService/ListPositionDetail',
      request,
      metadata || {},
      methodDescriptor_PositionService_ListPositionDetail,
      callback);
};


/**
 * @param {!proto.dtccpb.ListPositionDetailRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.dtccpb.ListPositionDetailResponse>}
 *     A native promise that resolves to the response
 */
proto.dtccpb.PositionServicePromiseClient.prototype.listPositionDetail =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/dtccpb.PositionService/ListPositionDetail',
      request,
      metadata || {},
      methodDescriptor_PositionService_ListPositionDetail);
};


module.exports = proto.dtccpb;

