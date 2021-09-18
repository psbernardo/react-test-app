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
proto.reorgpb = require('./merger_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.reorgpb.MergerServiceClient =
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
proto.reorgpb.MergerServicePromiseClient =
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
 *   !proto.reorgpb.ListMergerRequest,
 *   !proto.reorgpb.ListMergerResponse>}
 */
const methodDescriptor_MergerService_ListMerger = new grpc.web.MethodDescriptor(
  '/reorgpb.MergerService/ListMerger',
  grpc.web.MethodType.UNARY,
  proto.reorgpb.ListMergerRequest,
  proto.reorgpb.ListMergerResponse,
  /**
   * @param {!proto.reorgpb.ListMergerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.reorgpb.ListMergerResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.reorgpb.ListMergerRequest,
 *   !proto.reorgpb.ListMergerResponse>}
 */
const methodInfo_MergerService_ListMerger = new grpc.web.AbstractClientBase.MethodInfo(
  proto.reorgpb.ListMergerResponse,
  /**
   * @param {!proto.reorgpb.ListMergerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.reorgpb.ListMergerResponse.deserializeBinary
);


/**
 * @param {!proto.reorgpb.ListMergerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.reorgpb.ListMergerResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.reorgpb.ListMergerResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.reorgpb.MergerServiceClient.prototype.listMerger =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/reorgpb.MergerService/ListMerger',
      request,
      metadata || {},
      methodDescriptor_MergerService_ListMerger,
      callback);
};


/**
 * @param {!proto.reorgpb.ListMergerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.reorgpb.ListMergerResponse>}
 *     Promise that resolves to the response
 */
proto.reorgpb.MergerServicePromiseClient.prototype.listMerger =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/reorgpb.MergerService/ListMerger',
      request,
      metadata || {},
      methodDescriptor_MergerService_ListMerger);
};


module.exports = proto.reorgpb;

