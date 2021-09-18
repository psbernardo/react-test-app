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
proto.admpb = require('./tablesettings_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.admpb.TableSettingsServiceClient =
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
proto.admpb.TableSettingsServicePromiseClient =
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
 *   !proto.admpb.TableSettings,
 *   !proto.admpb.CreateTableSettingsResponse>}
 */
const methodDescriptor_TableSettingsService_CreateTableSettings = new grpc.web.MethodDescriptor(
  '/admpb.TableSettingsService/CreateTableSettings',
  grpc.web.MethodType.UNARY,
  proto.admpb.TableSettings,
  proto.admpb.CreateTableSettingsResponse,
  /**
   * @param {!proto.admpb.TableSettings} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admpb.CreateTableSettingsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.admpb.TableSettings,
 *   !proto.admpb.CreateTableSettingsResponse>}
 */
const methodInfo_TableSettingsService_CreateTableSettings = new grpc.web.AbstractClientBase.MethodInfo(
  proto.admpb.CreateTableSettingsResponse,
  /**
   * @param {!proto.admpb.TableSettings} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admpb.CreateTableSettingsResponse.deserializeBinary
);


/**
 * @param {!proto.admpb.TableSettings} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.admpb.CreateTableSettingsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.admpb.CreateTableSettingsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.admpb.TableSettingsServiceClient.prototype.createTableSettings =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/admpb.TableSettingsService/CreateTableSettings',
      request,
      metadata || {},
      methodDescriptor_TableSettingsService_CreateTableSettings,
      callback);
};


/**
 * @param {!proto.admpb.TableSettings} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.admpb.CreateTableSettingsResponse>}
 *     A native promise that resolves to the response
 */
proto.admpb.TableSettingsServicePromiseClient.prototype.createTableSettings =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/admpb.TableSettingsService/CreateTableSettings',
      request,
      metadata || {},
      methodDescriptor_TableSettingsService_CreateTableSettings);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.admpb.TableSettings,
 *   !proto.admpb.UpdateTableSettingsResponse>}
 */
const methodDescriptor_TableSettingsService_UpdateTableSettings = new grpc.web.MethodDescriptor(
  '/admpb.TableSettingsService/UpdateTableSettings',
  grpc.web.MethodType.UNARY,
  proto.admpb.TableSettings,
  proto.admpb.UpdateTableSettingsResponse,
  /**
   * @param {!proto.admpb.TableSettings} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admpb.UpdateTableSettingsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.admpb.TableSettings,
 *   !proto.admpb.UpdateTableSettingsResponse>}
 */
const methodInfo_TableSettingsService_UpdateTableSettings = new grpc.web.AbstractClientBase.MethodInfo(
  proto.admpb.UpdateTableSettingsResponse,
  /**
   * @param {!proto.admpb.TableSettings} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admpb.UpdateTableSettingsResponse.deserializeBinary
);


/**
 * @param {!proto.admpb.TableSettings} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.admpb.UpdateTableSettingsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.admpb.UpdateTableSettingsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.admpb.TableSettingsServiceClient.prototype.updateTableSettings =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/admpb.TableSettingsService/UpdateTableSettings',
      request,
      metadata || {},
      methodDescriptor_TableSettingsService_UpdateTableSettings,
      callback);
};


/**
 * @param {!proto.admpb.TableSettings} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.admpb.UpdateTableSettingsResponse>}
 *     A native promise that resolves to the response
 */
proto.admpb.TableSettingsServicePromiseClient.prototype.updateTableSettings =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/admpb.TableSettingsService/UpdateTableSettings',
      request,
      metadata || {},
      methodDescriptor_TableSettingsService_UpdateTableSettings);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.admpb.TableSettings,
 *   !proto.admpb.ReadTableSettingsResponse>}
 */
const methodDescriptor_TableSettingsService_ReadTableSettings = new grpc.web.MethodDescriptor(
  '/admpb.TableSettingsService/ReadTableSettings',
  grpc.web.MethodType.UNARY,
  proto.admpb.TableSettings,
  proto.admpb.ReadTableSettingsResponse,
  /**
   * @param {!proto.admpb.TableSettings} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admpb.ReadTableSettingsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.admpb.TableSettings,
 *   !proto.admpb.ReadTableSettingsResponse>}
 */
const methodInfo_TableSettingsService_ReadTableSettings = new grpc.web.AbstractClientBase.MethodInfo(
  proto.admpb.ReadTableSettingsResponse,
  /**
   * @param {!proto.admpb.TableSettings} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admpb.ReadTableSettingsResponse.deserializeBinary
);


/**
 * @param {!proto.admpb.TableSettings} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.admpb.ReadTableSettingsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.admpb.ReadTableSettingsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.admpb.TableSettingsServiceClient.prototype.readTableSettings =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/admpb.TableSettingsService/ReadTableSettings',
      request,
      metadata || {},
      methodDescriptor_TableSettingsService_ReadTableSettings,
      callback);
};


/**
 * @param {!proto.admpb.TableSettings} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.admpb.ReadTableSettingsResponse>}
 *     A native promise that resolves to the response
 */
proto.admpb.TableSettingsServicePromiseClient.prototype.readTableSettings =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/admpb.TableSettingsService/ReadTableSettings',
      request,
      metadata || {},
      methodDescriptor_TableSettingsService_ReadTableSettings);
};


module.exports = proto.admpb;

