/**
 * @fileoverview gRPC-Web generated client stub for commonpb
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!

/* eslint-disable */
// @ts-nocheck

const grpc = {};
grpc.web = require('grpc-web');

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
const proto = {};
proto.commonpb = require('./file_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.commonpb.FileServiceClient = function(hostname, credentials, options) {
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
proto.commonpb.FileServicePromiseClient = function(
  hostname,
  credentials,
  options
) {
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
 *   !proto.commonpb.AttachFileRequest,
 *   !proto.commonpb.AttachedFile>}
 */
const methodDescriptor_FileService_AttachFile = new grpc.web.MethodDescriptor(
  '/commonpb.FileService/AttachFile',
  grpc.web.MethodType.UNARY,
  proto.commonpb.AttachFileRequest,
  proto.commonpb.AttachedFile,
  /**
   * @param {!proto.commonpb.AttachFileRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.commonpb.AttachedFile.deserializeBinary
);

/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.commonpb.AttachFileRequest,
 *   !proto.commonpb.AttachedFile>}
 */
const methodInfo_FileService_AttachFile = new grpc.web.AbstractClientBase.MethodInfo(
  proto.commonpb.AttachedFile,
  /**
   * @param {!proto.commonpb.AttachFileRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.commonpb.AttachedFile.deserializeBinary
);

/**
 * @param {!proto.commonpb.AttachFileRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.commonpb.AttachedFile)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.commonpb.AttachedFile>|undefined}
 *     The XHR Node Readable Stream
 */
proto.commonpb.FileServiceClient.prototype.attachFile = function(
  request,
  metadata,
  callback
) {
  return this.client_.rpcCall(
    this.hostname_ + '/commonpb.FileService/AttachFile',
    request,
    metadata || {},
    methodDescriptor_FileService_AttachFile,
    callback
  );
};

/**
 * @param {!proto.commonpb.AttachFileRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.commonpb.AttachedFile>}
 *     A native promise that resolves to the response
 */
proto.commonpb.FileServicePromiseClient.prototype.attachFile = function(
  request,
  metadata
) {
  return this.client_.unaryCall(
    this.hostname_ + '/commonpb.FileService/AttachFile',
    request,
    metadata || {},
    methodDescriptor_FileService_AttachFile
  );
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.commonpb.ListFileRequest,
 *   !proto.commonpb.ListFileResponse>}
 */
const methodDescriptor_FileService_ListFile = new grpc.web.MethodDescriptor(
  '/commonpb.FileService/ListFile',
  grpc.web.MethodType.UNARY,
  proto.commonpb.ListFileRequest,
  proto.commonpb.ListFileResponse,
  /**
   * @param {!proto.commonpb.ListFileRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.commonpb.ListFileResponse.deserializeBinary
);

/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.commonpb.ListFileRequest,
 *   !proto.commonpb.ListFileResponse>}
 */
const methodInfo_FileService_ListFile = new grpc.web.AbstractClientBase.MethodInfo(
  proto.commonpb.ListFileResponse,
  /**
   * @param {!proto.commonpb.ListFileRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.commonpb.ListFileResponse.deserializeBinary
);

/**
 * @param {!proto.commonpb.ListFileRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.commonpb.ListFileResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.commonpb.ListFileResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.commonpb.FileServiceClient.prototype.listFile = function(
  request,
  metadata,
  callback
) {
  return this.client_.rpcCall(
    this.hostname_ + '/commonpb.FileService/ListFile',
    request,
    metadata || {},
    methodDescriptor_FileService_ListFile,
    callback
  );
};

/**
 * @param {!proto.commonpb.ListFileRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.commonpb.ListFileResponse>}
 *     A native promise that resolves to the response
 */
proto.commonpb.FileServicePromiseClient.prototype.listFile = function(
  request,
  metadata
) {
  return this.client_.unaryCall(
    this.hostname_ + '/commonpb.FileService/ListFile',
    request,
    metadata || {},
    methodDescriptor_FileService_ListFile
  );
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.commonpb.DeleteFileRequest,
 *   !proto.commonpb.DeleteFileResponse>}
 */
const methodDescriptor_FileService_DeleteFile = new grpc.web.MethodDescriptor(
  '/commonpb.FileService/DeleteFile',
  grpc.web.MethodType.UNARY,
  proto.commonpb.DeleteFileRequest,
  proto.commonpb.DeleteFileResponse,
  /**
   * @param {!proto.commonpb.DeleteFileRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.commonpb.DeleteFileResponse.deserializeBinary
);

/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.commonpb.DeleteFileRequest,
 *   !proto.commonpb.DeleteFileResponse>}
 */
const methodInfo_FileService_DeleteFile = new grpc.web.AbstractClientBase.MethodInfo(
  proto.commonpb.DeleteFileResponse,
  /**
   * @param {!proto.commonpb.DeleteFileRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.commonpb.DeleteFileResponse.deserializeBinary
);

/**
 * @param {!proto.commonpb.DeleteFileRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.commonpb.DeleteFileResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.commonpb.DeleteFileResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.commonpb.FileServiceClient.prototype.deleteFile = function(
  request,
  metadata,
  callback
) {
  return this.client_.rpcCall(
    this.hostname_ + '/commonpb.FileService/DeleteFile',
    request,
    metadata || {},
    methodDescriptor_FileService_DeleteFile,
    callback
  );
};

/**
 * @param {!proto.commonpb.DeleteFileRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.commonpb.DeleteFileResponse>}
 *     A native promise that resolves to the response
 */
proto.commonpb.FileServicePromiseClient.prototype.deleteFile = function(
  request,
  metadata
) {
  return this.client_.unaryCall(
    this.hostname_ + '/commonpb.FileService/DeleteFile',
    request,
    metadata || {},
    methodDescriptor_FileService_DeleteFile
  );
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.commonpb.DownloadFileRequest,
 *   !proto.commonpb.File>}
 */
const methodDescriptor_FileService_DownloadFile = new grpc.web.MethodDescriptor(
  '/commonpb.FileService/DownloadFile',
  grpc.web.MethodType.UNARY,
  proto.commonpb.DownloadFileRequest,
  proto.commonpb.File,
  /**
   * @param {!proto.commonpb.DownloadFileRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.commonpb.File.deserializeBinary
);

/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.commonpb.DownloadFileRequest,
 *   !proto.commonpb.File>}
 */
const methodInfo_FileService_DownloadFile = new grpc.web.AbstractClientBase.MethodInfo(
  proto.commonpb.File,
  /**
   * @param {!proto.commonpb.DownloadFileRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.commonpb.File.deserializeBinary
);

/**
 * @param {!proto.commonpb.DownloadFileRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.commonpb.File)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.commonpb.File>|undefined}
 *     The XHR Node Readable Stream
 */
proto.commonpb.FileServiceClient.prototype.downloadFile = function(
  request,
  metadata,
  callback
) {
  return this.client_.rpcCall(
    this.hostname_ + '/commonpb.FileService/DownloadFile',
    request,
    metadata || {},
    methodDescriptor_FileService_DownloadFile,
    callback
  );
};

/**
 * @param {!proto.commonpb.DownloadFileRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.commonpb.File>}
 *     A native promise that resolves to the response
 */
proto.commonpb.FileServicePromiseClient.prototype.downloadFile = function(
  request,
  metadata
) {
  return this.client_.unaryCall(
    this.hostname_ + '/commonpb.FileService/DownloadFile',
    request,
    metadata || {},
    methodDescriptor_FileService_DownloadFile
  );
};

module.exports = proto.commonpb;
