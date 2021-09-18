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
proto.reportpb = require('./locateladder_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.reportpb.LocateLadderServiceClient =
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
proto.reportpb.LocateLadderServicePromiseClient =
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
 *   !proto.reportpb.ListLocateLadderReportRequest,
 *   !proto.reportpb.ListLocateLadderReportResponse>}
 */
const methodDescriptor_LocateLadderService_ListLocateLadder = new grpc.web.MethodDescriptor(
  '/reportpb.LocateLadderService/ListLocateLadder',
  grpc.web.MethodType.UNARY,
  proto.reportpb.ListLocateLadderReportRequest,
  proto.reportpb.ListLocateLadderReportResponse,
  /**
   * @param {!proto.reportpb.ListLocateLadderReportRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.reportpb.ListLocateLadderReportResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.reportpb.ListLocateLadderReportRequest,
 *   !proto.reportpb.ListLocateLadderReportResponse>}
 */
const methodInfo_LocateLadderService_ListLocateLadder = new grpc.web.AbstractClientBase.MethodInfo(
  proto.reportpb.ListLocateLadderReportResponse,
  /**
   * @param {!proto.reportpb.ListLocateLadderReportRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.reportpb.ListLocateLadderReportResponse.deserializeBinary
);


/**
 * @param {!proto.reportpb.ListLocateLadderReportRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.reportpb.ListLocateLadderReportResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.reportpb.ListLocateLadderReportResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.reportpb.LocateLadderServiceClient.prototype.listLocateLadder =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/reportpb.LocateLadderService/ListLocateLadder',
      request,
      metadata || {},
      methodDescriptor_LocateLadderService_ListLocateLadder,
      callback);
};


/**
 * @param {!proto.reportpb.ListLocateLadderReportRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.reportpb.ListLocateLadderReportResponse>}
 *     Promise that resolves to the response
 */
proto.reportpb.LocateLadderServicePromiseClient.prototype.listLocateLadder =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/reportpb.LocateLadderService/ListLocateLadder',
      request,
      metadata || {},
      methodDescriptor_LocateLadderService_ListLocateLadder);
};


module.exports = proto.reportpb;

