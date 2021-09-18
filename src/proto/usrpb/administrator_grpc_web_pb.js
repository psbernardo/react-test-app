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


var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')
const proto = {};
proto.usrpb = require('./administrator_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.usrpb.AdministratorServiceClient =
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
proto.usrpb.AdministratorServicePromiseClient =
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
 *   !proto.usrpb.ListAdministratorRequest,
 *   !proto.usrpb.ListAdministratorResponse>}
 */
const methodDescriptor_AdministratorService_ListAdministrator = new grpc.web.MethodDescriptor(
  '/usrpb.AdministratorService/ListAdministrator',
  grpc.web.MethodType.UNARY,
  proto.usrpb.ListAdministratorRequest,
  proto.usrpb.ListAdministratorResponse,
  /**
   * @param {!proto.usrpb.ListAdministratorRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.usrpb.ListAdministratorResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.usrpb.ListAdministratorRequest,
 *   !proto.usrpb.ListAdministratorResponse>}
 */
const methodInfo_AdministratorService_ListAdministrator = new grpc.web.AbstractClientBase.MethodInfo(
  proto.usrpb.ListAdministratorResponse,
  /**
   * @param {!proto.usrpb.ListAdministratorRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.usrpb.ListAdministratorResponse.deserializeBinary
);


/**
 * @param {!proto.usrpb.ListAdministratorRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.usrpb.ListAdministratorResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.usrpb.ListAdministratorResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.usrpb.AdministratorServiceClient.prototype.listAdministrator =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/usrpb.AdministratorService/ListAdministrator',
      request,
      metadata || {},
      methodDescriptor_AdministratorService_ListAdministrator,
      callback);
};


/**
 * @param {!proto.usrpb.ListAdministratorRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.usrpb.ListAdministratorResponse>}
 *     A native promise that resolves to the response
 */
proto.usrpb.AdministratorServicePromiseClient.prototype.listAdministrator =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/usrpb.AdministratorService/ListAdministrator',
      request,
      metadata || {},
      methodDescriptor_AdministratorService_ListAdministrator);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.usrpb.Administrator,
 *   !proto.usrpb.CreateAdministratorResponse>}
 */
const methodDescriptor_AdministratorService_CreateAdministrator = new grpc.web.MethodDescriptor(
  '/usrpb.AdministratorService/CreateAdministrator',
  grpc.web.MethodType.UNARY,
  proto.usrpb.Administrator,
  proto.usrpb.CreateAdministratorResponse,
  /**
   * @param {!proto.usrpb.Administrator} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.usrpb.CreateAdministratorResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.usrpb.Administrator,
 *   !proto.usrpb.CreateAdministratorResponse>}
 */
const methodInfo_AdministratorService_CreateAdministrator = new grpc.web.AbstractClientBase.MethodInfo(
  proto.usrpb.CreateAdministratorResponse,
  /**
   * @param {!proto.usrpb.Administrator} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.usrpb.CreateAdministratorResponse.deserializeBinary
);


/**
 * @param {!proto.usrpb.Administrator} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.usrpb.CreateAdministratorResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.usrpb.CreateAdministratorResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.usrpb.AdministratorServiceClient.prototype.createAdministrator =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/usrpb.AdministratorService/CreateAdministrator',
      request,
      metadata || {},
      methodDescriptor_AdministratorService_CreateAdministrator,
      callback);
};


/**
 * @param {!proto.usrpb.Administrator} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.usrpb.CreateAdministratorResponse>}
 *     A native promise that resolves to the response
 */
proto.usrpb.AdministratorServicePromiseClient.prototype.createAdministrator =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/usrpb.AdministratorService/CreateAdministrator',
      request,
      metadata || {},
      methodDescriptor_AdministratorService_CreateAdministrator);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.usrpb.Administrator,
 *   !proto.usrpb.UpdateAdministratorResponse>}
 */
const methodDescriptor_AdministratorService_UpdateAdministrator = new grpc.web.MethodDescriptor(
  '/usrpb.AdministratorService/UpdateAdministrator',
  grpc.web.MethodType.UNARY,
  proto.usrpb.Administrator,
  proto.usrpb.UpdateAdministratorResponse,
  /**
   * @param {!proto.usrpb.Administrator} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.usrpb.UpdateAdministratorResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.usrpb.Administrator,
 *   !proto.usrpb.UpdateAdministratorResponse>}
 */
const methodInfo_AdministratorService_UpdateAdministrator = new grpc.web.AbstractClientBase.MethodInfo(
  proto.usrpb.UpdateAdministratorResponse,
  /**
   * @param {!proto.usrpb.Administrator} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.usrpb.UpdateAdministratorResponse.deserializeBinary
);


/**
 * @param {!proto.usrpb.Administrator} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.usrpb.UpdateAdministratorResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.usrpb.UpdateAdministratorResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.usrpb.AdministratorServiceClient.prototype.updateAdministrator =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/usrpb.AdministratorService/UpdateAdministrator',
      request,
      metadata || {},
      methodDescriptor_AdministratorService_UpdateAdministrator,
      callback);
};


/**
 * @param {!proto.usrpb.Administrator} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.usrpb.UpdateAdministratorResponse>}
 *     A native promise that resolves to the response
 */
proto.usrpb.AdministratorServicePromiseClient.prototype.updateAdministrator =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/usrpb.AdministratorService/UpdateAdministrator',
      request,
      metadata || {},
      methodDescriptor_AdministratorService_UpdateAdministrator);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.usrpb.DeleteAdministratorRequest,
 *   !proto.usrpb.DeleteAdministratorResponse>}
 */
const methodDescriptor_AdministratorService_DeleteAdministrator = new grpc.web.MethodDescriptor(
  '/usrpb.AdministratorService/DeleteAdministrator',
  grpc.web.MethodType.UNARY,
  proto.usrpb.DeleteAdministratorRequest,
  proto.usrpb.DeleteAdministratorResponse,
  /**
   * @param {!proto.usrpb.DeleteAdministratorRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.usrpb.DeleteAdministratorResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.usrpb.DeleteAdministratorRequest,
 *   !proto.usrpb.DeleteAdministratorResponse>}
 */
const methodInfo_AdministratorService_DeleteAdministrator = new grpc.web.AbstractClientBase.MethodInfo(
  proto.usrpb.DeleteAdministratorResponse,
  /**
   * @param {!proto.usrpb.DeleteAdministratorRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.usrpb.DeleteAdministratorResponse.deserializeBinary
);


/**
 * @param {!proto.usrpb.DeleteAdministratorRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.usrpb.DeleteAdministratorResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.usrpb.DeleteAdministratorResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.usrpb.AdministratorServiceClient.prototype.deleteAdministrator =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/usrpb.AdministratorService/DeleteAdministrator',
      request,
      metadata || {},
      methodDescriptor_AdministratorService_DeleteAdministrator,
      callback);
};


/**
 * @param {!proto.usrpb.DeleteAdministratorRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.usrpb.DeleteAdministratorResponse>}
 *     A native promise that resolves to the response
 */
proto.usrpb.AdministratorServicePromiseClient.prototype.deleteAdministrator =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/usrpb.AdministratorService/DeleteAdministrator',
      request,
      metadata || {},
      methodDescriptor_AdministratorService_DeleteAdministrator);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.usrpb.ChangePasswordRequest,
 *   !proto.usrpb.ChangePasswordResponse>}
 */
const methodDescriptor_AdministratorService_ChangePassword = new grpc.web.MethodDescriptor(
  '/usrpb.AdministratorService/ChangePassword',
  grpc.web.MethodType.UNARY,
  proto.usrpb.ChangePasswordRequest,
  proto.usrpb.ChangePasswordResponse,
  /**
   * @param {!proto.usrpb.ChangePasswordRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.usrpb.ChangePasswordResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.usrpb.ChangePasswordRequest,
 *   !proto.usrpb.ChangePasswordResponse>}
 */
const methodInfo_AdministratorService_ChangePassword = new grpc.web.AbstractClientBase.MethodInfo(
  proto.usrpb.ChangePasswordResponse,
  /**
   * @param {!proto.usrpb.ChangePasswordRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.usrpb.ChangePasswordResponse.deserializeBinary
);


/**
 * @param {!proto.usrpb.ChangePasswordRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.usrpb.ChangePasswordResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.usrpb.ChangePasswordResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.usrpb.AdministratorServiceClient.prototype.changePassword =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/usrpb.AdministratorService/ChangePassword',
      request,
      metadata || {},
      methodDescriptor_AdministratorService_ChangePassword,
      callback);
};


/**
 * @param {!proto.usrpb.ChangePasswordRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.usrpb.ChangePasswordResponse>}
 *     A native promise that resolves to the response
 */
proto.usrpb.AdministratorServicePromiseClient.prototype.changePassword =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/usrpb.AdministratorService/ChangePassword',
      request,
      metadata || {},
      methodDescriptor_AdministratorService_ChangePassword);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.usrpb.Access,
 *   !proto.usrpb.ListAccessResponse>}
 */
const methodDescriptor_AdministratorService_ListAccess = new grpc.web.MethodDescriptor(
  '/usrpb.AdministratorService/ListAccess',
  grpc.web.MethodType.UNARY,
  proto.usrpb.Access,
  proto.usrpb.ListAccessResponse,
  /**
   * @param {!proto.usrpb.Access} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.usrpb.ListAccessResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.usrpb.Access,
 *   !proto.usrpb.ListAccessResponse>}
 */
const methodInfo_AdministratorService_ListAccess = new grpc.web.AbstractClientBase.MethodInfo(
  proto.usrpb.ListAccessResponse,
  /**
   * @param {!proto.usrpb.Access} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.usrpb.ListAccessResponse.deserializeBinary
);


/**
 * @param {!proto.usrpb.Access} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.usrpb.ListAccessResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.usrpb.ListAccessResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.usrpb.AdministratorServiceClient.prototype.listAccess =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/usrpb.AdministratorService/ListAccess',
      request,
      metadata || {},
      methodDescriptor_AdministratorService_ListAccess,
      callback);
};


/**
 * @param {!proto.usrpb.Access} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.usrpb.ListAccessResponse>}
 *     A native promise that resolves to the response
 */
proto.usrpb.AdministratorServicePromiseClient.prototype.listAccess =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/usrpb.AdministratorService/ListAccess',
      request,
      metadata || {},
      methodDescriptor_AdministratorService_ListAccess);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.usrpb.Access,
 *   !proto.usrpb.CreateAccessResponse>}
 */
const methodDescriptor_AdministratorService_CreateAccess = new grpc.web.MethodDescriptor(
  '/usrpb.AdministratorService/CreateAccess',
  grpc.web.MethodType.UNARY,
  proto.usrpb.Access,
  proto.usrpb.CreateAccessResponse,
  /**
   * @param {!proto.usrpb.Access} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.usrpb.CreateAccessResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.usrpb.Access,
 *   !proto.usrpb.CreateAccessResponse>}
 */
const methodInfo_AdministratorService_CreateAccess = new grpc.web.AbstractClientBase.MethodInfo(
  proto.usrpb.CreateAccessResponse,
  /**
   * @param {!proto.usrpb.Access} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.usrpb.CreateAccessResponse.deserializeBinary
);


/**
 * @param {!proto.usrpb.Access} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.usrpb.CreateAccessResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.usrpb.CreateAccessResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.usrpb.AdministratorServiceClient.prototype.createAccess =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/usrpb.AdministratorService/CreateAccess',
      request,
      metadata || {},
      methodDescriptor_AdministratorService_CreateAccess,
      callback);
};


/**
 * @param {!proto.usrpb.Access} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.usrpb.CreateAccessResponse>}
 *     A native promise that resolves to the response
 */
proto.usrpb.AdministratorServicePromiseClient.prototype.createAccess =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/usrpb.AdministratorService/CreateAccess',
      request,
      metadata || {},
      methodDescriptor_AdministratorService_CreateAccess);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.usrpb.Access,
 *   !proto.usrpb.UpdateAccessResponse>}
 */
const methodDescriptor_AdministratorService_UpdateAccess = new grpc.web.MethodDescriptor(
  '/usrpb.AdministratorService/UpdateAccess',
  grpc.web.MethodType.UNARY,
  proto.usrpb.Access,
  proto.usrpb.UpdateAccessResponse,
  /**
   * @param {!proto.usrpb.Access} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.usrpb.UpdateAccessResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.usrpb.Access,
 *   !proto.usrpb.UpdateAccessResponse>}
 */
const methodInfo_AdministratorService_UpdateAccess = new grpc.web.AbstractClientBase.MethodInfo(
  proto.usrpb.UpdateAccessResponse,
  /**
   * @param {!proto.usrpb.Access} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.usrpb.UpdateAccessResponse.deserializeBinary
);


/**
 * @param {!proto.usrpb.Access} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.usrpb.UpdateAccessResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.usrpb.UpdateAccessResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.usrpb.AdministratorServiceClient.prototype.updateAccess =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/usrpb.AdministratorService/UpdateAccess',
      request,
      metadata || {},
      methodDescriptor_AdministratorService_UpdateAccess,
      callback);
};


/**
 * @param {!proto.usrpb.Access} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.usrpb.UpdateAccessResponse>}
 *     A native promise that resolves to the response
 */
proto.usrpb.AdministratorServicePromiseClient.prototype.updateAccess =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/usrpb.AdministratorService/UpdateAccess',
      request,
      metadata || {},
      methodDescriptor_AdministratorService_UpdateAccess);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.usrpb.ListAccessOptionRequest,
 *   !proto.usrpb.ListAccessOptionResponse>}
 */
const methodDescriptor_AdministratorService_ListAccessOption = new grpc.web.MethodDescriptor(
  '/usrpb.AdministratorService/ListAccessOption',
  grpc.web.MethodType.UNARY,
  proto.usrpb.ListAccessOptionRequest,
  proto.usrpb.ListAccessOptionResponse,
  /**
   * @param {!proto.usrpb.ListAccessOptionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.usrpb.ListAccessOptionResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.usrpb.ListAccessOptionRequest,
 *   !proto.usrpb.ListAccessOptionResponse>}
 */
const methodInfo_AdministratorService_ListAccessOption = new grpc.web.AbstractClientBase.MethodInfo(
  proto.usrpb.ListAccessOptionResponse,
  /**
   * @param {!proto.usrpb.ListAccessOptionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.usrpb.ListAccessOptionResponse.deserializeBinary
);


/**
 * @param {!proto.usrpb.ListAccessOptionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.usrpb.ListAccessOptionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.usrpb.ListAccessOptionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.usrpb.AdministratorServiceClient.prototype.listAccessOption =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/usrpb.AdministratorService/ListAccessOption',
      request,
      metadata || {},
      methodDescriptor_AdministratorService_ListAccessOption,
      callback);
};


/**
 * @param {!proto.usrpb.ListAccessOptionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.usrpb.ListAccessOptionResponse>}
 *     A native promise that resolves to the response
 */
proto.usrpb.AdministratorServicePromiseClient.prototype.listAccessOption =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/usrpb.AdministratorService/ListAccessOption',
      request,
      metadata || {},
      methodDescriptor_AdministratorService_ListAccessOption);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.usrpb.ListSubAccessOptionRequest,
 *   !proto.usrpb.ListSubAccessOptionResponse>}
 */
const methodDescriptor_AdministratorService_ListSubAccessOption = new grpc.web.MethodDescriptor(
  '/usrpb.AdministratorService/ListSubAccessOption',
  grpc.web.MethodType.UNARY,
  proto.usrpb.ListSubAccessOptionRequest,
  proto.usrpb.ListSubAccessOptionResponse,
  /**
   * @param {!proto.usrpb.ListSubAccessOptionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.usrpb.ListSubAccessOptionResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.usrpb.ListSubAccessOptionRequest,
 *   !proto.usrpb.ListSubAccessOptionResponse>}
 */
const methodInfo_AdministratorService_ListSubAccessOption = new grpc.web.AbstractClientBase.MethodInfo(
  proto.usrpb.ListSubAccessOptionResponse,
  /**
   * @param {!proto.usrpb.ListSubAccessOptionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.usrpb.ListSubAccessOptionResponse.deserializeBinary
);


/**
 * @param {!proto.usrpb.ListSubAccessOptionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.usrpb.ListSubAccessOptionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.usrpb.ListSubAccessOptionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.usrpb.AdministratorServiceClient.prototype.listSubAccessOption =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/usrpb.AdministratorService/ListSubAccessOption',
      request,
      metadata || {},
      methodDescriptor_AdministratorService_ListSubAccessOption,
      callback);
};


/**
 * @param {!proto.usrpb.ListSubAccessOptionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.usrpb.ListSubAccessOptionResponse>}
 *     A native promise that resolves to the response
 */
proto.usrpb.AdministratorServicePromiseClient.prototype.listSubAccessOption =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/usrpb.AdministratorService/ListSubAccessOption',
      request,
      metadata || {},
      methodDescriptor_AdministratorService_ListSubAccessOption);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.usrpb.EmptyRequest,
 *   !proto.usrpb.ListDefaultAccessOptionResponse>}
 */
const methodDescriptor_AdministratorService_ListDefaultAccessOption = new grpc.web.MethodDescriptor(
  '/usrpb.AdministratorService/ListDefaultAccessOption',
  grpc.web.MethodType.UNARY,
  proto.usrpb.EmptyRequest,
  proto.usrpb.ListDefaultAccessOptionResponse,
  /**
   * @param {!proto.usrpb.EmptyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.usrpb.ListDefaultAccessOptionResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.usrpb.EmptyRequest,
 *   !proto.usrpb.ListDefaultAccessOptionResponse>}
 */
const methodInfo_AdministratorService_ListDefaultAccessOption = new grpc.web.AbstractClientBase.MethodInfo(
  proto.usrpb.ListDefaultAccessOptionResponse,
  /**
   * @param {!proto.usrpb.EmptyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.usrpb.ListDefaultAccessOptionResponse.deserializeBinary
);


/**
 * @param {!proto.usrpb.EmptyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.usrpb.ListDefaultAccessOptionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.usrpb.ListDefaultAccessOptionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.usrpb.AdministratorServiceClient.prototype.listDefaultAccessOption =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/usrpb.AdministratorService/ListDefaultAccessOption',
      request,
      metadata || {},
      methodDescriptor_AdministratorService_ListDefaultAccessOption,
      callback);
};


/**
 * @param {!proto.usrpb.EmptyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.usrpb.ListDefaultAccessOptionResponse>}
 *     A native promise that resolves to the response
 */
proto.usrpb.AdministratorServicePromiseClient.prototype.listDefaultAccessOption =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/usrpb.AdministratorService/ListDefaultAccessOption',
      request,
      metadata || {},
      methodDescriptor_AdministratorService_ListDefaultAccessOption);
};


module.exports = proto.usrpb;

