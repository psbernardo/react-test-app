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

const proto = {};
proto.reportpb = require('./template_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.reportpb.TemplateServiceClient =
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
proto.reportpb.TemplateServicePromiseClient =
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
 *   !proto.reportpb.ListTemplateRequest,
 *   !proto.reportpb.ListTemplateResponse>}
 */
const methodDescriptor_TemplateService_ListTemplate = new grpc.web.MethodDescriptor(
  '/reportpb.TemplateService/ListTemplate',
  grpc.web.MethodType.UNARY,
  proto.reportpb.ListTemplateRequest,
  proto.reportpb.ListTemplateResponse,
  /**
   * @param {!proto.reportpb.ListTemplateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.reportpb.ListTemplateResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.reportpb.ListTemplateRequest,
 *   !proto.reportpb.ListTemplateResponse>}
 */
const methodInfo_TemplateService_ListTemplate = new grpc.web.AbstractClientBase.MethodInfo(
  proto.reportpb.ListTemplateResponse,
  /**
   * @param {!proto.reportpb.ListTemplateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.reportpb.ListTemplateResponse.deserializeBinary
);


/**
 * @param {!proto.reportpb.ListTemplateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.reportpb.ListTemplateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.reportpb.ListTemplateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.reportpb.TemplateServiceClient.prototype.listTemplate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/reportpb.TemplateService/ListTemplate',
      request,
      metadata || {},
      methodDescriptor_TemplateService_ListTemplate,
      callback);
};


/**
 * @param {!proto.reportpb.ListTemplateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.reportpb.ListTemplateResponse>}
 *     A native promise that resolves to the response
 */
proto.reportpb.TemplateServicePromiseClient.prototype.listTemplate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/reportpb.TemplateService/ListTemplate',
      request,
      metadata || {},
      methodDescriptor_TemplateService_ListTemplate);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.reportpb.ReadTemplateRequest,
 *   !proto.reportpb.ReadTemplateResponse>}
 */
const methodDescriptor_TemplateService_ReadTemplate = new grpc.web.MethodDescriptor(
  '/reportpb.TemplateService/ReadTemplate',
  grpc.web.MethodType.UNARY,
  proto.reportpb.ReadTemplateRequest,
  proto.reportpb.ReadTemplateResponse,
  /**
   * @param {!proto.reportpb.ReadTemplateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.reportpb.ReadTemplateResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.reportpb.ReadTemplateRequest,
 *   !proto.reportpb.ReadTemplateResponse>}
 */
const methodInfo_TemplateService_ReadTemplate = new grpc.web.AbstractClientBase.MethodInfo(
  proto.reportpb.ReadTemplateResponse,
  /**
   * @param {!proto.reportpb.ReadTemplateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.reportpb.ReadTemplateResponse.deserializeBinary
);


/**
 * @param {!proto.reportpb.ReadTemplateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.reportpb.ReadTemplateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.reportpb.ReadTemplateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.reportpb.TemplateServiceClient.prototype.readTemplate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/reportpb.TemplateService/ReadTemplate',
      request,
      metadata || {},
      methodDescriptor_TemplateService_ReadTemplate,
      callback);
};


/**
 * @param {!proto.reportpb.ReadTemplateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.reportpb.ReadTemplateResponse>}
 *     A native promise that resolves to the response
 */
proto.reportpb.TemplateServicePromiseClient.prototype.readTemplate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/reportpb.TemplateService/ReadTemplate',
      request,
      metadata || {},
      methodDescriptor_TemplateService_ReadTemplate);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.reportpb.Template,
 *   !proto.reportpb.CreateTemplateResponse>}
 */
const methodDescriptor_TemplateService_CreateTemplate = new grpc.web.MethodDescriptor(
  '/reportpb.TemplateService/CreateTemplate',
  grpc.web.MethodType.UNARY,
  proto.reportpb.Template,
  proto.reportpb.CreateTemplateResponse,
  /**
   * @param {!proto.reportpb.Template} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.reportpb.CreateTemplateResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.reportpb.Template,
 *   !proto.reportpb.CreateTemplateResponse>}
 */
const methodInfo_TemplateService_CreateTemplate = new grpc.web.AbstractClientBase.MethodInfo(
  proto.reportpb.CreateTemplateResponse,
  /**
   * @param {!proto.reportpb.Template} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.reportpb.CreateTemplateResponse.deserializeBinary
);


/**
 * @param {!proto.reportpb.Template} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.reportpb.CreateTemplateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.reportpb.CreateTemplateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.reportpb.TemplateServiceClient.prototype.createTemplate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/reportpb.TemplateService/CreateTemplate',
      request,
      metadata || {},
      methodDescriptor_TemplateService_CreateTemplate,
      callback);
};


/**
 * @param {!proto.reportpb.Template} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.reportpb.CreateTemplateResponse>}
 *     A native promise that resolves to the response
 */
proto.reportpb.TemplateServicePromiseClient.prototype.createTemplate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/reportpb.TemplateService/CreateTemplate',
      request,
      metadata || {},
      methodDescriptor_TemplateService_CreateTemplate);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.reportpb.Template,
 *   !proto.reportpb.UpdateTemplateResponse>}
 */
const methodDescriptor_TemplateService_UpdateTemplate = new grpc.web.MethodDescriptor(
  '/reportpb.TemplateService/UpdateTemplate',
  grpc.web.MethodType.UNARY,
  proto.reportpb.Template,
  proto.reportpb.UpdateTemplateResponse,
  /**
   * @param {!proto.reportpb.Template} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.reportpb.UpdateTemplateResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.reportpb.Template,
 *   !proto.reportpb.UpdateTemplateResponse>}
 */
const methodInfo_TemplateService_UpdateTemplate = new grpc.web.AbstractClientBase.MethodInfo(
  proto.reportpb.UpdateTemplateResponse,
  /**
   * @param {!proto.reportpb.Template} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.reportpb.UpdateTemplateResponse.deserializeBinary
);


/**
 * @param {!proto.reportpb.Template} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.reportpb.UpdateTemplateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.reportpb.UpdateTemplateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.reportpb.TemplateServiceClient.prototype.updateTemplate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/reportpb.TemplateService/UpdateTemplate',
      request,
      metadata || {},
      methodDescriptor_TemplateService_UpdateTemplate,
      callback);
};


/**
 * @param {!proto.reportpb.Template} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.reportpb.UpdateTemplateResponse>}
 *     A native promise that resolves to the response
 */
proto.reportpb.TemplateServicePromiseClient.prototype.updateTemplate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/reportpb.TemplateService/UpdateTemplate',
      request,
      metadata || {},
      methodDescriptor_TemplateService_UpdateTemplate);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.reportpb.DeleteTemplateRequest,
 *   !proto.reportpb.DeleteTemplateResponse>}
 */
const methodDescriptor_TemplateService_DeleteTemplate = new grpc.web.MethodDescriptor(
  '/reportpb.TemplateService/DeleteTemplate',
  grpc.web.MethodType.UNARY,
  proto.reportpb.DeleteTemplateRequest,
  proto.reportpb.DeleteTemplateResponse,
  /**
   * @param {!proto.reportpb.DeleteTemplateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.reportpb.DeleteTemplateResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.reportpb.DeleteTemplateRequest,
 *   !proto.reportpb.DeleteTemplateResponse>}
 */
const methodInfo_TemplateService_DeleteTemplate = new grpc.web.AbstractClientBase.MethodInfo(
  proto.reportpb.DeleteTemplateResponse,
  /**
   * @param {!proto.reportpb.DeleteTemplateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.reportpb.DeleteTemplateResponse.deserializeBinary
);


/**
 * @param {!proto.reportpb.DeleteTemplateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.reportpb.DeleteTemplateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.reportpb.DeleteTemplateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.reportpb.TemplateServiceClient.prototype.deleteTemplate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/reportpb.TemplateService/DeleteTemplate',
      request,
      metadata || {},
      methodDescriptor_TemplateService_DeleteTemplate,
      callback);
};


/**
 * @param {!proto.reportpb.DeleteTemplateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.reportpb.DeleteTemplateResponse>}
 *     A native promise that resolves to the response
 */
proto.reportpb.TemplateServicePromiseClient.prototype.deleteTemplate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/reportpb.TemplateService/DeleteTemplate',
      request,
      metadata || {},
      methodDescriptor_TemplateService_DeleteTemplate);
};


module.exports = proto.reportpb;

