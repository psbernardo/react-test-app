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


var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')
const proto = {};
proto.surveillancepb = require('./setup_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.surveillancepb.SetupServiceClient =
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
proto.surveillancepb.SetupServicePromiseClient =
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
 *   !proto.surveillancepb.Setup,
 *   !proto.surveillancepb.CreateSetupResponse>}
 */
const methodDescriptor_SetupService_CreateSetup = new grpc.web.MethodDescriptor(
  '/surveillancepb.SetupService/CreateSetup',
  grpc.web.MethodType.UNARY,
  proto.surveillancepb.Setup,
  proto.surveillancepb.CreateSetupResponse,
  /**
   * @param {!proto.surveillancepb.Setup} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.surveillancepb.CreateSetupResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.surveillancepb.Setup,
 *   !proto.surveillancepb.CreateSetupResponse>}
 */
const methodInfo_SetupService_CreateSetup = new grpc.web.AbstractClientBase.MethodInfo(
  proto.surveillancepb.CreateSetupResponse,
  /**
   * @param {!proto.surveillancepb.Setup} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.surveillancepb.CreateSetupResponse.deserializeBinary
);


/**
 * @param {!proto.surveillancepb.Setup} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.surveillancepb.CreateSetupResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.surveillancepb.CreateSetupResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.surveillancepb.SetupServiceClient.prototype.createSetup =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/surveillancepb.SetupService/CreateSetup',
      request,
      metadata || {},
      methodDescriptor_SetupService_CreateSetup,
      callback);
};


/**
 * @param {!proto.surveillancepb.Setup} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.surveillancepb.CreateSetupResponse>}
 *     Promise that resolves to the response
 */
proto.surveillancepb.SetupServicePromiseClient.prototype.createSetup =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/surveillancepb.SetupService/CreateSetup',
      request,
      metadata || {},
      methodDescriptor_SetupService_CreateSetup);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.surveillancepb.ListSetupRequest,
 *   !proto.surveillancepb.ListSetupResponse>}
 */
const methodDescriptor_SetupService_ListSetup = new grpc.web.MethodDescriptor(
  '/surveillancepb.SetupService/ListSetup',
  grpc.web.MethodType.UNARY,
  proto.surveillancepb.ListSetupRequest,
  proto.surveillancepb.ListSetupResponse,
  /**
   * @param {!proto.surveillancepb.ListSetupRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.surveillancepb.ListSetupResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.surveillancepb.ListSetupRequest,
 *   !proto.surveillancepb.ListSetupResponse>}
 */
const methodInfo_SetupService_ListSetup = new grpc.web.AbstractClientBase.MethodInfo(
  proto.surveillancepb.ListSetupResponse,
  /**
   * @param {!proto.surveillancepb.ListSetupRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.surveillancepb.ListSetupResponse.deserializeBinary
);


/**
 * @param {!proto.surveillancepb.ListSetupRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.surveillancepb.ListSetupResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.surveillancepb.ListSetupResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.surveillancepb.SetupServiceClient.prototype.listSetup =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/surveillancepb.SetupService/ListSetup',
      request,
      metadata || {},
      methodDescriptor_SetupService_ListSetup,
      callback);
};


/**
 * @param {!proto.surveillancepb.ListSetupRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.surveillancepb.ListSetupResponse>}
 *     Promise that resolves to the response
 */
proto.surveillancepb.SetupServicePromiseClient.prototype.listSetup =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/surveillancepb.SetupService/ListSetup',
      request,
      metadata || {},
      methodDescriptor_SetupService_ListSetup);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.surveillancepb.Setup,
 *   !proto.surveillancepb.UpdateSetupResponse>}
 */
const methodDescriptor_SetupService_UpdateSetup = new grpc.web.MethodDescriptor(
  '/surveillancepb.SetupService/UpdateSetup',
  grpc.web.MethodType.UNARY,
  proto.surveillancepb.Setup,
  proto.surveillancepb.UpdateSetupResponse,
  /**
   * @param {!proto.surveillancepb.Setup} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.surveillancepb.UpdateSetupResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.surveillancepb.Setup,
 *   !proto.surveillancepb.UpdateSetupResponse>}
 */
const methodInfo_SetupService_UpdateSetup = new grpc.web.AbstractClientBase.MethodInfo(
  proto.surveillancepb.UpdateSetupResponse,
  /**
   * @param {!proto.surveillancepb.Setup} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.surveillancepb.UpdateSetupResponse.deserializeBinary
);


/**
 * @param {!proto.surveillancepb.Setup} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.surveillancepb.UpdateSetupResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.surveillancepb.UpdateSetupResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.surveillancepb.SetupServiceClient.prototype.updateSetup =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/surveillancepb.SetupService/UpdateSetup',
      request,
      metadata || {},
      methodDescriptor_SetupService_UpdateSetup,
      callback);
};


/**
 * @param {!proto.surveillancepb.Setup} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.surveillancepb.UpdateSetupResponse>}
 *     Promise that resolves to the response
 */
proto.surveillancepb.SetupServicePromiseClient.prototype.updateSetup =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/surveillancepb.SetupService/UpdateSetup',
      request,
      metadata || {},
      methodDescriptor_SetupService_UpdateSetup);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.surveillancepb.ListSurveillanceGroupRequest,
 *   !proto.surveillancepb.ListSurveillanceGroupResponse>}
 */
const methodDescriptor_SetupService_ListSurveillanceGroup = new grpc.web.MethodDescriptor(
  '/surveillancepb.SetupService/ListSurveillanceGroup',
  grpc.web.MethodType.UNARY,
  proto.surveillancepb.ListSurveillanceGroupRequest,
  proto.surveillancepb.ListSurveillanceGroupResponse,
  /**
   * @param {!proto.surveillancepb.ListSurveillanceGroupRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.surveillancepb.ListSurveillanceGroupResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.surveillancepb.ListSurveillanceGroupRequest,
 *   !proto.surveillancepb.ListSurveillanceGroupResponse>}
 */
const methodInfo_SetupService_ListSurveillanceGroup = new grpc.web.AbstractClientBase.MethodInfo(
  proto.surveillancepb.ListSurveillanceGroupResponse,
  /**
   * @param {!proto.surveillancepb.ListSurveillanceGroupRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.surveillancepb.ListSurveillanceGroupResponse.deserializeBinary
);


/**
 * @param {!proto.surveillancepb.ListSurveillanceGroupRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.surveillancepb.ListSurveillanceGroupResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.surveillancepb.ListSurveillanceGroupResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.surveillancepb.SetupServiceClient.prototype.listSurveillanceGroup =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/surveillancepb.SetupService/ListSurveillanceGroup',
      request,
      metadata || {},
      methodDescriptor_SetupService_ListSurveillanceGroup,
      callback);
};


/**
 * @param {!proto.surveillancepb.ListSurveillanceGroupRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.surveillancepb.ListSurveillanceGroupResponse>}
 *     Promise that resolves to the response
 */
proto.surveillancepb.SetupServicePromiseClient.prototype.listSurveillanceGroup =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/surveillancepb.SetupService/ListSurveillanceGroup',
      request,
      metadata || {},
      methodDescriptor_SetupService_ListSurveillanceGroup);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.surveillancepb.ListSurveillanceRequest,
 *   !proto.surveillancepb.ListSurveillanceResponse>}
 */
const methodDescriptor_SetupService_ListSurveillance = new grpc.web.MethodDescriptor(
  '/surveillancepb.SetupService/ListSurveillance',
  grpc.web.MethodType.UNARY,
  proto.surveillancepb.ListSurveillanceRequest,
  proto.surveillancepb.ListSurveillanceResponse,
  /**
   * @param {!proto.surveillancepb.ListSurveillanceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.surveillancepb.ListSurveillanceResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.surveillancepb.ListSurveillanceRequest,
 *   !proto.surveillancepb.ListSurveillanceResponse>}
 */
const methodInfo_SetupService_ListSurveillance = new grpc.web.AbstractClientBase.MethodInfo(
  proto.surveillancepb.ListSurveillanceResponse,
  /**
   * @param {!proto.surveillancepb.ListSurveillanceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.surveillancepb.ListSurveillanceResponse.deserializeBinary
);


/**
 * @param {!proto.surveillancepb.ListSurveillanceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.surveillancepb.ListSurveillanceResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.surveillancepb.ListSurveillanceResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.surveillancepb.SetupServiceClient.prototype.listSurveillance =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/surveillancepb.SetupService/ListSurveillance',
      request,
      metadata || {},
      methodDescriptor_SetupService_ListSurveillance,
      callback);
};


/**
 * @param {!proto.surveillancepb.ListSurveillanceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.surveillancepb.ListSurveillanceResponse>}
 *     Promise that resolves to the response
 */
proto.surveillancepb.SetupServicePromiseClient.prototype.listSurveillance =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/surveillancepb.SetupService/ListSurveillance',
      request,
      metadata || {},
      methodDescriptor_SetupService_ListSurveillance);
};


module.exports = proto.surveillancepb;

