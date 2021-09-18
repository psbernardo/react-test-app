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
proto.accountpb = require('./subaccount_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.accountpb.SubAccountServiceClient =
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
proto.accountpb.SubAccountServicePromiseClient =
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
 *   !proto.accountpb.SubAccount,
 *   !proto.accountpb.CreateSubAccountResponse>}
 */
const methodDescriptor_SubAccountService_CreateSubAccount = new grpc.web.MethodDescriptor(
  '/accountpb.SubAccountService/CreateSubAccount',
  grpc.web.MethodType.UNARY,
  proto.accountpb.SubAccount,
  proto.accountpb.CreateSubAccountResponse,
  /**
   * @param {!proto.accountpb.SubAccount} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.accountpb.CreateSubAccountResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.accountpb.SubAccount,
 *   !proto.accountpb.CreateSubAccountResponse>}
 */
const methodInfo_SubAccountService_CreateSubAccount = new grpc.web.AbstractClientBase.MethodInfo(
  proto.accountpb.CreateSubAccountResponse,
  /**
   * @param {!proto.accountpb.SubAccount} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.accountpb.CreateSubAccountResponse.deserializeBinary
);


/**
 * @param {!proto.accountpb.SubAccount} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.accountpb.CreateSubAccountResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.accountpb.CreateSubAccountResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.accountpb.SubAccountServiceClient.prototype.createSubAccount =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/accountpb.SubAccountService/CreateSubAccount',
      request,
      metadata || {},
      methodDescriptor_SubAccountService_CreateSubAccount,
      callback);
};


/**
 * @param {!proto.accountpb.SubAccount} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.accountpb.CreateSubAccountResponse>}
 *     Promise that resolves to the response
 */
proto.accountpb.SubAccountServicePromiseClient.prototype.createSubAccount =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/accountpb.SubAccountService/CreateSubAccount',
      request,
      metadata || {},
      methodDescriptor_SubAccountService_CreateSubAccount);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.accountpb.SubAccount,
 *   !proto.accountpb.UpdateSubAccountResponse>}
 */
const methodDescriptor_SubAccountService_UpdateSubAccount = new grpc.web.MethodDescriptor(
  '/accountpb.SubAccountService/UpdateSubAccount',
  grpc.web.MethodType.UNARY,
  proto.accountpb.SubAccount,
  proto.accountpb.UpdateSubAccountResponse,
  /**
   * @param {!proto.accountpb.SubAccount} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.accountpb.UpdateSubAccountResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.accountpb.SubAccount,
 *   !proto.accountpb.UpdateSubAccountResponse>}
 */
const methodInfo_SubAccountService_UpdateSubAccount = new grpc.web.AbstractClientBase.MethodInfo(
  proto.accountpb.UpdateSubAccountResponse,
  /**
   * @param {!proto.accountpb.SubAccount} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.accountpb.UpdateSubAccountResponse.deserializeBinary
);


/**
 * @param {!proto.accountpb.SubAccount} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.accountpb.UpdateSubAccountResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.accountpb.UpdateSubAccountResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.accountpb.SubAccountServiceClient.prototype.updateSubAccount =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/accountpb.SubAccountService/UpdateSubAccount',
      request,
      metadata || {},
      methodDescriptor_SubAccountService_UpdateSubAccount,
      callback);
};


/**
 * @param {!proto.accountpb.SubAccount} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.accountpb.UpdateSubAccountResponse>}
 *     Promise that resolves to the response
 */
proto.accountpb.SubAccountServicePromiseClient.prototype.updateSubAccount =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/accountpb.SubAccountService/UpdateSubAccount',
      request,
      metadata || {},
      methodDescriptor_SubAccountService_UpdateSubAccount);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.accountpb.ReadSubAccountRequest,
 *   !proto.accountpb.ReadSubAccountResponse>}
 */
const methodDescriptor_SubAccountService_ReadSubAccount = new grpc.web.MethodDescriptor(
  '/accountpb.SubAccountService/ReadSubAccount',
  grpc.web.MethodType.UNARY,
  proto.accountpb.ReadSubAccountRequest,
  proto.accountpb.ReadSubAccountResponse,
  /**
   * @param {!proto.accountpb.ReadSubAccountRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.accountpb.ReadSubAccountResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.accountpb.ReadSubAccountRequest,
 *   !proto.accountpb.ReadSubAccountResponse>}
 */
const methodInfo_SubAccountService_ReadSubAccount = new grpc.web.AbstractClientBase.MethodInfo(
  proto.accountpb.ReadSubAccountResponse,
  /**
   * @param {!proto.accountpb.ReadSubAccountRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.accountpb.ReadSubAccountResponse.deserializeBinary
);


/**
 * @param {!proto.accountpb.ReadSubAccountRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.accountpb.ReadSubAccountResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.accountpb.ReadSubAccountResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.accountpb.SubAccountServiceClient.prototype.readSubAccount =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/accountpb.SubAccountService/ReadSubAccount',
      request,
      metadata || {},
      methodDescriptor_SubAccountService_ReadSubAccount,
      callback);
};


/**
 * @param {!proto.accountpb.ReadSubAccountRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.accountpb.ReadSubAccountResponse>}
 *     Promise that resolves to the response
 */
proto.accountpb.SubAccountServicePromiseClient.prototype.readSubAccount =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/accountpb.SubAccountService/ReadSubAccount',
      request,
      metadata || {},
      methodDescriptor_SubAccountService_ReadSubAccount);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.accountpb.DeleteSubAccountRequest,
 *   !proto.accountpb.DeleteSubAccountResponse>}
 */
const methodDescriptor_SubAccountService_DeleteSubAccount = new grpc.web.MethodDescriptor(
  '/accountpb.SubAccountService/DeleteSubAccount',
  grpc.web.MethodType.UNARY,
  proto.accountpb.DeleteSubAccountRequest,
  proto.accountpb.DeleteSubAccountResponse,
  /**
   * @param {!proto.accountpb.DeleteSubAccountRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.accountpb.DeleteSubAccountResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.accountpb.DeleteSubAccountRequest,
 *   !proto.accountpb.DeleteSubAccountResponse>}
 */
const methodInfo_SubAccountService_DeleteSubAccount = new grpc.web.AbstractClientBase.MethodInfo(
  proto.accountpb.DeleteSubAccountResponse,
  /**
   * @param {!proto.accountpb.DeleteSubAccountRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.accountpb.DeleteSubAccountResponse.deserializeBinary
);


/**
 * @param {!proto.accountpb.DeleteSubAccountRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.accountpb.DeleteSubAccountResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.accountpb.DeleteSubAccountResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.accountpb.SubAccountServiceClient.prototype.deleteSubAccount =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/accountpb.SubAccountService/DeleteSubAccount',
      request,
      metadata || {},
      methodDescriptor_SubAccountService_DeleteSubAccount,
      callback);
};


/**
 * @param {!proto.accountpb.DeleteSubAccountRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.accountpb.DeleteSubAccountResponse>}
 *     Promise that resolves to the response
 */
proto.accountpb.SubAccountServicePromiseClient.prototype.deleteSubAccount =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/accountpb.SubAccountService/DeleteSubAccount',
      request,
      metadata || {},
      methodDescriptor_SubAccountService_DeleteSubAccount);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.accountpb.ListSubAccountRequest,
 *   !proto.accountpb.ListSubAccountResponse>}
 */
const methodDescriptor_SubAccountService_ListSubAccount = new grpc.web.MethodDescriptor(
  '/accountpb.SubAccountService/ListSubAccount',
  grpc.web.MethodType.UNARY,
  proto.accountpb.ListSubAccountRequest,
  proto.accountpb.ListSubAccountResponse,
  /**
   * @param {!proto.accountpb.ListSubAccountRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.accountpb.ListSubAccountResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.accountpb.ListSubAccountRequest,
 *   !proto.accountpb.ListSubAccountResponse>}
 */
const methodInfo_SubAccountService_ListSubAccount = new grpc.web.AbstractClientBase.MethodInfo(
  proto.accountpb.ListSubAccountResponse,
  /**
   * @param {!proto.accountpb.ListSubAccountRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.accountpb.ListSubAccountResponse.deserializeBinary
);


/**
 * @param {!proto.accountpb.ListSubAccountRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.accountpb.ListSubAccountResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.accountpb.ListSubAccountResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.accountpb.SubAccountServiceClient.prototype.listSubAccount =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/accountpb.SubAccountService/ListSubAccount',
      request,
      metadata || {},
      methodDescriptor_SubAccountService_ListSubAccount,
      callback);
};


/**
 * @param {!proto.accountpb.ListSubAccountRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.accountpb.ListSubAccountResponse>}
 *     Promise that resolves to the response
 */
proto.accountpb.SubAccountServicePromiseClient.prototype.listSubAccount =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/accountpb.SubAccountService/ListSubAccount',
      request,
      metadata || {},
      methodDescriptor_SubAccountService_ListSubAccount);
};


module.exports = proto.accountpb;

