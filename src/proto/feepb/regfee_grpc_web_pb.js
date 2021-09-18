/**
 * @fileoverview gRPC-Web generated client stub for feepb
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
proto.feepb = require('./regfee_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.feepb.RegFeeServiceClient =
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
proto.feepb.RegFeeServicePromiseClient =
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
 *   !proto.feepb.ListRegFeeRequest,
 *   !proto.feepb.ListRegFeeResponse>}
 */
const methodDescriptor_RegFeeService_ListRegFee = new grpc.web.MethodDescriptor(
  '/feepb.RegFeeService/ListRegFee',
  grpc.web.MethodType.UNARY,
  proto.feepb.ListRegFeeRequest,
  proto.feepb.ListRegFeeResponse,
  /**
   * @param {!proto.feepb.ListRegFeeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.feepb.ListRegFeeResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.feepb.ListRegFeeRequest,
 *   !proto.feepb.ListRegFeeResponse>}
 */
const methodInfo_RegFeeService_ListRegFee = new grpc.web.AbstractClientBase.MethodInfo(
  proto.feepb.ListRegFeeResponse,
  /**
   * @param {!proto.feepb.ListRegFeeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.feepb.ListRegFeeResponse.deserializeBinary
);


/**
 * @param {!proto.feepb.ListRegFeeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.feepb.ListRegFeeResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.feepb.ListRegFeeResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.feepb.RegFeeServiceClient.prototype.listRegFee =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/feepb.RegFeeService/ListRegFee',
      request,
      metadata || {},
      methodDescriptor_RegFeeService_ListRegFee,
      callback);
};


/**
 * @param {!proto.feepb.ListRegFeeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.feepb.ListRegFeeResponse>}
 *     Promise that resolves to the response
 */
proto.feepb.RegFeeServicePromiseClient.prototype.listRegFee =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/feepb.RegFeeService/ListRegFee',
      request,
      metadata || {},
      methodDescriptor_RegFeeService_ListRegFee);
};


module.exports = proto.feepb;

