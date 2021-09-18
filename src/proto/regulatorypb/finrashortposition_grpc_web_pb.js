/**
 * @fileoverview gRPC-Web generated client stub for regulatorypb
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_type_date_pb = require('../../google/type/date_pb.js')

var proto_positionpb_position_pb = require('../../proto/positionpb/position_pb.js')
const proto = {};
proto.regulatorypb = require('./finrashortposition_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.regulatorypb.FinraShortPositionServiceClient =
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
proto.regulatorypb.FinraShortPositionServicePromiseClient =
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
 *   !proto.regulatorypb.ListFinraShortPositionRequest,
 *   !proto.regulatorypb.ListFinraShortPositionResponse>}
 */
const methodDescriptor_FinraShortPositionService_ListFinraShortPosition = new grpc.web.MethodDescriptor(
  '/regulatorypb.FinraShortPositionService/ListFinraShortPosition',
  grpc.web.MethodType.UNARY,
  proto.regulatorypb.ListFinraShortPositionRequest,
  proto.regulatorypb.ListFinraShortPositionResponse,
  /**
   * @param {!proto.regulatorypb.ListFinraShortPositionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.regulatorypb.ListFinraShortPositionResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.regulatorypb.ListFinraShortPositionRequest,
 *   !proto.regulatorypb.ListFinraShortPositionResponse>}
 */
const methodInfo_FinraShortPositionService_ListFinraShortPosition = new grpc.web.AbstractClientBase.MethodInfo(
  proto.regulatorypb.ListFinraShortPositionResponse,
  /**
   * @param {!proto.regulatorypb.ListFinraShortPositionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.regulatorypb.ListFinraShortPositionResponse.deserializeBinary
);


/**
 * @param {!proto.regulatorypb.ListFinraShortPositionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.regulatorypb.ListFinraShortPositionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.regulatorypb.ListFinraShortPositionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.regulatorypb.FinraShortPositionServiceClient.prototype.listFinraShortPosition =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/regulatorypb.FinraShortPositionService/ListFinraShortPosition',
      request,
      metadata || {},
      methodDescriptor_FinraShortPositionService_ListFinraShortPosition,
      callback);
};


/**
 * @param {!proto.regulatorypb.ListFinraShortPositionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.regulatorypb.ListFinraShortPositionResponse>}
 *     Promise that resolves to the response
 */
proto.regulatorypb.FinraShortPositionServicePromiseClient.prototype.listFinraShortPosition =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/regulatorypb.FinraShortPositionService/ListFinraShortPosition',
      request,
      metadata || {},
      methodDescriptor_FinraShortPositionService_ListFinraShortPosition);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.regulatorypb.ListPositionDetailsRequest,
 *   !proto.regulatorypb.ListPositionDetailsResponse>}
 */
const methodDescriptor_FinraShortPositionService_ListPositionDetails = new grpc.web.MethodDescriptor(
  '/regulatorypb.FinraShortPositionService/ListPositionDetails',
  grpc.web.MethodType.UNARY,
  proto.regulatorypb.ListPositionDetailsRequest,
  proto.regulatorypb.ListPositionDetailsResponse,
  /**
   * @param {!proto.regulatorypb.ListPositionDetailsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.regulatorypb.ListPositionDetailsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.regulatorypb.ListPositionDetailsRequest,
 *   !proto.regulatorypb.ListPositionDetailsResponse>}
 */
const methodInfo_FinraShortPositionService_ListPositionDetails = new grpc.web.AbstractClientBase.MethodInfo(
  proto.regulatorypb.ListPositionDetailsResponse,
  /**
   * @param {!proto.regulatorypb.ListPositionDetailsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.regulatorypb.ListPositionDetailsResponse.deserializeBinary
);


/**
 * @param {!proto.regulatorypb.ListPositionDetailsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.regulatorypb.ListPositionDetailsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.regulatorypb.ListPositionDetailsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.regulatorypb.FinraShortPositionServiceClient.prototype.listPositionDetails =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/regulatorypb.FinraShortPositionService/ListPositionDetails',
      request,
      metadata || {},
      methodDescriptor_FinraShortPositionService_ListPositionDetails,
      callback);
};


/**
 * @param {!proto.regulatorypb.ListPositionDetailsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.regulatorypb.ListPositionDetailsResponse>}
 *     Promise that resolves to the response
 */
proto.regulatorypb.FinraShortPositionServicePromiseClient.prototype.listPositionDetails =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/regulatorypb.FinraShortPositionService/ListPositionDetails',
      request,
      metadata || {},
      methodDescriptor_FinraShortPositionService_ListPositionDetails);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.regulatorypb.DownloadFinraShortPositionRequest,
 *   !proto.regulatorypb.File>}
 */
const methodDescriptor_FinraShortPositionService_DownloadFinra = new grpc.web.MethodDescriptor(
  '/regulatorypb.FinraShortPositionService/DownloadFinra',
  grpc.web.MethodType.UNARY,
  proto.regulatorypb.DownloadFinraShortPositionRequest,
  proto.regulatorypb.File,
  /**
   * @param {!proto.regulatorypb.DownloadFinraShortPositionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.regulatorypb.File.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.regulatorypb.DownloadFinraShortPositionRequest,
 *   !proto.regulatorypb.File>}
 */
const methodInfo_FinraShortPositionService_DownloadFinra = new grpc.web.AbstractClientBase.MethodInfo(
  proto.regulatorypb.File,
  /**
   * @param {!proto.regulatorypb.DownloadFinraShortPositionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.regulatorypb.File.deserializeBinary
);


/**
 * @param {!proto.regulatorypb.DownloadFinraShortPositionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.regulatorypb.File)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.regulatorypb.File>|undefined}
 *     The XHR Node Readable Stream
 */
proto.regulatorypb.FinraShortPositionServiceClient.prototype.downloadFinra =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/regulatorypb.FinraShortPositionService/DownloadFinra',
      request,
      metadata || {},
      methodDescriptor_FinraShortPositionService_DownloadFinra,
      callback);
};


/**
 * @param {!proto.regulatorypb.DownloadFinraShortPositionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.regulatorypb.File>}
 *     Promise that resolves to the response
 */
proto.regulatorypb.FinraShortPositionServicePromiseClient.prototype.downloadFinra =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/regulatorypb.FinraShortPositionService/DownloadFinra',
      request,
      metadata || {},
      methodDescriptor_FinraShortPositionService_DownloadFinra);
};


module.exports = proto.regulatorypb;

