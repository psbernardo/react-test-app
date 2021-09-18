/**
 * @fileoverview gRPC-Web generated client stub for occpb
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
proto.occpb = require('./traderecon_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.occpb.TradeReconServiceClient =
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
proto.occpb.TradeReconServicePromiseClient =
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
 *   !proto.occpb.ListTradeReconRequest,
 *   !proto.occpb.ListTradeReconResponse>}
 */
const methodDescriptor_TradeReconService_ListTradeRecon = new grpc.web.MethodDescriptor(
  '/occpb.TradeReconService/ListTradeRecon',
  grpc.web.MethodType.UNARY,
  proto.occpb.ListTradeReconRequest,
  proto.occpb.ListTradeReconResponse,
  /**
   * @param {!proto.occpb.ListTradeReconRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.occpb.ListTradeReconResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.occpb.ListTradeReconRequest,
 *   !proto.occpb.ListTradeReconResponse>}
 */
const methodInfo_TradeReconService_ListTradeRecon = new grpc.web.AbstractClientBase.MethodInfo(
  proto.occpb.ListTradeReconResponse,
  /**
   * @param {!proto.occpb.ListTradeReconRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.occpb.ListTradeReconResponse.deserializeBinary
);


/**
 * @param {!proto.occpb.ListTradeReconRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.occpb.ListTradeReconResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.occpb.ListTradeReconResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.occpb.TradeReconServiceClient.prototype.listTradeRecon =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/occpb.TradeReconService/ListTradeRecon',
      request,
      metadata || {},
      methodDescriptor_TradeReconService_ListTradeRecon,
      callback);
};


/**
 * @param {!proto.occpb.ListTradeReconRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.occpb.ListTradeReconResponse>}
 *     Promise that resolves to the response
 */
proto.occpb.TradeReconServicePromiseClient.prototype.listTradeRecon =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/occpb.TradeReconService/ListTradeRecon',
      request,
      metadata || {},
      methodDescriptor_TradeReconService_ListTradeRecon);
};


module.exports = proto.occpb;

