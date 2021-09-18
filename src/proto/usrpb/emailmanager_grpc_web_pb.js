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

const proto = {};
proto.usrpb = require('./emailmanager_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.usrpb.EmailManagerServiceClient =
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
proto.usrpb.EmailManagerServicePromiseClient =
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
 *   !proto.usrpb.ListEmailManagerRequest,
 *   !proto.usrpb.ListEmailManagerResponse>}
 */
const methodDescriptor_EmailManagerService_ListEmailManager = new grpc.web.MethodDescriptor(
  '/usrpb.EmailManagerService/ListEmailManager',
  grpc.web.MethodType.UNARY,
  proto.usrpb.ListEmailManagerRequest,
  proto.usrpb.ListEmailManagerResponse,
  /**
   * @param {!proto.usrpb.ListEmailManagerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.usrpb.ListEmailManagerResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.usrpb.ListEmailManagerRequest,
 *   !proto.usrpb.ListEmailManagerResponse>}
 */
const methodInfo_EmailManagerService_ListEmailManager = new grpc.web.AbstractClientBase.MethodInfo(
  proto.usrpb.ListEmailManagerResponse,
  /**
   * @param {!proto.usrpb.ListEmailManagerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.usrpb.ListEmailManagerResponse.deserializeBinary
);


/**
 * @param {!proto.usrpb.ListEmailManagerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.usrpb.ListEmailManagerResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.usrpb.ListEmailManagerResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.usrpb.EmailManagerServiceClient.prototype.listEmailManager =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/usrpb.EmailManagerService/ListEmailManager',
      request,
      metadata || {},
      methodDescriptor_EmailManagerService_ListEmailManager,
      callback);
};


/**
 * @param {!proto.usrpb.ListEmailManagerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.usrpb.ListEmailManagerResponse>}
 *     Promise that resolves to the response
 */
proto.usrpb.EmailManagerServicePromiseClient.prototype.listEmailManager =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/usrpb.EmailManagerService/ListEmailManager',
      request,
      metadata || {},
      methodDescriptor_EmailManagerService_ListEmailManager);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.usrpb.EmailManager,
 *   !proto.usrpb.CreateEmailManagerResponse>}
 */
const methodDescriptor_EmailManagerService_CreateEmailManager = new grpc.web.MethodDescriptor(
  '/usrpb.EmailManagerService/CreateEmailManager',
  grpc.web.MethodType.UNARY,
  proto.usrpb.EmailManager,
  proto.usrpb.CreateEmailManagerResponse,
  /**
   * @param {!proto.usrpb.EmailManager} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.usrpb.CreateEmailManagerResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.usrpb.EmailManager,
 *   !proto.usrpb.CreateEmailManagerResponse>}
 */
const methodInfo_EmailManagerService_CreateEmailManager = new grpc.web.AbstractClientBase.MethodInfo(
  proto.usrpb.CreateEmailManagerResponse,
  /**
   * @param {!proto.usrpb.EmailManager} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.usrpb.CreateEmailManagerResponse.deserializeBinary
);


/**
 * @param {!proto.usrpb.EmailManager} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.usrpb.CreateEmailManagerResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.usrpb.CreateEmailManagerResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.usrpb.EmailManagerServiceClient.prototype.createEmailManager =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/usrpb.EmailManagerService/CreateEmailManager',
      request,
      metadata || {},
      methodDescriptor_EmailManagerService_CreateEmailManager,
      callback);
};


/**
 * @param {!proto.usrpb.EmailManager} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.usrpb.CreateEmailManagerResponse>}
 *     Promise that resolves to the response
 */
proto.usrpb.EmailManagerServicePromiseClient.prototype.createEmailManager =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/usrpb.EmailManagerService/CreateEmailManager',
      request,
      metadata || {},
      methodDescriptor_EmailManagerService_CreateEmailManager);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.usrpb.EmailManager,
 *   !proto.usrpb.UpdateEmailManagerResponse>}
 */
const methodDescriptor_EmailManagerService_UpdateEmailManager = new grpc.web.MethodDescriptor(
  '/usrpb.EmailManagerService/UpdateEmailManager',
  grpc.web.MethodType.UNARY,
  proto.usrpb.EmailManager,
  proto.usrpb.UpdateEmailManagerResponse,
  /**
   * @param {!proto.usrpb.EmailManager} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.usrpb.UpdateEmailManagerResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.usrpb.EmailManager,
 *   !proto.usrpb.UpdateEmailManagerResponse>}
 */
const methodInfo_EmailManagerService_UpdateEmailManager = new grpc.web.AbstractClientBase.MethodInfo(
  proto.usrpb.UpdateEmailManagerResponse,
  /**
   * @param {!proto.usrpb.EmailManager} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.usrpb.UpdateEmailManagerResponse.deserializeBinary
);


/**
 * @param {!proto.usrpb.EmailManager} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.usrpb.UpdateEmailManagerResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.usrpb.UpdateEmailManagerResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.usrpb.EmailManagerServiceClient.prototype.updateEmailManager =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/usrpb.EmailManagerService/UpdateEmailManager',
      request,
      metadata || {},
      methodDescriptor_EmailManagerService_UpdateEmailManager,
      callback);
};


/**
 * @param {!proto.usrpb.EmailManager} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.usrpb.UpdateEmailManagerResponse>}
 *     Promise that resolves to the response
 */
proto.usrpb.EmailManagerServicePromiseClient.prototype.updateEmailManager =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/usrpb.EmailManagerService/UpdateEmailManager',
      request,
      metadata || {},
      methodDescriptor_EmailManagerService_UpdateEmailManager);
};


module.exports = proto.usrpb;

