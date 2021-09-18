/**
 * @fileoverview gRPC-Web generated client stub for apexpropb
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
proto.apexpropb = require('./trns_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.apexpropb.TRNSServiceClient =
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
proto.apexpropb.TRNSServicePromiseClient =
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
 *   !proto.apexpropb.ListTRNSRequest,
 *   !proto.apexpropb.ListTRNSResponse>}
 */
const methodDescriptor_TRNSService_ListTRNS = new grpc.web.MethodDescriptor(
  '/apexpropb.TRNSService/ListTRNS',
  grpc.web.MethodType.UNARY,
  proto.apexpropb.ListTRNSRequest,
  proto.apexpropb.ListTRNSResponse,
  /**
   * @param {!proto.apexpropb.ListTRNSRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.apexpropb.ListTRNSResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.apexpropb.ListTRNSRequest,
 *   !proto.apexpropb.ListTRNSResponse>}
 */
const methodInfo_TRNSService_ListTRNS = new grpc.web.AbstractClientBase.MethodInfo(
  proto.apexpropb.ListTRNSResponse,
  /**
   * @param {!proto.apexpropb.ListTRNSRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.apexpropb.ListTRNSResponse.deserializeBinary
);


/**
 * @param {!proto.apexpropb.ListTRNSRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.apexpropb.ListTRNSResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.apexpropb.ListTRNSResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.apexpropb.TRNSServiceClient.prototype.listTRNS =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/apexpropb.TRNSService/ListTRNS',
      request,
      metadata || {},
      methodDescriptor_TRNSService_ListTRNS,
      callback);
};


/**
 * @param {!proto.apexpropb.ListTRNSRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.apexpropb.ListTRNSResponse>}
 *     Promise that resolves to the response
 */
proto.apexpropb.TRNSServicePromiseClient.prototype.listTRNS =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/apexpropb.TRNSService/ListTRNS',
      request,
      metadata || {},
      methodDescriptor_TRNSService_ListTRNS);
};


module.exports = proto.apexpropb;

