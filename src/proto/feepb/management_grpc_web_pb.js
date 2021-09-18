/**
 * @fileoverview gRPC-Web generated client stub for feepb
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!

/* eslint-disable */
// @ts-nocheck

const grpc = {};
grpc.web = require('grpc-web');

var google_type_date_pb = require('../../google/type/date_pb.js');
const proto = {};
proto.feepb = require('./management_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.feepb.FeeManagementServiceClient = function(
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
proto.feepb.FeeManagementServicePromiseClient = function(
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
 *   !proto.feepb.CreateFeeManagementRequest,
 *   !proto.feepb.CreateFeeManagementResponse>}
 */
const methodDescriptor_FeeManagementService_CreateFeeManagement = new grpc.web.MethodDescriptor(
  '/feepb.FeeManagementService/CreateFeeManagement',
  grpc.web.MethodType.UNARY,
  proto.feepb.CreateFeeManagementRequest,
  proto.feepb.CreateFeeManagementResponse,
  /**
   * @param {!proto.feepb.CreateFeeManagementRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.feepb.CreateFeeManagementResponse.deserializeBinary
);

/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.feepb.CreateFeeManagementRequest,
 *   !proto.feepb.CreateFeeManagementResponse>}
 */
const methodInfo_FeeManagementService_CreateFeeManagement = new grpc.web.AbstractClientBase.MethodInfo(
  proto.feepb.CreateFeeManagementResponse,
  /**
   * @param {!proto.feepb.CreateFeeManagementRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.feepb.CreateFeeManagementResponse.deserializeBinary
);

/**
 * @param {!proto.feepb.CreateFeeManagementRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.feepb.CreateFeeManagementResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.feepb.CreateFeeManagementResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.feepb.FeeManagementServiceClient.prototype.createFeeManagement = function(
  request,
  metadata,
  callback
) {
  return this.client_.rpcCall(
    this.hostname_ + '/feepb.FeeManagementService/CreateFeeManagement',
    request,
    metadata || {},
    methodDescriptor_FeeManagementService_CreateFeeManagement,
    callback
  );
};

/**
 * @param {!proto.feepb.CreateFeeManagementRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.feepb.CreateFeeManagementResponse>}
 *     A native promise that resolves to the response
 */
proto.feepb.FeeManagementServicePromiseClient.prototype.createFeeManagement = function(
  request,
  metadata
) {
  return this.client_.unaryCall(
    this.hostname_ + '/feepb.FeeManagementService/CreateFeeManagement',
    request,
    metadata || {},
    methodDescriptor_FeeManagementService_CreateFeeManagement
  );
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.feepb.UpdateFeeManagementRequest,
 *   !proto.feepb.UpdateFeeManagementResponse>}
 */
const methodDescriptor_FeeManagementService_UpdateFeeManagement = new grpc.web.MethodDescriptor(
  '/feepb.FeeManagementService/UpdateFeeManagement',
  grpc.web.MethodType.UNARY,
  proto.feepb.UpdateFeeManagementRequest,
  proto.feepb.UpdateFeeManagementResponse,
  /**
   * @param {!proto.feepb.UpdateFeeManagementRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.feepb.UpdateFeeManagementResponse.deserializeBinary
);

/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.feepb.UpdateFeeManagementRequest,
 *   !proto.feepb.UpdateFeeManagementResponse>}
 */
const methodInfo_FeeManagementService_UpdateFeeManagement = new grpc.web.AbstractClientBase.MethodInfo(
  proto.feepb.UpdateFeeManagementResponse,
  /**
   * @param {!proto.feepb.UpdateFeeManagementRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.feepb.UpdateFeeManagementResponse.deserializeBinary
);

/**
 * @param {!proto.feepb.UpdateFeeManagementRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.feepb.UpdateFeeManagementResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.feepb.UpdateFeeManagementResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.feepb.FeeManagementServiceClient.prototype.updateFeeManagement = function(
  request,
  metadata,
  callback
) {
  return this.client_.rpcCall(
    this.hostname_ + '/feepb.FeeManagementService/UpdateFeeManagement',
    request,
    metadata || {},
    methodDescriptor_FeeManagementService_UpdateFeeManagement,
    callback
  );
};

/**
 * @param {!proto.feepb.UpdateFeeManagementRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.feepb.UpdateFeeManagementResponse>}
 *     A native promise that resolves to the response
 */
proto.feepb.FeeManagementServicePromiseClient.prototype.updateFeeManagement = function(
  request,
  metadata
) {
  return this.client_.unaryCall(
    this.hostname_ + '/feepb.FeeManagementService/UpdateFeeManagement',
    request,
    metadata || {},
    methodDescriptor_FeeManagementService_UpdateFeeManagement
  );
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.feepb.ReadFeeManagementRequest,
 *   !proto.feepb.ReadFeeManagementResponse>}
 */
const methodDescriptor_FeeManagementService_ReadFeeManagement = new grpc.web.MethodDescriptor(
  '/feepb.FeeManagementService/ReadFeeManagement',
  grpc.web.MethodType.UNARY,
  proto.feepb.ReadFeeManagementRequest,
  proto.feepb.ReadFeeManagementResponse,
  /**
   * @param {!proto.feepb.ReadFeeManagementRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.feepb.ReadFeeManagementResponse.deserializeBinary
);

/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.feepb.ReadFeeManagementRequest,
 *   !proto.feepb.ReadFeeManagementResponse>}
 */
const methodInfo_FeeManagementService_ReadFeeManagement = new grpc.web.AbstractClientBase.MethodInfo(
  proto.feepb.ReadFeeManagementResponse,
  /**
   * @param {!proto.feepb.ReadFeeManagementRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.feepb.ReadFeeManagementResponse.deserializeBinary
);

/**
 * @param {!proto.feepb.ReadFeeManagementRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.feepb.ReadFeeManagementResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.feepb.ReadFeeManagementResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.feepb.FeeManagementServiceClient.prototype.readFeeManagement = function(
  request,
  metadata,
  callback
) {
  return this.client_.rpcCall(
    this.hostname_ + '/feepb.FeeManagementService/ReadFeeManagement',
    request,
    metadata || {},
    methodDescriptor_FeeManagementService_ReadFeeManagement,
    callback
  );
};

/**
 * @param {!proto.feepb.ReadFeeManagementRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.feepb.ReadFeeManagementResponse>}
 *     A native promise that resolves to the response
 */
proto.feepb.FeeManagementServicePromiseClient.prototype.readFeeManagement = function(
  request,
  metadata
) {
  return this.client_.unaryCall(
    this.hostname_ + '/feepb.FeeManagementService/ReadFeeManagement',
    request,
    metadata || {},
    methodDescriptor_FeeManagementService_ReadFeeManagement
  );
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.feepb.DeleteFeeManagementRequest,
 *   !proto.feepb.DeleteFeeManagementResponse>}
 */
const methodDescriptor_FeeManagementService_DeleteFeeManagement = new grpc.web.MethodDescriptor(
  '/feepb.FeeManagementService/DeleteFeeManagement',
  grpc.web.MethodType.UNARY,
  proto.feepb.DeleteFeeManagementRequest,
  proto.feepb.DeleteFeeManagementResponse,
  /**
   * @param {!proto.feepb.DeleteFeeManagementRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.feepb.DeleteFeeManagementResponse.deserializeBinary
);

/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.feepb.DeleteFeeManagementRequest,
 *   !proto.feepb.DeleteFeeManagementResponse>}
 */
const methodInfo_FeeManagementService_DeleteFeeManagement = new grpc.web.AbstractClientBase.MethodInfo(
  proto.feepb.DeleteFeeManagementResponse,
  /**
   * @param {!proto.feepb.DeleteFeeManagementRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.feepb.DeleteFeeManagementResponse.deserializeBinary
);

/**
 * @param {!proto.feepb.DeleteFeeManagementRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.feepb.DeleteFeeManagementResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.feepb.DeleteFeeManagementResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.feepb.FeeManagementServiceClient.prototype.deleteFeeManagement = function(
  request,
  metadata,
  callback
) {
  return this.client_.rpcCall(
    this.hostname_ + '/feepb.FeeManagementService/DeleteFeeManagement',
    request,
    metadata || {},
    methodDescriptor_FeeManagementService_DeleteFeeManagement,
    callback
  );
};

/**
 * @param {!proto.feepb.DeleteFeeManagementRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.feepb.DeleteFeeManagementResponse>}
 *     A native promise that resolves to the response
 */
proto.feepb.FeeManagementServicePromiseClient.prototype.deleteFeeManagement = function(
  request,
  metadata
) {
  return this.client_.unaryCall(
    this.hostname_ + '/feepb.FeeManagementService/DeleteFeeManagement',
    request,
    metadata || {},
    methodDescriptor_FeeManagementService_DeleteFeeManagement
  );
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.feepb.ListFeeManagementRequest,
 *   !proto.feepb.ListFeeManagementResponse>}
 */
const methodDescriptor_FeeManagementService_ListFeeManagement = new grpc.web.MethodDescriptor(
  '/feepb.FeeManagementService/ListFeeManagement',
  grpc.web.MethodType.UNARY,
  proto.feepb.ListFeeManagementRequest,
  proto.feepb.ListFeeManagementResponse,
  /**
   * @param {!proto.feepb.ListFeeManagementRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.feepb.ListFeeManagementResponse.deserializeBinary
);

/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.feepb.ListFeeManagementRequest,
 *   !proto.feepb.ListFeeManagementResponse>}
 */
const methodInfo_FeeManagementService_ListFeeManagement = new grpc.web.AbstractClientBase.MethodInfo(
  proto.feepb.ListFeeManagementResponse,
  /**
   * @param {!proto.feepb.ListFeeManagementRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.feepb.ListFeeManagementResponse.deserializeBinary
);

/**
 * @param {!proto.feepb.ListFeeManagementRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.feepb.ListFeeManagementResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.feepb.ListFeeManagementResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.feepb.FeeManagementServiceClient.prototype.listFeeManagement = function(
  request,
  metadata,
  callback
) {
  return this.client_.rpcCall(
    this.hostname_ + '/feepb.FeeManagementService/ListFeeManagement',
    request,
    metadata || {},
    methodDescriptor_FeeManagementService_ListFeeManagement,
    callback
  );
};

/**
 * @param {!proto.feepb.ListFeeManagementRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.feepb.ListFeeManagementResponse>}
 *     A native promise that resolves to the response
 */
proto.feepb.FeeManagementServicePromiseClient.prototype.listFeeManagement = function(
  request,
  metadata
) {
  return this.client_.unaryCall(
    this.hostname_ + '/feepb.FeeManagementService/ListFeeManagement',
    request,
    metadata || {},
    methodDescriptor_FeeManagementService_ListFeeManagement
  );
};

module.exports = proto.feepb;
