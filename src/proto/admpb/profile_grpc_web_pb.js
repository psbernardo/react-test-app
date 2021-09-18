/**
 * @fileoverview gRPC-Web generated client stub for admpb
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
proto.admpb = require('./profile_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.admpb.ProfileServiceClient =
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
proto.admpb.ProfileServicePromiseClient =
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
 *   !proto.admpb.ReadProfileRequest,
 *   !proto.admpb.ReadProfileResponse>}
 */
const methodDescriptor_ProfileService_ReadProfile = new grpc.web.MethodDescriptor(
  '/admpb.ProfileService/ReadProfile',
  grpc.web.MethodType.UNARY,
  proto.admpb.ReadProfileRequest,
  proto.admpb.ReadProfileResponse,
  /**
   * @param {!proto.admpb.ReadProfileRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admpb.ReadProfileResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.admpb.ReadProfileRequest,
 *   !proto.admpb.ReadProfileResponse>}
 */
const methodInfo_ProfileService_ReadProfile = new grpc.web.AbstractClientBase.MethodInfo(
  proto.admpb.ReadProfileResponse,
  /**
   * @param {!proto.admpb.ReadProfileRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admpb.ReadProfileResponse.deserializeBinary
);


/**
 * @param {!proto.admpb.ReadProfileRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.admpb.ReadProfileResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.admpb.ReadProfileResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.admpb.ProfileServiceClient.prototype.readProfile =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/admpb.ProfileService/ReadProfile',
      request,
      metadata || {},
      methodDescriptor_ProfileService_ReadProfile,
      callback);
};


/**
 * @param {!proto.admpb.ReadProfileRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.admpb.ReadProfileResponse>}
 *     Promise that resolves to the response
 */
proto.admpb.ProfileServicePromiseClient.prototype.readProfile =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/admpb.ProfileService/ReadProfile',
      request,
      metadata || {},
      methodDescriptor_ProfileService_ReadProfile);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.admpb.ListProfileRequest,
 *   !proto.admpb.ListProfileResponse>}
 */
const methodDescriptor_ProfileService_ListProfile = new grpc.web.MethodDescriptor(
  '/admpb.ProfileService/ListProfile',
  grpc.web.MethodType.UNARY,
  proto.admpb.ListProfileRequest,
  proto.admpb.ListProfileResponse,
  /**
   * @param {!proto.admpb.ListProfileRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admpb.ListProfileResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.admpb.ListProfileRequest,
 *   !proto.admpb.ListProfileResponse>}
 */
const methodInfo_ProfileService_ListProfile = new grpc.web.AbstractClientBase.MethodInfo(
  proto.admpb.ListProfileResponse,
  /**
   * @param {!proto.admpb.ListProfileRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admpb.ListProfileResponse.deserializeBinary
);


/**
 * @param {!proto.admpb.ListProfileRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.admpb.ListProfileResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.admpb.ListProfileResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.admpb.ProfileServiceClient.prototype.listProfile =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/admpb.ProfileService/ListProfile',
      request,
      metadata || {},
      methodDescriptor_ProfileService_ListProfile,
      callback);
};


/**
 * @param {!proto.admpb.ListProfileRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.admpb.ListProfileResponse>}
 *     Promise that resolves to the response
 */
proto.admpb.ProfileServicePromiseClient.prototype.listProfile =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/admpb.ProfileService/ListProfile',
      request,
      metadata || {},
      methodDescriptor_ProfileService_ListProfile);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.admpb.ExecuteProfileRequest,
 *   !proto.admpb.ExecuteProfileResponse>}
 */
const methodDescriptor_ProfileService_ExecuteProfile = new grpc.web.MethodDescriptor(
  '/admpb.ProfileService/ExecuteProfile',
  grpc.web.MethodType.UNARY,
  proto.admpb.ExecuteProfileRequest,
  proto.admpb.ExecuteProfileResponse,
  /**
   * @param {!proto.admpb.ExecuteProfileRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admpb.ExecuteProfileResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.admpb.ExecuteProfileRequest,
 *   !proto.admpb.ExecuteProfileResponse>}
 */
const methodInfo_ProfileService_ExecuteProfile = new grpc.web.AbstractClientBase.MethodInfo(
  proto.admpb.ExecuteProfileResponse,
  /**
   * @param {!proto.admpb.ExecuteProfileRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admpb.ExecuteProfileResponse.deserializeBinary
);


/**
 * @param {!proto.admpb.ExecuteProfileRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.admpb.ExecuteProfileResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.admpb.ExecuteProfileResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.admpb.ProfileServiceClient.prototype.executeProfile =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/admpb.ProfileService/ExecuteProfile',
      request,
      metadata || {},
      methodDescriptor_ProfileService_ExecuteProfile,
      callback);
};


/**
 * @param {!proto.admpb.ExecuteProfileRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.admpb.ExecuteProfileResponse>}
 *     Promise that resolves to the response
 */
proto.admpb.ProfileServicePromiseClient.prototype.executeProfile =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/admpb.ProfileService/ExecuteProfile',
      request,
      metadata || {},
      methodDescriptor_ProfileService_ExecuteProfile);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.admpb.SettleDateRequest,
 *   !proto.admpb.ReadProfileResponse>}
 */
const methodDescriptor_ProfileService_GetSettleDate = new grpc.web.MethodDescriptor(
  '/admpb.ProfileService/GetSettleDate',
  grpc.web.MethodType.UNARY,
  proto.admpb.SettleDateRequest,
  proto.admpb.ReadProfileResponse,
  /**
   * @param {!proto.admpb.SettleDateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admpb.ReadProfileResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.admpb.SettleDateRequest,
 *   !proto.admpb.ReadProfileResponse>}
 */
const methodInfo_ProfileService_GetSettleDate = new grpc.web.AbstractClientBase.MethodInfo(
  proto.admpb.ReadProfileResponse,
  /**
   * @param {!proto.admpb.SettleDateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admpb.ReadProfileResponse.deserializeBinary
);


/**
 * @param {!proto.admpb.SettleDateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.admpb.ReadProfileResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.admpb.ReadProfileResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.admpb.ProfileServiceClient.prototype.getSettleDate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/admpb.ProfileService/GetSettleDate',
      request,
      metadata || {},
      methodDescriptor_ProfileService_GetSettleDate,
      callback);
};


/**
 * @param {!proto.admpb.SettleDateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.admpb.ReadProfileResponse>}
 *     Promise that resolves to the response
 */
proto.admpb.ProfileServicePromiseClient.prototype.getSettleDate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/admpb.ProfileService/GetSettleDate',
      request,
      metadata || {},
      methodDescriptor_ProfileService_GetSettleDate);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.admpb.UpdateProfileRequest,
 *   !proto.admpb.UpdateProfileResponse>}
 */
const methodDescriptor_ProfileService_UpdateProfile = new grpc.web.MethodDescriptor(
  '/admpb.ProfileService/UpdateProfile',
  grpc.web.MethodType.UNARY,
  proto.admpb.UpdateProfileRequest,
  proto.admpb.UpdateProfileResponse,
  /**
   * @param {!proto.admpb.UpdateProfileRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admpb.UpdateProfileResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.admpb.UpdateProfileRequest,
 *   !proto.admpb.UpdateProfileResponse>}
 */
const methodInfo_ProfileService_UpdateProfile = new grpc.web.AbstractClientBase.MethodInfo(
  proto.admpb.UpdateProfileResponse,
  /**
   * @param {!proto.admpb.UpdateProfileRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admpb.UpdateProfileResponse.deserializeBinary
);


/**
 * @param {!proto.admpb.UpdateProfileRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.admpb.UpdateProfileResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.admpb.UpdateProfileResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.admpb.ProfileServiceClient.prototype.updateProfile =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/admpb.ProfileService/UpdateProfile',
      request,
      metadata || {},
      methodDescriptor_ProfileService_UpdateProfile,
      callback);
};


/**
 * @param {!proto.admpb.UpdateProfileRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.admpb.UpdateProfileResponse>}
 *     Promise that resolves to the response
 */
proto.admpb.ProfileServicePromiseClient.prototype.updateProfile =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/admpb.ProfileService/UpdateProfile',
      request,
      metadata || {},
      methodDescriptor_ProfileService_UpdateProfile);
};


module.exports = proto.admpb;

