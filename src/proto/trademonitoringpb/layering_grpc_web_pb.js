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
proto.trademonitoringpb = require('./layering_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.trademonitoringpb.LayeringServiceClient =
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
proto.trademonitoringpb.LayeringServicePromiseClient =
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
 *   !proto.trademonitoringpb.ListLayeringRequest,
 *   !proto.trademonitoringpb.ListLayeringResponse>}
 */
const methodDescriptor_LayeringService_ListLayering = new grpc.web.MethodDescriptor(
  '/trademonitoringpb.LayeringService/ListLayering',
  grpc.web.MethodType.UNARY,
  proto.trademonitoringpb.ListLayeringRequest,
  proto.trademonitoringpb.ListLayeringResponse,
  /**
   * @param {!proto.trademonitoringpb.ListLayeringRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.trademonitoringpb.ListLayeringResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.trademonitoringpb.ListLayeringRequest,
 *   !proto.trademonitoringpb.ListLayeringResponse>}
 */
const methodInfo_LayeringService_ListLayering = new grpc.web.AbstractClientBase.MethodInfo(
  proto.trademonitoringpb.ListLayeringResponse,
  /**
   * @param {!proto.trademonitoringpb.ListLayeringRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.trademonitoringpb.ListLayeringResponse.deserializeBinary
);


/**
 * @param {!proto.trademonitoringpb.ListLayeringRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.trademonitoringpb.ListLayeringResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.trademonitoringpb.ListLayeringResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.trademonitoringpb.LayeringServiceClient.prototype.listLayering =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/trademonitoringpb.LayeringService/ListLayering',
      request,
      metadata || {},
      methodDescriptor_LayeringService_ListLayering,
      callback);
};


/**
 * @param {!proto.trademonitoringpb.ListLayeringRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.trademonitoringpb.ListLayeringResponse>}
 *     Promise that resolves to the response
 */
proto.trademonitoringpb.LayeringServicePromiseClient.prototype.listLayering =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/trademonitoringpb.LayeringService/ListLayering',
      request,
      metadata || {},
      methodDescriptor_LayeringService_ListLayering);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.trademonitoringpb.DetailsLayeringRequest,
 *   !proto.trademonitoringpb.DetailsLayeringResponse>}
 */
const methodDescriptor_LayeringService_DetailsLayering = new grpc.web.MethodDescriptor(
  '/trademonitoringpb.LayeringService/DetailsLayering',
  grpc.web.MethodType.UNARY,
  proto.trademonitoringpb.DetailsLayeringRequest,
  proto.trademonitoringpb.DetailsLayeringResponse,
  /**
   * @param {!proto.trademonitoringpb.DetailsLayeringRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.trademonitoringpb.DetailsLayeringResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.trademonitoringpb.DetailsLayeringRequest,
 *   !proto.trademonitoringpb.DetailsLayeringResponse>}
 */
const methodInfo_LayeringService_DetailsLayering = new grpc.web.AbstractClientBase.MethodInfo(
  proto.trademonitoringpb.DetailsLayeringResponse,
  /**
   * @param {!proto.trademonitoringpb.DetailsLayeringRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.trademonitoringpb.DetailsLayeringResponse.deserializeBinary
);


/**
 * @param {!proto.trademonitoringpb.DetailsLayeringRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.trademonitoringpb.DetailsLayeringResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.trademonitoringpb.DetailsLayeringResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.trademonitoringpb.LayeringServiceClient.prototype.detailsLayering =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/trademonitoringpb.LayeringService/DetailsLayering',
      request,
      metadata || {},
      methodDescriptor_LayeringService_DetailsLayering,
      callback);
};


/**
 * @param {!proto.trademonitoringpb.DetailsLayeringRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.trademonitoringpb.DetailsLayeringResponse>}
 *     Promise that resolves to the response
 */
proto.trademonitoringpb.LayeringServicePromiseClient.prototype.detailsLayering =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/trademonitoringpb.LayeringService/DetailsLayering',
      request,
      metadata || {},
      methodDescriptor_LayeringService_DetailsLayering);
};


module.exports = proto.trademonitoringpb;

