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
proto.admpb = require('./filepath_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.admpb.FilePathServiceClient =
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
proto.admpb.FilePathServicePromiseClient =
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
 *   !proto.admpb.FilePath,
 *   !proto.admpb.CreateFilePathResponse>}
 */
const methodDescriptor_FilePathService_CreateFilePath = new grpc.web.MethodDescriptor(
  '/admpb.FilePathService/CreateFilePath',
  grpc.web.MethodType.UNARY,
  proto.admpb.FilePath,
  proto.admpb.CreateFilePathResponse,
  /**
   * @param {!proto.admpb.FilePath} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admpb.CreateFilePathResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.admpb.FilePath,
 *   !proto.admpb.CreateFilePathResponse>}
 */
const methodInfo_FilePathService_CreateFilePath = new grpc.web.AbstractClientBase.MethodInfo(
  proto.admpb.CreateFilePathResponse,
  /**
   * @param {!proto.admpb.FilePath} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admpb.CreateFilePathResponse.deserializeBinary
);


/**
 * @param {!proto.admpb.FilePath} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.admpb.CreateFilePathResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.admpb.CreateFilePathResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.admpb.FilePathServiceClient.prototype.createFilePath =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/admpb.FilePathService/CreateFilePath',
      request,
      metadata || {},
      methodDescriptor_FilePathService_CreateFilePath,
      callback);
};


/**
 * @param {!proto.admpb.FilePath} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.admpb.CreateFilePathResponse>}
 *     Promise that resolves to the response
 */
proto.admpb.FilePathServicePromiseClient.prototype.createFilePath =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/admpb.FilePathService/CreateFilePath',
      request,
      metadata || {},
      methodDescriptor_FilePathService_CreateFilePath);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.admpb.FilePath,
 *   !proto.admpb.UpdateFilePathResponse>}
 */
const methodDescriptor_FilePathService_UpdateFilePath = new grpc.web.MethodDescriptor(
  '/admpb.FilePathService/UpdateFilePath',
  grpc.web.MethodType.UNARY,
  proto.admpb.FilePath,
  proto.admpb.UpdateFilePathResponse,
  /**
   * @param {!proto.admpb.FilePath} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admpb.UpdateFilePathResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.admpb.FilePath,
 *   !proto.admpb.UpdateFilePathResponse>}
 */
const methodInfo_FilePathService_UpdateFilePath = new grpc.web.AbstractClientBase.MethodInfo(
  proto.admpb.UpdateFilePathResponse,
  /**
   * @param {!proto.admpb.FilePath} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admpb.UpdateFilePathResponse.deserializeBinary
);


/**
 * @param {!proto.admpb.FilePath} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.admpb.UpdateFilePathResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.admpb.UpdateFilePathResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.admpb.FilePathServiceClient.prototype.updateFilePath =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/admpb.FilePathService/UpdateFilePath',
      request,
      metadata || {},
      methodDescriptor_FilePathService_UpdateFilePath,
      callback);
};


/**
 * @param {!proto.admpb.FilePath} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.admpb.UpdateFilePathResponse>}
 *     Promise that resolves to the response
 */
proto.admpb.FilePathServicePromiseClient.prototype.updateFilePath =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/admpb.FilePathService/UpdateFilePath',
      request,
      metadata || {},
      methodDescriptor_FilePathService_UpdateFilePath);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.admpb.DeleteFilePathRequest,
 *   !proto.admpb.DeleteFilePathResponse>}
 */
const methodDescriptor_FilePathService_DeleteFilePath = new grpc.web.MethodDescriptor(
  '/admpb.FilePathService/DeleteFilePath',
  grpc.web.MethodType.UNARY,
  proto.admpb.DeleteFilePathRequest,
  proto.admpb.DeleteFilePathResponse,
  /**
   * @param {!proto.admpb.DeleteFilePathRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admpb.DeleteFilePathResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.admpb.DeleteFilePathRequest,
 *   !proto.admpb.DeleteFilePathResponse>}
 */
const methodInfo_FilePathService_DeleteFilePath = new grpc.web.AbstractClientBase.MethodInfo(
  proto.admpb.DeleteFilePathResponse,
  /**
   * @param {!proto.admpb.DeleteFilePathRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admpb.DeleteFilePathResponse.deserializeBinary
);


/**
 * @param {!proto.admpb.DeleteFilePathRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.admpb.DeleteFilePathResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.admpb.DeleteFilePathResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.admpb.FilePathServiceClient.prototype.deleteFilePath =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/admpb.FilePathService/DeleteFilePath',
      request,
      metadata || {},
      methodDescriptor_FilePathService_DeleteFilePath,
      callback);
};


/**
 * @param {!proto.admpb.DeleteFilePathRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.admpb.DeleteFilePathResponse>}
 *     Promise that resolves to the response
 */
proto.admpb.FilePathServicePromiseClient.prototype.deleteFilePath =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/admpb.FilePathService/DeleteFilePath',
      request,
      metadata || {},
      methodDescriptor_FilePathService_DeleteFilePath);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.admpb.FilePath,
 *   !proto.admpb.ListFilePathResponse>}
 */
const methodDescriptor_FilePathService_ListFilePath = new grpc.web.MethodDescriptor(
  '/admpb.FilePathService/ListFilePath',
  grpc.web.MethodType.UNARY,
  proto.admpb.FilePath,
  proto.admpb.ListFilePathResponse,
  /**
   * @param {!proto.admpb.FilePath} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admpb.ListFilePathResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.admpb.FilePath,
 *   !proto.admpb.ListFilePathResponse>}
 */
const methodInfo_FilePathService_ListFilePath = new grpc.web.AbstractClientBase.MethodInfo(
  proto.admpb.ListFilePathResponse,
  /**
   * @param {!proto.admpb.FilePath} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admpb.ListFilePathResponse.deserializeBinary
);


/**
 * @param {!proto.admpb.FilePath} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.admpb.ListFilePathResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.admpb.ListFilePathResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.admpb.FilePathServiceClient.prototype.listFilePath =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/admpb.FilePathService/ListFilePath',
      request,
      metadata || {},
      methodDescriptor_FilePathService_ListFilePath,
      callback);
};


/**
 * @param {!proto.admpb.FilePath} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.admpb.ListFilePathResponse>}
 *     Promise that resolves to the response
 */
proto.admpb.FilePathServicePromiseClient.prototype.listFilePath =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/admpb.FilePathService/ListFilePath',
      request,
      metadata || {},
      methodDescriptor_FilePathService_ListFilePath);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.admpb.LazyLoadRequest,
 *   !proto.admpb.LazyFilePathResponse>}
 */
const methodDescriptor_FilePathService_LazyLoadType = new grpc.web.MethodDescriptor(
  '/admpb.FilePathService/LazyLoadType',
  grpc.web.MethodType.UNARY,
  proto.admpb.LazyLoadRequest,
  proto.admpb.LazyFilePathResponse,
  /**
   * @param {!proto.admpb.LazyLoadRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admpb.LazyFilePathResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.admpb.LazyLoadRequest,
 *   !proto.admpb.LazyFilePathResponse>}
 */
const methodInfo_FilePathService_LazyLoadType = new grpc.web.AbstractClientBase.MethodInfo(
  proto.admpb.LazyFilePathResponse,
  /**
   * @param {!proto.admpb.LazyLoadRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admpb.LazyFilePathResponse.deserializeBinary
);


/**
 * @param {!proto.admpb.LazyLoadRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.admpb.LazyFilePathResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.admpb.LazyFilePathResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.admpb.FilePathServiceClient.prototype.lazyLoadType =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/admpb.FilePathService/LazyLoadType',
      request,
      metadata || {},
      methodDescriptor_FilePathService_LazyLoadType,
      callback);
};


/**
 * @param {!proto.admpb.LazyLoadRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.admpb.LazyFilePathResponse>}
 *     Promise that resolves to the response
 */
proto.admpb.FilePathServicePromiseClient.prototype.lazyLoadType =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/admpb.FilePathService/LazyLoadType',
      request,
      metadata || {},
      methodDescriptor_FilePathService_LazyLoadType);
};


module.exports = proto.admpb;

