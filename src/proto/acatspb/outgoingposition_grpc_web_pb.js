/**
 * @fileoverview gRPC-Web generated client stub for acatspb
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
proto.acatspb = require('./outgoingposition_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.acatspb.OutputPositionServiceClient =
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
proto.acatspb.OutputPositionServicePromiseClient =
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
 *   !proto.acatspb.OutputPosition,
 *   !proto.acatspb.ListOutputPositionResponse>}
 */
const methodDescriptor_OutputPositionService_ListOutputPosition = new grpc.web.MethodDescriptor(
  '/acatspb.OutputPositionService/ListOutputPosition',
  grpc.web.MethodType.UNARY,
  proto.acatspb.OutputPosition,
  proto.acatspb.ListOutputPositionResponse,
  /**
   * @param {!proto.acatspb.OutputPosition} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.acatspb.ListOutputPositionResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.acatspb.OutputPosition,
 *   !proto.acatspb.ListOutputPositionResponse>}
 */
const methodInfo_OutputPositionService_ListOutputPosition = new grpc.web.AbstractClientBase.MethodInfo(
  proto.acatspb.ListOutputPositionResponse,
  /**
   * @param {!proto.acatspb.OutputPosition} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.acatspb.ListOutputPositionResponse.deserializeBinary
);


/**
 * @param {!proto.acatspb.OutputPosition} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.acatspb.ListOutputPositionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.acatspb.ListOutputPositionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.acatspb.OutputPositionServiceClient.prototype.listOutputPosition =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/acatspb.OutputPositionService/ListOutputPosition',
      request,
      metadata || {},
      methodDescriptor_OutputPositionService_ListOutputPosition,
      callback);
};


/**
 * @param {!proto.acatspb.OutputPosition} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.acatspb.ListOutputPositionResponse>}
 *     Promise that resolves to the response
 */
proto.acatspb.OutputPositionServicePromiseClient.prototype.listOutputPosition =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/acatspb.OutputPositionService/ListOutputPosition',
      request,
      metadata || {},
      methodDescriptor_OutputPositionService_ListOutputPosition);
};


module.exports = proto.acatspb;

