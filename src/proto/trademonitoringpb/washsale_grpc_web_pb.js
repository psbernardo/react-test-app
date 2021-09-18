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
proto.trademonitoringpb = require('./washsale_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.trademonitoringpb.WashSaleServiceClient =
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
proto.trademonitoringpb.WashSaleServicePromiseClient =
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
 *   !proto.trademonitoringpb.ReadWashSaleRequest,
 *   !proto.trademonitoringpb.ReadWashSaleResponse>}
 */
const methodDescriptor_WashSaleService_ReadWashSale = new grpc.web.MethodDescriptor(
  '/trademonitoringpb.WashSaleService/ReadWashSale',
  grpc.web.MethodType.UNARY,
  proto.trademonitoringpb.ReadWashSaleRequest,
  proto.trademonitoringpb.ReadWashSaleResponse,
  /**
   * @param {!proto.trademonitoringpb.ReadWashSaleRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.trademonitoringpb.ReadWashSaleResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.trademonitoringpb.ReadWashSaleRequest,
 *   !proto.trademonitoringpb.ReadWashSaleResponse>}
 */
const methodInfo_WashSaleService_ReadWashSale = new grpc.web.AbstractClientBase.MethodInfo(
  proto.trademonitoringpb.ReadWashSaleResponse,
  /**
   * @param {!proto.trademonitoringpb.ReadWashSaleRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.trademonitoringpb.ReadWashSaleResponse.deserializeBinary
);


/**
 * @param {!proto.trademonitoringpb.ReadWashSaleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.trademonitoringpb.ReadWashSaleResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.trademonitoringpb.ReadWashSaleResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.trademonitoringpb.WashSaleServiceClient.prototype.readWashSale =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/trademonitoringpb.WashSaleService/ReadWashSale',
      request,
      metadata || {},
      methodDescriptor_WashSaleService_ReadWashSale,
      callback);
};


/**
 * @param {!proto.trademonitoringpb.ReadWashSaleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.trademonitoringpb.ReadWashSaleResponse>}
 *     Promise that resolves to the response
 */
proto.trademonitoringpb.WashSaleServicePromiseClient.prototype.readWashSale =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/trademonitoringpb.WashSaleService/ReadWashSale',
      request,
      metadata || {},
      methodDescriptor_WashSaleService_ReadWashSale);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.trademonitoringpb.ListWashSaleRequest,
 *   !proto.trademonitoringpb.ListWashSaleResponse>}
 */
const methodDescriptor_WashSaleService_ListWashSale = new grpc.web.MethodDescriptor(
  '/trademonitoringpb.WashSaleService/ListWashSale',
  grpc.web.MethodType.UNARY,
  proto.trademonitoringpb.ListWashSaleRequest,
  proto.trademonitoringpb.ListWashSaleResponse,
  /**
   * @param {!proto.trademonitoringpb.ListWashSaleRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.trademonitoringpb.ListWashSaleResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.trademonitoringpb.ListWashSaleRequest,
 *   !proto.trademonitoringpb.ListWashSaleResponse>}
 */
const methodInfo_WashSaleService_ListWashSale = new grpc.web.AbstractClientBase.MethodInfo(
  proto.trademonitoringpb.ListWashSaleResponse,
  /**
   * @param {!proto.trademonitoringpb.ListWashSaleRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.trademonitoringpb.ListWashSaleResponse.deserializeBinary
);


/**
 * @param {!proto.trademonitoringpb.ListWashSaleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.trademonitoringpb.ListWashSaleResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.trademonitoringpb.ListWashSaleResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.trademonitoringpb.WashSaleServiceClient.prototype.listWashSale =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/trademonitoringpb.WashSaleService/ListWashSale',
      request,
      metadata || {},
      methodDescriptor_WashSaleService_ListWashSale,
      callback);
};


/**
 * @param {!proto.trademonitoringpb.ListWashSaleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.trademonitoringpb.ListWashSaleResponse>}
 *     Promise that resolves to the response
 */
proto.trademonitoringpb.WashSaleServicePromiseClient.prototype.listWashSale =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/trademonitoringpb.WashSaleService/ListWashSale',
      request,
      metadata || {},
      methodDescriptor_WashSaleService_ListWashSale);
};


module.exports = proto.trademonitoringpb;

