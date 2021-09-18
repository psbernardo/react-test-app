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
proto.accountpb = require('./glsubaccount_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.accountpb.GlSubAccountServiceClient =
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
proto.accountpb.GlSubAccountServicePromiseClient =
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
 *   !proto.accountpb.ListGlSubAccountRequest,
 *   !proto.accountpb.ListGlSubAccountResponse>}
 */
const methodDescriptor_GlSubAccountService_ListGlSubAccount = new grpc.web.MethodDescriptor(
  '/accountpb.GlSubAccountService/ListGlSubAccount',
  grpc.web.MethodType.UNARY,
  proto.accountpb.ListGlSubAccountRequest,
  proto.accountpb.ListGlSubAccountResponse,
  /**
   * @param {!proto.accountpb.ListGlSubAccountRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.accountpb.ListGlSubAccountResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.accountpb.ListGlSubAccountRequest,
 *   !proto.accountpb.ListGlSubAccountResponse>}
 */
const methodInfo_GlSubAccountService_ListGlSubAccount = new grpc.web.AbstractClientBase.MethodInfo(
  proto.accountpb.ListGlSubAccountResponse,
  /**
   * @param {!proto.accountpb.ListGlSubAccountRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.accountpb.ListGlSubAccountResponse.deserializeBinary
);


/**
 * @param {!proto.accountpb.ListGlSubAccountRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.accountpb.ListGlSubAccountResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.accountpb.ListGlSubAccountResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.accountpb.GlSubAccountServiceClient.prototype.listGlSubAccount =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/accountpb.GlSubAccountService/ListGlSubAccount',
      request,
      metadata || {},
      methodDescriptor_GlSubAccountService_ListGlSubAccount,
      callback);
};


/**
 * @param {!proto.accountpb.ListGlSubAccountRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.accountpb.ListGlSubAccountResponse>}
 *     A native promise that resolves to the response
 */
proto.accountpb.GlSubAccountServicePromiseClient.prototype.listGlSubAccount =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/accountpb.GlSubAccountService/ListGlSubAccount',
      request,
      metadata || {},
      methodDescriptor_GlSubAccountService_ListGlSubAccount);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.accountpb.GlSubAccount,
 *   !proto.accountpb.CreateGlSubAccountResponse>}
 */
const methodDescriptor_GlSubAccountService_CreateGlSubAccount = new grpc.web.MethodDescriptor(
  '/accountpb.GlSubAccountService/CreateGlSubAccount',
  grpc.web.MethodType.UNARY,
  proto.accountpb.GlSubAccount,
  proto.accountpb.CreateGlSubAccountResponse,
  /**
   * @param {!proto.accountpb.GlSubAccount} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.accountpb.CreateGlSubAccountResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.accountpb.GlSubAccount,
 *   !proto.accountpb.CreateGlSubAccountResponse>}
 */
const methodInfo_GlSubAccountService_CreateGlSubAccount = new grpc.web.AbstractClientBase.MethodInfo(
  proto.accountpb.CreateGlSubAccountResponse,
  /**
   * @param {!proto.accountpb.GlSubAccount} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.accountpb.CreateGlSubAccountResponse.deserializeBinary
);


/**
 * @param {!proto.accountpb.GlSubAccount} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.accountpb.CreateGlSubAccountResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.accountpb.CreateGlSubAccountResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.accountpb.GlSubAccountServiceClient.prototype.createGlSubAccount =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/accountpb.GlSubAccountService/CreateGlSubAccount',
      request,
      metadata || {},
      methodDescriptor_GlSubAccountService_CreateGlSubAccount,
      callback);
};


/**
 * @param {!proto.accountpb.GlSubAccount} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.accountpb.CreateGlSubAccountResponse>}
 *     A native promise that resolves to the response
 */
proto.accountpb.GlSubAccountServicePromiseClient.prototype.createGlSubAccount =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/accountpb.GlSubAccountService/CreateGlSubAccount',
      request,
      metadata || {},
      methodDescriptor_GlSubAccountService_CreateGlSubAccount);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.accountpb.GlSubAccount,
 *   !proto.accountpb.UpdateGlSubAccountResponse>}
 */
const methodDescriptor_GlSubAccountService_UpdateGlSubAccount = new grpc.web.MethodDescriptor(
  '/accountpb.GlSubAccountService/UpdateGlSubAccount',
  grpc.web.MethodType.UNARY,
  proto.accountpb.GlSubAccount,
  proto.accountpb.UpdateGlSubAccountResponse,
  /**
   * @param {!proto.accountpb.GlSubAccount} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.accountpb.UpdateGlSubAccountResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.accountpb.GlSubAccount,
 *   !proto.accountpb.UpdateGlSubAccountResponse>}
 */
const methodInfo_GlSubAccountService_UpdateGlSubAccount = new grpc.web.AbstractClientBase.MethodInfo(
  proto.accountpb.UpdateGlSubAccountResponse,
  /**
   * @param {!proto.accountpb.GlSubAccount} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.accountpb.UpdateGlSubAccountResponse.deserializeBinary
);


/**
 * @param {!proto.accountpb.GlSubAccount} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.accountpb.UpdateGlSubAccountResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.accountpb.UpdateGlSubAccountResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.accountpb.GlSubAccountServiceClient.prototype.updateGlSubAccount =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/accountpb.GlSubAccountService/UpdateGlSubAccount',
      request,
      metadata || {},
      methodDescriptor_GlSubAccountService_UpdateGlSubAccount,
      callback);
};


/**
 * @param {!proto.accountpb.GlSubAccount} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.accountpb.UpdateGlSubAccountResponse>}
 *     A native promise that resolves to the response
 */
proto.accountpb.GlSubAccountServicePromiseClient.prototype.updateGlSubAccount =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/accountpb.GlSubAccountService/UpdateGlSubAccount',
      request,
      metadata || {},
      methodDescriptor_GlSubAccountService_UpdateGlSubAccount);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.accountpb.DeleteGlSubAccountRequest,
 *   !proto.accountpb.DeleteGlSubAccountResponse>}
 */
const methodDescriptor_GlSubAccountService_DeleteGlSubAccount = new grpc.web.MethodDescriptor(
  '/accountpb.GlSubAccountService/DeleteGlSubAccount',
  grpc.web.MethodType.UNARY,
  proto.accountpb.DeleteGlSubAccountRequest,
  proto.accountpb.DeleteGlSubAccountResponse,
  /**
   * @param {!proto.accountpb.DeleteGlSubAccountRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.accountpb.DeleteGlSubAccountResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.accountpb.DeleteGlSubAccountRequest,
 *   !proto.accountpb.DeleteGlSubAccountResponse>}
 */
const methodInfo_GlSubAccountService_DeleteGlSubAccount = new grpc.web.AbstractClientBase.MethodInfo(
  proto.accountpb.DeleteGlSubAccountResponse,
  /**
   * @param {!proto.accountpb.DeleteGlSubAccountRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.accountpb.DeleteGlSubAccountResponse.deserializeBinary
);


/**
 * @param {!proto.accountpb.DeleteGlSubAccountRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.accountpb.DeleteGlSubAccountResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.accountpb.DeleteGlSubAccountResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.accountpb.GlSubAccountServiceClient.prototype.deleteGlSubAccount =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/accountpb.GlSubAccountService/DeleteGlSubAccount',
      request,
      metadata || {},
      methodDescriptor_GlSubAccountService_DeleteGlSubAccount,
      callback);
};


/**
 * @param {!proto.accountpb.DeleteGlSubAccountRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.accountpb.DeleteGlSubAccountResponse>}
 *     A native promise that resolves to the response
 */
proto.accountpb.GlSubAccountServicePromiseClient.prototype.deleteGlSubAccount =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/accountpb.GlSubAccountService/DeleteGlSubAccount',
      request,
      metadata || {},
      methodDescriptor_GlSubAccountService_DeleteGlSubAccount);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.accountpb.BatchCreateGlSubAccountRequest,
 *   !proto.accountpb.BatchCreateGlSubAccountResponse>}
 */
const methodDescriptor_GlSubAccountService_BatchCreateGlSubAccount = new grpc.web.MethodDescriptor(
  '/accountpb.GlSubAccountService/BatchCreateGlSubAccount',
  grpc.web.MethodType.UNARY,
  proto.accountpb.BatchCreateGlSubAccountRequest,
  proto.accountpb.BatchCreateGlSubAccountResponse,
  /**
   * @param {!proto.accountpb.BatchCreateGlSubAccountRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.accountpb.BatchCreateGlSubAccountResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.accountpb.BatchCreateGlSubAccountRequest,
 *   !proto.accountpb.BatchCreateGlSubAccountResponse>}
 */
const methodInfo_GlSubAccountService_BatchCreateGlSubAccount = new grpc.web.AbstractClientBase.MethodInfo(
  proto.accountpb.BatchCreateGlSubAccountResponse,
  /**
   * @param {!proto.accountpb.BatchCreateGlSubAccountRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.accountpb.BatchCreateGlSubAccountResponse.deserializeBinary
);


/**
 * @param {!proto.accountpb.BatchCreateGlSubAccountRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.accountpb.BatchCreateGlSubAccountResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.accountpb.BatchCreateGlSubAccountResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.accountpb.GlSubAccountServiceClient.prototype.batchCreateGlSubAccount =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/accountpb.GlSubAccountService/BatchCreateGlSubAccount',
      request,
      metadata || {},
      methodDescriptor_GlSubAccountService_BatchCreateGlSubAccount,
      callback);
};


/**
 * @param {!proto.accountpb.BatchCreateGlSubAccountRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.accountpb.BatchCreateGlSubAccountResponse>}
 *     A native promise that resolves to the response
 */
proto.accountpb.GlSubAccountServicePromiseClient.prototype.batchCreateGlSubAccount =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/accountpb.GlSubAccountService/BatchCreateGlSubAccount',
      request,
      metadata || {},
      methodDescriptor_GlSubAccountService_BatchCreateGlSubAccount);
};


module.exports = proto.accountpb;

