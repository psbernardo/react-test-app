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
const proto = {};
proto.accountpb = require('./contactinfo_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.accountpb.ContactInfoServiceClient =
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
proto.accountpb.ContactInfoServicePromiseClient =
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
 *   !proto.accountpb.ContactInfo,
 *   !proto.accountpb.CreateContactInfoResponse>}
 */
const methodDescriptor_ContactInfoService_CreateContactInfo = new grpc.web.MethodDescriptor(
  '/accountpb.ContactInfoService/CreateContactInfo',
  grpc.web.MethodType.UNARY,
  proto.accountpb.ContactInfo,
  proto.accountpb.CreateContactInfoResponse,
  /**
   * @param {!proto.accountpb.ContactInfo} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.accountpb.CreateContactInfoResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.accountpb.ContactInfo,
 *   !proto.accountpb.CreateContactInfoResponse>}
 */
const methodInfo_ContactInfoService_CreateContactInfo = new grpc.web.AbstractClientBase.MethodInfo(
  proto.accountpb.CreateContactInfoResponse,
  /**
   * @param {!proto.accountpb.ContactInfo} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.accountpb.CreateContactInfoResponse.deserializeBinary
);


/**
 * @param {!proto.accountpb.ContactInfo} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.accountpb.CreateContactInfoResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.accountpb.CreateContactInfoResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.accountpb.ContactInfoServiceClient.prototype.createContactInfo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/accountpb.ContactInfoService/CreateContactInfo',
      request,
      metadata || {},
      methodDescriptor_ContactInfoService_CreateContactInfo,
      callback);
};


/**
 * @param {!proto.accountpb.ContactInfo} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.accountpb.CreateContactInfoResponse>}
 *     A native promise that resolves to the response
 */
proto.accountpb.ContactInfoServicePromiseClient.prototype.createContactInfo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/accountpb.ContactInfoService/CreateContactInfo',
      request,
      metadata || {},
      methodDescriptor_ContactInfoService_CreateContactInfo);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.accountpb.ContactInfo,
 *   !proto.accountpb.UpdateContactInfoResponse>}
 */
const methodDescriptor_ContactInfoService_UpdateContactInfo = new grpc.web.MethodDescriptor(
  '/accountpb.ContactInfoService/UpdateContactInfo',
  grpc.web.MethodType.UNARY,
  proto.accountpb.ContactInfo,
  proto.accountpb.UpdateContactInfoResponse,
  /**
   * @param {!proto.accountpb.ContactInfo} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.accountpb.UpdateContactInfoResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.accountpb.ContactInfo,
 *   !proto.accountpb.UpdateContactInfoResponse>}
 */
const methodInfo_ContactInfoService_UpdateContactInfo = new grpc.web.AbstractClientBase.MethodInfo(
  proto.accountpb.UpdateContactInfoResponse,
  /**
   * @param {!proto.accountpb.ContactInfo} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.accountpb.UpdateContactInfoResponse.deserializeBinary
);


/**
 * @param {!proto.accountpb.ContactInfo} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.accountpb.UpdateContactInfoResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.accountpb.UpdateContactInfoResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.accountpb.ContactInfoServiceClient.prototype.updateContactInfo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/accountpb.ContactInfoService/UpdateContactInfo',
      request,
      metadata || {},
      methodDescriptor_ContactInfoService_UpdateContactInfo,
      callback);
};


/**
 * @param {!proto.accountpb.ContactInfo} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.accountpb.UpdateContactInfoResponse>}
 *     A native promise that resolves to the response
 */
proto.accountpb.ContactInfoServicePromiseClient.prototype.updateContactInfo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/accountpb.ContactInfoService/UpdateContactInfo',
      request,
      metadata || {},
      methodDescriptor_ContactInfoService_UpdateContactInfo);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.accountpb.ReadContactInfoRequest,
 *   !proto.accountpb.ReadContactInfoResponse>}
 */
const methodDescriptor_ContactInfoService_ReadContactInfo = new grpc.web.MethodDescriptor(
  '/accountpb.ContactInfoService/ReadContactInfo',
  grpc.web.MethodType.UNARY,
  proto.accountpb.ReadContactInfoRequest,
  proto.accountpb.ReadContactInfoResponse,
  /**
   * @param {!proto.accountpb.ReadContactInfoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.accountpb.ReadContactInfoResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.accountpb.ReadContactInfoRequest,
 *   !proto.accountpb.ReadContactInfoResponse>}
 */
const methodInfo_ContactInfoService_ReadContactInfo = new grpc.web.AbstractClientBase.MethodInfo(
  proto.accountpb.ReadContactInfoResponse,
  /**
   * @param {!proto.accountpb.ReadContactInfoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.accountpb.ReadContactInfoResponse.deserializeBinary
);


/**
 * @param {!proto.accountpb.ReadContactInfoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.accountpb.ReadContactInfoResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.accountpb.ReadContactInfoResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.accountpb.ContactInfoServiceClient.prototype.readContactInfo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/accountpb.ContactInfoService/ReadContactInfo',
      request,
      metadata || {},
      methodDescriptor_ContactInfoService_ReadContactInfo,
      callback);
};


/**
 * @param {!proto.accountpb.ReadContactInfoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.accountpb.ReadContactInfoResponse>}
 *     A native promise that resolves to the response
 */
proto.accountpb.ContactInfoServicePromiseClient.prototype.readContactInfo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/accountpb.ContactInfoService/ReadContactInfo',
      request,
      metadata || {},
      methodDescriptor_ContactInfoService_ReadContactInfo);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.accountpb.DeleteContactInfoRequest,
 *   !proto.accountpb.DeleteContactInfoResponse>}
 */
const methodDescriptor_ContactInfoService_DeleteContactInfo = new grpc.web.MethodDescriptor(
  '/accountpb.ContactInfoService/DeleteContactInfo',
  grpc.web.MethodType.UNARY,
  proto.accountpb.DeleteContactInfoRequest,
  proto.accountpb.DeleteContactInfoResponse,
  /**
   * @param {!proto.accountpb.DeleteContactInfoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.accountpb.DeleteContactInfoResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.accountpb.DeleteContactInfoRequest,
 *   !proto.accountpb.DeleteContactInfoResponse>}
 */
const methodInfo_ContactInfoService_DeleteContactInfo = new grpc.web.AbstractClientBase.MethodInfo(
  proto.accountpb.DeleteContactInfoResponse,
  /**
   * @param {!proto.accountpb.DeleteContactInfoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.accountpb.DeleteContactInfoResponse.deserializeBinary
);


/**
 * @param {!proto.accountpb.DeleteContactInfoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.accountpb.DeleteContactInfoResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.accountpb.DeleteContactInfoResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.accountpb.ContactInfoServiceClient.prototype.deleteContactInfo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/accountpb.ContactInfoService/DeleteContactInfo',
      request,
      metadata || {},
      methodDescriptor_ContactInfoService_DeleteContactInfo,
      callback);
};


/**
 * @param {!proto.accountpb.DeleteContactInfoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.accountpb.DeleteContactInfoResponse>}
 *     A native promise that resolves to the response
 */
proto.accountpb.ContactInfoServicePromiseClient.prototype.deleteContactInfo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/accountpb.ContactInfoService/DeleteContactInfo',
      request,
      metadata || {},
      methodDescriptor_ContactInfoService_DeleteContactInfo);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.accountpb.BatchCreateContactInfoRequest,
 *   !proto.accountpb.BatchCreateContactInfoResponse>}
 */
const methodDescriptor_ContactInfoService_BatchCreateContactInfo = new grpc.web.MethodDescriptor(
  '/accountpb.ContactInfoService/BatchCreateContactInfo',
  grpc.web.MethodType.UNARY,
  proto.accountpb.BatchCreateContactInfoRequest,
  proto.accountpb.BatchCreateContactInfoResponse,
  /**
   * @param {!proto.accountpb.BatchCreateContactInfoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.accountpb.BatchCreateContactInfoResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.accountpb.BatchCreateContactInfoRequest,
 *   !proto.accountpb.BatchCreateContactInfoResponse>}
 */
const methodInfo_ContactInfoService_BatchCreateContactInfo = new grpc.web.AbstractClientBase.MethodInfo(
  proto.accountpb.BatchCreateContactInfoResponse,
  /**
   * @param {!proto.accountpb.BatchCreateContactInfoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.accountpb.BatchCreateContactInfoResponse.deserializeBinary
);


/**
 * @param {!proto.accountpb.BatchCreateContactInfoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.accountpb.BatchCreateContactInfoResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.accountpb.BatchCreateContactInfoResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.accountpb.ContactInfoServiceClient.prototype.batchCreateContactInfo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/accountpb.ContactInfoService/BatchCreateContactInfo',
      request,
      metadata || {},
      methodDescriptor_ContactInfoService_BatchCreateContactInfo,
      callback);
};


/**
 * @param {!proto.accountpb.BatchCreateContactInfoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.accountpb.BatchCreateContactInfoResponse>}
 *     A native promise that resolves to the response
 */
proto.accountpb.ContactInfoServicePromiseClient.prototype.batchCreateContactInfo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/accountpb.ContactInfoService/BatchCreateContactInfo',
      request,
      metadata || {},
      methodDescriptor_ContactInfoService_BatchCreateContactInfo);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.accountpb.ListContactInfoAuditRequest,
 *   !proto.accountpb.ListContactInfoAuditResponse>}
 */
const methodDescriptor_ContactInfoService_ListContactInfoAudit = new grpc.web.MethodDescriptor(
  '/accountpb.ContactInfoService/ListContactInfoAudit',
  grpc.web.MethodType.UNARY,
  proto.accountpb.ListContactInfoAuditRequest,
  proto.accountpb.ListContactInfoAuditResponse,
  /**
   * @param {!proto.accountpb.ListContactInfoAuditRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.accountpb.ListContactInfoAuditResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.accountpb.ListContactInfoAuditRequest,
 *   !proto.accountpb.ListContactInfoAuditResponse>}
 */
const methodInfo_ContactInfoService_ListContactInfoAudit = new grpc.web.AbstractClientBase.MethodInfo(
  proto.accountpb.ListContactInfoAuditResponse,
  /**
   * @param {!proto.accountpb.ListContactInfoAuditRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.accountpb.ListContactInfoAuditResponse.deserializeBinary
);


/**
 * @param {!proto.accountpb.ListContactInfoAuditRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.accountpb.ListContactInfoAuditResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.accountpb.ListContactInfoAuditResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.accountpb.ContactInfoServiceClient.prototype.listContactInfoAudit =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/accountpb.ContactInfoService/ListContactInfoAudit',
      request,
      metadata || {},
      methodDescriptor_ContactInfoService_ListContactInfoAudit,
      callback);
};


/**
 * @param {!proto.accountpb.ListContactInfoAuditRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.accountpb.ListContactInfoAuditResponse>}
 *     A native promise that resolves to the response
 */
proto.accountpb.ContactInfoServicePromiseClient.prototype.listContactInfoAudit =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/accountpb.ContactInfoService/ListContactInfoAudit',
      request,
      metadata || {},
      methodDescriptor_ContactInfoService_ListContactInfoAudit);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.accountpb.ContactInfo,
 *   !proto.accountpb.ListContactInfoResponse>}
 */
const methodDescriptor_ContactInfoService_ListContactInfo = new grpc.web.MethodDescriptor(
  '/accountpb.ContactInfoService/ListContactInfo',
  grpc.web.MethodType.UNARY,
  proto.accountpb.ContactInfo,
  proto.accountpb.ListContactInfoResponse,
  /**
   * @param {!proto.accountpb.ContactInfo} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.accountpb.ListContactInfoResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.accountpb.ContactInfo,
 *   !proto.accountpb.ListContactInfoResponse>}
 */
const methodInfo_ContactInfoService_ListContactInfo = new grpc.web.AbstractClientBase.MethodInfo(
  proto.accountpb.ListContactInfoResponse,
  /**
   * @param {!proto.accountpb.ContactInfo} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.accountpb.ListContactInfoResponse.deserializeBinary
);


/**
 * @param {!proto.accountpb.ContactInfo} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.accountpb.ListContactInfoResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.accountpb.ListContactInfoResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.accountpb.ContactInfoServiceClient.prototype.listContactInfo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/accountpb.ContactInfoService/ListContactInfo',
      request,
      metadata || {},
      methodDescriptor_ContactInfoService_ListContactInfo,
      callback);
};


/**
 * @param {!proto.accountpb.ContactInfo} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.accountpb.ListContactInfoResponse>}
 *     A native promise that resolves to the response
 */
proto.accountpb.ContactInfoServicePromiseClient.prototype.listContactInfo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/accountpb.ContactInfoService/ListContactInfo',
      request,
      metadata || {},
      methodDescriptor_ContactInfoService_ListContactInfo);
};


module.exports = proto.accountpb;

