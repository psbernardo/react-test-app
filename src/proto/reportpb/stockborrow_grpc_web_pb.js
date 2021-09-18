/**
 * @fileoverview gRPC-Web generated client stub for reorgpb
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
proto.reorgpb = require('./stockborrow_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.reorgpb.StockBorrowServiceClient =
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
proto.reorgpb.StockBorrowServicePromiseClient =
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
 *   !proto.reorgpb.ListStockBorrowRequest,
 *   !proto.reorgpb.ListStockBorrowResponse>}
 */
const methodDescriptor_StockBorrowService_ListStockBorrow = new grpc.web.MethodDescriptor(
  '/reorgpb.StockBorrowService/ListStockBorrow',
  grpc.web.MethodType.UNARY,
  proto.reorgpb.ListStockBorrowRequest,
  proto.reorgpb.ListStockBorrowResponse,
  /**
   * @param {!proto.reorgpb.ListStockBorrowRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.reorgpb.ListStockBorrowResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.reorgpb.ListStockBorrowRequest,
 *   !proto.reorgpb.ListStockBorrowResponse>}
 */
const methodInfo_StockBorrowService_ListStockBorrow = new grpc.web.AbstractClientBase.MethodInfo(
  proto.reorgpb.ListStockBorrowResponse,
  /**
   * @param {!proto.reorgpb.ListStockBorrowRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.reorgpb.ListStockBorrowResponse.deserializeBinary
);


/**
 * @param {!proto.reorgpb.ListStockBorrowRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.reorgpb.ListStockBorrowResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.reorgpb.ListStockBorrowResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.reorgpb.StockBorrowServiceClient.prototype.listStockBorrow =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/reorgpb.StockBorrowService/ListStockBorrow',
      request,
      metadata || {},
      methodDescriptor_StockBorrowService_ListStockBorrow,
      callback);
};


/**
 * @param {!proto.reorgpb.ListStockBorrowRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.reorgpb.ListStockBorrowResponse>}
 *     A native promise that resolves to the response
 */
proto.reorgpb.StockBorrowServicePromiseClient.prototype.listStockBorrow =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/reorgpb.StockBorrowService/ListStockBorrow',
      request,
      metadata || {},
      methodDescriptor_StockBorrowService_ListStockBorrow);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.reorgpb.ListStockBorrowDetailRequest,
 *   !proto.reorgpb.ListStockBorrowDetailResponse>}
 */
const methodDescriptor_StockBorrowService_ListStockBorrowDetail = new grpc.web.MethodDescriptor(
  '/reorgpb.StockBorrowService/ListStockBorrowDetail',
  grpc.web.MethodType.UNARY,
  proto.reorgpb.ListStockBorrowDetailRequest,
  proto.reorgpb.ListStockBorrowDetailResponse,
  /**
   * @param {!proto.reorgpb.ListStockBorrowDetailRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.reorgpb.ListStockBorrowDetailResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.reorgpb.ListStockBorrowDetailRequest,
 *   !proto.reorgpb.ListStockBorrowDetailResponse>}
 */
const methodInfo_StockBorrowService_ListStockBorrowDetail = new grpc.web.AbstractClientBase.MethodInfo(
  proto.reorgpb.ListStockBorrowDetailResponse,
  /**
   * @param {!proto.reorgpb.ListStockBorrowDetailRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.reorgpb.ListStockBorrowDetailResponse.deserializeBinary
);


/**
 * @param {!proto.reorgpb.ListStockBorrowDetailRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.reorgpb.ListStockBorrowDetailResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.reorgpb.ListStockBorrowDetailResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.reorgpb.StockBorrowServiceClient.prototype.listStockBorrowDetail =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/reorgpb.StockBorrowService/ListStockBorrowDetail',
      request,
      metadata || {},
      methodDescriptor_StockBorrowService_ListStockBorrowDetail,
      callback);
};


/**
 * @param {!proto.reorgpb.ListStockBorrowDetailRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.reorgpb.ListStockBorrowDetailResponse>}
 *     A native promise that resolves to the response
 */
proto.reorgpb.StockBorrowServicePromiseClient.prototype.listStockBorrowDetail =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/reorgpb.StockBorrowService/ListStockBorrowDetail',
      request,
      metadata || {},
      methodDescriptor_StockBorrowService_ListStockBorrowDetail);
};


module.exports = proto.reorgpb;

