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
proto.marginpb = require('./buyingpower_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.marginpb.BuyingPowerServiceClient =
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
proto.marginpb.BuyingPowerServicePromiseClient =
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
 *   !proto.marginpb.ListBuyingPowerRequest,
 *   !proto.marginpb.ListBuyingPowerResponse>}
 */
const methodDescriptor_BuyingPowerService_ListBuyingPower = new grpc.web.MethodDescriptor(
  '/marginpb.BuyingPowerService/ListBuyingPower',
  grpc.web.MethodType.UNARY,
  proto.marginpb.ListBuyingPowerRequest,
  proto.marginpb.ListBuyingPowerResponse,
  /**
   * @param {!proto.marginpb.ListBuyingPowerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.marginpb.ListBuyingPowerResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.marginpb.ListBuyingPowerRequest,
 *   !proto.marginpb.ListBuyingPowerResponse>}
 */
const methodInfo_BuyingPowerService_ListBuyingPower = new grpc.web.AbstractClientBase.MethodInfo(
  proto.marginpb.ListBuyingPowerResponse,
  /**
   * @param {!proto.marginpb.ListBuyingPowerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.marginpb.ListBuyingPowerResponse.deserializeBinary
);


/**
 * @param {!proto.marginpb.ListBuyingPowerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.marginpb.ListBuyingPowerResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.marginpb.ListBuyingPowerResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.marginpb.BuyingPowerServiceClient.prototype.listBuyingPower =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/marginpb.BuyingPowerService/ListBuyingPower',
      request,
      metadata || {},
      methodDescriptor_BuyingPowerService_ListBuyingPower,
      callback);
};


/**
 * @param {!proto.marginpb.ListBuyingPowerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.marginpb.ListBuyingPowerResponse>}
 *     A native promise that resolves to the response
 */
proto.marginpb.BuyingPowerServicePromiseClient.prototype.listBuyingPower =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/marginpb.BuyingPowerService/ListBuyingPower',
      request,
      metadata || {},
      methodDescriptor_BuyingPowerService_ListBuyingPower);
};


module.exports = proto.marginpb;

