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


var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')

var google_type_date_pb = require('../../google/type/date_pb.js')

var proto_commonpb_file_pb = require('../../proto/commonpb/file_pb.js')

var proto_utilspb_pagination_pb = require('../../proto/utilspb/pagination_pb.js')
const proto = {};
proto.reportpb = require('./activity_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.reportpb.ActivityServiceClient =
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
proto.reportpb.ActivityServicePromiseClient =
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
 *   !proto.reportpb.ListActivityRequest,
 *   !proto.reportpb.ListActivityResponse>}
 */
const methodDescriptor_ActivityService_ListActivity = new grpc.web.MethodDescriptor(
  '/reportpb.ActivityService/ListActivity',
  grpc.web.MethodType.UNARY,
  proto.reportpb.ListActivityRequest,
  proto.reportpb.ListActivityResponse,
  /**
   * @param {!proto.reportpb.ListActivityRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.reportpb.ListActivityResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.reportpb.ListActivityRequest,
 *   !proto.reportpb.ListActivityResponse>}
 */
const methodInfo_ActivityService_ListActivity = new grpc.web.AbstractClientBase.MethodInfo(
  proto.reportpb.ListActivityResponse,
  /**
   * @param {!proto.reportpb.ListActivityRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.reportpb.ListActivityResponse.deserializeBinary
);


/**
 * @param {!proto.reportpb.ListActivityRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.reportpb.ListActivityResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.reportpb.ListActivityResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.reportpb.ActivityServiceClient.prototype.listActivity =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/reportpb.ActivityService/ListActivity',
      request,
      metadata || {},
      methodDescriptor_ActivityService_ListActivity,
      callback);
};


/**
 * @param {!proto.reportpb.ListActivityRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.reportpb.ListActivityResponse>}
 *     A native promise that resolves to the response
 */
proto.reportpb.ActivityServicePromiseClient.prototype.listActivity =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/reportpb.ActivityService/ListActivity',
      request,
      metadata || {},
      methodDescriptor_ActivityService_ListActivity);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.reportpb.DownloadTradeConfirmationRequest,
 *   !proto.commonpb.File>}
 */
const methodDescriptor_ActivityService_DownloadTradeConfirmation = new grpc.web.MethodDescriptor(
  '/reportpb.ActivityService/DownloadTradeConfirmation',
  grpc.web.MethodType.UNARY,
  proto.reportpb.DownloadTradeConfirmationRequest,
  proto_commonpb_file_pb.File,
  /**
   * @param {!proto.reportpb.DownloadTradeConfirmationRequest} request
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
 *   !proto.reportpb.DownloadTradeConfirmationRequest,
 *   !proto.commonpb.File>}
 */
const methodInfo_ActivityService_DownloadTradeConfirmation = new grpc.web.AbstractClientBase.MethodInfo(
  proto_commonpb_file_pb.File,
  /**
   * @param {!proto.reportpb.DownloadTradeConfirmationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto_commonpb_file_pb.File.deserializeBinary
);


/**
 * @param {!proto.reportpb.DownloadTradeConfirmationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.commonpb.File)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.commonpb.File>|undefined}
 *     The XHR Node Readable Stream
 */
proto.reportpb.ActivityServiceClient.prototype.downloadTradeConfirmation =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/reportpb.ActivityService/DownloadTradeConfirmation',
      request,
      metadata || {},
      methodDescriptor_ActivityService_DownloadTradeConfirmation,
      callback);
};


/**
 * @param {!proto.reportpb.DownloadTradeConfirmationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.commonpb.File>}
 *     A native promise that resolves to the response
 */
proto.reportpb.ActivityServicePromiseClient.prototype.downloadTradeConfirmation =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/reportpb.ActivityService/DownloadTradeConfirmation',
      request,
      metadata || {},
      methodDescriptor_ActivityService_DownloadTradeConfirmation);
};


module.exports = proto.reportpb;

