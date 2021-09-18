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


var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')
const proto = {};
proto.accountpb = require('./extendedsetup_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.accountpb.ExtendedSetupServiceClient =
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
proto.accountpb.ExtendedSetupServicePromiseClient =
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
 *   !proto.accountpb.ExtendedSetup,
 *   !proto.accountpb.UpdateExtendedSetupResponse>}
 */
const methodDescriptor_ExtendedSetupService_UpdateExtendedSetup = new grpc.web.MethodDescriptor(
  '/accountpb.ExtendedSetupService/UpdateExtendedSetup',
  grpc.web.MethodType.UNARY,
  proto.accountpb.ExtendedSetup,
  proto.accountpb.UpdateExtendedSetupResponse,
  /**
   * @param {!proto.accountpb.ExtendedSetup} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.accountpb.UpdateExtendedSetupResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.accountpb.ExtendedSetup,
 *   !proto.accountpb.UpdateExtendedSetupResponse>}
 */
const methodInfo_ExtendedSetupService_UpdateExtendedSetup = new grpc.web.AbstractClientBase.MethodInfo(
  proto.accountpb.UpdateExtendedSetupResponse,
  /**
   * @param {!proto.accountpb.ExtendedSetup} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.accountpb.UpdateExtendedSetupResponse.deserializeBinary
);


/**
 * @param {!proto.accountpb.ExtendedSetup} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.accountpb.UpdateExtendedSetupResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.accountpb.UpdateExtendedSetupResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.accountpb.ExtendedSetupServiceClient.prototype.updateExtendedSetup =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/accountpb.ExtendedSetupService/UpdateExtendedSetup',
      request,
      metadata || {},
      methodDescriptor_ExtendedSetupService_UpdateExtendedSetup,
      callback);
};


/**
 * @param {!proto.accountpb.ExtendedSetup} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.accountpb.UpdateExtendedSetupResponse>}
 *     A native promise that resolves to the response
 */
proto.accountpb.ExtendedSetupServicePromiseClient.prototype.updateExtendedSetup =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/accountpb.ExtendedSetupService/UpdateExtendedSetup',
      request,
      metadata || {},
      methodDescriptor_ExtendedSetupService_UpdateExtendedSetup);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.accountpb.ReadExtendedSetupRequest,
 *   !proto.accountpb.ReadExtendedSetupResponse>}
 */
const methodDescriptor_ExtendedSetupService_ReadExtendedSetup = new grpc.web.MethodDescriptor(
  '/accountpb.ExtendedSetupService/ReadExtendedSetup',
  grpc.web.MethodType.UNARY,
  proto.accountpb.ReadExtendedSetupRequest,
  proto.accountpb.ReadExtendedSetupResponse,
  /**
   * @param {!proto.accountpb.ReadExtendedSetupRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.accountpb.ReadExtendedSetupResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.accountpb.ReadExtendedSetupRequest,
 *   !proto.accountpb.ReadExtendedSetupResponse>}
 */
const methodInfo_ExtendedSetupService_ReadExtendedSetup = new grpc.web.AbstractClientBase.MethodInfo(
  proto.accountpb.ReadExtendedSetupResponse,
  /**
   * @param {!proto.accountpb.ReadExtendedSetupRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.accountpb.ReadExtendedSetupResponse.deserializeBinary
);


/**
 * @param {!proto.accountpb.ReadExtendedSetupRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.accountpb.ReadExtendedSetupResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.accountpb.ReadExtendedSetupResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.accountpb.ExtendedSetupServiceClient.prototype.readExtendedSetup =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/accountpb.ExtendedSetupService/ReadExtendedSetup',
      request,
      metadata || {},
      methodDescriptor_ExtendedSetupService_ReadExtendedSetup,
      callback);
};


/**
 * @param {!proto.accountpb.ReadExtendedSetupRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.accountpb.ReadExtendedSetupResponse>}
 *     A native promise that resolves to the response
 */
proto.accountpb.ExtendedSetupServicePromiseClient.prototype.readExtendedSetup =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/accountpb.ExtendedSetupService/ReadExtendedSetup',
      request,
      metadata || {},
      methodDescriptor_ExtendedSetupService_ReadExtendedSetup);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.accountpb.ListExtendedSetupAuditRequest,
 *   !proto.accountpb.ListExtendedSetupAuditResponse>}
 */
const methodDescriptor_ExtendedSetupService_ListExtendedSetupAudit = new grpc.web.MethodDescriptor(
  '/accountpb.ExtendedSetupService/ListExtendedSetupAudit',
  grpc.web.MethodType.UNARY,
  proto.accountpb.ListExtendedSetupAuditRequest,
  proto.accountpb.ListExtendedSetupAuditResponse,
  /**
   * @param {!proto.accountpb.ListExtendedSetupAuditRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.accountpb.ListExtendedSetupAuditResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.accountpb.ListExtendedSetupAuditRequest,
 *   !proto.accountpb.ListExtendedSetupAuditResponse>}
 */
const methodInfo_ExtendedSetupService_ListExtendedSetupAudit = new grpc.web.AbstractClientBase.MethodInfo(
  proto.accountpb.ListExtendedSetupAuditResponse,
  /**
   * @param {!proto.accountpb.ListExtendedSetupAuditRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.accountpb.ListExtendedSetupAuditResponse.deserializeBinary
);


/**
 * @param {!proto.accountpb.ListExtendedSetupAuditRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.accountpb.ListExtendedSetupAuditResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.accountpb.ListExtendedSetupAuditResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.accountpb.ExtendedSetupServiceClient.prototype.listExtendedSetupAudit =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/accountpb.ExtendedSetupService/ListExtendedSetupAudit',
      request,
      metadata || {},
      methodDescriptor_ExtendedSetupService_ListExtendedSetupAudit,
      callback);
};


/**
 * @param {!proto.accountpb.ListExtendedSetupAuditRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.accountpb.ListExtendedSetupAuditResponse>}
 *     A native promise that resolves to the response
 */
proto.accountpb.ExtendedSetupServicePromiseClient.prototype.listExtendedSetupAudit =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/accountpb.ExtendedSetupService/ListExtendedSetupAudit',
      request,
      metadata || {},
      methodDescriptor_ExtendedSetupService_ListExtendedSetupAudit);
};


module.exports = proto.accountpb;

