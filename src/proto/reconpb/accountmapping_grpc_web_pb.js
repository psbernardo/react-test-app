/**
 * @fileoverview gRPC-Web generated client stub for reconpb
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!

/* eslint-disable */
// @ts-nocheck

const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.reconpb = require('./accountmapping_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.reconpb.AccountMappingServiceClient = function(
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
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.reconpb.AccountMappingServicePromiseClient = function(
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
 *   !proto.reconpb.CreateAccountMappingRequest,
 *   !proto.reconpb.CreateAccountMappingResponse>}
 */
const methodDescriptor_AccountMappingService_CreateAccountMapping = new grpc.web.MethodDescriptor(
  '/reconpb.AccountMappingService/CreateAccountMapping',
  grpc.web.MethodType.UNARY,
  proto.reconpb.CreateAccountMappingRequest,
  proto.reconpb.CreateAccountMappingResponse,
  /**
   * @param {!proto.reconpb.CreateAccountMappingRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.reconpb.CreateAccountMappingResponse.deserializeBinary
);

/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.reconpb.CreateAccountMappingRequest,
 *   !proto.reconpb.CreateAccountMappingResponse>}
 */
const methodInfo_AccountMappingService_CreateAccountMapping = new grpc.web.AbstractClientBase.MethodInfo(
  proto.reconpb.CreateAccountMappingResponse,
  /**
   * @param {!proto.reconpb.CreateAccountMappingRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.reconpb.CreateAccountMappingResponse.deserializeBinary
);

/**
 * @param {!proto.reconpb.CreateAccountMappingRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.reconpb.CreateAccountMappingResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.reconpb.CreateAccountMappingResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.reconpb.AccountMappingServiceClient.prototype.createAccountMapping = function(
  request,
  metadata,
  callback
) {
  return this.client_.rpcCall(
    this.hostname_ + '/reconpb.AccountMappingService/CreateAccountMapping',
    request,
    metadata || {},
    methodDescriptor_AccountMappingService_CreateAccountMapping,
    callback
  );
};

/**
 * @param {!proto.reconpb.CreateAccountMappingRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.reconpb.CreateAccountMappingResponse>}
 *     A native promise that resolves to the response
 */
proto.reconpb.AccountMappingServicePromiseClient.prototype.createAccountMapping = function(
  request,
  metadata
) {
  return this.client_.unaryCall(
    this.hostname_ + '/reconpb.AccountMappingService/CreateAccountMapping',
    request,
    metadata || {},
    methodDescriptor_AccountMappingService_CreateAccountMapping
  );
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.reconpb.UpdateAccountMappingRequest,
 *   !proto.reconpb.UpdateAccountMappingResponse>}
 */
const methodDescriptor_AccountMappingService_UpdateAccountMapping = new grpc.web.MethodDescriptor(
  '/reconpb.AccountMappingService/UpdateAccountMapping',
  grpc.web.MethodType.UNARY,
  proto.reconpb.UpdateAccountMappingRequest,
  proto.reconpb.UpdateAccountMappingResponse,
  /**
   * @param {!proto.reconpb.UpdateAccountMappingRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.reconpb.UpdateAccountMappingResponse.deserializeBinary
);

/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.reconpb.UpdateAccountMappingRequest,
 *   !proto.reconpb.UpdateAccountMappingResponse>}
 */
const methodInfo_AccountMappingService_UpdateAccountMapping = new grpc.web.AbstractClientBase.MethodInfo(
  proto.reconpb.UpdateAccountMappingResponse,
  /**
   * @param {!proto.reconpb.UpdateAccountMappingRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.reconpb.UpdateAccountMappingResponse.deserializeBinary
);

/**
 * @param {!proto.reconpb.UpdateAccountMappingRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.reconpb.UpdateAccountMappingResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.reconpb.UpdateAccountMappingResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.reconpb.AccountMappingServiceClient.prototype.updateAccountMapping = function(
  request,
  metadata,
  callback
) {
  return this.client_.rpcCall(
    this.hostname_ + '/reconpb.AccountMappingService/UpdateAccountMapping',
    request,
    metadata || {},
    methodDescriptor_AccountMappingService_UpdateAccountMapping,
    callback
  );
};

/**
 * @param {!proto.reconpb.UpdateAccountMappingRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.reconpb.UpdateAccountMappingResponse>}
 *     A native promise that resolves to the response
 */
proto.reconpb.AccountMappingServicePromiseClient.prototype.updateAccountMapping = function(
  request,
  metadata
) {
  return this.client_.unaryCall(
    this.hostname_ + '/reconpb.AccountMappingService/UpdateAccountMapping',
    request,
    metadata || {},
    methodDescriptor_AccountMappingService_UpdateAccountMapping
  );
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.reconpb.ReadAccountMappingRequest,
 *   !proto.reconpb.ReadAccountMappingResponse>}
 */
const methodDescriptor_AccountMappingService_ReadAccountMapping = new grpc.web.MethodDescriptor(
  '/reconpb.AccountMappingService/ReadAccountMapping',
  grpc.web.MethodType.UNARY,
  proto.reconpb.ReadAccountMappingRequest,
  proto.reconpb.ReadAccountMappingResponse,
  /**
   * @param {!proto.reconpb.ReadAccountMappingRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.reconpb.ReadAccountMappingResponse.deserializeBinary
);

/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.reconpb.ReadAccountMappingRequest,
 *   !proto.reconpb.ReadAccountMappingResponse>}
 */
const methodInfo_AccountMappingService_ReadAccountMapping = new grpc.web.AbstractClientBase.MethodInfo(
  proto.reconpb.ReadAccountMappingResponse,
  /**
   * @param {!proto.reconpb.ReadAccountMappingRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.reconpb.ReadAccountMappingResponse.deserializeBinary
);

/**
 * @param {!proto.reconpb.ReadAccountMappingRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.reconpb.ReadAccountMappingResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.reconpb.ReadAccountMappingResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.reconpb.AccountMappingServiceClient.prototype.readAccountMapping = function(
  request,
  metadata,
  callback
) {
  return this.client_.rpcCall(
    this.hostname_ + '/reconpb.AccountMappingService/ReadAccountMapping',
    request,
    metadata || {},
    methodDescriptor_AccountMappingService_ReadAccountMapping,
    callback
  );
};

/**
 * @param {!proto.reconpb.ReadAccountMappingRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.reconpb.ReadAccountMappingResponse>}
 *     A native promise that resolves to the response
 */
proto.reconpb.AccountMappingServicePromiseClient.prototype.readAccountMapping = function(
  request,
  metadata
) {
  return this.client_.unaryCall(
    this.hostname_ + '/reconpb.AccountMappingService/ReadAccountMapping',
    request,
    metadata || {},
    methodDescriptor_AccountMappingService_ReadAccountMapping
  );
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.reconpb.DeleteAccountMappingRequest,
 *   !proto.reconpb.DeleteAccountMappingResponse>}
 */
const methodDescriptor_AccountMappingService_DeleteAccountMapping = new grpc.web.MethodDescriptor(
  '/reconpb.AccountMappingService/DeleteAccountMapping',
  grpc.web.MethodType.UNARY,
  proto.reconpb.DeleteAccountMappingRequest,
  proto.reconpb.DeleteAccountMappingResponse,
  /**
   * @param {!proto.reconpb.DeleteAccountMappingRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.reconpb.DeleteAccountMappingResponse.deserializeBinary
);

/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.reconpb.DeleteAccountMappingRequest,
 *   !proto.reconpb.DeleteAccountMappingResponse>}
 */
const methodInfo_AccountMappingService_DeleteAccountMapping = new grpc.web.AbstractClientBase.MethodInfo(
  proto.reconpb.DeleteAccountMappingResponse,
  /**
   * @param {!proto.reconpb.DeleteAccountMappingRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.reconpb.DeleteAccountMappingResponse.deserializeBinary
);

/**
 * @param {!proto.reconpb.DeleteAccountMappingRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.reconpb.DeleteAccountMappingResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.reconpb.DeleteAccountMappingResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.reconpb.AccountMappingServiceClient.prototype.deleteAccountMapping = function(
  request,
  metadata,
  callback
) {
  return this.client_.rpcCall(
    this.hostname_ + '/reconpb.AccountMappingService/DeleteAccountMapping',
    request,
    metadata || {},
    methodDescriptor_AccountMappingService_DeleteAccountMapping,
    callback
  );
};

/**
 * @param {!proto.reconpb.DeleteAccountMappingRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.reconpb.DeleteAccountMappingResponse>}
 *     A native promise that resolves to the response
 */
proto.reconpb.AccountMappingServicePromiseClient.prototype.deleteAccountMapping = function(
  request,
  metadata
) {
  return this.client_.unaryCall(
    this.hostname_ + '/reconpb.AccountMappingService/DeleteAccountMapping',
    request,
    metadata || {},
    methodDescriptor_AccountMappingService_DeleteAccountMapping
  );
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.reconpb.ListAccountMappingRequest,
 *   !proto.reconpb.ListAccountMappingResponse>}
 */
const methodDescriptor_AccountMappingService_ListAccountMapping = new grpc.web.MethodDescriptor(
  '/reconpb.AccountMappingService/ListAccountMapping',
  grpc.web.MethodType.UNARY,
  proto.reconpb.ListAccountMappingRequest,
  proto.reconpb.ListAccountMappingResponse,
  /**
   * @param {!proto.reconpb.ListAccountMappingRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.reconpb.ListAccountMappingResponse.deserializeBinary
);

/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.reconpb.ListAccountMappingRequest,
 *   !proto.reconpb.ListAccountMappingResponse>}
 */
const methodInfo_AccountMappingService_ListAccountMapping = new grpc.web.AbstractClientBase.MethodInfo(
  proto.reconpb.ListAccountMappingResponse,
  /**
   * @param {!proto.reconpb.ListAccountMappingRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.reconpb.ListAccountMappingResponse.deserializeBinary
);

/**
 * @param {!proto.reconpb.ListAccountMappingRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.reconpb.ListAccountMappingResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.reconpb.ListAccountMappingResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.reconpb.AccountMappingServiceClient.prototype.listAccountMapping = function(
  request,
  metadata,
  callback
) {
  return this.client_.rpcCall(
    this.hostname_ + '/reconpb.AccountMappingService/ListAccountMapping',
    request,
    metadata || {},
    methodDescriptor_AccountMappingService_ListAccountMapping,
    callback
  );
};

/**
 * @param {!proto.reconpb.ListAccountMappingRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.reconpb.ListAccountMappingResponse>}
 *     A native promise that resolves to the response
 */
proto.reconpb.AccountMappingServicePromiseClient.prototype.listAccountMapping = function(
  request,
  metadata
) {
  return this.client_.unaryCall(
    this.hostname_ + '/reconpb.AccountMappingService/ListAccountMapping',
    request,
    metadata || {},
    methodDescriptor_AccountMappingService_ListAccountMapping
  );
};

module.exports = proto.reconpb;