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
proto.admpb = require('./userguide_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.admpb.UserGuideServiceClient =
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
proto.admpb.UserGuideServicePromiseClient =
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
 *   !proto.admpb.CreateUserGuideRequest,
 *   !proto.admpb.CreateUserGuideResponse>}
 */
const methodDescriptor_UserGuideService_CreateUserGuide = new grpc.web.MethodDescriptor(
  '/admpb.UserGuideService/CreateUserGuide',
  grpc.web.MethodType.UNARY,
  proto.admpb.CreateUserGuideRequest,
  proto.admpb.CreateUserGuideResponse,
  /**
   * @param {!proto.admpb.CreateUserGuideRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admpb.CreateUserGuideResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.admpb.CreateUserGuideRequest,
 *   !proto.admpb.CreateUserGuideResponse>}
 */
const methodInfo_UserGuideService_CreateUserGuide = new grpc.web.AbstractClientBase.MethodInfo(
  proto.admpb.CreateUserGuideResponse,
  /**
   * @param {!proto.admpb.CreateUserGuideRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admpb.CreateUserGuideResponse.deserializeBinary
);


/**
 * @param {!proto.admpb.CreateUserGuideRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.admpb.CreateUserGuideResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.admpb.CreateUserGuideResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.admpb.UserGuideServiceClient.prototype.createUserGuide =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/admpb.UserGuideService/CreateUserGuide',
      request,
      metadata || {},
      methodDescriptor_UserGuideService_CreateUserGuide,
      callback);
};


/**
 * @param {!proto.admpb.CreateUserGuideRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.admpb.CreateUserGuideResponse>}
 *     A native promise that resolves to the response
 */
proto.admpb.UserGuideServicePromiseClient.prototype.createUserGuide =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/admpb.UserGuideService/CreateUserGuide',
      request,
      metadata || {},
      methodDescriptor_UserGuideService_CreateUserGuide);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.admpb.UpdateUserGuideRequest,
 *   !proto.admpb.UpdateUserGuideResponse>}
 */
const methodDescriptor_UserGuideService_UpdateUserGuide = new grpc.web.MethodDescriptor(
  '/admpb.UserGuideService/UpdateUserGuide',
  grpc.web.MethodType.UNARY,
  proto.admpb.UpdateUserGuideRequest,
  proto.admpb.UpdateUserGuideResponse,
  /**
   * @param {!proto.admpb.UpdateUserGuideRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admpb.UpdateUserGuideResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.admpb.UpdateUserGuideRequest,
 *   !proto.admpb.UpdateUserGuideResponse>}
 */
const methodInfo_UserGuideService_UpdateUserGuide = new grpc.web.AbstractClientBase.MethodInfo(
  proto.admpb.UpdateUserGuideResponse,
  /**
   * @param {!proto.admpb.UpdateUserGuideRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admpb.UpdateUserGuideResponse.deserializeBinary
);


/**
 * @param {!proto.admpb.UpdateUserGuideRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.admpb.UpdateUserGuideResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.admpb.UpdateUserGuideResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.admpb.UserGuideServiceClient.prototype.updateUserGuide =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/admpb.UserGuideService/UpdateUserGuide',
      request,
      metadata || {},
      methodDescriptor_UserGuideService_UpdateUserGuide,
      callback);
};


/**
 * @param {!proto.admpb.UpdateUserGuideRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.admpb.UpdateUserGuideResponse>}
 *     A native promise that resolves to the response
 */
proto.admpb.UserGuideServicePromiseClient.prototype.updateUserGuide =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/admpb.UserGuideService/UpdateUserGuide',
      request,
      metadata || {},
      methodDescriptor_UserGuideService_UpdateUserGuide);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.admpb.ReadUserGuideRequest,
 *   !proto.admpb.ReadUserGuideResponse>}
 */
const methodDescriptor_UserGuideService_ReadUserGuide = new grpc.web.MethodDescriptor(
  '/admpb.UserGuideService/ReadUserGuide',
  grpc.web.MethodType.UNARY,
  proto.admpb.ReadUserGuideRequest,
  proto.admpb.ReadUserGuideResponse,
  /**
   * @param {!proto.admpb.ReadUserGuideRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admpb.ReadUserGuideResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.admpb.ReadUserGuideRequest,
 *   !proto.admpb.ReadUserGuideResponse>}
 */
const methodInfo_UserGuideService_ReadUserGuide = new grpc.web.AbstractClientBase.MethodInfo(
  proto.admpb.ReadUserGuideResponse,
  /**
   * @param {!proto.admpb.ReadUserGuideRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admpb.ReadUserGuideResponse.deserializeBinary
);


/**
 * @param {!proto.admpb.ReadUserGuideRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.admpb.ReadUserGuideResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.admpb.ReadUserGuideResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.admpb.UserGuideServiceClient.prototype.readUserGuide =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/admpb.UserGuideService/ReadUserGuide',
      request,
      metadata || {},
      methodDescriptor_UserGuideService_ReadUserGuide,
      callback);
};


/**
 * @param {!proto.admpb.ReadUserGuideRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.admpb.ReadUserGuideResponse>}
 *     A native promise that resolves to the response
 */
proto.admpb.UserGuideServicePromiseClient.prototype.readUserGuide =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/admpb.UserGuideService/ReadUserGuide',
      request,
      metadata || {},
      methodDescriptor_UserGuideService_ReadUserGuide);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.admpb.DeleteUserGuideRequest,
 *   !proto.admpb.DeleteUserGuideResponse>}
 */
const methodDescriptor_UserGuideService_DeleteUserGuide = new grpc.web.MethodDescriptor(
  '/admpb.UserGuideService/DeleteUserGuide',
  grpc.web.MethodType.UNARY,
  proto.admpb.DeleteUserGuideRequest,
  proto.admpb.DeleteUserGuideResponse,
  /**
   * @param {!proto.admpb.DeleteUserGuideRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admpb.DeleteUserGuideResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.admpb.DeleteUserGuideRequest,
 *   !proto.admpb.DeleteUserGuideResponse>}
 */
const methodInfo_UserGuideService_DeleteUserGuide = new grpc.web.AbstractClientBase.MethodInfo(
  proto.admpb.DeleteUserGuideResponse,
  /**
   * @param {!proto.admpb.DeleteUserGuideRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admpb.DeleteUserGuideResponse.deserializeBinary
);


/**
 * @param {!proto.admpb.DeleteUserGuideRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.admpb.DeleteUserGuideResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.admpb.DeleteUserGuideResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.admpb.UserGuideServiceClient.prototype.deleteUserGuide =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/admpb.UserGuideService/DeleteUserGuide',
      request,
      metadata || {},
      methodDescriptor_UserGuideService_DeleteUserGuide,
      callback);
};


/**
 * @param {!proto.admpb.DeleteUserGuideRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.admpb.DeleteUserGuideResponse>}
 *     A native promise that resolves to the response
 */
proto.admpb.UserGuideServicePromiseClient.prototype.deleteUserGuide =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/admpb.UserGuideService/DeleteUserGuide',
      request,
      metadata || {},
      methodDescriptor_UserGuideService_DeleteUserGuide);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.admpb.ListUserGuideRequest,
 *   !proto.admpb.ListUserGuideResponse>}
 */
const methodDescriptor_UserGuideService_ListUserGuide = new grpc.web.MethodDescriptor(
  '/admpb.UserGuideService/ListUserGuide',
  grpc.web.MethodType.UNARY,
  proto.admpb.ListUserGuideRequest,
  proto.admpb.ListUserGuideResponse,
  /**
   * @param {!proto.admpb.ListUserGuideRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admpb.ListUserGuideResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.admpb.ListUserGuideRequest,
 *   !proto.admpb.ListUserGuideResponse>}
 */
const methodInfo_UserGuideService_ListUserGuide = new grpc.web.AbstractClientBase.MethodInfo(
  proto.admpb.ListUserGuideResponse,
  /**
   * @param {!proto.admpb.ListUserGuideRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admpb.ListUserGuideResponse.deserializeBinary
);


/**
 * @param {!proto.admpb.ListUserGuideRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.admpb.ListUserGuideResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.admpb.ListUserGuideResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.admpb.UserGuideServiceClient.prototype.listUserGuide =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/admpb.UserGuideService/ListUserGuide',
      request,
      metadata || {},
      methodDescriptor_UserGuideService_ListUserGuide,
      callback);
};


/**
 * @param {!proto.admpb.ListUserGuideRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.admpb.ListUserGuideResponse>}
 *     A native promise that resolves to the response
 */
proto.admpb.UserGuideServicePromiseClient.prototype.listUserGuide =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/admpb.UserGuideService/ListUserGuide',
      request,
      metadata || {},
      methodDescriptor_UserGuideService_ListUserGuide);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.admpb.GetNewUserGuideIdRequest,
 *   !proto.admpb.GetNewUserGuideIdResponse>}
 */
const methodDescriptor_UserGuideService_GetNewUserGuideId = new grpc.web.MethodDescriptor(
  '/admpb.UserGuideService/GetNewUserGuideId',
  grpc.web.MethodType.UNARY,
  proto.admpb.GetNewUserGuideIdRequest,
  proto.admpb.GetNewUserGuideIdResponse,
  /**
   * @param {!proto.admpb.GetNewUserGuideIdRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admpb.GetNewUserGuideIdResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.admpb.GetNewUserGuideIdRequest,
 *   !proto.admpb.GetNewUserGuideIdResponse>}
 */
const methodInfo_UserGuideService_GetNewUserGuideId = new grpc.web.AbstractClientBase.MethodInfo(
  proto.admpb.GetNewUserGuideIdResponse,
  /**
   * @param {!proto.admpb.GetNewUserGuideIdRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admpb.GetNewUserGuideIdResponse.deserializeBinary
);


/**
 * @param {!proto.admpb.GetNewUserGuideIdRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.admpb.GetNewUserGuideIdResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.admpb.GetNewUserGuideIdResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.admpb.UserGuideServiceClient.prototype.getNewUserGuideId =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/admpb.UserGuideService/GetNewUserGuideId',
      request,
      metadata || {},
      methodDescriptor_UserGuideService_GetNewUserGuideId,
      callback);
};


/**
 * @param {!proto.admpb.GetNewUserGuideIdRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.admpb.GetNewUserGuideIdResponse>}
 *     A native promise that resolves to the response
 */
proto.admpb.UserGuideServicePromiseClient.prototype.getNewUserGuideId =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/admpb.UserGuideService/GetNewUserGuideId',
      request,
      metadata || {},
      methodDescriptor_UserGuideService_GetNewUserGuideId);
};


module.exports = proto.admpb;

