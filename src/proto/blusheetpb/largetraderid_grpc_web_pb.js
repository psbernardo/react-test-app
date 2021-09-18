/**
 * @fileoverview gRPC-Web generated client stub for bluesheetpb
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_type_date_pb = require('../../google/type/date_pb.js')

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')
const proto = {};
proto.bluesheetpb = require('./largetraderid_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.bluesheetpb.LargeTraderIDServiceClient =
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
proto.bluesheetpb.LargeTraderIDServicePromiseClient =
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
 *   !proto.bluesheetpb.ListLargeTraderIDRequest,
 *   !proto.bluesheetpb.ListLargeTraderIDResponse>}
 */
const methodDescriptor_LargeTraderIDService_ListLargeTraderID = new grpc.web.MethodDescriptor(
  '/bluesheetpb.LargeTraderIDService/ListLargeTraderID',
  grpc.web.MethodType.UNARY,
  proto.bluesheetpb.ListLargeTraderIDRequest,
  proto.bluesheetpb.ListLargeTraderIDResponse,
  /**
   * @param {!proto.bluesheetpb.ListLargeTraderIDRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bluesheetpb.ListLargeTraderIDResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.bluesheetpb.ListLargeTraderIDRequest,
 *   !proto.bluesheetpb.ListLargeTraderIDResponse>}
 */
const methodInfo_LargeTraderIDService_ListLargeTraderID = new grpc.web.AbstractClientBase.MethodInfo(
  proto.bluesheetpb.ListLargeTraderIDResponse,
  /**
   * @param {!proto.bluesheetpb.ListLargeTraderIDRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bluesheetpb.ListLargeTraderIDResponse.deserializeBinary
);


/**
 * @param {!proto.bluesheetpb.ListLargeTraderIDRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.bluesheetpb.ListLargeTraderIDResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.bluesheetpb.ListLargeTraderIDResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.bluesheetpb.LargeTraderIDServiceClient.prototype.listLargeTraderID =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/bluesheetpb.LargeTraderIDService/ListLargeTraderID',
      request,
      metadata || {},
      methodDescriptor_LargeTraderIDService_ListLargeTraderID,
      callback);
};


/**
 * @param {!proto.bluesheetpb.ListLargeTraderIDRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.bluesheetpb.ListLargeTraderIDResponse>}
 *     Promise that resolves to the response
 */
proto.bluesheetpb.LargeTraderIDServicePromiseClient.prototype.listLargeTraderID =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/bluesheetpb.LargeTraderIDService/ListLargeTraderID',
      request,
      metadata || {},
      methodDescriptor_LargeTraderIDService_ListLargeTraderID);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.bluesheetpb.UpdateLargeTraderIDRequest,
 *   !proto.bluesheetpb.LargeTraderID>}
 */
const methodDescriptor_LargeTraderIDService_UpdateLargeTraderID = new grpc.web.MethodDescriptor(
  '/bluesheetpb.LargeTraderIDService/UpdateLargeTraderID',
  grpc.web.MethodType.UNARY,
  proto.bluesheetpb.UpdateLargeTraderIDRequest,
  proto.bluesheetpb.LargeTraderID,
  /**
   * @param {!proto.bluesheetpb.UpdateLargeTraderIDRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bluesheetpb.LargeTraderID.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.bluesheetpb.UpdateLargeTraderIDRequest,
 *   !proto.bluesheetpb.LargeTraderID>}
 */
const methodInfo_LargeTraderIDService_UpdateLargeTraderID = new grpc.web.AbstractClientBase.MethodInfo(
  proto.bluesheetpb.LargeTraderID,
  /**
   * @param {!proto.bluesheetpb.UpdateLargeTraderIDRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bluesheetpb.LargeTraderID.deserializeBinary
);


/**
 * @param {!proto.bluesheetpb.UpdateLargeTraderIDRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.bluesheetpb.LargeTraderID)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.bluesheetpb.LargeTraderID>|undefined}
 *     The XHR Node Readable Stream
 */
proto.bluesheetpb.LargeTraderIDServiceClient.prototype.updateLargeTraderID =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/bluesheetpb.LargeTraderIDService/UpdateLargeTraderID',
      request,
      metadata || {},
      methodDescriptor_LargeTraderIDService_UpdateLargeTraderID,
      callback);
};


/**
 * @param {!proto.bluesheetpb.UpdateLargeTraderIDRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.bluesheetpb.LargeTraderID>}
 *     Promise that resolves to the response
 */
proto.bluesheetpb.LargeTraderIDServicePromiseClient.prototype.updateLargeTraderID =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/bluesheetpb.LargeTraderIDService/UpdateLargeTraderID',
      request,
      metadata || {},
      methodDescriptor_LargeTraderIDService_UpdateLargeTraderID);
};


module.exports = proto.bluesheetpb;

