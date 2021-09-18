/**
 * @fileoverview gRPC-Web generated client stub for acatspb
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
proto.acatspb = require('./partial_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.acatspb.PartialServiceClient =
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
proto.acatspb.PartialServicePromiseClient =
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
 *   !proto.acatspb.ListPartialRequest,
 *   !proto.acatspb.ListPartialResponse>}
 */
const methodDescriptor_PartialService_ListPartial = new grpc.web.MethodDescriptor(
  '/acatspb.PartialService/ListPartial',
  grpc.web.MethodType.UNARY,
  proto.acatspb.ListPartialRequest,
  proto.acatspb.ListPartialResponse,
  /**
   * @param {!proto.acatspb.ListPartialRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.acatspb.ListPartialResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.acatspb.ListPartialRequest,
 *   !proto.acatspb.ListPartialResponse>}
 */
const methodInfo_PartialService_ListPartial = new grpc.web.AbstractClientBase.MethodInfo(
  proto.acatspb.ListPartialResponse,
  /**
   * @param {!proto.acatspb.ListPartialRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.acatspb.ListPartialResponse.deserializeBinary
);


/**
 * @param {!proto.acatspb.ListPartialRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.acatspb.ListPartialResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.acatspb.ListPartialResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.acatspb.PartialServiceClient.prototype.listPartial =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/acatspb.PartialService/ListPartial',
      request,
      metadata || {},
      methodDescriptor_PartialService_ListPartial,
      callback);
};


/**
 * @param {!proto.acatspb.ListPartialRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.acatspb.ListPartialResponse>}
 *     Promise that resolves to the response
 */
proto.acatspb.PartialServicePromiseClient.prototype.listPartial =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/acatspb.PartialService/ListPartial',
      request,
      metadata || {},
      methodDescriptor_PartialService_ListPartial);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.acatspb.DownloadPartialRequest,
 *   !proto.acatspb.File>}
 */
const methodDescriptor_PartialService_DownloadPartial = new grpc.web.MethodDescriptor(
  '/acatspb.PartialService/DownloadPartial',
  grpc.web.MethodType.UNARY,
  proto.acatspb.DownloadPartialRequest,
  proto.acatspb.File,
  /**
   * @param {!proto.acatspb.DownloadPartialRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.acatspb.File.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.acatspb.DownloadPartialRequest,
 *   !proto.acatspb.File>}
 */
const methodInfo_PartialService_DownloadPartial = new grpc.web.AbstractClientBase.MethodInfo(
  proto.acatspb.File,
  /**
   * @param {!proto.acatspb.DownloadPartialRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.acatspb.File.deserializeBinary
);


/**
 * @param {!proto.acatspb.DownloadPartialRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.acatspb.File)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.acatspb.File>|undefined}
 *     The XHR Node Readable Stream
 */
proto.acatspb.PartialServiceClient.prototype.downloadPartial =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/acatspb.PartialService/DownloadPartial',
      request,
      metadata || {},
      methodDescriptor_PartialService_DownloadPartial,
      callback);
};


/**
 * @param {!proto.acatspb.DownloadPartialRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.acatspb.File>}
 *     Promise that resolves to the response
 */
proto.acatspb.PartialServicePromiseClient.prototype.downloadPartial =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/acatspb.PartialService/DownloadPartial',
      request,
      metadata || {},
      methodDescriptor_PartialService_DownloadPartial);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.acatspb.TransferPartialRequest,
 *   !proto.acatspb.TransferPartialResponse>}
 */
const methodDescriptor_PartialService_TransferPartial = new grpc.web.MethodDescriptor(
  '/acatspb.PartialService/TransferPartial',
  grpc.web.MethodType.UNARY,
  proto.acatspb.TransferPartialRequest,
  proto.acatspb.TransferPartialResponse,
  /**
   * @param {!proto.acatspb.TransferPartialRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.acatspb.TransferPartialResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.acatspb.TransferPartialRequest,
 *   !proto.acatspb.TransferPartialResponse>}
 */
const methodInfo_PartialService_TransferPartial = new grpc.web.AbstractClientBase.MethodInfo(
  proto.acatspb.TransferPartialResponse,
  /**
   * @param {!proto.acatspb.TransferPartialRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.acatspb.TransferPartialResponse.deserializeBinary
);


/**
 * @param {!proto.acatspb.TransferPartialRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.acatspb.TransferPartialResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.acatspb.TransferPartialResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.acatspb.PartialServiceClient.prototype.transferPartial =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/acatspb.PartialService/TransferPartial',
      request,
      metadata || {},
      methodDescriptor_PartialService_TransferPartial,
      callback);
};


/**
 * @param {!proto.acatspb.TransferPartialRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.acatspb.TransferPartialResponse>}
 *     Promise that resolves to the response
 */
proto.acatspb.PartialServicePromiseClient.prototype.transferPartial =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/acatspb.PartialService/TransferPartial',
      request,
      metadata || {},
      methodDescriptor_PartialService_TransferPartial);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.acatspb.Partial,
 *   !proto.acatspb.EditPartialResponse>}
 */
const methodDescriptor_PartialService_EditPartial = new grpc.web.MethodDescriptor(
  '/acatspb.PartialService/EditPartial',
  grpc.web.MethodType.UNARY,
  proto.acatspb.Partial,
  proto.acatspb.EditPartialResponse,
  /**
   * @param {!proto.acatspb.Partial} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.acatspb.EditPartialResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.acatspb.Partial,
 *   !proto.acatspb.EditPartialResponse>}
 */
const methodInfo_PartialService_EditPartial = new grpc.web.AbstractClientBase.MethodInfo(
  proto.acatspb.EditPartialResponse,
  /**
   * @param {!proto.acatspb.Partial} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.acatspb.EditPartialResponse.deserializeBinary
);


/**
 * @param {!proto.acatspb.Partial} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.acatspb.EditPartialResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.acatspb.EditPartialResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.acatspb.PartialServiceClient.prototype.editPartial =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/acatspb.PartialService/EditPartial',
      request,
      metadata || {},
      methodDescriptor_PartialService_EditPartial,
      callback);
};


/**
 * @param {!proto.acatspb.Partial} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.acatspb.EditPartialResponse>}
 *     Promise that resolves to the response
 */
proto.acatspb.PartialServicePromiseClient.prototype.editPartial =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/acatspb.PartialService/EditPartial',
      request,
      metadata || {},
      methodDescriptor_PartialService_EditPartial);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.acatspb.ImportRequest,
 *   !proto.acatspb.ImportResponse>}
 */
const methodDescriptor_PartialService_ImportAccountSuspense = new grpc.web.MethodDescriptor(
  '/acatspb.PartialService/ImportAccountSuspense',
  grpc.web.MethodType.UNARY,
  proto.acatspb.ImportRequest,
  proto.acatspb.ImportResponse,
  /**
   * @param {!proto.acatspb.ImportRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.acatspb.ImportResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.acatspb.ImportRequest,
 *   !proto.acatspb.ImportResponse>}
 */
const methodInfo_PartialService_ImportAccountSuspense = new grpc.web.AbstractClientBase.MethodInfo(
  proto.acatspb.ImportResponse,
  /**
   * @param {!proto.acatspb.ImportRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.acatspb.ImportResponse.deserializeBinary
);


/**
 * @param {!proto.acatspb.ImportRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.acatspb.ImportResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.acatspb.ImportResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.acatspb.PartialServiceClient.prototype.importAccountSuspense =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/acatspb.PartialService/ImportAccountSuspense',
      request,
      metadata || {},
      methodDescriptor_PartialService_ImportAccountSuspense,
      callback);
};


/**
 * @param {!proto.acatspb.ImportRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.acatspb.ImportResponse>}
 *     Promise that resolves to the response
 */
proto.acatspb.PartialServicePromiseClient.prototype.importAccountSuspense =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/acatspb.PartialService/ImportAccountSuspense',
      request,
      metadata || {},
      methodDescriptor_PartialService_ImportAccountSuspense);
};


module.exports = proto.acatspb;

