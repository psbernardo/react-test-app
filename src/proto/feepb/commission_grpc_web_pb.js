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


var google_type_date_pb = require('../../google/type/date_pb.js')

var proto_utilspb_pagination_pb = require('../../proto/utilspb/pagination_pb.js')
const proto = {};
proto.feepb = require('./commission_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.feepb.CommissionServiceClient =
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
proto.feepb.CommissionServicePromiseClient =
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
 *   !proto.feepb.Commission,
 *   !proto.feepb.CreateCommissionResponse>}
 */
const methodDescriptor_CommissionService_CreateCommission = new grpc.web.MethodDescriptor(
  '/feepb.CommissionService/CreateCommission',
  grpc.web.MethodType.UNARY,
  proto.feepb.Commission,
  proto.feepb.CreateCommissionResponse,
  /**
   * @param {!proto.feepb.Commission} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.feepb.CreateCommissionResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.feepb.Commission,
 *   !proto.feepb.CreateCommissionResponse>}
 */
const methodInfo_CommissionService_CreateCommission = new grpc.web.AbstractClientBase.MethodInfo(
  proto.feepb.CreateCommissionResponse,
  /**
   * @param {!proto.feepb.Commission} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.feepb.CreateCommissionResponse.deserializeBinary
);


/**
 * @param {!proto.feepb.Commission} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.feepb.CreateCommissionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.feepb.CreateCommissionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.feepb.CommissionServiceClient.prototype.createCommission =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/feepb.CommissionService/CreateCommission',
      request,
      metadata || {},
      methodDescriptor_CommissionService_CreateCommission,
      callback);
};


/**
 * @param {!proto.feepb.Commission} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.feepb.CreateCommissionResponse>}
 *     A native promise that resolves to the response
 */
proto.feepb.CommissionServicePromiseClient.prototype.createCommission =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/feepb.CommissionService/CreateCommission',
      request,
      metadata || {},
      methodDescriptor_CommissionService_CreateCommission);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.feepb.Commission,
 *   !proto.feepb.UpdateCommissionResponse>}
 */
const methodDescriptor_CommissionService_UpdateCommission = new grpc.web.MethodDescriptor(
  '/feepb.CommissionService/UpdateCommission',
  grpc.web.MethodType.UNARY,
  proto.feepb.Commission,
  proto.feepb.UpdateCommissionResponse,
  /**
   * @param {!proto.feepb.Commission} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.feepb.UpdateCommissionResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.feepb.Commission,
 *   !proto.feepb.UpdateCommissionResponse>}
 */
const methodInfo_CommissionService_UpdateCommission = new grpc.web.AbstractClientBase.MethodInfo(
  proto.feepb.UpdateCommissionResponse,
  /**
   * @param {!proto.feepb.Commission} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.feepb.UpdateCommissionResponse.deserializeBinary
);


/**
 * @param {!proto.feepb.Commission} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.feepb.UpdateCommissionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.feepb.UpdateCommissionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.feepb.CommissionServiceClient.prototype.updateCommission =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/feepb.CommissionService/UpdateCommission',
      request,
      metadata || {},
      methodDescriptor_CommissionService_UpdateCommission,
      callback);
};


/**
 * @param {!proto.feepb.Commission} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.feepb.UpdateCommissionResponse>}
 *     A native promise that resolves to the response
 */
proto.feepb.CommissionServicePromiseClient.prototype.updateCommission =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/feepb.CommissionService/UpdateCommission',
      request,
      metadata || {},
      methodDescriptor_CommissionService_UpdateCommission);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.feepb.ReadCommissionRequest,
 *   !proto.feepb.ReadCommissionResponse>}
 */
const methodDescriptor_CommissionService_ReadCommission = new grpc.web.MethodDescriptor(
  '/feepb.CommissionService/ReadCommission',
  grpc.web.MethodType.UNARY,
  proto.feepb.ReadCommissionRequest,
  proto.feepb.ReadCommissionResponse,
  /**
   * @param {!proto.feepb.ReadCommissionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.feepb.ReadCommissionResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.feepb.ReadCommissionRequest,
 *   !proto.feepb.ReadCommissionResponse>}
 */
const methodInfo_CommissionService_ReadCommission = new grpc.web.AbstractClientBase.MethodInfo(
  proto.feepb.ReadCommissionResponse,
  /**
   * @param {!proto.feepb.ReadCommissionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.feepb.ReadCommissionResponse.deserializeBinary
);


/**
 * @param {!proto.feepb.ReadCommissionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.feepb.ReadCommissionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.feepb.ReadCommissionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.feepb.CommissionServiceClient.prototype.readCommission =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/feepb.CommissionService/ReadCommission',
      request,
      metadata || {},
      methodDescriptor_CommissionService_ReadCommission,
      callback);
};


/**
 * @param {!proto.feepb.ReadCommissionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.feepb.ReadCommissionResponse>}
 *     A native promise that resolves to the response
 */
proto.feepb.CommissionServicePromiseClient.prototype.readCommission =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/feepb.CommissionService/ReadCommission',
      request,
      metadata || {},
      methodDescriptor_CommissionService_ReadCommission);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.feepb.DeleteCommissionRequest,
 *   !proto.feepb.DeleteCommissionResponse>}
 */
const methodDescriptor_CommissionService_DeleteCommission = new grpc.web.MethodDescriptor(
  '/feepb.CommissionService/DeleteCommission',
  grpc.web.MethodType.UNARY,
  proto.feepb.DeleteCommissionRequest,
  proto.feepb.DeleteCommissionResponse,
  /**
   * @param {!proto.feepb.DeleteCommissionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.feepb.DeleteCommissionResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.feepb.DeleteCommissionRequest,
 *   !proto.feepb.DeleteCommissionResponse>}
 */
const methodInfo_CommissionService_DeleteCommission = new grpc.web.AbstractClientBase.MethodInfo(
  proto.feepb.DeleteCommissionResponse,
  /**
   * @param {!proto.feepb.DeleteCommissionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.feepb.DeleteCommissionResponse.deserializeBinary
);


/**
 * @param {!proto.feepb.DeleteCommissionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.feepb.DeleteCommissionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.feepb.DeleteCommissionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.feepb.CommissionServiceClient.prototype.deleteCommission =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/feepb.CommissionService/DeleteCommission',
      request,
      metadata || {},
      methodDescriptor_CommissionService_DeleteCommission,
      callback);
};


/**
 * @param {!proto.feepb.DeleteCommissionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.feepb.DeleteCommissionResponse>}
 *     A native promise that resolves to the response
 */
proto.feepb.CommissionServicePromiseClient.prototype.deleteCommission =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/feepb.CommissionService/DeleteCommission',
      request,
      metadata || {},
      methodDescriptor_CommissionService_DeleteCommission);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.feepb.ListCommissionRequest,
 *   !proto.feepb.ListCommissionResponse>}
 */
const methodDescriptor_CommissionService_ListCommission = new grpc.web.MethodDescriptor(
  '/feepb.CommissionService/ListCommission',
  grpc.web.MethodType.UNARY,
  proto.feepb.ListCommissionRequest,
  proto.feepb.ListCommissionResponse,
  /**
   * @param {!proto.feepb.ListCommissionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.feepb.ListCommissionResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.feepb.ListCommissionRequest,
 *   !proto.feepb.ListCommissionResponse>}
 */
const methodInfo_CommissionService_ListCommission = new grpc.web.AbstractClientBase.MethodInfo(
  proto.feepb.ListCommissionResponse,
  /**
   * @param {!proto.feepb.ListCommissionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.feepb.ListCommissionResponse.deserializeBinary
);


/**
 * @param {!proto.feepb.ListCommissionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.feepb.ListCommissionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.feepb.ListCommissionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.feepb.CommissionServiceClient.prototype.listCommission =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/feepb.CommissionService/ListCommission',
      request,
      metadata || {},
      methodDescriptor_CommissionService_ListCommission,
      callback);
};


/**
 * @param {!proto.feepb.ListCommissionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.feepb.ListCommissionResponse>}
 *     A native promise that resolves to the response
 */
proto.feepb.CommissionServicePromiseClient.prototype.listCommission =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/feepb.CommissionService/ListCommission',
      request,
      metadata || {},
      methodDescriptor_CommissionService_ListCommission);
};


module.exports = proto.feepb;

