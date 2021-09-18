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
proto.apipb = require('./kycstatus_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.apipb.APIKycStatusServiceClient =
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
proto.apipb.APIKycStatusServicePromiseClient =
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
 *   !proto.apipb.ListApiKycStatusRequest,
 *   !proto.apipb.ListApiKycStatusResponse>}
 */
const methodDescriptor_APIKycStatusService_ListApiKycStatus = new grpc.web.MethodDescriptor(
  '/apipb.APIKycStatusService/ListApiKycStatus',
  grpc.web.MethodType.UNARY,
  proto.apipb.ListApiKycStatusRequest,
  proto.apipb.ListApiKycStatusResponse,
  /**
   * @param {!proto.apipb.ListApiKycStatusRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.apipb.ListApiKycStatusResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.apipb.ListApiKycStatusRequest,
 *   !proto.apipb.ListApiKycStatusResponse>}
 */
const methodInfo_APIKycStatusService_ListApiKycStatus = new grpc.web.AbstractClientBase.MethodInfo(
  proto.apipb.ListApiKycStatusResponse,
  /**
   * @param {!proto.apipb.ListApiKycStatusRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.apipb.ListApiKycStatusResponse.deserializeBinary
);


/**
 * @param {!proto.apipb.ListApiKycStatusRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.apipb.ListApiKycStatusResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.apipb.ListApiKycStatusResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.apipb.APIKycStatusServiceClient.prototype.listApiKycStatus =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/apipb.APIKycStatusService/ListApiKycStatus',
      request,
      metadata || {},
      methodDescriptor_APIKycStatusService_ListApiKycStatus,
      callback);
};


/**
 * @param {!proto.apipb.ListApiKycStatusRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.apipb.ListApiKycStatusResponse>}
 *     Promise that resolves to the response
 */
proto.apipb.APIKycStatusServicePromiseClient.prototype.listApiKycStatus =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/apipb.APIKycStatusService/ListApiKycStatus',
      request,
      metadata || {},
      methodDescriptor_APIKycStatusService_ListApiKycStatus);
};


module.exports = proto.apipb;

