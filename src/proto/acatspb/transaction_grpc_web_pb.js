/**
 * @fileoverview gRPC-Web generated client stub for acatspb
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
proto.acatspb = require('./transaction_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.acatspb.TransactionServiceClient =
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
proto.acatspb.TransactionServicePromiseClient =
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
 *   !proto.acatspb.ListTransactionRequest,
 *   !proto.acatspb.ListTransactionResponse>}
 */
const methodDescriptor_TransactionService_ListTransaction = new grpc.web.MethodDescriptor(
  '/acatspb.TransactionService/ListTransaction',
  grpc.web.MethodType.UNARY,
  proto.acatspb.ListTransactionRequest,
  proto.acatspb.ListTransactionResponse,
  /**
   * @param {!proto.acatspb.ListTransactionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.acatspb.ListTransactionResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.acatspb.ListTransactionRequest,
 *   !proto.acatspb.ListTransactionResponse>}
 */
const methodInfo_TransactionService_ListTransaction = new grpc.web.AbstractClientBase.MethodInfo(
  proto.acatspb.ListTransactionResponse,
  /**
   * @param {!proto.acatspb.ListTransactionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.acatspb.ListTransactionResponse.deserializeBinary
);


/**
 * @param {!proto.acatspb.ListTransactionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.acatspb.ListTransactionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.acatspb.ListTransactionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.acatspb.TransactionServiceClient.prototype.listTransaction =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/acatspb.TransactionService/ListTransaction',
      request,
      metadata || {},
      methodDescriptor_TransactionService_ListTransaction,
      callback);
};


/**
 * @param {!proto.acatspb.ListTransactionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.acatspb.ListTransactionResponse>}
 *     Promise that resolves to the response
 */
proto.acatspb.TransactionServicePromiseClient.prototype.listTransaction =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/acatspb.TransactionService/ListTransaction',
      request,
      metadata || {},
      methodDescriptor_TransactionService_ListTransaction);
};


module.exports = proto.acatspb;

