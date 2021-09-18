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
proto.cnspb = require('./positionaging_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.cnspb.PositionAgingServiceClient =
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
proto.cnspb.PositionAgingServicePromiseClient =
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
 *   !proto.cnspb.UpdatePositionAgingRequest,
 *   !proto.cnspb.UpdatePositionAgingResponse>}
 */
const methodDescriptor_PositionAgingService_UpdatePositionAging = new grpc.web.MethodDescriptor(
  '/cnspb.PositionAgingService/UpdatePositionAging',
  grpc.web.MethodType.UNARY,
  proto.cnspb.UpdatePositionAgingRequest,
  proto.cnspb.UpdatePositionAgingResponse,
  /**
   * @param {!proto.cnspb.UpdatePositionAgingRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cnspb.UpdatePositionAgingResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cnspb.UpdatePositionAgingRequest,
 *   !proto.cnspb.UpdatePositionAgingResponse>}
 */
const methodInfo_PositionAgingService_UpdatePositionAging = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cnspb.UpdatePositionAgingResponse,
  /**
   * @param {!proto.cnspb.UpdatePositionAgingRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cnspb.UpdatePositionAgingResponse.deserializeBinary
);


/**
 * @param {!proto.cnspb.UpdatePositionAgingRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cnspb.UpdatePositionAgingResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cnspb.UpdatePositionAgingResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cnspb.PositionAgingServiceClient.prototype.updatePositionAging =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cnspb.PositionAgingService/UpdatePositionAging',
      request,
      metadata || {},
      methodDescriptor_PositionAgingService_UpdatePositionAging,
      callback);
};


/**
 * @param {!proto.cnspb.UpdatePositionAgingRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cnspb.UpdatePositionAgingResponse>}
 *     A native promise that resolves to the response
 */
proto.cnspb.PositionAgingServicePromiseClient.prototype.updatePositionAging =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cnspb.PositionAgingService/UpdatePositionAging',
      request,
      metadata || {},
      methodDescriptor_PositionAgingService_UpdatePositionAging);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cnspb.ListPositionAgingRequest,
 *   !proto.cnspb.ListPositionAgingResponse>}
 */
const methodDescriptor_PositionAgingService_ListPositionAging = new grpc.web.MethodDescriptor(
  '/cnspb.PositionAgingService/ListPositionAging',
  grpc.web.MethodType.UNARY,
  proto.cnspb.ListPositionAgingRequest,
  proto.cnspb.ListPositionAgingResponse,
  /**
   * @param {!proto.cnspb.ListPositionAgingRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cnspb.ListPositionAgingResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cnspb.ListPositionAgingRequest,
 *   !proto.cnspb.ListPositionAgingResponse>}
 */
const methodInfo_PositionAgingService_ListPositionAging = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cnspb.ListPositionAgingResponse,
  /**
   * @param {!proto.cnspb.ListPositionAgingRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cnspb.ListPositionAgingResponse.deserializeBinary
);


/**
 * @param {!proto.cnspb.ListPositionAgingRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cnspb.ListPositionAgingResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cnspb.ListPositionAgingResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cnspb.PositionAgingServiceClient.prototype.listPositionAging =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cnspb.PositionAgingService/ListPositionAging',
      request,
      metadata || {},
      methodDescriptor_PositionAgingService_ListPositionAging,
      callback);
};


/**
 * @param {!proto.cnspb.ListPositionAgingRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cnspb.ListPositionAgingResponse>}
 *     A native promise that resolves to the response
 */
proto.cnspb.PositionAgingServicePromiseClient.prototype.listPositionAging =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cnspb.PositionAgingService/ListPositionAging',
      request,
      metadata || {},
      methodDescriptor_PositionAgingService_ListPositionAging);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cnspb.ListPositionAgingDetailRequest,
 *   !proto.cnspb.ListPositionAgingDetailResponse>}
 */
const methodDescriptor_PositionAgingService_ListPositionAgingDetail = new grpc.web.MethodDescriptor(
  '/cnspb.PositionAgingService/ListPositionAgingDetail',
  grpc.web.MethodType.UNARY,
  proto.cnspb.ListPositionAgingDetailRequest,
  proto.cnspb.ListPositionAgingDetailResponse,
  /**
   * @param {!proto.cnspb.ListPositionAgingDetailRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cnspb.ListPositionAgingDetailResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cnspb.ListPositionAgingDetailRequest,
 *   !proto.cnspb.ListPositionAgingDetailResponse>}
 */
const methodInfo_PositionAgingService_ListPositionAgingDetail = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cnspb.ListPositionAgingDetailResponse,
  /**
   * @param {!proto.cnspb.ListPositionAgingDetailRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cnspb.ListPositionAgingDetailResponse.deserializeBinary
);


/**
 * @param {!proto.cnspb.ListPositionAgingDetailRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cnspb.ListPositionAgingDetailResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cnspb.ListPositionAgingDetailResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cnspb.PositionAgingServiceClient.prototype.listPositionAgingDetail =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cnspb.PositionAgingService/ListPositionAgingDetail',
      request,
      metadata || {},
      methodDescriptor_PositionAgingService_ListPositionAgingDetail,
      callback);
};


/**
 * @param {!proto.cnspb.ListPositionAgingDetailRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cnspb.ListPositionAgingDetailResponse>}
 *     A native promise that resolves to the response
 */
proto.cnspb.PositionAgingServicePromiseClient.prototype.listPositionAgingDetail =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cnspb.PositionAgingService/ListPositionAgingDetail',
      request,
      metadata || {},
      methodDescriptor_PositionAgingService_ListPositionAgingDetail);
};


module.exports = proto.cnspb;

