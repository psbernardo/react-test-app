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

var proto_acatspb_partial_pb = require('../../proto/acatspb/partial_pb.js')
const proto = {};
proto.acatspb = require('./outgoing_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.acatspb.OutgoingServiceClient =
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
proto.acatspb.OutgoingServicePromiseClient =
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
 *   !proto.acatspb.ListOutgoingRequest,
 *   !proto.acatspb.ListOutgoingResponse>}
 */
const methodDescriptor_OutgoingService_ListOutgoing = new grpc.web.MethodDescriptor(
  '/acatspb.OutgoingService/ListOutgoing',
  grpc.web.MethodType.UNARY,
  proto.acatspb.ListOutgoingRequest,
  proto.acatspb.ListOutgoingResponse,
  /**
   * @param {!proto.acatspb.ListOutgoingRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.acatspb.ListOutgoingResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.acatspb.ListOutgoingRequest,
 *   !proto.acatspb.ListOutgoingResponse>}
 */
const methodInfo_OutgoingService_ListOutgoing = new grpc.web.AbstractClientBase.MethodInfo(
  proto.acatspb.ListOutgoingResponse,
  /**
   * @param {!proto.acatspb.ListOutgoingRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.acatspb.ListOutgoingResponse.deserializeBinary
);


/**
 * @param {!proto.acatspb.ListOutgoingRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.acatspb.ListOutgoingResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.acatspb.ListOutgoingResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.acatspb.OutgoingServiceClient.prototype.listOutgoing =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/acatspb.OutgoingService/ListOutgoing',
      request,
      metadata || {},
      methodDescriptor_OutgoingService_ListOutgoing,
      callback);
};


/**
 * @param {!proto.acatspb.ListOutgoingRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.acatspb.ListOutgoingResponse>}
 *     Promise that resolves to the response
 */
proto.acatspb.OutgoingServicePromiseClient.prototype.listOutgoing =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/acatspb.OutgoingService/ListOutgoing',
      request,
      metadata || {},
      methodDescriptor_OutgoingService_ListOutgoing);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.acatspb.DownloadOutgoingRequest,
 *   !proto.acatspb.DownloadOutgoingResponse>}
 */
const methodDescriptor_OutgoingService_DownloadOutgoing = new grpc.web.MethodDescriptor(
  '/acatspb.OutgoingService/DownloadOutgoing',
  grpc.web.MethodType.UNARY,
  proto.acatspb.DownloadOutgoingRequest,
  proto.acatspb.DownloadOutgoingResponse,
  /**
   * @param {!proto.acatspb.DownloadOutgoingRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.acatspb.DownloadOutgoingResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.acatspb.DownloadOutgoingRequest,
 *   !proto.acatspb.DownloadOutgoingResponse>}
 */
const methodInfo_OutgoingService_DownloadOutgoing = new grpc.web.AbstractClientBase.MethodInfo(
  proto.acatspb.DownloadOutgoingResponse,
  /**
   * @param {!proto.acatspb.DownloadOutgoingRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.acatspb.DownloadOutgoingResponse.deserializeBinary
);


/**
 * @param {!proto.acatspb.DownloadOutgoingRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.acatspb.DownloadOutgoingResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.acatspb.DownloadOutgoingResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.acatspb.OutgoingServiceClient.prototype.downloadOutgoing =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/acatspb.OutgoingService/DownloadOutgoing',
      request,
      metadata || {},
      methodDescriptor_OutgoingService_DownloadOutgoing,
      callback);
};


/**
 * @param {!proto.acatspb.DownloadOutgoingRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.acatspb.DownloadOutgoingResponse>}
 *     Promise that resolves to the response
 */
proto.acatspb.OutgoingServicePromiseClient.prototype.downloadOutgoing =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/acatspb.OutgoingService/DownloadOutgoing',
      request,
      metadata || {},
      methodDescriptor_OutgoingService_DownloadOutgoing);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.acatspb.RejectOutgoingRequest,
 *   !proto.acatspb.EmptyResponse>}
 */
const methodDescriptor_OutgoingService_RejectOutgoing = new grpc.web.MethodDescriptor(
  '/acatspb.OutgoingService/RejectOutgoing',
  grpc.web.MethodType.UNARY,
  proto.acatspb.RejectOutgoingRequest,
  proto_acatspb_partial_pb.EmptyResponse,
  /**
   * @param {!proto.acatspb.RejectOutgoingRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto_acatspb_partial_pb.EmptyResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.acatspb.RejectOutgoingRequest,
 *   !proto.acatspb.EmptyResponse>}
 */
const methodInfo_OutgoingService_RejectOutgoing = new grpc.web.AbstractClientBase.MethodInfo(
  proto_acatspb_partial_pb.EmptyResponse,
  /**
   * @param {!proto.acatspb.RejectOutgoingRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto_acatspb_partial_pb.EmptyResponse.deserializeBinary
);


/**
 * @param {!proto.acatspb.RejectOutgoingRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.acatspb.EmptyResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.acatspb.EmptyResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.acatspb.OutgoingServiceClient.prototype.rejectOutgoing =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/acatspb.OutgoingService/RejectOutgoing',
      request,
      metadata || {},
      methodDescriptor_OutgoingService_RejectOutgoing,
      callback);
};


/**
 * @param {!proto.acatspb.RejectOutgoingRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.acatspb.EmptyResponse>}
 *     Promise that resolves to the response
 */
proto.acatspb.OutgoingServicePromiseClient.prototype.rejectOutgoing =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/acatspb.OutgoingService/RejectOutgoing',
      request,
      metadata || {},
      methodDescriptor_OutgoingService_RejectOutgoing);
};


module.exports = proto.acatspb;

