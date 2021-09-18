/**
 * @fileoverview gRPC-Web generated client stub for surveillancepb
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

var proto_utilspb_pagination_pb = require('../../proto/utilspb/pagination_pb.js')
const proto = {};
proto.surveillancepb = require('./ofac_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.surveillancepb.OfacServiceClient =
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
proto.surveillancepb.OfacServicePromiseClient =
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
 *   !proto.surveillancepb.Ofac,
 *   !proto.surveillancepb.UpdateOfacResponse>}
 */
const methodDescriptor_OfacService_UpdateOfac = new grpc.web.MethodDescriptor(
  '/surveillancepb.OfacService/UpdateOfac',
  grpc.web.MethodType.UNARY,
  proto.surveillancepb.Ofac,
  proto.surveillancepb.UpdateOfacResponse,
  /**
   * @param {!proto.surveillancepb.Ofac} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.surveillancepb.UpdateOfacResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.surveillancepb.Ofac,
 *   !proto.surveillancepb.UpdateOfacResponse>}
 */
const methodInfo_OfacService_UpdateOfac = new grpc.web.AbstractClientBase.MethodInfo(
  proto.surveillancepb.UpdateOfacResponse,
  /**
   * @param {!proto.surveillancepb.Ofac} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.surveillancepb.UpdateOfacResponse.deserializeBinary
);


/**
 * @param {!proto.surveillancepb.Ofac} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.surveillancepb.UpdateOfacResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.surveillancepb.UpdateOfacResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.surveillancepb.OfacServiceClient.prototype.updateOfac =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/surveillancepb.OfacService/UpdateOfac',
      request,
      metadata || {},
      methodDescriptor_OfacService_UpdateOfac,
      callback);
};


/**
 * @param {!proto.surveillancepb.Ofac} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.surveillancepb.UpdateOfacResponse>}
 *     Promise that resolves to the response
 */
proto.surveillancepb.OfacServicePromiseClient.prototype.updateOfac =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/surveillancepb.OfacService/UpdateOfac',
      request,
      metadata || {},
      methodDescriptor_OfacService_UpdateOfac);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.surveillancepb.ListOfacRequest,
 *   !proto.surveillancepb.ListOfacResponse>}
 */
const methodDescriptor_OfacService_ListOfac = new grpc.web.MethodDescriptor(
  '/surveillancepb.OfacService/ListOfac',
  grpc.web.MethodType.UNARY,
  proto.surveillancepb.ListOfacRequest,
  proto.surveillancepb.ListOfacResponse,
  /**
   * @param {!proto.surveillancepb.ListOfacRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.surveillancepb.ListOfacResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.surveillancepb.ListOfacRequest,
 *   !proto.surveillancepb.ListOfacResponse>}
 */
const methodInfo_OfacService_ListOfac = new grpc.web.AbstractClientBase.MethodInfo(
  proto.surveillancepb.ListOfacResponse,
  /**
   * @param {!proto.surveillancepb.ListOfacRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.surveillancepb.ListOfacResponse.deserializeBinary
);


/**
 * @param {!proto.surveillancepb.ListOfacRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.surveillancepb.ListOfacResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.surveillancepb.ListOfacResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.surveillancepb.OfacServiceClient.prototype.listOfac =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/surveillancepb.OfacService/ListOfac',
      request,
      metadata || {},
      methodDescriptor_OfacService_ListOfac,
      callback);
};


/**
 * @param {!proto.surveillancepb.ListOfacRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.surveillancepb.ListOfacResponse>}
 *     Promise that resolves to the response
 */
proto.surveillancepb.OfacServicePromiseClient.prototype.listOfac =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/surveillancepb.OfacService/ListOfac',
      request,
      metadata || {},
      methodDescriptor_OfacService_ListOfac);
};


module.exports = proto.surveillancepb;

