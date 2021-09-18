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


var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')
const proto = {};
proto.proto = require('./ach_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.proto.ACHServiceClient =
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
proto.proto.ACHServicePromiseClient =
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
 *   !proto.proto.ACH,
 *   !proto.proto.CreateACHResponse>}
 */
const methodDescriptor_ACHService_CreateACH = new grpc.web.MethodDescriptor(
  '/proto.ACHService/CreateACH',
  grpc.web.MethodType.UNARY,
  proto.proto.ACH,
  proto.proto.CreateACHResponse,
  /**
   * @param {!proto.proto.ACH} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.CreateACHResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.proto.ACH,
 *   !proto.proto.CreateACHResponse>}
 */
const methodInfo_ACHService_CreateACH = new grpc.web.AbstractClientBase.MethodInfo(
  proto.proto.CreateACHResponse,
  /**
   * @param {!proto.proto.ACH} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.CreateACHResponse.deserializeBinary
);


/**
 * @param {!proto.proto.ACH} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.proto.CreateACHResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.CreateACHResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.ACHServiceClient.prototype.createACH =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.ACHService/CreateACH',
      request,
      metadata || {},
      methodDescriptor_ACHService_CreateACH,
      callback);
};


/**
 * @param {!proto.proto.ACH} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.CreateACHResponse>}
 *     A native promise that resolves to the response
 */
proto.proto.ACHServicePromiseClient.prototype.createACH =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/proto.ACHService/CreateACH',
      request,
      metadata || {},
      methodDescriptor_ACHService_CreateACH);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.proto.UpdateACHRequest,
 *   !proto.proto.UpdateACHResponse>}
 */
const methodDescriptor_ACHService_UpdateACH = new grpc.web.MethodDescriptor(
  '/proto.ACHService/UpdateACH',
  grpc.web.MethodType.UNARY,
  proto.proto.UpdateACHRequest,
  proto.proto.UpdateACHResponse,
  /**
   * @param {!proto.proto.UpdateACHRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.UpdateACHResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.proto.UpdateACHRequest,
 *   !proto.proto.UpdateACHResponse>}
 */
const methodInfo_ACHService_UpdateACH = new grpc.web.AbstractClientBase.MethodInfo(
  proto.proto.UpdateACHResponse,
  /**
   * @param {!proto.proto.UpdateACHRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.UpdateACHResponse.deserializeBinary
);


/**
 * @param {!proto.proto.UpdateACHRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.proto.UpdateACHResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.UpdateACHResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.ACHServiceClient.prototype.updateACH =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.ACHService/UpdateACH',
      request,
      metadata || {},
      methodDescriptor_ACHService_UpdateACH,
      callback);
};


/**
 * @param {!proto.proto.UpdateACHRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.UpdateACHResponse>}
 *     A native promise that resolves to the response
 */
proto.proto.ACHServicePromiseClient.prototype.updateACH =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/proto.ACHService/UpdateACH',
      request,
      metadata || {},
      methodDescriptor_ACHService_UpdateACH);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.proto.ReadACHRequest,
 *   !proto.proto.ReadACHResponse>}
 */
const methodDescriptor_ACHService_ReadACH = new grpc.web.MethodDescriptor(
  '/proto.ACHService/ReadACH',
  grpc.web.MethodType.UNARY,
  proto.proto.ReadACHRequest,
  proto.proto.ReadACHResponse,
  /**
   * @param {!proto.proto.ReadACHRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.ReadACHResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.proto.ReadACHRequest,
 *   !proto.proto.ReadACHResponse>}
 */
const methodInfo_ACHService_ReadACH = new grpc.web.AbstractClientBase.MethodInfo(
  proto.proto.ReadACHResponse,
  /**
   * @param {!proto.proto.ReadACHRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.ReadACHResponse.deserializeBinary
);


/**
 * @param {!proto.proto.ReadACHRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.proto.ReadACHResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.ReadACHResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.ACHServiceClient.prototype.readACH =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.ACHService/ReadACH',
      request,
      metadata || {},
      methodDescriptor_ACHService_ReadACH,
      callback);
};


/**
 * @param {!proto.proto.ReadACHRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.ReadACHResponse>}
 *     A native promise that resolves to the response
 */
proto.proto.ACHServicePromiseClient.prototype.readACH =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/proto.ACHService/ReadACH',
      request,
      metadata || {},
      methodDescriptor_ACHService_ReadACH);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.proto.ListACHRequest,
 *   !proto.proto.ListACHResponse>}
 */
const methodDescriptor_ACHService_ListACH = new grpc.web.MethodDescriptor(
  '/proto.ACHService/ListACH',
  grpc.web.MethodType.UNARY,
  proto.proto.ListACHRequest,
  proto.proto.ListACHResponse,
  /**
   * @param {!proto.proto.ListACHRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.ListACHResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.proto.ListACHRequest,
 *   !proto.proto.ListACHResponse>}
 */
const methodInfo_ACHService_ListACH = new grpc.web.AbstractClientBase.MethodInfo(
  proto.proto.ListACHResponse,
  /**
   * @param {!proto.proto.ListACHRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.ListACHResponse.deserializeBinary
);


/**
 * @param {!proto.proto.ListACHRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.proto.ListACHResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.ListACHResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.ACHServiceClient.prototype.listACH =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.ACHService/ListACH',
      request,
      metadata || {},
      methodDescriptor_ACHService_ListACH,
      callback);
};


/**
 * @param {!proto.proto.ListACHRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.ListACHResponse>}
 *     A native promise that resolves to the response
 */
proto.proto.ACHServicePromiseClient.prototype.listACH =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/proto.ACHService/ListACH',
      request,
      metadata || {},
      methodDescriptor_ACHService_ListACH);
};


module.exports = proto.proto;

