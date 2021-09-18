/**
 * @fileoverview gRPC-Web generated client stub for physicalcertpb
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
proto.physicalcertpb = require('./physicalcert_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.physicalcertpb.PhysicalCertServiceClient =
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
proto.physicalcertpb.PhysicalCertServicePromiseClient =
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
 *   !proto.physicalcertpb.EmptyRequest,
 *   !proto.physicalcertpb.PhysicalCert>}
 */
const methodDescriptor_PhysicalCertService_GetNewIdPhysicalCert = new grpc.web.MethodDescriptor(
  '/physicalcertpb.PhysicalCertService/GetNewIdPhysicalCert',
  grpc.web.MethodType.UNARY,
  proto.physicalcertpb.EmptyRequest,
  proto.physicalcertpb.PhysicalCert,
  /**
   * @param {!proto.physicalcertpb.EmptyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.physicalcertpb.PhysicalCert.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.physicalcertpb.EmptyRequest,
 *   !proto.physicalcertpb.PhysicalCert>}
 */
const methodInfo_PhysicalCertService_GetNewIdPhysicalCert = new grpc.web.AbstractClientBase.MethodInfo(
  proto.physicalcertpb.PhysicalCert,
  /**
   * @param {!proto.physicalcertpb.EmptyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.physicalcertpb.PhysicalCert.deserializeBinary
);


/**
 * @param {!proto.physicalcertpb.EmptyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.physicalcertpb.PhysicalCert)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.physicalcertpb.PhysicalCert>|undefined}
 *     The XHR Node Readable Stream
 */
proto.physicalcertpb.PhysicalCertServiceClient.prototype.getNewIdPhysicalCert =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/physicalcertpb.PhysicalCertService/GetNewIdPhysicalCert',
      request,
      metadata || {},
      methodDescriptor_PhysicalCertService_GetNewIdPhysicalCert,
      callback);
};


/**
 * @param {!proto.physicalcertpb.EmptyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.physicalcertpb.PhysicalCert>}
 *     Promise that resolves to the response
 */
proto.physicalcertpb.PhysicalCertServicePromiseClient.prototype.getNewIdPhysicalCert =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/physicalcertpb.PhysicalCertService/GetNewIdPhysicalCert',
      request,
      metadata || {},
      methodDescriptor_PhysicalCertService_GetNewIdPhysicalCert);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.physicalcertpb.CreatePhysicalCertRequest,
 *   !proto.physicalcertpb.CreatePhysicalCertResponse>}
 */
const methodDescriptor_PhysicalCertService_CreatePhysicalCert = new grpc.web.MethodDescriptor(
  '/physicalcertpb.PhysicalCertService/CreatePhysicalCert',
  grpc.web.MethodType.UNARY,
  proto.physicalcertpb.CreatePhysicalCertRequest,
  proto.physicalcertpb.CreatePhysicalCertResponse,
  /**
   * @param {!proto.physicalcertpb.CreatePhysicalCertRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.physicalcertpb.CreatePhysicalCertResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.physicalcertpb.CreatePhysicalCertRequest,
 *   !proto.physicalcertpb.CreatePhysicalCertResponse>}
 */
const methodInfo_PhysicalCertService_CreatePhysicalCert = new grpc.web.AbstractClientBase.MethodInfo(
  proto.physicalcertpb.CreatePhysicalCertResponse,
  /**
   * @param {!proto.physicalcertpb.CreatePhysicalCertRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.physicalcertpb.CreatePhysicalCertResponse.deserializeBinary
);


/**
 * @param {!proto.physicalcertpb.CreatePhysicalCertRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.physicalcertpb.CreatePhysicalCertResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.physicalcertpb.CreatePhysicalCertResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.physicalcertpb.PhysicalCertServiceClient.prototype.createPhysicalCert =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/physicalcertpb.PhysicalCertService/CreatePhysicalCert',
      request,
      metadata || {},
      methodDescriptor_PhysicalCertService_CreatePhysicalCert,
      callback);
};


/**
 * @param {!proto.physicalcertpb.CreatePhysicalCertRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.physicalcertpb.CreatePhysicalCertResponse>}
 *     Promise that resolves to the response
 */
proto.physicalcertpb.PhysicalCertServicePromiseClient.prototype.createPhysicalCert =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/physicalcertpb.PhysicalCertService/CreatePhysicalCert',
      request,
      metadata || {},
      methodDescriptor_PhysicalCertService_CreatePhysicalCert);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.physicalcertpb.UpdatePhysicalCertRequest,
 *   !proto.physicalcertpb.UpdatePhysicalCertResponse>}
 */
const methodDescriptor_PhysicalCertService_UpdatePhysicalCert = new grpc.web.MethodDescriptor(
  '/physicalcertpb.PhysicalCertService/UpdatePhysicalCert',
  grpc.web.MethodType.UNARY,
  proto.physicalcertpb.UpdatePhysicalCertRequest,
  proto.physicalcertpb.UpdatePhysicalCertResponse,
  /**
   * @param {!proto.physicalcertpb.UpdatePhysicalCertRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.physicalcertpb.UpdatePhysicalCertResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.physicalcertpb.UpdatePhysicalCertRequest,
 *   !proto.physicalcertpb.UpdatePhysicalCertResponse>}
 */
const methodInfo_PhysicalCertService_UpdatePhysicalCert = new grpc.web.AbstractClientBase.MethodInfo(
  proto.physicalcertpb.UpdatePhysicalCertResponse,
  /**
   * @param {!proto.physicalcertpb.UpdatePhysicalCertRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.physicalcertpb.UpdatePhysicalCertResponse.deserializeBinary
);


/**
 * @param {!proto.physicalcertpb.UpdatePhysicalCertRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.physicalcertpb.UpdatePhysicalCertResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.physicalcertpb.UpdatePhysicalCertResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.physicalcertpb.PhysicalCertServiceClient.prototype.updatePhysicalCert =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/physicalcertpb.PhysicalCertService/UpdatePhysicalCert',
      request,
      metadata || {},
      methodDescriptor_PhysicalCertService_UpdatePhysicalCert,
      callback);
};


/**
 * @param {!proto.physicalcertpb.UpdatePhysicalCertRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.physicalcertpb.UpdatePhysicalCertResponse>}
 *     Promise that resolves to the response
 */
proto.physicalcertpb.PhysicalCertServicePromiseClient.prototype.updatePhysicalCert =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/physicalcertpb.PhysicalCertService/UpdatePhysicalCert',
      request,
      metadata || {},
      methodDescriptor_PhysicalCertService_UpdatePhysicalCert);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.physicalcertpb.ReadPhysicalCertRequest,
 *   !proto.physicalcertpb.ReadPhysicalCertResponse>}
 */
const methodDescriptor_PhysicalCertService_ReadPhysicalCert = new grpc.web.MethodDescriptor(
  '/physicalcertpb.PhysicalCertService/ReadPhysicalCert',
  grpc.web.MethodType.UNARY,
  proto.physicalcertpb.ReadPhysicalCertRequest,
  proto.physicalcertpb.ReadPhysicalCertResponse,
  /**
   * @param {!proto.physicalcertpb.ReadPhysicalCertRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.physicalcertpb.ReadPhysicalCertResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.physicalcertpb.ReadPhysicalCertRequest,
 *   !proto.physicalcertpb.ReadPhysicalCertResponse>}
 */
const methodInfo_PhysicalCertService_ReadPhysicalCert = new grpc.web.AbstractClientBase.MethodInfo(
  proto.physicalcertpb.ReadPhysicalCertResponse,
  /**
   * @param {!proto.physicalcertpb.ReadPhysicalCertRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.physicalcertpb.ReadPhysicalCertResponse.deserializeBinary
);


/**
 * @param {!proto.physicalcertpb.ReadPhysicalCertRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.physicalcertpb.ReadPhysicalCertResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.physicalcertpb.ReadPhysicalCertResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.physicalcertpb.PhysicalCertServiceClient.prototype.readPhysicalCert =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/physicalcertpb.PhysicalCertService/ReadPhysicalCert',
      request,
      metadata || {},
      methodDescriptor_PhysicalCertService_ReadPhysicalCert,
      callback);
};


/**
 * @param {!proto.physicalcertpb.ReadPhysicalCertRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.physicalcertpb.ReadPhysicalCertResponse>}
 *     Promise that resolves to the response
 */
proto.physicalcertpb.PhysicalCertServicePromiseClient.prototype.readPhysicalCert =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/physicalcertpb.PhysicalCertService/ReadPhysicalCert',
      request,
      metadata || {},
      methodDescriptor_PhysicalCertService_ReadPhysicalCert);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.physicalcertpb.DeletePhysicalCertRequest,
 *   !proto.physicalcertpb.DeletePhysicalCertResponse>}
 */
const methodDescriptor_PhysicalCertService_DeletePhysicalCert = new grpc.web.MethodDescriptor(
  '/physicalcertpb.PhysicalCertService/DeletePhysicalCert',
  grpc.web.MethodType.UNARY,
  proto.physicalcertpb.DeletePhysicalCertRequest,
  proto.physicalcertpb.DeletePhysicalCertResponse,
  /**
   * @param {!proto.physicalcertpb.DeletePhysicalCertRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.physicalcertpb.DeletePhysicalCertResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.physicalcertpb.DeletePhysicalCertRequest,
 *   !proto.physicalcertpb.DeletePhysicalCertResponse>}
 */
const methodInfo_PhysicalCertService_DeletePhysicalCert = new grpc.web.AbstractClientBase.MethodInfo(
  proto.physicalcertpb.DeletePhysicalCertResponse,
  /**
   * @param {!proto.physicalcertpb.DeletePhysicalCertRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.physicalcertpb.DeletePhysicalCertResponse.deserializeBinary
);


/**
 * @param {!proto.physicalcertpb.DeletePhysicalCertRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.physicalcertpb.DeletePhysicalCertResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.physicalcertpb.DeletePhysicalCertResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.physicalcertpb.PhysicalCertServiceClient.prototype.deletePhysicalCert =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/physicalcertpb.PhysicalCertService/DeletePhysicalCert',
      request,
      metadata || {},
      methodDescriptor_PhysicalCertService_DeletePhysicalCert,
      callback);
};


/**
 * @param {!proto.physicalcertpb.DeletePhysicalCertRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.physicalcertpb.DeletePhysicalCertResponse>}
 *     Promise that resolves to the response
 */
proto.physicalcertpb.PhysicalCertServicePromiseClient.prototype.deletePhysicalCert =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/physicalcertpb.PhysicalCertService/DeletePhysicalCert',
      request,
      metadata || {},
      methodDescriptor_PhysicalCertService_DeletePhysicalCert);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.physicalcertpb.ListPhysicalCertRequest,
 *   !proto.physicalcertpb.ListPhysicalCertResponse>}
 */
const methodDescriptor_PhysicalCertService_ListPhysicalCert = new grpc.web.MethodDescriptor(
  '/physicalcertpb.PhysicalCertService/ListPhysicalCert',
  grpc.web.MethodType.UNARY,
  proto.physicalcertpb.ListPhysicalCertRequest,
  proto.physicalcertpb.ListPhysicalCertResponse,
  /**
   * @param {!proto.physicalcertpb.ListPhysicalCertRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.physicalcertpb.ListPhysicalCertResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.physicalcertpb.ListPhysicalCertRequest,
 *   !proto.physicalcertpb.ListPhysicalCertResponse>}
 */
const methodInfo_PhysicalCertService_ListPhysicalCert = new grpc.web.AbstractClientBase.MethodInfo(
  proto.physicalcertpb.ListPhysicalCertResponse,
  /**
   * @param {!proto.physicalcertpb.ListPhysicalCertRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.physicalcertpb.ListPhysicalCertResponse.deserializeBinary
);


/**
 * @param {!proto.physicalcertpb.ListPhysicalCertRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.physicalcertpb.ListPhysicalCertResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.physicalcertpb.ListPhysicalCertResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.physicalcertpb.PhysicalCertServiceClient.prototype.listPhysicalCert =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/physicalcertpb.PhysicalCertService/ListPhysicalCert',
      request,
      metadata || {},
      methodDescriptor_PhysicalCertService_ListPhysicalCert,
      callback);
};


/**
 * @param {!proto.physicalcertpb.ListPhysicalCertRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.physicalcertpb.ListPhysicalCertResponse>}
 *     Promise that resolves to the response
 */
proto.physicalcertpb.PhysicalCertServicePromiseClient.prototype.listPhysicalCert =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/physicalcertpb.PhysicalCertService/ListPhysicalCert',
      request,
      metadata || {},
      methodDescriptor_PhysicalCertService_ListPhysicalCert);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.physicalcertpb.ListLocationRequest,
 *   !proto.physicalcertpb.ListLocationResponse>}
 */
const methodDescriptor_PhysicalCertService_ListLocation = new grpc.web.MethodDescriptor(
  '/physicalcertpb.PhysicalCertService/ListLocation',
  grpc.web.MethodType.UNARY,
  proto.physicalcertpb.ListLocationRequest,
  proto.physicalcertpb.ListLocationResponse,
  /**
   * @param {!proto.physicalcertpb.ListLocationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.physicalcertpb.ListLocationResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.physicalcertpb.ListLocationRequest,
 *   !proto.physicalcertpb.ListLocationResponse>}
 */
const methodInfo_PhysicalCertService_ListLocation = new grpc.web.AbstractClientBase.MethodInfo(
  proto.physicalcertpb.ListLocationResponse,
  /**
   * @param {!proto.physicalcertpb.ListLocationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.physicalcertpb.ListLocationResponse.deserializeBinary
);


/**
 * @param {!proto.physicalcertpb.ListLocationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.physicalcertpb.ListLocationResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.physicalcertpb.ListLocationResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.physicalcertpb.PhysicalCertServiceClient.prototype.listLocation =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/physicalcertpb.PhysicalCertService/ListLocation',
      request,
      metadata || {},
      methodDescriptor_PhysicalCertService_ListLocation,
      callback);
};


/**
 * @param {!proto.physicalcertpb.ListLocationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.physicalcertpb.ListLocationResponse>}
 *     Promise that resolves to the response
 */
proto.physicalcertpb.PhysicalCertServicePromiseClient.prototype.listLocation =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/physicalcertpb.PhysicalCertService/ListLocation',
      request,
      metadata || {},
      methodDescriptor_PhysicalCertService_ListLocation);
};


module.exports = proto.physicalcertpb;

