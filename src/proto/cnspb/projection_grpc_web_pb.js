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

var google_type_date_pb = require('../../google/type/date_pb.js');
const proto = {};
proto.cnspb = require('./projection_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.cnspb.ProjectionServiceClient = function(hostname, credentials, options) {
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
proto.cnspb.ProjectionServicePromiseClient = function(
  hostname,
  credentials,
  options
) {
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
 *   !proto.cnspb.ListProjectionRequest,
 *   !proto.cnspb.ListProjectionResponse>}
 */
const methodDescriptor_ProjectionService_ListProjection = new grpc.web.MethodDescriptor(
  '/cnspb.ProjectionService/ListProjection',
  grpc.web.MethodType.UNARY,
  proto.cnspb.ListProjectionRequest,
  proto.cnspb.ListProjectionResponse,
  /**
   * @param {!proto.cnspb.ListProjectionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cnspb.ListProjectionResponse.deserializeBinary
);

/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cnspb.ListProjectionRequest,
 *   !proto.cnspb.ListProjectionResponse>}
 */
const methodInfo_ProjectionService_ListProjection = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cnspb.ListProjectionResponse,
  /**
   * @param {!proto.cnspb.ListProjectionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cnspb.ListProjectionResponse.deserializeBinary
);

/**
 * @param {!proto.cnspb.ListProjectionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cnspb.ListProjectionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cnspb.ListProjectionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cnspb.ProjectionServiceClient.prototype.listProjection = function(
  request,
  metadata,
  callback
) {
  return this.client_.rpcCall(
    this.hostname_ + '/cnspb.ProjectionService/ListProjection',
    request,
    metadata || {},
    methodDescriptor_ProjectionService_ListProjection,
    callback
  );
};

/**
 * @param {!proto.cnspb.ListProjectionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cnspb.ListProjectionResponse>}
 *     A native promise that resolves to the response
 */
proto.cnspb.ProjectionServicePromiseClient.prototype.listProjection = function(
  request,
  metadata
) {
  return this.client_.unaryCall(
    this.hostname_ + '/cnspb.ProjectionService/ListProjection',
    request,
    metadata || {},
    methodDescriptor_ProjectionService_ListProjection
  );
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cnspb.ListProjectionDetailRequest,
 *   !proto.cnspb.ListProjectionDetailResponse>}
 */
const methodDescriptor_ProjectionService_ListProjectionDetail = new grpc.web.MethodDescriptor(
  '/cnspb.ProjectionService/ListProjectionDetail',
  grpc.web.MethodType.UNARY,
  proto.cnspb.ListProjectionDetailRequest,
  proto.cnspb.ListProjectionDetailResponse,
  /**
   * @param {!proto.cnspb.ListProjectionDetailRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cnspb.ListProjectionDetailResponse.deserializeBinary
);

/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cnspb.ListProjectionDetailRequest,
 *   !proto.cnspb.ListProjectionDetailResponse>}
 */
const methodInfo_ProjectionService_ListProjectionDetail = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cnspb.ListProjectionDetailResponse,
  /**
   * @param {!proto.cnspb.ListProjectionDetailRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cnspb.ListProjectionDetailResponse.deserializeBinary
);

/**
 * @param {!proto.cnspb.ListProjectionDetailRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cnspb.ListProjectionDetailResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cnspb.ListProjectionDetailResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cnspb.ProjectionServiceClient.prototype.listProjectionDetail = function(
  request,
  metadata,
  callback
) {
  return this.client_.rpcCall(
    this.hostname_ + '/cnspb.ProjectionService/ListProjectionDetail',
    request,
    metadata || {},
    methodDescriptor_ProjectionService_ListProjectionDetail,
    callback
  );
};

/**
 * @param {!proto.cnspb.ListProjectionDetailRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cnspb.ListProjectionDetailResponse>}
 *     A native promise that resolves to the response
 */
proto.cnspb.ProjectionServicePromiseClient.prototype.listProjectionDetail = function(
  request,
  metadata
) {
  return this.client_.unaryCall(
    this.hostname_ + '/cnspb.ProjectionService/ListProjectionDetail',
    request,
    metadata || {},
    methodDescriptor_ProjectionService_ListProjectionDetail
  );
};

module.exports = proto.cnspb;
