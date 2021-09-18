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

const proto = {};
proto.admpb = require('./emailmanager_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.admpb.EmailManagerServiceClient =
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
proto.admpb.EmailManagerServicePromiseClient =
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
 *   !proto.admpb.EmailManager,
 *   !proto.admpb.CreateEmailManagerResponse>}
 */
const methodDescriptor_EmailManagerService_CreateEmailManager = new grpc.web.MethodDescriptor(
  '/admpb.EmailManagerService/CreateEmailManager',
  grpc.web.MethodType.UNARY,
  proto.admpb.EmailManager,
  proto.admpb.CreateEmailManagerResponse,
  /**
   * @param {!proto.admpb.EmailManager} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admpb.CreateEmailManagerResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.admpb.EmailManager,
 *   !proto.admpb.CreateEmailManagerResponse>}
 */
const methodInfo_EmailManagerService_CreateEmailManager = new grpc.web.AbstractClientBase.MethodInfo(
  proto.admpb.CreateEmailManagerResponse,
  /**
   * @param {!proto.admpb.EmailManager} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admpb.CreateEmailManagerResponse.deserializeBinary
);


/**
 * @param {!proto.admpb.EmailManager} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.admpb.CreateEmailManagerResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.admpb.CreateEmailManagerResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.admpb.EmailManagerServiceClient.prototype.createEmailManager =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/admpb.EmailManagerService/CreateEmailManager',
      request,
      metadata || {},
      methodDescriptor_EmailManagerService_CreateEmailManager,
      callback);
};


/**
 * @param {!proto.admpb.EmailManager} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.admpb.CreateEmailManagerResponse>}
 *     Promise that resolves to the response
 */
proto.admpb.EmailManagerServicePromiseClient.prototype.createEmailManager =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/admpb.EmailManagerService/CreateEmailManager',
      request,
      metadata || {},
      methodDescriptor_EmailManagerService_CreateEmailManager);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.admpb.EmailManager,
 *   !proto.admpb.UpdateEmailManagerResponse>}
 */
const methodDescriptor_EmailManagerService_UpdateEmailManager = new grpc.web.MethodDescriptor(
  '/admpb.EmailManagerService/UpdateEmailManager',
  grpc.web.MethodType.UNARY,
  proto.admpb.EmailManager,
  proto.admpb.UpdateEmailManagerResponse,
  /**
   * @param {!proto.admpb.EmailManager} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admpb.UpdateEmailManagerResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.admpb.EmailManager,
 *   !proto.admpb.UpdateEmailManagerResponse>}
 */
const methodInfo_EmailManagerService_UpdateEmailManager = new grpc.web.AbstractClientBase.MethodInfo(
  proto.admpb.UpdateEmailManagerResponse,
  /**
   * @param {!proto.admpb.EmailManager} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admpb.UpdateEmailManagerResponse.deserializeBinary
);


/**
 * @param {!proto.admpb.EmailManager} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.admpb.UpdateEmailManagerResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.admpb.UpdateEmailManagerResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.admpb.EmailManagerServiceClient.prototype.updateEmailManager =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/admpb.EmailManagerService/UpdateEmailManager',
      request,
      metadata || {},
      methodDescriptor_EmailManagerService_UpdateEmailManager,
      callback);
};


/**
 * @param {!proto.admpb.EmailManager} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.admpb.UpdateEmailManagerResponse>}
 *     Promise that resolves to the response
 */
proto.admpb.EmailManagerServicePromiseClient.prototype.updateEmailManager =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/admpb.EmailManagerService/UpdateEmailManager',
      request,
      metadata || {},
      methodDescriptor_EmailManagerService_UpdateEmailManager);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.admpb.DeleteEmailManagerRequest,
 *   !proto.admpb.DeleteEmailManagerResponse>}
 */
const methodDescriptor_EmailManagerService_DeleteEmailManager = new grpc.web.MethodDescriptor(
  '/admpb.EmailManagerService/DeleteEmailManager',
  grpc.web.MethodType.UNARY,
  proto.admpb.DeleteEmailManagerRequest,
  proto.admpb.DeleteEmailManagerResponse,
  /**
   * @param {!proto.admpb.DeleteEmailManagerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admpb.DeleteEmailManagerResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.admpb.DeleteEmailManagerRequest,
 *   !proto.admpb.DeleteEmailManagerResponse>}
 */
const methodInfo_EmailManagerService_DeleteEmailManager = new grpc.web.AbstractClientBase.MethodInfo(
  proto.admpb.DeleteEmailManagerResponse,
  /**
   * @param {!proto.admpb.DeleteEmailManagerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admpb.DeleteEmailManagerResponse.deserializeBinary
);


/**
 * @param {!proto.admpb.DeleteEmailManagerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.admpb.DeleteEmailManagerResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.admpb.DeleteEmailManagerResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.admpb.EmailManagerServiceClient.prototype.deleteEmailManager =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/admpb.EmailManagerService/DeleteEmailManager',
      request,
      metadata || {},
      methodDescriptor_EmailManagerService_DeleteEmailManager,
      callback);
};


/**
 * @param {!proto.admpb.DeleteEmailManagerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.admpb.DeleteEmailManagerResponse>}
 *     Promise that resolves to the response
 */
proto.admpb.EmailManagerServicePromiseClient.prototype.deleteEmailManager =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/admpb.EmailManagerService/DeleteEmailManager',
      request,
      metadata || {},
      methodDescriptor_EmailManagerService_DeleteEmailManager);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.admpb.ListEmailManagerRequest,
 *   !proto.admpb.ListEmailManagerResponse>}
 */
const methodDescriptor_EmailManagerService_ListEmailManager = new grpc.web.MethodDescriptor(
  '/admpb.EmailManagerService/ListEmailManager',
  grpc.web.MethodType.UNARY,
  proto.admpb.ListEmailManagerRequest,
  proto.admpb.ListEmailManagerResponse,
  /**
   * @param {!proto.admpb.ListEmailManagerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admpb.ListEmailManagerResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.admpb.ListEmailManagerRequest,
 *   !proto.admpb.ListEmailManagerResponse>}
 */
const methodInfo_EmailManagerService_ListEmailManager = new grpc.web.AbstractClientBase.MethodInfo(
  proto.admpb.ListEmailManagerResponse,
  /**
   * @param {!proto.admpb.ListEmailManagerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admpb.ListEmailManagerResponse.deserializeBinary
);


/**
 * @param {!proto.admpb.ListEmailManagerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.admpb.ListEmailManagerResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.admpb.ListEmailManagerResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.admpb.EmailManagerServiceClient.prototype.listEmailManager =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/admpb.EmailManagerService/ListEmailManager',
      request,
      metadata || {},
      methodDescriptor_EmailManagerService_ListEmailManager,
      callback);
};


/**
 * @param {!proto.admpb.ListEmailManagerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.admpb.ListEmailManagerResponse>}
 *     Promise that resolves to the response
 */
proto.admpb.EmailManagerServicePromiseClient.prototype.listEmailManager =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/admpb.EmailManagerService/ListEmailManager',
      request,
      metadata || {},
      methodDescriptor_EmailManagerService_ListEmailManager);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.admpb.DropdownRecipientsRequest,
 *   !proto.admpb.DropdownRecipientsResponse>}
 */
const methodDescriptor_EmailManagerService_DropdownRecipients = new grpc.web.MethodDescriptor(
  '/admpb.EmailManagerService/DropdownRecipients',
  grpc.web.MethodType.UNARY,
  proto.admpb.DropdownRecipientsRequest,
  proto.admpb.DropdownRecipientsResponse,
  /**
   * @param {!proto.admpb.DropdownRecipientsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admpb.DropdownRecipientsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.admpb.DropdownRecipientsRequest,
 *   !proto.admpb.DropdownRecipientsResponse>}
 */
const methodInfo_EmailManagerService_DropdownRecipients = new grpc.web.AbstractClientBase.MethodInfo(
  proto.admpb.DropdownRecipientsResponse,
  /**
   * @param {!proto.admpb.DropdownRecipientsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admpb.DropdownRecipientsResponse.deserializeBinary
);


/**
 * @param {!proto.admpb.DropdownRecipientsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.admpb.DropdownRecipientsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.admpb.DropdownRecipientsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.admpb.EmailManagerServiceClient.prototype.dropdownRecipients =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/admpb.EmailManagerService/DropdownRecipients',
      request,
      metadata || {},
      methodDescriptor_EmailManagerService_DropdownRecipients,
      callback);
};


/**
 * @param {!proto.admpb.DropdownRecipientsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.admpb.DropdownRecipientsResponse>}
 *     Promise that resolves to the response
 */
proto.admpb.EmailManagerServicePromiseClient.prototype.dropdownRecipients =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/admpb.EmailManagerService/DropdownRecipients',
      request,
      metadata || {},
      methodDescriptor_EmailManagerService_DropdownRecipients);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.admpb.EmailManager,
 *   !proto.admpb.ReadEmailManagerResponse>}
 */
const methodDescriptor_EmailManagerService_ReadEmailManager = new grpc.web.MethodDescriptor(
  '/admpb.EmailManagerService/ReadEmailManager',
  grpc.web.MethodType.UNARY,
  proto.admpb.EmailManager,
  proto.admpb.ReadEmailManagerResponse,
  /**
   * @param {!proto.admpb.EmailManager} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admpb.ReadEmailManagerResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.admpb.EmailManager,
 *   !proto.admpb.ReadEmailManagerResponse>}
 */
const methodInfo_EmailManagerService_ReadEmailManager = new grpc.web.AbstractClientBase.MethodInfo(
  proto.admpb.ReadEmailManagerResponse,
  /**
   * @param {!proto.admpb.EmailManager} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admpb.ReadEmailManagerResponse.deserializeBinary
);


/**
 * @param {!proto.admpb.EmailManager} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.admpb.ReadEmailManagerResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.admpb.ReadEmailManagerResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.admpb.EmailManagerServiceClient.prototype.readEmailManager =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/admpb.EmailManagerService/ReadEmailManager',
      request,
      metadata || {},
      methodDescriptor_EmailManagerService_ReadEmailManager,
      callback);
};


/**
 * @param {!proto.admpb.EmailManager} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.admpb.ReadEmailManagerResponse>}
 *     Promise that resolves to the response
 */
proto.admpb.EmailManagerServicePromiseClient.prototype.readEmailManager =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/admpb.EmailManagerService/ReadEmailManager',
      request,
      metadata || {},
      methodDescriptor_EmailManagerService_ReadEmailManager);
};


module.exports = proto.admpb;

