/**
 * @fileoverview gRPC-Web generated client stub for reorgpb
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
proto.reorgpb = require('./marginint_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.reorgpb.MarginIntServiceClient =
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
proto.reorgpb.MarginIntServicePromiseClient =
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
 *   !proto.reorgpb.ListMarginIntRequest,
 *   !proto.reorgpb.ListMarginIntResponse>}
 */
const methodDescriptor_MarginIntService_ListMarginInt = new grpc.web.MethodDescriptor(
  '/reorgpb.MarginIntService/ListMarginInt',
  grpc.web.MethodType.UNARY,
  proto.reorgpb.ListMarginIntRequest,
  proto.reorgpb.ListMarginIntResponse,
  /**
   * @param {!proto.reorgpb.ListMarginIntRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.reorgpb.ListMarginIntResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.reorgpb.ListMarginIntRequest,
 *   !proto.reorgpb.ListMarginIntResponse>}
 */
const methodInfo_MarginIntService_ListMarginInt = new grpc.web.AbstractClientBase.MethodInfo(
  proto.reorgpb.ListMarginIntResponse,
  /**
   * @param {!proto.reorgpb.ListMarginIntRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.reorgpb.ListMarginIntResponse.deserializeBinary
);


/**
 * @param {!proto.reorgpb.ListMarginIntRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.reorgpb.ListMarginIntResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.reorgpb.ListMarginIntResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.reorgpb.MarginIntServiceClient.prototype.listMarginInt =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/reorgpb.MarginIntService/ListMarginInt',
      request,
      metadata || {},
      methodDescriptor_MarginIntService_ListMarginInt,
      callback);
};


/**
 * @param {!proto.reorgpb.ListMarginIntRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.reorgpb.ListMarginIntResponse>}
 *     A native promise that resolves to the response
 */
proto.reorgpb.MarginIntServicePromiseClient.prototype.listMarginInt =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/reorgpb.MarginIntService/ListMarginInt',
      request,
      metadata || {},
      methodDescriptor_MarginIntService_ListMarginInt);
};


module.exports = proto.reorgpb;

