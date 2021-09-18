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
proto.usrpb = require('./role_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.usrpb.RoleServiceClient =
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
proto.usrpb.RoleServicePromiseClient =
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
 *   !proto.usrpb.ListUserRoleRequest,
 *   !proto.usrpb.ListUserRoleResponse>}
 */
const methodDescriptor_RoleService_ListUserRole = new grpc.web.MethodDescriptor(
  '/usrpb.RoleService/ListUserRole',
  grpc.web.MethodType.UNARY,
  proto.usrpb.ListUserRoleRequest,
  proto.usrpb.ListUserRoleResponse,
  /**
   * @param {!proto.usrpb.ListUserRoleRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.usrpb.ListUserRoleResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.usrpb.ListUserRoleRequest,
 *   !proto.usrpb.ListUserRoleResponse>}
 */
const methodInfo_RoleService_ListUserRole = new grpc.web.AbstractClientBase.MethodInfo(
  proto.usrpb.ListUserRoleResponse,
  /**
   * @param {!proto.usrpb.ListUserRoleRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.usrpb.ListUserRoleResponse.deserializeBinary
);


/**
 * @param {!proto.usrpb.ListUserRoleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.usrpb.ListUserRoleResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.usrpb.ListUserRoleResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.usrpb.RoleServiceClient.prototype.listUserRole =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/usrpb.RoleService/ListUserRole',
      request,
      metadata || {},
      methodDescriptor_RoleService_ListUserRole,
      callback);
};


/**
 * @param {!proto.usrpb.ListUserRoleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.usrpb.ListUserRoleResponse>}
 *     A native promise that resolves to the response
 */
proto.usrpb.RoleServicePromiseClient.prototype.listUserRole =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/usrpb.RoleService/ListUserRole',
      request,
      metadata || {},
      methodDescriptor_RoleService_ListUserRole);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.usrpb.SaveRoleRequest,
 *   !proto.usrpb.SaveRoleResponse>}
 */
const methodDescriptor_RoleService_SaveRoles = new grpc.web.MethodDescriptor(
  '/usrpb.RoleService/SaveRoles',
  grpc.web.MethodType.UNARY,
  proto.usrpb.SaveRoleRequest,
  proto.usrpb.SaveRoleResponse,
  /**
   * @param {!proto.usrpb.SaveRoleRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.usrpb.SaveRoleResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.usrpb.SaveRoleRequest,
 *   !proto.usrpb.SaveRoleResponse>}
 */
const methodInfo_RoleService_SaveRoles = new grpc.web.AbstractClientBase.MethodInfo(
  proto.usrpb.SaveRoleResponse,
  /**
   * @param {!proto.usrpb.SaveRoleRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.usrpb.SaveRoleResponse.deserializeBinary
);


/**
 * @param {!proto.usrpb.SaveRoleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.usrpb.SaveRoleResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.usrpb.SaveRoleResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.usrpb.RoleServiceClient.prototype.saveRoles =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/usrpb.RoleService/SaveRoles',
      request,
      metadata || {},
      methodDescriptor_RoleService_SaveRoles,
      callback);
};


/**
 * @param {!proto.usrpb.SaveRoleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.usrpb.SaveRoleResponse>}
 *     A native promise that resolves to the response
 */
proto.usrpb.RoleServicePromiseClient.prototype.saveRoles =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/usrpb.RoleService/SaveRoles',
      request,
      metadata || {},
      methodDescriptor_RoleService_SaveRoles);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.usrpb.ListUserRoleRequest,
 *   !proto.usrpb.ListUserRoleResponse>}
 */
const methodDescriptor_RoleService_ListRoles = new grpc.web.MethodDescriptor(
  '/usrpb.RoleService/ListRoles',
  grpc.web.MethodType.UNARY,
  proto.usrpb.ListUserRoleRequest,
  proto.usrpb.ListUserRoleResponse,
  /**
   * @param {!proto.usrpb.ListUserRoleRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.usrpb.ListUserRoleResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.usrpb.ListUserRoleRequest,
 *   !proto.usrpb.ListUserRoleResponse>}
 */
const methodInfo_RoleService_ListRoles = new grpc.web.AbstractClientBase.MethodInfo(
  proto.usrpb.ListUserRoleResponse,
  /**
   * @param {!proto.usrpb.ListUserRoleRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.usrpb.ListUserRoleResponse.deserializeBinary
);


/**
 * @param {!proto.usrpb.ListUserRoleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.usrpb.ListUserRoleResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.usrpb.ListUserRoleResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.usrpb.RoleServiceClient.prototype.listRoles =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/usrpb.RoleService/ListRoles',
      request,
      metadata || {},
      methodDescriptor_RoleService_ListRoles,
      callback);
};


/**
 * @param {!proto.usrpb.ListUserRoleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.usrpb.ListUserRoleResponse>}
 *     A native promise that resolves to the response
 */
proto.usrpb.RoleServicePromiseClient.prototype.listRoles =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/usrpb.RoleService/ListRoles',
      request,
      metadata || {},
      methodDescriptor_RoleService_ListRoles);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.usrpb.AddRoleRequest,
 *   !proto.usrpb.SaveRoleResponse>}
 */
const methodDescriptor_RoleService_AddRole = new grpc.web.MethodDescriptor(
  '/usrpb.RoleService/AddRole',
  grpc.web.MethodType.UNARY,
  proto.usrpb.AddRoleRequest,
  proto.usrpb.SaveRoleResponse,
  /**
   * @param {!proto.usrpb.AddRoleRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.usrpb.SaveRoleResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.usrpb.AddRoleRequest,
 *   !proto.usrpb.SaveRoleResponse>}
 */
const methodInfo_RoleService_AddRole = new grpc.web.AbstractClientBase.MethodInfo(
  proto.usrpb.SaveRoleResponse,
  /**
   * @param {!proto.usrpb.AddRoleRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.usrpb.SaveRoleResponse.deserializeBinary
);


/**
 * @param {!proto.usrpb.AddRoleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.usrpb.SaveRoleResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.usrpb.SaveRoleResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.usrpb.RoleServiceClient.prototype.addRole =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/usrpb.RoleService/AddRole',
      request,
      metadata || {},
      methodDescriptor_RoleService_AddRole,
      callback);
};


/**
 * @param {!proto.usrpb.AddRoleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.usrpb.SaveRoleResponse>}
 *     A native promise that resolves to the response
 */
proto.usrpb.RoleServicePromiseClient.prototype.addRole =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/usrpb.RoleService/AddRole',
      request,
      metadata || {},
      methodDescriptor_RoleService_AddRole);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.usrpb.DeleteRoleRequest,
 *   !proto.usrpb.SaveRoleResponse>}
 */
const methodDescriptor_RoleService_DeleteRole = new grpc.web.MethodDescriptor(
  '/usrpb.RoleService/DeleteRole',
  grpc.web.MethodType.UNARY,
  proto.usrpb.DeleteRoleRequest,
  proto.usrpb.SaveRoleResponse,
  /**
   * @param {!proto.usrpb.DeleteRoleRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.usrpb.SaveRoleResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.usrpb.DeleteRoleRequest,
 *   !proto.usrpb.SaveRoleResponse>}
 */
const methodInfo_RoleService_DeleteRole = new grpc.web.AbstractClientBase.MethodInfo(
  proto.usrpb.SaveRoleResponse,
  /**
   * @param {!proto.usrpb.DeleteRoleRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.usrpb.SaveRoleResponse.deserializeBinary
);


/**
 * @param {!proto.usrpb.DeleteRoleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.usrpb.SaveRoleResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.usrpb.SaveRoleResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.usrpb.RoleServiceClient.prototype.deleteRole =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/usrpb.RoleService/DeleteRole',
      request,
      metadata || {},
      methodDescriptor_RoleService_DeleteRole,
      callback);
};


/**
 * @param {!proto.usrpb.DeleteRoleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.usrpb.SaveRoleResponse>}
 *     A native promise that resolves to the response
 */
proto.usrpb.RoleServicePromiseClient.prototype.deleteRole =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/usrpb.RoleService/DeleteRole',
      request,
      metadata || {},
      methodDescriptor_RoleService_DeleteRole);
};


module.exports = proto.usrpb;

