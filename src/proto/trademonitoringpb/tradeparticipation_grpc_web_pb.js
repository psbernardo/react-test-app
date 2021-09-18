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
proto.trademonitoringpb = require('./tradeparticipation_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.trademonitoringpb.TradeParticipationServiceClient =
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
proto.trademonitoringpb.TradeParticipationServicePromiseClient =
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
 *   !proto.trademonitoringpb.ReadTradeParticipationRequest,
 *   !proto.trademonitoringpb.ReadTradeParticipationResponse>}
 */
const methodDescriptor_TradeParticipationService_ReadTradeParticipation = new grpc.web.MethodDescriptor(
  '/trademonitoringpb.TradeParticipationService/ReadTradeParticipation',
  grpc.web.MethodType.UNARY,
  proto.trademonitoringpb.ReadTradeParticipationRequest,
  proto.trademonitoringpb.ReadTradeParticipationResponse,
  /**
   * @param {!proto.trademonitoringpb.ReadTradeParticipationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.trademonitoringpb.ReadTradeParticipationResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.trademonitoringpb.ReadTradeParticipationRequest,
 *   !proto.trademonitoringpb.ReadTradeParticipationResponse>}
 */
const methodInfo_TradeParticipationService_ReadTradeParticipation = new grpc.web.AbstractClientBase.MethodInfo(
  proto.trademonitoringpb.ReadTradeParticipationResponse,
  /**
   * @param {!proto.trademonitoringpb.ReadTradeParticipationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.trademonitoringpb.ReadTradeParticipationResponse.deserializeBinary
);


/**
 * @param {!proto.trademonitoringpb.ReadTradeParticipationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.trademonitoringpb.ReadTradeParticipationResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.trademonitoringpb.ReadTradeParticipationResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.trademonitoringpb.TradeParticipationServiceClient.prototype.readTradeParticipation =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/trademonitoringpb.TradeParticipationService/ReadTradeParticipation',
      request,
      metadata || {},
      methodDescriptor_TradeParticipationService_ReadTradeParticipation,
      callback);
};


/**
 * @param {!proto.trademonitoringpb.ReadTradeParticipationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.trademonitoringpb.ReadTradeParticipationResponse>}
 *     Promise that resolves to the response
 */
proto.trademonitoringpb.TradeParticipationServicePromiseClient.prototype.readTradeParticipation =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/trademonitoringpb.TradeParticipationService/ReadTradeParticipation',
      request,
      metadata || {},
      methodDescriptor_TradeParticipationService_ReadTradeParticipation);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.trademonitoringpb.ListTradeParticipationRequest,
 *   !proto.trademonitoringpb.ListTradeParticipationResponse>}
 */
const methodDescriptor_TradeParticipationService_ListTradeParticipation = new grpc.web.MethodDescriptor(
  '/trademonitoringpb.TradeParticipationService/ListTradeParticipation',
  grpc.web.MethodType.UNARY,
  proto.trademonitoringpb.ListTradeParticipationRequest,
  proto.trademonitoringpb.ListTradeParticipationResponse,
  /**
   * @param {!proto.trademonitoringpb.ListTradeParticipationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.trademonitoringpb.ListTradeParticipationResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.trademonitoringpb.ListTradeParticipationRequest,
 *   !proto.trademonitoringpb.ListTradeParticipationResponse>}
 */
const methodInfo_TradeParticipationService_ListTradeParticipation = new grpc.web.AbstractClientBase.MethodInfo(
  proto.trademonitoringpb.ListTradeParticipationResponse,
  /**
   * @param {!proto.trademonitoringpb.ListTradeParticipationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.trademonitoringpb.ListTradeParticipationResponse.deserializeBinary
);


/**
 * @param {!proto.trademonitoringpb.ListTradeParticipationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.trademonitoringpb.ListTradeParticipationResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.trademonitoringpb.ListTradeParticipationResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.trademonitoringpb.TradeParticipationServiceClient.prototype.listTradeParticipation =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/trademonitoringpb.TradeParticipationService/ListTradeParticipation',
      request,
      metadata || {},
      methodDescriptor_TradeParticipationService_ListTradeParticipation,
      callback);
};


/**
 * @param {!proto.trademonitoringpb.ListTradeParticipationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.trademonitoringpb.ListTradeParticipationResponse>}
 *     Promise that resolves to the response
 */
proto.trademonitoringpb.TradeParticipationServicePromiseClient.prototype.listTradeParticipation =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/trademonitoringpb.TradeParticipationService/ListTradeParticipation',
      request,
      metadata || {},
      methodDescriptor_TradeParticipationService_ListTradeParticipation);
};


module.exports = proto.trademonitoringpb;

