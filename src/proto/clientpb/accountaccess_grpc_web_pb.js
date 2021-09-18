/**
 * @fileoverview gRPC-Web generated client stub for clientpb
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var proto_utilspb_pagination_pb = require('../../proto/utilspb/pagination_pb.js')

var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')
const proto = {};
proto.clientpb = require('./accountaccess_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.clientpb.AccountAccessServiceClient =
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
proto.clientpb.AccountAccessServicePromiseClient =
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
 *   !proto.clientpb.AccountAccess,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_AccountAccessService_CreateAccountAccess = new grpc.web.MethodDescriptor(
  '/clientpb.AccountAccessService/CreateAccountAccess',
  grpc.web.MethodType.UNARY,
  proto.clientpb.AccountAccess,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.clientpb.AccountAccess} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.clientpb.AccountAccess,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_AccountAccessService_CreateAccountAccess = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.clientpb.AccountAccess} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.clientpb.AccountAccess} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clientpb.AccountAccessServiceClient.prototype.createAccountAccess =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clientpb.AccountAccessService/CreateAccountAccess',
      request,
      metadata || {},
      methodDescriptor_AccountAccessService_CreateAccountAccess,
      callback);
};


/**
 * @param {!proto.clientpb.AccountAccess} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     A native promise that resolves to the response
 */
proto.clientpb.AccountAccessServicePromiseClient.prototype.createAccountAccess =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clientpb.AccountAccessService/CreateAccountAccess',
      request,
      metadata || {},
      methodDescriptor_AccountAccessService_CreateAccountAccess);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clientpb.DeleteAccountAccessRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_AccountAccessService_DeleteAccountAccess = new grpc.web.MethodDescriptor(
  '/clientpb.AccountAccessService/DeleteAccountAccess',
  grpc.web.MethodType.UNARY,
  proto.clientpb.DeleteAccountAccessRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.clientpb.DeleteAccountAccessRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.clientpb.DeleteAccountAccessRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_AccountAccessService_DeleteAccountAccess = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.clientpb.DeleteAccountAccessRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.clientpb.DeleteAccountAccessRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clientpb.AccountAccessServiceClient.prototype.deleteAccountAccess =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clientpb.AccountAccessService/DeleteAccountAccess',
      request,
      metadata || {},
      methodDescriptor_AccountAccessService_DeleteAccountAccess,
      callback);
};


/**
 * @param {!proto.clientpb.DeleteAccountAccessRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     A native promise that resolves to the response
 */
proto.clientpb.AccountAccessServicePromiseClient.prototype.deleteAccountAccess =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clientpb.AccountAccessService/DeleteAccountAccess',
      request,
      metadata || {},
      methodDescriptor_AccountAccessService_DeleteAccountAccess);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clientpb.ListAccountAccessRequest,
 *   !proto.clientpb.ListAccountAccessResponse>}
 */
const methodDescriptor_AccountAccessService_ListAccountAccess = new grpc.web.MethodDescriptor(
  '/clientpb.AccountAccessService/ListAccountAccess',
  grpc.web.MethodType.UNARY,
  proto.clientpb.ListAccountAccessRequest,
  proto.clientpb.ListAccountAccessResponse,
  /**
   * @param {!proto.clientpb.ListAccountAccessRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clientpb.ListAccountAccessResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.clientpb.ListAccountAccessRequest,
 *   !proto.clientpb.ListAccountAccessResponse>}
 */
const methodInfo_AccountAccessService_ListAccountAccess = new grpc.web.AbstractClientBase.MethodInfo(
  proto.clientpb.ListAccountAccessResponse,
  /**
   * @param {!proto.clientpb.ListAccountAccessRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clientpb.ListAccountAccessResponse.deserializeBinary
);


/**
 * @param {!proto.clientpb.ListAccountAccessRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.clientpb.ListAccountAccessResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clientpb.ListAccountAccessResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clientpb.AccountAccessServiceClient.prototype.listAccountAccess =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clientpb.AccountAccessService/ListAccountAccess',
      request,
      metadata || {},
      methodDescriptor_AccountAccessService_ListAccountAccess,
      callback);
};


/**
 * @param {!proto.clientpb.ListAccountAccessRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clientpb.ListAccountAccessResponse>}
 *     A native promise that resolves to the response
 */
proto.clientpb.AccountAccessServicePromiseClient.prototype.listAccountAccess =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clientpb.AccountAccessService/ListAccountAccess',
      request,
      metadata || {},
      methodDescriptor_AccountAccessService_ListAccountAccess);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clientpb.ListAccountAccessorRequest,
 *   !proto.clientpb.ListAccountAccessorResponse>}
 */
const methodDescriptor_AccountAccessService_ListAccountAccessor = new grpc.web.MethodDescriptor(
  '/clientpb.AccountAccessService/ListAccountAccessor',
  grpc.web.MethodType.UNARY,
  proto.clientpb.ListAccountAccessorRequest,
  proto.clientpb.ListAccountAccessorResponse,
  /**
   * @param {!proto.clientpb.ListAccountAccessorRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clientpb.ListAccountAccessorResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.clientpb.ListAccountAccessorRequest,
 *   !proto.clientpb.ListAccountAccessorResponse>}
 */
const methodInfo_AccountAccessService_ListAccountAccessor = new grpc.web.AbstractClientBase.MethodInfo(
  proto.clientpb.ListAccountAccessorResponse,
  /**
   * @param {!proto.clientpb.ListAccountAccessorRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clientpb.ListAccountAccessorResponse.deserializeBinary
);


/**
 * @param {!proto.clientpb.ListAccountAccessorRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.clientpb.ListAccountAccessorResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clientpb.ListAccountAccessorResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clientpb.AccountAccessServiceClient.prototype.listAccountAccessor =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clientpb.AccountAccessService/ListAccountAccessor',
      request,
      metadata || {},
      methodDescriptor_AccountAccessService_ListAccountAccessor,
      callback);
};


/**
 * @param {!proto.clientpb.ListAccountAccessorRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clientpb.ListAccountAccessorResponse>}
 *     A native promise that resolves to the response
 */
proto.clientpb.AccountAccessServicePromiseClient.prototype.listAccountAccessor =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clientpb.AccountAccessService/ListAccountAccessor',
      request,
      metadata || {},
      methodDescriptor_AccountAccessService_ListAccountAccessor);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clientpb.ListAccountAccessorRequest,
 *   !proto.clientpb.ListAccountAccessorResponse>}
 */
const methodDescriptor_AccountAccessService_ListAccountAccessorOnCreate = new grpc.web.MethodDescriptor(
  '/clientpb.AccountAccessService/ListAccountAccessorOnCreate',
  grpc.web.MethodType.UNARY,
  proto.clientpb.ListAccountAccessorRequest,
  proto.clientpb.ListAccountAccessorResponse,
  /**
   * @param {!proto.clientpb.ListAccountAccessorRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clientpb.ListAccountAccessorResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.clientpb.ListAccountAccessorRequest,
 *   !proto.clientpb.ListAccountAccessorResponse>}
 */
const methodInfo_AccountAccessService_ListAccountAccessorOnCreate = new grpc.web.AbstractClientBase.MethodInfo(
  proto.clientpb.ListAccountAccessorResponse,
  /**
   * @param {!proto.clientpb.ListAccountAccessorRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clientpb.ListAccountAccessorResponse.deserializeBinary
);


/**
 * @param {!proto.clientpb.ListAccountAccessorRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.clientpb.ListAccountAccessorResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clientpb.ListAccountAccessorResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clientpb.AccountAccessServiceClient.prototype.listAccountAccessorOnCreate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clientpb.AccountAccessService/ListAccountAccessorOnCreate',
      request,
      metadata || {},
      methodDescriptor_AccountAccessService_ListAccountAccessorOnCreate,
      callback);
};


/**
 * @param {!proto.clientpb.ListAccountAccessorRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clientpb.ListAccountAccessorResponse>}
 *     A native promise that resolves to the response
 */
proto.clientpb.AccountAccessServicePromiseClient.prototype.listAccountAccessorOnCreate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clientpb.AccountAccessService/ListAccountAccessorOnCreate',
      request,
      metadata || {},
      methodDescriptor_AccountAccessService_ListAccountAccessorOnCreate);
};


module.exports = proto.clientpb;

