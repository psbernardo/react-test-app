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
proto.reorgpb = require('./entitlementrecon_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.reorgpb.EntitlementReconServiceClient =
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
proto.reorgpb.EntitlementReconServicePromiseClient =
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
 *   !proto.reorgpb.ListEntitlementReconRequest,
 *   !proto.reorgpb.ListEntitlementReconResponse>}
 */
const methodDescriptor_EntitlementReconService_ListEntitlementRecon = new grpc.web.MethodDescriptor(
  '/reorgpb.EntitlementReconService/ListEntitlementRecon',
  grpc.web.MethodType.UNARY,
  proto.reorgpb.ListEntitlementReconRequest,
  proto.reorgpb.ListEntitlementReconResponse,
  /**
   * @param {!proto.reorgpb.ListEntitlementReconRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.reorgpb.ListEntitlementReconResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.reorgpb.ListEntitlementReconRequest,
 *   !proto.reorgpb.ListEntitlementReconResponse>}
 */
const methodInfo_EntitlementReconService_ListEntitlementRecon = new grpc.web.AbstractClientBase.MethodInfo(
  proto.reorgpb.ListEntitlementReconResponse,
  /**
   * @param {!proto.reorgpb.ListEntitlementReconRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.reorgpb.ListEntitlementReconResponse.deserializeBinary
);


/**
 * @param {!proto.reorgpb.ListEntitlementReconRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.reorgpb.ListEntitlementReconResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.reorgpb.ListEntitlementReconResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.reorgpb.EntitlementReconServiceClient.prototype.listEntitlementRecon =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/reorgpb.EntitlementReconService/ListEntitlementRecon',
      request,
      metadata || {},
      methodDescriptor_EntitlementReconService_ListEntitlementRecon,
      callback);
};


/**
 * @param {!proto.reorgpb.ListEntitlementReconRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.reorgpb.ListEntitlementReconResponse>}
 *     Promise that resolves to the response
 */
proto.reorgpb.EntitlementReconServicePromiseClient.prototype.listEntitlementRecon =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/reorgpb.EntitlementReconService/ListEntitlementRecon',
      request,
      metadata || {},
      methodDescriptor_EntitlementReconService_ListEntitlementRecon);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.reorgpb.ListEntitlementReconDetailRequest,
 *   !proto.reorgpb.ListEntitlementReconDetailResponse>}
 */
const methodDescriptor_EntitlementReconService_ListEntitlementReconDetail = new grpc.web.MethodDescriptor(
  '/reorgpb.EntitlementReconService/ListEntitlementReconDetail',
  grpc.web.MethodType.UNARY,
  proto.reorgpb.ListEntitlementReconDetailRequest,
  proto.reorgpb.ListEntitlementReconDetailResponse,
  /**
   * @param {!proto.reorgpb.ListEntitlementReconDetailRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.reorgpb.ListEntitlementReconDetailResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.reorgpb.ListEntitlementReconDetailRequest,
 *   !proto.reorgpb.ListEntitlementReconDetailResponse>}
 */
const methodInfo_EntitlementReconService_ListEntitlementReconDetail = new grpc.web.AbstractClientBase.MethodInfo(
  proto.reorgpb.ListEntitlementReconDetailResponse,
  /**
   * @param {!proto.reorgpb.ListEntitlementReconDetailRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.reorgpb.ListEntitlementReconDetailResponse.deserializeBinary
);


/**
 * @param {!proto.reorgpb.ListEntitlementReconDetailRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.reorgpb.ListEntitlementReconDetailResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.reorgpb.ListEntitlementReconDetailResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.reorgpb.EntitlementReconServiceClient.prototype.listEntitlementReconDetail =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/reorgpb.EntitlementReconService/ListEntitlementReconDetail',
      request,
      metadata || {},
      methodDescriptor_EntitlementReconService_ListEntitlementReconDetail,
      callback);
};


/**
 * @param {!proto.reorgpb.ListEntitlementReconDetailRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.reorgpb.ListEntitlementReconDetailResponse>}
 *     Promise that resolves to the response
 */
proto.reorgpb.EntitlementReconServicePromiseClient.prototype.listEntitlementReconDetail =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/reorgpb.EntitlementReconService/ListEntitlementReconDetail',
      request,
      metadata || {},
      methodDescriptor_EntitlementReconService_ListEntitlementReconDetail);
};


module.exports = proto.reorgpb;

