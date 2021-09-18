/**
 * @fileoverview gRPC-Web generated client stub for proto
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.proto = require('./sll_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.proto.SllServiceClient =
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
proto.proto.SllServicePromiseClient =
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
 *   !proto.proto.Sll,
 *   !proto.proto.CreateSllResponse>}
 */
const methodDescriptor_SllService_CreateSll = new grpc.web.MethodDescriptor(
  '/proto.SllService/CreateSll',
  grpc.web.MethodType.UNARY,
  proto.proto.Sll,
  proto.proto.CreateSllResponse,
  /**
   * @param {!proto.proto.Sll} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.CreateSllResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.proto.Sll,
 *   !proto.proto.CreateSllResponse>}
 */
const methodInfo_SllService_CreateSll = new grpc.web.AbstractClientBase.MethodInfo(
  proto.proto.CreateSllResponse,
  /**
   * @param {!proto.proto.Sll} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.CreateSllResponse.deserializeBinary
);


/**
 * @param {!proto.proto.Sll} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.proto.CreateSllResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.CreateSllResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.SllServiceClient.prototype.createSll =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.SllService/CreateSll',
      request,
      metadata || {},
      methodDescriptor_SllService_CreateSll,
      callback);
};


/**
 * @param {!proto.proto.Sll} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.CreateSllResponse>}
 *     Promise that resolves to the response
 */
proto.proto.SllServicePromiseClient.prototype.createSll =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/proto.SllService/CreateSll',
      request,
      metadata || {},
      methodDescriptor_SllService_CreateSll);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.proto.ListSllRequest,
 *   !proto.proto.ListSllResponse>}
 */
const methodDescriptor_SllService_ListSll = new grpc.web.MethodDescriptor(
  '/proto.SllService/ListSll',
  grpc.web.MethodType.UNARY,
  proto.proto.ListSllRequest,
  proto.proto.ListSllResponse,
  /**
   * @param {!proto.proto.ListSllRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.ListSllResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.proto.ListSllRequest,
 *   !proto.proto.ListSllResponse>}
 */
const methodInfo_SllService_ListSll = new grpc.web.AbstractClientBase.MethodInfo(
  proto.proto.ListSllResponse,
  /**
   * @param {!proto.proto.ListSllRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.ListSllResponse.deserializeBinary
);


/**
 * @param {!proto.proto.ListSllRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.proto.ListSllResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.ListSllResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.SllServiceClient.prototype.listSll =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.SllService/ListSll',
      request,
      metadata || {},
      methodDescriptor_SllService_ListSll,
      callback);
};


/**
 * @param {!proto.proto.ListSllRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.ListSllResponse>}
 *     Promise that resolves to the response
 */
proto.proto.SllServicePromiseClient.prototype.listSll =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/proto.SllService/ListSll',
      request,
      metadata || {},
      methodDescriptor_SllService_ListSll);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.proto.Sll,
 *   !proto.proto.UpdateSllResponse>}
 */
const methodDescriptor_SllService_UpdateSll = new grpc.web.MethodDescriptor(
  '/proto.SllService/UpdateSll',
  grpc.web.MethodType.UNARY,
  proto.proto.Sll,
  proto.proto.UpdateSllResponse,
  /**
   * @param {!proto.proto.Sll} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.UpdateSllResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.proto.Sll,
 *   !proto.proto.UpdateSllResponse>}
 */
const methodInfo_SllService_UpdateSll = new grpc.web.AbstractClientBase.MethodInfo(
  proto.proto.UpdateSllResponse,
  /**
   * @param {!proto.proto.Sll} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.UpdateSllResponse.deserializeBinary
);


/**
 * @param {!proto.proto.Sll} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.proto.UpdateSllResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.UpdateSllResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.SllServiceClient.prototype.updateSll =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.SllService/UpdateSll',
      request,
      metadata || {},
      methodDescriptor_SllService_UpdateSll,
      callback);
};


/**
 * @param {!proto.proto.Sll} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.UpdateSllResponse>}
 *     Promise that resolves to the response
 */
proto.proto.SllServicePromiseClient.prototype.updateSll =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/proto.SllService/UpdateSll',
      request,
      metadata || {},
      methodDescriptor_SllService_UpdateSll);
};


module.exports = proto.proto;

