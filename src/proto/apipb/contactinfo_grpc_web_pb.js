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
proto.apipb = require('./contactinfo_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.apipb.ApiContactInfoServiceClient =
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
proto.apipb.ApiContactInfoServicePromiseClient =
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
 *   !proto.apipb.ListApiContactInfoRequest,
 *   !proto.apipb.ListApiContactInfoResponse>}
 */
const methodDescriptor_ApiContactInfoService_ListApiContactInfo = new grpc.web.MethodDescriptor(
  '/apipb.ApiContactInfoService/ListApiContactInfo',
  grpc.web.MethodType.UNARY,
  proto.apipb.ListApiContactInfoRequest,
  proto.apipb.ListApiContactInfoResponse,
  /**
   * @param {!proto.apipb.ListApiContactInfoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.apipb.ListApiContactInfoResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.apipb.ListApiContactInfoRequest,
 *   !proto.apipb.ListApiContactInfoResponse>}
 */
const methodInfo_ApiContactInfoService_ListApiContactInfo = new grpc.web.AbstractClientBase.MethodInfo(
  proto.apipb.ListApiContactInfoResponse,
  /**
   * @param {!proto.apipb.ListApiContactInfoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.apipb.ListApiContactInfoResponse.deserializeBinary
);


/**
 * @param {!proto.apipb.ListApiContactInfoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.apipb.ListApiContactInfoResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.apipb.ListApiContactInfoResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.apipb.ApiContactInfoServiceClient.prototype.listApiContactInfo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/apipb.ApiContactInfoService/ListApiContactInfo',
      request,
      metadata || {},
      methodDescriptor_ApiContactInfoService_ListApiContactInfo,
      callback);
};


/**
 * @param {!proto.apipb.ListApiContactInfoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.apipb.ListApiContactInfoResponse>}
 *     Promise that resolves to the response
 */
proto.apipb.ApiContactInfoServicePromiseClient.prototype.listApiContactInfo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/apipb.ApiContactInfoService/ListApiContactInfo',
      request,
      metadata || {},
      methodDescriptor_ApiContactInfoService_ListApiContactInfo);
};


module.exports = proto.apipb;

