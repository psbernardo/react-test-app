/**
 * @fileoverview gRPC-Web generated client stub for dtccpb
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
proto.dtccpb = require('./openitem_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.dtccpb.OpenItemServiceClient =
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
proto.dtccpb.OpenItemServicePromiseClient =
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
 *   !proto.dtccpb.ListOpenItemRequest,
 *   !proto.dtccpb.ListOpenItemResponse>}
 */
const methodDescriptor_OpenItemService_ListOpenItem = new grpc.web.MethodDescriptor(
  '/dtccpb.OpenItemService/ListOpenItem',
  grpc.web.MethodType.UNARY,
  proto.dtccpb.ListOpenItemRequest,
  proto.dtccpb.ListOpenItemResponse,
  /**
   * @param {!proto.dtccpb.ListOpenItemRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.dtccpb.ListOpenItemResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.dtccpb.ListOpenItemRequest,
 *   !proto.dtccpb.ListOpenItemResponse>}
 */
const methodInfo_OpenItemService_ListOpenItem = new grpc.web.AbstractClientBase.MethodInfo(
  proto.dtccpb.ListOpenItemResponse,
  /**
   * @param {!proto.dtccpb.ListOpenItemRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.dtccpb.ListOpenItemResponse.deserializeBinary
);


/**
 * @param {!proto.dtccpb.ListOpenItemRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.dtccpb.ListOpenItemResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.dtccpb.ListOpenItemResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.dtccpb.OpenItemServiceClient.prototype.listOpenItem =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/dtccpb.OpenItemService/ListOpenItem',
      request,
      metadata || {},
      methodDescriptor_OpenItemService_ListOpenItem,
      callback);
};


/**
 * @param {!proto.dtccpb.ListOpenItemRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.dtccpb.ListOpenItemResponse>}
 *     A native promise that resolves to the response
 */
proto.dtccpb.OpenItemServicePromiseClient.prototype.listOpenItem =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/dtccpb.OpenItemService/ListOpenItem',
      request,
      metadata || {},
      methodDescriptor_OpenItemService_ListOpenItem);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.dtccpb.ListOpenItemDetailsRequest,
 *   !proto.dtccpb.ListOpenItemDetailsResponse>}
 */
const methodDescriptor_OpenItemService_ListOpenItemDetails = new grpc.web.MethodDescriptor(
  '/dtccpb.OpenItemService/ListOpenItemDetails',
  grpc.web.MethodType.UNARY,
  proto.dtccpb.ListOpenItemDetailsRequest,
  proto.dtccpb.ListOpenItemDetailsResponse,
  /**
   * @param {!proto.dtccpb.ListOpenItemDetailsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.dtccpb.ListOpenItemDetailsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.dtccpb.ListOpenItemDetailsRequest,
 *   !proto.dtccpb.ListOpenItemDetailsResponse>}
 */
const methodInfo_OpenItemService_ListOpenItemDetails = new grpc.web.AbstractClientBase.MethodInfo(
  proto.dtccpb.ListOpenItemDetailsResponse,
  /**
   * @param {!proto.dtccpb.ListOpenItemDetailsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.dtccpb.ListOpenItemDetailsResponse.deserializeBinary
);


/**
 * @param {!proto.dtccpb.ListOpenItemDetailsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.dtccpb.ListOpenItemDetailsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.dtccpb.ListOpenItemDetailsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.dtccpb.OpenItemServiceClient.prototype.listOpenItemDetails =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/dtccpb.OpenItemService/ListOpenItemDetails',
      request,
      metadata || {},
      methodDescriptor_OpenItemService_ListOpenItemDetails,
      callback);
};


/**
 * @param {!proto.dtccpb.ListOpenItemDetailsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.dtccpb.ListOpenItemDetailsResponse>}
 *     A native promise that resolves to the response
 */
proto.dtccpb.OpenItemServicePromiseClient.prototype.listOpenItemDetails =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/dtccpb.OpenItemService/ListOpenItemDetails',
      request,
      metadata || {},
      methodDescriptor_OpenItemService_ListOpenItemDetails);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.dtccpb.EditOpenItemRequest,
 *   !proto.dtccpb.EditOpenItemResponse>}
 */
const methodDescriptor_OpenItemService_EditOpenItem = new grpc.web.MethodDescriptor(
  '/dtccpb.OpenItemService/EditOpenItem',
  grpc.web.MethodType.UNARY,
  proto.dtccpb.EditOpenItemRequest,
  proto.dtccpb.EditOpenItemResponse,
  /**
   * @param {!proto.dtccpb.EditOpenItemRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.dtccpb.EditOpenItemResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.dtccpb.EditOpenItemRequest,
 *   !proto.dtccpb.EditOpenItemResponse>}
 */
const methodInfo_OpenItemService_EditOpenItem = new grpc.web.AbstractClientBase.MethodInfo(
  proto.dtccpb.EditOpenItemResponse,
  /**
   * @param {!proto.dtccpb.EditOpenItemRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.dtccpb.EditOpenItemResponse.deserializeBinary
);


/**
 * @param {!proto.dtccpb.EditOpenItemRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.dtccpb.EditOpenItemResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.dtccpb.EditOpenItemResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.dtccpb.OpenItemServiceClient.prototype.editOpenItem =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/dtccpb.OpenItemService/EditOpenItem',
      request,
      metadata || {},
      methodDescriptor_OpenItemService_EditOpenItem,
      callback);
};


/**
 * @param {!proto.dtccpb.EditOpenItemRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.dtccpb.EditOpenItemResponse>}
 *     A native promise that resolves to the response
 */
proto.dtccpb.OpenItemServicePromiseClient.prototype.editOpenItem =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/dtccpb.OpenItemService/EditOpenItem',
      request,
      metadata || {},
      methodDescriptor_OpenItemService_EditOpenItem);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.dtccpb.EditStatusRequest,
 *   !proto.dtccpb.EditStatusResponse>}
 */
const methodDescriptor_OpenItemService_EditStatus = new grpc.web.MethodDescriptor(
  '/dtccpb.OpenItemService/EditStatus',
  grpc.web.MethodType.UNARY,
  proto.dtccpb.EditStatusRequest,
  proto.dtccpb.EditStatusResponse,
  /**
   * @param {!proto.dtccpb.EditStatusRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.dtccpb.EditStatusResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.dtccpb.EditStatusRequest,
 *   !proto.dtccpb.EditStatusResponse>}
 */
const methodInfo_OpenItemService_EditStatus = new grpc.web.AbstractClientBase.MethodInfo(
  proto.dtccpb.EditStatusResponse,
  /**
   * @param {!proto.dtccpb.EditStatusRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.dtccpb.EditStatusResponse.deserializeBinary
);


/**
 * @param {!proto.dtccpb.EditStatusRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.dtccpb.EditStatusResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.dtccpb.EditStatusResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.dtccpb.OpenItemServiceClient.prototype.editStatus =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/dtccpb.OpenItemService/EditStatus',
      request,
      metadata || {},
      methodDescriptor_OpenItemService_EditStatus,
      callback);
};


/**
 * @param {!proto.dtccpb.EditStatusRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.dtccpb.EditStatusResponse>}
 *     A native promise that resolves to the response
 */
proto.dtccpb.OpenItemServicePromiseClient.prototype.editStatus =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/dtccpb.OpenItemService/EditStatus',
      request,
      metadata || {},
      methodDescriptor_OpenItemService_EditStatus);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.dtccpb.SendDORequest,
 *   !proto.dtccpb.Empty>}
 */
const methodDescriptor_OpenItemService_SendDO = new grpc.web.MethodDescriptor(
  '/dtccpb.OpenItemService/SendDO',
  grpc.web.MethodType.UNARY,
  proto.dtccpb.SendDORequest,
  proto.dtccpb.Empty,
  /**
   * @param {!proto.dtccpb.SendDORequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.dtccpb.Empty.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.dtccpb.SendDORequest,
 *   !proto.dtccpb.Empty>}
 */
const methodInfo_OpenItemService_SendDO = new grpc.web.AbstractClientBase.MethodInfo(
  proto.dtccpb.Empty,
  /**
   * @param {!proto.dtccpb.SendDORequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.dtccpb.Empty.deserializeBinary
);


/**
 * @param {!proto.dtccpb.SendDORequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.dtccpb.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.dtccpb.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.dtccpb.OpenItemServiceClient.prototype.sendDO =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/dtccpb.OpenItemService/SendDO',
      request,
      metadata || {},
      methodDescriptor_OpenItemService_SendDO,
      callback);
};


/**
 * @param {!proto.dtccpb.SendDORequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.dtccpb.Empty>}
 *     A native promise that resolves to the response
 */
proto.dtccpb.OpenItemServicePromiseClient.prototype.sendDO =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/dtccpb.OpenItemService/SendDO',
      request,
      metadata || {},
      methodDescriptor_OpenItemService_SendDO);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.dtccpb.RecapRequest,
 *   !proto.dtccpb.Empty>}
 */
const methodDescriptor_OpenItemService_Recap = new grpc.web.MethodDescriptor(
  '/dtccpb.OpenItemService/Recap',
  grpc.web.MethodType.UNARY,
  proto.dtccpb.RecapRequest,
  proto.dtccpb.Empty,
  /**
   * @param {!proto.dtccpb.RecapRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.dtccpb.Empty.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.dtccpb.RecapRequest,
 *   !proto.dtccpb.Empty>}
 */
const methodInfo_OpenItemService_Recap = new grpc.web.AbstractClientBase.MethodInfo(
  proto.dtccpb.Empty,
  /**
   * @param {!proto.dtccpb.RecapRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.dtccpb.Empty.deserializeBinary
);


/**
 * @param {!proto.dtccpb.RecapRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.dtccpb.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.dtccpb.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.dtccpb.OpenItemServiceClient.prototype.recap =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/dtccpb.OpenItemService/Recap',
      request,
      metadata || {},
      methodDescriptor_OpenItemService_Recap,
      callback);
};


/**
 * @param {!proto.dtccpb.RecapRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.dtccpb.Empty>}
 *     A native promise that resolves to the response
 */
proto.dtccpb.OpenItemServicePromiseClient.prototype.recap =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/dtccpb.OpenItemService/Recap',
      request,
      metadata || {},
      methodDescriptor_OpenItemService_Recap);
};


module.exports = proto.dtccpb;

