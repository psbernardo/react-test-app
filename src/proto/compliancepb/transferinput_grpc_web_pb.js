/**
 * @fileoverview gRPC-Web generated client stub for compliancepb
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
proto.compliancepb = require('./transferinput_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.compliancepb.TransferInputServiceClient =
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
proto.compliancepb.TransferInputServicePromiseClient =
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
 *   !proto.compliancepb.TransferInput,
 *   !proto.commonpb.File>}
 */
const methodDescriptor_TransferInputService_DownloadTransferInput = new grpc.web.MethodDescriptor(
  '/compliancepb.TransferInputService/DownloadTransferInput',
  grpc.web.MethodType.UNARY,
  proto.compliancepb.TransferInput,
  proto_commonpb_file_pb.File,
  /**
   * @param {!proto.compliancepb.TransferInput} request
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
 *   !proto.compliancepb.TransferInput,
 *   !proto.commonpb.File>}
 */
const methodInfo_TransferInputService_DownloadTransferInput = new grpc.web.AbstractClientBase.MethodInfo(
  proto_commonpb_file_pb.File,
  /**
   * @param {!proto.compliancepb.TransferInput} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto_commonpb_file_pb.File.deserializeBinary
);


/**
 * @param {!proto.compliancepb.TransferInput} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.commonpb.File)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.commonpb.File>|undefined}
 *     The XHR Node Readable Stream
 */
proto.compliancepb.TransferInputServiceClient.prototype.downloadTransferInput =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/compliancepb.TransferInputService/DownloadTransferInput',
      request,
      metadata || {},
      methodDescriptor_TransferInputService_DownloadTransferInput,
      callback);
};


/**
 * @param {!proto.compliancepb.TransferInput} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.commonpb.File>}
 *     A native promise that resolves to the response
 */
proto.compliancepb.TransferInputServicePromiseClient.prototype.downloadTransferInput =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/compliancepb.TransferInputService/DownloadTransferInput',
      request,
      metadata || {},
      methodDescriptor_TransferInputService_DownloadTransferInput);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.compliancepb.TransferInput,
 *   !proto.compliancepb.CreatePendingTransferInputResponse>}
 */
const methodDescriptor_TransferInputService_CreatePendingTransferInput = new grpc.web.MethodDescriptor(
  '/compliancepb.TransferInputService/CreatePendingTransferInput',
  grpc.web.MethodType.UNARY,
  proto.compliancepb.TransferInput,
  proto.compliancepb.CreatePendingTransferInputResponse,
  /**
   * @param {!proto.compliancepb.TransferInput} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.compliancepb.CreatePendingTransferInputResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.compliancepb.TransferInput,
 *   !proto.compliancepb.CreatePendingTransferInputResponse>}
 */
const methodInfo_TransferInputService_CreatePendingTransferInput = new grpc.web.AbstractClientBase.MethodInfo(
  proto.compliancepb.CreatePendingTransferInputResponse,
  /**
   * @param {!proto.compliancepb.TransferInput} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.compliancepb.CreatePendingTransferInputResponse.deserializeBinary
);


/**
 * @param {!proto.compliancepb.TransferInput} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.compliancepb.CreatePendingTransferInputResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.compliancepb.CreatePendingTransferInputResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.compliancepb.TransferInputServiceClient.prototype.createPendingTransferInput =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/compliancepb.TransferInputService/CreatePendingTransferInput',
      request,
      metadata || {},
      methodDescriptor_TransferInputService_CreatePendingTransferInput,
      callback);
};


/**
 * @param {!proto.compliancepb.TransferInput} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.compliancepb.CreatePendingTransferInputResponse>}
 *     A native promise that resolves to the response
 */
proto.compliancepb.TransferInputServicePromiseClient.prototype.createPendingTransferInput =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/compliancepb.TransferInputService/CreatePendingTransferInput',
      request,
      metadata || {},
      methodDescriptor_TransferInputService_CreatePendingTransferInput);
};


module.exports = proto.compliancepb;

