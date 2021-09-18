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


var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')
const proto = {};
proto.admpb = require('./fielddefinition_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.admpb.FieldDefinitionServiceClient =
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
proto.admpb.FieldDefinitionServicePromiseClient =
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
 *   !proto.admpb.CreateFieldDefinitionRequest,
 *   !proto.admpb.CreateFieldDefinitionResponse>}
 */
const methodDescriptor_FieldDefinitionService_CreateFieldDefinition = new grpc.web.MethodDescriptor(
  '/admpb.FieldDefinitionService/CreateFieldDefinition',
  grpc.web.MethodType.UNARY,
  proto.admpb.CreateFieldDefinitionRequest,
  proto.admpb.CreateFieldDefinitionResponse,
  /**
   * @param {!proto.admpb.CreateFieldDefinitionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admpb.CreateFieldDefinitionResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.admpb.CreateFieldDefinitionRequest,
 *   !proto.admpb.CreateFieldDefinitionResponse>}
 */
const methodInfo_FieldDefinitionService_CreateFieldDefinition = new grpc.web.AbstractClientBase.MethodInfo(
  proto.admpb.CreateFieldDefinitionResponse,
  /**
   * @param {!proto.admpb.CreateFieldDefinitionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admpb.CreateFieldDefinitionResponse.deserializeBinary
);


/**
 * @param {!proto.admpb.CreateFieldDefinitionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.admpb.CreateFieldDefinitionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.admpb.CreateFieldDefinitionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.admpb.FieldDefinitionServiceClient.prototype.createFieldDefinition =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/admpb.FieldDefinitionService/CreateFieldDefinition',
      request,
      metadata || {},
      methodDescriptor_FieldDefinitionService_CreateFieldDefinition,
      callback);
};


/**
 * @param {!proto.admpb.CreateFieldDefinitionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.admpb.CreateFieldDefinitionResponse>}
 *     A native promise that resolves to the response
 */
proto.admpb.FieldDefinitionServicePromiseClient.prototype.createFieldDefinition =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/admpb.FieldDefinitionService/CreateFieldDefinition',
      request,
      metadata || {},
      methodDescriptor_FieldDefinitionService_CreateFieldDefinition);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.admpb.ReadFieldDefinitionRequest,
 *   !proto.admpb.ReadFieldDefinitionResponse>}
 */
const methodDescriptor_FieldDefinitionService_ReadFieldDefinition = new grpc.web.MethodDescriptor(
  '/admpb.FieldDefinitionService/ReadFieldDefinition',
  grpc.web.MethodType.UNARY,
  proto.admpb.ReadFieldDefinitionRequest,
  proto.admpb.ReadFieldDefinitionResponse,
  /**
   * @param {!proto.admpb.ReadFieldDefinitionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admpb.ReadFieldDefinitionResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.admpb.ReadFieldDefinitionRequest,
 *   !proto.admpb.ReadFieldDefinitionResponse>}
 */
const methodInfo_FieldDefinitionService_ReadFieldDefinition = new grpc.web.AbstractClientBase.MethodInfo(
  proto.admpb.ReadFieldDefinitionResponse,
  /**
   * @param {!proto.admpb.ReadFieldDefinitionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admpb.ReadFieldDefinitionResponse.deserializeBinary
);


/**
 * @param {!proto.admpb.ReadFieldDefinitionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.admpb.ReadFieldDefinitionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.admpb.ReadFieldDefinitionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.admpb.FieldDefinitionServiceClient.prototype.readFieldDefinition =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/admpb.FieldDefinitionService/ReadFieldDefinition',
      request,
      metadata || {},
      methodDescriptor_FieldDefinitionService_ReadFieldDefinition,
      callback);
};


/**
 * @param {!proto.admpb.ReadFieldDefinitionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.admpb.ReadFieldDefinitionResponse>}
 *     A native promise that resolves to the response
 */
proto.admpb.FieldDefinitionServicePromiseClient.prototype.readFieldDefinition =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/admpb.FieldDefinitionService/ReadFieldDefinition',
      request,
      metadata || {},
      methodDescriptor_FieldDefinitionService_ReadFieldDefinition);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.admpb.UpdateFieldDefinitionRequest,
 *   !proto.admpb.UpdateFieldDefinitionResponse>}
 */
const methodDescriptor_FieldDefinitionService_UpdateFieldDefinition = new grpc.web.MethodDescriptor(
  '/admpb.FieldDefinitionService/UpdateFieldDefinition',
  grpc.web.MethodType.UNARY,
  proto.admpb.UpdateFieldDefinitionRequest,
  proto.admpb.UpdateFieldDefinitionResponse,
  /**
   * @param {!proto.admpb.UpdateFieldDefinitionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admpb.UpdateFieldDefinitionResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.admpb.UpdateFieldDefinitionRequest,
 *   !proto.admpb.UpdateFieldDefinitionResponse>}
 */
const methodInfo_FieldDefinitionService_UpdateFieldDefinition = new grpc.web.AbstractClientBase.MethodInfo(
  proto.admpb.UpdateFieldDefinitionResponse,
  /**
   * @param {!proto.admpb.UpdateFieldDefinitionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admpb.UpdateFieldDefinitionResponse.deserializeBinary
);


/**
 * @param {!proto.admpb.UpdateFieldDefinitionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.admpb.UpdateFieldDefinitionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.admpb.UpdateFieldDefinitionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.admpb.FieldDefinitionServiceClient.prototype.updateFieldDefinition =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/admpb.FieldDefinitionService/UpdateFieldDefinition',
      request,
      metadata || {},
      methodDescriptor_FieldDefinitionService_UpdateFieldDefinition,
      callback);
};


/**
 * @param {!proto.admpb.UpdateFieldDefinitionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.admpb.UpdateFieldDefinitionResponse>}
 *     A native promise that resolves to the response
 */
proto.admpb.FieldDefinitionServicePromiseClient.prototype.updateFieldDefinition =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/admpb.FieldDefinitionService/UpdateFieldDefinition',
      request,
      metadata || {},
      methodDescriptor_FieldDefinitionService_UpdateFieldDefinition);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.admpb.DeleteFieldDefinitionRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_FieldDefinitionService_DeleteFieldDefinition = new grpc.web.MethodDescriptor(
  '/admpb.FieldDefinitionService/DeleteFieldDefinition',
  grpc.web.MethodType.UNARY,
  proto.admpb.DeleteFieldDefinitionRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.admpb.DeleteFieldDefinitionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.admpb.DeleteFieldDefinitionRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_FieldDefinitionService_DeleteFieldDefinition = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.admpb.DeleteFieldDefinitionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.admpb.DeleteFieldDefinitionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.admpb.FieldDefinitionServiceClient.prototype.deleteFieldDefinition =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/admpb.FieldDefinitionService/DeleteFieldDefinition',
      request,
      metadata || {},
      methodDescriptor_FieldDefinitionService_DeleteFieldDefinition,
      callback);
};


/**
 * @param {!proto.admpb.DeleteFieldDefinitionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     A native promise that resolves to the response
 */
proto.admpb.FieldDefinitionServicePromiseClient.prototype.deleteFieldDefinition =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/admpb.FieldDefinitionService/DeleteFieldDefinition',
      request,
      metadata || {},
      methodDescriptor_FieldDefinitionService_DeleteFieldDefinition);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.admpb.ListFieldDefinitionRequest,
 *   !proto.admpb.ListFieldDefinitionResponse>}
 */
const methodDescriptor_FieldDefinitionService_ListFieldDefinition = new grpc.web.MethodDescriptor(
  '/admpb.FieldDefinitionService/ListFieldDefinition',
  grpc.web.MethodType.UNARY,
  proto.admpb.ListFieldDefinitionRequest,
  proto.admpb.ListFieldDefinitionResponse,
  /**
   * @param {!proto.admpb.ListFieldDefinitionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admpb.ListFieldDefinitionResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.admpb.ListFieldDefinitionRequest,
 *   !proto.admpb.ListFieldDefinitionResponse>}
 */
const methodInfo_FieldDefinitionService_ListFieldDefinition = new grpc.web.AbstractClientBase.MethodInfo(
  proto.admpb.ListFieldDefinitionResponse,
  /**
   * @param {!proto.admpb.ListFieldDefinitionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admpb.ListFieldDefinitionResponse.deserializeBinary
);


/**
 * @param {!proto.admpb.ListFieldDefinitionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.admpb.ListFieldDefinitionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.admpb.ListFieldDefinitionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.admpb.FieldDefinitionServiceClient.prototype.listFieldDefinition =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/admpb.FieldDefinitionService/ListFieldDefinition',
      request,
      metadata || {},
      methodDescriptor_FieldDefinitionService_ListFieldDefinition,
      callback);
};


/**
 * @param {!proto.admpb.ListFieldDefinitionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.admpb.ListFieldDefinitionResponse>}
 *     A native promise that resolves to the response
 */
proto.admpb.FieldDefinitionServicePromiseClient.prototype.listFieldDefinition =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/admpb.FieldDefinitionService/ListFieldDefinition',
      request,
      metadata || {},
      methodDescriptor_FieldDefinitionService_ListFieldDefinition);
};


module.exports = proto.admpb;

