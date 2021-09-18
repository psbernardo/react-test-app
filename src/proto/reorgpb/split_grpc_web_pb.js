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
proto.reorgpb = require('./split_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.reorgpb.SplitServiceClient =
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
proto.reorgpb.SplitServicePromiseClient =
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
 *   !proto.reorgpb.ListSplitRequest,
 *   !proto.reorgpb.ListSplitResponse>}
 */
const methodDescriptor_SplitService_ListSplit = new grpc.web.MethodDescriptor(
  '/reorgpb.SplitService/ListSplit',
  grpc.web.MethodType.UNARY,
  proto.reorgpb.ListSplitRequest,
  proto.reorgpb.ListSplitResponse,
  /**
   * @param {!proto.reorgpb.ListSplitRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.reorgpb.ListSplitResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.reorgpb.ListSplitRequest,
 *   !proto.reorgpb.ListSplitResponse>}
 */
const methodInfo_SplitService_ListSplit = new grpc.web.AbstractClientBase.MethodInfo(
  proto.reorgpb.ListSplitResponse,
  /**
   * @param {!proto.reorgpb.ListSplitRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.reorgpb.ListSplitResponse.deserializeBinary
);


/**
 * @param {!proto.reorgpb.ListSplitRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.reorgpb.ListSplitResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.reorgpb.ListSplitResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.reorgpb.SplitServiceClient.prototype.listSplit =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/reorgpb.SplitService/ListSplit',
      request,
      metadata || {},
      methodDescriptor_SplitService_ListSplit,
      callback);
};


/**
 * @param {!proto.reorgpb.ListSplitRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.reorgpb.ListSplitResponse>}
 *     A native promise that resolves to the response
 */
proto.reorgpb.SplitServicePromiseClient.prototype.listSplit =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/reorgpb.SplitService/ListSplit',
      request,
      metadata || {},
      methodDescriptor_SplitService_ListSplit);
};


module.exports = proto.reorgpb;

