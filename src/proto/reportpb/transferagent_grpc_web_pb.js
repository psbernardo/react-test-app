/**
 * @fileoverview gRPC-Web generated client stub for reportpb
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!

/* eslint-disable */
// @ts-nocheck

const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.reportpb = require('./transferagent_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.reportpb.TransferAgentServiceClient = function(
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
proto.reportpb.TransferAgentServicePromiseClient = function(
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
 *   !proto.reportpb.CreateTransferAgentRequest,
 *   !proto.reportpb.CreateTransferAgentResponse>}
 */
const methodDescriptor_TransferAgentService_CreateTransferAgent = new grpc.web.MethodDescriptor(
  '/reportpb.TransferAgentService/CreateTransferAgent',
  grpc.web.MethodType.UNARY,
  proto.reportpb.CreateTransferAgentRequest,
  proto.reportpb.CreateTransferAgentResponse,
  /**
   * @param {!proto.reportpb.CreateTransferAgentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.reportpb.CreateTransferAgentResponse.deserializeBinary
);

/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.reportpb.CreateTransferAgentRequest,
 *   !proto.reportpb.CreateTransferAgentResponse>}
 */
const methodInfo_TransferAgentService_CreateTransferAgent = new grpc.web.AbstractClientBase.MethodInfo(
  proto.reportpb.CreateTransferAgentResponse,
  /**
   * @param {!proto.reportpb.CreateTransferAgentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.reportpb.CreateTransferAgentResponse.deserializeBinary
);

/**
 * @param {!proto.reportpb.CreateTransferAgentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.reportpb.CreateTransferAgentResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.reportpb.CreateTransferAgentResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.reportpb.TransferAgentServiceClient.prototype.createTransferAgent = function(
  request,
  metadata,
  callback
) {
  return this.client_.rpcCall(
    this.hostname_ + '/reportpb.TransferAgentService/CreateTransferAgent',
    request,
    metadata || {},
    methodDescriptor_TransferAgentService_CreateTransferAgent,
    callback
  );
};

/**
 * @param {!proto.reportpb.CreateTransferAgentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.reportpb.CreateTransferAgentResponse>}
 *     A native promise that resolves to the response
 */
proto.reportpb.TransferAgentServicePromiseClient.prototype.createTransferAgent = function(
  request,
  metadata
) {
  return this.client_.unaryCall(
    this.hostname_ + '/reportpb.TransferAgentService/CreateTransferAgent',
    request,
    metadata || {},
    methodDescriptor_TransferAgentService_CreateTransferAgent
  );
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.reportpb.UpdateTransferAgentRequest,
 *   !proto.reportpb.UpdateTransferAgentResponse>}
 */
const methodDescriptor_TransferAgentService_UpdateTransferAgent = new grpc.web.MethodDescriptor(
  '/reportpb.TransferAgentService/UpdateTransferAgent',
  grpc.web.MethodType.UNARY,
  proto.reportpb.UpdateTransferAgentRequest,
  proto.reportpb.UpdateTransferAgentResponse,
  /**
   * @param {!proto.reportpb.UpdateTransferAgentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.reportpb.UpdateTransferAgentResponse.deserializeBinary
);

/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.reportpb.UpdateTransferAgentRequest,
 *   !proto.reportpb.UpdateTransferAgentResponse>}
 */
const methodInfo_TransferAgentService_UpdateTransferAgent = new grpc.web.AbstractClientBase.MethodInfo(
  proto.reportpb.UpdateTransferAgentResponse,
  /**
   * @param {!proto.reportpb.UpdateTransferAgentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.reportpb.UpdateTransferAgentResponse.deserializeBinary
);

/**
 * @param {!proto.reportpb.UpdateTransferAgentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.reportpb.UpdateTransferAgentResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.reportpb.UpdateTransferAgentResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.reportpb.TransferAgentServiceClient.prototype.updateTransferAgent = function(
  request,
  metadata,
  callback
) {
  return this.client_.rpcCall(
    this.hostname_ + '/reportpb.TransferAgentService/UpdateTransferAgent',
    request,
    metadata || {},
    methodDescriptor_TransferAgentService_UpdateTransferAgent,
    callback
  );
};

/**
 * @param {!proto.reportpb.UpdateTransferAgentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.reportpb.UpdateTransferAgentResponse>}
 *     A native promise that resolves to the response
 */
proto.reportpb.TransferAgentServicePromiseClient.prototype.updateTransferAgent = function(
  request,
  metadata
) {
  return this.client_.unaryCall(
    this.hostname_ + '/reportpb.TransferAgentService/UpdateTransferAgent',
    request,
    metadata || {},
    methodDescriptor_TransferAgentService_UpdateTransferAgent
  );
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.reportpb.ReadTransferAgentRequest,
 *   !proto.reportpb.ReadTransferAgentResponse>}
 */
const methodDescriptor_TransferAgentService_ReadTransferAgent = new grpc.web.MethodDescriptor(
  '/reportpb.TransferAgentService/ReadTransferAgent',
  grpc.web.MethodType.UNARY,
  proto.reportpb.ReadTransferAgentRequest,
  proto.reportpb.ReadTransferAgentResponse,
  /**
   * @param {!proto.reportpb.ReadTransferAgentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.reportpb.ReadTransferAgentResponse.deserializeBinary
);

/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.reportpb.ReadTransferAgentRequest,
 *   !proto.reportpb.ReadTransferAgentResponse>}
 */
const methodInfo_TransferAgentService_ReadTransferAgent = new grpc.web.AbstractClientBase.MethodInfo(
  proto.reportpb.ReadTransferAgentResponse,
  /**
   * @param {!proto.reportpb.ReadTransferAgentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.reportpb.ReadTransferAgentResponse.deserializeBinary
);

/**
 * @param {!proto.reportpb.ReadTransferAgentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.reportpb.ReadTransferAgentResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.reportpb.ReadTransferAgentResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.reportpb.TransferAgentServiceClient.prototype.readTransferAgent = function(
  request,
  metadata,
  callback
) {
  return this.client_.rpcCall(
    this.hostname_ + '/reportpb.TransferAgentService/ReadTransferAgent',
    request,
    metadata || {},
    methodDescriptor_TransferAgentService_ReadTransferAgent,
    callback
  );
};

/**
 * @param {!proto.reportpb.ReadTransferAgentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.reportpb.ReadTransferAgentResponse>}
 *     A native promise that resolves to the response
 */
proto.reportpb.TransferAgentServicePromiseClient.prototype.readTransferAgent = function(
  request,
  metadata
) {
  return this.client_.unaryCall(
    this.hostname_ + '/reportpb.TransferAgentService/ReadTransferAgent',
    request,
    metadata || {},
    methodDescriptor_TransferAgentService_ReadTransferAgent
  );
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.reportpb.DeleteTransferAgentRequest,
 *   !proto.reportpb.DeleteTransferAgentResponse>}
 */
const methodDescriptor_TransferAgentService_DeleteTransferAgent = new grpc.web.MethodDescriptor(
  '/reportpb.TransferAgentService/DeleteTransferAgent',
  grpc.web.MethodType.UNARY,
  proto.reportpb.DeleteTransferAgentRequest,
  proto.reportpb.DeleteTransferAgentResponse,
  /**
   * @param {!proto.reportpb.DeleteTransferAgentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.reportpb.DeleteTransferAgentResponse.deserializeBinary
);

/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.reportpb.DeleteTransferAgentRequest,
 *   !proto.reportpb.DeleteTransferAgentResponse>}
 */
const methodInfo_TransferAgentService_DeleteTransferAgent = new grpc.web.AbstractClientBase.MethodInfo(
  proto.reportpb.DeleteTransferAgentResponse,
  /**
   * @param {!proto.reportpb.DeleteTransferAgentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.reportpb.DeleteTransferAgentResponse.deserializeBinary
);

/**
 * @param {!proto.reportpb.DeleteTransferAgentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.reportpb.DeleteTransferAgentResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.reportpb.DeleteTransferAgentResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.reportpb.TransferAgentServiceClient.prototype.deleteTransferAgent = function(
  request,
  metadata,
  callback
) {
  return this.client_.rpcCall(
    this.hostname_ + '/reportpb.TransferAgentService/DeleteTransferAgent',
    request,
    metadata || {},
    methodDescriptor_TransferAgentService_DeleteTransferAgent,
    callback
  );
};

/**
 * @param {!proto.reportpb.DeleteTransferAgentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.reportpb.DeleteTransferAgentResponse>}
 *     A native promise that resolves to the response
 */
proto.reportpb.TransferAgentServicePromiseClient.prototype.deleteTransferAgent = function(
  request,
  metadata
) {
  return this.client_.unaryCall(
    this.hostname_ + '/reportpb.TransferAgentService/DeleteTransferAgent',
    request,
    metadata || {},
    methodDescriptor_TransferAgentService_DeleteTransferAgent
  );
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.reportpb.ListTransferAgentRequest,
 *   !proto.reportpb.ListTransferAgentResponse>}
 */
const methodDescriptor_TransferAgentService_ListTransferAgent = new grpc.web.MethodDescriptor(
  '/reportpb.TransferAgentService/ListTransferAgent',
  grpc.web.MethodType.UNARY,
  proto.reportpb.ListTransferAgentRequest,
  proto.reportpb.ListTransferAgentResponse,
  /**
   * @param {!proto.reportpb.ListTransferAgentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.reportpb.ListTransferAgentResponse.deserializeBinary
);

/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.reportpb.ListTransferAgentRequest,
 *   !proto.reportpb.ListTransferAgentResponse>}
 */
const methodInfo_TransferAgentService_ListTransferAgent = new grpc.web.AbstractClientBase.MethodInfo(
  proto.reportpb.ListTransferAgentResponse,
  /**
   * @param {!proto.reportpb.ListTransferAgentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.reportpb.ListTransferAgentResponse.deserializeBinary
);

/**
 * @param {!proto.reportpb.ListTransferAgentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.reportpb.ListTransferAgentResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.reportpb.ListTransferAgentResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.reportpb.TransferAgentServiceClient.prototype.listTransferAgent = function(
  request,
  metadata,
  callback
) {
  return this.client_.rpcCall(
    this.hostname_ + '/reportpb.TransferAgentService/ListTransferAgent',
    request,
    metadata || {},
    methodDescriptor_TransferAgentService_ListTransferAgent,
    callback
  );
};

/**
 * @param {!proto.reportpb.ListTransferAgentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.reportpb.ListTransferAgentResponse>}
 *     A native promise that resolves to the response
 */
proto.reportpb.TransferAgentServicePromiseClient.prototype.listTransferAgent = function(
  request,
  metadata
) {
  return this.client_.unaryCall(
    this.hostname_ + '/reportpb.TransferAgentService/ListTransferAgent',
    request,
    metadata || {},
    methodDescriptor_TransferAgentService_ListTransferAgent
  );
};

module.exports = proto.reportpb;
