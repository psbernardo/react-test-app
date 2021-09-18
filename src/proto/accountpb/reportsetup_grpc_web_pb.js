/**
 * @fileoverview gRPC-Web generated client stub for accountpb
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.accountpb = require('./reportsetup_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.accountpb.ReportSetupServiceClient =
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
proto.accountpb.ReportSetupServicePromiseClient =
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
 *   !proto.accountpb.ReportSetup,
 *   !proto.accountpb.CreateReportSetupResponse>}
 */
const methodDescriptor_ReportSetupService_CreateReportSetup = new grpc.web.MethodDescriptor(
  '/accountpb.ReportSetupService/CreateReportSetup',
  grpc.web.MethodType.UNARY,
  proto.accountpb.ReportSetup,
  proto.accountpb.CreateReportSetupResponse,
  /**
   * @param {!proto.accountpb.ReportSetup} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.accountpb.CreateReportSetupResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.accountpb.ReportSetup,
 *   !proto.accountpb.CreateReportSetupResponse>}
 */
const methodInfo_ReportSetupService_CreateReportSetup = new grpc.web.AbstractClientBase.MethodInfo(
  proto.accountpb.CreateReportSetupResponse,
  /**
   * @param {!proto.accountpb.ReportSetup} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.accountpb.CreateReportSetupResponse.deserializeBinary
);


/**
 * @param {!proto.accountpb.ReportSetup} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.accountpb.CreateReportSetupResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.accountpb.CreateReportSetupResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.accountpb.ReportSetupServiceClient.prototype.createReportSetup =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/accountpb.ReportSetupService/CreateReportSetup',
      request,
      metadata || {},
      methodDescriptor_ReportSetupService_CreateReportSetup,
      callback);
};


/**
 * @param {!proto.accountpb.ReportSetup} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.accountpb.CreateReportSetupResponse>}
 *     Promise that resolves to the response
 */
proto.accountpb.ReportSetupServicePromiseClient.prototype.createReportSetup =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/accountpb.ReportSetupService/CreateReportSetup',
      request,
      metadata || {},
      methodDescriptor_ReportSetupService_CreateReportSetup);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.accountpb.ReportSetup,
 *   !proto.accountpb.UpdateReportSetupResponse>}
 */
const methodDescriptor_ReportSetupService_UpdateReportSetup = new grpc.web.MethodDescriptor(
  '/accountpb.ReportSetupService/UpdateReportSetup',
  grpc.web.MethodType.UNARY,
  proto.accountpb.ReportSetup,
  proto.accountpb.UpdateReportSetupResponse,
  /**
   * @param {!proto.accountpb.ReportSetup} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.accountpb.UpdateReportSetupResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.accountpb.ReportSetup,
 *   !proto.accountpb.UpdateReportSetupResponse>}
 */
const methodInfo_ReportSetupService_UpdateReportSetup = new grpc.web.AbstractClientBase.MethodInfo(
  proto.accountpb.UpdateReportSetupResponse,
  /**
   * @param {!proto.accountpb.ReportSetup} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.accountpb.UpdateReportSetupResponse.deserializeBinary
);


/**
 * @param {!proto.accountpb.ReportSetup} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.accountpb.UpdateReportSetupResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.accountpb.UpdateReportSetupResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.accountpb.ReportSetupServiceClient.prototype.updateReportSetup =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/accountpb.ReportSetupService/UpdateReportSetup',
      request,
      metadata || {},
      methodDescriptor_ReportSetupService_UpdateReportSetup,
      callback);
};


/**
 * @param {!proto.accountpb.ReportSetup} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.accountpb.UpdateReportSetupResponse>}
 *     Promise that resolves to the response
 */
proto.accountpb.ReportSetupServicePromiseClient.prototype.updateReportSetup =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/accountpb.ReportSetupService/UpdateReportSetup',
      request,
      metadata || {},
      methodDescriptor_ReportSetupService_UpdateReportSetup);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.accountpb.ReadReportSetupRequest,
 *   !proto.accountpb.ReadReportSetupResponse>}
 */
const methodDescriptor_ReportSetupService_ReadReportSetup = new grpc.web.MethodDescriptor(
  '/accountpb.ReportSetupService/ReadReportSetup',
  grpc.web.MethodType.UNARY,
  proto.accountpb.ReadReportSetupRequest,
  proto.accountpb.ReadReportSetupResponse,
  /**
   * @param {!proto.accountpb.ReadReportSetupRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.accountpb.ReadReportSetupResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.accountpb.ReadReportSetupRequest,
 *   !proto.accountpb.ReadReportSetupResponse>}
 */
const methodInfo_ReportSetupService_ReadReportSetup = new grpc.web.AbstractClientBase.MethodInfo(
  proto.accountpb.ReadReportSetupResponse,
  /**
   * @param {!proto.accountpb.ReadReportSetupRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.accountpb.ReadReportSetupResponse.deserializeBinary
);


/**
 * @param {!proto.accountpb.ReadReportSetupRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.accountpb.ReadReportSetupResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.accountpb.ReadReportSetupResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.accountpb.ReportSetupServiceClient.prototype.readReportSetup =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/accountpb.ReportSetupService/ReadReportSetup',
      request,
      metadata || {},
      methodDescriptor_ReportSetupService_ReadReportSetup,
      callback);
};


/**
 * @param {!proto.accountpb.ReadReportSetupRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.accountpb.ReadReportSetupResponse>}
 *     Promise that resolves to the response
 */
proto.accountpb.ReportSetupServicePromiseClient.prototype.readReportSetup =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/accountpb.ReportSetupService/ReadReportSetup',
      request,
      metadata || {},
      methodDescriptor_ReportSetupService_ReadReportSetup);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.accountpb.DeleteReportSetupRequest,
 *   !proto.accountpb.DeleteReportSetupResponse>}
 */
const methodDescriptor_ReportSetupService_DeleteReportSetup = new grpc.web.MethodDescriptor(
  '/accountpb.ReportSetupService/DeleteReportSetup',
  grpc.web.MethodType.UNARY,
  proto.accountpb.DeleteReportSetupRequest,
  proto.accountpb.DeleteReportSetupResponse,
  /**
   * @param {!proto.accountpb.DeleteReportSetupRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.accountpb.DeleteReportSetupResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.accountpb.DeleteReportSetupRequest,
 *   !proto.accountpb.DeleteReportSetupResponse>}
 */
const methodInfo_ReportSetupService_DeleteReportSetup = new grpc.web.AbstractClientBase.MethodInfo(
  proto.accountpb.DeleteReportSetupResponse,
  /**
   * @param {!proto.accountpb.DeleteReportSetupRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.accountpb.DeleteReportSetupResponse.deserializeBinary
);


/**
 * @param {!proto.accountpb.DeleteReportSetupRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.accountpb.DeleteReportSetupResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.accountpb.DeleteReportSetupResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.accountpb.ReportSetupServiceClient.prototype.deleteReportSetup =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/accountpb.ReportSetupService/DeleteReportSetup',
      request,
      metadata || {},
      methodDescriptor_ReportSetupService_DeleteReportSetup,
      callback);
};


/**
 * @param {!proto.accountpb.DeleteReportSetupRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.accountpb.DeleteReportSetupResponse>}
 *     Promise that resolves to the response
 */
proto.accountpb.ReportSetupServicePromiseClient.prototype.deleteReportSetup =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/accountpb.ReportSetupService/DeleteReportSetup',
      request,
      metadata || {},
      methodDescriptor_ReportSetupService_DeleteReportSetup);
};


module.exports = proto.accountpb;

