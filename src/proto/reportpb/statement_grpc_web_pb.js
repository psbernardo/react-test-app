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


var proto_commonpb_file_pb = require('../../proto/commonpb/file_pb.js')
const proto = {};
proto.reportpb = require('./statement_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.reportpb.StatementServiceClient =
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
proto.reportpb.StatementServicePromiseClient =
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
 *   !proto.reportpb.ListStatementRequest,
 *   !proto.reportpb.ListStatementResponse>}
 */
const methodDescriptor_StatementService_ListStatement = new grpc.web.MethodDescriptor(
  '/reportpb.StatementService/ListStatement',
  grpc.web.MethodType.UNARY,
  proto.reportpb.ListStatementRequest,
  proto.reportpb.ListStatementResponse,
  /**
   * @param {!proto.reportpb.ListStatementRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.reportpb.ListStatementResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.reportpb.ListStatementRequest,
 *   !proto.reportpb.ListStatementResponse>}
 */
const methodInfo_StatementService_ListStatement = new grpc.web.AbstractClientBase.MethodInfo(
  proto.reportpb.ListStatementResponse,
  /**
   * @param {!proto.reportpb.ListStatementRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.reportpb.ListStatementResponse.deserializeBinary
);


/**
 * @param {!proto.reportpb.ListStatementRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.reportpb.ListStatementResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.reportpb.ListStatementResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.reportpb.StatementServiceClient.prototype.listStatement =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/reportpb.StatementService/ListStatement',
      request,
      metadata || {},
      methodDescriptor_StatementService_ListStatement,
      callback);
};


/**
 * @param {!proto.reportpb.ListStatementRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.reportpb.ListStatementResponse>}
 *     A native promise that resolves to the response
 */
proto.reportpb.StatementServicePromiseClient.prototype.listStatement =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/reportpb.StatementService/ListStatement',
      request,
      metadata || {},
      methodDescriptor_StatementService_ListStatement);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.reportpb.DownloadStatementRequest,
 *   !proto.commonpb.File>}
 */
const methodDescriptor_StatementService_DownloadStatement = new grpc.web.MethodDescriptor(
  '/reportpb.StatementService/DownloadStatement',
  grpc.web.MethodType.UNARY,
  proto.reportpb.DownloadStatementRequest,
  proto_commonpb_file_pb.File,
  /**
   * @param {!proto.reportpb.DownloadStatementRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto_commonpb_file_pb.File.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.reportpb.DownloadStatementRequest,
 *   !proto.commonpb.File>}
 */
const methodInfo_StatementService_DownloadStatement = new grpc.web.AbstractClientBase.MethodInfo(
  proto_commonpb_file_pb.File,
  /**
   * @param {!proto.reportpb.DownloadStatementRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto_commonpb_file_pb.File.deserializeBinary
);


/**
 * @param {!proto.reportpb.DownloadStatementRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.commonpb.File)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.commonpb.File>|undefined}
 *     The XHR Node Readable Stream
 */
proto.reportpb.StatementServiceClient.prototype.downloadStatement =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/reportpb.StatementService/DownloadStatement',
      request,
      metadata || {},
      methodDescriptor_StatementService_DownloadStatement,
      callback);
};


/**
 * @param {!proto.reportpb.DownloadStatementRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.commonpb.File>}
 *     A native promise that resolves to the response
 */
proto.reportpb.StatementServicePromiseClient.prototype.downloadStatement =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/reportpb.StatementService/DownloadStatement',
      request,
      metadata || {},
      methodDescriptor_StatementService_DownloadStatement);
};


module.exports = proto.reportpb;

