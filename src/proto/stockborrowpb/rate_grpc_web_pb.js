/**
 * @fileoverview gRPC-Web generated client stub for stockborrowpb
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_type_date_pb = require('../../google/type/date_pb.js')
const proto = {};
proto.stockborrowpb = require('./rate_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.stockborrowpb.RateServiceClient =
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
proto.stockborrowpb.RateServicePromiseClient =
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
 *   !proto.stockborrowpb.ListRateRequest,
 *   !proto.stockborrowpb.ListRateResponse>}
 */
const methodDescriptor_RateService_ListRate = new grpc.web.MethodDescriptor(
  '/stockborrowpb.RateService/ListRate',
  grpc.web.MethodType.UNARY,
  proto.stockborrowpb.ListRateRequest,
  proto.stockborrowpb.ListRateResponse,
  /**
   * @param {!proto.stockborrowpb.ListRateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.stockborrowpb.ListRateResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.stockborrowpb.ListRateRequest,
 *   !proto.stockborrowpb.ListRateResponse>}
 */
const methodInfo_RateService_ListRate = new grpc.web.AbstractClientBase.MethodInfo(
  proto.stockborrowpb.ListRateResponse,
  /**
   * @param {!proto.stockborrowpb.ListRateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.stockborrowpb.ListRateResponse.deserializeBinary
);


/**
 * @param {!proto.stockborrowpb.ListRateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.stockborrowpb.ListRateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.stockborrowpb.ListRateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.stockborrowpb.RateServiceClient.prototype.listRate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/stockborrowpb.RateService/ListRate',
      request,
      metadata || {},
      methodDescriptor_RateService_ListRate,
      callback);
};


/**
 * @param {!proto.stockborrowpb.ListRateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.stockborrowpb.ListRateResponse>}
 *     Promise that resolves to the response
 */
proto.stockborrowpb.RateServicePromiseClient.prototype.listRate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/stockborrowpb.RateService/ListRate',
      request,
      metadata || {},
      methodDescriptor_RateService_ListRate);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.stockborrowpb.Rate,
 *   !proto.stockborrowpb.CreateRateResponse>}
 */
const methodDescriptor_RateService_CreateRate = new grpc.web.MethodDescriptor(
  '/stockborrowpb.RateService/CreateRate',
  grpc.web.MethodType.UNARY,
  proto.stockborrowpb.Rate,
  proto.stockborrowpb.CreateRateResponse,
  /**
   * @param {!proto.stockborrowpb.Rate} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.stockborrowpb.CreateRateResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.stockborrowpb.Rate,
 *   !proto.stockborrowpb.CreateRateResponse>}
 */
const methodInfo_RateService_CreateRate = new grpc.web.AbstractClientBase.MethodInfo(
  proto.stockborrowpb.CreateRateResponse,
  /**
   * @param {!proto.stockborrowpb.Rate} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.stockborrowpb.CreateRateResponse.deserializeBinary
);


/**
 * @param {!proto.stockborrowpb.Rate} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.stockborrowpb.CreateRateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.stockborrowpb.CreateRateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.stockborrowpb.RateServiceClient.prototype.createRate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/stockborrowpb.RateService/CreateRate',
      request,
      metadata || {},
      methodDescriptor_RateService_CreateRate,
      callback);
};


/**
 * @param {!proto.stockborrowpb.Rate} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.stockborrowpb.CreateRateResponse>}
 *     Promise that resolves to the response
 */
proto.stockborrowpb.RateServicePromiseClient.prototype.createRate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/stockborrowpb.RateService/CreateRate',
      request,
      metadata || {},
      methodDescriptor_RateService_CreateRate);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.stockborrowpb.DeleteRateRequest,
 *   !proto.stockborrowpb.DeleteRateResponse>}
 */
const methodDescriptor_RateService_DeleteRate = new grpc.web.MethodDescriptor(
  '/stockborrowpb.RateService/DeleteRate',
  grpc.web.MethodType.UNARY,
  proto.stockborrowpb.DeleteRateRequest,
  proto.stockborrowpb.DeleteRateResponse,
  /**
   * @param {!proto.stockborrowpb.DeleteRateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.stockborrowpb.DeleteRateResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.stockborrowpb.DeleteRateRequest,
 *   !proto.stockborrowpb.DeleteRateResponse>}
 */
const methodInfo_RateService_DeleteRate = new grpc.web.AbstractClientBase.MethodInfo(
  proto.stockborrowpb.DeleteRateResponse,
  /**
   * @param {!proto.stockborrowpb.DeleteRateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.stockborrowpb.DeleteRateResponse.deserializeBinary
);


/**
 * @param {!proto.stockborrowpb.DeleteRateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.stockborrowpb.DeleteRateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.stockborrowpb.DeleteRateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.stockborrowpb.RateServiceClient.prototype.deleteRate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/stockborrowpb.RateService/DeleteRate',
      request,
      metadata || {},
      methodDescriptor_RateService_DeleteRate,
      callback);
};


/**
 * @param {!proto.stockborrowpb.DeleteRateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.stockborrowpb.DeleteRateResponse>}
 *     Promise that resolves to the response
 */
proto.stockborrowpb.RateServicePromiseClient.prototype.deleteRate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/stockborrowpb.RateService/DeleteRate',
      request,
      metadata || {},
      methodDescriptor_RateService_DeleteRate);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.stockborrowpb.Rate,
 *   !proto.stockborrowpb.UpdateRateResponse>}
 */
const methodDescriptor_RateService_UpdateRate = new grpc.web.MethodDescriptor(
  '/stockborrowpb.RateService/UpdateRate',
  grpc.web.MethodType.UNARY,
  proto.stockborrowpb.Rate,
  proto.stockborrowpb.UpdateRateResponse,
  /**
   * @param {!proto.stockborrowpb.Rate} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.stockborrowpb.UpdateRateResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.stockborrowpb.Rate,
 *   !proto.stockborrowpb.UpdateRateResponse>}
 */
const methodInfo_RateService_UpdateRate = new grpc.web.AbstractClientBase.MethodInfo(
  proto.stockborrowpb.UpdateRateResponse,
  /**
   * @param {!proto.stockborrowpb.Rate} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.stockborrowpb.UpdateRateResponse.deserializeBinary
);


/**
 * @param {!proto.stockborrowpb.Rate} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.stockborrowpb.UpdateRateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.stockborrowpb.UpdateRateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.stockborrowpb.RateServiceClient.prototype.updateRate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/stockborrowpb.RateService/UpdateRate',
      request,
      metadata || {},
      methodDescriptor_RateService_UpdateRate,
      callback);
};


/**
 * @param {!proto.stockborrowpb.Rate} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.stockborrowpb.UpdateRateResponse>}
 *     Promise that resolves to the response
 */
proto.stockborrowpb.RateServicePromiseClient.prototype.updateRate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/stockborrowpb.RateService/UpdateRate',
      request,
      metadata || {},
      methodDescriptor_RateService_UpdateRate);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.stockborrowpb.ListRateAuditRequest,
 *   !proto.stockborrowpb.ListRateAuditResponse>}
 */
const methodDescriptor_RateService_ListRateAudit = new grpc.web.MethodDescriptor(
  '/stockborrowpb.RateService/ListRateAudit',
  grpc.web.MethodType.UNARY,
  proto.stockborrowpb.ListRateAuditRequest,
  proto.stockborrowpb.ListRateAuditResponse,
  /**
   * @param {!proto.stockborrowpb.ListRateAuditRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.stockborrowpb.ListRateAuditResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.stockborrowpb.ListRateAuditRequest,
 *   !proto.stockborrowpb.ListRateAuditResponse>}
 */
const methodInfo_RateService_ListRateAudit = new grpc.web.AbstractClientBase.MethodInfo(
  proto.stockborrowpb.ListRateAuditResponse,
  /**
   * @param {!proto.stockborrowpb.ListRateAuditRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.stockborrowpb.ListRateAuditResponse.deserializeBinary
);


/**
 * @param {!proto.stockborrowpb.ListRateAuditRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.stockborrowpb.ListRateAuditResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.stockborrowpb.ListRateAuditResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.stockborrowpb.RateServiceClient.prototype.listRateAudit =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/stockborrowpb.RateService/ListRateAudit',
      request,
      metadata || {},
      methodDescriptor_RateService_ListRateAudit,
      callback);
};


/**
 * @param {!proto.stockborrowpb.ListRateAuditRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.stockborrowpb.ListRateAuditResponse>}
 *     Promise that resolves to the response
 */
proto.stockborrowpb.RateServicePromiseClient.prototype.listRateAudit =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/stockborrowpb.RateService/ListRateAudit',
      request,
      metadata || {},
      methodDescriptor_RateService_ListRateAudit);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.stockborrowpb.ImportRequest,
 *   !proto.stockborrowpb.EmptyResponse>}
 */
const methodDescriptor_RateService_ImportAnetics = new grpc.web.MethodDescriptor(
  '/stockborrowpb.RateService/ImportAnetics',
  grpc.web.MethodType.UNARY,
  proto.stockborrowpb.ImportRequest,
  proto.stockborrowpb.EmptyResponse,
  /**
   * @param {!proto.stockborrowpb.ImportRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.stockborrowpb.EmptyResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.stockborrowpb.ImportRequest,
 *   !proto.stockborrowpb.EmptyResponse>}
 */
const methodInfo_RateService_ImportAnetics = new grpc.web.AbstractClientBase.MethodInfo(
  proto.stockborrowpb.EmptyResponse,
  /**
   * @param {!proto.stockborrowpb.ImportRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.stockborrowpb.EmptyResponse.deserializeBinary
);


/**
 * @param {!proto.stockborrowpb.ImportRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.stockborrowpb.EmptyResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.stockborrowpb.EmptyResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.stockborrowpb.RateServiceClient.prototype.importAnetics =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/stockborrowpb.RateService/ImportAnetics',
      request,
      metadata || {},
      methodDescriptor_RateService_ImportAnetics,
      callback);
};


/**
 * @param {!proto.stockborrowpb.ImportRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.stockborrowpb.EmptyResponse>}
 *     Promise that resolves to the response
 */
proto.stockborrowpb.RateServicePromiseClient.prototype.importAnetics =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/stockborrowpb.RateService/ImportAnetics',
      request,
      metadata || {},
      methodDescriptor_RateService_ImportAnetics);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.stockborrowpb.ImportRequest,
 *   !proto.stockborrowpb.ImportResponse>}
 */
const methodDescriptor_RateService_ImportLendingPit = new grpc.web.MethodDescriptor(
  '/stockborrowpb.RateService/ImportLendingPit',
  grpc.web.MethodType.UNARY,
  proto.stockborrowpb.ImportRequest,
  proto.stockborrowpb.ImportResponse,
  /**
   * @param {!proto.stockborrowpb.ImportRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.stockborrowpb.ImportResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.stockborrowpb.ImportRequest,
 *   !proto.stockborrowpb.ImportResponse>}
 */
const methodInfo_RateService_ImportLendingPit = new grpc.web.AbstractClientBase.MethodInfo(
  proto.stockborrowpb.ImportResponse,
  /**
   * @param {!proto.stockborrowpb.ImportRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.stockborrowpb.ImportResponse.deserializeBinary
);


/**
 * @param {!proto.stockborrowpb.ImportRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.stockborrowpb.ImportResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.stockborrowpb.ImportResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.stockborrowpb.RateServiceClient.prototype.importLendingPit =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/stockborrowpb.RateService/ImportLendingPit',
      request,
      metadata || {},
      methodDescriptor_RateService_ImportLendingPit,
      callback);
};


/**
 * @param {!proto.stockborrowpb.ImportRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.stockborrowpb.ImportResponse>}
 *     Promise that resolves to the response
 */
proto.stockborrowpb.RateServicePromiseClient.prototype.importLendingPit =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/stockborrowpb.RateService/ImportLendingPit',
      request,
      metadata || {},
      methodDescriptor_RateService_ImportLendingPit);
};


module.exports = proto.stockborrowpb;

