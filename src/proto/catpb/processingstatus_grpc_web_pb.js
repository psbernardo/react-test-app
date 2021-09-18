/**
 * @fileoverview gRPC-Web generated client stub for catpb
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
proto.catpb = require('./processingstatus_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.catpb.ProcessingStatusServiceClient =
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
proto.catpb.ProcessingStatusServicePromiseClient =
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
 *   !proto.catpb.ListProcessingStatusRequest,
 *   !proto.catpb.ListProcessingStatusResponse>}
 */
const methodDescriptor_ProcessingStatusService_ListProcessingStatus = new grpc.web.MethodDescriptor(
  '/catpb.ProcessingStatusService/ListProcessingStatus',
  grpc.web.MethodType.UNARY,
  proto.catpb.ListProcessingStatusRequest,
  proto.catpb.ListProcessingStatusResponse,
  /**
   * @param {!proto.catpb.ListProcessingStatusRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.catpb.ListProcessingStatusResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.catpb.ListProcessingStatusRequest,
 *   !proto.catpb.ListProcessingStatusResponse>}
 */
const methodInfo_ProcessingStatusService_ListProcessingStatus = new grpc.web.AbstractClientBase.MethodInfo(
  proto.catpb.ListProcessingStatusResponse,
  /**
   * @param {!proto.catpb.ListProcessingStatusRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.catpb.ListProcessingStatusResponse.deserializeBinary
);


/**
 * @param {!proto.catpb.ListProcessingStatusRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.catpb.ListProcessingStatusResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.catpb.ListProcessingStatusResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.catpb.ProcessingStatusServiceClient.prototype.listProcessingStatus =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/catpb.ProcessingStatusService/ListProcessingStatus',
      request,
      metadata || {},
      methodDescriptor_ProcessingStatusService_ListProcessingStatus,
      callback);
};


/**
 * @param {!proto.catpb.ListProcessingStatusRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.catpb.ListProcessingStatusResponse>}
 *     A native promise that resolves to the response
 */
proto.catpb.ProcessingStatusServicePromiseClient.prototype.listProcessingStatus =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/catpb.ProcessingStatusService/ListProcessingStatus',
      request,
      metadata || {},
      methodDescriptor_ProcessingStatusService_ListProcessingStatus);
};


module.exports = proto.catpb;

