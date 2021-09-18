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

var proto_utilspb_pagination_pb = require('../../proto/utilspb/pagination_pb.js')
const proto = {};
proto.admpb = require('./credential_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.admpb.CredentialServiceClient =
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
proto.admpb.CredentialServicePromiseClient =
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
 *   !proto.admpb.Credential,
 *   !proto.admpb.CreateCredentialResponse>}
 */
const methodDescriptor_CredentialService_CreateCredential = new grpc.web.MethodDescriptor(
  '/admpb.CredentialService/CreateCredential',
  grpc.web.MethodType.UNARY,
  proto.admpb.Credential,
  proto.admpb.CreateCredentialResponse,
  /**
   * @param {!proto.admpb.Credential} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admpb.CreateCredentialResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.admpb.Credential,
 *   !proto.admpb.CreateCredentialResponse>}
 */
const methodInfo_CredentialService_CreateCredential = new grpc.web.AbstractClientBase.MethodInfo(
  proto.admpb.CreateCredentialResponse,
  /**
   * @param {!proto.admpb.Credential} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admpb.CreateCredentialResponse.deserializeBinary
);


/**
 * @param {!proto.admpb.Credential} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.admpb.CreateCredentialResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.admpb.CreateCredentialResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.admpb.CredentialServiceClient.prototype.createCredential =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/admpb.CredentialService/CreateCredential',
      request,
      metadata || {},
      methodDescriptor_CredentialService_CreateCredential,
      callback);
};


/**
 * @param {!proto.admpb.Credential} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.admpb.CreateCredentialResponse>}
 *     Promise that resolves to the response
 */
proto.admpb.CredentialServicePromiseClient.prototype.createCredential =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/admpb.CredentialService/CreateCredential',
      request,
      metadata || {},
      methodDescriptor_CredentialService_CreateCredential);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.admpb.Credential,
 *   !proto.admpb.UpdateCredentialResponse>}
 */
const methodDescriptor_CredentialService_UpdateCredential = new grpc.web.MethodDescriptor(
  '/admpb.CredentialService/UpdateCredential',
  grpc.web.MethodType.UNARY,
  proto.admpb.Credential,
  proto.admpb.UpdateCredentialResponse,
  /**
   * @param {!proto.admpb.Credential} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admpb.UpdateCredentialResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.admpb.Credential,
 *   !proto.admpb.UpdateCredentialResponse>}
 */
const methodInfo_CredentialService_UpdateCredential = new grpc.web.AbstractClientBase.MethodInfo(
  proto.admpb.UpdateCredentialResponse,
  /**
   * @param {!proto.admpb.Credential} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admpb.UpdateCredentialResponse.deserializeBinary
);


/**
 * @param {!proto.admpb.Credential} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.admpb.UpdateCredentialResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.admpb.UpdateCredentialResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.admpb.CredentialServiceClient.prototype.updateCredential =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/admpb.CredentialService/UpdateCredential',
      request,
      metadata || {},
      methodDescriptor_CredentialService_UpdateCredential,
      callback);
};


/**
 * @param {!proto.admpb.Credential} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.admpb.UpdateCredentialResponse>}
 *     Promise that resolves to the response
 */
proto.admpb.CredentialServicePromiseClient.prototype.updateCredential =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/admpb.CredentialService/UpdateCredential',
      request,
      metadata || {},
      methodDescriptor_CredentialService_UpdateCredential);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.admpb.DeleteCredentialRequest,
 *   !proto.admpb.DeleteCredentialResponse>}
 */
const methodDescriptor_CredentialService_DeleteCredential = new grpc.web.MethodDescriptor(
  '/admpb.CredentialService/DeleteCredential',
  grpc.web.MethodType.UNARY,
  proto.admpb.DeleteCredentialRequest,
  proto.admpb.DeleteCredentialResponse,
  /**
   * @param {!proto.admpb.DeleteCredentialRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admpb.DeleteCredentialResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.admpb.DeleteCredentialRequest,
 *   !proto.admpb.DeleteCredentialResponse>}
 */
const methodInfo_CredentialService_DeleteCredential = new grpc.web.AbstractClientBase.MethodInfo(
  proto.admpb.DeleteCredentialResponse,
  /**
   * @param {!proto.admpb.DeleteCredentialRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admpb.DeleteCredentialResponse.deserializeBinary
);


/**
 * @param {!proto.admpb.DeleteCredentialRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.admpb.DeleteCredentialResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.admpb.DeleteCredentialResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.admpb.CredentialServiceClient.prototype.deleteCredential =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/admpb.CredentialService/DeleteCredential',
      request,
      metadata || {},
      methodDescriptor_CredentialService_DeleteCredential,
      callback);
};


/**
 * @param {!proto.admpb.DeleteCredentialRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.admpb.DeleteCredentialResponse>}
 *     Promise that resolves to the response
 */
proto.admpb.CredentialServicePromiseClient.prototype.deleteCredential =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/admpb.CredentialService/DeleteCredential',
      request,
      metadata || {},
      methodDescriptor_CredentialService_DeleteCredential);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.admpb.ListCredentialRequest,
 *   !proto.admpb.ListCredentialResponse>}
 */
const methodDescriptor_CredentialService_ListCredential = new grpc.web.MethodDescriptor(
  '/admpb.CredentialService/ListCredential',
  grpc.web.MethodType.UNARY,
  proto.admpb.ListCredentialRequest,
  proto.admpb.ListCredentialResponse,
  /**
   * @param {!proto.admpb.ListCredentialRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admpb.ListCredentialResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.admpb.ListCredentialRequest,
 *   !proto.admpb.ListCredentialResponse>}
 */
const methodInfo_CredentialService_ListCredential = new grpc.web.AbstractClientBase.MethodInfo(
  proto.admpb.ListCredentialResponse,
  /**
   * @param {!proto.admpb.ListCredentialRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admpb.ListCredentialResponse.deserializeBinary
);


/**
 * @param {!proto.admpb.ListCredentialRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.admpb.ListCredentialResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.admpb.ListCredentialResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.admpb.CredentialServiceClient.prototype.listCredential =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/admpb.CredentialService/ListCredential',
      request,
      metadata || {},
      methodDescriptor_CredentialService_ListCredential,
      callback);
};


/**
 * @param {!proto.admpb.ListCredentialRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.admpb.ListCredentialResponse>}
 *     Promise that resolves to the response
 */
proto.admpb.CredentialServicePromiseClient.prototype.listCredential =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/admpb.CredentialService/ListCredential',
      request,
      metadata || {},
      methodDescriptor_CredentialService_ListCredential);
};


module.exports = proto.admpb;

