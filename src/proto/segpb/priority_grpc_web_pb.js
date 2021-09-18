/**
 * @fileoverview gRPC-Web generated client stub for segpb
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
proto.segpb = require('./priority_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.segpb.PriorityServiceClient =
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
proto.segpb.PriorityServicePromiseClient =
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
 *   !proto.segpb.CreatePriorityRequest,
 *   !proto.segpb.CreatePriorityResponse>}
 */
const methodDescriptor_PriorityService_CreatePriority = new grpc.web.MethodDescriptor(
  '/segpb.PriorityService/CreatePriority',
  grpc.web.MethodType.UNARY,
  proto.segpb.CreatePriorityRequest,
  proto.segpb.CreatePriorityResponse,
  /**
   * @param {!proto.segpb.CreatePriorityRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.segpb.CreatePriorityResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.segpb.CreatePriorityRequest,
 *   !proto.segpb.CreatePriorityResponse>}
 */
const methodInfo_PriorityService_CreatePriority = new grpc.web.AbstractClientBase.MethodInfo(
  proto.segpb.CreatePriorityResponse,
  /**
   * @param {!proto.segpb.CreatePriorityRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.segpb.CreatePriorityResponse.deserializeBinary
);


/**
 * @param {!proto.segpb.CreatePriorityRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.segpb.CreatePriorityResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.segpb.CreatePriorityResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.segpb.PriorityServiceClient.prototype.createPriority =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/segpb.PriorityService/CreatePriority',
      request,
      metadata || {},
      methodDescriptor_PriorityService_CreatePriority,
      callback);
};


/**
 * @param {!proto.segpb.CreatePriorityRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.segpb.CreatePriorityResponse>}
 *     A native promise that resolves to the response
 */
proto.segpb.PriorityServicePromiseClient.prototype.createPriority =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/segpb.PriorityService/CreatePriority',
      request,
      metadata || {},
      methodDescriptor_PriorityService_CreatePriority);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.segpb.ReadPriorityRequest,
 *   !proto.segpb.ReadPriorityResponse>}
 */
const methodDescriptor_PriorityService_ReadPriority = new grpc.web.MethodDescriptor(
  '/segpb.PriorityService/ReadPriority',
  grpc.web.MethodType.UNARY,
  proto.segpb.ReadPriorityRequest,
  proto.segpb.ReadPriorityResponse,
  /**
   * @param {!proto.segpb.ReadPriorityRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.segpb.ReadPriorityResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.segpb.ReadPriorityRequest,
 *   !proto.segpb.ReadPriorityResponse>}
 */
const methodInfo_PriorityService_ReadPriority = new grpc.web.AbstractClientBase.MethodInfo(
  proto.segpb.ReadPriorityResponse,
  /**
   * @param {!proto.segpb.ReadPriorityRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.segpb.ReadPriorityResponse.deserializeBinary
);


/**
 * @param {!proto.segpb.ReadPriorityRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.segpb.ReadPriorityResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.segpb.ReadPriorityResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.segpb.PriorityServiceClient.prototype.readPriority =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/segpb.PriorityService/ReadPriority',
      request,
      metadata || {},
      methodDescriptor_PriorityService_ReadPriority,
      callback);
};


/**
 * @param {!proto.segpb.ReadPriorityRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.segpb.ReadPriorityResponse>}
 *     A native promise that resolves to the response
 */
proto.segpb.PriorityServicePromiseClient.prototype.readPriority =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/segpb.PriorityService/ReadPriority',
      request,
      metadata || {},
      methodDescriptor_PriorityService_ReadPriority);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.segpb.UpdatePriorityRequest,
 *   !proto.segpb.UpdatePriorityResponse>}
 */
const methodDescriptor_PriorityService_UpdatePriority = new grpc.web.MethodDescriptor(
  '/segpb.PriorityService/UpdatePriority',
  grpc.web.MethodType.UNARY,
  proto.segpb.UpdatePriorityRequest,
  proto.segpb.UpdatePriorityResponse,
  /**
   * @param {!proto.segpb.UpdatePriorityRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.segpb.UpdatePriorityResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.segpb.UpdatePriorityRequest,
 *   !proto.segpb.UpdatePriorityResponse>}
 */
const methodInfo_PriorityService_UpdatePriority = new grpc.web.AbstractClientBase.MethodInfo(
  proto.segpb.UpdatePriorityResponse,
  /**
   * @param {!proto.segpb.UpdatePriorityRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.segpb.UpdatePriorityResponse.deserializeBinary
);


/**
 * @param {!proto.segpb.UpdatePriorityRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.segpb.UpdatePriorityResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.segpb.UpdatePriorityResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.segpb.PriorityServiceClient.prototype.updatePriority =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/segpb.PriorityService/UpdatePriority',
      request,
      metadata || {},
      methodDescriptor_PriorityService_UpdatePriority,
      callback);
};


/**
 * @param {!proto.segpb.UpdatePriorityRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.segpb.UpdatePriorityResponse>}
 *     A native promise that resolves to the response
 */
proto.segpb.PriorityServicePromiseClient.prototype.updatePriority =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/segpb.PriorityService/UpdatePriority',
      request,
      metadata || {},
      methodDescriptor_PriorityService_UpdatePriority);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.segpb.DeletePriorityRequest,
 *   !proto.segpb.DeletePriorityResponse>}
 */
const methodDescriptor_PriorityService_DeletePriority = new grpc.web.MethodDescriptor(
  '/segpb.PriorityService/DeletePriority',
  grpc.web.MethodType.UNARY,
  proto.segpb.DeletePriorityRequest,
  proto.segpb.DeletePriorityResponse,
  /**
   * @param {!proto.segpb.DeletePriorityRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.segpb.DeletePriorityResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.segpb.DeletePriorityRequest,
 *   !proto.segpb.DeletePriorityResponse>}
 */
const methodInfo_PriorityService_DeletePriority = new grpc.web.AbstractClientBase.MethodInfo(
  proto.segpb.DeletePriorityResponse,
  /**
   * @param {!proto.segpb.DeletePriorityRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.segpb.DeletePriorityResponse.deserializeBinary
);


/**
 * @param {!proto.segpb.DeletePriorityRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.segpb.DeletePriorityResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.segpb.DeletePriorityResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.segpb.PriorityServiceClient.prototype.deletePriority =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/segpb.PriorityService/DeletePriority',
      request,
      metadata || {},
      methodDescriptor_PriorityService_DeletePriority,
      callback);
};


/**
 * @param {!proto.segpb.DeletePriorityRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.segpb.DeletePriorityResponse>}
 *     A native promise that resolves to the response
 */
proto.segpb.PriorityServicePromiseClient.prototype.deletePriority =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/segpb.PriorityService/DeletePriority',
      request,
      metadata || {},
      methodDescriptor_PriorityService_DeletePriority);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.segpb.ListPriorityRequest,
 *   !proto.segpb.ListPriorityResponse>}
 */
const methodDescriptor_PriorityService_ListPriority = new grpc.web.MethodDescriptor(
  '/segpb.PriorityService/ListPriority',
  grpc.web.MethodType.UNARY,
  proto.segpb.ListPriorityRequest,
  proto.segpb.ListPriorityResponse,
  /**
   * @param {!proto.segpb.ListPriorityRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.segpb.ListPriorityResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.segpb.ListPriorityRequest,
 *   !proto.segpb.ListPriorityResponse>}
 */
const methodInfo_PriorityService_ListPriority = new grpc.web.AbstractClientBase.MethodInfo(
  proto.segpb.ListPriorityResponse,
  /**
   * @param {!proto.segpb.ListPriorityRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.segpb.ListPriorityResponse.deserializeBinary
);


/**
 * @param {!proto.segpb.ListPriorityRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.segpb.ListPriorityResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.segpb.ListPriorityResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.segpb.PriorityServiceClient.prototype.listPriority =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/segpb.PriorityService/ListPriority',
      request,
      metadata || {},
      methodDescriptor_PriorityService_ListPriority,
      callback);
};


/**
 * @param {!proto.segpb.ListPriorityRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.segpb.ListPriorityResponse>}
 *     A native promise that resolves to the response
 */
proto.segpb.PriorityServicePromiseClient.prototype.listPriority =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/segpb.PriorityService/ListPriority',
      request,
      metadata || {},
      methodDescriptor_PriorityService_ListPriority);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.segpb.MaxPriorityNoRequest,
 *   !proto.segpb.MaxPriorityNoResponse>}
 */
const methodDescriptor_PriorityService_GetMaxPriorityNo = new grpc.web.MethodDescriptor(
  '/segpb.PriorityService/GetMaxPriorityNo',
  grpc.web.MethodType.UNARY,
  proto.segpb.MaxPriorityNoRequest,
  proto.segpb.MaxPriorityNoResponse,
  /**
   * @param {!proto.segpb.MaxPriorityNoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.segpb.MaxPriorityNoResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.segpb.MaxPriorityNoRequest,
 *   !proto.segpb.MaxPriorityNoResponse>}
 */
const methodInfo_PriorityService_GetMaxPriorityNo = new grpc.web.AbstractClientBase.MethodInfo(
  proto.segpb.MaxPriorityNoResponse,
  /**
   * @param {!proto.segpb.MaxPriorityNoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.segpb.MaxPriorityNoResponse.deserializeBinary
);


/**
 * @param {!proto.segpb.MaxPriorityNoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.segpb.MaxPriorityNoResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.segpb.MaxPriorityNoResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.segpb.PriorityServiceClient.prototype.getMaxPriorityNo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/segpb.PriorityService/GetMaxPriorityNo',
      request,
      metadata || {},
      methodDescriptor_PriorityService_GetMaxPriorityNo,
      callback);
};


/**
 * @param {!proto.segpb.MaxPriorityNoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.segpb.MaxPriorityNoResponse>}
 *     A native promise that resolves to the response
 */
proto.segpb.PriorityServicePromiseClient.prototype.getMaxPriorityNo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/segpb.PriorityService/GetMaxPriorityNo',
      request,
      metadata || {},
      methodDescriptor_PriorityService_GetMaxPriorityNo);
};


module.exports = proto.segpb;

