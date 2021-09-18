/**
 * @fileoverview gRPC-Web generated client stub for proto
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
proto.proto = require('./request_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.proto.RequestServiceClient =
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
proto.proto.RequestServicePromiseClient =
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
 *   !proto.proto.CreateRequest,
 *   !proto.proto.CreateResponse>}
 */
const methodDescriptor_RequestService_Create = new grpc.web.MethodDescriptor(
  '/proto.RequestService/Create',
  grpc.web.MethodType.UNARY,
  proto.proto.CreateRequest,
  proto.proto.CreateResponse,
  /**
   * @param {!proto.proto.CreateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.CreateResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.proto.CreateRequest,
 *   !proto.proto.CreateResponse>}
 */
const methodInfo_RequestService_Create = new grpc.web.AbstractClientBase.MethodInfo(
  proto.proto.CreateResponse,
  /**
   * @param {!proto.proto.CreateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.CreateResponse.deserializeBinary
);


/**
 * @param {!proto.proto.CreateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.proto.CreateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.CreateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.RequestServiceClient.prototype.create =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.RequestService/Create',
      request,
      metadata || {},
      methodDescriptor_RequestService_Create,
      callback);
};


/**
 * @param {!proto.proto.CreateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.CreateResponse>}
 *     Promise that resolves to the response
 */
proto.proto.RequestServicePromiseClient.prototype.create =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/proto.RequestService/Create',
      request,
      metadata || {},
      methodDescriptor_RequestService_Create);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.proto.UpdateRequest,
 *   !proto.proto.UpdateResponse>}
 */
const methodDescriptor_RequestService_Update = new grpc.web.MethodDescriptor(
  '/proto.RequestService/Update',
  grpc.web.MethodType.UNARY,
  proto.proto.UpdateRequest,
  proto.proto.UpdateResponse,
  /**
   * @param {!proto.proto.UpdateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.UpdateResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.proto.UpdateRequest,
 *   !proto.proto.UpdateResponse>}
 */
const methodInfo_RequestService_Update = new grpc.web.AbstractClientBase.MethodInfo(
  proto.proto.UpdateResponse,
  /**
   * @param {!proto.proto.UpdateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.UpdateResponse.deserializeBinary
);


/**
 * @param {!proto.proto.UpdateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.proto.UpdateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.UpdateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.RequestServiceClient.prototype.update =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.RequestService/Update',
      request,
      metadata || {},
      methodDescriptor_RequestService_Update,
      callback);
};


/**
 * @param {!proto.proto.UpdateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.UpdateResponse>}
 *     Promise that resolves to the response
 */
proto.proto.RequestServicePromiseClient.prototype.update =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/proto.RequestService/Update',
      request,
      metadata || {},
      methodDescriptor_RequestService_Update);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.proto.ReadRequest,
 *   !proto.proto.ReadResponse>}
 */
const methodDescriptor_RequestService_Read = new grpc.web.MethodDescriptor(
  '/proto.RequestService/Read',
  grpc.web.MethodType.UNARY,
  proto.proto.ReadRequest,
  proto.proto.ReadResponse,
  /**
   * @param {!proto.proto.ReadRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.ReadResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.proto.ReadRequest,
 *   !proto.proto.ReadResponse>}
 */
const methodInfo_RequestService_Read = new grpc.web.AbstractClientBase.MethodInfo(
  proto.proto.ReadResponse,
  /**
   * @param {!proto.proto.ReadRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.ReadResponse.deserializeBinary
);


/**
 * @param {!proto.proto.ReadRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.proto.ReadResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.ReadResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.RequestServiceClient.prototype.read =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.RequestService/Read',
      request,
      metadata || {},
      methodDescriptor_RequestService_Read,
      callback);
};


/**
 * @param {!proto.proto.ReadRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.ReadResponse>}
 *     Promise that resolves to the response
 */
proto.proto.RequestServicePromiseClient.prototype.read =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/proto.RequestService/Read',
      request,
      metadata || {},
      methodDescriptor_RequestService_Read);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.proto.ListRequest,
 *   !proto.proto.ListResponse>}
 */
const methodDescriptor_RequestService_List = new grpc.web.MethodDescriptor(
  '/proto.RequestService/List',
  grpc.web.MethodType.UNARY,
  proto.proto.ListRequest,
  proto.proto.ListResponse,
  /**
   * @param {!proto.proto.ListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.ListResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.proto.ListRequest,
 *   !proto.proto.ListResponse>}
 */
const methodInfo_RequestService_List = new grpc.web.AbstractClientBase.MethodInfo(
  proto.proto.ListResponse,
  /**
   * @param {!proto.proto.ListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.ListResponse.deserializeBinary
);


/**
 * @param {!proto.proto.ListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.proto.ListResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.ListResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.RequestServiceClient.prototype.list =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.RequestService/List',
      request,
      metadata || {},
      methodDescriptor_RequestService_List,
      callback);
};


/**
 * @param {!proto.proto.ListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.ListResponse>}
 *     Promise that resolves to the response
 */
proto.proto.RequestServicePromiseClient.prototype.list =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/proto.RequestService/List',
      request,
      metadata || {},
      methodDescriptor_RequestService_List);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.proto.ListRequestAuditRequest,
 *   !proto.proto.ListRequestAuditResponse>}
 */
const methodDescriptor_RequestService_ListRequestAudit = new grpc.web.MethodDescriptor(
  '/proto.RequestService/ListRequestAudit',
  grpc.web.MethodType.UNARY,
  proto.proto.ListRequestAuditRequest,
  proto.proto.ListRequestAuditResponse,
  /**
   * @param {!proto.proto.ListRequestAuditRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.ListRequestAuditResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.proto.ListRequestAuditRequest,
 *   !proto.proto.ListRequestAuditResponse>}
 */
const methodInfo_RequestService_ListRequestAudit = new grpc.web.AbstractClientBase.MethodInfo(
  proto.proto.ListRequestAuditResponse,
  /**
   * @param {!proto.proto.ListRequestAuditRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.ListRequestAuditResponse.deserializeBinary
);


/**
 * @param {!proto.proto.ListRequestAuditRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.proto.ListRequestAuditResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.ListRequestAuditResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.RequestServiceClient.prototype.listRequestAudit =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.RequestService/ListRequestAudit',
      request,
      metadata || {},
      methodDescriptor_RequestService_ListRequestAudit,
      callback);
};


/**
 * @param {!proto.proto.ListRequestAuditRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.ListRequestAuditResponse>}
 *     Promise that resolves to the response
 */
proto.proto.RequestServicePromiseClient.prototype.listRequestAudit =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/proto.RequestService/ListRequestAudit',
      request,
      metadata || {},
      methodDescriptor_RequestService_ListRequestAudit);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.proto.ReadMaximumWithdrawableRequest,
 *   !proto.proto.ReadMaximumWithdrawableResponse>}
 */
const methodDescriptor_RequestService_ReadMaximumWithdrawable = new grpc.web.MethodDescriptor(
  '/proto.RequestService/ReadMaximumWithdrawable',
  grpc.web.MethodType.UNARY,
  proto.proto.ReadMaximumWithdrawableRequest,
  proto.proto.ReadMaximumWithdrawableResponse,
  /**
   * @param {!proto.proto.ReadMaximumWithdrawableRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.ReadMaximumWithdrawableResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.proto.ReadMaximumWithdrawableRequest,
 *   !proto.proto.ReadMaximumWithdrawableResponse>}
 */
const methodInfo_RequestService_ReadMaximumWithdrawable = new grpc.web.AbstractClientBase.MethodInfo(
  proto.proto.ReadMaximumWithdrawableResponse,
  /**
   * @param {!proto.proto.ReadMaximumWithdrawableRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.ReadMaximumWithdrawableResponse.deserializeBinary
);


/**
 * @param {!proto.proto.ReadMaximumWithdrawableRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.proto.ReadMaximumWithdrawableResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.ReadMaximumWithdrawableResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.RequestServiceClient.prototype.readMaximumWithdrawable =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.RequestService/ReadMaximumWithdrawable',
      request,
      metadata || {},
      methodDescriptor_RequestService_ReadMaximumWithdrawable,
      callback);
};


/**
 * @param {!proto.proto.ReadMaximumWithdrawableRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.ReadMaximumWithdrawableResponse>}
 *     Promise that resolves to the response
 */
proto.proto.RequestServicePromiseClient.prototype.readMaximumWithdrawable =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/proto.RequestService/ReadMaximumWithdrawable',
      request,
      metadata || {},
      methodDescriptor_RequestService_ReadMaximumWithdrawable);
};


module.exports = proto.proto;

