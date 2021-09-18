/**
 * @fileoverview gRPC-Web generated client stub for assetpb
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
proto.assetpb = require('./price_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.assetpb.PriceServiceClient =
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
proto.assetpb.PriceServicePromiseClient =
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
 *   !proto.assetpb.ListPriceRequest,
 *   !proto.assetpb.ListPriceResponse>}
 */
const methodDescriptor_PriceService_ListPrice = new grpc.web.MethodDescriptor(
  '/assetpb.PriceService/ListPrice',
  grpc.web.MethodType.UNARY,
  proto.assetpb.ListPriceRequest,
  proto.assetpb.ListPriceResponse,
  /**
   * @param {!proto.assetpb.ListPriceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.assetpb.ListPriceResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.assetpb.ListPriceRequest,
 *   !proto.assetpb.ListPriceResponse>}
 */
const methodInfo_PriceService_ListPrice = new grpc.web.AbstractClientBase.MethodInfo(
  proto.assetpb.ListPriceResponse,
  /**
   * @param {!proto.assetpb.ListPriceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.assetpb.ListPriceResponse.deserializeBinary
);


/**
 * @param {!proto.assetpb.ListPriceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.assetpb.ListPriceResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.assetpb.ListPriceResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.assetpb.PriceServiceClient.prototype.listPrice =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/assetpb.PriceService/ListPrice',
      request,
      metadata || {},
      methodDescriptor_PriceService_ListPrice,
      callback);
};


/**
 * @param {!proto.assetpb.ListPriceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.assetpb.ListPriceResponse>}
 *     A native promise that resolves to the response
 */
proto.assetpb.PriceServicePromiseClient.prototype.listPrice =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/assetpb.PriceService/ListPrice',
      request,
      metadata || {},
      methodDescriptor_PriceService_ListPrice);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.assetpb.Price,
 *   !proto.assetpb.CreatePriceResponse>}
 */
const methodDescriptor_PriceService_CreatePrice = new grpc.web.MethodDescriptor(
  '/assetpb.PriceService/CreatePrice',
  grpc.web.MethodType.UNARY,
  proto.assetpb.Price,
  proto.assetpb.CreatePriceResponse,
  /**
   * @param {!proto.assetpb.Price} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.assetpb.CreatePriceResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.assetpb.Price,
 *   !proto.assetpb.CreatePriceResponse>}
 */
const methodInfo_PriceService_CreatePrice = new grpc.web.AbstractClientBase.MethodInfo(
  proto.assetpb.CreatePriceResponse,
  /**
   * @param {!proto.assetpb.Price} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.assetpb.CreatePriceResponse.deserializeBinary
);


/**
 * @param {!proto.assetpb.Price} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.assetpb.CreatePriceResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.assetpb.CreatePriceResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.assetpb.PriceServiceClient.prototype.createPrice =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/assetpb.PriceService/CreatePrice',
      request,
      metadata || {},
      methodDescriptor_PriceService_CreatePrice,
      callback);
};


/**
 * @param {!proto.assetpb.Price} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.assetpb.CreatePriceResponse>}
 *     A native promise that resolves to the response
 */
proto.assetpb.PriceServicePromiseClient.prototype.createPrice =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/assetpb.PriceService/CreatePrice',
      request,
      metadata || {},
      methodDescriptor_PriceService_CreatePrice);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.assetpb.Price,
 *   !proto.assetpb.EditPriceResponse>}
 */
const methodDescriptor_PriceService_EditPrice = new grpc.web.MethodDescriptor(
  '/assetpb.PriceService/EditPrice',
  grpc.web.MethodType.UNARY,
  proto.assetpb.Price,
  proto.assetpb.EditPriceResponse,
  /**
   * @param {!proto.assetpb.Price} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.assetpb.EditPriceResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.assetpb.Price,
 *   !proto.assetpb.EditPriceResponse>}
 */
const methodInfo_PriceService_EditPrice = new grpc.web.AbstractClientBase.MethodInfo(
  proto.assetpb.EditPriceResponse,
  /**
   * @param {!proto.assetpb.Price} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.assetpb.EditPriceResponse.deserializeBinary
);


/**
 * @param {!proto.assetpb.Price} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.assetpb.EditPriceResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.assetpb.EditPriceResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.assetpb.PriceServiceClient.prototype.editPrice =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/assetpb.PriceService/EditPrice',
      request,
      metadata || {},
      methodDescriptor_PriceService_EditPrice,
      callback);
};


/**
 * @param {!proto.assetpb.Price} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.assetpb.EditPriceResponse>}
 *     A native promise that resolves to the response
 */
proto.assetpb.PriceServicePromiseClient.prototype.editPrice =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/assetpb.PriceService/EditPrice',
      request,
      metadata || {},
      methodDescriptor_PriceService_EditPrice);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.assetpb.DeletePriceRequest,
 *   !proto.assetpb.DeletePriceResponse>}
 */
const methodDescriptor_PriceService_DeletePrice = new grpc.web.MethodDescriptor(
  '/assetpb.PriceService/DeletePrice',
  grpc.web.MethodType.UNARY,
  proto.assetpb.DeletePriceRequest,
  proto.assetpb.DeletePriceResponse,
  /**
   * @param {!proto.assetpb.DeletePriceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.assetpb.DeletePriceResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.assetpb.DeletePriceRequest,
 *   !proto.assetpb.DeletePriceResponse>}
 */
const methodInfo_PriceService_DeletePrice = new grpc.web.AbstractClientBase.MethodInfo(
  proto.assetpb.DeletePriceResponse,
  /**
   * @param {!proto.assetpb.DeletePriceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.assetpb.DeletePriceResponse.deserializeBinary
);


/**
 * @param {!proto.assetpb.DeletePriceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.assetpb.DeletePriceResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.assetpb.DeletePriceResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.assetpb.PriceServiceClient.prototype.deletePrice =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/assetpb.PriceService/DeletePrice',
      request,
      metadata || {},
      methodDescriptor_PriceService_DeletePrice,
      callback);
};


/**
 * @param {!proto.assetpb.DeletePriceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.assetpb.DeletePriceResponse>}
 *     A native promise that resolves to the response
 */
proto.assetpb.PriceServicePromiseClient.prototype.deletePrice =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/assetpb.PriceService/DeletePrice',
      request,
      metadata || {},
      methodDescriptor_PriceService_DeletePrice);
};


module.exports = proto.assetpb;

