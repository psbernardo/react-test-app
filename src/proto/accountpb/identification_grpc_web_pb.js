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


var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')

var google_type_date_pb = require('../../google/type/date_pb.js')
const proto = {};
proto.accountpb = require('./identification_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.accountpb.IdentificationServiceClient =
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
proto.accountpb.IdentificationServicePromiseClient =
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
 *   !proto.accountpb.Identification,
 *   !proto.accountpb.CreateIdentificationResponse>}
 */
const methodDescriptor_IdentificationService_CreateIdentification = new grpc.web.MethodDescriptor(
  '/accountpb.IdentificationService/CreateIdentification',
  grpc.web.MethodType.UNARY,
  proto.accountpb.Identification,
  proto.accountpb.CreateIdentificationResponse,
  /**
   * @param {!proto.accountpb.Identification} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.accountpb.CreateIdentificationResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.accountpb.Identification,
 *   !proto.accountpb.CreateIdentificationResponse>}
 */
const methodInfo_IdentificationService_CreateIdentification = new grpc.web.AbstractClientBase.MethodInfo(
  proto.accountpb.CreateIdentificationResponse,
  /**
   * @param {!proto.accountpb.Identification} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.accountpb.CreateIdentificationResponse.deserializeBinary
);


/**
 * @param {!proto.accountpb.Identification} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.accountpb.CreateIdentificationResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.accountpb.CreateIdentificationResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.accountpb.IdentificationServiceClient.prototype.createIdentification =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/accountpb.IdentificationService/CreateIdentification',
      request,
      metadata || {},
      methodDescriptor_IdentificationService_CreateIdentification,
      callback);
};


/**
 * @param {!proto.accountpb.Identification} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.accountpb.CreateIdentificationResponse>}
 *     A native promise that resolves to the response
 */
proto.accountpb.IdentificationServicePromiseClient.prototype.createIdentification =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/accountpb.IdentificationService/CreateIdentification',
      request,
      metadata || {},
      methodDescriptor_IdentificationService_CreateIdentification);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.accountpb.Identification,
 *   !proto.accountpb.UpdateIdentificationResponse>}
 */
const methodDescriptor_IdentificationService_UpdateIdentification = new grpc.web.MethodDescriptor(
  '/accountpb.IdentificationService/UpdateIdentification',
  grpc.web.MethodType.UNARY,
  proto.accountpb.Identification,
  proto.accountpb.UpdateIdentificationResponse,
  /**
   * @param {!proto.accountpb.Identification} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.accountpb.UpdateIdentificationResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.accountpb.Identification,
 *   !proto.accountpb.UpdateIdentificationResponse>}
 */
const methodInfo_IdentificationService_UpdateIdentification = new grpc.web.AbstractClientBase.MethodInfo(
  proto.accountpb.UpdateIdentificationResponse,
  /**
   * @param {!proto.accountpb.Identification} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.accountpb.UpdateIdentificationResponse.deserializeBinary
);


/**
 * @param {!proto.accountpb.Identification} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.accountpb.UpdateIdentificationResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.accountpb.UpdateIdentificationResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.accountpb.IdentificationServiceClient.prototype.updateIdentification =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/accountpb.IdentificationService/UpdateIdentification',
      request,
      metadata || {},
      methodDescriptor_IdentificationService_UpdateIdentification,
      callback);
};


/**
 * @param {!proto.accountpb.Identification} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.accountpb.UpdateIdentificationResponse>}
 *     A native promise that resolves to the response
 */
proto.accountpb.IdentificationServicePromiseClient.prototype.updateIdentification =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/accountpb.IdentificationService/UpdateIdentification',
      request,
      metadata || {},
      methodDescriptor_IdentificationService_UpdateIdentification);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.accountpb.ReadIdentificationRequest,
 *   !proto.accountpb.ReadIdentificationResponse>}
 */
const methodDescriptor_IdentificationService_ReadIdentification = new grpc.web.MethodDescriptor(
  '/accountpb.IdentificationService/ReadIdentification',
  grpc.web.MethodType.UNARY,
  proto.accountpb.ReadIdentificationRequest,
  proto.accountpb.ReadIdentificationResponse,
  /**
   * @param {!proto.accountpb.ReadIdentificationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.accountpb.ReadIdentificationResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.accountpb.ReadIdentificationRequest,
 *   !proto.accountpb.ReadIdentificationResponse>}
 */
const methodInfo_IdentificationService_ReadIdentification = new grpc.web.AbstractClientBase.MethodInfo(
  proto.accountpb.ReadIdentificationResponse,
  /**
   * @param {!proto.accountpb.ReadIdentificationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.accountpb.ReadIdentificationResponse.deserializeBinary
);


/**
 * @param {!proto.accountpb.ReadIdentificationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.accountpb.ReadIdentificationResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.accountpb.ReadIdentificationResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.accountpb.IdentificationServiceClient.prototype.readIdentification =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/accountpb.IdentificationService/ReadIdentification',
      request,
      metadata || {},
      methodDescriptor_IdentificationService_ReadIdentification,
      callback);
};


/**
 * @param {!proto.accountpb.ReadIdentificationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.accountpb.ReadIdentificationResponse>}
 *     A native promise that resolves to the response
 */
proto.accountpb.IdentificationServicePromiseClient.prototype.readIdentification =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/accountpb.IdentificationService/ReadIdentification',
      request,
      metadata || {},
      methodDescriptor_IdentificationService_ReadIdentification);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.accountpb.DeleteIdentificationRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_IdentificationService_DeleteIdentification = new grpc.web.MethodDescriptor(
  '/accountpb.IdentificationService/DeleteIdentification',
  grpc.web.MethodType.UNARY,
  proto.accountpb.DeleteIdentificationRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.accountpb.DeleteIdentificationRequest} request
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
 *   !proto.accountpb.DeleteIdentificationRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_IdentificationService_DeleteIdentification = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.accountpb.DeleteIdentificationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.accountpb.DeleteIdentificationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.accountpb.IdentificationServiceClient.prototype.deleteIdentification =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/accountpb.IdentificationService/DeleteIdentification',
      request,
      metadata || {},
      methodDescriptor_IdentificationService_DeleteIdentification,
      callback);
};


/**
 * @param {!proto.accountpb.DeleteIdentificationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     A native promise that resolves to the response
 */
proto.accountpb.IdentificationServicePromiseClient.prototype.deleteIdentification =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/accountpb.IdentificationService/DeleteIdentification',
      request,
      metadata || {},
      methodDescriptor_IdentificationService_DeleteIdentification);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.accountpb.Identification,
 *   !proto.accountpb.ListIdentificationResponse>}
 */
const methodDescriptor_IdentificationService_ListIdentification = new grpc.web.MethodDescriptor(
  '/accountpb.IdentificationService/ListIdentification',
  grpc.web.MethodType.UNARY,
  proto.accountpb.Identification,
  proto.accountpb.ListIdentificationResponse,
  /**
   * @param {!proto.accountpb.Identification} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.accountpb.ListIdentificationResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.accountpb.Identification,
 *   !proto.accountpb.ListIdentificationResponse>}
 */
const methodInfo_IdentificationService_ListIdentification = new grpc.web.AbstractClientBase.MethodInfo(
  proto.accountpb.ListIdentificationResponse,
  /**
   * @param {!proto.accountpb.Identification} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.accountpb.ListIdentificationResponse.deserializeBinary
);


/**
 * @param {!proto.accountpb.Identification} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.accountpb.ListIdentificationResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.accountpb.ListIdentificationResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.accountpb.IdentificationServiceClient.prototype.listIdentification =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/accountpb.IdentificationService/ListIdentification',
      request,
      metadata || {},
      methodDescriptor_IdentificationService_ListIdentification,
      callback);
};


/**
 * @param {!proto.accountpb.Identification} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.accountpb.ListIdentificationResponse>}
 *     A native promise that resolves to the response
 */
proto.accountpb.IdentificationServicePromiseClient.prototype.listIdentification =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/accountpb.IdentificationService/ListIdentification',
      request,
      metadata || {},
      methodDescriptor_IdentificationService_ListIdentification);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.accountpb.ListIdentificationAuditRequest,
 *   !proto.accountpb.ListIdentificationAuditResponse>}
 */
const methodDescriptor_IdentificationService_ListIdentificationAudit = new grpc.web.MethodDescriptor(
  '/accountpb.IdentificationService/ListIdentificationAudit',
  grpc.web.MethodType.UNARY,
  proto.accountpb.ListIdentificationAuditRequest,
  proto.accountpb.ListIdentificationAuditResponse,
  /**
   * @param {!proto.accountpb.ListIdentificationAuditRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.accountpb.ListIdentificationAuditResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.accountpb.ListIdentificationAuditRequest,
 *   !proto.accountpb.ListIdentificationAuditResponse>}
 */
const methodInfo_IdentificationService_ListIdentificationAudit = new grpc.web.AbstractClientBase.MethodInfo(
  proto.accountpb.ListIdentificationAuditResponse,
  /**
   * @param {!proto.accountpb.ListIdentificationAuditRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.accountpb.ListIdentificationAuditResponse.deserializeBinary
);


/**
 * @param {!proto.accountpb.ListIdentificationAuditRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.accountpb.ListIdentificationAuditResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.accountpb.ListIdentificationAuditResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.accountpb.IdentificationServiceClient.prototype.listIdentificationAudit =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/accountpb.IdentificationService/ListIdentificationAudit',
      request,
      metadata || {},
      methodDescriptor_IdentificationService_ListIdentificationAudit,
      callback);
};


/**
 * @param {!proto.accountpb.ListIdentificationAuditRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.accountpb.ListIdentificationAuditResponse>}
 *     A native promise that resolves to the response
 */
proto.accountpb.IdentificationServicePromiseClient.prototype.listIdentificationAudit =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/accountpb.IdentificationService/ListIdentificationAudit',
      request,
      metadata || {},
      methodDescriptor_IdentificationService_ListIdentificationAudit);
};


module.exports = proto.accountpb;

