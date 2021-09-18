/**
 * @fileoverview gRPC-Web generated client stub for admpb
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var proto_utilspb_pagination_pb = require('../../proto/utilspb/pagination_pb.js')
const proto = {};
proto.admpb = require('./faqs_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.admpb.FaqsServiceClient =
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
proto.admpb.FaqsServicePromiseClient =
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
 *   !proto.admpb.Faqs,
 *   !proto.admpb.CreateFaqsResponse>}
 */
const methodDescriptor_FaqsService_CreateFaqs = new grpc.web.MethodDescriptor(
  '/admpb.FaqsService/CreateFaqs',
  grpc.web.MethodType.UNARY,
  proto.admpb.Faqs,
  proto.admpb.CreateFaqsResponse,
  /**
   * @param {!proto.admpb.Faqs} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admpb.CreateFaqsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.admpb.Faqs,
 *   !proto.admpb.CreateFaqsResponse>}
 */
const methodInfo_FaqsService_CreateFaqs = new grpc.web.AbstractClientBase.MethodInfo(
  proto.admpb.CreateFaqsResponse,
  /**
   * @param {!proto.admpb.Faqs} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admpb.CreateFaqsResponse.deserializeBinary
);


/**
 * @param {!proto.admpb.Faqs} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.admpb.CreateFaqsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.admpb.CreateFaqsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.admpb.FaqsServiceClient.prototype.createFaqs =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/admpb.FaqsService/CreateFaqs',
      request,
      metadata || {},
      methodDescriptor_FaqsService_CreateFaqs,
      callback);
};


/**
 * @param {!proto.admpb.Faqs} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.admpb.CreateFaqsResponse>}
 *     A native promise that resolves to the response
 */
proto.admpb.FaqsServicePromiseClient.prototype.createFaqs =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/admpb.FaqsService/CreateFaqs',
      request,
      metadata || {},
      methodDescriptor_FaqsService_CreateFaqs);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.admpb.Faqs,
 *   !proto.admpb.UpdateFaqsResponse>}
 */
const methodDescriptor_FaqsService_UpdateFaqs = new grpc.web.MethodDescriptor(
  '/admpb.FaqsService/UpdateFaqs',
  grpc.web.MethodType.UNARY,
  proto.admpb.Faqs,
  proto.admpb.UpdateFaqsResponse,
  /**
   * @param {!proto.admpb.Faqs} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admpb.UpdateFaqsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.admpb.Faqs,
 *   !proto.admpb.UpdateFaqsResponse>}
 */
const methodInfo_FaqsService_UpdateFaqs = new grpc.web.AbstractClientBase.MethodInfo(
  proto.admpb.UpdateFaqsResponse,
  /**
   * @param {!proto.admpb.Faqs} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admpb.UpdateFaqsResponse.deserializeBinary
);


/**
 * @param {!proto.admpb.Faqs} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.admpb.UpdateFaqsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.admpb.UpdateFaqsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.admpb.FaqsServiceClient.prototype.updateFaqs =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/admpb.FaqsService/UpdateFaqs',
      request,
      metadata || {},
      methodDescriptor_FaqsService_UpdateFaqs,
      callback);
};


/**
 * @param {!proto.admpb.Faqs} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.admpb.UpdateFaqsResponse>}
 *     A native promise that resolves to the response
 */
proto.admpb.FaqsServicePromiseClient.prototype.updateFaqs =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/admpb.FaqsService/UpdateFaqs',
      request,
      metadata || {},
      methodDescriptor_FaqsService_UpdateFaqs);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.admpb.ReadFaqsRequest,
 *   !proto.admpb.ReadFaqsResponse>}
 */
const methodDescriptor_FaqsService_ReadFaqs = new grpc.web.MethodDescriptor(
  '/admpb.FaqsService/ReadFaqs',
  grpc.web.MethodType.UNARY,
  proto.admpb.ReadFaqsRequest,
  proto.admpb.ReadFaqsResponse,
  /**
   * @param {!proto.admpb.ReadFaqsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admpb.ReadFaqsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.admpb.ReadFaqsRequest,
 *   !proto.admpb.ReadFaqsResponse>}
 */
const methodInfo_FaqsService_ReadFaqs = new grpc.web.AbstractClientBase.MethodInfo(
  proto.admpb.ReadFaqsResponse,
  /**
   * @param {!proto.admpb.ReadFaqsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admpb.ReadFaqsResponse.deserializeBinary
);


/**
 * @param {!proto.admpb.ReadFaqsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.admpb.ReadFaqsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.admpb.ReadFaqsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.admpb.FaqsServiceClient.prototype.readFaqs =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/admpb.FaqsService/ReadFaqs',
      request,
      metadata || {},
      methodDescriptor_FaqsService_ReadFaqs,
      callback);
};


/**
 * @param {!proto.admpb.ReadFaqsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.admpb.ReadFaqsResponse>}
 *     A native promise that resolves to the response
 */
proto.admpb.FaqsServicePromiseClient.prototype.readFaqs =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/admpb.FaqsService/ReadFaqs',
      request,
      metadata || {},
      methodDescriptor_FaqsService_ReadFaqs);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.admpb.DeleteFaqsRequest,
 *   !proto.admpb.DeleteFaqsResponse>}
 */
const methodDescriptor_FaqsService_DeleteFaqs = new grpc.web.MethodDescriptor(
  '/admpb.FaqsService/DeleteFaqs',
  grpc.web.MethodType.UNARY,
  proto.admpb.DeleteFaqsRequest,
  proto.admpb.DeleteFaqsResponse,
  /**
   * @param {!proto.admpb.DeleteFaqsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admpb.DeleteFaqsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.admpb.DeleteFaqsRequest,
 *   !proto.admpb.DeleteFaqsResponse>}
 */
const methodInfo_FaqsService_DeleteFaqs = new grpc.web.AbstractClientBase.MethodInfo(
  proto.admpb.DeleteFaqsResponse,
  /**
   * @param {!proto.admpb.DeleteFaqsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admpb.DeleteFaqsResponse.deserializeBinary
);


/**
 * @param {!proto.admpb.DeleteFaqsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.admpb.DeleteFaqsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.admpb.DeleteFaqsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.admpb.FaqsServiceClient.prototype.deleteFaqs =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/admpb.FaqsService/DeleteFaqs',
      request,
      metadata || {},
      methodDescriptor_FaqsService_DeleteFaqs,
      callback);
};


/**
 * @param {!proto.admpb.DeleteFaqsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.admpb.DeleteFaqsResponse>}
 *     A native promise that resolves to the response
 */
proto.admpb.FaqsServicePromiseClient.prototype.deleteFaqs =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/admpb.FaqsService/DeleteFaqs',
      request,
      metadata || {},
      methodDescriptor_FaqsService_DeleteFaqs);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.admpb.ListFaqsRequest,
 *   !proto.admpb.ListFaqsResponse>}
 */
const methodDescriptor_FaqsService_ListFaqs = new grpc.web.MethodDescriptor(
  '/admpb.FaqsService/ListFaqs',
  grpc.web.MethodType.UNARY,
  proto.admpb.ListFaqsRequest,
  proto.admpb.ListFaqsResponse,
  /**
   * @param {!proto.admpb.ListFaqsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admpb.ListFaqsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.admpb.ListFaqsRequest,
 *   !proto.admpb.ListFaqsResponse>}
 */
const methodInfo_FaqsService_ListFaqs = new grpc.web.AbstractClientBase.MethodInfo(
  proto.admpb.ListFaqsResponse,
  /**
   * @param {!proto.admpb.ListFaqsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admpb.ListFaqsResponse.deserializeBinary
);


/**
 * @param {!proto.admpb.ListFaqsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.admpb.ListFaqsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.admpb.ListFaqsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.admpb.FaqsServiceClient.prototype.listFaqs =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/admpb.FaqsService/ListFaqs',
      request,
      metadata || {},
      methodDescriptor_FaqsService_ListFaqs,
      callback);
};


/**
 * @param {!proto.admpb.ListFaqsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.admpb.ListFaqsResponse>}
 *     A native promise that resolves to the response
 */
proto.admpb.FaqsServicePromiseClient.prototype.listFaqs =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/admpb.FaqsService/ListFaqs',
      request,
      metadata || {},
      methodDescriptor_FaqsService_ListFaqs);
};


module.exports = proto.admpb;

