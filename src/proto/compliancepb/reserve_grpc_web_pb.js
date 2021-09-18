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
proto.reorgpb = require('./reserve_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.reorgpb.ReserveServiceClient =
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
proto.reorgpb.ReserveServicePromiseClient =
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
 *   !proto.reorgpb.ListReserveRequest,
 *   !proto.reorgpb.ListReserveResponse>}
 */
const methodDescriptor_ReserveService_ListReserve = new grpc.web.MethodDescriptor(
  '/reorgpb.ReserveService/ListReserve',
  grpc.web.MethodType.UNARY,
  proto.reorgpb.ListReserveRequest,
  proto.reorgpb.ListReserveResponse,
  /**
   * @param {!proto.reorgpb.ListReserveRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.reorgpb.ListReserveResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.reorgpb.ListReserveRequest,
 *   !proto.reorgpb.ListReserveResponse>}
 */
const methodInfo_ReserveService_ListReserve = new grpc.web.AbstractClientBase.MethodInfo(
  proto.reorgpb.ListReserveResponse,
  /**
   * @param {!proto.reorgpb.ListReserveRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.reorgpb.ListReserveResponse.deserializeBinary
);


/**
 * @param {!proto.reorgpb.ListReserveRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.reorgpb.ListReserveResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.reorgpb.ListReserveResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.reorgpb.ReserveServiceClient.prototype.listReserve =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/reorgpb.ReserveService/ListReserve',
      request,
      metadata || {},
      methodDescriptor_ReserveService_ListReserve,
      callback);
};


/**
 * @param {!proto.reorgpb.ListReserveRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.reorgpb.ListReserveResponse>}
 *     Promise that resolves to the response
 */
proto.reorgpb.ReserveServicePromiseClient.prototype.listReserve =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/reorgpb.ReserveService/ListReserve',
      request,
      metadata || {},
      methodDescriptor_ReserveService_ListReserve);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.reorgpb.ListReserveDetailRequest,
 *   !proto.reorgpb.ListReserveDetailResponse>}
 */
const methodDescriptor_ReserveService_ListReserveDetail = new grpc.web.MethodDescriptor(
  '/reorgpb.ReserveService/ListReserveDetail',
  grpc.web.MethodType.UNARY,
  proto.reorgpb.ListReserveDetailRequest,
  proto.reorgpb.ListReserveDetailResponse,
  /**
   * @param {!proto.reorgpb.ListReserveDetailRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.reorgpb.ListReserveDetailResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.reorgpb.ListReserveDetailRequest,
 *   !proto.reorgpb.ListReserveDetailResponse>}
 */
const methodInfo_ReserveService_ListReserveDetail = new grpc.web.AbstractClientBase.MethodInfo(
  proto.reorgpb.ListReserveDetailResponse,
  /**
   * @param {!proto.reorgpb.ListReserveDetailRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.reorgpb.ListReserveDetailResponse.deserializeBinary
);


/**
 * @param {!proto.reorgpb.ListReserveDetailRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.reorgpb.ListReserveDetailResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.reorgpb.ListReserveDetailResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.reorgpb.ReserveServiceClient.prototype.listReserveDetail =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/reorgpb.ReserveService/ListReserveDetail',
      request,
      metadata || {},
      methodDescriptor_ReserveService_ListReserveDetail,
      callback);
};


/**
 * @param {!proto.reorgpb.ListReserveDetailRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.reorgpb.ListReserveDetailResponse>}
 *     Promise that resolves to the response
 */
proto.reorgpb.ReserveServicePromiseClient.prototype.listReserveDetail =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/reorgpb.ReserveService/ListReserveDetail',
      request,
      metadata || {},
      methodDescriptor_ReserveService_ListReserveDetail);
};


module.exports = proto.reorgpb;

