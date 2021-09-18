/**
 * @fileoverview gRPC-Web generated client stub for reportpb
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
proto.reportpb = require('./stockrecord_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.reportpb.StockRecordServiceClient =
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
proto.reportpb.StockRecordServicePromiseClient =
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
 *   !proto.reportpb.ListStockRecordRequest,
 *   !proto.reportpb.ListStockRecordResponse>}
 */
const methodDescriptor_StockRecordService_ListStockRecord = new grpc.web.MethodDescriptor(
  '/reportpb.StockRecordService/ListStockRecord',
  grpc.web.MethodType.UNARY,
  proto.reportpb.ListStockRecordRequest,
  proto.reportpb.ListStockRecordResponse,
  /**
   * @param {!proto.reportpb.ListStockRecordRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.reportpb.ListStockRecordResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.reportpb.ListStockRecordRequest,
 *   !proto.reportpb.ListStockRecordResponse>}
 */
const methodInfo_StockRecordService_ListStockRecord = new grpc.web.AbstractClientBase.MethodInfo(
  proto.reportpb.ListStockRecordResponse,
  /**
   * @param {!proto.reportpb.ListStockRecordRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.reportpb.ListStockRecordResponse.deserializeBinary
);


/**
 * @param {!proto.reportpb.ListStockRecordRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.reportpb.ListStockRecordResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.reportpb.ListStockRecordResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.reportpb.StockRecordServiceClient.prototype.listStockRecord =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/reportpb.StockRecordService/ListStockRecord',
      request,
      metadata || {},
      methodDescriptor_StockRecordService_ListStockRecord,
      callback);
};


/**
 * @param {!proto.reportpb.ListStockRecordRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.reportpb.ListStockRecordResponse>}
 *     A native promise that resolves to the response
 */
proto.reportpb.StockRecordServicePromiseClient.prototype.listStockRecord =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/reportpb.StockRecordService/ListStockRecord',
      request,
      metadata || {},
      methodDescriptor_StockRecordService_ListStockRecord);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.reportpb.ListStockRecordDetailRequest,
 *   !proto.reportpb.ListStockRecordDetailResponse>}
 */
const methodDescriptor_StockRecordService_ListStockRecordDetail = new grpc.web.MethodDescriptor(
  '/reportpb.StockRecordService/ListStockRecordDetail',
  grpc.web.MethodType.UNARY,
  proto.reportpb.ListStockRecordDetailRequest,
  proto.reportpb.ListStockRecordDetailResponse,
  /**
   * @param {!proto.reportpb.ListStockRecordDetailRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.reportpb.ListStockRecordDetailResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.reportpb.ListStockRecordDetailRequest,
 *   !proto.reportpb.ListStockRecordDetailResponse>}
 */
const methodInfo_StockRecordService_ListStockRecordDetail = new grpc.web.AbstractClientBase.MethodInfo(
  proto.reportpb.ListStockRecordDetailResponse,
  /**
   * @param {!proto.reportpb.ListStockRecordDetailRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.reportpb.ListStockRecordDetailResponse.deserializeBinary
);


/**
 * @param {!proto.reportpb.ListStockRecordDetailRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.reportpb.ListStockRecordDetailResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.reportpb.ListStockRecordDetailResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.reportpb.StockRecordServiceClient.prototype.listStockRecordDetail =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/reportpb.StockRecordService/ListStockRecordDetail',
      request,
      metadata || {},
      methodDescriptor_StockRecordService_ListStockRecordDetail,
      callback);
};


/**
 * @param {!proto.reportpb.ListStockRecordDetailRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.reportpb.ListStockRecordDetailResponse>}
 *     A native promise that resolves to the response
 */
proto.reportpb.StockRecordServicePromiseClient.prototype.listStockRecordDetail =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/reportpb.StockRecordService/ListStockRecordDetail',
      request,
      metadata || {},
      methodDescriptor_StockRecordService_ListStockRecordDetail);
};


module.exports = proto.reportpb;

