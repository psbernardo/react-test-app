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


var google_type_date_pb = require('../../google/type/date_pb.js')
const proto = {};
proto.reportpb = require('./segregationpriority_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.reportpb.SegregationPriorityServiceClient =
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
proto.reportpb.SegregationPriorityServicePromiseClient =
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
 *   !proto.reportpb.CreateSegregationPriorityRequest,
 *   !proto.reportpb.CreateSegregationPriorityResponse>}
 */
const methodDescriptor_SegregationPriorityService_CreateSegregationPriority = new grpc.web.MethodDescriptor(
  '/reportpb.SegregationPriorityService/CreateSegregationPriority',
  grpc.web.MethodType.UNARY,
  proto.reportpb.CreateSegregationPriorityRequest,
  proto.reportpb.CreateSegregationPriorityResponse,
  /**
   * @param {!proto.reportpb.CreateSegregationPriorityRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.reportpb.CreateSegregationPriorityResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.reportpb.CreateSegregationPriorityRequest,
 *   !proto.reportpb.CreateSegregationPriorityResponse>}
 */
const methodInfo_SegregationPriorityService_CreateSegregationPriority = new grpc.web.AbstractClientBase.MethodInfo(
  proto.reportpb.CreateSegregationPriorityResponse,
  /**
   * @param {!proto.reportpb.CreateSegregationPriorityRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.reportpb.CreateSegregationPriorityResponse.deserializeBinary
);


/**
 * @param {!proto.reportpb.CreateSegregationPriorityRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.reportpb.CreateSegregationPriorityResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.reportpb.CreateSegregationPriorityResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.reportpb.SegregationPriorityServiceClient.prototype.createSegregationPriority =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/reportpb.SegregationPriorityService/CreateSegregationPriority',
      request,
      metadata || {},
      methodDescriptor_SegregationPriorityService_CreateSegregationPriority,
      callback);
};


/**
 * @param {!proto.reportpb.CreateSegregationPriorityRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.reportpb.CreateSegregationPriorityResponse>}
 *     A native promise that resolves to the response
 */
proto.reportpb.SegregationPriorityServicePromiseClient.prototype.createSegregationPriority =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/reportpb.SegregationPriorityService/CreateSegregationPriority',
      request,
      metadata || {},
      methodDescriptor_SegregationPriorityService_CreateSegregationPriority);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.reportpb.UpdateSegregationPriorityRequest,
 *   !proto.reportpb.UpdateSegregationPriorityResponse>}
 */
const methodDescriptor_SegregationPriorityService_UpdateSegregationPriority = new grpc.web.MethodDescriptor(
  '/reportpb.SegregationPriorityService/UpdateSegregationPriority',
  grpc.web.MethodType.UNARY,
  proto.reportpb.UpdateSegregationPriorityRequest,
  proto.reportpb.UpdateSegregationPriorityResponse,
  /**
   * @param {!proto.reportpb.UpdateSegregationPriorityRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.reportpb.UpdateSegregationPriorityResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.reportpb.UpdateSegregationPriorityRequest,
 *   !proto.reportpb.UpdateSegregationPriorityResponse>}
 */
const methodInfo_SegregationPriorityService_UpdateSegregationPriority = new grpc.web.AbstractClientBase.MethodInfo(
  proto.reportpb.UpdateSegregationPriorityResponse,
  /**
   * @param {!proto.reportpb.UpdateSegregationPriorityRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.reportpb.UpdateSegregationPriorityResponse.deserializeBinary
);


/**
 * @param {!proto.reportpb.UpdateSegregationPriorityRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.reportpb.UpdateSegregationPriorityResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.reportpb.UpdateSegregationPriorityResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.reportpb.SegregationPriorityServiceClient.prototype.updateSegregationPriority =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/reportpb.SegregationPriorityService/UpdateSegregationPriority',
      request,
      metadata || {},
      methodDescriptor_SegregationPriorityService_UpdateSegregationPriority,
      callback);
};


/**
 * @param {!proto.reportpb.UpdateSegregationPriorityRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.reportpb.UpdateSegregationPriorityResponse>}
 *     A native promise that resolves to the response
 */
proto.reportpb.SegregationPriorityServicePromiseClient.prototype.updateSegregationPriority =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/reportpb.SegregationPriorityService/UpdateSegregationPriority',
      request,
      metadata || {},
      methodDescriptor_SegregationPriorityService_UpdateSegregationPriority);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.reportpb.ReadSegregationPriorityRequest,
 *   !proto.reportpb.ReadSegregationPriorityResponse>}
 */
const methodDescriptor_SegregationPriorityService_ReadSegregationPriority = new grpc.web.MethodDescriptor(
  '/reportpb.SegregationPriorityService/ReadSegregationPriority',
  grpc.web.MethodType.UNARY,
  proto.reportpb.ReadSegregationPriorityRequest,
  proto.reportpb.ReadSegregationPriorityResponse,
  /**
   * @param {!proto.reportpb.ReadSegregationPriorityRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.reportpb.ReadSegregationPriorityResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.reportpb.ReadSegregationPriorityRequest,
 *   !proto.reportpb.ReadSegregationPriorityResponse>}
 */
const methodInfo_SegregationPriorityService_ReadSegregationPriority = new grpc.web.AbstractClientBase.MethodInfo(
  proto.reportpb.ReadSegregationPriorityResponse,
  /**
   * @param {!proto.reportpb.ReadSegregationPriorityRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.reportpb.ReadSegregationPriorityResponse.deserializeBinary
);


/**
 * @param {!proto.reportpb.ReadSegregationPriorityRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.reportpb.ReadSegregationPriorityResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.reportpb.ReadSegregationPriorityResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.reportpb.SegregationPriorityServiceClient.prototype.readSegregationPriority =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/reportpb.SegregationPriorityService/ReadSegregationPriority',
      request,
      metadata || {},
      methodDescriptor_SegregationPriorityService_ReadSegregationPriority,
      callback);
};


/**
 * @param {!proto.reportpb.ReadSegregationPriorityRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.reportpb.ReadSegregationPriorityResponse>}
 *     A native promise that resolves to the response
 */
proto.reportpb.SegregationPriorityServicePromiseClient.prototype.readSegregationPriority =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/reportpb.SegregationPriorityService/ReadSegregationPriority',
      request,
      metadata || {},
      methodDescriptor_SegregationPriorityService_ReadSegregationPriority);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.reportpb.DeleteSegregationPriorityRequest,
 *   !proto.reportpb.DeleteSegregationPriorityResponse>}
 */
const methodDescriptor_SegregationPriorityService_DeleteSegregationPriority = new grpc.web.MethodDescriptor(
  '/reportpb.SegregationPriorityService/DeleteSegregationPriority',
  grpc.web.MethodType.UNARY,
  proto.reportpb.DeleteSegregationPriorityRequest,
  proto.reportpb.DeleteSegregationPriorityResponse,
  /**
   * @param {!proto.reportpb.DeleteSegregationPriorityRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.reportpb.DeleteSegregationPriorityResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.reportpb.DeleteSegregationPriorityRequest,
 *   !proto.reportpb.DeleteSegregationPriorityResponse>}
 */
const methodInfo_SegregationPriorityService_DeleteSegregationPriority = new grpc.web.AbstractClientBase.MethodInfo(
  proto.reportpb.DeleteSegregationPriorityResponse,
  /**
   * @param {!proto.reportpb.DeleteSegregationPriorityRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.reportpb.DeleteSegregationPriorityResponse.deserializeBinary
);


/**
 * @param {!proto.reportpb.DeleteSegregationPriorityRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.reportpb.DeleteSegregationPriorityResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.reportpb.DeleteSegregationPriorityResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.reportpb.SegregationPriorityServiceClient.prototype.deleteSegregationPriority =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/reportpb.SegregationPriorityService/DeleteSegregationPriority',
      request,
      metadata || {},
      methodDescriptor_SegregationPriorityService_DeleteSegregationPriority,
      callback);
};


/**
 * @param {!proto.reportpb.DeleteSegregationPriorityRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.reportpb.DeleteSegregationPriorityResponse>}
 *     A native promise that resolves to the response
 */
proto.reportpb.SegregationPriorityServicePromiseClient.prototype.deleteSegregationPriority =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/reportpb.SegregationPriorityService/DeleteSegregationPriority',
      request,
      metadata || {},
      methodDescriptor_SegregationPriorityService_DeleteSegregationPriority);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.reportpb.ListSegregationPriorityRequest,
 *   !proto.reportpb.ListSegregationPriorityResponse>}
 */
const methodDescriptor_SegregationPriorityService_ListSegregationPriority = new grpc.web.MethodDescriptor(
  '/reportpb.SegregationPriorityService/ListSegregationPriority',
  grpc.web.MethodType.UNARY,
  proto.reportpb.ListSegregationPriorityRequest,
  proto.reportpb.ListSegregationPriorityResponse,
  /**
   * @param {!proto.reportpb.ListSegregationPriorityRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.reportpb.ListSegregationPriorityResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.reportpb.ListSegregationPriorityRequest,
 *   !proto.reportpb.ListSegregationPriorityResponse>}
 */
const methodInfo_SegregationPriorityService_ListSegregationPriority = new grpc.web.AbstractClientBase.MethodInfo(
  proto.reportpb.ListSegregationPriorityResponse,
  /**
   * @param {!proto.reportpb.ListSegregationPriorityRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.reportpb.ListSegregationPriorityResponse.deserializeBinary
);


/**
 * @param {!proto.reportpb.ListSegregationPriorityRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.reportpb.ListSegregationPriorityResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.reportpb.ListSegregationPriorityResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.reportpb.SegregationPriorityServiceClient.prototype.listSegregationPriority =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/reportpb.SegregationPriorityService/ListSegregationPriority',
      request,
      metadata || {},
      methodDescriptor_SegregationPriorityService_ListSegregationPriority,
      callback);
};


/**
 * @param {!proto.reportpb.ListSegregationPriorityRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.reportpb.ListSegregationPriorityResponse>}
 *     A native promise that resolves to the response
 */
proto.reportpb.SegregationPriorityServicePromiseClient.prototype.listSegregationPriority =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/reportpb.SegregationPriorityService/ListSegregationPriority',
      request,
      metadata || {},
      methodDescriptor_SegregationPriorityService_ListSegregationPriority);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.reportpb.MaxPriorityNoRequest,
 *   !proto.reportpb.MaxPriorityNoResponse>}
 */
const methodDescriptor_SegregationPriorityService_GetMaxPriorityNo = new grpc.web.MethodDescriptor(
  '/reportpb.SegregationPriorityService/GetMaxPriorityNo',
  grpc.web.MethodType.UNARY,
  proto.reportpb.MaxPriorityNoRequest,
  proto.reportpb.MaxPriorityNoResponse,
  /**
   * @param {!proto.reportpb.MaxPriorityNoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.reportpb.MaxPriorityNoResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.reportpb.MaxPriorityNoRequest,
 *   !proto.reportpb.MaxPriorityNoResponse>}
 */
const methodInfo_SegregationPriorityService_GetMaxPriorityNo = new grpc.web.AbstractClientBase.MethodInfo(
  proto.reportpb.MaxPriorityNoResponse,
  /**
   * @param {!proto.reportpb.MaxPriorityNoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.reportpb.MaxPriorityNoResponse.deserializeBinary
);


/**
 * @param {!proto.reportpb.MaxPriorityNoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.reportpb.MaxPriorityNoResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.reportpb.MaxPriorityNoResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.reportpb.SegregationPriorityServiceClient.prototype.getMaxPriorityNo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/reportpb.SegregationPriorityService/GetMaxPriorityNo',
      request,
      metadata || {},
      methodDescriptor_SegregationPriorityService_GetMaxPriorityNo,
      callback);
};


/**
 * @param {!proto.reportpb.MaxPriorityNoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.reportpb.MaxPriorityNoResponse>}
 *     A native promise that resolves to the response
 */
proto.reportpb.SegregationPriorityServicePromiseClient.prototype.getMaxPriorityNo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/reportpb.SegregationPriorityService/GetMaxPriorityNo',
      request,
      metadata || {},
      methodDescriptor_SegregationPriorityService_GetMaxPriorityNo);
};


module.exports = proto.reportpb;

