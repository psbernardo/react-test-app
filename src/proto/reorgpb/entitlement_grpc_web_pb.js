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
proto.reorgpb = require('./entitlement_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.reorgpb.EntitlementServiceClient =
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
proto.reorgpb.EntitlementServicePromiseClient =
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
 *   !proto.reorgpb.ListEntitlementRequest,
 *   !proto.reorgpb.ListEntitlementResponse>}
 */
const methodDescriptor_EntitlementService_ListEntitlement = new grpc.web.MethodDescriptor(
  '/reorgpb.EntitlementService/ListEntitlement',
  grpc.web.MethodType.UNARY,
  proto.reorgpb.ListEntitlementRequest,
  proto.reorgpb.ListEntitlementResponse,
  /**
   * @param {!proto.reorgpb.ListEntitlementRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.reorgpb.ListEntitlementResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.reorgpb.ListEntitlementRequest,
 *   !proto.reorgpb.ListEntitlementResponse>}
 */
const methodInfo_EntitlementService_ListEntitlement = new grpc.web.AbstractClientBase.MethodInfo(
  proto.reorgpb.ListEntitlementResponse,
  /**
   * @param {!proto.reorgpb.ListEntitlementRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.reorgpb.ListEntitlementResponse.deserializeBinary
);


/**
 * @param {!proto.reorgpb.ListEntitlementRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.reorgpb.ListEntitlementResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.reorgpb.ListEntitlementResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.reorgpb.EntitlementServiceClient.prototype.listEntitlement =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/reorgpb.EntitlementService/ListEntitlement',
      request,
      metadata || {},
      methodDescriptor_EntitlementService_ListEntitlement,
      callback);
};


/**
 * @param {!proto.reorgpb.ListEntitlementRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.reorgpb.ListEntitlementResponse>}
 *     A native promise that resolves to the response
 */
proto.reorgpb.EntitlementServicePromiseClient.prototype.listEntitlement =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/reorgpb.EntitlementService/ListEntitlement',
      request,
      metadata || {},
      methodDescriptor_EntitlementService_ListEntitlement);
};


module.exports = proto.reorgpb;

