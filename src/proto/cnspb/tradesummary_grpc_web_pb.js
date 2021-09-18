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


var google_type_date_pb = require('../../google/type/date_pb.js')
const proto = {};
proto.cnspb = require('./tradesummary_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.cnspb.TradeSummaryServiceClient =
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
proto.cnspb.TradeSummaryServicePromiseClient =
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
 *   !proto.cnspb.UpdateTradeSummaryRequest,
 *   !proto.cnspb.UpdateTradeSummaryResponse>}
 */
const methodDescriptor_TradeSummaryService_UpdateTradeSummary = new grpc.web.MethodDescriptor(
  '/cnspb.TradeSummaryService/UpdateTradeSummary',
  grpc.web.MethodType.UNARY,
  proto.cnspb.UpdateTradeSummaryRequest,
  proto.cnspb.UpdateTradeSummaryResponse,
  /**
   * @param {!proto.cnspb.UpdateTradeSummaryRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cnspb.UpdateTradeSummaryResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cnspb.UpdateTradeSummaryRequest,
 *   !proto.cnspb.UpdateTradeSummaryResponse>}
 */
const methodInfo_TradeSummaryService_UpdateTradeSummary = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cnspb.UpdateTradeSummaryResponse,
  /**
   * @param {!proto.cnspb.UpdateTradeSummaryRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cnspb.UpdateTradeSummaryResponse.deserializeBinary
);


/**
 * @param {!proto.cnspb.UpdateTradeSummaryRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cnspb.UpdateTradeSummaryResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cnspb.UpdateTradeSummaryResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cnspb.TradeSummaryServiceClient.prototype.updateTradeSummary =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cnspb.TradeSummaryService/UpdateTradeSummary',
      request,
      metadata || {},
      methodDescriptor_TradeSummaryService_UpdateTradeSummary,
      callback);
};


/**
 * @param {!proto.cnspb.UpdateTradeSummaryRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cnspb.UpdateTradeSummaryResponse>}
 *     A native promise that resolves to the response
 */
proto.cnspb.TradeSummaryServicePromiseClient.prototype.updateTradeSummary =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cnspb.TradeSummaryService/UpdateTradeSummary',
      request,
      metadata || {},
      methodDescriptor_TradeSummaryService_UpdateTradeSummary);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cnspb.ListTradeSummaryRequest,
 *   !proto.cnspb.ListTradeSummaryResponse>}
 */
const methodDescriptor_TradeSummaryService_ListTradeSummary = new grpc.web.MethodDescriptor(
  '/cnspb.TradeSummaryService/ListTradeSummary',
  grpc.web.MethodType.UNARY,
  proto.cnspb.ListTradeSummaryRequest,
  proto.cnspb.ListTradeSummaryResponse,
  /**
   * @param {!proto.cnspb.ListTradeSummaryRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cnspb.ListTradeSummaryResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cnspb.ListTradeSummaryRequest,
 *   !proto.cnspb.ListTradeSummaryResponse>}
 */
const methodInfo_TradeSummaryService_ListTradeSummary = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cnspb.ListTradeSummaryResponse,
  /**
   * @param {!proto.cnspb.ListTradeSummaryRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cnspb.ListTradeSummaryResponse.deserializeBinary
);


/**
 * @param {!proto.cnspb.ListTradeSummaryRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cnspb.ListTradeSummaryResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cnspb.ListTradeSummaryResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cnspb.TradeSummaryServiceClient.prototype.listTradeSummary =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cnspb.TradeSummaryService/ListTradeSummary',
      request,
      metadata || {},
      methodDescriptor_TradeSummaryService_ListTradeSummary,
      callback);
};


/**
 * @param {!proto.cnspb.ListTradeSummaryRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cnspb.ListTradeSummaryResponse>}
 *     A native promise that resolves to the response
 */
proto.cnspb.TradeSummaryServicePromiseClient.prototype.listTradeSummary =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cnspb.TradeSummaryService/ListTradeSummary',
      request,
      metadata || {},
      methodDescriptor_TradeSummaryService_ListTradeSummary);
};


module.exports = proto.cnspb;

