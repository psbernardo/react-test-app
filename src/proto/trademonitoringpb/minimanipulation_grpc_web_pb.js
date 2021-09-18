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
proto.trademonitoringpb = require('./minimanipulation_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.trademonitoringpb.MiniManipulationServiceClient =
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
proto.trademonitoringpb.MiniManipulationServicePromiseClient =
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
 *   !proto.trademonitoringpb.ReadMiniManipulationRequest,
 *   !proto.trademonitoringpb.ReadMiniManipulationResponse>}
 */
const methodDescriptor_MiniManipulationService_ReadMiniManipulation = new grpc.web.MethodDescriptor(
  '/trademonitoringpb.MiniManipulationService/ReadMiniManipulation',
  grpc.web.MethodType.UNARY,
  proto.trademonitoringpb.ReadMiniManipulationRequest,
  proto.trademonitoringpb.ReadMiniManipulationResponse,
  /**
   * @param {!proto.trademonitoringpb.ReadMiniManipulationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.trademonitoringpb.ReadMiniManipulationResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.trademonitoringpb.ReadMiniManipulationRequest,
 *   !proto.trademonitoringpb.ReadMiniManipulationResponse>}
 */
const methodInfo_MiniManipulationService_ReadMiniManipulation = new grpc.web.AbstractClientBase.MethodInfo(
  proto.trademonitoringpb.ReadMiniManipulationResponse,
  /**
   * @param {!proto.trademonitoringpb.ReadMiniManipulationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.trademonitoringpb.ReadMiniManipulationResponse.deserializeBinary
);


/**
 * @param {!proto.trademonitoringpb.ReadMiniManipulationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.trademonitoringpb.ReadMiniManipulationResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.trademonitoringpb.ReadMiniManipulationResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.trademonitoringpb.MiniManipulationServiceClient.prototype.readMiniManipulation =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/trademonitoringpb.MiniManipulationService/ReadMiniManipulation',
      request,
      metadata || {},
      methodDescriptor_MiniManipulationService_ReadMiniManipulation,
      callback);
};


/**
 * @param {!proto.trademonitoringpb.ReadMiniManipulationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.trademonitoringpb.ReadMiniManipulationResponse>}
 *     Promise that resolves to the response
 */
proto.trademonitoringpb.MiniManipulationServicePromiseClient.prototype.readMiniManipulation =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/trademonitoringpb.MiniManipulationService/ReadMiniManipulation',
      request,
      metadata || {},
      methodDescriptor_MiniManipulationService_ReadMiniManipulation);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.trademonitoringpb.ListMiniManipulationRequest,
 *   !proto.trademonitoringpb.ListMiniManipulationResponse>}
 */
const methodDescriptor_MiniManipulationService_ListMiniManipulation = new grpc.web.MethodDescriptor(
  '/trademonitoringpb.MiniManipulationService/ListMiniManipulation',
  grpc.web.MethodType.UNARY,
  proto.trademonitoringpb.ListMiniManipulationRequest,
  proto.trademonitoringpb.ListMiniManipulationResponse,
  /**
   * @param {!proto.trademonitoringpb.ListMiniManipulationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.trademonitoringpb.ListMiniManipulationResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.trademonitoringpb.ListMiniManipulationRequest,
 *   !proto.trademonitoringpb.ListMiniManipulationResponse>}
 */
const methodInfo_MiniManipulationService_ListMiniManipulation = new grpc.web.AbstractClientBase.MethodInfo(
  proto.trademonitoringpb.ListMiniManipulationResponse,
  /**
   * @param {!proto.trademonitoringpb.ListMiniManipulationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.trademonitoringpb.ListMiniManipulationResponse.deserializeBinary
);


/**
 * @param {!proto.trademonitoringpb.ListMiniManipulationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.trademonitoringpb.ListMiniManipulationResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.trademonitoringpb.ListMiniManipulationResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.trademonitoringpb.MiniManipulationServiceClient.prototype.listMiniManipulation =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/trademonitoringpb.MiniManipulationService/ListMiniManipulation',
      request,
      metadata || {},
      methodDescriptor_MiniManipulationService_ListMiniManipulation,
      callback);
};


/**
 * @param {!proto.trademonitoringpb.ListMiniManipulationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.trademonitoringpb.ListMiniManipulationResponse>}
 *     Promise that resolves to the response
 */
proto.trademonitoringpb.MiniManipulationServicePromiseClient.prototype.listMiniManipulation =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/trademonitoringpb.MiniManipulationService/ListMiniManipulation',
      request,
      metadata || {},
      methodDescriptor_MiniManipulationService_ListMiniManipulation);
};


module.exports = proto.trademonitoringpb;

