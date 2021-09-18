/**
 * @fileoverview gRPC-Web generated client stub for regulatorypb
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
proto.regulatorypb = require('./reserve15c3_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.regulatorypb.Reserve15c3ServiceClient =
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
proto.regulatorypb.Reserve15c3ServicePromiseClient =
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
 *   !proto.regulatorypb.UpdateReserve15c3Request,
 *   !proto.regulatorypb.UpdateReserve15c3Response>}
 */
const methodDescriptor_Reserve15c3Service_UpdateReserve15c3 = new grpc.web.MethodDescriptor(
  '/regulatorypb.Reserve15c3Service/UpdateReserve15c3',
  grpc.web.MethodType.UNARY,
  proto.regulatorypb.UpdateReserve15c3Request,
  proto.regulatorypb.UpdateReserve15c3Response,
  /**
   * @param {!proto.regulatorypb.UpdateReserve15c3Request} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.regulatorypb.UpdateReserve15c3Response.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.regulatorypb.UpdateReserve15c3Request,
 *   !proto.regulatorypb.UpdateReserve15c3Response>}
 */
const methodInfo_Reserve15c3Service_UpdateReserve15c3 = new grpc.web.AbstractClientBase.MethodInfo(
  proto.regulatorypb.UpdateReserve15c3Response,
  /**
   * @param {!proto.regulatorypb.UpdateReserve15c3Request} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.regulatorypb.UpdateReserve15c3Response.deserializeBinary
);


/**
 * @param {!proto.regulatorypb.UpdateReserve15c3Request} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.regulatorypb.UpdateReserve15c3Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.regulatorypb.UpdateReserve15c3Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.regulatorypb.Reserve15c3ServiceClient.prototype.updateReserve15c3 =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/regulatorypb.Reserve15c3Service/UpdateReserve15c3',
      request,
      metadata || {},
      methodDescriptor_Reserve15c3Service_UpdateReserve15c3,
      callback);
};


/**
 * @param {!proto.regulatorypb.UpdateReserve15c3Request} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.regulatorypb.UpdateReserve15c3Response>}
 *     A native promise that resolves to the response
 */
proto.regulatorypb.Reserve15c3ServicePromiseClient.prototype.updateReserve15c3 =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/regulatorypb.Reserve15c3Service/UpdateReserve15c3',
      request,
      metadata || {},
      methodDescriptor_Reserve15c3Service_UpdateReserve15c3);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.regulatorypb.ListReserve15c3Request,
 *   !proto.regulatorypb.ListReserve15c3Response>}
 */
const methodDescriptor_Reserve15c3Service_ListReserve15c3 = new grpc.web.MethodDescriptor(
  '/regulatorypb.Reserve15c3Service/ListReserve15c3',
  grpc.web.MethodType.UNARY,
  proto.regulatorypb.ListReserve15c3Request,
  proto.regulatorypb.ListReserve15c3Response,
  /**
   * @param {!proto.regulatorypb.ListReserve15c3Request} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.regulatorypb.ListReserve15c3Response.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.regulatorypb.ListReserve15c3Request,
 *   !proto.regulatorypb.ListReserve15c3Response>}
 */
const methodInfo_Reserve15c3Service_ListReserve15c3 = new grpc.web.AbstractClientBase.MethodInfo(
  proto.regulatorypb.ListReserve15c3Response,
  /**
   * @param {!proto.regulatorypb.ListReserve15c3Request} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.regulatorypb.ListReserve15c3Response.deserializeBinary
);


/**
 * @param {!proto.regulatorypb.ListReserve15c3Request} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.regulatorypb.ListReserve15c3Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.regulatorypb.ListReserve15c3Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.regulatorypb.Reserve15c3ServiceClient.prototype.listReserve15c3 =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/regulatorypb.Reserve15c3Service/ListReserve15c3',
      request,
      metadata || {},
      methodDescriptor_Reserve15c3Service_ListReserve15c3,
      callback);
};


/**
 * @param {!proto.regulatorypb.ListReserve15c3Request} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.regulatorypb.ListReserve15c3Response>}
 *     A native promise that resolves to the response
 */
proto.regulatorypb.Reserve15c3ServicePromiseClient.prototype.listReserve15c3 =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/regulatorypb.Reserve15c3Service/ListReserve15c3',
      request,
      metadata || {},
      methodDescriptor_Reserve15c3Service_ListReserve15c3);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.regulatorypb.Reserve15c3,
 *   !proto.regulatorypb.ListReserve15c3DetailsResponse>}
 */
const methodDescriptor_Reserve15c3Service_ViewReserve15c3 = new grpc.web.MethodDescriptor(
  '/regulatorypb.Reserve15c3Service/ViewReserve15c3',
  grpc.web.MethodType.UNARY,
  proto.regulatorypb.Reserve15c3,
  proto.regulatorypb.ListReserve15c3DetailsResponse,
  /**
   * @param {!proto.regulatorypb.Reserve15c3} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.regulatorypb.ListReserve15c3DetailsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.regulatorypb.Reserve15c3,
 *   !proto.regulatorypb.ListReserve15c3DetailsResponse>}
 */
const methodInfo_Reserve15c3Service_ViewReserve15c3 = new grpc.web.AbstractClientBase.MethodInfo(
  proto.regulatorypb.ListReserve15c3DetailsResponse,
  /**
   * @param {!proto.regulatorypb.Reserve15c3} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.regulatorypb.ListReserve15c3DetailsResponse.deserializeBinary
);


/**
 * @param {!proto.regulatorypb.Reserve15c3} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.regulatorypb.ListReserve15c3DetailsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.regulatorypb.ListReserve15c3DetailsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.regulatorypb.Reserve15c3ServiceClient.prototype.viewReserve15c3 =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/regulatorypb.Reserve15c3Service/ViewReserve15c3',
      request,
      metadata || {},
      methodDescriptor_Reserve15c3Service_ViewReserve15c3,
      callback);
};


/**
 * @param {!proto.regulatorypb.Reserve15c3} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.regulatorypb.ListReserve15c3DetailsResponse>}
 *     A native promise that resolves to the response
 */
proto.regulatorypb.Reserve15c3ServicePromiseClient.prototype.viewReserve15c3 =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/regulatorypb.Reserve15c3Service/ViewReserve15c3',
      request,
      metadata || {},
      methodDescriptor_Reserve15c3Service_ViewReserve15c3);
};


module.exports = proto.regulatorypb;

