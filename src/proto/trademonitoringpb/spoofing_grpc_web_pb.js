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

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')
const proto = {};
proto.trademonitoringpb = require('./spoofing_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.trademonitoringpb.SpoofingServiceClient =
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
proto.trademonitoringpb.SpoofingServicePromiseClient =
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
 *   !proto.trademonitoringpb.ListSpoofingRequest,
 *   !proto.trademonitoringpb.ListSpoofingResponse>}
 */
const methodDescriptor_SpoofingService_ListSpoofing = new grpc.web.MethodDescriptor(
  '/trademonitoringpb.SpoofingService/ListSpoofing',
  grpc.web.MethodType.UNARY,
  proto.trademonitoringpb.ListSpoofingRequest,
  proto.trademonitoringpb.ListSpoofingResponse,
  /**
   * @param {!proto.trademonitoringpb.ListSpoofingRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.trademonitoringpb.ListSpoofingResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.trademonitoringpb.ListSpoofingRequest,
 *   !proto.trademonitoringpb.ListSpoofingResponse>}
 */
const methodInfo_SpoofingService_ListSpoofing = new grpc.web.AbstractClientBase.MethodInfo(
  proto.trademonitoringpb.ListSpoofingResponse,
  /**
   * @param {!proto.trademonitoringpb.ListSpoofingRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.trademonitoringpb.ListSpoofingResponse.deserializeBinary
);


/**
 * @param {!proto.trademonitoringpb.ListSpoofingRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.trademonitoringpb.ListSpoofingResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.trademonitoringpb.ListSpoofingResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.trademonitoringpb.SpoofingServiceClient.prototype.listSpoofing =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/trademonitoringpb.SpoofingService/ListSpoofing',
      request,
      metadata || {},
      methodDescriptor_SpoofingService_ListSpoofing,
      callback);
};


/**
 * @param {!proto.trademonitoringpb.ListSpoofingRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.trademonitoringpb.ListSpoofingResponse>}
 *     Promise that resolves to the response
 */
proto.trademonitoringpb.SpoofingServicePromiseClient.prototype.listSpoofing =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/trademonitoringpb.SpoofingService/ListSpoofing',
      request,
      metadata || {},
      methodDescriptor_SpoofingService_ListSpoofing);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.trademonitoringpb.DetailsSpoofingRequest,
 *   !proto.trademonitoringpb.DetailsSpoofingResponse>}
 */
const methodDescriptor_SpoofingService_DetailsSpoofing = new grpc.web.MethodDescriptor(
  '/trademonitoringpb.SpoofingService/DetailsSpoofing',
  grpc.web.MethodType.UNARY,
  proto.trademonitoringpb.DetailsSpoofingRequest,
  proto.trademonitoringpb.DetailsSpoofingResponse,
  /**
   * @param {!proto.trademonitoringpb.DetailsSpoofingRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.trademonitoringpb.DetailsSpoofingResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.trademonitoringpb.DetailsSpoofingRequest,
 *   !proto.trademonitoringpb.DetailsSpoofingResponse>}
 */
const methodInfo_SpoofingService_DetailsSpoofing = new grpc.web.AbstractClientBase.MethodInfo(
  proto.trademonitoringpb.DetailsSpoofingResponse,
  /**
   * @param {!proto.trademonitoringpb.DetailsSpoofingRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.trademonitoringpb.DetailsSpoofingResponse.deserializeBinary
);


/**
 * @param {!proto.trademonitoringpb.DetailsSpoofingRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.trademonitoringpb.DetailsSpoofingResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.trademonitoringpb.DetailsSpoofingResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.trademonitoringpb.SpoofingServiceClient.prototype.detailsSpoofing =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/trademonitoringpb.SpoofingService/DetailsSpoofing',
      request,
      metadata || {},
      methodDescriptor_SpoofingService_DetailsSpoofing,
      callback);
};


/**
 * @param {!proto.trademonitoringpb.DetailsSpoofingRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.trademonitoringpb.DetailsSpoofingResponse>}
 *     Promise that resolves to the response
 */
proto.trademonitoringpb.SpoofingServicePromiseClient.prototype.detailsSpoofing =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/trademonitoringpb.SpoofingService/DetailsSpoofing',
      request,
      metadata || {},
      methodDescriptor_SpoofingService_DetailsSpoofing);
};


module.exports = proto.trademonitoringpb;

