/**
 * @fileoverview gRPC-Web generated client stub for admpb
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
proto.admpb = require('./previousdate_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.admpb.PreviousDateServiceClient =
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
proto.admpb.PreviousDateServicePromiseClient =
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
 *   !proto.admpb.LoadPreviousDateRequest,
 *   !proto.admpb.LoadPreviousDateResponse>}
 */
const methodDescriptor_PreviousDateService_LoadPreviousDate = new grpc.web.MethodDescriptor(
  '/admpb.PreviousDateService/LoadPreviousDate',
  grpc.web.MethodType.UNARY,
  proto.admpb.LoadPreviousDateRequest,
  proto.admpb.LoadPreviousDateResponse,
  /**
   * @param {!proto.admpb.LoadPreviousDateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admpb.LoadPreviousDateResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.admpb.LoadPreviousDateRequest,
 *   !proto.admpb.LoadPreviousDateResponse>}
 */
const methodInfo_PreviousDateService_LoadPreviousDate = new grpc.web.AbstractClientBase.MethodInfo(
  proto.admpb.LoadPreviousDateResponse,
  /**
   * @param {!proto.admpb.LoadPreviousDateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admpb.LoadPreviousDateResponse.deserializeBinary
);


/**
 * @param {!proto.admpb.LoadPreviousDateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.admpb.LoadPreviousDateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.admpb.LoadPreviousDateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.admpb.PreviousDateServiceClient.prototype.loadPreviousDate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/admpb.PreviousDateService/LoadPreviousDate',
      request,
      metadata || {},
      methodDescriptor_PreviousDateService_LoadPreviousDate,
      callback);
};


/**
 * @param {!proto.admpb.LoadPreviousDateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.admpb.LoadPreviousDateResponse>}
 *     A native promise that resolves to the response
 */
proto.admpb.PreviousDateServicePromiseClient.prototype.loadPreviousDate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/admpb.PreviousDateService/LoadPreviousDate',
      request,
      metadata || {},
      methodDescriptor_PreviousDateService_LoadPreviousDate);
};


module.exports = proto.admpb;

