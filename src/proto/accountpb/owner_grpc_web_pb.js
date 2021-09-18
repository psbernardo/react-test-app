/**
 * @fileoverview gRPC-Web generated client stub for accountpb
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')

var google_type_date_pb = require('../../google/type/date_pb.js')
const proto = {};
proto.accountpb = require('./owner_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.accountpb.OwnerServiceClient =
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
proto.accountpb.OwnerServicePromiseClient =
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
 *   !proto.accountpb.Owner,
 *   !proto.accountpb.CreateOwnerResponse>}
 */
const methodDescriptor_OwnerService_CreateOwner = new grpc.web.MethodDescriptor(
  '/accountpb.OwnerService/CreateOwner',
  grpc.web.MethodType.UNARY,
  proto.accountpb.Owner,
  proto.accountpb.CreateOwnerResponse,
  /**
   * @param {!proto.accountpb.Owner} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.accountpb.CreateOwnerResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.accountpb.Owner,
 *   !proto.accountpb.CreateOwnerResponse>}
 */
const methodInfo_OwnerService_CreateOwner = new grpc.web.AbstractClientBase.MethodInfo(
  proto.accountpb.CreateOwnerResponse,
  /**
   * @param {!proto.accountpb.Owner} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.accountpb.CreateOwnerResponse.deserializeBinary
);


/**
 * @param {!proto.accountpb.Owner} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.accountpb.CreateOwnerResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.accountpb.CreateOwnerResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.accountpb.OwnerServiceClient.prototype.createOwner =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/accountpb.OwnerService/CreateOwner',
      request,
      metadata || {},
      methodDescriptor_OwnerService_CreateOwner,
      callback);
};


/**
 * @param {!proto.accountpb.Owner} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.accountpb.CreateOwnerResponse>}
 *     A native promise that resolves to the response
 */
proto.accountpb.OwnerServicePromiseClient.prototype.createOwner =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/accountpb.OwnerService/CreateOwner',
      request,
      metadata || {},
      methodDescriptor_OwnerService_CreateOwner);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.accountpb.Owner,
 *   !proto.accountpb.UpdateOwnerResponse>}
 */
const methodDescriptor_OwnerService_UpdateOwner = new grpc.web.MethodDescriptor(
  '/accountpb.OwnerService/UpdateOwner',
  grpc.web.MethodType.UNARY,
  proto.accountpb.Owner,
  proto.accountpb.UpdateOwnerResponse,
  /**
   * @param {!proto.accountpb.Owner} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.accountpb.UpdateOwnerResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.accountpb.Owner,
 *   !proto.accountpb.UpdateOwnerResponse>}
 */
const methodInfo_OwnerService_UpdateOwner = new grpc.web.AbstractClientBase.MethodInfo(
  proto.accountpb.UpdateOwnerResponse,
  /**
   * @param {!proto.accountpb.Owner} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.accountpb.UpdateOwnerResponse.deserializeBinary
);


/**
 * @param {!proto.accountpb.Owner} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.accountpb.UpdateOwnerResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.accountpb.UpdateOwnerResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.accountpb.OwnerServiceClient.prototype.updateOwner =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/accountpb.OwnerService/UpdateOwner',
      request,
      metadata || {},
      methodDescriptor_OwnerService_UpdateOwner,
      callback);
};


/**
 * @param {!proto.accountpb.Owner} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.accountpb.UpdateOwnerResponse>}
 *     A native promise that resolves to the response
 */
proto.accountpb.OwnerServicePromiseClient.prototype.updateOwner =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/accountpb.OwnerService/UpdateOwner',
      request,
      metadata || {},
      methodDescriptor_OwnerService_UpdateOwner);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.accountpb.ReadOwnerRequest,
 *   !proto.accountpb.ReadOwnerResponse>}
 */
const methodDescriptor_OwnerService_ReadOwner = new grpc.web.MethodDescriptor(
  '/accountpb.OwnerService/ReadOwner',
  grpc.web.MethodType.UNARY,
  proto.accountpb.ReadOwnerRequest,
  proto.accountpb.ReadOwnerResponse,
  /**
   * @param {!proto.accountpb.ReadOwnerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.accountpb.ReadOwnerResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.accountpb.ReadOwnerRequest,
 *   !proto.accountpb.ReadOwnerResponse>}
 */
const methodInfo_OwnerService_ReadOwner = new grpc.web.AbstractClientBase.MethodInfo(
  proto.accountpb.ReadOwnerResponse,
  /**
   * @param {!proto.accountpb.ReadOwnerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.accountpb.ReadOwnerResponse.deserializeBinary
);


/**
 * @param {!proto.accountpb.ReadOwnerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.accountpb.ReadOwnerResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.accountpb.ReadOwnerResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.accountpb.OwnerServiceClient.prototype.readOwner =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/accountpb.OwnerService/ReadOwner',
      request,
      metadata || {},
      methodDescriptor_OwnerService_ReadOwner,
      callback);
};


/**
 * @param {!proto.accountpb.ReadOwnerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.accountpb.ReadOwnerResponse>}
 *     A native promise that resolves to the response
 */
proto.accountpb.OwnerServicePromiseClient.prototype.readOwner =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/accountpb.OwnerService/ReadOwner',
      request,
      metadata || {},
      methodDescriptor_OwnerService_ReadOwner);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.accountpb.DeleteOwnerRequest,
 *   !proto.accountpb.DeleteOwnerResponse>}
 */
const methodDescriptor_OwnerService_DeleteOwner = new grpc.web.MethodDescriptor(
  '/accountpb.OwnerService/DeleteOwner',
  grpc.web.MethodType.UNARY,
  proto.accountpb.DeleteOwnerRequest,
  proto.accountpb.DeleteOwnerResponse,
  /**
   * @param {!proto.accountpb.DeleteOwnerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.accountpb.DeleteOwnerResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.accountpb.DeleteOwnerRequest,
 *   !proto.accountpb.DeleteOwnerResponse>}
 */
const methodInfo_OwnerService_DeleteOwner = new grpc.web.AbstractClientBase.MethodInfo(
  proto.accountpb.DeleteOwnerResponse,
  /**
   * @param {!proto.accountpb.DeleteOwnerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.accountpb.DeleteOwnerResponse.deserializeBinary
);


/**
 * @param {!proto.accountpb.DeleteOwnerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.accountpb.DeleteOwnerResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.accountpb.DeleteOwnerResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.accountpb.OwnerServiceClient.prototype.deleteOwner =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/accountpb.OwnerService/DeleteOwner',
      request,
      metadata || {},
      methodDescriptor_OwnerService_DeleteOwner,
      callback);
};


/**
 * @param {!proto.accountpb.DeleteOwnerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.accountpb.DeleteOwnerResponse>}
 *     A native promise that resolves to the response
 */
proto.accountpb.OwnerServicePromiseClient.prototype.deleteOwner =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/accountpb.OwnerService/DeleteOwner',
      request,
      metadata || {},
      methodDescriptor_OwnerService_DeleteOwner);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.accountpb.BatchCreateOwnerRequest,
 *   !proto.accountpb.BatchCreateOwnerResponse>}
 */
const methodDescriptor_OwnerService_BatchCreateOwner = new grpc.web.MethodDescriptor(
  '/accountpb.OwnerService/BatchCreateOwner',
  grpc.web.MethodType.UNARY,
  proto.accountpb.BatchCreateOwnerRequest,
  proto.accountpb.BatchCreateOwnerResponse,
  /**
   * @param {!proto.accountpb.BatchCreateOwnerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.accountpb.BatchCreateOwnerResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.accountpb.BatchCreateOwnerRequest,
 *   !proto.accountpb.BatchCreateOwnerResponse>}
 */
const methodInfo_OwnerService_BatchCreateOwner = new grpc.web.AbstractClientBase.MethodInfo(
  proto.accountpb.BatchCreateOwnerResponse,
  /**
   * @param {!proto.accountpb.BatchCreateOwnerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.accountpb.BatchCreateOwnerResponse.deserializeBinary
);


/**
 * @param {!proto.accountpb.BatchCreateOwnerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.accountpb.BatchCreateOwnerResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.accountpb.BatchCreateOwnerResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.accountpb.OwnerServiceClient.prototype.batchCreateOwner =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/accountpb.OwnerService/BatchCreateOwner',
      request,
      metadata || {},
      methodDescriptor_OwnerService_BatchCreateOwner,
      callback);
};


/**
 * @param {!proto.accountpb.BatchCreateOwnerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.accountpb.BatchCreateOwnerResponse>}
 *     A native promise that resolves to the response
 */
proto.accountpb.OwnerServicePromiseClient.prototype.batchCreateOwner =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/accountpb.OwnerService/BatchCreateOwner',
      request,
      metadata || {},
      methodDescriptor_OwnerService_BatchCreateOwner);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.accountpb.ListOwnerAuditRequest,
 *   !proto.accountpb.ListOwnerAuditResponse>}
 */
const methodDescriptor_OwnerService_ListOwnerAudit = new grpc.web.MethodDescriptor(
  '/accountpb.OwnerService/ListOwnerAudit',
  grpc.web.MethodType.UNARY,
  proto.accountpb.ListOwnerAuditRequest,
  proto.accountpb.ListOwnerAuditResponse,
  /**
   * @param {!proto.accountpb.ListOwnerAuditRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.accountpb.ListOwnerAuditResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.accountpb.ListOwnerAuditRequest,
 *   !proto.accountpb.ListOwnerAuditResponse>}
 */
const methodInfo_OwnerService_ListOwnerAudit = new grpc.web.AbstractClientBase.MethodInfo(
  proto.accountpb.ListOwnerAuditResponse,
  /**
   * @param {!proto.accountpb.ListOwnerAuditRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.accountpb.ListOwnerAuditResponse.deserializeBinary
);


/**
 * @param {!proto.accountpb.ListOwnerAuditRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.accountpb.ListOwnerAuditResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.accountpb.ListOwnerAuditResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.accountpb.OwnerServiceClient.prototype.listOwnerAudit =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/accountpb.OwnerService/ListOwnerAudit',
      request,
      metadata || {},
      methodDescriptor_OwnerService_ListOwnerAudit,
      callback);
};


/**
 * @param {!proto.accountpb.ListOwnerAuditRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.accountpb.ListOwnerAuditResponse>}
 *     A native promise that resolves to the response
 */
proto.accountpb.OwnerServicePromiseClient.prototype.listOwnerAudit =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/accountpb.OwnerService/ListOwnerAudit',
      request,
      metadata || {},
      methodDescriptor_OwnerService_ListOwnerAudit);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.accountpb.ListOwnerAutoFillRequest,
 *   !proto.accountpb.ListOwnerAutoFillResponse>}
 */
const methodDescriptor_OwnerService_ListOwnerAutoFill = new grpc.web.MethodDescriptor(
  '/accountpb.OwnerService/ListOwnerAutoFill',
  grpc.web.MethodType.UNARY,
  proto.accountpb.ListOwnerAutoFillRequest,
  proto.accountpb.ListOwnerAutoFillResponse,
  /**
   * @param {!proto.accountpb.ListOwnerAutoFillRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.accountpb.ListOwnerAutoFillResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.accountpb.ListOwnerAutoFillRequest,
 *   !proto.accountpb.ListOwnerAutoFillResponse>}
 */
const methodInfo_OwnerService_ListOwnerAutoFill = new grpc.web.AbstractClientBase.MethodInfo(
  proto.accountpb.ListOwnerAutoFillResponse,
  /**
   * @param {!proto.accountpb.ListOwnerAutoFillRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.accountpb.ListOwnerAutoFillResponse.deserializeBinary
);


/**
 * @param {!proto.accountpb.ListOwnerAutoFillRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.accountpb.ListOwnerAutoFillResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.accountpb.ListOwnerAutoFillResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.accountpb.OwnerServiceClient.prototype.listOwnerAutoFill =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/accountpb.OwnerService/ListOwnerAutoFill',
      request,
      metadata || {},
      methodDescriptor_OwnerService_ListOwnerAutoFill,
      callback);
};


/**
 * @param {!proto.accountpb.ListOwnerAutoFillRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.accountpb.ListOwnerAutoFillResponse>}
 *     A native promise that resolves to the response
 */
proto.accountpb.OwnerServicePromiseClient.prototype.listOwnerAutoFill =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/accountpb.OwnerService/ListOwnerAutoFill',
      request,
      metadata || {},
      methodDescriptor_OwnerService_ListOwnerAutoFill);
};


module.exports = proto.accountpb;

