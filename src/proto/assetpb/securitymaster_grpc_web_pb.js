/**
 * @fileoverview gRPC-Web generated client stub for assetpb
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var proto_utilspb_pagination_pb = require('../../proto/utilspb/pagination_pb.js')

var google_type_date_pb = require('../../google/type/date_pb.js')
const proto = {};
proto.assetpb = require('./securitymaster_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.assetpb.SecurityMasterServiceClient =
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
proto.assetpb.SecurityMasterServicePromiseClient =
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
 *   !proto.assetpb.ListSecurityMasterRequest,
 *   !proto.assetpb.ListSecurityMasterResponse>}
 */
const methodDescriptor_SecurityMasterService_ListSecurityMaster = new grpc.web.MethodDescriptor(
  '/assetpb.SecurityMasterService/ListSecurityMaster',
  grpc.web.MethodType.UNARY,
  proto.assetpb.ListSecurityMasterRequest,
  proto.assetpb.ListSecurityMasterResponse,
  /**
   * @param {!proto.assetpb.ListSecurityMasterRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.assetpb.ListSecurityMasterResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.assetpb.ListSecurityMasterRequest,
 *   !proto.assetpb.ListSecurityMasterResponse>}
 */
const methodInfo_SecurityMasterService_ListSecurityMaster = new grpc.web.AbstractClientBase.MethodInfo(
  proto.assetpb.ListSecurityMasterResponse,
  /**
   * @param {!proto.assetpb.ListSecurityMasterRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.assetpb.ListSecurityMasterResponse.deserializeBinary
);


/**
 * @param {!proto.assetpb.ListSecurityMasterRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.assetpb.ListSecurityMasterResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.assetpb.ListSecurityMasterResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.assetpb.SecurityMasterServiceClient.prototype.listSecurityMaster =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/assetpb.SecurityMasterService/ListSecurityMaster',
      request,
      metadata || {},
      methodDescriptor_SecurityMasterService_ListSecurityMaster,
      callback);
};


/**
 * @param {!proto.assetpb.ListSecurityMasterRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.assetpb.ListSecurityMasterResponse>}
 *     A native promise that resolves to the response
 */
proto.assetpb.SecurityMasterServicePromiseClient.prototype.listSecurityMaster =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/assetpb.SecurityMasterService/ListSecurityMaster',
      request,
      metadata || {},
      methodDescriptor_SecurityMasterService_ListSecurityMaster);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.assetpb.SecurityMaster,
 *   !proto.assetpb.CreateSecurityMasterResponse>}
 */
const methodDescriptor_SecurityMasterService_CreateSecurityMaster = new grpc.web.MethodDescriptor(
  '/assetpb.SecurityMasterService/CreateSecurityMaster',
  grpc.web.MethodType.UNARY,
  proto.assetpb.SecurityMaster,
  proto.assetpb.CreateSecurityMasterResponse,
  /**
   * @param {!proto.assetpb.SecurityMaster} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.assetpb.CreateSecurityMasterResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.assetpb.SecurityMaster,
 *   !proto.assetpb.CreateSecurityMasterResponse>}
 */
const methodInfo_SecurityMasterService_CreateSecurityMaster = new grpc.web.AbstractClientBase.MethodInfo(
  proto.assetpb.CreateSecurityMasterResponse,
  /**
   * @param {!proto.assetpb.SecurityMaster} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.assetpb.CreateSecurityMasterResponse.deserializeBinary
);


/**
 * @param {!proto.assetpb.SecurityMaster} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.assetpb.CreateSecurityMasterResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.assetpb.CreateSecurityMasterResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.assetpb.SecurityMasterServiceClient.prototype.createSecurityMaster =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/assetpb.SecurityMasterService/CreateSecurityMaster',
      request,
      metadata || {},
      methodDescriptor_SecurityMasterService_CreateSecurityMaster,
      callback);
};


/**
 * @param {!proto.assetpb.SecurityMaster} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.assetpb.CreateSecurityMasterResponse>}
 *     A native promise that resolves to the response
 */
proto.assetpb.SecurityMasterServicePromiseClient.prototype.createSecurityMaster =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/assetpb.SecurityMasterService/CreateSecurityMaster',
      request,
      metadata || {},
      methodDescriptor_SecurityMasterService_CreateSecurityMaster);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.assetpb.SecurityMaster,
 *   !proto.assetpb.UpdateSecurityMasterResponse>}
 */
const methodDescriptor_SecurityMasterService_UpdateSecurityMaster = new grpc.web.MethodDescriptor(
  '/assetpb.SecurityMasterService/UpdateSecurityMaster',
  grpc.web.MethodType.UNARY,
  proto.assetpb.SecurityMaster,
  proto.assetpb.UpdateSecurityMasterResponse,
  /**
   * @param {!proto.assetpb.SecurityMaster} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.assetpb.UpdateSecurityMasterResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.assetpb.SecurityMaster,
 *   !proto.assetpb.UpdateSecurityMasterResponse>}
 */
const methodInfo_SecurityMasterService_UpdateSecurityMaster = new grpc.web.AbstractClientBase.MethodInfo(
  proto.assetpb.UpdateSecurityMasterResponse,
  /**
   * @param {!proto.assetpb.SecurityMaster} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.assetpb.UpdateSecurityMasterResponse.deserializeBinary
);


/**
 * @param {!proto.assetpb.SecurityMaster} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.assetpb.UpdateSecurityMasterResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.assetpb.UpdateSecurityMasterResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.assetpb.SecurityMasterServiceClient.prototype.updateSecurityMaster =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/assetpb.SecurityMasterService/UpdateSecurityMaster',
      request,
      metadata || {},
      methodDescriptor_SecurityMasterService_UpdateSecurityMaster,
      callback);
};


/**
 * @param {!proto.assetpb.SecurityMaster} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.assetpb.UpdateSecurityMasterResponse>}
 *     A native promise that resolves to the response
 */
proto.assetpb.SecurityMasterServicePromiseClient.prototype.updateSecurityMaster =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/assetpb.SecurityMasterService/UpdateSecurityMaster',
      request,
      metadata || {},
      methodDescriptor_SecurityMasterService_UpdateSecurityMaster);
};


module.exports = proto.assetpb;

