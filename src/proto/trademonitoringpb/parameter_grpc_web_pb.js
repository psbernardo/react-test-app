/**
 * @fileoverview gRPC-Web generated client stub for trademonitoringpb
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var proto_utilspb_pagination_pb = require('../../proto/utilspb/pagination_pb.js')

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')
const proto = {};
proto.trademonitoringpb = require('./parameter_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.trademonitoringpb.ParameterServiceClient =
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
proto.trademonitoringpb.ParameterServicePromiseClient =
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
 *   !proto.trademonitoringpb.Parameter,
 *   !proto.trademonitoringpb.CreateParameterResponse>}
 */
const methodDescriptor_ParameterService_CreateParameter = new grpc.web.MethodDescriptor(
  '/trademonitoringpb.ParameterService/CreateParameter',
  grpc.web.MethodType.UNARY,
  proto.trademonitoringpb.Parameter,
  proto.trademonitoringpb.CreateParameterResponse,
  /**
   * @param {!proto.trademonitoringpb.Parameter} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.trademonitoringpb.CreateParameterResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.trademonitoringpb.Parameter,
 *   !proto.trademonitoringpb.CreateParameterResponse>}
 */
const methodInfo_ParameterService_CreateParameter = new grpc.web.AbstractClientBase.MethodInfo(
  proto.trademonitoringpb.CreateParameterResponse,
  /**
   * @param {!proto.trademonitoringpb.Parameter} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.trademonitoringpb.CreateParameterResponse.deserializeBinary
);


/**
 * @param {!proto.trademonitoringpb.Parameter} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.trademonitoringpb.CreateParameterResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.trademonitoringpb.CreateParameterResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.trademonitoringpb.ParameterServiceClient.prototype.createParameter =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/trademonitoringpb.ParameterService/CreateParameter',
      request,
      metadata || {},
      methodDescriptor_ParameterService_CreateParameter,
      callback);
};


/**
 * @param {!proto.trademonitoringpb.Parameter} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.trademonitoringpb.CreateParameterResponse>}
 *     Promise that resolves to the response
 */
proto.trademonitoringpb.ParameterServicePromiseClient.prototype.createParameter =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/trademonitoringpb.ParameterService/CreateParameter',
      request,
      metadata || {},
      methodDescriptor_ParameterService_CreateParameter);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.trademonitoringpb.Parameter,
 *   !proto.trademonitoringpb.UpdateParameterResponse>}
 */
const methodDescriptor_ParameterService_UpdateParameter = new grpc.web.MethodDescriptor(
  '/trademonitoringpb.ParameterService/UpdateParameter',
  grpc.web.MethodType.UNARY,
  proto.trademonitoringpb.Parameter,
  proto.trademonitoringpb.UpdateParameterResponse,
  /**
   * @param {!proto.trademonitoringpb.Parameter} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.trademonitoringpb.UpdateParameterResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.trademonitoringpb.Parameter,
 *   !proto.trademonitoringpb.UpdateParameterResponse>}
 */
const methodInfo_ParameterService_UpdateParameter = new grpc.web.AbstractClientBase.MethodInfo(
  proto.trademonitoringpb.UpdateParameterResponse,
  /**
   * @param {!proto.trademonitoringpb.Parameter} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.trademonitoringpb.UpdateParameterResponse.deserializeBinary
);


/**
 * @param {!proto.trademonitoringpb.Parameter} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.trademonitoringpb.UpdateParameterResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.trademonitoringpb.UpdateParameterResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.trademonitoringpb.ParameterServiceClient.prototype.updateParameter =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/trademonitoringpb.ParameterService/UpdateParameter',
      request,
      metadata || {},
      methodDescriptor_ParameterService_UpdateParameter,
      callback);
};


/**
 * @param {!proto.trademonitoringpb.Parameter} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.trademonitoringpb.UpdateParameterResponse>}
 *     Promise that resolves to the response
 */
proto.trademonitoringpb.ParameterServicePromiseClient.prototype.updateParameter =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/trademonitoringpb.ParameterService/UpdateParameter',
      request,
      metadata || {},
      methodDescriptor_ParameterService_UpdateParameter);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.trademonitoringpb.ReadParameterRequest,
 *   !proto.trademonitoringpb.ReadParameterResponse>}
 */
const methodDescriptor_ParameterService_ReadParameter = new grpc.web.MethodDescriptor(
  '/trademonitoringpb.ParameterService/ReadParameter',
  grpc.web.MethodType.UNARY,
  proto.trademonitoringpb.ReadParameterRequest,
  proto.trademonitoringpb.ReadParameterResponse,
  /**
   * @param {!proto.trademonitoringpb.ReadParameterRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.trademonitoringpb.ReadParameterResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.trademonitoringpb.ReadParameterRequest,
 *   !proto.trademonitoringpb.ReadParameterResponse>}
 */
const methodInfo_ParameterService_ReadParameter = new grpc.web.AbstractClientBase.MethodInfo(
  proto.trademonitoringpb.ReadParameterResponse,
  /**
   * @param {!proto.trademonitoringpb.ReadParameterRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.trademonitoringpb.ReadParameterResponse.deserializeBinary
);


/**
 * @param {!proto.trademonitoringpb.ReadParameterRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.trademonitoringpb.ReadParameterResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.trademonitoringpb.ReadParameterResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.trademonitoringpb.ParameterServiceClient.prototype.readParameter =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/trademonitoringpb.ParameterService/ReadParameter',
      request,
      metadata || {},
      methodDescriptor_ParameterService_ReadParameter,
      callback);
};


/**
 * @param {!proto.trademonitoringpb.ReadParameterRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.trademonitoringpb.ReadParameterResponse>}
 *     Promise that resolves to the response
 */
proto.trademonitoringpb.ParameterServicePromiseClient.prototype.readParameter =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/trademonitoringpb.ParameterService/ReadParameter',
      request,
      metadata || {},
      methodDescriptor_ParameterService_ReadParameter);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.trademonitoringpb.DeleteParameterRequest,
 *   !proto.trademonitoringpb.DeleteParameterResponse>}
 */
const methodDescriptor_ParameterService_DeleteParameter = new grpc.web.MethodDescriptor(
  '/trademonitoringpb.ParameterService/DeleteParameter',
  grpc.web.MethodType.UNARY,
  proto.trademonitoringpb.DeleteParameterRequest,
  proto.trademonitoringpb.DeleteParameterResponse,
  /**
   * @param {!proto.trademonitoringpb.DeleteParameterRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.trademonitoringpb.DeleteParameterResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.trademonitoringpb.DeleteParameterRequest,
 *   !proto.trademonitoringpb.DeleteParameterResponse>}
 */
const methodInfo_ParameterService_DeleteParameter = new grpc.web.AbstractClientBase.MethodInfo(
  proto.trademonitoringpb.DeleteParameterResponse,
  /**
   * @param {!proto.trademonitoringpb.DeleteParameterRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.trademonitoringpb.DeleteParameterResponse.deserializeBinary
);


/**
 * @param {!proto.trademonitoringpb.DeleteParameterRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.trademonitoringpb.DeleteParameterResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.trademonitoringpb.DeleteParameterResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.trademonitoringpb.ParameterServiceClient.prototype.deleteParameter =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/trademonitoringpb.ParameterService/DeleteParameter',
      request,
      metadata || {},
      methodDescriptor_ParameterService_DeleteParameter,
      callback);
};


/**
 * @param {!proto.trademonitoringpb.DeleteParameterRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.trademonitoringpb.DeleteParameterResponse>}
 *     Promise that resolves to the response
 */
proto.trademonitoringpb.ParameterServicePromiseClient.prototype.deleteParameter =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/trademonitoringpb.ParameterService/DeleteParameter',
      request,
      metadata || {},
      methodDescriptor_ParameterService_DeleteParameter);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.trademonitoringpb.ListParameterRequest,
 *   !proto.trademonitoringpb.ListParameterResponse>}
 */
const methodDescriptor_ParameterService_ListParameter = new grpc.web.MethodDescriptor(
  '/trademonitoringpb.ParameterService/ListParameter',
  grpc.web.MethodType.UNARY,
  proto.trademonitoringpb.ListParameterRequest,
  proto.trademonitoringpb.ListParameterResponse,
  /**
   * @param {!proto.trademonitoringpb.ListParameterRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.trademonitoringpb.ListParameterResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.trademonitoringpb.ListParameterRequest,
 *   !proto.trademonitoringpb.ListParameterResponse>}
 */
const methodInfo_ParameterService_ListParameter = new grpc.web.AbstractClientBase.MethodInfo(
  proto.trademonitoringpb.ListParameterResponse,
  /**
   * @param {!proto.trademonitoringpb.ListParameterRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.trademonitoringpb.ListParameterResponse.deserializeBinary
);


/**
 * @param {!proto.trademonitoringpb.ListParameterRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.trademonitoringpb.ListParameterResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.trademonitoringpb.ListParameterResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.trademonitoringpb.ParameterServiceClient.prototype.listParameter =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/trademonitoringpb.ParameterService/ListParameter',
      request,
      metadata || {},
      methodDescriptor_ParameterService_ListParameter,
      callback);
};


/**
 * @param {!proto.trademonitoringpb.ListParameterRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.trademonitoringpb.ListParameterResponse>}
 *     Promise that resolves to the response
 */
proto.trademonitoringpb.ParameterServicePromiseClient.prototype.listParameter =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/trademonitoringpb.ParameterService/ListParameter',
      request,
      metadata || {},
      methodDescriptor_ParameterService_ListParameter);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.trademonitoringpb.ListParameterAuditRequest,
 *   !proto.trademonitoringpb.ListParameterAuditResponse>}
 */
const methodDescriptor_ParameterService_ListParameterAudit = new grpc.web.MethodDescriptor(
  '/trademonitoringpb.ParameterService/ListParameterAudit',
  grpc.web.MethodType.UNARY,
  proto.trademonitoringpb.ListParameterAuditRequest,
  proto.trademonitoringpb.ListParameterAuditResponse,
  /**
   * @param {!proto.trademonitoringpb.ListParameterAuditRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.trademonitoringpb.ListParameterAuditResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.trademonitoringpb.ListParameterAuditRequest,
 *   !proto.trademonitoringpb.ListParameterAuditResponse>}
 */
const methodInfo_ParameterService_ListParameterAudit = new grpc.web.AbstractClientBase.MethodInfo(
  proto.trademonitoringpb.ListParameterAuditResponse,
  /**
   * @param {!proto.trademonitoringpb.ListParameterAuditRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.trademonitoringpb.ListParameterAuditResponse.deserializeBinary
);


/**
 * @param {!proto.trademonitoringpb.ListParameterAuditRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.trademonitoringpb.ListParameterAuditResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.trademonitoringpb.ListParameterAuditResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.trademonitoringpb.ParameterServiceClient.prototype.listParameterAudit =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/trademonitoringpb.ParameterService/ListParameterAudit',
      request,
      metadata || {},
      methodDescriptor_ParameterService_ListParameterAudit,
      callback);
};


/**
 * @param {!proto.trademonitoringpb.ListParameterAuditRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.trademonitoringpb.ListParameterAuditResponse>}
 *     Promise that resolves to the response
 */
proto.trademonitoringpb.ParameterServicePromiseClient.prototype.listParameterAudit =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/trademonitoringpb.ParameterService/ListParameterAudit',
      request,
      metadata || {},
      methodDescriptor_ParameterService_ListParameterAudit);
};


module.exports = proto.trademonitoringpb;

