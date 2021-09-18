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
proto.reconpb = require('./executionrecon_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.reconpb.ExecutionReconServiceClient =
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
proto.reconpb.ExecutionReconServicePromiseClient =
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
 *   !proto.reconpb.ListExecutionReconRequest,
 *   !proto.reconpb.ListExecutionReconResponse>}
 */
const methodDescriptor_ExecutionReconService_ListExecutionRecon = new grpc.web.MethodDescriptor(
  '/reconpb.ExecutionReconService/ListExecutionRecon',
  grpc.web.MethodType.UNARY,
  proto.reconpb.ListExecutionReconRequest,
  proto.reconpb.ListExecutionReconResponse,
  /**
   * @param {!proto.reconpb.ListExecutionReconRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.reconpb.ListExecutionReconResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.reconpb.ListExecutionReconRequest,
 *   !proto.reconpb.ListExecutionReconResponse>}
 */
const methodInfo_ExecutionReconService_ListExecutionRecon = new grpc.web.AbstractClientBase.MethodInfo(
  proto.reconpb.ListExecutionReconResponse,
  /**
   * @param {!proto.reconpb.ListExecutionReconRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.reconpb.ListExecutionReconResponse.deserializeBinary
);


/**
 * @param {!proto.reconpb.ListExecutionReconRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.reconpb.ListExecutionReconResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.reconpb.ListExecutionReconResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.reconpb.ExecutionReconServiceClient.prototype.listExecutionRecon =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/reconpb.ExecutionReconService/ListExecutionRecon',
      request,
      metadata || {},
      methodDescriptor_ExecutionReconService_ListExecutionRecon,
      callback);
};


/**
 * @param {!proto.reconpb.ListExecutionReconRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.reconpb.ListExecutionReconResponse>}
 *     Promise that resolves to the response
 */
proto.reconpb.ExecutionReconServicePromiseClient.prototype.listExecutionRecon =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/reconpb.ExecutionReconService/ListExecutionRecon',
      request,
      metadata || {},
      methodDescriptor_ExecutionReconService_ListExecutionRecon);
};


module.exports = proto.reconpb;

