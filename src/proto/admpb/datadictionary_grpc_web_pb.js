/**
 * @fileoverview gRPC-Web generated client stub for admpb
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.admpb = require('./datadictionary_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.admpb.DataDictionaryServiceClient =
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
proto.admpb.DataDictionaryServicePromiseClient =
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
 *   !proto.admpb.ListDataDictionaryRequest,
 *   !proto.admpb.ListDataDictionaryResponse>}
 */
const methodDescriptor_DataDictionaryService_ListDataDictionary = new grpc.web.MethodDescriptor(
  '/admpb.DataDictionaryService/ListDataDictionary',
  grpc.web.MethodType.UNARY,
  proto.admpb.ListDataDictionaryRequest,
  proto.admpb.ListDataDictionaryResponse,
  /**
   * @param {!proto.admpb.ListDataDictionaryRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admpb.ListDataDictionaryResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.admpb.ListDataDictionaryRequest,
 *   !proto.admpb.ListDataDictionaryResponse>}
 */
const methodInfo_DataDictionaryService_ListDataDictionary = new grpc.web.AbstractClientBase.MethodInfo(
  proto.admpb.ListDataDictionaryResponse,
  /**
   * @param {!proto.admpb.ListDataDictionaryRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admpb.ListDataDictionaryResponse.deserializeBinary
);


/**
 * @param {!proto.admpb.ListDataDictionaryRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.admpb.ListDataDictionaryResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.admpb.ListDataDictionaryResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.admpb.DataDictionaryServiceClient.prototype.listDataDictionary =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/admpb.DataDictionaryService/ListDataDictionary',
      request,
      metadata || {},
      methodDescriptor_DataDictionaryService_ListDataDictionary,
      callback);
};


/**
 * @param {!proto.admpb.ListDataDictionaryRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.admpb.ListDataDictionaryResponse>}
 *     Promise that resolves to the response
 */
proto.admpb.DataDictionaryServicePromiseClient.prototype.listDataDictionary =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/admpb.DataDictionaryService/ListDataDictionary',
      request,
      metadata || {},
      methodDescriptor_DataDictionaryService_ListDataDictionary);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.admpb.UpdateDataDictionaryRequest,
 *   !proto.admpb.UpdateDataDictionaryResponse>}
 */
const methodDescriptor_DataDictionaryService_UpdateDataDictionary = new grpc.web.MethodDescriptor(
  '/admpb.DataDictionaryService/UpdateDataDictionary',
  grpc.web.MethodType.UNARY,
  proto.admpb.UpdateDataDictionaryRequest,
  proto.admpb.UpdateDataDictionaryResponse,
  /**
   * @param {!proto.admpb.UpdateDataDictionaryRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admpb.UpdateDataDictionaryResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.admpb.UpdateDataDictionaryRequest,
 *   !proto.admpb.UpdateDataDictionaryResponse>}
 */
const methodInfo_DataDictionaryService_UpdateDataDictionary = new grpc.web.AbstractClientBase.MethodInfo(
  proto.admpb.UpdateDataDictionaryResponse,
  /**
   * @param {!proto.admpb.UpdateDataDictionaryRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admpb.UpdateDataDictionaryResponse.deserializeBinary
);


/**
 * @param {!proto.admpb.UpdateDataDictionaryRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.admpb.UpdateDataDictionaryResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.admpb.UpdateDataDictionaryResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.admpb.DataDictionaryServiceClient.prototype.updateDataDictionary =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/admpb.DataDictionaryService/UpdateDataDictionary',
      request,
      metadata || {},
      methodDescriptor_DataDictionaryService_UpdateDataDictionary,
      callback);
};


/**
 * @param {!proto.admpb.UpdateDataDictionaryRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.admpb.UpdateDataDictionaryResponse>}
 *     Promise that resolves to the response
 */
proto.admpb.DataDictionaryServicePromiseClient.prototype.updateDataDictionary =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/admpb.DataDictionaryService/UpdateDataDictionary',
      request,
      metadata || {},
      methodDescriptor_DataDictionaryService_UpdateDataDictionary);
};


module.exports = proto.admpb;

