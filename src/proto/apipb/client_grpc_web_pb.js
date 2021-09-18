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

var google_type_date_pb = require('../../google/type/date_pb.js')
const proto = {};
proto.apipb = require('./client_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.apipb.APIClientServiceClient =
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
proto.apipb.APIClientServicePromiseClient =
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
 *   !proto.apipb.ListApiClientRequest,
 *   !proto.apipb.ListApiClientResponse>}
 */
const methodDescriptor_APIClientService_ListApiClient = new grpc.web.MethodDescriptor(
  '/apipb.APIClientService/ListApiClient',
  grpc.web.MethodType.UNARY,
  proto.apipb.ListApiClientRequest,
  proto.apipb.ListApiClientResponse,
  /**
   * @param {!proto.apipb.ListApiClientRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.apipb.ListApiClientResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.apipb.ListApiClientRequest,
 *   !proto.apipb.ListApiClientResponse>}
 */
const methodInfo_APIClientService_ListApiClient = new grpc.web.AbstractClientBase.MethodInfo(
  proto.apipb.ListApiClientResponse,
  /**
   * @param {!proto.apipb.ListApiClientRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.apipb.ListApiClientResponse.deserializeBinary
);


/**
 * @param {!proto.apipb.ListApiClientRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.apipb.ListApiClientResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.apipb.ListApiClientResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.apipb.APIClientServiceClient.prototype.listApiClient =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/apipb.APIClientService/ListApiClient',
      request,
      metadata || {},
      methodDescriptor_APIClientService_ListApiClient,
      callback);
};


/**
 * @param {!proto.apipb.ListApiClientRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.apipb.ListApiClientResponse>}
 *     Promise that resolves to the response
 */
proto.apipb.APIClientServicePromiseClient.prototype.listApiClient =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/apipb.APIClientService/ListApiClient',
      request,
      metadata || {},
      methodDescriptor_APIClientService_ListApiClient);
};


module.exports = proto.apipb;

