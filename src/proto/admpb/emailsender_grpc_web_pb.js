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


var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')

var google_type_date_pb = require('../../google/type/date_pb.js')
const proto = {};
proto.admpb = require('./emailsender_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.admpb.EmailSenderServiceClient =
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
proto.admpb.EmailSenderServicePromiseClient =
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
 *   !proto.admpb.EmailSender,
 *   !proto.admpb.CreateEmailSenderResponse>}
 */
const methodDescriptor_EmailSenderService_CreateEmailSender = new grpc.web.MethodDescriptor(
  '/admpb.EmailSenderService/CreateEmailSender',
  grpc.web.MethodType.UNARY,
  proto.admpb.EmailSender,
  proto.admpb.CreateEmailSenderResponse,
  /**
   * @param {!proto.admpb.EmailSender} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admpb.CreateEmailSenderResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.admpb.EmailSender,
 *   !proto.admpb.CreateEmailSenderResponse>}
 */
const methodInfo_EmailSenderService_CreateEmailSender = new grpc.web.AbstractClientBase.MethodInfo(
  proto.admpb.CreateEmailSenderResponse,
  /**
   * @param {!proto.admpb.EmailSender} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admpb.CreateEmailSenderResponse.deserializeBinary
);


/**
 * @param {!proto.admpb.EmailSender} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.admpb.CreateEmailSenderResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.admpb.CreateEmailSenderResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.admpb.EmailSenderServiceClient.prototype.createEmailSender =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/admpb.EmailSenderService/CreateEmailSender',
      request,
      metadata || {},
      methodDescriptor_EmailSenderService_CreateEmailSender,
      callback);
};


/**
 * @param {!proto.admpb.EmailSender} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.admpb.CreateEmailSenderResponse>}
 *     Promise that resolves to the response
 */
proto.admpb.EmailSenderServicePromiseClient.prototype.createEmailSender =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/admpb.EmailSenderService/CreateEmailSender',
      request,
      metadata || {},
      methodDescriptor_EmailSenderService_CreateEmailSender);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.admpb.EmailSender,
 *   !proto.admpb.UpdateEmailSenderResponse>}
 */
const methodDescriptor_EmailSenderService_UpdateEmailSender = new grpc.web.MethodDescriptor(
  '/admpb.EmailSenderService/UpdateEmailSender',
  grpc.web.MethodType.UNARY,
  proto.admpb.EmailSender,
  proto.admpb.UpdateEmailSenderResponse,
  /**
   * @param {!proto.admpb.EmailSender} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admpb.UpdateEmailSenderResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.admpb.EmailSender,
 *   !proto.admpb.UpdateEmailSenderResponse>}
 */
const methodInfo_EmailSenderService_UpdateEmailSender = new grpc.web.AbstractClientBase.MethodInfo(
  proto.admpb.UpdateEmailSenderResponse,
  /**
   * @param {!proto.admpb.EmailSender} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admpb.UpdateEmailSenderResponse.deserializeBinary
);


/**
 * @param {!proto.admpb.EmailSender} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.admpb.UpdateEmailSenderResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.admpb.UpdateEmailSenderResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.admpb.EmailSenderServiceClient.prototype.updateEmailSender =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/admpb.EmailSenderService/UpdateEmailSender',
      request,
      metadata || {},
      methodDescriptor_EmailSenderService_UpdateEmailSender,
      callback);
};


/**
 * @param {!proto.admpb.EmailSender} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.admpb.UpdateEmailSenderResponse>}
 *     Promise that resolves to the response
 */
proto.admpb.EmailSenderServicePromiseClient.prototype.updateEmailSender =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/admpb.EmailSenderService/UpdateEmailSender',
      request,
      metadata || {},
      methodDescriptor_EmailSenderService_UpdateEmailSender);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.admpb.DeleteEmailSenderRequest,
 *   !proto.admpb.DeleteEmailSenderResponse>}
 */
const methodDescriptor_EmailSenderService_DeleteEmailSender = new grpc.web.MethodDescriptor(
  '/admpb.EmailSenderService/DeleteEmailSender',
  grpc.web.MethodType.UNARY,
  proto.admpb.DeleteEmailSenderRequest,
  proto.admpb.DeleteEmailSenderResponse,
  /**
   * @param {!proto.admpb.DeleteEmailSenderRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admpb.DeleteEmailSenderResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.admpb.DeleteEmailSenderRequest,
 *   !proto.admpb.DeleteEmailSenderResponse>}
 */
const methodInfo_EmailSenderService_DeleteEmailSender = new grpc.web.AbstractClientBase.MethodInfo(
  proto.admpb.DeleteEmailSenderResponse,
  /**
   * @param {!proto.admpb.DeleteEmailSenderRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admpb.DeleteEmailSenderResponse.deserializeBinary
);


/**
 * @param {!proto.admpb.DeleteEmailSenderRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.admpb.DeleteEmailSenderResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.admpb.DeleteEmailSenderResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.admpb.EmailSenderServiceClient.prototype.deleteEmailSender =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/admpb.EmailSenderService/DeleteEmailSender',
      request,
      metadata || {},
      methodDescriptor_EmailSenderService_DeleteEmailSender,
      callback);
};


/**
 * @param {!proto.admpb.DeleteEmailSenderRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.admpb.DeleteEmailSenderResponse>}
 *     Promise that resolves to the response
 */
proto.admpb.EmailSenderServicePromiseClient.prototype.deleteEmailSender =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/admpb.EmailSenderService/DeleteEmailSender',
      request,
      metadata || {},
      methodDescriptor_EmailSenderService_DeleteEmailSender);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.admpb.ListEmailSenderRequest,
 *   !proto.admpb.ListEmailSenderResponse>}
 */
const methodDescriptor_EmailSenderService_ListEmailSender = new grpc.web.MethodDescriptor(
  '/admpb.EmailSenderService/ListEmailSender',
  grpc.web.MethodType.UNARY,
  proto.admpb.ListEmailSenderRequest,
  proto.admpb.ListEmailSenderResponse,
  /**
   * @param {!proto.admpb.ListEmailSenderRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admpb.ListEmailSenderResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.admpb.ListEmailSenderRequest,
 *   !proto.admpb.ListEmailSenderResponse>}
 */
const methodInfo_EmailSenderService_ListEmailSender = new grpc.web.AbstractClientBase.MethodInfo(
  proto.admpb.ListEmailSenderResponse,
  /**
   * @param {!proto.admpb.ListEmailSenderRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admpb.ListEmailSenderResponse.deserializeBinary
);


/**
 * @param {!proto.admpb.ListEmailSenderRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.admpb.ListEmailSenderResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.admpb.ListEmailSenderResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.admpb.EmailSenderServiceClient.prototype.listEmailSender =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/admpb.EmailSenderService/ListEmailSender',
      request,
      metadata || {},
      methodDescriptor_EmailSenderService_ListEmailSender,
      callback);
};


/**
 * @param {!proto.admpb.ListEmailSenderRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.admpb.ListEmailSenderResponse>}
 *     Promise that resolves to the response
 */
proto.admpb.EmailSenderServicePromiseClient.prototype.listEmailSender =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/admpb.EmailSenderService/ListEmailSender',
      request,
      metadata || {},
      methodDescriptor_EmailSenderService_ListEmailSender);
};


module.exports = proto.admpb;

