/**
 * @fileoverview gRPC-Web generated client stub for trnspb
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
proto.trnspb = require('./fee_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.trnspb.FeeServiceClient =
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
proto.trnspb.FeeServicePromiseClient =
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
 *   !proto.trnspb.ListFeeRequest,
 *   !proto.trnspb.ListFeeResponse>}
 */
const methodDescriptor_FeeService_ListFee = new grpc.web.MethodDescriptor(
  '/trnspb.FeeService/ListFee',
  grpc.web.MethodType.UNARY,
  proto.trnspb.ListFeeRequest,
  proto.trnspb.ListFeeResponse,
  /**
   * @param {!proto.trnspb.ListFeeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.trnspb.ListFeeResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.trnspb.ListFeeRequest,
 *   !proto.trnspb.ListFeeResponse>}
 */
const methodInfo_FeeService_ListFee = new grpc.web.AbstractClientBase.MethodInfo(
  proto.trnspb.ListFeeResponse,
  /**
   * @param {!proto.trnspb.ListFeeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.trnspb.ListFeeResponse.deserializeBinary
);


/**
 * @param {!proto.trnspb.ListFeeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.trnspb.ListFeeResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.trnspb.ListFeeResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.trnspb.FeeServiceClient.prototype.listFee =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/trnspb.FeeService/ListFee',
      request,
      metadata || {},
      methodDescriptor_FeeService_ListFee,
      callback);
};


/**
 * @param {!proto.trnspb.ListFeeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.trnspb.ListFeeResponse>}
 *     Promise that resolves to the response
 */
proto.trnspb.FeeServicePromiseClient.prototype.listFee =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/trnspb.FeeService/ListFee',
      request,
      metadata || {},
      methodDescriptor_FeeService_ListFee);
};


module.exports = proto.trnspb;

