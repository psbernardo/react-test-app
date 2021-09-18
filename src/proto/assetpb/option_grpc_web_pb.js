/**
 * @fileoverview gRPC-Web generated client stub for assetpb
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
const proto = {};
proto.assetpb = require('./option_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.assetpb.OptionProfileServiceClient =
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
proto.assetpb.OptionProfileServicePromiseClient =
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
 *   !proto.assetpb.ListOptionRequest,
 *   !proto.assetpb.ListOptionResponse>}
 */
const methodDescriptor_OptionProfileService_ListOptionProfile = new grpc.web.MethodDescriptor(
  '/assetpb.OptionProfileService/ListOptionProfile',
  grpc.web.MethodType.UNARY,
  proto.assetpb.ListOptionRequest,
  proto.assetpb.ListOptionResponse,
  /**
   * @param {!proto.assetpb.ListOptionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.assetpb.ListOptionResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.assetpb.ListOptionRequest,
 *   !proto.assetpb.ListOptionResponse>}
 */
const methodInfo_OptionProfileService_ListOptionProfile = new grpc.web.AbstractClientBase.MethodInfo(
  proto.assetpb.ListOptionResponse,
  /**
   * @param {!proto.assetpb.ListOptionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.assetpb.ListOptionResponse.deserializeBinary
);


/**
 * @param {!proto.assetpb.ListOptionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.assetpb.ListOptionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.assetpb.ListOptionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.assetpb.OptionProfileServiceClient.prototype.listOptionProfile =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/assetpb.OptionProfileService/ListOptionProfile',
      request,
      metadata || {},
      methodDescriptor_OptionProfileService_ListOptionProfile,
      callback);
};


/**
 * @param {!proto.assetpb.ListOptionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.assetpb.ListOptionResponse>}
 *     A native promise that resolves to the response
 */
proto.assetpb.OptionProfileServicePromiseClient.prototype.listOptionProfile =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/assetpb.OptionProfileService/ListOptionProfile',
      request,
      metadata || {},
      methodDescriptor_OptionProfileService_ListOptionProfile);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.assetpb.Option,
 *   !proto.assetpb.CreateOptionProfileResponse>}
 */
const methodDescriptor_OptionProfileService_CreateOptionProfile = new grpc.web.MethodDescriptor(
  '/assetpb.OptionProfileService/CreateOptionProfile',
  grpc.web.MethodType.UNARY,
  proto.assetpb.Option,
  proto.assetpb.CreateOptionProfileResponse,
  /**
   * @param {!proto.assetpb.Option} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.assetpb.CreateOptionProfileResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.assetpb.Option,
 *   !proto.assetpb.CreateOptionProfileResponse>}
 */
const methodInfo_OptionProfileService_CreateOptionProfile = new grpc.web.AbstractClientBase.MethodInfo(
  proto.assetpb.CreateOptionProfileResponse,
  /**
   * @param {!proto.assetpb.Option} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.assetpb.CreateOptionProfileResponse.deserializeBinary
);


/**
 * @param {!proto.assetpb.Option} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.assetpb.CreateOptionProfileResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.assetpb.CreateOptionProfileResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.assetpb.OptionProfileServiceClient.prototype.createOptionProfile =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/assetpb.OptionProfileService/CreateOptionProfile',
      request,
      metadata || {},
      methodDescriptor_OptionProfileService_CreateOptionProfile,
      callback);
};


/**
 * @param {!proto.assetpb.Option} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.assetpb.CreateOptionProfileResponse>}
 *     A native promise that resolves to the response
 */
proto.assetpb.OptionProfileServicePromiseClient.prototype.createOptionProfile =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/assetpb.OptionProfileService/CreateOptionProfile',
      request,
      metadata || {},
      methodDescriptor_OptionProfileService_CreateOptionProfile);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.assetpb.Option,
 *   !proto.assetpb.UpdateOptionProfileResponse>}
 */
const methodDescriptor_OptionProfileService_UpdateOptionProfile = new grpc.web.MethodDescriptor(
  '/assetpb.OptionProfileService/UpdateOptionProfile',
  grpc.web.MethodType.UNARY,
  proto.assetpb.Option,
  proto.assetpb.UpdateOptionProfileResponse,
  /**
   * @param {!proto.assetpb.Option} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.assetpb.UpdateOptionProfileResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.assetpb.Option,
 *   !proto.assetpb.UpdateOptionProfileResponse>}
 */
const methodInfo_OptionProfileService_UpdateOptionProfile = new grpc.web.AbstractClientBase.MethodInfo(
  proto.assetpb.UpdateOptionProfileResponse,
  /**
   * @param {!proto.assetpb.Option} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.assetpb.UpdateOptionProfileResponse.deserializeBinary
);


/**
 * @param {!proto.assetpb.Option} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.assetpb.UpdateOptionProfileResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.assetpb.UpdateOptionProfileResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.assetpb.OptionProfileServiceClient.prototype.updateOptionProfile =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/assetpb.OptionProfileService/UpdateOptionProfile',
      request,
      metadata || {},
      methodDescriptor_OptionProfileService_UpdateOptionProfile,
      callback);
};


/**
 * @param {!proto.assetpb.Option} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.assetpb.UpdateOptionProfileResponse>}
 *     A native promise that resolves to the response
 */
proto.assetpb.OptionProfileServicePromiseClient.prototype.updateOptionProfile =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/assetpb.OptionProfileService/UpdateOptionProfile',
      request,
      metadata || {},
      methodDescriptor_OptionProfileService_UpdateOptionProfile);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.assetpb.ReadOptionRequest,
 *   !proto.assetpb.ReadOptionResponse>}
 */
const methodDescriptor_OptionProfileService_ReadOption = new grpc.web.MethodDescriptor(
  '/assetpb.OptionProfileService/ReadOption',
  grpc.web.MethodType.UNARY,
  proto.assetpb.ReadOptionRequest,
  proto.assetpb.ReadOptionResponse,
  /**
   * @param {!proto.assetpb.ReadOptionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.assetpb.ReadOptionResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.assetpb.ReadOptionRequest,
 *   !proto.assetpb.ReadOptionResponse>}
 */
const methodInfo_OptionProfileService_ReadOption = new grpc.web.AbstractClientBase.MethodInfo(
  proto.assetpb.ReadOptionResponse,
  /**
   * @param {!proto.assetpb.ReadOptionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.assetpb.ReadOptionResponse.deserializeBinary
);


/**
 * @param {!proto.assetpb.ReadOptionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.assetpb.ReadOptionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.assetpb.ReadOptionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.assetpb.OptionProfileServiceClient.prototype.readOption =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/assetpb.OptionProfileService/ReadOption',
      request,
      metadata || {},
      methodDescriptor_OptionProfileService_ReadOption,
      callback);
};


/**
 * @param {!proto.assetpb.ReadOptionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.assetpb.ReadOptionResponse>}
 *     A native promise that resolves to the response
 */
proto.assetpb.OptionProfileServicePromiseClient.prototype.readOption =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/assetpb.OptionProfileService/ReadOption',
      request,
      metadata || {},
      methodDescriptor_OptionProfileService_ReadOption);
};


module.exports = proto.assetpb;

