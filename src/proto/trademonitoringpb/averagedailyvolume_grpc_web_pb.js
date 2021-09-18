/**
 * @fileoverview gRPC-Web generated client stub for trademonitoringpb
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_type_date_pb = require('../../google/type/date_pb.js')

var proto_utilspb_pagination_pb = require('../../proto/utilspb/pagination_pb.js')

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')
const proto = {};
proto.trademonitoringpb = require('./averagedailyvolume_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.trademonitoringpb.AverageDailyVolumeServiceClient =
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
proto.trademonitoringpb.AverageDailyVolumeServicePromiseClient =
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
 *   !proto.trademonitoringpb.ReadAverageDailyVolumeRequest,
 *   !proto.trademonitoringpb.ReadAverageDailyVolumeResponse>}
 */
const methodDescriptor_AverageDailyVolumeService_ReadAverageDailyVolume = new grpc.web.MethodDescriptor(
  '/trademonitoringpb.AverageDailyVolumeService/ReadAverageDailyVolume',
  grpc.web.MethodType.UNARY,
  proto.trademonitoringpb.ReadAverageDailyVolumeRequest,
  proto.trademonitoringpb.ReadAverageDailyVolumeResponse,
  /**
   * @param {!proto.trademonitoringpb.ReadAverageDailyVolumeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.trademonitoringpb.ReadAverageDailyVolumeResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.trademonitoringpb.ReadAverageDailyVolumeRequest,
 *   !proto.trademonitoringpb.ReadAverageDailyVolumeResponse>}
 */
const methodInfo_AverageDailyVolumeService_ReadAverageDailyVolume = new grpc.web.AbstractClientBase.MethodInfo(
  proto.trademonitoringpb.ReadAverageDailyVolumeResponse,
  /**
   * @param {!proto.trademonitoringpb.ReadAverageDailyVolumeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.trademonitoringpb.ReadAverageDailyVolumeResponse.deserializeBinary
);


/**
 * @param {!proto.trademonitoringpb.ReadAverageDailyVolumeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.trademonitoringpb.ReadAverageDailyVolumeResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.trademonitoringpb.ReadAverageDailyVolumeResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.trademonitoringpb.AverageDailyVolumeServiceClient.prototype.readAverageDailyVolume =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/trademonitoringpb.AverageDailyVolumeService/ReadAverageDailyVolume',
      request,
      metadata || {},
      methodDescriptor_AverageDailyVolumeService_ReadAverageDailyVolume,
      callback);
};


/**
 * @param {!proto.trademonitoringpb.ReadAverageDailyVolumeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.trademonitoringpb.ReadAverageDailyVolumeResponse>}
 *     Promise that resolves to the response
 */
proto.trademonitoringpb.AverageDailyVolumeServicePromiseClient.prototype.readAverageDailyVolume =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/trademonitoringpb.AverageDailyVolumeService/ReadAverageDailyVolume',
      request,
      metadata || {},
      methodDescriptor_AverageDailyVolumeService_ReadAverageDailyVolume);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.trademonitoringpb.ListAverageDailyVolumeRequest,
 *   !proto.trademonitoringpb.ListAverageDailyVolumeResponse>}
 */
const methodDescriptor_AverageDailyVolumeService_ListAverageDailyVolume = new grpc.web.MethodDescriptor(
  '/trademonitoringpb.AverageDailyVolumeService/ListAverageDailyVolume',
  grpc.web.MethodType.UNARY,
  proto.trademonitoringpb.ListAverageDailyVolumeRequest,
  proto.trademonitoringpb.ListAverageDailyVolumeResponse,
  /**
   * @param {!proto.trademonitoringpb.ListAverageDailyVolumeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.trademonitoringpb.ListAverageDailyVolumeResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.trademonitoringpb.ListAverageDailyVolumeRequest,
 *   !proto.trademonitoringpb.ListAverageDailyVolumeResponse>}
 */
const methodInfo_AverageDailyVolumeService_ListAverageDailyVolume = new grpc.web.AbstractClientBase.MethodInfo(
  proto.trademonitoringpb.ListAverageDailyVolumeResponse,
  /**
   * @param {!proto.trademonitoringpb.ListAverageDailyVolumeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.trademonitoringpb.ListAverageDailyVolumeResponse.deserializeBinary
);


/**
 * @param {!proto.trademonitoringpb.ListAverageDailyVolumeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.trademonitoringpb.ListAverageDailyVolumeResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.trademonitoringpb.ListAverageDailyVolumeResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.trademonitoringpb.AverageDailyVolumeServiceClient.prototype.listAverageDailyVolume =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/trademonitoringpb.AverageDailyVolumeService/ListAverageDailyVolume',
      request,
      metadata || {},
      methodDescriptor_AverageDailyVolumeService_ListAverageDailyVolume,
      callback);
};


/**
 * @param {!proto.trademonitoringpb.ListAverageDailyVolumeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.trademonitoringpb.ListAverageDailyVolumeResponse>}
 *     Promise that resolves to the response
 */
proto.trademonitoringpb.AverageDailyVolumeServicePromiseClient.prototype.listAverageDailyVolume =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/trademonitoringpb.AverageDailyVolumeService/ListAverageDailyVolume',
      request,
      metadata || {},
      methodDescriptor_AverageDailyVolumeService_ListAverageDailyVolume);
};


module.exports = proto.trademonitoringpb;

