/**
 * @fileoverview gRPC-Web generated client stub for dtccpb
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
proto.dtccpb = require('./unmatchedreceived_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.dtccpb.UnmatchedReceivedServiceClient =
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
proto.dtccpb.UnmatchedReceivedServicePromiseClient =
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
 *   !proto.dtccpb.ListUnmatchedReceivedRequest,
 *   !proto.dtccpb.ListUnmatchedReceivedResponse>}
 */
const methodDescriptor_UnmatchedReceivedService_ListUnmatchedReceived = new grpc.web.MethodDescriptor(
  '/dtccpb.UnmatchedReceivedService/ListUnmatchedReceived',
  grpc.web.MethodType.UNARY,
  proto.dtccpb.ListUnmatchedReceivedRequest,
  proto.dtccpb.ListUnmatchedReceivedResponse,
  /**
   * @param {!proto.dtccpb.ListUnmatchedReceivedRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.dtccpb.ListUnmatchedReceivedResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.dtccpb.ListUnmatchedReceivedRequest,
 *   !proto.dtccpb.ListUnmatchedReceivedResponse>}
 */
const methodInfo_UnmatchedReceivedService_ListUnmatchedReceived = new grpc.web.AbstractClientBase.MethodInfo(
  proto.dtccpb.ListUnmatchedReceivedResponse,
  /**
   * @param {!proto.dtccpb.ListUnmatchedReceivedRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.dtccpb.ListUnmatchedReceivedResponse.deserializeBinary
);


/**
 * @param {!proto.dtccpb.ListUnmatchedReceivedRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.dtccpb.ListUnmatchedReceivedResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.dtccpb.ListUnmatchedReceivedResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.dtccpb.UnmatchedReceivedServiceClient.prototype.listUnmatchedReceived =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/dtccpb.UnmatchedReceivedService/ListUnmatchedReceived',
      request,
      metadata || {},
      methodDescriptor_UnmatchedReceivedService_ListUnmatchedReceived,
      callback);
};


/**
 * @param {!proto.dtccpb.ListUnmatchedReceivedRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.dtccpb.ListUnmatchedReceivedResponse>}
 *     Promise that resolves to the response
 */
proto.dtccpb.UnmatchedReceivedServicePromiseClient.prototype.listUnmatchedReceived =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/dtccpb.UnmatchedReceivedService/ListUnmatchedReceived',
      request,
      metadata || {},
      methodDescriptor_UnmatchedReceivedService_ListUnmatchedReceived);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.dtccpb.UpdateUnmatchedReceivedRequest,
 *   !proto.dtccpb.UpdateUnmatchedReceivedResponse>}
 */
const methodDescriptor_UnmatchedReceivedService_UpdateUnmatchedReceived = new grpc.web.MethodDescriptor(
  '/dtccpb.UnmatchedReceivedService/UpdateUnmatchedReceived',
  grpc.web.MethodType.UNARY,
  proto.dtccpb.UpdateUnmatchedReceivedRequest,
  proto.dtccpb.UpdateUnmatchedReceivedResponse,
  /**
   * @param {!proto.dtccpb.UpdateUnmatchedReceivedRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.dtccpb.UpdateUnmatchedReceivedResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.dtccpb.UpdateUnmatchedReceivedRequest,
 *   !proto.dtccpb.UpdateUnmatchedReceivedResponse>}
 */
const methodInfo_UnmatchedReceivedService_UpdateUnmatchedReceived = new grpc.web.AbstractClientBase.MethodInfo(
  proto.dtccpb.UpdateUnmatchedReceivedResponse,
  /**
   * @param {!proto.dtccpb.UpdateUnmatchedReceivedRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.dtccpb.UpdateUnmatchedReceivedResponse.deserializeBinary
);


/**
 * @param {!proto.dtccpb.UpdateUnmatchedReceivedRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.dtccpb.UpdateUnmatchedReceivedResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.dtccpb.UpdateUnmatchedReceivedResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.dtccpb.UnmatchedReceivedServiceClient.prototype.updateUnmatchedReceived =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/dtccpb.UnmatchedReceivedService/UpdateUnmatchedReceived',
      request,
      metadata || {},
      methodDescriptor_UnmatchedReceivedService_UpdateUnmatchedReceived,
      callback);
};


/**
 * @param {!proto.dtccpb.UpdateUnmatchedReceivedRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.dtccpb.UpdateUnmatchedReceivedResponse>}
 *     Promise that resolves to the response
 */
proto.dtccpb.UnmatchedReceivedServicePromiseClient.prototype.updateUnmatchedReceived =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/dtccpb.UnmatchedReceivedService/UpdateUnmatchedReceived',
      request,
      metadata || {},
      methodDescriptor_UnmatchedReceivedService_UpdateUnmatchedReceived);
};


module.exports = proto.dtccpb;

