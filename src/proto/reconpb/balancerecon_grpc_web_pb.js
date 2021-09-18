/**
 * @fileoverview gRPC-Web generated client stub for reconpb
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
proto.reconpb = require('./balancerecon_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.reconpb.BalanceReconServiceClient =
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
proto.reconpb.BalanceReconServicePromiseClient =
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
 *   !proto.reconpb.ListBalanceReconRequest,
 *   !proto.reconpb.ListBalanceReconResponse>}
 */
const methodDescriptor_BalanceReconService_ListBalanceRecon = new grpc.web.MethodDescriptor(
  '/reconpb.BalanceReconService/ListBalanceRecon',
  grpc.web.MethodType.UNARY,
  proto.reconpb.ListBalanceReconRequest,
  proto.reconpb.ListBalanceReconResponse,
  /**
   * @param {!proto.reconpb.ListBalanceReconRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.reconpb.ListBalanceReconResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.reconpb.ListBalanceReconRequest,
 *   !proto.reconpb.ListBalanceReconResponse>}
 */
const methodInfo_BalanceReconService_ListBalanceRecon = new grpc.web.AbstractClientBase.MethodInfo(
  proto.reconpb.ListBalanceReconResponse,
  /**
   * @param {!proto.reconpb.ListBalanceReconRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.reconpb.ListBalanceReconResponse.deserializeBinary
);


/**
 * @param {!proto.reconpb.ListBalanceReconRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.reconpb.ListBalanceReconResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.reconpb.ListBalanceReconResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.reconpb.BalanceReconServiceClient.prototype.listBalanceRecon =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/reconpb.BalanceReconService/ListBalanceRecon',
      request,
      metadata || {},
      methodDescriptor_BalanceReconService_ListBalanceRecon,
      callback);
};


/**
 * @param {!proto.reconpb.ListBalanceReconRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.reconpb.ListBalanceReconResponse>}
 *     A native promise that resolves to the response
 */
proto.reconpb.BalanceReconServicePromiseClient.prototype.listBalanceRecon =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/reconpb.BalanceReconService/ListBalanceRecon',
      request,
      metadata || {},
      methodDescriptor_BalanceReconService_ListBalanceRecon);
};


module.exports = proto.reconpb;

