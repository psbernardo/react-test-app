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


var google_type_date_pb = require('../../google/type/date_pb.js')
const proto = {};
proto.admpb = require('./recurrence_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.admpb.RecurrenceServiceClient =
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
proto.admpb.RecurrenceServicePromiseClient =
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
 *   !proto.admpb.ListRecurrenceRequest,
 *   !proto.admpb.ListRecurrenceResponse>}
 */
const methodDescriptor_RecurrenceService_ListRecurrence = new grpc.web.MethodDescriptor(
  '/admpb.RecurrenceService/ListRecurrence',
  grpc.web.MethodType.UNARY,
  proto.admpb.ListRecurrenceRequest,
  proto.admpb.ListRecurrenceResponse,
  /**
   * @param {!proto.admpb.ListRecurrenceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admpb.ListRecurrenceResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.admpb.ListRecurrenceRequest,
 *   !proto.admpb.ListRecurrenceResponse>}
 */
const methodInfo_RecurrenceService_ListRecurrence = new grpc.web.AbstractClientBase.MethodInfo(
  proto.admpb.ListRecurrenceResponse,
  /**
   * @param {!proto.admpb.ListRecurrenceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admpb.ListRecurrenceResponse.deserializeBinary
);


/**
 * @param {!proto.admpb.ListRecurrenceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.admpb.ListRecurrenceResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.admpb.ListRecurrenceResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.admpb.RecurrenceServiceClient.prototype.listRecurrence =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/admpb.RecurrenceService/ListRecurrence',
      request,
      metadata || {},
      methodDescriptor_RecurrenceService_ListRecurrence,
      callback);
};


/**
 * @param {!proto.admpb.ListRecurrenceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.admpb.ListRecurrenceResponse>}
 *     Promise that resolves to the response
 */
proto.admpb.RecurrenceServicePromiseClient.prototype.listRecurrence =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/admpb.RecurrenceService/ListRecurrence',
      request,
      metadata || {},
      methodDescriptor_RecurrenceService_ListRecurrence);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.admpb.Recurrence,
 *   !proto.admpb.CreateRecurrenceResponse>}
 */
const methodDescriptor_RecurrenceService_CreateRecurrence = new grpc.web.MethodDescriptor(
  '/admpb.RecurrenceService/CreateRecurrence',
  grpc.web.MethodType.UNARY,
  proto.admpb.Recurrence,
  proto.admpb.CreateRecurrenceResponse,
  /**
   * @param {!proto.admpb.Recurrence} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admpb.CreateRecurrenceResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.admpb.Recurrence,
 *   !proto.admpb.CreateRecurrenceResponse>}
 */
const methodInfo_RecurrenceService_CreateRecurrence = new grpc.web.AbstractClientBase.MethodInfo(
  proto.admpb.CreateRecurrenceResponse,
  /**
   * @param {!proto.admpb.Recurrence} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admpb.CreateRecurrenceResponse.deserializeBinary
);


/**
 * @param {!proto.admpb.Recurrence} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.admpb.CreateRecurrenceResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.admpb.CreateRecurrenceResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.admpb.RecurrenceServiceClient.prototype.createRecurrence =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/admpb.RecurrenceService/CreateRecurrence',
      request,
      metadata || {},
      methodDescriptor_RecurrenceService_CreateRecurrence,
      callback);
};


/**
 * @param {!proto.admpb.Recurrence} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.admpb.CreateRecurrenceResponse>}
 *     Promise that resolves to the response
 */
proto.admpb.RecurrenceServicePromiseClient.prototype.createRecurrence =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/admpb.RecurrenceService/CreateRecurrence',
      request,
      metadata || {},
      methodDescriptor_RecurrenceService_CreateRecurrence);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.admpb.Recurrence,
 *   !proto.admpb.UpdateRecurrenceResponse>}
 */
const methodDescriptor_RecurrenceService_UpdateRecurrence = new grpc.web.MethodDescriptor(
  '/admpb.RecurrenceService/UpdateRecurrence',
  grpc.web.MethodType.UNARY,
  proto.admpb.Recurrence,
  proto.admpb.UpdateRecurrenceResponse,
  /**
   * @param {!proto.admpb.Recurrence} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admpb.UpdateRecurrenceResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.admpb.Recurrence,
 *   !proto.admpb.UpdateRecurrenceResponse>}
 */
const methodInfo_RecurrenceService_UpdateRecurrence = new grpc.web.AbstractClientBase.MethodInfo(
  proto.admpb.UpdateRecurrenceResponse,
  /**
   * @param {!proto.admpb.Recurrence} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admpb.UpdateRecurrenceResponse.deserializeBinary
);


/**
 * @param {!proto.admpb.Recurrence} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.admpb.UpdateRecurrenceResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.admpb.UpdateRecurrenceResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.admpb.RecurrenceServiceClient.prototype.updateRecurrence =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/admpb.RecurrenceService/UpdateRecurrence',
      request,
      metadata || {},
      methodDescriptor_RecurrenceService_UpdateRecurrence,
      callback);
};


/**
 * @param {!proto.admpb.Recurrence} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.admpb.UpdateRecurrenceResponse>}
 *     Promise that resolves to the response
 */
proto.admpb.RecurrenceServicePromiseClient.prototype.updateRecurrence =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/admpb.RecurrenceService/UpdateRecurrence',
      request,
      metadata || {},
      methodDescriptor_RecurrenceService_UpdateRecurrence);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.admpb.DeleteRecurrenceRequest,
 *   !proto.admpb.DeleteRecurrenceResponse>}
 */
const methodDescriptor_RecurrenceService_DeleteRecurrence = new grpc.web.MethodDescriptor(
  '/admpb.RecurrenceService/DeleteRecurrence',
  grpc.web.MethodType.UNARY,
  proto.admpb.DeleteRecurrenceRequest,
  proto.admpb.DeleteRecurrenceResponse,
  /**
   * @param {!proto.admpb.DeleteRecurrenceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admpb.DeleteRecurrenceResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.admpb.DeleteRecurrenceRequest,
 *   !proto.admpb.DeleteRecurrenceResponse>}
 */
const methodInfo_RecurrenceService_DeleteRecurrence = new grpc.web.AbstractClientBase.MethodInfo(
  proto.admpb.DeleteRecurrenceResponse,
  /**
   * @param {!proto.admpb.DeleteRecurrenceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admpb.DeleteRecurrenceResponse.deserializeBinary
);


/**
 * @param {!proto.admpb.DeleteRecurrenceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.admpb.DeleteRecurrenceResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.admpb.DeleteRecurrenceResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.admpb.RecurrenceServiceClient.prototype.deleteRecurrence =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/admpb.RecurrenceService/DeleteRecurrence',
      request,
      metadata || {},
      methodDescriptor_RecurrenceService_DeleteRecurrence,
      callback);
};


/**
 * @param {!proto.admpb.DeleteRecurrenceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.admpb.DeleteRecurrenceResponse>}
 *     Promise that resolves to the response
 */
proto.admpb.RecurrenceServicePromiseClient.prototype.deleteRecurrence =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/admpb.RecurrenceService/DeleteRecurrence',
      request,
      metadata || {},
      methodDescriptor_RecurrenceService_DeleteRecurrence);
};


module.exports = proto.admpb;

