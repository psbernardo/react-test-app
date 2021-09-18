/**
 * @fileoverview gRPC-Web generated client stub for acatspb
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
proto.acatspb = require('./outputsettlement_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.acatspb.OutputSettlementServiceClient =
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
proto.acatspb.OutputSettlementServicePromiseClient =
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
 *   !proto.acatspb.OutputSettlement,
 *   !proto.acatspb.ListOutputSettlementResponse>}
 */
const methodDescriptor_OutputSettlementService_ListOutputSettlement = new grpc.web.MethodDescriptor(
  '/acatspb.OutputSettlementService/ListOutputSettlement',
  grpc.web.MethodType.UNARY,
  proto.acatspb.OutputSettlement,
  proto.acatspb.ListOutputSettlementResponse,
  /**
   * @param {!proto.acatspb.OutputSettlement} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.acatspb.ListOutputSettlementResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.acatspb.OutputSettlement,
 *   !proto.acatspb.ListOutputSettlementResponse>}
 */
const methodInfo_OutputSettlementService_ListOutputSettlement = new grpc.web.AbstractClientBase.MethodInfo(
  proto.acatspb.ListOutputSettlementResponse,
  /**
   * @param {!proto.acatspb.OutputSettlement} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.acatspb.ListOutputSettlementResponse.deserializeBinary
);


/**
 * @param {!proto.acatspb.OutputSettlement} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.acatspb.ListOutputSettlementResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.acatspb.ListOutputSettlementResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.acatspb.OutputSettlementServiceClient.prototype.listOutputSettlement =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/acatspb.OutputSettlementService/ListOutputSettlement',
      request,
      metadata || {},
      methodDescriptor_OutputSettlementService_ListOutputSettlement,
      callback);
};


/**
 * @param {!proto.acatspb.OutputSettlement} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.acatspb.ListOutputSettlementResponse>}
 *     Promise that resolves to the response
 */
proto.acatspb.OutputSettlementServicePromiseClient.prototype.listOutputSettlement =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/acatspb.OutputSettlementService/ListOutputSettlement',
      request,
      metadata || {},
      methodDescriptor_OutputSettlementService_ListOutputSettlement);
};


module.exports = proto.acatspb;

