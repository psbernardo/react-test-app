/**
 * @fileoverview gRPC-Web generated client stub for bankpb
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_type_date_pb = require('../../google/type/date_pb.js')

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')
const proto = {};
proto.bankpb = require('./dcrequest_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.bankpb.DcRequestServiceClient =
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
proto.bankpb.DcRequestServicePromiseClient =
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
 *   !proto.bankpb.DcRequest,
 *   !proto.bankpb.CreateDcResponse>}
 */
const methodDescriptor_DcRequestService_CreateDc = new grpc.web.MethodDescriptor(
  '/bankpb.DcRequestService/CreateDc',
  grpc.web.MethodType.UNARY,
  proto.bankpb.DcRequest,
  proto.bankpb.CreateDcResponse,
  /**
   * @param {!proto.bankpb.DcRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bankpb.CreateDcResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.bankpb.DcRequest,
 *   !proto.bankpb.CreateDcResponse>}
 */
const methodInfo_DcRequestService_CreateDc = new grpc.web.AbstractClientBase.MethodInfo(
  proto.bankpb.CreateDcResponse,
  /**
   * @param {!proto.bankpb.DcRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bankpb.CreateDcResponse.deserializeBinary
);


/**
 * @param {!proto.bankpb.DcRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.bankpb.CreateDcResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.bankpb.CreateDcResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.bankpb.DcRequestServiceClient.prototype.createDc =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/bankpb.DcRequestService/CreateDc',
      request,
      metadata || {},
      methodDescriptor_DcRequestService_CreateDc,
      callback);
};


/**
 * @param {!proto.bankpb.DcRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.bankpb.CreateDcResponse>}
 *     Promise that resolves to the response
 */
proto.bankpb.DcRequestServicePromiseClient.prototype.createDc =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/bankpb.DcRequestService/CreateDc',
      request,
      metadata || {},
      methodDescriptor_DcRequestService_CreateDc);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.bankpb.DcRequest,
 *   !proto.bankpb.UpdateDcResponse>}
 */
const methodDescriptor_DcRequestService_UpdateDc = new grpc.web.MethodDescriptor(
  '/bankpb.DcRequestService/UpdateDc',
  grpc.web.MethodType.UNARY,
  proto.bankpb.DcRequest,
  proto.bankpb.UpdateDcResponse,
  /**
   * @param {!proto.bankpb.DcRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bankpb.UpdateDcResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.bankpb.DcRequest,
 *   !proto.bankpb.UpdateDcResponse>}
 */
const methodInfo_DcRequestService_UpdateDc = new grpc.web.AbstractClientBase.MethodInfo(
  proto.bankpb.UpdateDcResponse,
  /**
   * @param {!proto.bankpb.DcRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bankpb.UpdateDcResponse.deserializeBinary
);


/**
 * @param {!proto.bankpb.DcRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.bankpb.UpdateDcResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.bankpb.UpdateDcResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.bankpb.DcRequestServiceClient.prototype.updateDc =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/bankpb.DcRequestService/UpdateDc',
      request,
      metadata || {},
      methodDescriptor_DcRequestService_UpdateDc,
      callback);
};


/**
 * @param {!proto.bankpb.DcRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.bankpb.UpdateDcResponse>}
 *     Promise that resolves to the response
 */
proto.bankpb.DcRequestServicePromiseClient.prototype.updateDc =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/bankpb.DcRequestService/UpdateDc',
      request,
      metadata || {},
      methodDescriptor_DcRequestService_UpdateDc);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.bankpb.ReadDcRequest,
 *   !proto.bankpb.ReadDcResponse>}
 */
const methodDescriptor_DcRequestService_ReadDc = new grpc.web.MethodDescriptor(
  '/bankpb.DcRequestService/ReadDc',
  grpc.web.MethodType.UNARY,
  proto.bankpb.ReadDcRequest,
  proto.bankpb.ReadDcResponse,
  /**
   * @param {!proto.bankpb.ReadDcRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bankpb.ReadDcResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.bankpb.ReadDcRequest,
 *   !proto.bankpb.ReadDcResponse>}
 */
const methodInfo_DcRequestService_ReadDc = new grpc.web.AbstractClientBase.MethodInfo(
  proto.bankpb.ReadDcResponse,
  /**
   * @param {!proto.bankpb.ReadDcRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bankpb.ReadDcResponse.deserializeBinary
);


/**
 * @param {!proto.bankpb.ReadDcRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.bankpb.ReadDcResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.bankpb.ReadDcResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.bankpb.DcRequestServiceClient.prototype.readDc =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/bankpb.DcRequestService/ReadDc',
      request,
      metadata || {},
      methodDescriptor_DcRequestService_ReadDc,
      callback);
};


/**
 * @param {!proto.bankpb.ReadDcRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.bankpb.ReadDcResponse>}
 *     Promise that resolves to the response
 */
proto.bankpb.DcRequestServicePromiseClient.prototype.readDc =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/bankpb.DcRequestService/ReadDc',
      request,
      metadata || {},
      methodDescriptor_DcRequestService_ReadDc);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.bankpb.ListDcRequest,
 *   !proto.bankpb.ListDcResponse>}
 */
const methodDescriptor_DcRequestService_ListDc = new grpc.web.MethodDescriptor(
  '/bankpb.DcRequestService/ListDc',
  grpc.web.MethodType.UNARY,
  proto.bankpb.ListDcRequest,
  proto.bankpb.ListDcResponse,
  /**
   * @param {!proto.bankpb.ListDcRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bankpb.ListDcResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.bankpb.ListDcRequest,
 *   !proto.bankpb.ListDcResponse>}
 */
const methodInfo_DcRequestService_ListDc = new grpc.web.AbstractClientBase.MethodInfo(
  proto.bankpb.ListDcResponse,
  /**
   * @param {!proto.bankpb.ListDcRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bankpb.ListDcResponse.deserializeBinary
);


/**
 * @param {!proto.bankpb.ListDcRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.bankpb.ListDcResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.bankpb.ListDcResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.bankpb.DcRequestServiceClient.prototype.listDc =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/bankpb.DcRequestService/ListDc',
      request,
      metadata || {},
      methodDescriptor_DcRequestService_ListDc,
      callback);
};


/**
 * @param {!proto.bankpb.ListDcRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.bankpb.ListDcResponse>}
 *     Promise that resolves to the response
 */
proto.bankpb.DcRequestServicePromiseClient.prototype.listDc =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/bankpb.DcRequestService/ListDc',
      request,
      metadata || {},
      methodDescriptor_DcRequestService_ListDc);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.bankpb.ListDcAuditRequest,
 *   !proto.bankpb.ListDcAuditResponse>}
 */
const methodDescriptor_DcRequestService_ListDcAudit = new grpc.web.MethodDescriptor(
  '/bankpb.DcRequestService/ListDcAudit',
  grpc.web.MethodType.UNARY,
  proto.bankpb.ListDcAuditRequest,
  proto.bankpb.ListDcAuditResponse,
  /**
   * @param {!proto.bankpb.ListDcAuditRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bankpb.ListDcAuditResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.bankpb.ListDcAuditRequest,
 *   !proto.bankpb.ListDcAuditResponse>}
 */
const methodInfo_DcRequestService_ListDcAudit = new grpc.web.AbstractClientBase.MethodInfo(
  proto.bankpb.ListDcAuditResponse,
  /**
   * @param {!proto.bankpb.ListDcAuditRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bankpb.ListDcAuditResponse.deserializeBinary
);


/**
 * @param {!proto.bankpb.ListDcAuditRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.bankpb.ListDcAuditResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.bankpb.ListDcAuditResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.bankpb.DcRequestServiceClient.prototype.listDcAudit =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/bankpb.DcRequestService/ListDcAudit',
      request,
      metadata || {},
      methodDescriptor_DcRequestService_ListDcAudit,
      callback);
};


/**
 * @param {!proto.bankpb.ListDcAuditRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.bankpb.ListDcAuditResponse>}
 *     Promise that resolves to the response
 */
proto.bankpb.DcRequestServicePromiseClient.prototype.listDcAudit =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/bankpb.DcRequestService/ListDcAudit',
      request,
      metadata || {},
      methodDescriptor_DcRequestService_ListDcAudit);
};


module.exports = proto.bankpb;

