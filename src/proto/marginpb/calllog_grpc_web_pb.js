/**
 * @fileoverview gRPC-Web generated client stub for marginpb
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
proto.marginpb = require('./calllog_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.marginpb.CallLogServiceClient =
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
proto.marginpb.CallLogServicePromiseClient =
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
 *   !proto.marginpb.ListCallLogRequest,
 *   !proto.marginpb.ListCallLogResponse>}
 */
const methodDescriptor_CallLogService_ListCallLog = new grpc.web.MethodDescriptor(
  '/marginpb.CallLogService/ListCallLog',
  grpc.web.MethodType.UNARY,
  proto.marginpb.ListCallLogRequest,
  proto.marginpb.ListCallLogResponse,
  /**
   * @param {!proto.marginpb.ListCallLogRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.marginpb.ListCallLogResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.marginpb.ListCallLogRequest,
 *   !proto.marginpb.ListCallLogResponse>}
 */
const methodInfo_CallLogService_ListCallLog = new grpc.web.AbstractClientBase.MethodInfo(
  proto.marginpb.ListCallLogResponse,
  /**
   * @param {!proto.marginpb.ListCallLogRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.marginpb.ListCallLogResponse.deserializeBinary
);


/**
 * @param {!proto.marginpb.ListCallLogRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.marginpb.ListCallLogResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.marginpb.ListCallLogResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.marginpb.CallLogServiceClient.prototype.listCallLog =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/marginpb.CallLogService/ListCallLog',
      request,
      metadata || {},
      methodDescriptor_CallLogService_ListCallLog,
      callback);
};


/**
 * @param {!proto.marginpb.ListCallLogRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.marginpb.ListCallLogResponse>}
 *     Promise that resolves to the response
 */
proto.marginpb.CallLogServicePromiseClient.prototype.listCallLog =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/marginpb.CallLogService/ListCallLog',
      request,
      metadata || {},
      methodDescriptor_CallLogService_ListCallLog);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.marginpb.CallLog,
 *   !proto.marginpb.UpdateCallLogResponse>}
 */
const methodDescriptor_CallLogService_UpdateCallLog = new grpc.web.MethodDescriptor(
  '/marginpb.CallLogService/UpdateCallLog',
  grpc.web.MethodType.UNARY,
  proto.marginpb.CallLog,
  proto.marginpb.UpdateCallLogResponse,
  /**
   * @param {!proto.marginpb.CallLog} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.marginpb.UpdateCallLogResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.marginpb.CallLog,
 *   !proto.marginpb.UpdateCallLogResponse>}
 */
const methodInfo_CallLogService_UpdateCallLog = new grpc.web.AbstractClientBase.MethodInfo(
  proto.marginpb.UpdateCallLogResponse,
  /**
   * @param {!proto.marginpb.CallLog} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.marginpb.UpdateCallLogResponse.deserializeBinary
);


/**
 * @param {!proto.marginpb.CallLog} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.marginpb.UpdateCallLogResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.marginpb.UpdateCallLogResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.marginpb.CallLogServiceClient.prototype.updateCallLog =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/marginpb.CallLogService/UpdateCallLog',
      request,
      metadata || {},
      methodDescriptor_CallLogService_UpdateCallLog,
      callback);
};


/**
 * @param {!proto.marginpb.CallLog} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.marginpb.UpdateCallLogResponse>}
 *     Promise that resolves to the response
 */
proto.marginpb.CallLogServicePromiseClient.prototype.updateCallLog =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/marginpb.CallLogService/UpdateCallLog',
      request,
      metadata || {},
      methodDescriptor_CallLogService_UpdateCallLog);
};


module.exports = proto.marginpb;

