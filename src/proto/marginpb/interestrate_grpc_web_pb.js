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


var google_type_date_pb = require('../../google/type/date_pb.js')
const proto = {};
proto.marginpb = require('./interestrate_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.marginpb.InterestRateServiceClient =
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
proto.marginpb.InterestRateServicePromiseClient =
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
 *   !proto.marginpb.ListInterestRateRequest,
 *   !proto.marginpb.ListInterestRateResponse>}
 */
const methodDescriptor_InterestRateService_ListInterestRate = new grpc.web.MethodDescriptor(
  '/marginpb.InterestRateService/ListInterestRate',
  grpc.web.MethodType.UNARY,
  proto.marginpb.ListInterestRateRequest,
  proto.marginpb.ListInterestRateResponse,
  /**
   * @param {!proto.marginpb.ListInterestRateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.marginpb.ListInterestRateResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.marginpb.ListInterestRateRequest,
 *   !proto.marginpb.ListInterestRateResponse>}
 */
const methodInfo_InterestRateService_ListInterestRate = new grpc.web.AbstractClientBase.MethodInfo(
  proto.marginpb.ListInterestRateResponse,
  /**
   * @param {!proto.marginpb.ListInterestRateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.marginpb.ListInterestRateResponse.deserializeBinary
);


/**
 * @param {!proto.marginpb.ListInterestRateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.marginpb.ListInterestRateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.marginpb.ListInterestRateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.marginpb.InterestRateServiceClient.prototype.listInterestRate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/marginpb.InterestRateService/ListInterestRate',
      request,
      metadata || {},
      methodDescriptor_InterestRateService_ListInterestRate,
      callback);
};


/**
 * @param {!proto.marginpb.ListInterestRateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.marginpb.ListInterestRateResponse>}
 *     A native promise that resolves to the response
 */
proto.marginpb.InterestRateServicePromiseClient.prototype.listInterestRate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/marginpb.InterestRateService/ListInterestRate',
      request,
      metadata || {},
      methodDescriptor_InterestRateService_ListInterestRate);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.marginpb.InterestRate,
 *   !proto.marginpb.CreateInterestRateResponse>}
 */
const methodDescriptor_InterestRateService_CreateInterestRate = new grpc.web.MethodDescriptor(
  '/marginpb.InterestRateService/CreateInterestRate',
  grpc.web.MethodType.UNARY,
  proto.marginpb.InterestRate,
  proto.marginpb.CreateInterestRateResponse,
  /**
   * @param {!proto.marginpb.InterestRate} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.marginpb.CreateInterestRateResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.marginpb.InterestRate,
 *   !proto.marginpb.CreateInterestRateResponse>}
 */
const methodInfo_InterestRateService_CreateInterestRate = new grpc.web.AbstractClientBase.MethodInfo(
  proto.marginpb.CreateInterestRateResponse,
  /**
   * @param {!proto.marginpb.InterestRate} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.marginpb.CreateInterestRateResponse.deserializeBinary
);


/**
 * @param {!proto.marginpb.InterestRate} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.marginpb.CreateInterestRateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.marginpb.CreateInterestRateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.marginpb.InterestRateServiceClient.prototype.createInterestRate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/marginpb.InterestRateService/CreateInterestRate',
      request,
      metadata || {},
      methodDescriptor_InterestRateService_CreateInterestRate,
      callback);
};


/**
 * @param {!proto.marginpb.InterestRate} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.marginpb.CreateInterestRateResponse>}
 *     A native promise that resolves to the response
 */
proto.marginpb.InterestRateServicePromiseClient.prototype.createInterestRate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/marginpb.InterestRateService/CreateInterestRate',
      request,
      metadata || {},
      methodDescriptor_InterestRateService_CreateInterestRate);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.marginpb.InterestRate,
 *   !proto.marginpb.UpdateInterestRateResponse>}
 */
const methodDescriptor_InterestRateService_UpdateInterestRate = new grpc.web.MethodDescriptor(
  '/marginpb.InterestRateService/UpdateInterestRate',
  grpc.web.MethodType.UNARY,
  proto.marginpb.InterestRate,
  proto.marginpb.UpdateInterestRateResponse,
  /**
   * @param {!proto.marginpb.InterestRate} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.marginpb.UpdateInterestRateResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.marginpb.InterestRate,
 *   !proto.marginpb.UpdateInterestRateResponse>}
 */
const methodInfo_InterestRateService_UpdateInterestRate = new grpc.web.AbstractClientBase.MethodInfo(
  proto.marginpb.UpdateInterestRateResponse,
  /**
   * @param {!proto.marginpb.InterestRate} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.marginpb.UpdateInterestRateResponse.deserializeBinary
);


/**
 * @param {!proto.marginpb.InterestRate} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.marginpb.UpdateInterestRateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.marginpb.UpdateInterestRateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.marginpb.InterestRateServiceClient.prototype.updateInterestRate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/marginpb.InterestRateService/UpdateInterestRate',
      request,
      metadata || {},
      methodDescriptor_InterestRateService_UpdateInterestRate,
      callback);
};


/**
 * @param {!proto.marginpb.InterestRate} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.marginpb.UpdateInterestRateResponse>}
 *     A native promise that resolves to the response
 */
proto.marginpb.InterestRateServicePromiseClient.prototype.updateInterestRate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/marginpb.InterestRateService/UpdateInterestRate',
      request,
      metadata || {},
      methodDescriptor_InterestRateService_UpdateInterestRate);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.marginpb.DeleteInterestRateRequest,
 *   !proto.marginpb.DeleteInterestRateResponse>}
 */
const methodDescriptor_InterestRateService_DeleteInterestRate = new grpc.web.MethodDescriptor(
  '/marginpb.InterestRateService/DeleteInterestRate',
  grpc.web.MethodType.UNARY,
  proto.marginpb.DeleteInterestRateRequest,
  proto.marginpb.DeleteInterestRateResponse,
  /**
   * @param {!proto.marginpb.DeleteInterestRateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.marginpb.DeleteInterestRateResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.marginpb.DeleteInterestRateRequest,
 *   !proto.marginpb.DeleteInterestRateResponse>}
 */
const methodInfo_InterestRateService_DeleteInterestRate = new grpc.web.AbstractClientBase.MethodInfo(
  proto.marginpb.DeleteInterestRateResponse,
  /**
   * @param {!proto.marginpb.DeleteInterestRateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.marginpb.DeleteInterestRateResponse.deserializeBinary
);


/**
 * @param {!proto.marginpb.DeleteInterestRateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.marginpb.DeleteInterestRateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.marginpb.DeleteInterestRateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.marginpb.InterestRateServiceClient.prototype.deleteInterestRate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/marginpb.InterestRateService/DeleteInterestRate',
      request,
      metadata || {},
      methodDescriptor_InterestRateService_DeleteInterestRate,
      callback);
};


/**
 * @param {!proto.marginpb.DeleteInterestRateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.marginpb.DeleteInterestRateResponse>}
 *     A native promise that resolves to the response
 */
proto.marginpb.InterestRateServicePromiseClient.prototype.deleteInterestRate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/marginpb.InterestRateService/DeleteInterestRate',
      request,
      metadata || {},
      methodDescriptor_InterestRateService_DeleteInterestRate);
};


module.exports = proto.marginpb;

