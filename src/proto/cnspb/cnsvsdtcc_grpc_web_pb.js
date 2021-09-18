/**
 * @fileoverview gRPC-Web generated client stub for cnspb
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
proto.cnspb = require('./cnsvsdtcc_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.cnspb.CNSvsDTCCServiceClient =
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
proto.cnspb.CNSvsDTCCServicePromiseClient =
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
 *   !proto.cnspb.ListCNSvsDTCCRequest,
 *   !proto.cnspb.ListCNSvsDTCCResponse>}
 */
const methodDescriptor_CNSvsDTCCService_ListCNSvsDTCC = new grpc.web.MethodDescriptor(
  '/cnspb.CNSvsDTCCService/ListCNSvsDTCC',
  grpc.web.MethodType.UNARY,
  proto.cnspb.ListCNSvsDTCCRequest,
  proto.cnspb.ListCNSvsDTCCResponse,
  /**
   * @param {!proto.cnspb.ListCNSvsDTCCRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cnspb.ListCNSvsDTCCResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cnspb.ListCNSvsDTCCRequest,
 *   !proto.cnspb.ListCNSvsDTCCResponse>}
 */
const methodInfo_CNSvsDTCCService_ListCNSvsDTCC = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cnspb.ListCNSvsDTCCResponse,
  /**
   * @param {!proto.cnspb.ListCNSvsDTCCRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cnspb.ListCNSvsDTCCResponse.deserializeBinary
);


/**
 * @param {!proto.cnspb.ListCNSvsDTCCRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cnspb.ListCNSvsDTCCResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cnspb.ListCNSvsDTCCResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cnspb.CNSvsDTCCServiceClient.prototype.listCNSvsDTCC =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cnspb.CNSvsDTCCService/ListCNSvsDTCC',
      request,
      metadata || {},
      methodDescriptor_CNSvsDTCCService_ListCNSvsDTCC,
      callback);
};


/**
 * @param {!proto.cnspb.ListCNSvsDTCCRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cnspb.ListCNSvsDTCCResponse>}
 *     A native promise that resolves to the response
 */
proto.cnspb.CNSvsDTCCServicePromiseClient.prototype.listCNSvsDTCC =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cnspb.CNSvsDTCCService/ListCNSvsDTCC',
      request,
      metadata || {},
      methodDescriptor_CNSvsDTCCService_ListCNSvsDTCC);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cnspb.ListCNSvsDTCCDetailsRequest,
 *   !proto.cnspb.ListCNSvsDTCCDetailsResponse>}
 */
const methodDescriptor_CNSvsDTCCService_ListCNSvsDTCCDetails = new grpc.web.MethodDescriptor(
  '/cnspb.CNSvsDTCCService/ListCNSvsDTCCDetails',
  grpc.web.MethodType.UNARY,
  proto.cnspb.ListCNSvsDTCCDetailsRequest,
  proto.cnspb.ListCNSvsDTCCDetailsResponse,
  /**
   * @param {!proto.cnspb.ListCNSvsDTCCDetailsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cnspb.ListCNSvsDTCCDetailsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cnspb.ListCNSvsDTCCDetailsRequest,
 *   !proto.cnspb.ListCNSvsDTCCDetailsResponse>}
 */
const methodInfo_CNSvsDTCCService_ListCNSvsDTCCDetails = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cnspb.ListCNSvsDTCCDetailsResponse,
  /**
   * @param {!proto.cnspb.ListCNSvsDTCCDetailsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cnspb.ListCNSvsDTCCDetailsResponse.deserializeBinary
);


/**
 * @param {!proto.cnspb.ListCNSvsDTCCDetailsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cnspb.ListCNSvsDTCCDetailsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cnspb.ListCNSvsDTCCDetailsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cnspb.CNSvsDTCCServiceClient.prototype.listCNSvsDTCCDetails =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cnspb.CNSvsDTCCService/ListCNSvsDTCCDetails',
      request,
      metadata || {},
      methodDescriptor_CNSvsDTCCService_ListCNSvsDTCCDetails,
      callback);
};


/**
 * @param {!proto.cnspb.ListCNSvsDTCCDetailsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cnspb.ListCNSvsDTCCDetailsResponse>}
 *     A native promise that resolves to the response
 */
proto.cnspb.CNSvsDTCCServicePromiseClient.prototype.listCNSvsDTCCDetails =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cnspb.CNSvsDTCCService/ListCNSvsDTCCDetails',
      request,
      metadata || {},
      methodDescriptor_CNSvsDTCCService_ListCNSvsDTCCDetails);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cnspb.CNSvsDTCC,
 *   !proto.cnspb.CNSvsDTCC>}
 */
const methodDescriptor_CNSvsDTCCService_UpdateNote = new grpc.web.MethodDescriptor(
  '/cnspb.CNSvsDTCCService/UpdateNote',
  grpc.web.MethodType.UNARY,
  proto.cnspb.CNSvsDTCC,
  proto.cnspb.CNSvsDTCC,
  /**
   * @param {!proto.cnspb.CNSvsDTCC} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cnspb.CNSvsDTCC.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cnspb.CNSvsDTCC,
 *   !proto.cnspb.CNSvsDTCC>}
 */
const methodInfo_CNSvsDTCCService_UpdateNote = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cnspb.CNSvsDTCC,
  /**
   * @param {!proto.cnspb.CNSvsDTCC} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cnspb.CNSvsDTCC.deserializeBinary
);


/**
 * @param {!proto.cnspb.CNSvsDTCC} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cnspb.CNSvsDTCC)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cnspb.CNSvsDTCC>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cnspb.CNSvsDTCCServiceClient.prototype.updateNote =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cnspb.CNSvsDTCCService/UpdateNote',
      request,
      metadata || {},
      methodDescriptor_CNSvsDTCCService_UpdateNote,
      callback);
};


/**
 * @param {!proto.cnspb.CNSvsDTCC} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cnspb.CNSvsDTCC>}
 *     A native promise that resolves to the response
 */
proto.cnspb.CNSvsDTCCServicePromiseClient.prototype.updateNote =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cnspb.CNSvsDTCCService/UpdateNote',
      request,
      metadata || {},
      methodDescriptor_CNSvsDTCCService_UpdateNote);
};


module.exports = proto.cnspb;

