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
proto.proto = require('./etf_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.proto.EtfServiceClient =
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
proto.proto.EtfServicePromiseClient =
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
 *   !proto.proto.Etf,
 *   !proto.proto.CreateEtfResponse>}
 */
const methodDescriptor_EtfService_CreateEtf = new grpc.web.MethodDescriptor(
  '/proto.EtfService/CreateEtf',
  grpc.web.MethodType.UNARY,
  proto.proto.Etf,
  proto.proto.CreateEtfResponse,
  /**
   * @param {!proto.proto.Etf} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.CreateEtfResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.proto.Etf,
 *   !proto.proto.CreateEtfResponse>}
 */
const methodInfo_EtfService_CreateEtf = new grpc.web.AbstractClientBase.MethodInfo(
  proto.proto.CreateEtfResponse,
  /**
   * @param {!proto.proto.Etf} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.CreateEtfResponse.deserializeBinary
);


/**
 * @param {!proto.proto.Etf} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.proto.CreateEtfResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.CreateEtfResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.EtfServiceClient.prototype.createEtf =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.EtfService/CreateEtf',
      request,
      metadata || {},
      methodDescriptor_EtfService_CreateEtf,
      callback);
};


/**
 * @param {!proto.proto.Etf} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.CreateEtfResponse>}
 *     A native promise that resolves to the response
 */
proto.proto.EtfServicePromiseClient.prototype.createEtf =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/proto.EtfService/CreateEtf',
      request,
      metadata || {},
      methodDescriptor_EtfService_CreateEtf);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.proto.ListEtfRequest,
 *   !proto.proto.ListEtfResponse>}
 */
const methodDescriptor_EtfService_ListEtf = new grpc.web.MethodDescriptor(
  '/proto.EtfService/ListEtf',
  grpc.web.MethodType.UNARY,
  proto.proto.ListEtfRequest,
  proto.proto.ListEtfResponse,
  /**
   * @param {!proto.proto.ListEtfRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.ListEtfResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.proto.ListEtfRequest,
 *   !proto.proto.ListEtfResponse>}
 */
const methodInfo_EtfService_ListEtf = new grpc.web.AbstractClientBase.MethodInfo(
  proto.proto.ListEtfResponse,
  /**
   * @param {!proto.proto.ListEtfRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.ListEtfResponse.deserializeBinary
);


/**
 * @param {!proto.proto.ListEtfRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.proto.ListEtfResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.ListEtfResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.EtfServiceClient.prototype.listEtf =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.EtfService/ListEtf',
      request,
      metadata || {},
      methodDescriptor_EtfService_ListEtf,
      callback);
};


/**
 * @param {!proto.proto.ListEtfRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.ListEtfResponse>}
 *     A native promise that resolves to the response
 */
proto.proto.EtfServicePromiseClient.prototype.listEtf =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/proto.EtfService/ListEtf',
      request,
      metadata || {},
      methodDescriptor_EtfService_ListEtf);
};


module.exports = proto.proto;

