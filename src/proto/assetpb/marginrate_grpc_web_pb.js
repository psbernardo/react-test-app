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


var google_type_date_pb = require('../../google/type/date_pb.js')
const proto = {};
proto.assetpb = require('./marginrate_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.assetpb.MarginRateServiceClient =
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
proto.assetpb.MarginRateServicePromiseClient =
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
 *   !proto.assetpb.MarginRate,
 *   !proto.assetpb.ListMarginRateResponse>}
 */
const methodDescriptor_MarginRateService_ListMarginRate = new grpc.web.MethodDescriptor(
  '/assetpb.MarginRateService/ListMarginRate',
  grpc.web.MethodType.UNARY,
  proto.assetpb.MarginRate,
  proto.assetpb.ListMarginRateResponse,
  /**
   * @param {!proto.assetpb.MarginRate} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.assetpb.ListMarginRateResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.assetpb.MarginRate,
 *   !proto.assetpb.ListMarginRateResponse>}
 */
const methodInfo_MarginRateService_ListMarginRate = new grpc.web.AbstractClientBase.MethodInfo(
  proto.assetpb.ListMarginRateResponse,
  /**
   * @param {!proto.assetpb.MarginRate} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.assetpb.ListMarginRateResponse.deserializeBinary
);


/**
 * @param {!proto.assetpb.MarginRate} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.assetpb.ListMarginRateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.assetpb.ListMarginRateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.assetpb.MarginRateServiceClient.prototype.listMarginRate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/assetpb.MarginRateService/ListMarginRate',
      request,
      metadata || {},
      methodDescriptor_MarginRateService_ListMarginRate,
      callback);
};


/**
 * @param {!proto.assetpb.MarginRate} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.assetpb.ListMarginRateResponse>}
 *     A native promise that resolves to the response
 */
proto.assetpb.MarginRateServicePromiseClient.prototype.listMarginRate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/assetpb.MarginRateService/ListMarginRate',
      request,
      metadata || {},
      methodDescriptor_MarginRateService_ListMarginRate);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.assetpb.MarginRate,
 *   !proto.assetpb.CreateMarginRateResponse>}
 */
const methodDescriptor_MarginRateService_CreateMarginRate = new grpc.web.MethodDescriptor(
  '/assetpb.MarginRateService/CreateMarginRate',
  grpc.web.MethodType.UNARY,
  proto.assetpb.MarginRate,
  proto.assetpb.CreateMarginRateResponse,
  /**
   * @param {!proto.assetpb.MarginRate} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.assetpb.CreateMarginRateResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.assetpb.MarginRate,
 *   !proto.assetpb.CreateMarginRateResponse>}
 */
const methodInfo_MarginRateService_CreateMarginRate = new grpc.web.AbstractClientBase.MethodInfo(
  proto.assetpb.CreateMarginRateResponse,
  /**
   * @param {!proto.assetpb.MarginRate} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.assetpb.CreateMarginRateResponse.deserializeBinary
);


/**
 * @param {!proto.assetpb.MarginRate} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.assetpb.CreateMarginRateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.assetpb.CreateMarginRateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.assetpb.MarginRateServiceClient.prototype.createMarginRate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/assetpb.MarginRateService/CreateMarginRate',
      request,
      metadata || {},
      methodDescriptor_MarginRateService_CreateMarginRate,
      callback);
};


/**
 * @param {!proto.assetpb.MarginRate} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.assetpb.CreateMarginRateResponse>}
 *     A native promise that resolves to the response
 */
proto.assetpb.MarginRateServicePromiseClient.prototype.createMarginRate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/assetpb.MarginRateService/CreateMarginRate',
      request,
      metadata || {},
      methodDescriptor_MarginRateService_CreateMarginRate);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.assetpb.MarginRate,
 *   !proto.assetpb.UpdateMarginRateResponse>}
 */
const methodDescriptor_MarginRateService_UpdateMarginRate = new grpc.web.MethodDescriptor(
  '/assetpb.MarginRateService/UpdateMarginRate',
  grpc.web.MethodType.UNARY,
  proto.assetpb.MarginRate,
  proto.assetpb.UpdateMarginRateResponse,
  /**
   * @param {!proto.assetpb.MarginRate} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.assetpb.UpdateMarginRateResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.assetpb.MarginRate,
 *   !proto.assetpb.UpdateMarginRateResponse>}
 */
const methodInfo_MarginRateService_UpdateMarginRate = new grpc.web.AbstractClientBase.MethodInfo(
  proto.assetpb.UpdateMarginRateResponse,
  /**
   * @param {!proto.assetpb.MarginRate} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.assetpb.UpdateMarginRateResponse.deserializeBinary
);


/**
 * @param {!proto.assetpb.MarginRate} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.assetpb.UpdateMarginRateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.assetpb.UpdateMarginRateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.assetpb.MarginRateServiceClient.prototype.updateMarginRate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/assetpb.MarginRateService/UpdateMarginRate',
      request,
      metadata || {},
      methodDescriptor_MarginRateService_UpdateMarginRate,
      callback);
};


/**
 * @param {!proto.assetpb.MarginRate} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.assetpb.UpdateMarginRateResponse>}
 *     A native promise that resolves to the response
 */
proto.assetpb.MarginRateServicePromiseClient.prototype.updateMarginRate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/assetpb.MarginRateService/UpdateMarginRate',
      request,
      metadata || {},
      methodDescriptor_MarginRateService_UpdateMarginRate);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.assetpb.DeleteMarginRateRequest,
 *   !proto.assetpb.DeleteMarginRateResponse>}
 */
const methodDescriptor_MarginRateService_DeleteMarginRate = new grpc.web.MethodDescriptor(
  '/assetpb.MarginRateService/DeleteMarginRate',
  grpc.web.MethodType.UNARY,
  proto.assetpb.DeleteMarginRateRequest,
  proto.assetpb.DeleteMarginRateResponse,
  /**
   * @param {!proto.assetpb.DeleteMarginRateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.assetpb.DeleteMarginRateResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.assetpb.DeleteMarginRateRequest,
 *   !proto.assetpb.DeleteMarginRateResponse>}
 */
const methodInfo_MarginRateService_DeleteMarginRate = new grpc.web.AbstractClientBase.MethodInfo(
  proto.assetpb.DeleteMarginRateResponse,
  /**
   * @param {!proto.assetpb.DeleteMarginRateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.assetpb.DeleteMarginRateResponse.deserializeBinary
);


/**
 * @param {!proto.assetpb.DeleteMarginRateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.assetpb.DeleteMarginRateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.assetpb.DeleteMarginRateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.assetpb.MarginRateServiceClient.prototype.deleteMarginRate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/assetpb.MarginRateService/DeleteMarginRate',
      request,
      metadata || {},
      methodDescriptor_MarginRateService_DeleteMarginRate,
      callback);
};


/**
 * @param {!proto.assetpb.DeleteMarginRateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.assetpb.DeleteMarginRateResponse>}
 *     A native promise that resolves to the response
 */
proto.assetpb.MarginRateServicePromiseClient.prototype.deleteMarginRate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/assetpb.MarginRateService/DeleteMarginRate',
      request,
      metadata || {},
      methodDescriptor_MarginRateService_DeleteMarginRate);
};


module.exports = proto.assetpb;

