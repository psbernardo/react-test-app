/**
 * @fileoverview gRPC-Web generated client stub for apipb
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')
const proto = {};
proto.apipb = require('./status_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.apipb.APIStatusServiceClient =
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
proto.apipb.APIStatusServicePromiseClient =
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
 *   !proto.apipb.ListApiStatusRequest,
 *   !proto.apipb.ListApiStatusResponse>}
 */
const methodDescriptor_APIStatusService_ListApiStatus = new grpc.web.MethodDescriptor(
  '/apipb.APIStatusService/ListApiStatus',
  grpc.web.MethodType.UNARY,
  proto.apipb.ListApiStatusRequest,
  proto.apipb.ListApiStatusResponse,
  /**
   * @param {!proto.apipb.ListApiStatusRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.apipb.ListApiStatusResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.apipb.ListApiStatusRequest,
 *   !proto.apipb.ListApiStatusResponse>}
 */
const methodInfo_APIStatusService_ListApiStatus = new grpc.web.AbstractClientBase.MethodInfo(
  proto.apipb.ListApiStatusResponse,
  /**
   * @param {!proto.apipb.ListApiStatusRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.apipb.ListApiStatusResponse.deserializeBinary
);


/**
 * @param {!proto.apipb.ListApiStatusRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.apipb.ListApiStatusResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.apipb.ListApiStatusResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.apipb.APIStatusServiceClient.prototype.listApiStatus =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/apipb.APIStatusService/ListApiStatus',
      request,
      metadata || {},
      methodDescriptor_APIStatusService_ListApiStatus,
      callback);
};


/**
 * @param {!proto.apipb.ListApiStatusRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.apipb.ListApiStatusResponse>}
 *     Promise that resolves to the response
 */
proto.apipb.APIStatusServicePromiseClient.prototype.listApiStatus =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/apipb.APIStatusService/ListApiStatus',
      request,
      metadata || {},
      methodDescriptor_APIStatusService_ListApiStatus);
};


module.exports = proto.apipb;

