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
proto.reorgpb = require('./dividend_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.reorgpb.DividendServiceClient =
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
proto.reorgpb.DividendServicePromiseClient =
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
 *   !proto.reorgpb.ListDividendRequest,
 *   !proto.reorgpb.ListDividendResponse>}
 */
const methodDescriptor_DividendService_ListDividend = new grpc.web.MethodDescriptor(
  '/reorgpb.DividendService/ListDividend',
  grpc.web.MethodType.UNARY,
  proto.reorgpb.ListDividendRequest,
  proto.reorgpb.ListDividendResponse,
  /**
   * @param {!proto.reorgpb.ListDividendRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.reorgpb.ListDividendResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.reorgpb.ListDividendRequest,
 *   !proto.reorgpb.ListDividendResponse>}
 */
const methodInfo_DividendService_ListDividend = new grpc.web.AbstractClientBase.MethodInfo(
  proto.reorgpb.ListDividendResponse,
  /**
   * @param {!proto.reorgpb.ListDividendRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.reorgpb.ListDividendResponse.deserializeBinary
);


/**
 * @param {!proto.reorgpb.ListDividendRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.reorgpb.ListDividendResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.reorgpb.ListDividendResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.reorgpb.DividendServiceClient.prototype.listDividend =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/reorgpb.DividendService/ListDividend',
      request,
      metadata || {},
      methodDescriptor_DividendService_ListDividend,
      callback);
};


/**
 * @param {!proto.reorgpb.ListDividendRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.reorgpb.ListDividendResponse>}
 *     A native promise that resolves to the response
 */
proto.reorgpb.DividendServicePromiseClient.prototype.listDividend =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/reorgpb.DividendService/ListDividend',
      request,
      metadata || {},
      methodDescriptor_DividendService_ListDividend);
};


module.exports = proto.reorgpb;

