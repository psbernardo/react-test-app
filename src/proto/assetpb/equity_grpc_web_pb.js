/**
 * @fileoverview gRPC-Web generated client stub for assetpb
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')

var google_type_date_pb = require('../../google/type/date_pb.js')
const proto = {};
proto.assetpb = require('./equity_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.assetpb.EquityServiceClient =
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
proto.assetpb.EquityServicePromiseClient =
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
 *   !proto.assetpb.ReadEquityRequest,
 *   !proto.assetpb.ReadEquityResponse>}
 */
const methodDescriptor_EquityService_ReadEquity = new grpc.web.MethodDescriptor(
  '/assetpb.EquityService/ReadEquity',
  grpc.web.MethodType.UNARY,
  proto.assetpb.ReadEquityRequest,
  proto.assetpb.ReadEquityResponse,
  /**
   * @param {!proto.assetpb.ReadEquityRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.assetpb.ReadEquityResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.assetpb.ReadEquityRequest,
 *   !proto.assetpb.ReadEquityResponse>}
 */
const methodInfo_EquityService_ReadEquity = new grpc.web.AbstractClientBase.MethodInfo(
  proto.assetpb.ReadEquityResponse,
  /**
   * @param {!proto.assetpb.ReadEquityRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.assetpb.ReadEquityResponse.deserializeBinary
);


/**
 * @param {!proto.assetpb.ReadEquityRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.assetpb.ReadEquityResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.assetpb.ReadEquityResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.assetpb.EquityServiceClient.prototype.readEquity =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/assetpb.EquityService/ReadEquity',
      request,
      metadata || {},
      methodDescriptor_EquityService_ReadEquity,
      callback);
};


/**
 * @param {!proto.assetpb.ReadEquityRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.assetpb.ReadEquityResponse>}
 *     Promise that resolves to the response
 */
proto.assetpb.EquityServicePromiseClient.prototype.readEquity =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/assetpb.EquityService/ReadEquity',
      request,
      metadata || {},
      methodDescriptor_EquityService_ReadEquity);
};


module.exports = proto.assetpb;

