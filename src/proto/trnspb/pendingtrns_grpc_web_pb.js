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


var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')

var google_type_date_pb = require('../../google/type/date_pb.js')

var proto_trnspb_transaction_pb = require('../../proto/trnspb/transaction_pb.js')

var proto_utilspb_pagination_pb = require('../../proto/utilspb/pagination_pb.js')
const proto = {};
proto.trnspb = require('./pendingtrns_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.trnspb.PendingTrnsServiceClient =
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
proto.trnspb.PendingTrnsServicePromiseClient =
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
 *   !proto.trnspb.ListPendingTrnsRequest,
 *   !proto.trnspb.ListPendingTrnsResponse>}
 */
const methodDescriptor_PendingTrnsService_ListPendingTrns = new grpc.web.MethodDescriptor(
  '/trnspb.PendingTrnsService/ListPendingTrns',
  grpc.web.MethodType.UNARY,
  proto.trnspb.ListPendingTrnsRequest,
  proto.trnspb.ListPendingTrnsResponse,
  /**
   * @param {!proto.trnspb.ListPendingTrnsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.trnspb.ListPendingTrnsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.trnspb.ListPendingTrnsRequest,
 *   !proto.trnspb.ListPendingTrnsResponse>}
 */
const methodInfo_PendingTrnsService_ListPendingTrns = new grpc.web.AbstractClientBase.MethodInfo(
  proto.trnspb.ListPendingTrnsResponse,
  /**
   * @param {!proto.trnspb.ListPendingTrnsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.trnspb.ListPendingTrnsResponse.deserializeBinary
);


/**
 * @param {!proto.trnspb.ListPendingTrnsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.trnspb.ListPendingTrnsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.trnspb.ListPendingTrnsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.trnspb.PendingTrnsServiceClient.prototype.listPendingTrns =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/trnspb.PendingTrnsService/ListPendingTrns',
      request,
      metadata || {},
      methodDescriptor_PendingTrnsService_ListPendingTrns,
      callback);
};


/**
 * @param {!proto.trnspb.ListPendingTrnsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.trnspb.ListPendingTrnsResponse>}
 *     Promise that resolves to the response
 */
proto.trnspb.PendingTrnsServicePromiseClient.prototype.listPendingTrns =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/trnspb.PendingTrnsService/ListPendingTrns',
      request,
      metadata || {},
      methodDescriptor_PendingTrnsService_ListPendingTrns);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.trnspb.ReadPendingTrnsRequest,
 *   !proto.trnspb.ReadPendingTrnsResponse>}
 */
const methodDescriptor_PendingTrnsService_ReadTransaction = new grpc.web.MethodDescriptor(
  '/trnspb.PendingTrnsService/ReadTransaction',
  grpc.web.MethodType.UNARY,
  proto.trnspb.ReadPendingTrnsRequest,
  proto.trnspb.ReadPendingTrnsResponse,
  /**
   * @param {!proto.trnspb.ReadPendingTrnsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.trnspb.ReadPendingTrnsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.trnspb.ReadPendingTrnsRequest,
 *   !proto.trnspb.ReadPendingTrnsResponse>}
 */
const methodInfo_PendingTrnsService_ReadTransaction = new grpc.web.AbstractClientBase.MethodInfo(
  proto.trnspb.ReadPendingTrnsResponse,
  /**
   * @param {!proto.trnspb.ReadPendingTrnsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.trnspb.ReadPendingTrnsResponse.deserializeBinary
);


/**
 * @param {!proto.trnspb.ReadPendingTrnsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.trnspb.ReadPendingTrnsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.trnspb.ReadPendingTrnsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.trnspb.PendingTrnsServiceClient.prototype.readTransaction =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/trnspb.PendingTrnsService/ReadTransaction',
      request,
      metadata || {},
      methodDescriptor_PendingTrnsService_ReadTransaction,
      callback);
};


/**
 * @param {!proto.trnspb.ReadPendingTrnsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.trnspb.ReadPendingTrnsResponse>}
 *     Promise that resolves to the response
 */
proto.trnspb.PendingTrnsServicePromiseClient.prototype.readTransaction =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/trnspb.PendingTrnsService/ReadTransaction',
      request,
      metadata || {},
      methodDescriptor_PendingTrnsService_ReadTransaction);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.trnspb.DeletePendingTrnsRequest,
 *   !proto.trnspb.EmptyResponse>}
 */
const methodDescriptor_PendingTrnsService_DeletePendingTrns = new grpc.web.MethodDescriptor(
  '/trnspb.PendingTrnsService/DeletePendingTrns',
  grpc.web.MethodType.UNARY,
  proto.trnspb.DeletePendingTrnsRequest,
  proto.trnspb.EmptyResponse,
  /**
   * @param {!proto.trnspb.DeletePendingTrnsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.trnspb.EmptyResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.trnspb.DeletePendingTrnsRequest,
 *   !proto.trnspb.EmptyResponse>}
 */
const methodInfo_PendingTrnsService_DeletePendingTrns = new grpc.web.AbstractClientBase.MethodInfo(
  proto.trnspb.EmptyResponse,
  /**
   * @param {!proto.trnspb.DeletePendingTrnsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.trnspb.EmptyResponse.deserializeBinary
);


/**
 * @param {!proto.trnspb.DeletePendingTrnsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.trnspb.EmptyResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.trnspb.EmptyResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.trnspb.PendingTrnsServiceClient.prototype.deletePendingTrns =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/trnspb.PendingTrnsService/DeletePendingTrns',
      request,
      metadata || {},
      methodDescriptor_PendingTrnsService_DeletePendingTrns,
      callback);
};


/**
 * @param {!proto.trnspb.DeletePendingTrnsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.trnspb.EmptyResponse>}
 *     Promise that resolves to the response
 */
proto.trnspb.PendingTrnsServicePromiseClient.prototype.deletePendingTrns =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/trnspb.PendingTrnsService/DeletePendingTrns',
      request,
      metadata || {},
      methodDescriptor_PendingTrnsService_DeletePendingTrns);
};


module.exports = proto.trnspb;

