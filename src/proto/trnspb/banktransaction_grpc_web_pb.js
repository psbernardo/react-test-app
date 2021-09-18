/**
 * @fileoverview gRPC-Web generated client stub for trnspb
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_type_date_pb = require('../../google/type/date_pb.js')

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')
const proto = {};
proto.trnspb = require('./banktransaction_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.trnspb.BankTransactionServiceClient =
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
proto.trnspb.BankTransactionServicePromiseClient =
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
 *   !proto.trnspb.ListBankTransactionRequest,
 *   !proto.trnspb.ListBankTransactionResponse>}
 */
const methodDescriptor_BankTransactionService_ListBankTransaction = new grpc.web.MethodDescriptor(
  '/trnspb.BankTransactionService/ListBankTransaction',
  grpc.web.MethodType.UNARY,
  proto.trnspb.ListBankTransactionRequest,
  proto.trnspb.ListBankTransactionResponse,
  /**
   * @param {!proto.trnspb.ListBankTransactionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.trnspb.ListBankTransactionResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.trnspb.ListBankTransactionRequest,
 *   !proto.trnspb.ListBankTransactionResponse>}
 */
const methodInfo_BankTransactionService_ListBankTransaction = new grpc.web.AbstractClientBase.MethodInfo(
  proto.trnspb.ListBankTransactionResponse,
  /**
   * @param {!proto.trnspb.ListBankTransactionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.trnspb.ListBankTransactionResponse.deserializeBinary
);


/**
 * @param {!proto.trnspb.ListBankTransactionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.trnspb.ListBankTransactionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.trnspb.ListBankTransactionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.trnspb.BankTransactionServiceClient.prototype.listBankTransaction =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/trnspb.BankTransactionService/ListBankTransaction',
      request,
      metadata || {},
      methodDescriptor_BankTransactionService_ListBankTransaction,
      callback);
};


/**
 * @param {!proto.trnspb.ListBankTransactionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.trnspb.ListBankTransactionResponse>}
 *     A native promise that resolves to the response
 */
proto.trnspb.BankTransactionServicePromiseClient.prototype.listBankTransaction =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/trnspb.BankTransactionService/ListBankTransaction',
      request,
      metadata || {},
      methodDescriptor_BankTransactionService_ListBankTransaction);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.trnspb.BankTransaction,
 *   !proto.trnspb.ReadBankTransactionResponse>}
 */
const methodDescriptor_BankTransactionService_ReadBankTransactionView = new grpc.web.MethodDescriptor(
  '/trnspb.BankTransactionService/ReadBankTransactionView',
  grpc.web.MethodType.UNARY,
  proto.trnspb.BankTransaction,
  proto.trnspb.ReadBankTransactionResponse,
  /**
   * @param {!proto.trnspb.BankTransaction} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.trnspb.ReadBankTransactionResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.trnspb.BankTransaction,
 *   !proto.trnspb.ReadBankTransactionResponse>}
 */
const methodInfo_BankTransactionService_ReadBankTransactionView = new grpc.web.AbstractClientBase.MethodInfo(
  proto.trnspb.ReadBankTransactionResponse,
  /**
   * @param {!proto.trnspb.BankTransaction} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.trnspb.ReadBankTransactionResponse.deserializeBinary
);


/**
 * @param {!proto.trnspb.BankTransaction} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.trnspb.ReadBankTransactionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.trnspb.ReadBankTransactionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.trnspb.BankTransactionServiceClient.prototype.readBankTransactionView =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/trnspb.BankTransactionService/ReadBankTransactionView',
      request,
      metadata || {},
      methodDescriptor_BankTransactionService_ReadBankTransactionView,
      callback);
};


/**
 * @param {!proto.trnspb.BankTransaction} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.trnspb.ReadBankTransactionResponse>}
 *     A native promise that resolves to the response
 */
proto.trnspb.BankTransactionServicePromiseClient.prototype.readBankTransactionView =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/trnspb.BankTransactionService/ReadBankTransactionView',
      request,
      metadata || {},
      methodDescriptor_BankTransactionService_ReadBankTransactionView);
};


module.exports = proto.trnspb;

