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
proto.admpb = require('./systemnumber_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.admpb.SystemNumberServiceClient =
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
proto.admpb.SystemNumberServicePromiseClient =
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
 *   !proto.admpb.SystemNumber,
 *   !proto.admpb.CreateSystemNumberResponse>}
 */
const methodDescriptor_SystemNumberService_CreateSystemNumber = new grpc.web.MethodDescriptor(
  '/admpb.SystemNumberService/CreateSystemNumber',
  grpc.web.MethodType.UNARY,
  proto.admpb.SystemNumber,
  proto.admpb.CreateSystemNumberResponse,
  /**
   * @param {!proto.admpb.SystemNumber} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admpb.CreateSystemNumberResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.admpb.SystemNumber,
 *   !proto.admpb.CreateSystemNumberResponse>}
 */
const methodInfo_SystemNumberService_CreateSystemNumber = new grpc.web.AbstractClientBase.MethodInfo(
  proto.admpb.CreateSystemNumberResponse,
  /**
   * @param {!proto.admpb.SystemNumber} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admpb.CreateSystemNumberResponse.deserializeBinary
);


/**
 * @param {!proto.admpb.SystemNumber} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.admpb.CreateSystemNumberResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.admpb.CreateSystemNumberResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.admpb.SystemNumberServiceClient.prototype.createSystemNumber =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/admpb.SystemNumberService/CreateSystemNumber',
      request,
      metadata || {},
      methodDescriptor_SystemNumberService_CreateSystemNumber,
      callback);
};


/**
 * @param {!proto.admpb.SystemNumber} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.admpb.CreateSystemNumberResponse>}
 *     Promise that resolves to the response
 */
proto.admpb.SystemNumberServicePromiseClient.prototype.createSystemNumber =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/admpb.SystemNumberService/CreateSystemNumber',
      request,
      metadata || {},
      methodDescriptor_SystemNumberService_CreateSystemNumber);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.admpb.SystemNumber,
 *   !proto.admpb.UpdateSystemNumberResponse>}
 */
const methodDescriptor_SystemNumberService_UpdateSystemNumber = new grpc.web.MethodDescriptor(
  '/admpb.SystemNumberService/UpdateSystemNumber',
  grpc.web.MethodType.UNARY,
  proto.admpb.SystemNumber,
  proto.admpb.UpdateSystemNumberResponse,
  /**
   * @param {!proto.admpb.SystemNumber} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admpb.UpdateSystemNumberResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.admpb.SystemNumber,
 *   !proto.admpb.UpdateSystemNumberResponse>}
 */
const methodInfo_SystemNumberService_UpdateSystemNumber = new grpc.web.AbstractClientBase.MethodInfo(
  proto.admpb.UpdateSystemNumberResponse,
  /**
   * @param {!proto.admpb.SystemNumber} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admpb.UpdateSystemNumberResponse.deserializeBinary
);


/**
 * @param {!proto.admpb.SystemNumber} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.admpb.UpdateSystemNumberResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.admpb.UpdateSystemNumberResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.admpb.SystemNumberServiceClient.prototype.updateSystemNumber =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/admpb.SystemNumberService/UpdateSystemNumber',
      request,
      metadata || {},
      methodDescriptor_SystemNumberService_UpdateSystemNumber,
      callback);
};


/**
 * @param {!proto.admpb.SystemNumber} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.admpb.UpdateSystemNumberResponse>}
 *     Promise that resolves to the response
 */
proto.admpb.SystemNumberServicePromiseClient.prototype.updateSystemNumber =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/admpb.SystemNumberService/UpdateSystemNumber',
      request,
      metadata || {},
      methodDescriptor_SystemNumberService_UpdateSystemNumber);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.admpb.ReadSystemNumberRequest,
 *   !proto.admpb.ReadSystemNumberResponse>}
 */
const methodDescriptor_SystemNumberService_ReadSystemNumber = new grpc.web.MethodDescriptor(
  '/admpb.SystemNumberService/ReadSystemNumber',
  grpc.web.MethodType.UNARY,
  proto.admpb.ReadSystemNumberRequest,
  proto.admpb.ReadSystemNumberResponse,
  /**
   * @param {!proto.admpb.ReadSystemNumberRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admpb.ReadSystemNumberResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.admpb.ReadSystemNumberRequest,
 *   !proto.admpb.ReadSystemNumberResponse>}
 */
const methodInfo_SystemNumberService_ReadSystemNumber = new grpc.web.AbstractClientBase.MethodInfo(
  proto.admpb.ReadSystemNumberResponse,
  /**
   * @param {!proto.admpb.ReadSystemNumberRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admpb.ReadSystemNumberResponse.deserializeBinary
);


/**
 * @param {!proto.admpb.ReadSystemNumberRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.admpb.ReadSystemNumberResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.admpb.ReadSystemNumberResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.admpb.SystemNumberServiceClient.prototype.readSystemNumber =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/admpb.SystemNumberService/ReadSystemNumber',
      request,
      metadata || {},
      methodDescriptor_SystemNumberService_ReadSystemNumber,
      callback);
};


/**
 * @param {!proto.admpb.ReadSystemNumberRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.admpb.ReadSystemNumberResponse>}
 *     Promise that resolves to the response
 */
proto.admpb.SystemNumberServicePromiseClient.prototype.readSystemNumber =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/admpb.SystemNumberService/ReadSystemNumber',
      request,
      metadata || {},
      methodDescriptor_SystemNumberService_ReadSystemNumber);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.admpb.SystemNumber,
 *   !proto.admpb.ListSystemNumberResponse>}
 */
const methodDescriptor_SystemNumberService_ListSystemNumber = new grpc.web.MethodDescriptor(
  '/admpb.SystemNumberService/ListSystemNumber',
  grpc.web.MethodType.UNARY,
  proto.admpb.SystemNumber,
  proto.admpb.ListSystemNumberResponse,
  /**
   * @param {!proto.admpb.SystemNumber} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admpb.ListSystemNumberResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.admpb.SystemNumber,
 *   !proto.admpb.ListSystemNumberResponse>}
 */
const methodInfo_SystemNumberService_ListSystemNumber = new grpc.web.AbstractClientBase.MethodInfo(
  proto.admpb.ListSystemNumberResponse,
  /**
   * @param {!proto.admpb.SystemNumber} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admpb.ListSystemNumberResponse.deserializeBinary
);


/**
 * @param {!proto.admpb.SystemNumber} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.admpb.ListSystemNumberResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.admpb.ListSystemNumberResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.admpb.SystemNumberServiceClient.prototype.listSystemNumber =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/admpb.SystemNumberService/ListSystemNumber',
      request,
      metadata || {},
      methodDescriptor_SystemNumberService_ListSystemNumber,
      callback);
};


/**
 * @param {!proto.admpb.SystemNumber} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.admpb.ListSystemNumberResponse>}
 *     Promise that resolves to the response
 */
proto.admpb.SystemNumberServicePromiseClient.prototype.listSystemNumber =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/admpb.SystemNumberService/ListSystemNumber',
      request,
      metadata || {},
      methodDescriptor_SystemNumberService_ListSystemNumber);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.admpb.DeleteSystemNumberRequest,
 *   !proto.admpb.DeleteSystemNumberResponse>}
 */
const methodDescriptor_SystemNumberService_DeleteSystemNumber = new grpc.web.MethodDescriptor(
  '/admpb.SystemNumberService/DeleteSystemNumber',
  grpc.web.MethodType.UNARY,
  proto.admpb.DeleteSystemNumberRequest,
  proto.admpb.DeleteSystemNumberResponse,
  /**
   * @param {!proto.admpb.DeleteSystemNumberRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admpb.DeleteSystemNumberResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.admpb.DeleteSystemNumberRequest,
 *   !proto.admpb.DeleteSystemNumberResponse>}
 */
const methodInfo_SystemNumberService_DeleteSystemNumber = new grpc.web.AbstractClientBase.MethodInfo(
  proto.admpb.DeleteSystemNumberResponse,
  /**
   * @param {!proto.admpb.DeleteSystemNumberRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admpb.DeleteSystemNumberResponse.deserializeBinary
);


/**
 * @param {!proto.admpb.DeleteSystemNumberRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.admpb.DeleteSystemNumberResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.admpb.DeleteSystemNumberResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.admpb.SystemNumberServiceClient.prototype.deleteSystemNumber =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/admpb.SystemNumberService/DeleteSystemNumber',
      request,
      metadata || {},
      methodDescriptor_SystemNumberService_DeleteSystemNumber,
      callback);
};


/**
 * @param {!proto.admpb.DeleteSystemNumberRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.admpb.DeleteSystemNumberResponse>}
 *     Promise that resolves to the response
 */
proto.admpb.SystemNumberServicePromiseClient.prototype.deleteSystemNumber =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/admpb.SystemNumberService/DeleteSystemNumber',
      request,
      metadata || {},
      methodDescriptor_SystemNumberService_DeleteSystemNumber);
};


module.exports = proto.admpb;

