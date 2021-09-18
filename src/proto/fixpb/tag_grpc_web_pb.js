/**
 * @fileoverview gRPC-Web generated client stub for fixpb
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.fixpb = require('./tag_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.fixpb.FixTagServiceClient =
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
proto.fixpb.FixTagServicePromiseClient =
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
 *   !proto.fixpb.FixTag,
 *   !proto.fixpb.CreateFixTagResponse>}
 */
const methodDescriptor_FixTagService_CreateFixTag = new grpc.web.MethodDescriptor(
  '/fixpb.FixTagService/CreateFixTag',
  grpc.web.MethodType.UNARY,
  proto.fixpb.FixTag,
  proto.fixpb.CreateFixTagResponse,
  /**
   * @param {!proto.fixpb.FixTag} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.fixpb.CreateFixTagResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.fixpb.FixTag,
 *   !proto.fixpb.CreateFixTagResponse>}
 */
const methodInfo_FixTagService_CreateFixTag = new grpc.web.AbstractClientBase.MethodInfo(
  proto.fixpb.CreateFixTagResponse,
  /**
   * @param {!proto.fixpb.FixTag} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.fixpb.CreateFixTagResponse.deserializeBinary
);


/**
 * @param {!proto.fixpb.FixTag} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.fixpb.CreateFixTagResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.fixpb.CreateFixTagResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.fixpb.FixTagServiceClient.prototype.createFixTag =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/fixpb.FixTagService/CreateFixTag',
      request,
      metadata || {},
      methodDescriptor_FixTagService_CreateFixTag,
      callback);
};


/**
 * @param {!proto.fixpb.FixTag} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.fixpb.CreateFixTagResponse>}
 *     Promise that resolves to the response
 */
proto.fixpb.FixTagServicePromiseClient.prototype.createFixTag =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/fixpb.FixTagService/CreateFixTag',
      request,
      metadata || {},
      methodDescriptor_FixTagService_CreateFixTag);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.fixpb.FixTag,
 *   !proto.fixpb.UpdateFixTagResponse>}
 */
const methodDescriptor_FixTagService_UpdateFixTag = new grpc.web.MethodDescriptor(
  '/fixpb.FixTagService/UpdateFixTag',
  grpc.web.MethodType.UNARY,
  proto.fixpb.FixTag,
  proto.fixpb.UpdateFixTagResponse,
  /**
   * @param {!proto.fixpb.FixTag} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.fixpb.UpdateFixTagResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.fixpb.FixTag,
 *   !proto.fixpb.UpdateFixTagResponse>}
 */
const methodInfo_FixTagService_UpdateFixTag = new grpc.web.AbstractClientBase.MethodInfo(
  proto.fixpb.UpdateFixTagResponse,
  /**
   * @param {!proto.fixpb.FixTag} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.fixpb.UpdateFixTagResponse.deserializeBinary
);


/**
 * @param {!proto.fixpb.FixTag} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.fixpb.UpdateFixTagResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.fixpb.UpdateFixTagResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.fixpb.FixTagServiceClient.prototype.updateFixTag =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/fixpb.FixTagService/UpdateFixTag',
      request,
      metadata || {},
      methodDescriptor_FixTagService_UpdateFixTag,
      callback);
};


/**
 * @param {!proto.fixpb.FixTag} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.fixpb.UpdateFixTagResponse>}
 *     Promise that resolves to the response
 */
proto.fixpb.FixTagServicePromiseClient.prototype.updateFixTag =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/fixpb.FixTagService/UpdateFixTag',
      request,
      metadata || {},
      methodDescriptor_FixTagService_UpdateFixTag);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.fixpb.DeleteFixTagRequest,
 *   !proto.fixpb.DeleteFixTagResponse>}
 */
const methodDescriptor_FixTagService_DeleteFixTag = new grpc.web.MethodDescriptor(
  '/fixpb.FixTagService/DeleteFixTag',
  grpc.web.MethodType.UNARY,
  proto.fixpb.DeleteFixTagRequest,
  proto.fixpb.DeleteFixTagResponse,
  /**
   * @param {!proto.fixpb.DeleteFixTagRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.fixpb.DeleteFixTagResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.fixpb.DeleteFixTagRequest,
 *   !proto.fixpb.DeleteFixTagResponse>}
 */
const methodInfo_FixTagService_DeleteFixTag = new grpc.web.AbstractClientBase.MethodInfo(
  proto.fixpb.DeleteFixTagResponse,
  /**
   * @param {!proto.fixpb.DeleteFixTagRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.fixpb.DeleteFixTagResponse.deserializeBinary
);


/**
 * @param {!proto.fixpb.DeleteFixTagRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.fixpb.DeleteFixTagResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.fixpb.DeleteFixTagResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.fixpb.FixTagServiceClient.prototype.deleteFixTag =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/fixpb.FixTagService/DeleteFixTag',
      request,
      metadata || {},
      methodDescriptor_FixTagService_DeleteFixTag,
      callback);
};


/**
 * @param {!proto.fixpb.DeleteFixTagRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.fixpb.DeleteFixTagResponse>}
 *     Promise that resolves to the response
 */
proto.fixpb.FixTagServicePromiseClient.prototype.deleteFixTag =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/fixpb.FixTagService/DeleteFixTag',
      request,
      metadata || {},
      methodDescriptor_FixTagService_DeleteFixTag);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.fixpb.FixTag,
 *   !proto.fixpb.ListFixTagValueResponse>}
 */
const methodDescriptor_FixTagService_ListFixTagValue = new grpc.web.MethodDescriptor(
  '/fixpb.FixTagService/ListFixTagValue',
  grpc.web.MethodType.UNARY,
  proto.fixpb.FixTag,
  proto.fixpb.ListFixTagValueResponse,
  /**
   * @param {!proto.fixpb.FixTag} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.fixpb.ListFixTagValueResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.fixpb.FixTag,
 *   !proto.fixpb.ListFixTagValueResponse>}
 */
const methodInfo_FixTagService_ListFixTagValue = new grpc.web.AbstractClientBase.MethodInfo(
  proto.fixpb.ListFixTagValueResponse,
  /**
   * @param {!proto.fixpb.FixTag} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.fixpb.ListFixTagValueResponse.deserializeBinary
);


/**
 * @param {!proto.fixpb.FixTag} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.fixpb.ListFixTagValueResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.fixpb.ListFixTagValueResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.fixpb.FixTagServiceClient.prototype.listFixTagValue =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/fixpb.FixTagService/ListFixTagValue',
      request,
      metadata || {},
      methodDescriptor_FixTagService_ListFixTagValue,
      callback);
};


/**
 * @param {!proto.fixpb.FixTag} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.fixpb.ListFixTagValueResponse>}
 *     Promise that resolves to the response
 */
proto.fixpb.FixTagServicePromiseClient.prototype.listFixTagValue =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/fixpb.FixTagService/ListFixTagValue',
      request,
      metadata || {},
      methodDescriptor_FixTagService_ListFixTagValue);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.fixpb.FixTag,
 *   !proto.fixpb.ListFixTagSetupResponse>}
 */
const methodDescriptor_FixTagService_ListFixTagSetup = new grpc.web.MethodDescriptor(
  '/fixpb.FixTagService/ListFixTagSetup',
  grpc.web.MethodType.UNARY,
  proto.fixpb.FixTag,
  proto.fixpb.ListFixTagSetupResponse,
  /**
   * @param {!proto.fixpb.FixTag} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.fixpb.ListFixTagSetupResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.fixpb.FixTag,
 *   !proto.fixpb.ListFixTagSetupResponse>}
 */
const methodInfo_FixTagService_ListFixTagSetup = new grpc.web.AbstractClientBase.MethodInfo(
  proto.fixpb.ListFixTagSetupResponse,
  /**
   * @param {!proto.fixpb.FixTag} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.fixpb.ListFixTagSetupResponse.deserializeBinary
);


/**
 * @param {!proto.fixpb.FixTag} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.fixpb.ListFixTagSetupResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.fixpb.ListFixTagSetupResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.fixpb.FixTagServiceClient.prototype.listFixTagSetup =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/fixpb.FixTagService/ListFixTagSetup',
      request,
      metadata || {},
      methodDescriptor_FixTagService_ListFixTagSetup,
      callback);
};


/**
 * @param {!proto.fixpb.FixTag} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.fixpb.ListFixTagSetupResponse>}
 *     Promise that resolves to the response
 */
proto.fixpb.FixTagServicePromiseClient.prototype.listFixTagSetup =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/fixpb.FixTagService/ListFixTagSetup',
      request,
      metadata || {},
      methodDescriptor_FixTagService_ListFixTagSetup);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.fixpb.FixTag,
 *   !proto.fixpb.ProcessFixTagResponse>}
 */
const methodDescriptor_FixTagService_ProcessFixTag = new grpc.web.MethodDescriptor(
  '/fixpb.FixTagService/ProcessFixTag',
  grpc.web.MethodType.UNARY,
  proto.fixpb.FixTag,
  proto.fixpb.ProcessFixTagResponse,
  /**
   * @param {!proto.fixpb.FixTag} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.fixpb.ProcessFixTagResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.fixpb.FixTag,
 *   !proto.fixpb.ProcessFixTagResponse>}
 */
const methodInfo_FixTagService_ProcessFixTag = new grpc.web.AbstractClientBase.MethodInfo(
  proto.fixpb.ProcessFixTagResponse,
  /**
   * @param {!proto.fixpb.FixTag} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.fixpb.ProcessFixTagResponse.deserializeBinary
);


/**
 * @param {!proto.fixpb.FixTag} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.fixpb.ProcessFixTagResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.fixpb.ProcessFixTagResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.fixpb.FixTagServiceClient.prototype.processFixTag =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/fixpb.FixTagService/ProcessFixTag',
      request,
      metadata || {},
      methodDescriptor_FixTagService_ProcessFixTag,
      callback);
};


/**
 * @param {!proto.fixpb.FixTag} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.fixpb.ProcessFixTagResponse>}
 *     Promise that resolves to the response
 */
proto.fixpb.FixTagServicePromiseClient.prototype.processFixTag =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/fixpb.FixTagService/ProcessFixTag',
      request,
      metadata || {},
      methodDescriptor_FixTagService_ProcessFixTag);
};


module.exports = proto.fixpb;

