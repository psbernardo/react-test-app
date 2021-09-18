/**
 * @fileoverview gRPC-Web generated client stub for reconpb
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
proto.reconpb = require('./transactionrecon_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.reconpb.TransactionReconServiceClient =
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
proto.reconpb.TransactionReconServicePromiseClient =
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
 *   !proto.reconpb.ListTransactionReconRequest,
 *   !proto.reconpb.ListTransactionReconResponse>}
 */
const methodDescriptor_TransactionReconService_ListTransactionRecon = new grpc.web.MethodDescriptor(
  '/reconpb.TransactionReconService/ListTransactionRecon',
  grpc.web.MethodType.UNARY,
  proto.reconpb.ListTransactionReconRequest,
  proto.reconpb.ListTransactionReconResponse,
  /**
   * @param {!proto.reconpb.ListTransactionReconRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.reconpb.ListTransactionReconResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.reconpb.ListTransactionReconRequest,
 *   !proto.reconpb.ListTransactionReconResponse>}
 */
const methodInfo_TransactionReconService_ListTransactionRecon = new grpc.web.AbstractClientBase.MethodInfo(
  proto.reconpb.ListTransactionReconResponse,
  /**
   * @param {!proto.reconpb.ListTransactionReconRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.reconpb.ListTransactionReconResponse.deserializeBinary
);


/**
 * @param {!proto.reconpb.ListTransactionReconRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.reconpb.ListTransactionReconResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.reconpb.ListTransactionReconResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.reconpb.TransactionReconServiceClient.prototype.listTransactionRecon =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/reconpb.TransactionReconService/ListTransactionRecon',
      request,
      metadata || {},
      methodDescriptor_TransactionReconService_ListTransactionRecon,
      callback);
};


/**
 * @param {!proto.reconpb.ListTransactionReconRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.reconpb.ListTransactionReconResponse>}
 *     Promise that resolves to the response
 */
proto.reconpb.TransactionReconServicePromiseClient.prototype.listTransactionRecon =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/reconpb.TransactionReconService/ListTransactionRecon',
      request,
      metadata || {},
      methodDescriptor_TransactionReconService_ListTransactionRecon);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.reconpb.ReadTransactionReconRequest,
 *   !proto.reconpb.ReadTransactionReconResponse>}
 */
const methodDescriptor_TransactionReconService_ReadTransactionRecon = new grpc.web.MethodDescriptor(
  '/reconpb.TransactionReconService/ReadTransactionRecon',
  grpc.web.MethodType.UNARY,
  proto.reconpb.ReadTransactionReconRequest,
  proto.reconpb.ReadTransactionReconResponse,
  /**
   * @param {!proto.reconpb.ReadTransactionReconRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.reconpb.ReadTransactionReconResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.reconpb.ReadTransactionReconRequest,
 *   !proto.reconpb.ReadTransactionReconResponse>}
 */
const methodInfo_TransactionReconService_ReadTransactionRecon = new grpc.web.AbstractClientBase.MethodInfo(
  proto.reconpb.ReadTransactionReconResponse,
  /**
   * @param {!proto.reconpb.ReadTransactionReconRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.reconpb.ReadTransactionReconResponse.deserializeBinary
);


/**
 * @param {!proto.reconpb.ReadTransactionReconRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.reconpb.ReadTransactionReconResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.reconpb.ReadTransactionReconResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.reconpb.TransactionReconServiceClient.prototype.readTransactionRecon =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/reconpb.TransactionReconService/ReadTransactionRecon',
      request,
      metadata || {},
      methodDescriptor_TransactionReconService_ReadTransactionRecon,
      callback);
};


/**
 * @param {!proto.reconpb.ReadTransactionReconRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.reconpb.ReadTransactionReconResponse>}
 *     Promise that resolves to the response
 */
proto.reconpb.TransactionReconServicePromiseClient.prototype.readTransactionRecon =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/reconpb.TransactionReconService/ReadTransactionRecon',
      request,
      metadata || {},
      methodDescriptor_TransactionReconService_ReadTransactionRecon);
};


module.exports = proto.reconpb;

