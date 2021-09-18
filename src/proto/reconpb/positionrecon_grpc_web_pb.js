/**
 * @fileoverview gRPC-Web generated client stub for reconpb
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
proto.reconpb = require('./positionrecon_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.reconpb.PositionReconServiceClient =
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
proto.reconpb.PositionReconServicePromiseClient =
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
 *   !proto.reconpb.ListPositionReconRequest,
 *   !proto.reconpb.ListPositionReconResponse>}
 */
const methodDescriptor_PositionReconService_ListPositionRecon = new grpc.web.MethodDescriptor(
  '/reconpb.PositionReconService/ListPositionRecon',
  grpc.web.MethodType.UNARY,
  proto.reconpb.ListPositionReconRequest,
  proto.reconpb.ListPositionReconResponse,
  /**
   * @param {!proto.reconpb.ListPositionReconRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.reconpb.ListPositionReconResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.reconpb.ListPositionReconRequest,
 *   !proto.reconpb.ListPositionReconResponse>}
 */
const methodInfo_PositionReconService_ListPositionRecon = new grpc.web.AbstractClientBase.MethodInfo(
  proto.reconpb.ListPositionReconResponse,
  /**
   * @param {!proto.reconpb.ListPositionReconRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.reconpb.ListPositionReconResponse.deserializeBinary
);


/**
 * @param {!proto.reconpb.ListPositionReconRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.reconpb.ListPositionReconResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.reconpb.ListPositionReconResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.reconpb.PositionReconServiceClient.prototype.listPositionRecon =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/reconpb.PositionReconService/ListPositionRecon',
      request,
      metadata || {},
      methodDescriptor_PositionReconService_ListPositionRecon,
      callback);
};


/**
 * @param {!proto.reconpb.ListPositionReconRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.reconpb.ListPositionReconResponse>}
 *     A native promise that resolves to the response
 */
proto.reconpb.PositionReconServicePromiseClient.prototype.listPositionRecon =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/reconpb.PositionReconService/ListPositionRecon',
      request,
      metadata || {},
      methodDescriptor_PositionReconService_ListPositionRecon);
};


module.exports = proto.reconpb;

