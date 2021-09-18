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
proto.reportpb = require('./nonmro_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.reportpb.NonMROServiceClient =
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
proto.reportpb.NonMROServicePromiseClient =
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
 *   !proto.reportpb.ReadNonMroFileRequest,
 *   !proto.reportpb.ReadNonMroFileResponse>}
 */
const methodDescriptor_NonMROService_ReadNonMroFile = new grpc.web.MethodDescriptor(
  '/reportpb.NonMROService/ReadNonMroFile',
  grpc.web.MethodType.UNARY,
  proto.reportpb.ReadNonMroFileRequest,
  proto.reportpb.ReadNonMroFileResponse,
  /**
   * @param {!proto.reportpb.ReadNonMroFileRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.reportpb.ReadNonMroFileResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.reportpb.ReadNonMroFileRequest,
 *   !proto.reportpb.ReadNonMroFileResponse>}
 */
const methodInfo_NonMROService_ReadNonMroFile = new grpc.web.AbstractClientBase.MethodInfo(
  proto.reportpb.ReadNonMroFileResponse,
  /**
   * @param {!proto.reportpb.ReadNonMroFileRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.reportpb.ReadNonMroFileResponse.deserializeBinary
);


/**
 * @param {!proto.reportpb.ReadNonMroFileRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.reportpb.ReadNonMroFileResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.reportpb.ReadNonMroFileResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.reportpb.NonMROServiceClient.prototype.readNonMroFile =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/reportpb.NonMROService/ReadNonMroFile',
      request,
      metadata || {},
      methodDescriptor_NonMROService_ReadNonMroFile,
      callback);
};


/**
 * @param {!proto.reportpb.ReadNonMroFileRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.reportpb.ReadNonMroFileResponse>}
 *     A native promise that resolves to the response
 */
proto.reportpb.NonMROServicePromiseClient.prototype.readNonMroFile =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/reportpb.NonMROService/ReadNonMroFile',
      request,
      metadata || {},
      methodDescriptor_NonMROService_ReadNonMroFile);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.reportpb.ListNonMroRequest,
 *   !proto.reportpb.ListNonMroResponse>}
 */
const methodDescriptor_NonMROService_ListNonMroFile = new grpc.web.MethodDescriptor(
  '/reportpb.NonMROService/ListNonMroFile',
  grpc.web.MethodType.UNARY,
  proto.reportpb.ListNonMroRequest,
  proto.reportpb.ListNonMroResponse,
  /**
   * @param {!proto.reportpb.ListNonMroRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.reportpb.ListNonMroResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.reportpb.ListNonMroRequest,
 *   !proto.reportpb.ListNonMroResponse>}
 */
const methodInfo_NonMROService_ListNonMroFile = new grpc.web.AbstractClientBase.MethodInfo(
  proto.reportpb.ListNonMroResponse,
  /**
   * @param {!proto.reportpb.ListNonMroRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.reportpb.ListNonMroResponse.deserializeBinary
);


/**
 * @param {!proto.reportpb.ListNonMroRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.reportpb.ListNonMroResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.reportpb.ListNonMroResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.reportpb.NonMROServiceClient.prototype.listNonMroFile =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/reportpb.NonMROService/ListNonMroFile',
      request,
      metadata || {},
      methodDescriptor_NonMROService_ListNonMroFile,
      callback);
};


/**
 * @param {!proto.reportpb.ListNonMroRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.reportpb.ListNonMroResponse>}
 *     A native promise that resolves to the response
 */
proto.reportpb.NonMROServicePromiseClient.prototype.listNonMroFile =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/reportpb.NonMROService/ListNonMroFile',
      request,
      metadata || {},
      methodDescriptor_NonMROService_ListNonMroFile);
};


module.exports = proto.reportpb;

