/**
 * @fileoverview gRPC-Web generated client stub for irspb
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.irspb = require('./taxrate_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.irspb.TaxRateServiceClient =
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
proto.irspb.TaxRateServicePromiseClient =
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
 *   !proto.irspb.ListTaxRateRequest,
 *   !proto.irspb.ListTaxRateResponse>}
 */
const methodDescriptor_TaxRateService_ListTaxRate = new grpc.web.MethodDescriptor(
  '/irspb.TaxRateService/ListTaxRate',
  grpc.web.MethodType.UNARY,
  proto.irspb.ListTaxRateRequest,
  proto.irspb.ListTaxRateResponse,
  /**
   * @param {!proto.irspb.ListTaxRateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irspb.ListTaxRateResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.irspb.ListTaxRateRequest,
 *   !proto.irspb.ListTaxRateResponse>}
 */
const methodInfo_TaxRateService_ListTaxRate = new grpc.web.AbstractClientBase.MethodInfo(
  proto.irspb.ListTaxRateResponse,
  /**
   * @param {!proto.irspb.ListTaxRateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irspb.ListTaxRateResponse.deserializeBinary
);


/**
 * @param {!proto.irspb.ListTaxRateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.irspb.ListTaxRateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.irspb.ListTaxRateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.irspb.TaxRateServiceClient.prototype.listTaxRate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/irspb.TaxRateService/ListTaxRate',
      request,
      metadata || {},
      methodDescriptor_TaxRateService_ListTaxRate,
      callback);
};


/**
 * @param {!proto.irspb.ListTaxRateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.irspb.ListTaxRateResponse>}
 *     A native promise that resolves to the response
 */
proto.irspb.TaxRateServicePromiseClient.prototype.listTaxRate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/irspb.TaxRateService/ListTaxRate',
      request,
      metadata || {},
      methodDescriptor_TaxRateService_ListTaxRate);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.irspb.TaxRate,
 *   !proto.irspb.CreateTaxRateResponse>}
 */
const methodDescriptor_TaxRateService_CreateTaxRate = new grpc.web.MethodDescriptor(
  '/irspb.TaxRateService/CreateTaxRate',
  grpc.web.MethodType.UNARY,
  proto.irspb.TaxRate,
  proto.irspb.CreateTaxRateResponse,
  /**
   * @param {!proto.irspb.TaxRate} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irspb.CreateTaxRateResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.irspb.TaxRate,
 *   !proto.irspb.CreateTaxRateResponse>}
 */
const methodInfo_TaxRateService_CreateTaxRate = new grpc.web.AbstractClientBase.MethodInfo(
  proto.irspb.CreateTaxRateResponse,
  /**
   * @param {!proto.irspb.TaxRate} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irspb.CreateTaxRateResponse.deserializeBinary
);


/**
 * @param {!proto.irspb.TaxRate} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.irspb.CreateTaxRateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.irspb.CreateTaxRateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.irspb.TaxRateServiceClient.prototype.createTaxRate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/irspb.TaxRateService/CreateTaxRate',
      request,
      metadata || {},
      methodDescriptor_TaxRateService_CreateTaxRate,
      callback);
};


/**
 * @param {!proto.irspb.TaxRate} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.irspb.CreateTaxRateResponse>}
 *     A native promise that resolves to the response
 */
proto.irspb.TaxRateServicePromiseClient.prototype.createTaxRate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/irspb.TaxRateService/CreateTaxRate',
      request,
      metadata || {},
      methodDescriptor_TaxRateService_CreateTaxRate);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.irspb.TaxRate,
 *   !proto.irspb.UpdateTaxRateResponse>}
 */
const methodDescriptor_TaxRateService_UpdateTaxRate = new grpc.web.MethodDescriptor(
  '/irspb.TaxRateService/UpdateTaxRate',
  grpc.web.MethodType.UNARY,
  proto.irspb.TaxRate,
  proto.irspb.UpdateTaxRateResponse,
  /**
   * @param {!proto.irspb.TaxRate} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irspb.UpdateTaxRateResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.irspb.TaxRate,
 *   !proto.irspb.UpdateTaxRateResponse>}
 */
const methodInfo_TaxRateService_UpdateTaxRate = new grpc.web.AbstractClientBase.MethodInfo(
  proto.irspb.UpdateTaxRateResponse,
  /**
   * @param {!proto.irspb.TaxRate} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irspb.UpdateTaxRateResponse.deserializeBinary
);


/**
 * @param {!proto.irspb.TaxRate} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.irspb.UpdateTaxRateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.irspb.UpdateTaxRateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.irspb.TaxRateServiceClient.prototype.updateTaxRate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/irspb.TaxRateService/UpdateTaxRate',
      request,
      metadata || {},
      methodDescriptor_TaxRateService_UpdateTaxRate,
      callback);
};


/**
 * @param {!proto.irspb.TaxRate} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.irspb.UpdateTaxRateResponse>}
 *     A native promise that resolves to the response
 */
proto.irspb.TaxRateServicePromiseClient.prototype.updateTaxRate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/irspb.TaxRateService/UpdateTaxRate',
      request,
      metadata || {},
      methodDescriptor_TaxRateService_UpdateTaxRate);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.irspb.DeleteTaxRateRequest,
 *   !proto.irspb.DeleteTaxRateResponse>}
 */
const methodDescriptor_TaxRateService_DeleteTaxRate = new grpc.web.MethodDescriptor(
  '/irspb.TaxRateService/DeleteTaxRate',
  grpc.web.MethodType.UNARY,
  proto.irspb.DeleteTaxRateRequest,
  proto.irspb.DeleteTaxRateResponse,
  /**
   * @param {!proto.irspb.DeleteTaxRateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irspb.DeleteTaxRateResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.irspb.DeleteTaxRateRequest,
 *   !proto.irspb.DeleteTaxRateResponse>}
 */
const methodInfo_TaxRateService_DeleteTaxRate = new grpc.web.AbstractClientBase.MethodInfo(
  proto.irspb.DeleteTaxRateResponse,
  /**
   * @param {!proto.irspb.DeleteTaxRateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irspb.DeleteTaxRateResponse.deserializeBinary
);


/**
 * @param {!proto.irspb.DeleteTaxRateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.irspb.DeleteTaxRateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.irspb.DeleteTaxRateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.irspb.TaxRateServiceClient.prototype.deleteTaxRate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/irspb.TaxRateService/DeleteTaxRate',
      request,
      metadata || {},
      methodDescriptor_TaxRateService_DeleteTaxRate,
      callback);
};


/**
 * @param {!proto.irspb.DeleteTaxRateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.irspb.DeleteTaxRateResponse>}
 *     A native promise that resolves to the response
 */
proto.irspb.TaxRateServicePromiseClient.prototype.deleteTaxRate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/irspb.TaxRateService/DeleteTaxRate',
      request,
      metadata || {},
      methodDescriptor_TaxRateService_DeleteTaxRate);
};


module.exports = proto.irspb;

