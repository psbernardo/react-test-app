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
proto.reportpb = require('./profitandloss_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.reportpb.ProfitAndLossServiceClient =
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
proto.reportpb.ProfitAndLossServicePromiseClient =
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
 *   !proto.reportpb.ListProfitAndLossRequest,
 *   !proto.reportpb.ListProfitAndLossResponse>}
 */
const methodDescriptor_ProfitAndLossService_ListProfitAndLoss = new grpc.web.MethodDescriptor(
  '/reportpb.ProfitAndLossService/ListProfitAndLoss',
  grpc.web.MethodType.UNARY,
  proto.reportpb.ListProfitAndLossRequest,
  proto.reportpb.ListProfitAndLossResponse,
  /**
   * @param {!proto.reportpb.ListProfitAndLossRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.reportpb.ListProfitAndLossResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.reportpb.ListProfitAndLossRequest,
 *   !proto.reportpb.ListProfitAndLossResponse>}
 */
const methodInfo_ProfitAndLossService_ListProfitAndLoss = new grpc.web.AbstractClientBase.MethodInfo(
  proto.reportpb.ListProfitAndLossResponse,
  /**
   * @param {!proto.reportpb.ListProfitAndLossRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.reportpb.ListProfitAndLossResponse.deserializeBinary
);


/**
 * @param {!proto.reportpb.ListProfitAndLossRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.reportpb.ListProfitAndLossResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.reportpb.ListProfitAndLossResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.reportpb.ProfitAndLossServiceClient.prototype.listProfitAndLoss =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/reportpb.ProfitAndLossService/ListProfitAndLoss',
      request,
      metadata || {},
      methodDescriptor_ProfitAndLossService_ListProfitAndLoss,
      callback);
};


/**
 * @param {!proto.reportpb.ListProfitAndLossRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.reportpb.ListProfitAndLossResponse>}
 *     Promise that resolves to the response
 */
proto.reportpb.ProfitAndLossServicePromiseClient.prototype.listProfitAndLoss =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/reportpb.ProfitAndLossService/ListProfitAndLoss',
      request,
      metadata || {},
      methodDescriptor_ProfitAndLossService_ListProfitAndLoss);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.reportpb.ListDetailsProfitAndLossRequest,
 *   !proto.reportpb.ListDetailsProfitAndLossResponse>}
 */
const methodDescriptor_ProfitAndLossService_ListDetailsProfitAndLoss = new grpc.web.MethodDescriptor(
  '/reportpb.ProfitAndLossService/ListDetailsProfitAndLoss',
  grpc.web.MethodType.UNARY,
  proto.reportpb.ListDetailsProfitAndLossRequest,
  proto.reportpb.ListDetailsProfitAndLossResponse,
  /**
   * @param {!proto.reportpb.ListDetailsProfitAndLossRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.reportpb.ListDetailsProfitAndLossResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.reportpb.ListDetailsProfitAndLossRequest,
 *   !proto.reportpb.ListDetailsProfitAndLossResponse>}
 */
const methodInfo_ProfitAndLossService_ListDetailsProfitAndLoss = new grpc.web.AbstractClientBase.MethodInfo(
  proto.reportpb.ListDetailsProfitAndLossResponse,
  /**
   * @param {!proto.reportpb.ListDetailsProfitAndLossRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.reportpb.ListDetailsProfitAndLossResponse.deserializeBinary
);


/**
 * @param {!proto.reportpb.ListDetailsProfitAndLossRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.reportpb.ListDetailsProfitAndLossResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.reportpb.ListDetailsProfitAndLossResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.reportpb.ProfitAndLossServiceClient.prototype.listDetailsProfitAndLoss =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/reportpb.ProfitAndLossService/ListDetailsProfitAndLoss',
      request,
      metadata || {},
      methodDescriptor_ProfitAndLossService_ListDetailsProfitAndLoss,
      callback);
};


/**
 * @param {!proto.reportpb.ListDetailsProfitAndLossRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.reportpb.ListDetailsProfitAndLossResponse>}
 *     Promise that resolves to the response
 */
proto.reportpb.ProfitAndLossServicePromiseClient.prototype.listDetailsProfitAndLoss =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/reportpb.ProfitAndLossService/ListDetailsProfitAndLoss',
      request,
      metadata || {},
      methodDescriptor_ProfitAndLossService_ListDetailsProfitAndLoss);
};


module.exports = proto.reportpb;

