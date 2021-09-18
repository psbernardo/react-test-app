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
proto.trademonitoringpb = require('./concentration_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.trademonitoringpb.ConcentrationServiceClient =
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
proto.trademonitoringpb.ConcentrationServicePromiseClient =
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
 *   !proto.trademonitoringpb.ListConcentrationRequest,
 *   !proto.trademonitoringpb.ListConcentrationResponse>}
 */
const methodDescriptor_ConcentrationService_ListConcentration = new grpc.web.MethodDescriptor(
  '/trademonitoringpb.ConcentrationService/ListConcentration',
  grpc.web.MethodType.UNARY,
  proto.trademonitoringpb.ListConcentrationRequest,
  proto.trademonitoringpb.ListConcentrationResponse,
  /**
   * @param {!proto.trademonitoringpb.ListConcentrationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.trademonitoringpb.ListConcentrationResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.trademonitoringpb.ListConcentrationRequest,
 *   !proto.trademonitoringpb.ListConcentrationResponse>}
 */
const methodInfo_ConcentrationService_ListConcentration = new grpc.web.AbstractClientBase.MethodInfo(
  proto.trademonitoringpb.ListConcentrationResponse,
  /**
   * @param {!proto.trademonitoringpb.ListConcentrationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.trademonitoringpb.ListConcentrationResponse.deserializeBinary
);


/**
 * @param {!proto.trademonitoringpb.ListConcentrationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.trademonitoringpb.ListConcentrationResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.trademonitoringpb.ListConcentrationResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.trademonitoringpb.ConcentrationServiceClient.prototype.listConcentration =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/trademonitoringpb.ConcentrationService/ListConcentration',
      request,
      metadata || {},
      methodDescriptor_ConcentrationService_ListConcentration,
      callback);
};


/**
 * @param {!proto.trademonitoringpb.ListConcentrationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.trademonitoringpb.ListConcentrationResponse>}
 *     Promise that resolves to the response
 */
proto.trademonitoringpb.ConcentrationServicePromiseClient.prototype.listConcentration =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/trademonitoringpb.ConcentrationService/ListConcentration',
      request,
      metadata || {},
      methodDescriptor_ConcentrationService_ListConcentration);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.trademonitoringpb.ListConcentrationDetailRequest,
 *   !proto.trademonitoringpb.ListConcentrationDetailResponse>}
 */
const methodDescriptor_ConcentrationService_ListConcentrationDetail = new grpc.web.MethodDescriptor(
  '/trademonitoringpb.ConcentrationService/ListConcentrationDetail',
  grpc.web.MethodType.UNARY,
  proto.trademonitoringpb.ListConcentrationDetailRequest,
  proto.trademonitoringpb.ListConcentrationDetailResponse,
  /**
   * @param {!proto.trademonitoringpb.ListConcentrationDetailRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.trademonitoringpb.ListConcentrationDetailResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.trademonitoringpb.ListConcentrationDetailRequest,
 *   !proto.trademonitoringpb.ListConcentrationDetailResponse>}
 */
const methodInfo_ConcentrationService_ListConcentrationDetail = new grpc.web.AbstractClientBase.MethodInfo(
  proto.trademonitoringpb.ListConcentrationDetailResponse,
  /**
   * @param {!proto.trademonitoringpb.ListConcentrationDetailRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.trademonitoringpb.ListConcentrationDetailResponse.deserializeBinary
);


/**
 * @param {!proto.trademonitoringpb.ListConcentrationDetailRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.trademonitoringpb.ListConcentrationDetailResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.trademonitoringpb.ListConcentrationDetailResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.trademonitoringpb.ConcentrationServiceClient.prototype.listConcentrationDetail =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/trademonitoringpb.ConcentrationService/ListConcentrationDetail',
      request,
      metadata || {},
      methodDescriptor_ConcentrationService_ListConcentrationDetail,
      callback);
};


/**
 * @param {!proto.trademonitoringpb.ListConcentrationDetailRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.trademonitoringpb.ListConcentrationDetailResponse>}
 *     Promise that resolves to the response
 */
proto.trademonitoringpb.ConcentrationServicePromiseClient.prototype.listConcentrationDetail =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/trademonitoringpb.ConcentrationService/ListConcentrationDetail',
      request,
      metadata || {},
      methodDescriptor_ConcentrationService_ListConcentrationDetail);
};


module.exports = proto.trademonitoringpb;

