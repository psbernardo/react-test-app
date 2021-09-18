/**
 * @fileoverview gRPC-Web generated client stub for trnspb
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

var proto_utilspb_pagination_pb = require('../../proto/utilspb/pagination_pb.js')
const proto = {};
proto.trnspb = require('./nscc_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.trnspb.NsccServiceClient =
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
proto.trnspb.NsccServicePromiseClient =
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
 *   !proto.trnspb.ListNsccRequest,
 *   !proto.trnspb.ListNsccResponse>}
 */
const methodDescriptor_NsccService_ListNscc = new grpc.web.MethodDescriptor(
  '/trnspb.NsccService/ListNscc',
  grpc.web.MethodType.UNARY,
  proto.trnspb.ListNsccRequest,
  proto.trnspb.ListNsccResponse,
  /**
   * @param {!proto.trnspb.ListNsccRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.trnspb.ListNsccResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.trnspb.ListNsccRequest,
 *   !proto.trnspb.ListNsccResponse>}
 */
const methodInfo_NsccService_ListNscc = new grpc.web.AbstractClientBase.MethodInfo(
  proto.trnspb.ListNsccResponse,
  /**
   * @param {!proto.trnspb.ListNsccRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.trnspb.ListNsccResponse.deserializeBinary
);


/**
 * @param {!proto.trnspb.ListNsccRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.trnspb.ListNsccResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.trnspb.ListNsccResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.trnspb.NsccServiceClient.prototype.listNscc =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/trnspb.NsccService/ListNscc',
      request,
      metadata || {},
      methodDescriptor_NsccService_ListNscc,
      callback);
};


/**
 * @param {!proto.trnspb.ListNsccRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.trnspb.ListNsccResponse>}
 *     A native promise that resolves to the response
 */
proto.trnspb.NsccServicePromiseClient.prototype.listNscc =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/trnspb.NsccService/ListNscc',
      request,
      metadata || {},
      methodDescriptor_NsccService_ListNscc);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.trnspb.CreateNsccRequest,
 *   !proto.trnspb.CreateNsccResponse>}
 */
const methodDescriptor_NsccService_CreateNscc = new grpc.web.MethodDescriptor(
  '/trnspb.NsccService/CreateNscc',
  grpc.web.MethodType.UNARY,
  proto.trnspb.CreateNsccRequest,
  proto.trnspb.CreateNsccResponse,
  /**
   * @param {!proto.trnspb.CreateNsccRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.trnspb.CreateNsccResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.trnspb.CreateNsccRequest,
 *   !proto.trnspb.CreateNsccResponse>}
 */
const methodInfo_NsccService_CreateNscc = new grpc.web.AbstractClientBase.MethodInfo(
  proto.trnspb.CreateNsccResponse,
  /**
   * @param {!proto.trnspb.CreateNsccRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.trnspb.CreateNsccResponse.deserializeBinary
);


/**
 * @param {!proto.trnspb.CreateNsccRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.trnspb.CreateNsccResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.trnspb.CreateNsccResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.trnspb.NsccServiceClient.prototype.createNscc =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/trnspb.NsccService/CreateNscc',
      request,
      metadata || {},
      methodDescriptor_NsccService_CreateNscc,
      callback);
};


/**
 * @param {!proto.trnspb.CreateNsccRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.trnspb.CreateNsccResponse>}
 *     A native promise that resolves to the response
 */
proto.trnspb.NsccServicePromiseClient.prototype.createNscc =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/trnspb.NsccService/CreateNscc',
      request,
      metadata || {},
      methodDescriptor_NsccService_CreateNscc);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.trnspb.UpdateNsccRequest,
 *   !proto.trnspb.UpdateNsccResponse>}
 */
const methodDescriptor_NsccService_UpdateNscc = new grpc.web.MethodDescriptor(
  '/trnspb.NsccService/UpdateNscc',
  grpc.web.MethodType.UNARY,
  proto.trnspb.UpdateNsccRequest,
  proto.trnspb.UpdateNsccResponse,
  /**
   * @param {!proto.trnspb.UpdateNsccRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.trnspb.UpdateNsccResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.trnspb.UpdateNsccRequest,
 *   !proto.trnspb.UpdateNsccResponse>}
 */
const methodInfo_NsccService_UpdateNscc = new grpc.web.AbstractClientBase.MethodInfo(
  proto.trnspb.UpdateNsccResponse,
  /**
   * @param {!proto.trnspb.UpdateNsccRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.trnspb.UpdateNsccResponse.deserializeBinary
);


/**
 * @param {!proto.trnspb.UpdateNsccRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.trnspb.UpdateNsccResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.trnspb.UpdateNsccResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.trnspb.NsccServiceClient.prototype.updateNscc =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/trnspb.NsccService/UpdateNscc',
      request,
      metadata || {},
      methodDescriptor_NsccService_UpdateNscc,
      callback);
};


/**
 * @param {!proto.trnspb.UpdateNsccRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.trnspb.UpdateNsccResponse>}
 *     A native promise that resolves to the response
 */
proto.trnspb.NsccServicePromiseClient.prototype.updateNscc =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/trnspb.NsccService/UpdateNscc',
      request,
      metadata || {},
      methodDescriptor_NsccService_UpdateNscc);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.trnspb.DeleteNsccRequest,
 *   !proto.trnspb.DeleteNsccResponse>}
 */
const methodDescriptor_NsccService_DeleteNscc = new grpc.web.MethodDescriptor(
  '/trnspb.NsccService/DeleteNscc',
  grpc.web.MethodType.UNARY,
  proto.trnspb.DeleteNsccRequest,
  proto.trnspb.DeleteNsccResponse,
  /**
   * @param {!proto.trnspb.DeleteNsccRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.trnspb.DeleteNsccResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.trnspb.DeleteNsccRequest,
 *   !proto.trnspb.DeleteNsccResponse>}
 */
const methodInfo_NsccService_DeleteNscc = new grpc.web.AbstractClientBase.MethodInfo(
  proto.trnspb.DeleteNsccResponse,
  /**
   * @param {!proto.trnspb.DeleteNsccRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.trnspb.DeleteNsccResponse.deserializeBinary
);


/**
 * @param {!proto.trnspb.DeleteNsccRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.trnspb.DeleteNsccResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.trnspb.DeleteNsccResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.trnspb.NsccServiceClient.prototype.deleteNscc =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/trnspb.NsccService/DeleteNscc',
      request,
      metadata || {},
      methodDescriptor_NsccService_DeleteNscc,
      callback);
};


/**
 * @param {!proto.trnspb.DeleteNsccRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.trnspb.DeleteNsccResponse>}
 *     A native promise that resolves to the response
 */
proto.trnspb.NsccServicePromiseClient.prototype.deleteNscc =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/trnspb.NsccService/DeleteNscc',
      request,
      metadata || {},
      methodDescriptor_NsccService_DeleteNscc);
};


module.exports = proto.trnspb;

