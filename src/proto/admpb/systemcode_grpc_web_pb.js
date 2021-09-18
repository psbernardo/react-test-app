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
proto.admpb = require('./systemcode_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.admpb.SystemCodeServiceClient =
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
proto.admpb.SystemCodeServicePromiseClient =
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
 *   !proto.admpb.SystemCode,
 *   !proto.admpb.CreateSystemCodeResponse>}
 */
const methodDescriptor_SystemCodeService_CreateSystemCode = new grpc.web.MethodDescriptor(
  '/admpb.SystemCodeService/CreateSystemCode',
  grpc.web.MethodType.UNARY,
  proto.admpb.SystemCode,
  proto.admpb.CreateSystemCodeResponse,
  /**
   * @param {!proto.admpb.SystemCode} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admpb.CreateSystemCodeResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.admpb.SystemCode,
 *   !proto.admpb.CreateSystemCodeResponse>}
 */
const methodInfo_SystemCodeService_CreateSystemCode = new grpc.web.AbstractClientBase.MethodInfo(
  proto.admpb.CreateSystemCodeResponse,
  /**
   * @param {!proto.admpb.SystemCode} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admpb.CreateSystemCodeResponse.deserializeBinary
);


/**
 * @param {!proto.admpb.SystemCode} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.admpb.CreateSystemCodeResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.admpb.CreateSystemCodeResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.admpb.SystemCodeServiceClient.prototype.createSystemCode =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/admpb.SystemCodeService/CreateSystemCode',
      request,
      metadata || {},
      methodDescriptor_SystemCodeService_CreateSystemCode,
      callback);
};


/**
 * @param {!proto.admpb.SystemCode} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.admpb.CreateSystemCodeResponse>}
 *     Promise that resolves to the response
 */
proto.admpb.SystemCodeServicePromiseClient.prototype.createSystemCode =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/admpb.SystemCodeService/CreateSystemCode',
      request,
      metadata || {},
      methodDescriptor_SystemCodeService_CreateSystemCode);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.admpb.SystemCode,
 *   !proto.admpb.UpdateSystemCodeResponse>}
 */
const methodDescriptor_SystemCodeService_UpdateSystemCode = new grpc.web.MethodDescriptor(
  '/admpb.SystemCodeService/UpdateSystemCode',
  grpc.web.MethodType.UNARY,
  proto.admpb.SystemCode,
  proto.admpb.UpdateSystemCodeResponse,
  /**
   * @param {!proto.admpb.SystemCode} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admpb.UpdateSystemCodeResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.admpb.SystemCode,
 *   !proto.admpb.UpdateSystemCodeResponse>}
 */
const methodInfo_SystemCodeService_UpdateSystemCode = new grpc.web.AbstractClientBase.MethodInfo(
  proto.admpb.UpdateSystemCodeResponse,
  /**
   * @param {!proto.admpb.SystemCode} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admpb.UpdateSystemCodeResponse.deserializeBinary
);


/**
 * @param {!proto.admpb.SystemCode} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.admpb.UpdateSystemCodeResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.admpb.UpdateSystemCodeResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.admpb.SystemCodeServiceClient.prototype.updateSystemCode =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/admpb.SystemCodeService/UpdateSystemCode',
      request,
      metadata || {},
      methodDescriptor_SystemCodeService_UpdateSystemCode,
      callback);
};


/**
 * @param {!proto.admpb.SystemCode} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.admpb.UpdateSystemCodeResponse>}
 *     Promise that resolves to the response
 */
proto.admpb.SystemCodeServicePromiseClient.prototype.updateSystemCode =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/admpb.SystemCodeService/UpdateSystemCode',
      request,
      metadata || {},
      methodDescriptor_SystemCodeService_UpdateSystemCode);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.admpb.SystemCode,
 *   !proto.admpb.ReadSystemCodeResponse>}
 */
const methodDescriptor_SystemCodeService_ReadSystemCode = new grpc.web.MethodDescriptor(
  '/admpb.SystemCodeService/ReadSystemCode',
  grpc.web.MethodType.UNARY,
  proto.admpb.SystemCode,
  proto.admpb.ReadSystemCodeResponse,
  /**
   * @param {!proto.admpb.SystemCode} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admpb.ReadSystemCodeResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.admpb.SystemCode,
 *   !proto.admpb.ReadSystemCodeResponse>}
 */
const methodInfo_SystemCodeService_ReadSystemCode = new grpc.web.AbstractClientBase.MethodInfo(
  proto.admpb.ReadSystemCodeResponse,
  /**
   * @param {!proto.admpb.SystemCode} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admpb.ReadSystemCodeResponse.deserializeBinary
);


/**
 * @param {!proto.admpb.SystemCode} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.admpb.ReadSystemCodeResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.admpb.ReadSystemCodeResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.admpb.SystemCodeServiceClient.prototype.readSystemCode =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/admpb.SystemCodeService/ReadSystemCode',
      request,
      metadata || {},
      methodDescriptor_SystemCodeService_ReadSystemCode,
      callback);
};


/**
 * @param {!proto.admpb.SystemCode} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.admpb.ReadSystemCodeResponse>}
 *     Promise that resolves to the response
 */
proto.admpb.SystemCodeServicePromiseClient.prototype.readSystemCode =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/admpb.SystemCodeService/ReadSystemCode',
      request,
      metadata || {},
      methodDescriptor_SystemCodeService_ReadSystemCode);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.admpb.DeleteSystemCodeRequest,
 *   !proto.admpb.DeleteSystemCodeResponse>}
 */
const methodDescriptor_SystemCodeService_DeleteSystemCode = new grpc.web.MethodDescriptor(
  '/admpb.SystemCodeService/DeleteSystemCode',
  grpc.web.MethodType.UNARY,
  proto.admpb.DeleteSystemCodeRequest,
  proto.admpb.DeleteSystemCodeResponse,
  /**
   * @param {!proto.admpb.DeleteSystemCodeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admpb.DeleteSystemCodeResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.admpb.DeleteSystemCodeRequest,
 *   !proto.admpb.DeleteSystemCodeResponse>}
 */
const methodInfo_SystemCodeService_DeleteSystemCode = new grpc.web.AbstractClientBase.MethodInfo(
  proto.admpb.DeleteSystemCodeResponse,
  /**
   * @param {!proto.admpb.DeleteSystemCodeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admpb.DeleteSystemCodeResponse.deserializeBinary
);


/**
 * @param {!proto.admpb.DeleteSystemCodeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.admpb.DeleteSystemCodeResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.admpb.DeleteSystemCodeResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.admpb.SystemCodeServiceClient.prototype.deleteSystemCode =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/admpb.SystemCodeService/DeleteSystemCode',
      request,
      metadata || {},
      methodDescriptor_SystemCodeService_DeleteSystemCode,
      callback);
};


/**
 * @param {!proto.admpb.DeleteSystemCodeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.admpb.DeleteSystemCodeResponse>}
 *     Promise that resolves to the response
 */
proto.admpb.SystemCodeServicePromiseClient.prototype.deleteSystemCode =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/admpb.SystemCodeService/DeleteSystemCode',
      request,
      metadata || {},
      methodDescriptor_SystemCodeService_DeleteSystemCode);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.admpb.SystemCode,
 *   !proto.admpb.ListSystemCodeResponse>}
 */
const methodDescriptor_SystemCodeService_ListSystemCode = new grpc.web.MethodDescriptor(
  '/admpb.SystemCodeService/ListSystemCode',
  grpc.web.MethodType.UNARY,
  proto.admpb.SystemCode,
  proto.admpb.ListSystemCodeResponse,
  /**
   * @param {!proto.admpb.SystemCode} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admpb.ListSystemCodeResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.admpb.SystemCode,
 *   !proto.admpb.ListSystemCodeResponse>}
 */
const methodInfo_SystemCodeService_ListSystemCode = new grpc.web.AbstractClientBase.MethodInfo(
  proto.admpb.ListSystemCodeResponse,
  /**
   * @param {!proto.admpb.SystemCode} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admpb.ListSystemCodeResponse.deserializeBinary
);


/**
 * @param {!proto.admpb.SystemCode} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.admpb.ListSystemCodeResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.admpb.ListSystemCodeResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.admpb.SystemCodeServiceClient.prototype.listSystemCode =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/admpb.SystemCodeService/ListSystemCode',
      request,
      metadata || {},
      methodDescriptor_SystemCodeService_ListSystemCode,
      callback);
};


/**
 * @param {!proto.admpb.SystemCode} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.admpb.ListSystemCodeResponse>}
 *     Promise that resolves to the response
 */
proto.admpb.SystemCodeServicePromiseClient.prototype.listSystemCode =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/admpb.SystemCodeService/ListSystemCode',
      request,
      metadata || {},
      methodDescriptor_SystemCodeService_ListSystemCode);
};


module.exports = proto.admpb;

