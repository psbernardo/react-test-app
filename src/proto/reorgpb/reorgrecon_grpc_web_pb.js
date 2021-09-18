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
proto.reorgpb = require('./reorgrecon_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.reorgpb.ReOrgReconServiceClient =
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
proto.reorgpb.ReOrgReconServicePromiseClient =
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
 *   !proto.reorgpb.ListReOrgReconRequest,
 *   !proto.reorgpb.ListReOrgReconResponse>}
 */
const methodDescriptor_ReOrgReconService_ListReOrgRecon = new grpc.web.MethodDescriptor(
  '/reorgpb.ReOrgReconService/ListReOrgRecon',
  grpc.web.MethodType.UNARY,
  proto.reorgpb.ListReOrgReconRequest,
  proto.reorgpb.ListReOrgReconResponse,
  /**
   * @param {!proto.reorgpb.ListReOrgReconRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.reorgpb.ListReOrgReconResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.reorgpb.ListReOrgReconRequest,
 *   !proto.reorgpb.ListReOrgReconResponse>}
 */
const methodInfo_ReOrgReconService_ListReOrgRecon = new grpc.web.AbstractClientBase.MethodInfo(
  proto.reorgpb.ListReOrgReconResponse,
  /**
   * @param {!proto.reorgpb.ListReOrgReconRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.reorgpb.ListReOrgReconResponse.deserializeBinary
);


/**
 * @param {!proto.reorgpb.ListReOrgReconRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.reorgpb.ListReOrgReconResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.reorgpb.ListReOrgReconResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.reorgpb.ReOrgReconServiceClient.prototype.listReOrgRecon =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/reorgpb.ReOrgReconService/ListReOrgRecon',
      request,
      metadata || {},
      methodDescriptor_ReOrgReconService_ListReOrgRecon,
      callback);
};


/**
 * @param {!proto.reorgpb.ListReOrgReconRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.reorgpb.ListReOrgReconResponse>}
 *     Promise that resolves to the response
 */
proto.reorgpb.ReOrgReconServicePromiseClient.prototype.listReOrgRecon =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/reorgpb.ReOrgReconService/ListReOrgRecon',
      request,
      metadata || {},
      methodDescriptor_ReOrgReconService_ListReOrgRecon);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.reorgpb.ListReOrgReconDetailRequest,
 *   !proto.reorgpb.ListReOrgReconDetailResponse>}
 */
const methodDescriptor_ReOrgReconService_ListReOrgReconDetail = new grpc.web.MethodDescriptor(
  '/reorgpb.ReOrgReconService/ListReOrgReconDetail',
  grpc.web.MethodType.UNARY,
  proto.reorgpb.ListReOrgReconDetailRequest,
  proto.reorgpb.ListReOrgReconDetailResponse,
  /**
   * @param {!proto.reorgpb.ListReOrgReconDetailRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.reorgpb.ListReOrgReconDetailResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.reorgpb.ListReOrgReconDetailRequest,
 *   !proto.reorgpb.ListReOrgReconDetailResponse>}
 */
const methodInfo_ReOrgReconService_ListReOrgReconDetail = new grpc.web.AbstractClientBase.MethodInfo(
  proto.reorgpb.ListReOrgReconDetailResponse,
  /**
   * @param {!proto.reorgpb.ListReOrgReconDetailRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.reorgpb.ListReOrgReconDetailResponse.deserializeBinary
);


/**
 * @param {!proto.reorgpb.ListReOrgReconDetailRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.reorgpb.ListReOrgReconDetailResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.reorgpb.ListReOrgReconDetailResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.reorgpb.ReOrgReconServiceClient.prototype.listReOrgReconDetail =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/reorgpb.ReOrgReconService/ListReOrgReconDetail',
      request,
      metadata || {},
      methodDescriptor_ReOrgReconService_ListReOrgReconDetail,
      callback);
};


/**
 * @param {!proto.reorgpb.ListReOrgReconDetailRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.reorgpb.ListReOrgReconDetailResponse>}
 *     Promise that resolves to the response
 */
proto.reorgpb.ReOrgReconServicePromiseClient.prototype.listReOrgReconDetail =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/reorgpb.ReOrgReconService/ListReOrgReconDetail',
      request,
      metadata || {},
      methodDescriptor_ReOrgReconService_ListReOrgReconDetail);
};


module.exports = proto.reorgpb;

