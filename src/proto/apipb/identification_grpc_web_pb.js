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

const proto = {};
proto.apipb = require('./identification_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.apipb.APIIdentificationServiceClient =
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
proto.apipb.APIIdentificationServicePromiseClient =
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
 *   !proto.apipb.ListApiIdentificationRequest,
 *   !proto.apipb.ListApiIdentificationResponse>}
 */
const methodDescriptor_APIIdentificationService_ListApiIdentification = new grpc.web.MethodDescriptor(
  '/apipb.APIIdentificationService/ListApiIdentification',
  grpc.web.MethodType.UNARY,
  proto.apipb.ListApiIdentificationRequest,
  proto.apipb.ListApiIdentificationResponse,
  /**
   * @param {!proto.apipb.ListApiIdentificationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.apipb.ListApiIdentificationResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.apipb.ListApiIdentificationRequest,
 *   !proto.apipb.ListApiIdentificationResponse>}
 */
const methodInfo_APIIdentificationService_ListApiIdentification = new grpc.web.AbstractClientBase.MethodInfo(
  proto.apipb.ListApiIdentificationResponse,
  /**
   * @param {!proto.apipb.ListApiIdentificationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.apipb.ListApiIdentificationResponse.deserializeBinary
);


/**
 * @param {!proto.apipb.ListApiIdentificationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.apipb.ListApiIdentificationResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.apipb.ListApiIdentificationResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.apipb.APIIdentificationServiceClient.prototype.listApiIdentification =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/apipb.APIIdentificationService/ListApiIdentification',
      request,
      metadata || {},
      methodDescriptor_APIIdentificationService_ListApiIdentification,
      callback);
};


/**
 * @param {!proto.apipb.ListApiIdentificationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.apipb.ListApiIdentificationResponse>}
 *     Promise that resolves to the response
 */
proto.apipb.APIIdentificationServicePromiseClient.prototype.listApiIdentification =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/apipb.APIIdentificationService/ListApiIdentification',
      request,
      metadata || {},
      methodDescriptor_APIIdentificationService_ListApiIdentification);
};


module.exports = proto.apipb;

