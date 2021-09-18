/**
 * @fileoverview gRPC-Web generated client stub for dtccpb
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
proto.dtccpb = require('./apibal_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.dtccpb.ApibalServiceClient =
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
proto.dtccpb.ApibalServicePromiseClient =
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
 *   !proto.dtccpb.ListApibalRequest,
 *   !proto.dtccpb.ListApibalResponse>}
 */
const methodDescriptor_ApibalService_ListApibal = new grpc.web.MethodDescriptor(
  '/dtccpb.ApibalService/ListApibal',
  grpc.web.MethodType.UNARY,
  proto.dtccpb.ListApibalRequest,
  proto.dtccpb.ListApibalResponse,
  /**
   * @param {!proto.dtccpb.ListApibalRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.dtccpb.ListApibalResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.dtccpb.ListApibalRequest,
 *   !proto.dtccpb.ListApibalResponse>}
 */
const methodInfo_ApibalService_ListApibal = new grpc.web.AbstractClientBase.MethodInfo(
  proto.dtccpb.ListApibalResponse,
  /**
   * @param {!proto.dtccpb.ListApibalRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.dtccpb.ListApibalResponse.deserializeBinary
);


/**
 * @param {!proto.dtccpb.ListApibalRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.dtccpb.ListApibalResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.dtccpb.ListApibalResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.dtccpb.ApibalServiceClient.prototype.listApibal =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/dtccpb.ApibalService/ListApibal',
      request,
      metadata || {},
      methodDescriptor_ApibalService_ListApibal,
      callback);
};


/**
 * @param {!proto.dtccpb.ListApibalRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.dtccpb.ListApibalResponse>}
 *     Promise that resolves to the response
 */
proto.dtccpb.ApibalServicePromiseClient.prototype.listApibal =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/dtccpb.ApibalService/ListApibal',
      request,
      metadata || {},
      methodDescriptor_ApibalService_ListApibal);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.dtccpb.ListApibalDetailsRequest,
 *   !proto.dtccpb.ListApibalDetailsResponse>}
 */
const methodDescriptor_ApibalService_ListApibalDetails = new grpc.web.MethodDescriptor(
  '/dtccpb.ApibalService/ListApibalDetails',
  grpc.web.MethodType.UNARY,
  proto.dtccpb.ListApibalDetailsRequest,
  proto.dtccpb.ListApibalDetailsResponse,
  /**
   * @param {!proto.dtccpb.ListApibalDetailsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.dtccpb.ListApibalDetailsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.dtccpb.ListApibalDetailsRequest,
 *   !proto.dtccpb.ListApibalDetailsResponse>}
 */
const methodInfo_ApibalService_ListApibalDetails = new grpc.web.AbstractClientBase.MethodInfo(
  proto.dtccpb.ListApibalDetailsResponse,
  /**
   * @param {!proto.dtccpb.ListApibalDetailsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.dtccpb.ListApibalDetailsResponse.deserializeBinary
);


/**
 * @param {!proto.dtccpb.ListApibalDetailsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.dtccpb.ListApibalDetailsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.dtccpb.ListApibalDetailsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.dtccpb.ApibalServiceClient.prototype.listApibalDetails =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/dtccpb.ApibalService/ListApibalDetails',
      request,
      metadata || {},
      methodDescriptor_ApibalService_ListApibalDetails,
      callback);
};


/**
 * @param {!proto.dtccpb.ListApibalDetailsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.dtccpb.ListApibalDetailsResponse>}
 *     Promise that resolves to the response
 */
proto.dtccpb.ApibalServicePromiseClient.prototype.listApibalDetails =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/dtccpb.ApibalService/ListApibalDetails',
      request,
      metadata || {},
      methodDescriptor_ApibalService_ListApibalDetails);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.dtccpb.EditApibalRequest,
 *   !proto.dtccpb.EditApibalResponse>}
 */
const methodDescriptor_ApibalService_EditApibal = new grpc.web.MethodDescriptor(
  '/dtccpb.ApibalService/EditApibal',
  grpc.web.MethodType.UNARY,
  proto.dtccpb.EditApibalRequest,
  proto.dtccpb.EditApibalResponse,
  /**
   * @param {!proto.dtccpb.EditApibalRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.dtccpb.EditApibalResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.dtccpb.EditApibalRequest,
 *   !proto.dtccpb.EditApibalResponse>}
 */
const methodInfo_ApibalService_EditApibal = new grpc.web.AbstractClientBase.MethodInfo(
  proto.dtccpb.EditApibalResponse,
  /**
   * @param {!proto.dtccpb.EditApibalRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.dtccpb.EditApibalResponse.deserializeBinary
);


/**
 * @param {!proto.dtccpb.EditApibalRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.dtccpb.EditApibalResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.dtccpb.EditApibalResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.dtccpb.ApibalServiceClient.prototype.editApibal =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/dtccpb.ApibalService/EditApibal',
      request,
      metadata || {},
      methodDescriptor_ApibalService_EditApibal,
      callback);
};


/**
 * @param {!proto.dtccpb.EditApibalRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.dtccpb.EditApibalResponse>}
 *     Promise that resolves to the response
 */
proto.dtccpb.ApibalServicePromiseClient.prototype.editApibal =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/dtccpb.ApibalService/EditApibal',
      request,
      metadata || {},
      methodDescriptor_ApibalService_EditApibal);
};


module.exports = proto.dtccpb;

