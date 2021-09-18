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


var google_type_date_pb = require('../../google/type/date_pb.js')

var proto_commonpb_file_pb = require('../../proto/commonpb/file_pb.js')
const proto = {};
proto.reportpb = require('./dailytradeconfirm_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.reportpb.DailyTradeConfirmServiceClient =
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
proto.reportpb.DailyTradeConfirmServicePromiseClient =
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
 *   !proto.reportpb.ListDailyTradeConfirmRequest,
 *   !proto.reportpb.ListDailyTradeConfirmResponse>}
 */
const methodDescriptor_DailyTradeConfirmService_ListDailyTradeConfirm = new grpc.web.MethodDescriptor(
  '/reportpb.DailyTradeConfirmService/ListDailyTradeConfirm',
  grpc.web.MethodType.UNARY,
  proto.reportpb.ListDailyTradeConfirmRequest,
  proto.reportpb.ListDailyTradeConfirmResponse,
  /**
   * @param {!proto.reportpb.ListDailyTradeConfirmRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.reportpb.ListDailyTradeConfirmResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.reportpb.ListDailyTradeConfirmRequest,
 *   !proto.reportpb.ListDailyTradeConfirmResponse>}
 */
const methodInfo_DailyTradeConfirmService_ListDailyTradeConfirm = new grpc.web.AbstractClientBase.MethodInfo(
  proto.reportpb.ListDailyTradeConfirmResponse,
  /**
   * @param {!proto.reportpb.ListDailyTradeConfirmRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.reportpb.ListDailyTradeConfirmResponse.deserializeBinary
);


/**
 * @param {!proto.reportpb.ListDailyTradeConfirmRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.reportpb.ListDailyTradeConfirmResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.reportpb.ListDailyTradeConfirmResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.reportpb.DailyTradeConfirmServiceClient.prototype.listDailyTradeConfirm =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/reportpb.DailyTradeConfirmService/ListDailyTradeConfirm',
      request,
      metadata || {},
      methodDescriptor_DailyTradeConfirmService_ListDailyTradeConfirm,
      callback);
};


/**
 * @param {!proto.reportpb.ListDailyTradeConfirmRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.reportpb.ListDailyTradeConfirmResponse>}
 *     A native promise that resolves to the response
 */
proto.reportpb.DailyTradeConfirmServicePromiseClient.prototype.listDailyTradeConfirm =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/reportpb.DailyTradeConfirmService/ListDailyTradeConfirm',
      request,
      metadata || {},
      methodDescriptor_DailyTradeConfirmService_ListDailyTradeConfirm);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.reportpb.DownloadDailyTradeConfirmationRequest,
 *   !proto.commonpb.File>}
 */
const methodDescriptor_DailyTradeConfirmService_DownloadDailyTradeConfirmation = new grpc.web.MethodDescriptor(
  '/reportpb.DailyTradeConfirmService/DownloadDailyTradeConfirmation',
  grpc.web.MethodType.UNARY,
  proto.reportpb.DownloadDailyTradeConfirmationRequest,
  proto_commonpb_file_pb.File,
  /**
   * @param {!proto.reportpb.DownloadDailyTradeConfirmationRequest} request
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
 *   !proto.reportpb.DownloadDailyTradeConfirmationRequest,
 *   !proto.commonpb.File>}
 */
const methodInfo_DailyTradeConfirmService_DownloadDailyTradeConfirmation = new grpc.web.AbstractClientBase.MethodInfo(
  proto_commonpb_file_pb.File,
  /**
   * @param {!proto.reportpb.DownloadDailyTradeConfirmationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto_commonpb_file_pb.File.deserializeBinary
);


/**
 * @param {!proto.reportpb.DownloadDailyTradeConfirmationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.commonpb.File)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.commonpb.File>|undefined}
 *     The XHR Node Readable Stream
 */
proto.reportpb.DailyTradeConfirmServiceClient.prototype.downloadDailyTradeConfirmation =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/reportpb.DailyTradeConfirmService/DownloadDailyTradeConfirmation',
      request,
      metadata || {},
      methodDescriptor_DailyTradeConfirmService_DownloadDailyTradeConfirmation,
      callback);
};


/**
 * @param {!proto.reportpb.DownloadDailyTradeConfirmationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.commonpb.File>}
 *     A native promise that resolves to the response
 */
proto.reportpb.DailyTradeConfirmServicePromiseClient.prototype.downloadDailyTradeConfirmation =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/reportpb.DailyTradeConfirmService/DownloadDailyTradeConfirmation',
      request,
      metadata || {},
      methodDescriptor_DailyTradeConfirmService_DownloadDailyTradeConfirmation);
};


module.exports = proto.reportpb;

