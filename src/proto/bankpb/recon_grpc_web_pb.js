/**
 * @fileoverview gRPC-Web generated client stub for proto
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
proto.proto = require('./recon_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.proto.BankReconServiceClient =
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
proto.proto.BankReconServicePromiseClient =
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
 *   !proto.proto.ListReconRequest,
 *   !proto.proto.ListReconResponse>}
 */
const methodDescriptor_BankReconService_ListRecon = new grpc.web.MethodDescriptor(
  '/proto.BankReconService/ListRecon',
  grpc.web.MethodType.UNARY,
  proto.proto.ListReconRequest,
  proto.proto.ListReconResponse,
  /**
   * @param {!proto.proto.ListReconRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.ListReconResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.proto.ListReconRequest,
 *   !proto.proto.ListReconResponse>}
 */
const methodInfo_BankReconService_ListRecon = new grpc.web.AbstractClientBase.MethodInfo(
  proto.proto.ListReconResponse,
  /**
   * @param {!proto.proto.ListReconRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.ListReconResponse.deserializeBinary
);


/**
 * @param {!proto.proto.ListReconRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.proto.ListReconResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.ListReconResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.BankReconServiceClient.prototype.listRecon =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.BankReconService/ListRecon',
      request,
      metadata || {},
      methodDescriptor_BankReconService_ListRecon,
      callback);
};


/**
 * @param {!proto.proto.ListReconRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.ListReconResponse>}
 *     A native promise that resolves to the response
 */
proto.proto.BankReconServicePromiseClient.prototype.listRecon =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/proto.BankReconService/ListRecon',
      request,
      metadata || {},
      methodDescriptor_BankReconService_ListRecon);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.proto.ListReconDetailRequest,
 *   !proto.proto.ListReconDetailResponse>}
 */
const methodDescriptor_BankReconService_ListReconDetail = new grpc.web.MethodDescriptor(
  '/proto.BankReconService/ListReconDetail',
  grpc.web.MethodType.UNARY,
  proto.proto.ListReconDetailRequest,
  proto.proto.ListReconDetailResponse,
  /**
   * @param {!proto.proto.ListReconDetailRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.ListReconDetailResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.proto.ListReconDetailRequest,
 *   !proto.proto.ListReconDetailResponse>}
 */
const methodInfo_BankReconService_ListReconDetail = new grpc.web.AbstractClientBase.MethodInfo(
  proto.proto.ListReconDetailResponse,
  /**
   * @param {!proto.proto.ListReconDetailRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.ListReconDetailResponse.deserializeBinary
);


/**
 * @param {!proto.proto.ListReconDetailRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.proto.ListReconDetailResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.ListReconDetailResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.BankReconServiceClient.prototype.listReconDetail =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.BankReconService/ListReconDetail',
      request,
      metadata || {},
      methodDescriptor_BankReconService_ListReconDetail,
      callback);
};


/**
 * @param {!proto.proto.ListReconDetailRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.ListReconDetailResponse>}
 *     A native promise that resolves to the response
 */
proto.proto.BankReconServicePromiseClient.prototype.listReconDetail =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/proto.BankReconService/ListReconDetail',
      request,
      metadata || {},
      methodDescriptor_BankReconService_ListReconDetail);
};


module.exports = proto.proto;

