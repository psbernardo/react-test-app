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
proto.trademonitoringpb = require('./oddlot_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.trademonitoringpb.OddLotServiceClient =
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
proto.trademonitoringpb.OddLotServicePromiseClient =
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
 *   !proto.trademonitoringpb.ReadOddLotRequest,
 *   !proto.trademonitoringpb.ReadOddLotResponse>}
 */
const methodDescriptor_OddLotService_ReadOddLot = new grpc.web.MethodDescriptor(
  '/trademonitoringpb.OddLotService/ReadOddLot',
  grpc.web.MethodType.UNARY,
  proto.trademonitoringpb.ReadOddLotRequest,
  proto.trademonitoringpb.ReadOddLotResponse,
  /**
   * @param {!proto.trademonitoringpb.ReadOddLotRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.trademonitoringpb.ReadOddLotResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.trademonitoringpb.ReadOddLotRequest,
 *   !proto.trademonitoringpb.ReadOddLotResponse>}
 */
const methodInfo_OddLotService_ReadOddLot = new grpc.web.AbstractClientBase.MethodInfo(
  proto.trademonitoringpb.ReadOddLotResponse,
  /**
   * @param {!proto.trademonitoringpb.ReadOddLotRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.trademonitoringpb.ReadOddLotResponse.deserializeBinary
);


/**
 * @param {!proto.trademonitoringpb.ReadOddLotRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.trademonitoringpb.ReadOddLotResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.trademonitoringpb.ReadOddLotResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.trademonitoringpb.OddLotServiceClient.prototype.readOddLot =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/trademonitoringpb.OddLotService/ReadOddLot',
      request,
      metadata || {},
      methodDescriptor_OddLotService_ReadOddLot,
      callback);
};


/**
 * @param {!proto.trademonitoringpb.ReadOddLotRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.trademonitoringpb.ReadOddLotResponse>}
 *     Promise that resolves to the response
 */
proto.trademonitoringpb.OddLotServicePromiseClient.prototype.readOddLot =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/trademonitoringpb.OddLotService/ReadOddLot',
      request,
      metadata || {},
      methodDescriptor_OddLotService_ReadOddLot);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.trademonitoringpb.ListOddLotRequest,
 *   !proto.trademonitoringpb.ListOddLotResponse>}
 */
const methodDescriptor_OddLotService_ListOddLot = new grpc.web.MethodDescriptor(
  '/trademonitoringpb.OddLotService/ListOddLot',
  grpc.web.MethodType.UNARY,
  proto.trademonitoringpb.ListOddLotRequest,
  proto.trademonitoringpb.ListOddLotResponse,
  /**
   * @param {!proto.trademonitoringpb.ListOddLotRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.trademonitoringpb.ListOddLotResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.trademonitoringpb.ListOddLotRequest,
 *   !proto.trademonitoringpb.ListOddLotResponse>}
 */
const methodInfo_OddLotService_ListOddLot = new grpc.web.AbstractClientBase.MethodInfo(
  proto.trademonitoringpb.ListOddLotResponse,
  /**
   * @param {!proto.trademonitoringpb.ListOddLotRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.trademonitoringpb.ListOddLotResponse.deserializeBinary
);


/**
 * @param {!proto.trademonitoringpb.ListOddLotRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.trademonitoringpb.ListOddLotResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.trademonitoringpb.ListOddLotResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.trademonitoringpb.OddLotServiceClient.prototype.listOddLot =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/trademonitoringpb.OddLotService/ListOddLot',
      request,
      metadata || {},
      methodDescriptor_OddLotService_ListOddLot,
      callback);
};


/**
 * @param {!proto.trademonitoringpb.ListOddLotRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.trademonitoringpb.ListOddLotResponse>}
 *     Promise that resolves to the response
 */
proto.trademonitoringpb.OddLotServicePromiseClient.prototype.listOddLot =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/trademonitoringpb.OddLotService/ListOddLot',
      request,
      metadata || {},
      methodDescriptor_OddLotService_ListOddLot);
};


module.exports = proto.trademonitoringpb;

