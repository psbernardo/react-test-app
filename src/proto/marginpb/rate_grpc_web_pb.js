/**
 * @fileoverview gRPC-Web generated client stub for marginpb
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
proto.marginpb = require('./rate_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.marginpb.RateServiceClient = function(hostname, credentials, options) {
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
proto.marginpb.RateServicePromiseClient = function(
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
 *   !proto.marginpb.CreateRateRequest,
 *   !proto.marginpb.CreateRateResponse>}
 */
const methodDescriptor_RateService_CreateRate = new grpc.web.MethodDescriptor(
  '/marginpb.RateService/CreateRate',
  grpc.web.MethodType.UNARY,
  proto.marginpb.CreateRateRequest,
  proto.marginpb.CreateRateResponse,
  /**
   * @param {!proto.marginpb.CreateRateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.marginpb.CreateRateResponse.deserializeBinary
);

/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.marginpb.CreateRateRequest,
 *   !proto.marginpb.CreateRateResponse>}
 */
const methodInfo_RateService_CreateRate = new grpc.web.AbstractClientBase.MethodInfo(
  proto.marginpb.CreateRateResponse,
  /**
   * @param {!proto.marginpb.CreateRateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.marginpb.CreateRateResponse.deserializeBinary
);

/**
 * @param {!proto.marginpb.CreateRateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.marginpb.CreateRateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.marginpb.CreateRateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.marginpb.RateServiceClient.prototype.createRate = function(
  request,
  metadata,
  callback
) {
  return this.client_.rpcCall(
    this.hostname_ + '/marginpb.RateService/CreateRate',
    request,
    metadata || {},
    methodDescriptor_RateService_CreateRate,
    callback
  );
};

/**
 * @param {!proto.marginpb.CreateRateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.marginpb.CreateRateResponse>}
 *     A native promise that resolves to the response
 */
proto.marginpb.RateServicePromiseClient.prototype.createRate = function(
  request,
  metadata
) {
  return this.client_.unaryCall(
    this.hostname_ + '/marginpb.RateService/CreateRate',
    request,
    metadata || {},
    methodDescriptor_RateService_CreateRate
  );
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.marginpb.UpdateRateRequest,
 *   !proto.marginpb.UpdateRateResponse>}
 */
const methodDescriptor_RateService_UpdateRate = new grpc.web.MethodDescriptor(
  '/marginpb.RateService/UpdateRate',
  grpc.web.MethodType.UNARY,
  proto.marginpb.UpdateRateRequest,
  proto.marginpb.UpdateRateResponse,
  /**
   * @param {!proto.marginpb.UpdateRateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.marginpb.UpdateRateResponse.deserializeBinary
);

/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.marginpb.UpdateRateRequest,
 *   !proto.marginpb.UpdateRateResponse>}
 */
const methodInfo_RateService_UpdateRate = new grpc.web.AbstractClientBase.MethodInfo(
  proto.marginpb.UpdateRateResponse,
  /**
   * @param {!proto.marginpb.UpdateRateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.marginpb.UpdateRateResponse.deserializeBinary
);

/**
 * @param {!proto.marginpb.UpdateRateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.marginpb.UpdateRateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.marginpb.UpdateRateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.marginpb.RateServiceClient.prototype.updateRate = function(
  request,
  metadata,
  callback
) {
  return this.client_.rpcCall(
    this.hostname_ + '/marginpb.RateService/UpdateRate',
    request,
    metadata || {},
    methodDescriptor_RateService_UpdateRate,
    callback
  );
};

/**
 * @param {!proto.marginpb.UpdateRateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.marginpb.UpdateRateResponse>}
 *     A native promise that resolves to the response
 */
proto.marginpb.RateServicePromiseClient.prototype.updateRate = function(
  request,
  metadata
) {
  return this.client_.unaryCall(
    this.hostname_ + '/marginpb.RateService/UpdateRate',
    request,
    metadata || {},
    methodDescriptor_RateService_UpdateRate
  );
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.marginpb.ReadRateRequest,
 *   !proto.marginpb.ReadRateResponse>}
 */
const methodDescriptor_RateService_ReadRate = new grpc.web.MethodDescriptor(
  '/marginpb.RateService/ReadRate',
  grpc.web.MethodType.UNARY,
  proto.marginpb.ReadRateRequest,
  proto.marginpb.ReadRateResponse,
  /**
   * @param {!proto.marginpb.ReadRateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.marginpb.ReadRateResponse.deserializeBinary
);

/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.marginpb.ReadRateRequest,
 *   !proto.marginpb.ReadRateResponse>}
 */
const methodInfo_RateService_ReadRate = new grpc.web.AbstractClientBase.MethodInfo(
  proto.marginpb.ReadRateResponse,
  /**
   * @param {!proto.marginpb.ReadRateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.marginpb.ReadRateResponse.deserializeBinary
);

/**
 * @param {!proto.marginpb.ReadRateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.marginpb.ReadRateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.marginpb.ReadRateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.marginpb.RateServiceClient.prototype.readRate = function(
  request,
  metadata,
  callback
) {
  return this.client_.rpcCall(
    this.hostname_ + '/marginpb.RateService/ReadRate',
    request,
    metadata || {},
    methodDescriptor_RateService_ReadRate,
    callback
  );
};

/**
 * @param {!proto.marginpb.ReadRateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.marginpb.ReadRateResponse>}
 *     A native promise that resolves to the response
 */
proto.marginpb.RateServicePromiseClient.prototype.readRate = function(
  request,
  metadata
) {
  return this.client_.unaryCall(
    this.hostname_ + '/marginpb.RateService/ReadRate',
    request,
    metadata || {},
    methodDescriptor_RateService_ReadRate
  );
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.marginpb.DeleteRateRequest,
 *   !proto.marginpb.DeleteRateResponse>}
 */
const methodDescriptor_RateService_DeleteRate = new grpc.web.MethodDescriptor(
  '/marginpb.RateService/DeleteRate',
  grpc.web.MethodType.UNARY,
  proto.marginpb.DeleteRateRequest,
  proto.marginpb.DeleteRateResponse,
  /**
   * @param {!proto.marginpb.DeleteRateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.marginpb.DeleteRateResponse.deserializeBinary
);

/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.marginpb.DeleteRateRequest,
 *   !proto.marginpb.DeleteRateResponse>}
 */
const methodInfo_RateService_DeleteRate = new grpc.web.AbstractClientBase.MethodInfo(
  proto.marginpb.DeleteRateResponse,
  /**
   * @param {!proto.marginpb.DeleteRateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.marginpb.DeleteRateResponse.deserializeBinary
);

/**
 * @param {!proto.marginpb.DeleteRateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.marginpb.DeleteRateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.marginpb.DeleteRateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.marginpb.RateServiceClient.prototype.deleteRate = function(
  request,
  metadata,
  callback
) {
  return this.client_.rpcCall(
    this.hostname_ + '/marginpb.RateService/DeleteRate',
    request,
    metadata || {},
    methodDescriptor_RateService_DeleteRate,
    callback
  );
};

/**
 * @param {!proto.marginpb.DeleteRateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.marginpb.DeleteRateResponse>}
 *     A native promise that resolves to the response
 */
proto.marginpb.RateServicePromiseClient.prototype.deleteRate = function(
  request,
  metadata
) {
  return this.client_.unaryCall(
    this.hostname_ + '/marginpb.RateService/DeleteRate',
    request,
    metadata || {},
    methodDescriptor_RateService_DeleteRate
  );
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.marginpb.ListRateRequest,
 *   !proto.marginpb.ListRateResponse>}
 */
const methodDescriptor_RateService_ListRate = new grpc.web.MethodDescriptor(
  '/marginpb.RateService/ListRate',
  grpc.web.MethodType.UNARY,
  proto.marginpb.ListRateRequest,
  proto.marginpb.ListRateResponse,
  /**
   * @param {!proto.marginpb.ListRateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.marginpb.ListRateResponse.deserializeBinary
);

/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.marginpb.ListRateRequest,
 *   !proto.marginpb.ListRateResponse>}
 */
const methodInfo_RateService_ListRate = new grpc.web.AbstractClientBase.MethodInfo(
  proto.marginpb.ListRateResponse,
  /**
   * @param {!proto.marginpb.ListRateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.marginpb.ListRateResponse.deserializeBinary
);

/**
 * @param {!proto.marginpb.ListRateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.marginpb.ListRateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.marginpb.ListRateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.marginpb.RateServiceClient.prototype.listRate = function(
  request,
  metadata,
  callback
) {
  return this.client_.rpcCall(
    this.hostname_ + '/marginpb.RateService/ListRate',
    request,
    metadata || {},
    methodDescriptor_RateService_ListRate,
    callback
  );
};

/**
 * @param {!proto.marginpb.ListRateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.marginpb.ListRateResponse>}
 *     A native promise that resolves to the response
 */
proto.marginpb.RateServicePromiseClient.prototype.listRate = function(
  request,
  metadata
) {
  return this.client_.unaryCall(
    this.hostname_ + '/marginpb.RateService/ListRate',
    request,
    metadata || {},
    methodDescriptor_RateService_ListRate
  );
};

module.exports = proto.marginpb;
