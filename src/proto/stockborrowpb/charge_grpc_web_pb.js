/**
 * @fileoverview gRPC-Web generated client stub for stockborrowpb
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
proto.stockborrowpb = require('./charge_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.stockborrowpb.ChargeServiceClient =
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
proto.stockborrowpb.ChargeServicePromiseClient =
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
 *   !proto.stockborrowpb.ListChargeRequest,
 *   !proto.stockborrowpb.ListChargeResponse>}
 */
const methodDescriptor_ChargeService_ListCharge = new grpc.web.MethodDescriptor(
  '/stockborrowpb.ChargeService/ListCharge',
  grpc.web.MethodType.UNARY,
  proto.stockborrowpb.ListChargeRequest,
  proto.stockborrowpb.ListChargeResponse,
  /**
   * @param {!proto.stockborrowpb.ListChargeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.stockborrowpb.ListChargeResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.stockborrowpb.ListChargeRequest,
 *   !proto.stockborrowpb.ListChargeResponse>}
 */
const methodInfo_ChargeService_ListCharge = new grpc.web.AbstractClientBase.MethodInfo(
  proto.stockborrowpb.ListChargeResponse,
  /**
   * @param {!proto.stockborrowpb.ListChargeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.stockborrowpb.ListChargeResponse.deserializeBinary
);


/**
 * @param {!proto.stockborrowpb.ListChargeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.stockborrowpb.ListChargeResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.stockborrowpb.ListChargeResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.stockborrowpb.ChargeServiceClient.prototype.listCharge =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/stockborrowpb.ChargeService/ListCharge',
      request,
      metadata || {},
      methodDescriptor_ChargeService_ListCharge,
      callback);
};


/**
 * @param {!proto.stockborrowpb.ListChargeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.stockborrowpb.ListChargeResponse>}
 *     Promise that resolves to the response
 */
proto.stockborrowpb.ChargeServicePromiseClient.prototype.listCharge =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/stockborrowpb.ChargeService/ListCharge',
      request,
      metadata || {},
      methodDescriptor_ChargeService_ListCharge);
};


module.exports = proto.stockborrowpb;

