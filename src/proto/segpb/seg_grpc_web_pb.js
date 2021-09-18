/**
 * @fileoverview gRPC-Web generated client stub for segpb
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
proto.segpb = require('./seg_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.segpb.SegServiceClient =
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
proto.segpb.SegServicePromiseClient =
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
 *   !proto.segpb.Seg,
 *   !proto.segpb.ListSegAccountResponse>}
 */
const methodDescriptor_SegService_ListSegAccount = new grpc.web.MethodDescriptor(
  '/segpb.SegService/ListSegAccount',
  grpc.web.MethodType.UNARY,
  proto.segpb.Seg,
  proto.segpb.ListSegAccountResponse,
  /**
   * @param {!proto.segpb.Seg} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.segpb.ListSegAccountResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.segpb.Seg,
 *   !proto.segpb.ListSegAccountResponse>}
 */
const methodInfo_SegService_ListSegAccount = new grpc.web.AbstractClientBase.MethodInfo(
  proto.segpb.ListSegAccountResponse,
  /**
   * @param {!proto.segpb.Seg} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.segpb.ListSegAccountResponse.deserializeBinary
);


/**
 * @param {!proto.segpb.Seg} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.segpb.ListSegAccountResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.segpb.ListSegAccountResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.segpb.SegServiceClient.prototype.listSegAccount =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/segpb.SegService/ListSegAccount',
      request,
      metadata || {},
      methodDescriptor_SegService_ListSegAccount,
      callback);
};


/**
 * @param {!proto.segpb.Seg} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.segpb.ListSegAccountResponse>}
 *     A native promise that resolves to the response
 */
proto.segpb.SegServicePromiseClient.prototype.listSegAccount =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/segpb.SegService/ListSegAccount',
      request,
      metadata || {},
      methodDescriptor_SegService_ListSegAccount);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.segpb.Seg,
 *   !proto.segpb.ListSegSymbolResponse>}
 */
const methodDescriptor_SegService_ListSegSymbol = new grpc.web.MethodDescriptor(
  '/segpb.SegService/ListSegSymbol',
  grpc.web.MethodType.UNARY,
  proto.segpb.Seg,
  proto.segpb.ListSegSymbolResponse,
  /**
   * @param {!proto.segpb.Seg} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.segpb.ListSegSymbolResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.segpb.Seg,
 *   !proto.segpb.ListSegSymbolResponse>}
 */
const methodInfo_SegService_ListSegSymbol = new grpc.web.AbstractClientBase.MethodInfo(
  proto.segpb.ListSegSymbolResponse,
  /**
   * @param {!proto.segpb.Seg} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.segpb.ListSegSymbolResponse.deserializeBinary
);


/**
 * @param {!proto.segpb.Seg} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.segpb.ListSegSymbolResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.segpb.ListSegSymbolResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.segpb.SegServiceClient.prototype.listSegSymbol =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/segpb.SegService/ListSegSymbol',
      request,
      metadata || {},
      methodDescriptor_SegService_ListSegSymbol,
      callback);
};


/**
 * @param {!proto.segpb.Seg} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.segpb.ListSegSymbolResponse>}
 *     A native promise that resolves to the response
 */
proto.segpb.SegServicePromiseClient.prototype.listSegSymbol =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/segpb.SegService/ListSegSymbol',
      request,
      metadata || {},
      methodDescriptor_SegService_ListSegSymbol);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.segpb.ListSegDetailRequest,
 *   !proto.segpb.ListSegDetailResponse>}
 */
const methodDescriptor_SegService_ListSegDetail = new grpc.web.MethodDescriptor(
  '/segpb.SegService/ListSegDetail',
  grpc.web.MethodType.UNARY,
  proto.segpb.ListSegDetailRequest,
  proto.segpb.ListSegDetailResponse,
  /**
   * @param {!proto.segpb.ListSegDetailRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.segpb.ListSegDetailResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.segpb.ListSegDetailRequest,
 *   !proto.segpb.ListSegDetailResponse>}
 */
const methodInfo_SegService_ListSegDetail = new grpc.web.AbstractClientBase.MethodInfo(
  proto.segpb.ListSegDetailResponse,
  /**
   * @param {!proto.segpb.ListSegDetailRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.segpb.ListSegDetailResponse.deserializeBinary
);


/**
 * @param {!proto.segpb.ListSegDetailRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.segpb.ListSegDetailResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.segpb.ListSegDetailResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.segpb.SegServiceClient.prototype.listSegDetail =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/segpb.SegService/ListSegDetail',
      request,
      metadata || {},
      methodDescriptor_SegService_ListSegDetail,
      callback);
};


/**
 * @param {!proto.segpb.ListSegDetailRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.segpb.ListSegDetailResponse>}
 *     A native promise that resolves to the response
 */
proto.segpb.SegServicePromiseClient.prototype.listSegDetail =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/segpb.SegService/ListSegDetail',
      request,
      metadata || {},
      methodDescriptor_SegService_ListSegDetail);
};


module.exports = proto.segpb;

