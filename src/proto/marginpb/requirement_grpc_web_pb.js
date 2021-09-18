/**
 * @fileoverview gRPC-Web generated client stub for marginpb
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
proto.marginpb = require('./requirement_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.marginpb.RequirementServiceClient =
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
proto.marginpb.RequirementServicePromiseClient =
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
 *   !proto.marginpb.ListRequirementRequest,
 *   !proto.marginpb.ListRequirementResponse>}
 */
const methodDescriptor_RequirementService_ListRequirement = new grpc.web.MethodDescriptor(
  '/marginpb.RequirementService/ListRequirement',
  grpc.web.MethodType.UNARY,
  proto.marginpb.ListRequirementRequest,
  proto.marginpb.ListRequirementResponse,
  /**
   * @param {!proto.marginpb.ListRequirementRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.marginpb.ListRequirementResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.marginpb.ListRequirementRequest,
 *   !proto.marginpb.ListRequirementResponse>}
 */
const methodInfo_RequirementService_ListRequirement = new grpc.web.AbstractClientBase.MethodInfo(
  proto.marginpb.ListRequirementResponse,
  /**
   * @param {!proto.marginpb.ListRequirementRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.marginpb.ListRequirementResponse.deserializeBinary
);


/**
 * @param {!proto.marginpb.ListRequirementRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.marginpb.ListRequirementResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.marginpb.ListRequirementResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.marginpb.RequirementServiceClient.prototype.listRequirement =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/marginpb.RequirementService/ListRequirement',
      request,
      metadata || {},
      methodDescriptor_RequirementService_ListRequirement,
      callback);
};


/**
 * @param {!proto.marginpb.ListRequirementRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.marginpb.ListRequirementResponse>}
 *     A native promise that resolves to the response
 */
proto.marginpb.RequirementServicePromiseClient.prototype.listRequirement =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/marginpb.RequirementService/ListRequirement',
      request,
      metadata || {},
      methodDescriptor_RequirementService_ListRequirement);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.marginpb.ListRequirementDetailRequest,
 *   !proto.marginpb.ListRequirementDetailResponse>}
 */
const methodDescriptor_RequirementService_ListRequirementDetail = new grpc.web.MethodDescriptor(
  '/marginpb.RequirementService/ListRequirementDetail',
  grpc.web.MethodType.UNARY,
  proto.marginpb.ListRequirementDetailRequest,
  proto.marginpb.ListRequirementDetailResponse,
  /**
   * @param {!proto.marginpb.ListRequirementDetailRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.marginpb.ListRequirementDetailResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.marginpb.ListRequirementDetailRequest,
 *   !proto.marginpb.ListRequirementDetailResponse>}
 */
const methodInfo_RequirementService_ListRequirementDetail = new grpc.web.AbstractClientBase.MethodInfo(
  proto.marginpb.ListRequirementDetailResponse,
  /**
   * @param {!proto.marginpb.ListRequirementDetailRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.marginpb.ListRequirementDetailResponse.deserializeBinary
);


/**
 * @param {!proto.marginpb.ListRequirementDetailRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.marginpb.ListRequirementDetailResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.marginpb.ListRequirementDetailResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.marginpb.RequirementServiceClient.prototype.listRequirementDetail =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/marginpb.RequirementService/ListRequirementDetail',
      request,
      metadata || {},
      methodDescriptor_RequirementService_ListRequirementDetail,
      callback);
};


/**
 * @param {!proto.marginpb.ListRequirementDetailRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.marginpb.ListRequirementDetailResponse>}
 *     A native promise that resolves to the response
 */
proto.marginpb.RequirementServicePromiseClient.prototype.listRequirementDetail =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/marginpb.RequirementService/ListRequirementDetail',
      request,
      metadata || {},
      methodDescriptor_RequirementService_ListRequirementDetail);
};


module.exports = proto.marginpb;

