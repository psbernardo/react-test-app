/**
 * @fileoverview gRPC-Web generated client stub for usrpb
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.usrpb = require('./useraccess_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.usrpb.UserAccessServiceClient =
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
proto.usrpb.UserAccessServicePromiseClient =
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
 *   !proto.usrpb.ListUserAccessRequest,
 *   !proto.usrpb.ListUserAccessResponse>}
 */
const methodDescriptor_UserAccessService_ListUserAccess = new grpc.web.MethodDescriptor(
  '/usrpb.UserAccessService/ListUserAccess',
  grpc.web.MethodType.UNARY,
  proto.usrpb.ListUserAccessRequest,
  proto.usrpb.ListUserAccessResponse,
  /**
   * @param {!proto.usrpb.ListUserAccessRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.usrpb.ListUserAccessResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.usrpb.ListUserAccessRequest,
 *   !proto.usrpb.ListUserAccessResponse>}
 */
const methodInfo_UserAccessService_ListUserAccess = new grpc.web.AbstractClientBase.MethodInfo(
  proto.usrpb.ListUserAccessResponse,
  /**
   * @param {!proto.usrpb.ListUserAccessRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.usrpb.ListUserAccessResponse.deserializeBinary
);


/**
 * @param {!proto.usrpb.ListUserAccessRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.usrpb.ListUserAccessResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.usrpb.ListUserAccessResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.usrpb.UserAccessServiceClient.prototype.listUserAccess =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/usrpb.UserAccessService/ListUserAccess',
      request,
      metadata || {},
      methodDescriptor_UserAccessService_ListUserAccess,
      callback);
};


/**
 * @param {!proto.usrpb.ListUserAccessRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.usrpb.ListUserAccessResponse>}
 *     A native promise that resolves to the response
 */
proto.usrpb.UserAccessServicePromiseClient.prototype.listUserAccess =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/usrpb.UserAccessService/ListUserAccess',
      request,
      metadata || {},
      methodDescriptor_UserAccessService_ListUserAccess);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.usrpb.UserAccess,
 *   !proto.usrpb.UserAccess>}
 */
const methodDescriptor_UserAccessService_SaveUserAccess = new grpc.web.MethodDescriptor(
  '/usrpb.UserAccessService/SaveUserAccess',
  grpc.web.MethodType.UNARY,
  proto.usrpb.UserAccess,
  proto.usrpb.UserAccess,
  /**
   * @param {!proto.usrpb.UserAccess} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.usrpb.UserAccess.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.usrpb.UserAccess,
 *   !proto.usrpb.UserAccess>}
 */
const methodInfo_UserAccessService_SaveUserAccess = new grpc.web.AbstractClientBase.MethodInfo(
  proto.usrpb.UserAccess,
  /**
   * @param {!proto.usrpb.UserAccess} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.usrpb.UserAccess.deserializeBinary
);


/**
 * @param {!proto.usrpb.UserAccess} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.usrpb.UserAccess)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.usrpb.UserAccess>|undefined}
 *     The XHR Node Readable Stream
 */
proto.usrpb.UserAccessServiceClient.prototype.saveUserAccess =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/usrpb.UserAccessService/SaveUserAccess',
      request,
      metadata || {},
      methodDescriptor_UserAccessService_SaveUserAccess,
      callback);
};


/**
 * @param {!proto.usrpb.UserAccess} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.usrpb.UserAccess>}
 *     A native promise that resolves to the response
 */
proto.usrpb.UserAccessServicePromiseClient.prototype.saveUserAccess =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/usrpb.UserAccessService/SaveUserAccess',
      request,
      metadata || {},
      methodDescriptor_UserAccessService_SaveUserAccess);
};


module.exports = proto.usrpb;

