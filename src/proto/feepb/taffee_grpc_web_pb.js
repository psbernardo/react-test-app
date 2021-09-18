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
proto.feepb = require('./taffee_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.feepb.TafFeeServiceClient =
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
proto.feepb.TafFeeServicePromiseClient =
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
 *   !proto.feepb.ListTafFeeRequest,
 *   !proto.feepb.ListTafFeeResponse>}
 */
const methodDescriptor_TafFeeService_ListTafFee = new grpc.web.MethodDescriptor(
  '/feepb.TafFeeService/ListTafFee',
  grpc.web.MethodType.UNARY,
  proto.feepb.ListTafFeeRequest,
  proto.feepb.ListTafFeeResponse,
  /**
   * @param {!proto.feepb.ListTafFeeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.feepb.ListTafFeeResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.feepb.ListTafFeeRequest,
 *   !proto.feepb.ListTafFeeResponse>}
 */
const methodInfo_TafFeeService_ListTafFee = new grpc.web.AbstractClientBase.MethodInfo(
  proto.feepb.ListTafFeeResponse,
  /**
   * @param {!proto.feepb.ListTafFeeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.feepb.ListTafFeeResponse.deserializeBinary
);


/**
 * @param {!proto.feepb.ListTafFeeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.feepb.ListTafFeeResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.feepb.ListTafFeeResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.feepb.TafFeeServiceClient.prototype.listTafFee =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/feepb.TafFeeService/ListTafFee',
      request,
      metadata || {},
      methodDescriptor_TafFeeService_ListTafFee,
      callback);
};


/**
 * @param {!proto.feepb.ListTafFeeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.feepb.ListTafFeeResponse>}
 *     Promise that resolves to the response
 */
proto.feepb.TafFeeServicePromiseClient.prototype.listTafFee =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/feepb.TafFeeService/ListTafFee',
      request,
      metadata || {},
      methodDescriptor_TafFeeService_ListTafFee);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.feepb.ListTafFeeDetailsRequest,
 *   !proto.feepb.ListTafFeeDetailsResponse>}
 */
const methodDescriptor_TafFeeService_ListTafFeeDetails = new grpc.web.MethodDescriptor(
  '/feepb.TafFeeService/ListTafFeeDetails',
  grpc.web.MethodType.UNARY,
  proto.feepb.ListTafFeeDetailsRequest,
  proto.feepb.ListTafFeeDetailsResponse,
  /**
   * @param {!proto.feepb.ListTafFeeDetailsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.feepb.ListTafFeeDetailsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.feepb.ListTafFeeDetailsRequest,
 *   !proto.feepb.ListTafFeeDetailsResponse>}
 */
const methodInfo_TafFeeService_ListTafFeeDetails = new grpc.web.AbstractClientBase.MethodInfo(
  proto.feepb.ListTafFeeDetailsResponse,
  /**
   * @param {!proto.feepb.ListTafFeeDetailsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.feepb.ListTafFeeDetailsResponse.deserializeBinary
);


/**
 * @param {!proto.feepb.ListTafFeeDetailsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.feepb.ListTafFeeDetailsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.feepb.ListTafFeeDetailsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.feepb.TafFeeServiceClient.prototype.listTafFeeDetails =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/feepb.TafFeeService/ListTafFeeDetails',
      request,
      metadata || {},
      methodDescriptor_TafFeeService_ListTafFeeDetails,
      callback);
};


/**
 * @param {!proto.feepb.ListTafFeeDetailsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.feepb.ListTafFeeDetailsResponse>}
 *     Promise that resolves to the response
 */
proto.feepb.TafFeeServicePromiseClient.prototype.listTafFeeDetails =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/feepb.TafFeeService/ListTafFeeDetails',
      request,
      metadata || {},
      methodDescriptor_TafFeeService_ListTafFeeDetails);
};


module.exports = proto.feepb;

