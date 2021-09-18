/**
 * @fileoverview gRPC-Web generated client stub for trademonitoringpb
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
proto.trademonitoringpb = require('./undueconcentration_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.trademonitoringpb.UndueConcentrationServiceClient =
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
proto.trademonitoringpb.UndueConcentrationServicePromiseClient =
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
 *   !proto.trademonitoringpb.ListUndueConcentrationRequest,
 *   !proto.trademonitoringpb.ListUndueConcentrationResponse>}
 */
const methodDescriptor_UndueConcentrationService_ListUndueConcentration = new grpc.web.MethodDescriptor(
  '/trademonitoringpb.UndueConcentrationService/ListUndueConcentration',
  grpc.web.MethodType.UNARY,
  proto.trademonitoringpb.ListUndueConcentrationRequest,
  proto.trademonitoringpb.ListUndueConcentrationResponse,
  /**
   * @param {!proto.trademonitoringpb.ListUndueConcentrationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.trademonitoringpb.ListUndueConcentrationResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.trademonitoringpb.ListUndueConcentrationRequest,
 *   !proto.trademonitoringpb.ListUndueConcentrationResponse>}
 */
const methodInfo_UndueConcentrationService_ListUndueConcentration = new grpc.web.AbstractClientBase.MethodInfo(
  proto.trademonitoringpb.ListUndueConcentrationResponse,
  /**
   * @param {!proto.trademonitoringpb.ListUndueConcentrationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.trademonitoringpb.ListUndueConcentrationResponse.deserializeBinary
);


/**
 * @param {!proto.trademonitoringpb.ListUndueConcentrationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.trademonitoringpb.ListUndueConcentrationResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.trademonitoringpb.ListUndueConcentrationResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.trademonitoringpb.UndueConcentrationServiceClient.prototype.listUndueConcentration =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/trademonitoringpb.UndueConcentrationService/ListUndueConcentration',
      request,
      metadata || {},
      methodDescriptor_UndueConcentrationService_ListUndueConcentration,
      callback);
};


/**
 * @param {!proto.trademonitoringpb.ListUndueConcentrationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.trademonitoringpb.ListUndueConcentrationResponse>}
 *     Promise that resolves to the response
 */
proto.trademonitoringpb.UndueConcentrationServicePromiseClient.prototype.listUndueConcentration =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/trademonitoringpb.UndueConcentrationService/ListUndueConcentration',
      request,
      metadata || {},
      methodDescriptor_UndueConcentrationService_ListUndueConcentration);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.trademonitoringpb.ListUndueConcentrationDetailRequest,
 *   !proto.trademonitoringpb.ListUndueConcentrationDetailResponse>}
 */
const methodDescriptor_UndueConcentrationService_ListUndueConcentrationDetail = new grpc.web.MethodDescriptor(
  '/trademonitoringpb.UndueConcentrationService/ListUndueConcentrationDetail',
  grpc.web.MethodType.UNARY,
  proto.trademonitoringpb.ListUndueConcentrationDetailRequest,
  proto.trademonitoringpb.ListUndueConcentrationDetailResponse,
  /**
   * @param {!proto.trademonitoringpb.ListUndueConcentrationDetailRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.trademonitoringpb.ListUndueConcentrationDetailResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.trademonitoringpb.ListUndueConcentrationDetailRequest,
 *   !proto.trademonitoringpb.ListUndueConcentrationDetailResponse>}
 */
const methodInfo_UndueConcentrationService_ListUndueConcentrationDetail = new grpc.web.AbstractClientBase.MethodInfo(
  proto.trademonitoringpb.ListUndueConcentrationDetailResponse,
  /**
   * @param {!proto.trademonitoringpb.ListUndueConcentrationDetailRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.trademonitoringpb.ListUndueConcentrationDetailResponse.deserializeBinary
);


/**
 * @param {!proto.trademonitoringpb.ListUndueConcentrationDetailRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.trademonitoringpb.ListUndueConcentrationDetailResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.trademonitoringpb.ListUndueConcentrationDetailResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.trademonitoringpb.UndueConcentrationServiceClient.prototype.listUndueConcentrationDetail =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/trademonitoringpb.UndueConcentrationService/ListUndueConcentrationDetail',
      request,
      metadata || {},
      methodDescriptor_UndueConcentrationService_ListUndueConcentrationDetail,
      callback);
};


/**
 * @param {!proto.trademonitoringpb.ListUndueConcentrationDetailRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.trademonitoringpb.ListUndueConcentrationDetailResponse>}
 *     Promise that resolves to the response
 */
proto.trademonitoringpb.UndueConcentrationServicePromiseClient.prototype.listUndueConcentrationDetail =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/trademonitoringpb.UndueConcentrationService/ListUndueConcentrationDetail',
      request,
      metadata || {},
      methodDescriptor_UndueConcentrationService_ListUndueConcentrationDetail);
};


module.exports = proto.trademonitoringpb;

