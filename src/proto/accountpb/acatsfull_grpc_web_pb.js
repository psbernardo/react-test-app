/**
 * @fileoverview gRPC-Web generated client stub for accountpb
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')

var google_type_date_pb = require('../../google/type/date_pb.js')
const proto = {};
proto.accountpb = require('./acatsfull_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.accountpb.AcatsFullServiceClient =
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
proto.accountpb.AcatsFullServicePromiseClient =
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
 *   !proto.accountpb.ListAcatsFullRequest,
 *   !proto.accountpb.ListAcatsFullResponse>}
 */
const methodDescriptor_AcatsFullService_ListAcatsFull = new grpc.web.MethodDescriptor(
  '/accountpb.AcatsFullService/ListAcatsFull',
  grpc.web.MethodType.UNARY,
  proto.accountpb.ListAcatsFullRequest,
  proto.accountpb.ListAcatsFullResponse,
  /**
   * @param {!proto.accountpb.ListAcatsFullRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.accountpb.ListAcatsFullResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.accountpb.ListAcatsFullRequest,
 *   !proto.accountpb.ListAcatsFullResponse>}
 */
const methodInfo_AcatsFullService_ListAcatsFull = new grpc.web.AbstractClientBase.MethodInfo(
  proto.accountpb.ListAcatsFullResponse,
  /**
   * @param {!proto.accountpb.ListAcatsFullRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.accountpb.ListAcatsFullResponse.deserializeBinary
);


/**
 * @param {!proto.accountpb.ListAcatsFullRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.accountpb.ListAcatsFullResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.accountpb.ListAcatsFullResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.accountpb.AcatsFullServiceClient.prototype.listAcatsFull =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/accountpb.AcatsFullService/ListAcatsFull',
      request,
      metadata || {},
      methodDescriptor_AcatsFullService_ListAcatsFull,
      callback);
};


/**
 * @param {!proto.accountpb.ListAcatsFullRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.accountpb.ListAcatsFullResponse>}
 *     A native promise that resolves to the response
 */
proto.accountpb.AcatsFullServicePromiseClient.prototype.listAcatsFull =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/accountpb.AcatsFullService/ListAcatsFull',
      request,
      metadata || {},
      methodDescriptor_AcatsFullService_ListAcatsFull);
};


module.exports = proto.accountpb;

