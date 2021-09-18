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
proto.reorgpb = require('./spinoff_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.reorgpb.SpinOffServiceClient =
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
proto.reorgpb.SpinOffServicePromiseClient =
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
 *   !proto.reorgpb.ListSpinOffRequest,
 *   !proto.reorgpb.ListSpinOffResponse>}
 */
const methodDescriptor_SpinOffService_ListSpinOff = new grpc.web.MethodDescriptor(
  '/reorgpb.SpinOffService/ListSpinOff',
  grpc.web.MethodType.UNARY,
  proto.reorgpb.ListSpinOffRequest,
  proto.reorgpb.ListSpinOffResponse,
  /**
   * @param {!proto.reorgpb.ListSpinOffRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.reorgpb.ListSpinOffResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.reorgpb.ListSpinOffRequest,
 *   !proto.reorgpb.ListSpinOffResponse>}
 */
const methodInfo_SpinOffService_ListSpinOff = new grpc.web.AbstractClientBase.MethodInfo(
  proto.reorgpb.ListSpinOffResponse,
  /**
   * @param {!proto.reorgpb.ListSpinOffRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.reorgpb.ListSpinOffResponse.deserializeBinary
);


/**
 * @param {!proto.reorgpb.ListSpinOffRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.reorgpb.ListSpinOffResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.reorgpb.ListSpinOffResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.reorgpb.SpinOffServiceClient.prototype.listSpinOff =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/reorgpb.SpinOffService/ListSpinOff',
      request,
      metadata || {},
      methodDescriptor_SpinOffService_ListSpinOff,
      callback);
};


/**
 * @param {!proto.reorgpb.ListSpinOffRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.reorgpb.ListSpinOffResponse>}
 *     Promise that resolves to the response
 */
proto.reorgpb.SpinOffServicePromiseClient.prototype.listSpinOff =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/reorgpb.SpinOffService/ListSpinOff',
      request,
      metadata || {},
      methodDescriptor_SpinOffService_ListSpinOff);
};


module.exports = proto.reorgpb;

