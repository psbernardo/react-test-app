/**
 * @fileoverview gRPC-Web generated client stub for commonpb
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var proto_commonpb_list_pb = require('../../proto/commonpb/list_pb.js')
const proto = {};
proto.commonpb = require('./lazysystemcode_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.commonpb.LazySystemCodeServiceClient =
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
proto.commonpb.LazySystemCodeServicePromiseClient =
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
 *   !proto.commonpb.LazySystemCodeRequest,
 *   !proto.commonpb.LazySystemCodeResponse>}
 */
const methodDescriptor_LazySystemCodeService_LazySystemCode = new grpc.web.MethodDescriptor(
  '/commonpb.LazySystemCodeService/LazySystemCode',
  grpc.web.MethodType.UNARY,
  proto.commonpb.LazySystemCodeRequest,
  proto.commonpb.LazySystemCodeResponse,
  /**
   * @param {!proto.commonpb.LazySystemCodeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.commonpb.LazySystemCodeResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.commonpb.LazySystemCodeRequest,
 *   !proto.commonpb.LazySystemCodeResponse>}
 */
const methodInfo_LazySystemCodeService_LazySystemCode = new grpc.web.AbstractClientBase.MethodInfo(
  proto.commonpb.LazySystemCodeResponse,
  /**
   * @param {!proto.commonpb.LazySystemCodeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.commonpb.LazySystemCodeResponse.deserializeBinary
);


/**
 * @param {!proto.commonpb.LazySystemCodeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.commonpb.LazySystemCodeResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.commonpb.LazySystemCodeResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.commonpb.LazySystemCodeServiceClient.prototype.lazySystemCode =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/commonpb.LazySystemCodeService/LazySystemCode',
      request,
      metadata || {},
      methodDescriptor_LazySystemCodeService_LazySystemCode,
      callback);
};


/**
 * @param {!proto.commonpb.LazySystemCodeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.commonpb.LazySystemCodeResponse>}
 *     Promise that resolves to the response
 */
proto.commonpb.LazySystemCodeServicePromiseClient.prototype.lazySystemCode =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/commonpb.LazySystemCodeService/LazySystemCode',
      request,
      metadata || {},
      methodDescriptor_LazySystemCodeService_LazySystemCode);
};


module.exports = proto.commonpb;

